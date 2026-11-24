---
title: Firecomms FR12DHIR、FR12DVIR、FR12DWIR 怎么选？12 MBd 反相接收器的安装与电平
date: 2026-11-24T17:53:00.000+08:00
description: Firecomms FR12DxIR 系列包含三款 DC–12 MBd RedLink 反相光纤接收器。本文依据原厂 Rev. P1
  规格书，说明安装方向、5 V 供电、输出电平，以及 POF 与 PCS 的峰值接收光功率条件。
draft: false
title_en: "Firecomms FR12DHIR, FR12DVIR, and FR12DWIR: Mounting and Output
  Levels for 12 MBd Links"
description_en: The Firecomms FR12DxIR series includes three DC–12 MBd RedLink
  inverting fiber optic receivers. Using the Rev. P1 datasheet, this guide
  covers mounting options, 5 V operation, output levels, and peak received
  optical power limits for POF and PCS.
body_en: >-
  The Firecomms FR12DxIR series consists of DC–12 MBd RedLink inverting fiber
  optic receivers. Choose the FR12DHIR for horizontal mounting, the FR12DVIR for
  vertical mounting, or the FR12DWIR for 30° tilted mounting. All three drive
  their output low for an optical high. For a new design or part replacement,
  check the PCB footprint, 5 V supply, downstream input rating, and received
  optical power.




  \## Which PCB footprint does each FR12DxIR part use?




  \- \*\*FR12DHIR, horizontal mount.\*\* See Rev. P1, page 6, Figure 5 for the PCB hole pattern and mechanical dimensions.


  \- \*\*FR12DVIR, vertical mount.\*\* See page 7, Figure 7 for the PCB hole pattern and mechanical dimensions.


  \- \*\*FR12DWIR, 30° tilted mount.\*\* See page 8, Figure 9 for the PCB hole pattern and mechanical dimensions.




  Page 1, Table 1 lists the full ordering codes. If the mounting orientation changes, check PCB holes, the panel opening, and plug insertion and removal clearance against the corresponding drawing. Page 2, Table 3 identifies pin 1 as data output Vo, pin 2 as GND, pin 3 as VCC, pin 4 as NC, and pins 5 and 8 as grounded retention pins.




  \## Can the inverting output connect to a 3.3 V MCU?




  Start with the MCU or FPGA input voltage rating and logic thresholds. Firecomms Rev. P1, page 5, Table 6 uses a 5 V ±5% test supply. All three receivers have a TTL-compatible push-pull CMOS output. At a high-level output current of up to 40 µA, the datasheet gives a high output range of VCC − 0.05 V to VCC. Use suitable level translation if the downstream input only accepts 3.3 V levels.




  With stable power and an optical input within specification, an optical high produces an electrical low, and an optical low produces an electrical high. If you pair the receiver with an FT12MxNR transmitter, verify end-to-end polarity with the actual external transmitter driver. Use a known pattern to check the idle level and active edges before testing protocol traffic.




  \## How do received optical power limits differ for POF and PCS?




  Rev. P1, page 5, Table 6 uses a 635–680 nm source with 5 ns optical rise and fall times. The received optical power figures are peak values.




  \- \*\*1 mm POF:\*\* Optical high ranges from −20 to 0 dBm. The optical low limit is −40 dBm.


  \- \*\*200 µm PCS:\*\* Optical high ranges from −22 to 0 dBm. The optical low limit is −42 dBm.




  Firecomms characterizes receiver pulse width distortion with 12 MBd NRZ PRBS7 and lists a range of −25 to +25 ns. On the prototype, check the remote pulse width and error performance using the actual transmitter, cable assembly, and data pattern. If only the first frame after power-up fails, check when Vo leaves its high-impedance state. Table 6 gives a typical wake-up delay of 40 µs from VCC crossing 2.75 V.




  \## Where can I find the datasheet or get selection support?




  \- \[Firecomms FR12DxIR manufacturer preliminary datasheet, Rev. P1](https://www.firecomms.com/contentFiles/technicalDocuments/FR12DxIR-Datasheet-Rev-P1.pdf)


  \- \[Firecomms FT12MxNR companion transmitter datasheet, Rev. P1](https://www.firecomms.com/contentFiles/technicalDocuments/FT12MxNR-Datasheet-Rev-P1.pdf)


  \- \[SIMACITY Firecomms fiber optic product portfolio](https://firecomms-cn.com/en/products.html)


  \- \[Contact SIMACITY about FR12DHIR, FR12DVIR, and FR12DWIR selection and logic-level compatibility](https://firecomms-cn.com/en/contact.html)[firecomms-fr12dxir-redlink-receiver-selection](firecomms-fr12dxir-redlink-receiver-selection)
---
Firecomms FR12DxIR 是一系列 DC–12 MBd RedLink 反相光纤接收器。水平安装选 FR12DHIR，垂直安装选 FR12DVIR，30° 倾斜安装选 FR12DWIR。三款在光输入为高状态时均输出低电平。设计或换料时，先确认 PCB 孔位，再检查 5 V 供电、后级输入耐压和接收光功率。



\## 三款 FR12DxIR 的安装方向和 PCB 孔位怎么查？



\- \*\*FR12DHIR，水平安装。\*\* PCB 孔位与机械尺寸见 Rev. P1 第 6 页图 5。

\- \*\*FR12DVIR，垂直安装。\*\* PCB 孔位与机械尺寸见第 7 页图 7。

\- \*\*FR12DWIR，30° 倾斜安装。\*\* PCB 孔位与机械尺寸见第 8 页图 9。



完整料号见 Rev. P1 第 1 页表 1。更换安装方向时，按对应机械图核对板孔、面板开口和插头插拔空间。第 2 页表 3 标明，1 脚为数据输出 Vo，2 脚为 GND，3 脚为 VCC，4 脚为 NC，5、8 脚为接地固定脚。



\## 反相输出能接 3.3 V MCU 吗？



先查 MCU 或 FPGA 输入脚的耐压和逻辑门限。FR12DxIR Rev. P1 第 5 页表 6 的测试供电为 5 V ±5%。三款均为 TTL 兼容的推挽 CMOS 输出，在高电平输出电流不超过 40 µA 的条件下，规格书给出的高电平范围是 VCC − 0.05 V 至 VCC。后级输入若只允许 3.3 V 电平，应选用合适的电平转换方案。



在供电稳定且光输入符合规格时，光高状态对应电低电平，光低状态对应电高电平。若搭配 FT12MxNR 发射器，应按实际外部驱动电路验证从主控发送端到远端接收端的整体极性。使用已知码型检查空闲电平和有效边沿，再验证协议数据。



\## POF 和 PCS 的接收光功率条件有什么区别？



Rev. P1 第 5 页表 6 使用 635–680 nm 的发射源，测试光信号的上升和下降时间均为 5 ns。表中的接收光功率为峰值。



\- \*\*1 mm POF：\*\* 光高状态为 −20 至 0 dBm，光低状态上限为 −40 dBm。

\- \*\*200 µm PCS：\*\* 光高状态为 −22 至 0 dBm，光低状态上限为 −42 dBm。



原厂用 12 MBd NRZ PRBS7 表征接收端脉宽失真，表中范围为 −25 至 +25 ns。样机测试时，用实际发射器、线束和码型检查远端脉宽及误码。若只有上电首帧异常，先看 Vo 何时退出高阻态。表 6 给出的典型唤醒延时为 40 µs，从 VCC 超过 2.75 V 起计。



\## 哪里可以查规格书或咨询选型？



\- \[Firecomms FR12DxIR 原厂预备版规格书 Rev. P1](https://www.firecomms.com/contentFiles/technicalDocuments/FR12DxIR-Datasheet-Rev-P1.pdf)

\- \[配套 Firecomms FT12MxNR 发射器原厂规格书 Rev. P1](https://www.firecomms.com/contentFiles/technicalDocuments/FT12MxNR-Datasheet-Rev-P1.pdf)

\- \[上海芯聚电子 Firecomms 光纤器件产品中心](https://firecomms-cn.com/products.html)

\- \[咨询 FR12DHIR、FR12DVIR、FR12DWIR 选型和电平匹配](https://firecomms-cn.com/contact.html)[firecomms-fr12dxir-redlink-receiver-selection](firecomms-fr12dxir-redlink-receiver-selection)
