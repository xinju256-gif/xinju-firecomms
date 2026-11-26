---
title: Firecomms FT05MHNR 能传 50 米吗？FT05MxNR 三款发射器的安装、驱动与接收器搭配
date: 2026-11-26T11:20:00.000+08:00
description: Firecomms FT05MHNR、FT05MVNR 和 FT05MWNR 是三款 DC–5 MBd RedLink
  发射器。本文依据原厂 Rev. J 规格书，说明安装方向、51 Ω 外部驱动电路、30 m 与 50 m 的条件差异，以及搭配 FR05DHIR
  时的光功率与极性验证。
draft: false
title_en: Can the Firecomms FT05MHNR Reach 50 m? FT05MxNR Mounting, Drive, and
  Receiver Pairing
description_en: The Firecomms FT05MHNR, FT05MVNR, and FT05MWNR are DC–5 MBd
  RedLink transmitters. This guide uses the Rev. J datasheet to explain
  mounting, the 51 Ω external drive circuit, the 30 m and 50 m distance
  conditions, and what to verify with an FR05DHIR receiver.
body_en: >-
  The Firecomms FT05MxNR series consists of DC–5 MBd RedLink plastic optical
  fiber transmitters. Choose the FT05MHNR for horizontal mounting, the FT05MVNR
  for vertical mounting, or the FT05MWNR for 30° tilted mounting. If the project
  requires 50 m, verify that distance with the intended fiber, receiver, and
  operating conditions. Firecomms Rev. J, page 1, Table 2 lists 50 m over
  step-index POF under typical operating conditions and 30 m under worst-case
  conditions.




  \## Where can I find the PCB footprint for each transmitter?




  \- \*\*FT05MHNR, horizontal mount.\*\* See Rev. J, page 6, Figure 9 for the PCB hole pattern and mechanical dimensions.


  \- \*\*FT05MVNR, vertical mount.\*\* See page 7, Figure 11 for the PCB hole pattern and mechanical dimensions.


  \- \*\*FT05MWNR, 30° tilted mount.\*\* See page 8, Figure 13 for the PCB hole pattern and mechanical dimensions.




  Page 1, Table 1 lists all three parts as non-inverting. Before changing orientation, check the PCB holes, panel opening, and plug clearance against the relevant drawing. Verify the fiber bend radius in the assembled unit.




  \## How do I drive the FT05MHNR RCLED?




  Rev. J, page 2, Table 3 identifies pin 1 as RCLED anode TD+, pin 2 as cathode TD−, pins 3 and 4 as unconnected, and pins 5 and 8 as grounded retention pins. Figure 2 on the same page shows an external reference driver using a 5 V supply and an SN75451. With a 51 Ω series resistor at R1, Firecomms gives an RCLED on-state current of approximately 60 mA.




  Increasing R1 reduces drive current. After changing it, measure the current, coupled optical power, and remote waveform. Rev. J, page 4, Table 6 lists coupled optical power of −16 to −7 dBm, with a typical value of −9.5 dBm at 60 mA DC forward current. The test uses 0.5 m of POF with a 1 mm core and 0.5 NA. The same table specifies 30 mA average forward current for the 5 MBd dynamic test. Keep on-state current, DC test current, and pattern-dependent average current separate when checking the driver.




  \## How do I verify distance and polarity with an FR05DHIR receiver?




  The FR05DHIR is a horizontal 5 MBd inverting receiver. FR05DxIR Rev. E, page 3, Figure 3 shows that an optical high produces an electrical low. For 1 mm, 0.5 NA POF, Table 6 on page 4 specifies an optical high peak input range of −22 to +2 dBm and an optical low limit of −40 dBm.




  \- \*\*Estimate optical margin.\*\* Subtract the actual link loss from the minimum FT05MxNR coupled power and compare the result with the receiver’s optical high lower limit. Use a consistent power measurement basis. The receiver specifies peak power. If your meter reports average power, interpret the reading using the actual duty cycle.


  \- \*\*Test both long and short links.\*\* Check receiver margin on the longest link and the upper receive power limit on the shortest. Measure the receive waveform and count errors using the intended plugs, routing, and data pattern.


  \- \*\*Verify end-to-end logic.\*\* Observe the controller’s transmit signal and the FR05DHIR output together. Confirm that the receive idle level and start edge meet system requirements.




  \## Where can I find the datasheets or get selection support?




  \- \[Firecomms FT05MxNR transmitter datasheet, Rev. J](https://www.firecomms.com/contentFiles/technicalDocuments/FT05MxNR-Datasheet-Rev-J.pdf)


  \- \[Firecomms FR05DxIR inverting receiver datasheet, Rev. E](https://www.firecomms.com/contentFiles/technicalDocuments/FR05DxIR-Datasheet-Rev-E.pdf)


  \- \[SIMACITY Firecomms fiber optic product portfolio](https://firecomms-cn.com/en/products.html)


  \- \[Contact SIMACITY about FT05MxNR drive, FR05DHIR pairing, and link validation](https://firecomms-cn.com/en/contact.html)[firecomms-ft05mxnr-5mbd-pof-transmitter-selection](firecomms-ft05mxnr-5mbd-pof-transmitter-selection)
---
Firecomms FT05MxNR 是一系列 DC–5 MBd RedLink 塑料光纤发射器。水平安装选 FT05MHNR，垂直安装选 FT05MVNR，30° 倾斜安装选 FT05MWNR。若项目要求传输 50 m，应按实际光纤、接收器和运行条件验证。原厂 Rev. J 第 1 页表 2 将 50 m 列为阶跃型 POF 的典型工作距离，将 30 m 列为最不利条件下的距离。



\## 三款发射器的 PCB 孔位怎么查？



\- \*\*FT05MHNR，水平安装。\*\* PCB 孔位和机械尺寸见 Rev. J 第 6 页图 9。

\- \*\*FT05MVNR，垂直安装。\*\* PCB 孔位和机械尺寸见第 7 页图 11。

\- \*\*FT05MWNR，30° 倾斜安装。\*\* PCB 孔位和机械尺寸见第 8 页图 13。



第 1 页表 1 将三款均列为非反相型。更换安装方向前，要按对应机械图核对 PCB 孔位、面板开口和插拔净空，并检查装机后的光纤弯曲半径。



\## FT05MHNR 的 RCLED 怎么驱动？



Rev. J 第 2 页表 3 标明，1 脚为 RCLED 阳极 TD+，2 脚为阴极 TD−，3、4 脚未连接，5、8 脚为接地固定脚。同页图 2 给出采用 5 V 电源和 SN75451 的外部参考驱动。串联电阻 R1 为 51 Ω 时，原厂给出的 RCLED 导通电流约为 60 mA。



增大 R1 可降低驱动电流。调整后应测量实际电流、耦合光功率和远端波形。Rev. J 第 4 页表 6 在 60 mA 正向直流电流下，通过 0.5 m 长、1 mm 芯径、NA 0.5 的 POF 测得耦合光功率为 −16 至 −7 dBm，典型值为 −9.5 dBm。该表的 5 MBd 动态测试使用 30 mA 平均正向电流。核对电路时，要区分导通电流、直流测试电流和实际码型下的平均电流。



\## 搭配 FR05DHIR 时，怎么验证距离和接收极性？



FR05DHIR 是水平安装的 5 MBd 反相接收器。根据 FR05DxIR Rev. E 第 3 页图 3，光高状态对应电低电平。第 4 页表 6 对 1 mm、NA 0.5 的 POF 给出光高状态峰值接收功率 −22 至 +2 dBm，以及光低状态功率上限 −40 dBm。



\- \*\*先估算光功率余量。\*\* 用 FT05MxNR 的最小耦合光功率减去实际链路损耗，再与接收器的光高状态下限比较。两项功率须采用一致的测量口径。接收器规格按峰值定义，使用平均功率仪表时应结合实际占空比解读。

\- \*\*再测试长短两种链路。\*\* 在项目最长链路上检查接收余量，在最短链路上核对接收光功率上限。用实际插头、布线路径和目标码型测量接收波形并统计错误。

\- \*\*确认整条链路的逻辑。\*\* 同时观察主控发送信号和 FR05DHIR 输出，检查接收空闲电平与起始边沿是否符合系统要求。



\## 哪里可以查规格书或咨询选型？



\- \[Firecomms FT05MxNR 发射器原厂规格书 Rev. J](https://www.firecomms.com/contentFiles/technicalDocuments/FT05MxNR-Datasheet-Rev-J.pdf)

\- \[Firecomms FR05DxIR 反相接收器原厂规格书 Rev. E](https://www.firecomms.com/contentFiles/technicalDocuments/FR05DxIR-Datasheet-Rev-E.pdf)

\- \[上海芯聚电子 Firecomms 光纤器件产品中心](https://firecomms-cn.com/products.html)

\- \[咨询 FT05MxNR 驱动、FR05DHIR 配套和链路验证](https://firecomms-cn.com/contact.html)[firecomms-ft05mxnr-5mbd-pof-transmitter-selection](firecomms-ft05mxnr-5mbd-pof-transmitter-selection)
