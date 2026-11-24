---
title: Firecomms FR50DxxR 六款光纤接收器怎么选？FR50DHNR 极性与短链路 CRC 排查
date: 2026-11-24T17:46:00.000+08:00
description: Firecomms FR50DxxR 是一系列 DC–50 MBd RedLink 光纤接收器。本文依据 Rev. P1
  预备版规格书，对照 FR50DHNR 等六款型号的安装方向、输出极性和接收功率条件，并给出短链路 CRC 报错时的测量方法。
draft: false
title_en: "Firecomms FR50DxxR Receiver Selection: FR50DHNR Polarity and
  Short-Link CRC Checks"
description_en: The Firecomms FR50DxxR series includes six DC–50 MBd RedLink
  fiber optic receivers. Using the Rev. P1 preliminary datasheet, this guide
  maps part numbers to mounting orientations and output polarities, then
  explains what to measure when a short POF link reports CRC errors.
body_en: >-
  Choose a Firecomms FR50DxxR fiber optic receiver by mounting orientation and
  output polarity. Use the FR50DHNR for horizontal mounting when an optical high
  should produce an electrical high. Use the FR50DHIR when the same optical
  input should produce an electrical low. If a short link reports CRC errors
  while a longer link works, compare peak received optical power, output pulse
  width, and CRC error counts on the same board.




  \## Which FR50DxxR part numbers match each mounting orientation and polarity?




  \- \*\*Horizontal mount:\*\* FR50DHNR is non-inverting and FR50DHIR is inverting. See Rev. P1, page 7, Figure 7 for the PCB hole pattern.


  \- \*\*Vertical mount:\*\* FR50DVNR is non-inverting and FR50DVIR is inverting. See page 8, Figure 9 for the PCB hole pattern.


  \- \*\*30° tilted mount:\*\* FR50DWNR is non-inverting and FR50DWIR is inverting. See page 9, Figure 11 for the PCB hole pattern.




  Rev. P1, page 1, Table 1 lists all six ordering codes. When changing mounting orientation, check the PCB holes, panel opening, and plug clearance. Table 3 on page 2 identifies pin 1 as receiver data output, pin 2 as GND, and pin 3 as VCC. Figures 3 and 5 on pages 3 and 4 show the steady-state polarity.




  \## Why can a short link report CRC errors while a longer link works?




  In the FR50DHNR case documented by SIMACITY, the short link reported CRC errors while the longer link communicated normally. Compare received optical power and the electrical output waveform under both conditions. To determine whether high optical input contributed, measure the power and check how the waveform changes with it. \[Read the FR50DHNR short-link CRC case study](https://firecomms-cn.com/en/articles/a5b72ed712b1569c/)




  \- \*\*Check peak power for the actual fiber type.\*\* Rev. P1, page 6, Table 6 lists an optical high peak-power range of −22 to +2 dBm and an optical low limit of −40 dBm for 1 mm POF. For 200 µm PCS, the corresponding figures are −24 to −1 dBm and −42 dBm. Firecomms used a 635–680 nm source with 5 ns optical rise and fall times.


  \- \*\*Keep the transmitter and test pattern the same.\*\* Record received optical power, output pulse width, and CRC error counts on the short and long links. If the instrument reports average power, Table 6 states that peak power is about 3 dB higher for 50% duty-cycle data.


  \- \*\*Include the first pulse in the test.\*\* Table 6 gives a separate pulse width distortion (PWD) range of −10 to +10 ns for the first three received pulses. Firecomms used a minimum optical input pulse width of 20 ns for this characterization. For a burst-mode link, check the receiver output with the intended idle interval and shortest pulse.




  \## What changes when moving from FR50MxxR to FR50DxxR?




  For the FR50DxxR, Rev. P1, page 6, Table 6 specifies ±5% tolerance on nominal 3.3 V or 5 V supplies and a startup delay of 0.5 ms typical and 2 ms maximum. The FR50MxxR Rev. J datasheet lists ±10% supply tolerance and a typical startup delay of 40 µs on pages 1 and 6. If the existing board sends a frame immediately after power-up, measure receiver supply voltage, valid output, and first-frame timing to verify the existing firmware delay.




  \## Where can I find the datasheets or get selection support?




  \- \[Firecomms FR50DxxR preliminary datasheet, Rev. P1, hosted by SIMACITY](https://firecomms-cn.com/assets/pdf/fr50dxxr-rev-p1.pdf)


  \- \[Firecomms FR50MxxR manufacturer datasheet, Rev. J](https://www.firecomms.com/contentFiles/technicalDocuments/FR50MxxR-Datasheet-Rev-J.pdf)


  \- \[Contact SIMACITY about FR50DHNR selection, samples, and short- and long-link testing](https://firecomms-cn.com/en/contact.html)[firecomms-fr50dxxr-redlink-receiver-selection](firecomms-fr50dxxr-redlink-receiver-selection)
---
Firecomms FR50DxxR 光纤接收器按安装方向和输出极性选型。FR50DHNR 适合水平安装且光高状态对应电高电平的设计。若同样水平安装，但光高状态应输出低电平，则选 FR50DHIR。遇到短链路 CRC 报错、长链路正常时，可在同一块板上对照测量接收峰值光功率、输出脉宽和 CRC 错误计数。



\## FR50DxxR 六款型号的安装方向和极性怎么对应？



\- \*\*水平安装\*\*：FR50DHNR 为非反相，FR50DHIR 为反相。PCB 孔位见 Rev. P1 第 7 页图 7。

\- \*\*垂直安装\*\*：FR50DVNR 为非反相，FR50DVIR 为反相。PCB 孔位见第 8 页图 9。

\- \*\*30° 倾斜安装\*\*：FR50DWNR 为非反相，FR50DWIR 为反相。PCB 孔位见第 9 页图 11。



完整订购料号见 Rev. P1 第 1 页表 1。跨安装方向换料时，应核对 PCB 孔位、面板开口和插头净空。第 2 页表 3 标明，1 脚为接收数据输出，2 脚为 GND，3 脚为 VCC。稳态极性波形见第 3 页图 3 和第 4 页图 5。



\## 为什么短链路报 CRC 错，长链路却正常？



在上海芯聚电子记录的 FR50DHNR 选型案例中，短链路出现 CRC 错误，长链路通信正常。这个现象提示应比较两种接线条件下的接收光功率和电输出波形。要确认是否涉及强光输入，还需要实测功率并检查波形是否随光功率变化。\[查看 FR50DHNR 短链路 CRC 案例](https://firecomms-cn.com/articles/a5b72ed712b1569c/)



\- \*\*按光纤类型核对峰值功率。\*\* Rev. P1 第 6 页表 6 给出，1 mm POF 的光高状态峰值功率为 −22 至 +2 dBm，光低状态功率上限为 −40 dBm。200 µm PCS 对应的光高状态峰值功率为 −24 至 −1 dBm，光低状态功率上限为 −42 dBm。原厂使用 635–680 nm 发射源，测试光信号的上升和下降时间均为 5 ns。

\- \*\*保持发射端和测试码型一致。\*\* 记录短链路与长链路的接收光功率、输出脉宽和 CRC 错误计数。若功率仪表显示平均值，表 6 给出的换算条件是 50% 占空比下峰值功率约比平均功率高 3 dB。

\- \*\*把首脉冲纳入验证。\*\* 表 6 对第 1 至第 3 个接收脉冲单列了 −10 至 +10 ns 的脉宽失真（PWD），表征使用的最小光输入脉宽为 20 ns。突发链路应按实际空闲间隔和最短脉宽检查接收输出。



\## 从 FR50MxxR 换到 FR50DxxR，要重新核对什么？



FR50DxxR 的 Rev. P1 第 6 页表 6 规定，标称 3.3 V 或 5 V 供电的容差为 ±5%，上电唤醒延时为典型 0.5 ms、最大 2 ms。FR50MxxR Rev. J 第 1 页和第 6 页表 6 对应列出 ±10% 供电容差及典型 40 µs 唤醒延时。如果原板在上电后立即发帧，应实测接收器供电、有效输出和第一帧的相对时序，再验证原有固件等待时间。



\## 哪里可以查规格书或咨询选型？



\- \[Firecomms FR50DxxR 预备版规格书 Rev. P1（上海芯聚站内镜像）](https://firecomms-cn.com/assets/pdf/fr50dxxr-rev-p1.pdf)

\- \[Firecomms FR50MxxR 原厂规格书 Rev. J](https://www.firecomms.com/contentFiles/technicalDocuments/FR50MxxR-Datasheet-Rev-J.pdf)

\- \[咨询 FR50DHNR 等型号的选型、样品及长短链路验证](https://firecomms-cn.com/contact.html)[firecomms-fr50dxxr-redlink-receiver-selection](firecomms-fr50dxxr-redlink-receiver-selection)
