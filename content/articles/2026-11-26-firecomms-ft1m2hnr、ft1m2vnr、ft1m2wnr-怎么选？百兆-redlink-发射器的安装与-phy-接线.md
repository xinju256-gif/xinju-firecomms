---
title: Firecomms FR1M2HNR、FR1M2VNR、FR1M2WNR 怎么选？百兆接收器的安装与差分端接
date: 2026-11-26T10:47:00.000+08:00
description: Firecomms FR1M2xNR 系列包含三款百兆 RedLink 光纤接收器。本文依据原厂 Rev. A
  规格书，说明三种安装方向、3.3 V 供电、内部 100 Ω 差分端接，以及 1 mm POF 的接收光功率验证条件。
title_en: "Firecomms FR1M2HNR, FR1M2VNR, and FR1M2WNR: Mounting and Differential
  Termination"
description_en: The Firecomms FR1M2xNR series includes three Fast Ethernet
  RedLink receivers. Using the Rev. A datasheet, this guide covers mounting
  options, 3.3 V operation, internal 100 Ω differential termination, and
  received optical power checks for 1 mm POF.
body_en: >-
  Choose the Firecomms FR1M2HNR for horizontal mounting, the FR1M2VNR for
  vertical mounting, or the FR1M2WNR for 30° tilted mounting. All three FR1M2xNR
  Fast Ethernet RedLink receivers provide non-inverting differential outputs and
  use a nominal 3.3 V supply. When connecting a 100BASE-FX PHY, check the
  receiver’s internal termination, then verify coupling, bias, and termination
  at the PHY input.




  \## Where can I find the PCB footprint for each FR1M2xNR receiver?




  \- \*\*FR1M2HNR, horizontal mount.\*\* See Rev. A, page 8, Figure 8 for the PCB hole pattern.


  \- \*\*FR1M2VNR, vertical mount.\*\* See page 9, Figure 10 for the PCB hole pattern.


  \- \*\*FR1M2WNR, 30° tilted mount.\*\* See page 10, Figure 12 for the PCB hole pattern.




  Page 1, Table 1 lists the full ordering codes. When changing mounting orientation, check the PCB holes, panel opening, and clearance for inserting or removing the fiber plug against the relevant drawing.




  \## Do RD+ and RD− need an external 100 Ω resistor?




  Rev. A, page 2, Table 3 identifies pin 1 as RD+, pin 2 as RD−, pin 3 as GND, and pin 4 as VCC. The note to Figure 2 on the same page specifies an internal 100 Ω resistor across RD+ and RD− at the receiver output. Review the receiver output and PHY input separately when deciding on external termination. Check whether the PHY already has internal termination, then select the AC coupling, bias, and external termination for that interface.




  \- \*\*Differential output.\*\* Rev. A, page 7, Table 6 lists a typical common-mode voltage of 1.25 V and a typical differential swing of 800 mV, with a specified range of 650–900 mV. The swing measurement uses AC-coupled 50 Ω termination on each line or a 100 Ω terminated differential probe.


  \- \*\*Supply.\*\* The specified operating range is 3.0–3.6 V. If the original receiver runs from 5 V, change the supply or select a receiver compatible with that rail. Figure 2 recommends at least 100 nF of decoupling close to pin 4.




  \## What should I measure if light reaches the receiver but the Fast Ethernet link stays down?




  100BASE-FX carries 100 Mbps of data at 125 MBd after 4B/5B encoding. Rev. A, page 7, Table 6 lists a receiver signaling range of 10–250 MBd. Test the assembled system with the intended PHY and data pattern.




  1. \*\*Check received optical power.\*\* For 1 mm POF, Table 6 lists −24 dBm receiver sensitivity and −2 dBm maximum allowed received power. The default test uses 250 Mbps PRBS7, with light coupled through at least 0.5 m of step-index POF with a 1 mm core and 0.5 NA. For 200 µm PCS, verify link margin with the actual fiber and transmitter.


  2. \*\*Check the differential output.\*\* Probe RD+ and RD− with suitable instrumentation, then verify receive swing and bias at the PHY input. Check link status or error performance to confirm communication.


  3. \*\*Test standby recovery separately.\*\* Table 6 lists a maximum receiver wake-up time of 500 µs from sleep. If errors cluster in the first traffic after standby, capture the return of the optical signal, the valid differential output, and PHY link establishment together.




  \## Where can I find the datasheets or get design support?




  \- \[Firecomms FR1M2xNR receiver datasheet, Rev. A](https://www.firecomms.com/contentFiles/technicalDocuments/FR1M2xNR-Datasheet-Rev-A.pdf)


  \- \[Firecomms FT1M2xNR companion transmitter datasheet, Rev. A](https://www.firecomms.com/contentFiles/technicalDocuments/FT1M2xNR-Datasheet-Rev-A.pdf)


  \- \[SIMACITY Firecomms fiber optic product portfolio](https://firecomms-cn.com/en/products.html)


  \- \[Contact SIMACITY about FR1M2HNR, FR1M2VNR, and FR1M2WNR selection and PHY interfacing](https://firecomms-cn.com/en/contact.html)[firecomms-fr1m2xnr-fast-ethernet-receiver-selection](firecomms-fr1m2xnr-fast-ethernet-receiver-selection)
---
Firecomms FR1M2xNR 百兆 RedLink 光纤接收器按安装方向选型。水平安装选 FR1M2HNR，垂直安装选 FR1M2VNR，30° 倾斜安装选 FR1M2WNR。三款均采用非反相差分输出，标称供电为 3.3 V。接入 100BASE-FX PHY 时，应先确认接收器内部端接，再核对 PHY 侧的耦合、偏置和端接。



\## 三款 FR1M2xNR 接收器的 PCB 孔位怎么查？



\- \*\*FR1M2HNR，水平安装。\*\* PCB 孔位见 Rev. A 第 8 页图 8。

\- \*\*FR1M2VNR，垂直安装。\*\* PCB 孔位见第 9 页图 10。

\- \*\*FR1M2WNR，30° 倾斜安装。\*\* PCB 孔位见第 10 页图 12。



完整订购料号见第 1 页表 1。跨安装方向换料时，按对应机械图核对 PCB 孔位、面板开口及光纤插头的插拔空间。



\## RD+ 与 RD− 还需要外接 100 Ω 吗？



Rev. A 第 2 页表 3 标明，1 脚为 RD+，2 脚为 RD−，3 脚为 GND，4 脚为 VCC。同页图 2 注释明确说明，接收器输出级已在 RD+ 与 RD− 之间内置 100 Ω 电阻。确定外部端接时，应区分接收器输出侧和 PHY 输入侧。先查 PHY 是否已有内部端接，再按目标接口选择交流耦合、偏置和外部端接网络。



\- \*\*差分输出。\*\* Rev. A 第 7 页表 6 给出的典型共模电压为 1.25 V，典型差分摆幅为 800 mV，规格范围为 650–900 mV。摆幅测试使用每线交流耦合 50 Ω 端接或 100 Ω 端接差分探头。

\- \*\*供电。\*\* 规格工作范围为 3.0–3.6 V。旧板若为原接收器提供 5 V，须先调整供电或选用供电兼容的器件。图 2 建议在 4 脚附近放置至少 100 nF 去耦电容。



\## 百兆链路有光却不通，要测什么？



100BASE-FX 的 100 Mbps 数据经 4B/5B 编码后对应 125 MBd。Rev. A 第 7 页表 6 列出的接收器符号率范围为 10–250 MBd。整机测试应使用项目实际的 PHY 和码型。



1. \*\*先查接收光功率。\*\* 表 6 对 1 mm POF 列出的接收灵敏度指标为 −24 dBm，最大允许接收光功率为 −2 dBm。表中默认使用 250 Mbps PRBS7 测试，光功率经至少 0.5 m、1 mm 芯径、NA 0.5 的阶跃型 POF 耦入。若项目使用 200 µm PCS，应按实际光纤和发射器确认链路余量。

2. \*\*再看差分输出。\*\* 在 RD+、RD− 处用合适的探测方式检查波形，再确认 PHY 端的接收摆幅和偏置。用实际链路状态或误码结果判断通信是否建立。

3. \*\*单独验证待机恢复。\*\* 表 6 给出的接收器从睡眠状态唤醒时间最大为 500 µs。若异常集中在恢复后的首批数据，应同步记录光信号恢复、差分输出有效和 PHY 链路建立的时序。



\## 哪里可以查规格书或咨询选型？



\- \[Firecomms FR1M2xNR 接收器原厂规格书 Rev. A](https://www.firecomms.com/contentFiles/technicalDocuments/FR1M2xNR-Datasheet-Rev-A.pdf)

\- \[Firecomms FT1M2xNR 配套发射器规格书 Rev. A](https://www.firecomms.com/contentFiles/technicalDocuments/FT1M2xNR-Datasheet-Rev-A.pdf)

\- \[上海芯聚电子 Firecomms 光纤器件产品中心](https://firecomms-cn.com/products.html)

\- \[咨询 FR1M2HNR、FR1M2VNR、FR1M2WNR 选型及 PHY 接口](https://firecomms-cn.com/contact.html)[firecomms-fr1m2xnr-fast-ethernet-receiver-selection](firecomms-fr1m2xnr-fast-ethernet-receiver-selection)
