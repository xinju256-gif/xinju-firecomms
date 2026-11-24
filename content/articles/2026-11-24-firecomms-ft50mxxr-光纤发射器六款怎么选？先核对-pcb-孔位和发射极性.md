---
title: Firecomms FT50MxxR 光纤发射器六款怎么选？先核对 PCB 孔位和发射极性
date: 2026-11-24T14:18:00.000+08:00
description: Firecomms FT50MxxR 是一系列 DC–50 MBd RedLink 光纤发射器。本文按原厂 Rev. G 规格书对照
  FT50MHNR 等六款料号的安装方向和发射极性，并说明换料时怎样核对 PCB 孔位、供电和脉宽失真。
draft: false
title_en: "Firecomms FT50MxxR 50 MBd RedLink Transmitters: Which Footprint and
  Polarity Fit Your Board?"
description_en: The Firecomms FT50MxxR series includes six DC–50 MBd RedLink
  fiber optic transmitters. Use the Rev. G datasheet to compare mounting and
  polarity from FT50MHNR through FT50MWIR, then check the PCB footprint, supply,
  and pulse width distortion before swapping parts.
body_en: >-
  Choose a Firecomms FT50MxxR fiber optic transmitter in two steps. First,
  select a horizontal, vertical, or 30° tilted package to suit the cable entry.
  Then select non-inverting or inverting operation to match the logic required
  at the receiver and host. For example, choose the FT50MHNR for horizontal
  mounting when a high input should turn the light on. Choose the FT50MHIR for
  the same mounting orientation when a low input should turn the light on.




  \## Which FT50MxxR part number matches each mounting orientation and polarity?




  \- \*\*Horizontal mount:\*\* FT50MHNR is non-inverting and FT50MHIR is inverting. See Rev. G, page 5, Figure 4 for the PCB hole pattern.


  \- \*\*Vertical mount:\*\* FT50MVNR is non-inverting and FT50MVIR is inverting. See page 6, Figure 6 for the PCB hole pattern and optional mounting screw hole.


  \- \*\*30° tilted mount:\*\* FT50MWNR is non-inverting and FT50MWIR is inverting. See page 7, Figure 8 for the PCB hole pattern.




  The full ordering codes are on page 1, Table 1 of Rev. G. When changing mounting orientation, use the mechanical drawing for the target device to check PCB holes, panel clearance, plug insertion and removal space, and fiber bend radius.




  \## Will swapping the FT50MHNR and FT50MHIR invert the received data?




  With stable power and input levels within specification, a high electrical input produces the optical high state on the non-inverting FT50MHNR. A low electrical input produces the optical high state on the inverting FT50MHIR. Rev. G, page 3, Figure 3 shows the inverting transmitter waveform.




  If either the transmitter or the receiver inverts the signal, the remote electrical output is inverted relative to the local electrical input. If both stages invert, the original polarity is restored. During repair or replacement, apply a known pattern and measure the transmitter input and receiver output. Check the protocol idle state and the first valid transition.




  \## What else should I verify on a 50 MBd link?




  \- \*\*Signaling rate and supply.\*\* The series supports DC–50 MBd and uses an RCLED with a typical emission centroid of 650 nm and an integrated driver. The nominal supply options are 3.3 V and 5 V with ±10% tolerance. The operating temperature range is −40 to +85 °C, and the input is TTL-compatible CMOS. See Rev. G, page 1 and page 4, Table 6.


  \- \*\*Pinout and decoupling.\*\* Rev. G, page 2, Table 3 and Figure 2 identify pin 1 as VCC, pin 3 as GND, pin 4 as data input D+, and pins 5 and 8 as grounded retention pins. The reference circuit places a 100 nF decoupling capacitor close to each device’s VCC pin.


  \- \*\*Transmitter pulse width distortion.\*\* Page 4, Table 6 lists transmitter PWD from −3 to +3 ns. The stated typical test conditions are 25 °C, a 3.3 V supply, and 50 Mbps PRBS data. For burst traffic or links sensitive to minimum pulse width, measure the first and subsequent pulses at the remote receiver output to verify end-to-end timing margin.




  \## Where can I find the datasheet or get selection support?




  \- \[Firecomms FT50MxxR manufacturer datasheet, Rev. G](https://www.firecomms.com/contentFiles/technicalDocuments/FT50MxxR-Datasheet-Rev-G.pdf)


  \- \[SIMACITY Firecomms fiber optic product portfolio](https://firecomms-cn.com/en/products.html)


  \- \[Contact SIMACITY about FT50MxxR selection, samples, and replacement testing](https://firecomms-cn.com/en/contact.html)[firecomms-ft50mxxr-redlink-transmitter-selection](firecomms-ft50mxxr-redlink-transmitter-selection)
---
Firecomms FT50MxxR 光纤发射器选型可以分两步。先按插头进线方向选择水平、垂直或 30° 倾斜封装，再按接收端及主控需要的逻辑选择非反相或反相版本。例如，水平安装且需要高电平输入时发光，选 FT50MHNR。安装方向相同、需要低电平输入时发光，选 FT50MHIR。



\## 六款 FT50MxxR 料号分别对应哪种安装方向和极性？



\- \*\*水平安装\*\*：FT50MHNR 为非反相，FT50MHIR 为反相。PCB 孔位见 Rev. G 第 5 页图 4。

\- \*\*垂直安装\*\*：FT50MVNR 为非反相，FT50MVIR 为反相。PCB 孔位及可选固定螺钉孔见第 6 页图 6。

\- \*\*30° 倾斜安装\*\*：FT50MWNR 为非反相，FT50MWIR 为反相。PCB 孔位见第 7 页图 8。



原厂订购料号见 Rev. G 第 1 页表 1。跨安装方向换料时，按目标型号的机械图核对板孔、面板开口、插头插拔空间和光纤弯曲半径。



\## FT50MHNR 和 FT50MHIR 换用后，接收数据会反相吗？



在供电稳定、输入电平符合规格时，非反相的 FT50MHNR 在电输入为高时输出光高状态，反相的 FT50MHIR 在电输入为低时输出光高状态。反相发射波形见 Rev. G 第 3 页图 3。



如果链路只有发射端或接收端其中一级反相，远端电输出与本端电输入反相。如果两级都反相，远端电输出恢复为同相。维修或换料时，可用已知码型同时检查发射端数据输入和接收端电输出，再核对协议空闲态和首个有效边沿。



\## 50 MBd 链路还要核对哪些参数？



\- \*\*速率与供电。\*\* 系列支持 DC–50 MBd，采用典型中心波长 650 nm 的 RCLED，驱动器集成在器件内。标称供电为 3.3 V 或 5 V，电源容差 ±10%，工作温度为 −40 至 +85 °C。输入为 TTL 兼容 CMOS。参见 Rev. G 第 1 页及第 4 页表 6。

\- \*\*引脚与去耦。\*\* 第 2 页表 3 和图 2 标明，1 脚为 VCC，3 脚为 GND，4 脚为数据输入 D+，5 脚和 8 脚为接地固定脚。参考电路在每颗器件的 VCC 附近放置 100 nF 去耦电容。

\- \*\*发射端脉宽失真。\*\* 第 4 页表 6 给出的发射端 PWD 范围为 −3 至 +3 ns。表中典型测试条件为 25 °C、3.3 V 供电及 50 Mbps PRBS。若链路传输突发数据或对最短脉宽敏感，还应在对端接收输出测量首脉冲和后续脉冲，确认整条链路的时序余量。



\## 哪里可以查原厂规格书或咨询选型？



\- \[Firecomms FT50MxxR 原厂规格书 Rev. G](https://www.firecomms.com/contentFiles/technicalDocuments/FT50MxxR-Datasheet-Rev-G.pdf)

\- \[上海芯聚电子 Firecomms 光纤器件产品中心](https://firecomms-cn.com/products.html)

\- \[咨询 FT50MHNR 等六款发射器的选型、样品与换料验证](https://firecomms-cn.com/contact.html)[firecomms-ft50mxxr-redlink-transmitter-selection](firecomms-ft50mxxr-redlink-transmitter-selection)
