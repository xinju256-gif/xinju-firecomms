"""Isolated publisher checks: no service, account or live website is modified."""
import os, pathlib, subprocess, tempfile, shutil
source=pathlib.Path(__file__).parent/'aliyun-auto/sync.sh'
with tempfile.TemporaryDirectory(prefix='firecomms-sync-check-') as tmp:
 r=pathlib.Path(tmp);bin=r/'bin';bin.mkdir()
 for name in ['site','state','work','backups']:(r/name).mkdir()
 (r/'site/index.html').write_text('old website')
 def executable(name,text):
  p=bin/name;p.write_text('#!/usr/bin/env python3\n'+text);p.chmod(0o755);return str(p)
 executable('nginx','import sys;sys.exit(0)\n')
 executable('runuser',r'''import os,pathlib,sys
r=pathlib.Path(os.environ['CHECK_ROOT'])
if os.environ.get('BUILD_FAIL'):sys.exit(7)
if os.environ.get('NOCHANGE'):sys.exit(0)
d=r/'work/repo/dist'
import shutil
shutil.rmtree(d,ignore_errors=True)
for lang in ['', 'en/']:
 for file in ['index.html','contact.html','about.html','articles/index.html']:
  p=d/(lang+file);p.parent.mkdir(parents=True,exist_ok=True)
  p.write_text('firecomms@simacity.com.cn <a href="/'+lang+'articles/">Articles</a> '+os.environ.get('VERSION','one'))
if os.environ.get('BAD_OUTPUT'):(d/'en/contact.html').unlink()
(r/'work/ready').write_text(os.environ.get('CHECK_SHA','a'*40))
''')
 executable('rsync',r'''import pathlib,sys,shutil
src,dst=map(pathlib.Path,sys.argv[-2:])
for p in dst.iterdir():
 if p.is_dir():shutil.rmtree(p)
 else:p.unlink()
for p in src.iterdir():
 if p.is_dir():shutil.copytree(p,dst/p.name)
 else:shutil.copy2(p,dst/p.name)
''')
 executable('curl',r'''import os,pathlib,sys,shutil
if os.environ.get('HEALTH_FAIL'):sys.exit(22)
args=sys.argv[1:];url=next(a for a in args if a.startswith('https://'))
path=url.split('firecomms-cn.com',1)[1]
out=args[args.index('-o')+1]
shutil.copyfile(pathlib.Path(os.environ['CHECK_ROOT'])/'site'/path.lstrip('/'),out)
''')
 s=source.read_text()
 for old,new in {
 '/usr/share/nginx/html/firecomms-cn-v7':str(r/'site'),
 '/var/lib/firecomms-auto/state':str(r/'state'),
 '/var/lib/firecomms-auto/work':str(r/'work'),
 '/var/backups/firecomms':str(r/'backups'),
 '/run/firecomms-auto.lock':str(r/'lock'),
 '/usr/sbin/nginx':str(bin/'nginx'),
 'export PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin':'export PATH='+str(bin)+':'+os.environ['PATH']
 }.items():s=s.replace(old,new)
 script=r/'sync.sh';script.write_text(s)
 def run(**env):
  e=os.environ.copy();e.update(CHECK_ROOT=str(r));e.update(env)
  return subprocess.run(['bash',str(script)],env=e,text=True,capture_output=True)
 def must(result,success):
  assert (result.returncode==0)==success,result.stdout+result.stderr
 result=run();must(result,True)
 assert (r/'state/commit').read_text().strip()=='a'*40
 assert 'one' in (r/'site/index.html').read_text()
 snapshots=list((r/'backups').glob('auto-*'));assert len(snapshots)==1
 assert (snapshots[0]/'site/index.html').read_text()=='old website'
 before=(r/'site/index.html').read_text()
 must(run(NOCHANGE='1'),True);assert len(list((r/'backups').glob('auto-*')))==1
 must(run(BUILD_FAIL='1'),False);assert (r/'site/index.html').read_text()==before
 must(run(BAD_OUTPUT='1'),False);assert (r/'site/index.html').read_text()==before
 must(run(HEALTH_FAIL='1',VERSION='two',CHECK_SHA='b'*40),False)
 assert (r/'site/index.html').read_text()==before
 assert (r/'state/commit').read_text().strip()=='a'*40
 assert (r/'state/last-error').exists()
 print('PASS: publish, unchanged skip, build failure isolation, output validation, failed-health rollback, commit preservation')
