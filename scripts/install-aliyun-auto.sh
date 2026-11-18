#!/usr/bin/env bash
set -Eeuo pipefail
if [ "$(id -u)" != 0 ]; then exec sudo /bin/bash "$0" "$@"; fi
SOURCE=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
for CMD in git node npm rsync curl flock runuser systemctl timeout; do command -v "$CMD" >/dev/null; done
test -d /usr/share/nginx/html/firecomms-cn-v7
/usr/sbin/nginx -t
install -d -m 755 /var/lib/firecomms-auto /usr/local/libexec
if ! id firecommsbuild >/dev/null 2>&1; then
  useradd --system --home-dir /var/lib/firecomms-auto/work --shell /sbin/nologin firecommsbuild
fi
install -d -m 755 -o firecommsbuild -g "$(id -gn firecommsbuild)" /var/lib/firecomms-auto/work
install -d -m 700 /var/lib/firecomms-auto/state /var/backups/firecomms
# Stop a prior run before replacing the publisher scripts.
systemctl stop firecomms-auto.timer 2>/dev/null || true
systemctl stop firecomms-auto.service 2>/dev/null || true
install -o root -g root -m 755 "$SOURCE/aliyun-auto/build.sh" /usr/local/libexec/firecomms-auto-build
install -o root -g root -m 755 "$SOURCE/aliyun-auto/sync.sh" /usr/local/libexec/firecomms-auto-sync
cat > /etc/systemd/system/firecomms-auto.service <<'UNIT'
[Unit]
Description=Publish Firecomms GitHub content to Alibaba Cloud
Wants=network-online.target
After=network-online.target nginx.service

[Service]
Type=oneshot
ExecStart=/usr/local/libexec/firecomms-auto-sync
TimeoutStartSec=10min
TimeoutStopSec=60s
UMask=0022
Nice=10
Environment=GIT_TERMINAL_PROMPT=0
UNIT
cat > /etc/systemd/system/firecomms-auto.timer <<'UNIT'
[Unit]
Description=Check Firecomms content updates every two minutes

[Timer]
OnBootSec=2min
OnUnitInactiveSec=2min
AccuracySec=10s
Unit=firecomms-auto.service

[Install]
WantedBy=timers.target
UNIT
systemctl daemon-reload
# First deployment must pass before enabling the recurring timer.
if ! systemctl start firecomms-auto.service; then
  journalctl -u firecomms-auto.service -n 60 --no-pager
  echo '首次同步失败，自动定时器尚未开启。请将以上结果截图发给我。'
  exit 1
fi
systemctl enable --now firecomms-auto.timer
systemctl is-active --quiet firecomms-auto.timer
journalctl -u firecomms-auto.service -n 15 --no-pager
systemctl list-timers firecomms-auto.timer --no-pager
echo '========== 自动同步已开启 =========='
echo '以后在 Decap 点击发布，通常约2至5分钟后网站更新；网络或构建异常时会保留原网站并在后续重试。'
echo '中文文章：https://firecomms-cn.com/articles/'
echo '英文文章：https://firecomms-cn.com/en/articles/'
echo '日志：sudo journalctl -u firecomms-auto.service -n 50 --no-pager'
echo '暂停：sudo systemctl disable --now firecomms-auto.timer'
