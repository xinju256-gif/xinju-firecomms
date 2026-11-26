---
title: Firecomms FT10MHLR、FT10MVLR、FT10MWLR 怎么选？10 mA 下怎样核对 POF 链路余量
date: 2026-11-26T10:54:00.000+08:00
description: Firecomms FT10MxLR 是 DC–10 MBd 低电流 RedLink 光纤发射器系列。本文依据原厂 Rev. L
  规格书，对照三个安装方向和四个驱动电流下的耦合光功率，并说明如何核对旧板驱动和接收余量。
title_en: Firecomms FT10MHLR, FT10MVLR, and FT10MWLR — Is 10 mA Enough for Your POF Link?
description_en: The Firecomms FT10MxLR series offers low-current DC–10 MBd
  RedLink transmitters. Using the Rev. L datasheet, this guide compares mounting
  options and coupled optical power at four drive currents, then explains how to
  validate receiver margin and the existing driver.
body_en: >-
  Choose the Firecomms FT10MHLR for horizontal mounting, the FT10MVLR for
  vertical mounting, or the FT10MWLR for 30° tilted mounting. All three
  low-current FT10MxLR RedLink transmitters support DC–10 MBd. With 1 mm POF at
  10 mA DC forward current, the datasheet lists −3 dBm typical and −9 dBm
  minimum coupled optical power. Use the minimum value for an initial link
  budget, then verify the actual cable assembly and receiver.




  \## Where can I find the PCB footprint for each FT10MxLR model?




  \- \*\*FT10MHLR, horizontal mount.\*\* See Rev. L, page 6, Figure 6 for the PCB hole pattern.


  \- \*\*FT10MVLR, vertical mount.\*\* See page 7, Figure 8 for the PCB hole pattern.


  \- \*\*FT10MWLR, 30° tilted mount.\*\* See page 8, Figure 10 for the PCB hole pattern.




  Page 1, Table 1 lists the full ordering codes. When changing mounting orientation, check the PCB holes, panel opening, plug clearance, and cable bend radius against the relevant drawing.




  \## How much optical power does the transmitter couple at 3, 5, 10, and 30 mA?




  Rev. L, page 4, Table 6 measures coupled optical power over 0.5 m of POF with a 1 mm core and a numerical aperture of 0.5. The currents below are RCLED DC forward currents.




  \- \*\*3 mA:\*\* −8 dBm typical, −14 dBm minimum.


  \- \*\*5 mA:\*\* −5 dBm typical, −11 dBm minimum.


  \- \*\*10 mA:\*\* −3 dBm typical, −9 dBm minimum.


  \- \*\*30 mA:\*\* +2 dBm typical, −3 dBm minimum, +4 dBm maximum.




  Reducing the current from 30 mA to 10 mA lowers the listed typical coupled power by 5 dB. The 50 m reference on page 1, Table 2 assumes step-index POF and a Firecomms 10 MBd receiver, with distance subject to installation conditions. To assess 10 mA operation, subtract the worst-case link loss from the minimum coupled transmitter power and compare the result with receiver sensitivity. Check the upper received power limit on the lowest-loss link as well.




  \## What should I check when replacing an FT10MHNR with an FT10MHLR?




  Check the external driver first. FT10MxLR Rev. L, page 2, Figure 2 uses a 100 Ω series resistor in its 5 V SN75451 reference circuit. FT10MxNR Rev. G, page 2, Figure 2 uses 47 Ω and gives an on-state current of about 60 mA. If the existing board uses that circuit, adjust the driver and measure the actual current before qualifying the replacement.




  \- \*\*Confirm the pinout.\*\* Rev. L, page 2, Table 3 identifies pin 1 as RCLED anode TD+ and pin 2 as cathode TD−.


  \- \*\*Check the current limits.\*\* Rev. L, page 3, Table 5 lists 45 mA peak and 30 mA average under absolute maximum ratings. It also limits pulse width and average current when peak current exceeds 30 mA. Measure peak current, average current, and pulse width at the intended duty cycle, with margin for supply and temperature variation.


  \- \*\*Verify the remote waveform.\*\* The dynamic measurements in Rev. L, page 4, Table 6 use the Figure 2 circuit and 15 mA average forward current. After reducing drive current, use the intended data pattern to recheck pulse width and errors at the remote receiver before finalizing the operating point.




  \## Where can I find the datasheets or get selection support?




  \- \[Firecomms FT10MxLR low-current transmitter datasheet, Rev. L](https://www.firecomms.com/contentFiles/technicalDocuments/FT10MxLR-Datasheet-Rev-L.pdf)


  \- \[Firecomms FT10MxNR transmitter datasheet, Rev. G](https://www.firecomms.com/contentFiles/technicalDocuments/FT10MxNR-Datasheet-Rev-G.pdf)


  \- \[SIMACITY Firecomms fiber optic product portfolio](https://firecomms-cn.com/en/products.html)


  \- \[Contact SIMACITY about FT10MHLR, FT10MVLR, and FT10MWLR selection and link validation](https://firecomms-cn.com/en/contact.html)[firecomms-ft10mxlr-low-current-pof-link-budget](firecomms-ft10mxlr-low-current-pof-link-budget)
---
Firecomms FT10MxLR 低电流 RedLink 发射器按安装方向选型。水平安装选 FT10MHLR，垂直安装选 FT10MVLR，30° 倾斜安装选 FT10MWLR。三款均支持 DC–10 MBd。以 1 mm POF 为例，10 mA 正向直流电流下的耦合光功率为典型 −3 dBm、最小 −9 dBm。做链路预算时，可先用最小值估算，再用实际线束和接收器验证。



\## 三款 FT10MxLR 的 PCB 孔位怎么查？



\- \*\*FT10MHLR，水平安装。\*\* PCB 孔位见 Rev. L 第 6 页图 6。

\- \*\*FT10MVLR，垂直安装。\*\* PCB 孔位见第 7 页图 8。

\- \*\*FT10MWLR，30° 倾斜安装。\*\* PCB 孔位见第 8 页图 10。



完整订购料号见第 1 页表 1。跨安装方向换料时，按目标机械图核对 PCB 孔位、面板开口、插头插拔空间和线缆弯曲半径。



\## 3 mA、5 mA、10 mA 和 30 mA 分别有多少光功率？



Rev. L 第 4 页表 6 使用 0.5 m 长、1 mm 芯径、NA 0.5 的 POF 测量耦合光功率。下列电流均为 RCLED 正向直流电流。



\- \*\*3 mA：\*\* 典型 −8 dBm，最小 −14 dBm。

\- \*\*5 mA：\*\* 典型 −5 dBm，最小 −11 dBm。

\- \*\*10 mA：\*\* 典型 −3 dBm，最小 −9 dBm。

\- \*\*30 mA：\*\* 典型 +2 dBm，最小 −3 dBm，最大 +4 dBm。



从 30 mA 降到 10 mA，表中的典型耦合功率下降 5 dB。第 1 页表 2 给出的 50 m 参考距离以阶跃型 POF、配套 Firecomms 10 MBd 接收器及安装条件为前提。要判断 10 mA 是否够用，可用发射端最小耦合功率减去最不利链路损耗，再与接收器灵敏度比较。还应在最低损耗链路上核对接收光功率上限。



\## 从 FT10MHNR 换到 FT10MHLR，要重新核对什么？



先核对外部驱动。FT10MxLR Rev. L 第 2 页图 2 的 5 V、SN75451 参考电路使用 100 Ω 串联电阻。FT10MxNR Rev. G 第 2 页图 2 则使用 47 Ω，原厂给出的导通电流约为 60 mA。如果旧板仍采用这套驱动，应先调整电路并测量实际电流，再评估换料。



\- \*\*确认引脚。\*\* Rev. L 第 2 页表 3 标明，1 脚为 RCLED 阳极 TD+，2 脚为阴极 TD−。

\- \*\*核对电流边界。\*\* Rev. L 第 3 页表 5 将 45 mA 峰值和 30 mA 平均值列在绝对最大额定值中，并对峰值超过 30 mA 时的脉宽与平均电流设有限制。用实际占空比测量峰值、平均电流和脉宽，给供电与温度变化留出余量。

\- \*\*验证远端波形。\*\* Rev. L 第 4 页表 6 的动态测试采用图 2 电路和 15 mA 平均正向电流。调低电流后，用目标码型复测远端脉宽和误码，再确定工作点。



\## 哪里可以查规格书或咨询选型？



\- \[Firecomms FT10MxLR 低电流发射器规格书 Rev. L](https://www.firecomms.com/contentFiles/technicalDocuments/FT10MxLR-Datasheet-Rev-L.pdf)

\- \[Firecomms FT10MxNR 发射器规格书 Rev. G](https://www.firecomms.com/contentFiles/technicalDocuments/FT10MxNR-Datasheet-Rev-G.pdf)

\- \[上海芯聚电子 Firecomms 光纤器件产品中心](https://firecomms-cn.com/products.html)

\- \[咨询 FT10MHLR、FT10MVLR、FT10MWLR 选型及链路验证](https://firecomms-cn.com/contact.html)[firecomms-ft10mxlr-low-current-pof-link-budget](firecomms-ft10mxlr-low-current-pof-link-budget)
