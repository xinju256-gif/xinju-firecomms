---
title: Firecomms FT10DxxR 六款怎么选？10 MBd 集成驱动发射器换料先查引脚与极性
date: 2026-11-26T11:00:00.000+08:00
description: Firecomms FT10DxxR 是 DC–10 MBd 集成驱动 RedLink 光纤发射器系列。本文依据原厂 Rev. E
  规格书，对照六款型号的封装和极性，并说明如何核对 TTL 输入门限及 FT10MHNR 换料时的引脚差异。
draft: false
title_en: Firecomms FT10DxxR 10 MBd Transmitters — Pinout and Polarity Checks
  Before a Swap
description_en: The Firecomms FT10DxxR series includes six DC–10 MBd RedLink
  fiber optic transmitters with integrated drivers. Using the Rev. E datasheet,
  this guide covers package orientation, polarity, TTL thresholds, and the
  pinout changes required when moving from the FT10MHNR.
body_en: >-
  The Firecomms FT10DxxR series consists of DC–10 MBd RedLink fiber optic
  transmitters with integrated RCLED drivers. For horizontal mounting, choose
  the non-inverting FT10DHNR when a high input should turn the light on. Choose
  the inverting FT10DHIR when a low input should turn the light on. If the
  existing board uses an FT10MHNR, check how the power and data signals are
  routed before selecting a replacement.




  \## Which FT10DxxR part number matches each mounting orientation and polarity?




  \- \*\*Horizontal mount:\*\* FT10DHNR is non-inverting and FT10DHIR is inverting. See Rev. E, page 5, Figure 4 for the PCB hole pattern.


  \- \*\*Vertical mount:\*\* FT10DVNR is non-inverting and FT10DVIR is inverting. See page 6, Figure 6 for the PCB hole pattern.


  \- \*\*30° tilted mount:\*\* FT10DWNR is non-inverting and FT10DWIR is inverting. See page 7, Figure 8 for the PCB hole pattern.




  Page 1, Table 1 lists all six ordering codes. When changing mounting orientation, check the PCB holes, panel opening, and fiber plug clearance against the appropriate drawing. When changing transmitter polarity, apply a known pattern and verify the remote receiver polarity and protocol idle level. See page 3, Figure 3 for the inverting transmitter waveform.




  \## Can a 3.3 V GPIO drive the FT10DxxR?




  Check the GPIO output levels under the actual load. Rev. E, page 4, Table 6 specifies a maximum low input of 0.8 V and a minimum high input of 2.0 V. The upper limit of the high input range is VCC + 0.25 V. Compare the controller output levels with the transmitter’s actual supply voltage before deciding whether level translation is needed.




  The series supports nominal 3.3 V or 5 V supplies with ±10% tolerance and operates from −40 to +85 °C. The typical test conditions in Table 6 on page 4 are 25 °C, a 3.3 V supply, and 10 Mbps PRBS data. The table lists transmitter pulse width distortion (PWD) from −5 to +5 ns. For applications sensitive to minimum pulse width, verify timing margin at the remote receiver output using the intended data pattern.




  \## Can the FT10DHNR replace the FT10MHNR on an existing board?




  A board built to the original reference circuit requires routing changes. Both parts are horizontal RedLink transmitters, with different electrical pin assignments.




  \- \*\*FT10DHNR, integrated driver.\*\* Rev. E, page 2, Table 3 identifies pin 1 as VCC, pin 3 as GND, and pin 4 as the TTL data input. Position 2 has no pin. Figure 2 on the same page shows the supply filter and decoupling circuit.


  \- \*\*FT10MHNR, external driver.\*\* FT10MxNR Rev. G, page 2, Table 3 identifies pins 1 and 2 as the RCLED anode and cathode. Pins 3 and 4 are unconnected. Figure 2 uses an external driver and a series resistor to control RCLED current.




  Compare both pinouts with the existing PCB pads and traces. Update the circuit for the FT10DHNR power and data inputs, then verify light output, the receive waveform, and error performance with the intended fiber, remote receiver, and data pattern.




  \## Where can I find the datasheets or get selection support?




  \- \[Firecomms FT10DxxR integrated-driver transmitter datasheet, Rev. E](https://www.firecomms.com/contentFiles/technicalDocuments/FT10DxxR-Datasheet-Rev-E.pdf)


  \- \[Firecomms FT10MxNR externally driven transmitter datasheet, Rev. G](https://www.firecomms.com/contentFiles/technicalDocuments/FT10MxNR-Datasheet-Rev-G.pdf)


  \- \[SIMACITY Firecomms fiber optic product portfolio](https://firecomms-cn.com/en/products.html)


  \- \[Contact SIMACITY about FT10DxxR package selection, polarity, and board-level replacement](https://firecomms-cn.com/en/contact.html)[firecomms-ft10dxxr-integrated-driver-transmitter-selection](firecomms-ft10dxxr-integrated-driver-transmitter-selection)
---
Firecomms FT10DxxR 是一系列内置 RCLED 驱动的 DC–10 MBd RedLink 光纤发射器。水平安装且需要高电平输入时发光，选非反相的 FT10DHNR。同样水平安装、需要低电平输入时发光，选反相的 FT10DHIR。如果旧板使用 FT10MHNR，应先检查电源和数据输入的走线，再确定换料方案。



\## 六款 FT10DxxR 如何对应安装方向和发射极性？



\- \*\*水平安装\*\*：FT10DHNR 为非反相，FT10DHIR 为反相。PCB 孔位见 Rev. E 第 5 页图 4。

\- \*\*垂直安装\*\*：FT10DVNR 为非反相，FT10DVIR 为反相。PCB 孔位见第 6 页图 6。

\- \*\*30° 倾斜安装\*\*：FT10DWNR 为非反相，FT10DWIR 为反相。PCB 孔位见第 7 页图 8。



完整料号见 Rev. E 第 1 页表 1。改变安装方向时，应按对应机械图核对 PCB 孔位、面板开口和光纤插头的插拔空间。改变发射极性时，应用已知码型检查对端接收极性和协议空闲电平。反相发射波形见第 3 页图 3。



\## FT10DxxR 能接 3.3 V GPIO 吗？



要看 GPIO 在实际负载下的输出电平。Rev. E 第 4 页表 6 给出的低电平输入上限为 0.8 V，高电平输入下限为 2.0 V，高电平输入范围的上限为 VCC + 0.25 V。核对主控输出电平及发射器实际供电后，再确定是否需要电平转换。



该系列支持标称 3.3 V 或 5 V 供电，容差 ±10%，工作温度为 −40 至 +85 °C。第 4 页表 6 的典型测试条件为 25 °C、3.3 V 供电和 10 Mbps PRBS。表中发射端脉宽失真（PWD）范围为 −5 至 +5 ns。若应用对最短脉宽敏感，应使用实际码型在远端接收输出处验证时序余量。



\## FT10DHNR 能直接替换 FT10MHNR 吗？



按原参考电路设计的旧板需要调整走线。两款虽然都属于水平安装的 RedLink 发射器，电气引脚定义不同。



\- \*\*FT10DHNR，集成驱动。\*\* Rev. E 第 2 页表 3 标明，1 脚为 VCC，3 脚为 GND，4 脚为 TTL 数据输入，2 号位置没有引脚。同页图 2 给出供电滤波与去耦参考电路。

\- \*\*FT10MHNR，外部驱动。\*\* FT10MxNR Rev. G 第 2 页表 3 标明，1 脚和 2 脚分别为 RCLED 阳极和阴极，3 脚和 4 脚未连接。同页图 2 通过外部驱动和串联电阻控制 RCLED 电流。



换料时，先对照两份引脚图核查旧板焊盘与走线，再按 FT10DHNR 的供电和数据输入方式修改电路。样机应使用实际光纤、对端接收器和目标码型，验证发光状态、接收波形及误码。



\## 哪里可以查规格书或咨询选型？



\- \[Firecomms FT10DxxR 集成驱动发射器规格书 Rev. E](https://www.firecomms.com/contentFiles/technicalDocuments/FT10DxxR-Datasheet-Rev-E.pdf)

\- \[Firecomms FT10MxNR 外部驱动发射器规格书 Rev. G](https://www.firecomms.com/contentFiles/technicalDocuments/FT10MxNR-Datasheet-Rev-G.pdf)

\- \[上海芯聚电子 Firecomms 光纤器件产品中心](https://firecomms-cn.com/products.html)

\- \[咨询 FT10DxxR 封装、极性和旧板换料](https://firecomms-cn.com/contact.html)[firecomms-ft10dxxr-integrated-driver-transmitter-selection](firecomms-ft10dxxr-integrated-driver-transmitter-selection)
