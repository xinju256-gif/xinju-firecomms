---
title: Firecomms FR10DxxR 六款怎么选？10 MBd 接收器换料先查极性、引脚和输出电平
date: 2026-11-26T11:15:00.000+08:00
description: Firecomms FR10DxxR 系列包含六款 DC–10 MBd RedLink 光纤接收器。本文依据原厂 Rev. H
  规格书，对照安装方向、反相与非反相输出、4 脚接法，并说明怎样验证 3.3 V 主控接口和 POF、PCS 的接收光功率。
draft: false
title_en: Firecomms FR10DxxR 10 MBd Receivers — Polarity, Pinout, and Output Levels
description_en: The Firecomms FR10DxxR series includes six DC–10 MBd RedLink
  receivers. Using the Rev. H datasheet, this guide covers mounting orientation,
  output polarity, pin 4 routing, 3.3 V MCU compatibility, and peak receive
  power limits for POF and PCS.
body_en: >-
  The Firecomms FR10DxxR series consists of DC–10 MBd RedLink fiber optic
  receivers. For horizontal mounting, choose the non-inverting FR10DHNR when an
  optical high should produce an electrical high. Choose the inverting FR10DHIR
  when the same optical input should produce an electrical low. Before replacing
  a receiver on an existing board, check pin 4 routing, receiver supply voltage,
  and the controller input voltage rating.




  \## Which FR10DxxR part matches each mounting orientation and polarity?




  \- \*\*Horizontal mount:\*\* FR10DHNR is non-inverting and FR10DHIR is inverting. See Rev. H, page 7, Figure 7 for the PCB hole pattern.


  \- \*\*Vertical mount:\*\* FR10DVNR is non-inverting and FR10DVIR is inverting. See page 8, Figure 9 for the PCB hole pattern.


  \- \*\*30° tilted mount:\*\* FR10DWNR is non-inverting and FR10DWIR is inverting. See page 9, Figure 11 for the PCB hole pattern.




  Page 1, Table 1 lists all six ordering codes. Figures 3 and 5 on pages 3 and 4 show the output polarity. When changing polarity, use a known pattern to check the remote electrical output, protocol idle level, and active edges. When changing mounting orientation, check the PCB holes, panel opening, and plug clearance against the relevant drawing.




  \## How should pin 4 be connected, and can a 5 V receiver drive a 3.3 V MCU?




  Rev. H, page 2, Table 3 identifies pin 1 as receiver output Vo, pin 2 as GND, and pin 3 as VCC. Pin 4 is internally unconnected. Firecomms permits an external connection between pins 4 and 1 for compatibility with existing board layouts. For other layouts, Firecomms recommends grounding pin 4 as shown in Figure 2. When repairing a board, inspect its schematic or traces to confirm which pad carries the output.




  All three mounting options support nominal 3.3 V or 5 V supplies with ±10% tolerance and operate from −40 to +85 °C. The receiver has a TTL-compatible push-pull CMOS output. Rev. H, page 6, Table 6 specifies a high output of VCC − 0.05 V to VCC at a high-level output current of up to 40 µA. If the receiver runs at 5 V, check the controller’s input rating and logic thresholds. Use suitable level translation if the downstream input only accepts 3.3 V levels.




  \## What should I measure when light reaches the receiver but data errors persist?




  Check peak received optical power first, then measure Vo with the intended data pattern. Rev. H, page 6, Table 6 gives separate conditions for the two fiber types.




  \- \*\*1 mm POF:\*\* Optical high peak power ranges from −22 to +2 dBm. The optical low limit is −40 dBm.


  \- \*\*200 µm PCS:\*\* Optical high peak power ranges from −24 to 0 dBm. The optical low limit is −42 dBm.


  \- \*\*Burst data:\*\* Table 6 lists a general pulse width distortion (PWD) range of −10 to +10 ns and a first-pulse range of −10 to +12 ns. If errors cluster in the first frame after a long idle period, reproduce the actual idle interval and shortest pulse width, then check the first active pulse.




  Firecomms used a 635–680 nm source to characterize receiver performance. Table 6 states that peak optical power is about 3 dB above average power at 50% duty cycle. Confirm which quantity the optical instrument reports. If failures occur only in the first frame after power-up, capture VCC and Vo together. Table 6 gives a typical wake-up delay of 40 µs from VCC crossing 2.75 V, with the output held in high impedance before it becomes valid.




  \## Where can I find the datasheets or get selection support?




  \- \[Firecomms FR10DxxR receiver datasheet, Rev. H](https://www.firecomms.com/contentFiles/technicalDocuments/FR10DxxR-Datasheet-Rev-H.pdf)


  \- \[Firecomms FT10DxxR integrated-driver transmitter datasheet, Rev. E](https://www.firecomms.com/contentFiles/technicalDocuments/FT10DxxR-Datasheet-Rev-E.pdf)


  \- \[SIMACITY Firecomms fiber optic product portfolio](https://firecomms-cn.com/en/products.html)


  \- \[Contact SIMACITY about FR10DxxR selection, samples, and board-level replacement](https://firecomms-cn.com/en/contact.html)[firecomms-fr10dxxr-redlink-receiver-polarity-pinout](firecomms-fr10dxxr-redlink-receiver-polarity-pinout)
---
Firecomms FR10DxxR 是一系列 DC–10 MBd RedLink 光纤接收器。水平安装且需要光高状态对应电高电平时，选非反相的 FR10DHNR。若同样水平安装，但光高状态应对应电低电平，则选反相的 FR10DHIR。旧板换料时，还要核对 4 脚走线、接收器供电和主控输入耐压。



\## 六款 FR10DxxR 分别对应哪种安装方向和极性？



\- \*\*水平安装：\*\* FR10DHNR 为非反相，FR10DHIR 为反相。PCB 孔位见 Rev. H 第 7 页图 7。

\- \*\*垂直安装：\*\* FR10DVNR 为非反相，FR10DVIR 为反相。PCB 孔位见第 8 页图 9。

\- \*\*30° 倾斜安装：\*\* FR10DWNR 为非反相，FR10DWIR 为反相。PCB 孔位见第 9 页图 11。



完整订购料号见 Rev. H 第 1 页表 1，输出极性波形见第 3 页图 3 和第 4 页图 5。更换极性版本时，用已知码型检查对端电输出、协议空闲电平和有效边沿。改变安装方向时，按对应机械图核对板孔、面板开口和插头净空。



\## FR10DxxR 的 4 脚怎么接？5 V 供电能接 3.3 V MCU 吗？



Rev. H 第 2 页表 3 标明，1 脚为接收数据输出 Vo，2 脚为 GND，3 脚为 VCC，4 脚内部未连接。为兼容旧板布局，原厂允许在板上将 4 脚外接到 1 脚。其他情况下，原厂建议按图 2 将 4 脚接地。维修时可先查旧板原理图或走线，确认输出实际接到了哪个焊盘。



三款安装方向均支持标称 3.3 V 或 5 V 供电，容差 ±10%，工作温度为 −40 至 +85 °C。输出为 TTL 兼容推挽 CMOS。Rev. H 第 6 页表 6 给出的高电平范围为 VCC − 0.05 V 至 VCC，对应的高电平输出电流上限为 40 µA。若接收器使用 5 V 供电，应查主控输入耐压和逻辑门限。后级只接受 3.3 V 输入时，应采用合适的电平转换方案。



\## 有光但仍报错，要测接收功率还是首脉冲？



先核对接收端的峰值光功率，再用实际码型测量 Vo。Rev. H 第 6 页表 6 给出了两种光纤的条件。



\- \*\*1 mm POF：\*\* 光高状态峰值功率为 −22 至 +2 dBm，光低状态功率上限为 −40 dBm。

\- \*\*200 µm PCS：\*\* 光高状态峰值功率为 −24 至 0 dBm，光低状态功率上限为 −42 dBm。

\- \*\*突发数据：\*\* 表 6 分别列出常规脉宽失真（PWD）−10 至 +10 ns，以及首脉冲 PWD −10 至 +12 ns。若错误集中在长空闲后的第一帧，可用实际空闲间隔和最短脉宽复现，再观察首个有效脉冲。



第 6 页表 6 使用 635–680 nm 发射源表征接收性能，并注明在 50% 占空比条件下，峰值光功率约比平均功率高 3 dB。应先确认仪表的读数口径。若异常只发生在上电后的首帧，还应同时观察 VCC 和 Vo。表 6 给出的典型唤醒延时为 40 µs，从 VCC 超过 2.75 V 起计，唤醒前输出处于高阻态。



\## 哪里可以查规格书或咨询选型？



\- \[Firecomms FR10DxxR 接收器原厂规格书 Rev. H](https://www.firecomms.com/contentFiles/technicalDocuments/FR10DxxR-Datasheet-Rev-H.pdf)

\- \[Firecomms FT10DxxR 集成驱动发射器规格书 Rev. E](https://www.firecomms.com/contentFiles/technicalDocuments/FT10DxxR-Datasheet-Rev-E.pdf)

\- \[上海芯聚电子 Firecomms 光纤器件产品中心](https://firecomms-cn.com/products.html)

\- \[咨询 FR10DxxR 接收器选型、样品和旧板换料](https://firecomms-cn.com/contact.html)[firecomms-fr10dxxr-redlink-receiver-polarity-pinout](firecomms-fr10dxxr-redlink-receiver-polarity-pinout)
