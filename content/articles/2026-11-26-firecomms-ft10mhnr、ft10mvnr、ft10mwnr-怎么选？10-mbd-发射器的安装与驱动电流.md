---
title: Firecomms FT10MHNR、FT10MVNR、FT10MWNR 怎么选？10 MBd 发射器的安装与驱动电流
date: 2026-11-26T10:52:00.000+08:00
description: Firecomms FT10MxNR 是一系列 DC–10 MBd RedLink 塑料光纤发射器。本文依据原厂 Rev. G
  规格书说明三款型号的安装方向、RCLED 外部驱动，并用 20 mA 和 60 mA 的耦合光功率数据说明如何验证驱动电流。
draft: false
title_en: "Firecomms FT10MHNR, FT10MVNR, and FT10MWNR: Mounting and Drive
  Current for 10 MBd Links"
description_en: The Firecomms FT10MxNR series includes three DC–10 MBd RedLink
  plastic optical fiber transmitters. Using the Rev. G datasheet, this guide
  covers mounting, external RCLED drive, and how to use coupled optical power at
  20 mA and 60 mA to validate the drive current.
body_en: >-
  Choose the Firecomms FT10MHNR for horizontal mounting, the FT10MVNR for
  vertical mounting, or the FT10MWNR for 30° tilted mounting. All three FT10MxNR
  10 MBd RedLink transmitters use an external circuit to drive the 650 nm RCLED.
  Once you select the package, use the Firecomms reference circuit as a starting
  point and verify the drive current on the intended optical link.




  \## Where can I find the PCB footprint for each FT10MxNR part?




  \- \*\*FT10MHNR, horizontal mount.\*\* See Rev. G, page 7, Figure 8 for the PCB hole pattern.


  \- \*\*FT10MVNR, vertical mount.\*\* See page 8, Figure 10 for the PCB hole pattern.


  \- \*\*FT10MWNR, 30° tilted mount.\*\* See page 9, Figure 12 for the PCB hole pattern.




  Page 1, Table 1 lists all three parts as non-inverting. Before changing orientation, check the PCB holes, panel opening, and plug clearance against the correct drawing. Verify the fiber bend radius in the assembled unit.




  \## How do I drive the FT10MHNR, and what current does 47 Ω produce?




  Rev. G, page 2, Table 3 identifies pin 1 as RCLED anode TD+, pin 2 as cathode TD−, pins 3 and 4 as NC, and pins 5 and 8 as grounded retention pins. Figure 2 on the same page shows a reference driver with a 5 V supply and an SN75451. Firecomms gives an on-state current of approximately 60 mA with a 47 Ω series resistor at R2. Increasing R2 reduces the current. Measure the actual current on the prototype and check how it varies with supply voltage and temperature.




  Note 4 to Table 6 on page 4 describes the Figure 2 test circuit as inverting. Apply known high and low levels on the assembled board to verify how the controller signal maps to light output and to the electrical output at the remote receiver.




  \## How do I choose between 20 mA and 60 mA?




  Rev. G, page 4, Table 6 lists the following typical coupled optical powers. The POF test uses 0.5 m of fiber with a 1 mm core and a numerical aperture of 0.5. The PCS test uses 0.5 m of fiber with a 200 µm core.




  \- \*\*1 mm POF at 20 mA DC forward current:\*\* −9.0 dBm.


  \- \*\*1 mm POF at 60 mA DC forward current:\*\* −3.5 dBm.


  \- \*\*200 µm PCS at 60 mA DC forward current:\*\* −12.5 dBm.




  Reducing the current from 60 mA to 20 mA lowers the listed typical coupled power by 5.5 dB in the 1 mm POF test. To reduce power consumption, verify receive margin on the highest-loss link and check the receiver’s upper optical power limit on the lowest-loss link. Then measure the waveform and error performance at the intended signaling rate, duty cycle, and data pattern. Table 6 on page 4 lists pulse width distortion of −4 to +8 ns with the Figure 2 test circuit and 30 mA average forward current.




  \## Where can I find the datasheet or get selection support?




  \- \[Firecomms FT10MxNR manufacturer datasheet, Rev. G](https://www.firecomms.com/contentFiles/technicalDocuments/FT10MxNR-Datasheet-Rev-G.pdf)


  \- \[Firecomms EVAL-FT10MHNR evaluation board user guide, Rev. A](https://www.firecomms.com/contentFiles/contentblockaccordions/EVAL-FT10MHNR_Mini_Evaluation_Board_User_Guide_Revision_A.pdf)


  \- \[SIMACITY Firecomms fiber optic product portfolio](https://firecomms-cn.com/en/products.html)


  \- \[Contact SIMACITY about FT10MHNR, FT10MVNR, and FT10MWNR selection and driver design](https://firecomms-cn.com/en/contact.html)[firecomms-ft10mxnr-redlink-transmitter-drive-current](firecomms-ft10mxnr-redlink-transmitter-drive-current)
---
Firecomms FT10MxNR 10 MBd RedLink 光纤发射器按安装方向选型：水平选 FT10MHNR，垂直选 FT10MVNR，30° 倾斜选 FT10MWNR。三款都通过外部电路给 650 nm RCLED 提供驱动电流。选好封装后，可从原厂参考电路出发，用实际链路验证驱动电流是否合适。



\## 三款 FT10MxNR 的安装方向和 PCB 孔位怎么查？



\- \*\*FT10MHNR，水平安装。\*\* PCB 孔位见 Rev. G 第 7 页图 8。

\- \*\*FT10MVNR，垂直安装。\*\* PCB 孔位见第 8 页图 10。

\- \*\*FT10MWNR，30° 倾斜安装。\*\* PCB 孔位见第 9 页图 12。



第 1 页表 1 将三款均列为非反相型。更换安装方向前，应按目标型号的机械图核对 PCB 孔位、面板开口和插头插拔空间，并确认装机后的光纤弯曲半径。



\## FT10MHNR 的外部驱动怎么接？47 Ω 对应多大电流？



Rev. G 第 2 页表 3 标明，1 脚为 RCLED 阳极 TD+，2 脚为阴极 TD−，3、4 脚为 NC，5、8 脚为接地固定脚。同页图 2 给出采用 5 V 电源和 SN75451 的参考驱动。串联电阻 R2 为 47 Ω 时，原厂给出的导通电流约为 60 mA。增大 R2 可以降低电流，样机上应测量实际电流并核对电源与温度变化的影响。



第 4 页表 6 注 4 将图 2 的测试电路标为反相。上板时可用已知高低电平检查主控信号、发光状态和对端接收输出之间的对应关系。



\## 20 mA 和 60 mA 怎么选？



Rev. G 第 4 页表 6 给出以下典型耦合光功率。POF 测试使用 0.5 m 长、1 mm 芯径、NA 0.5 的光纤。PCS 测试使用 0.5 m 长、200 µm 芯径的光纤。



\- \*\*1 mm POF，20 mA 正向直流电流\*\*：−9.0 dBm。

\- \*\*1 mm POF，60 mA 正向直流电流\*\*：−3.5 dBm。

\- \*\*200 µm PCS，60 mA 正向直流电流\*\*：−12.5 dBm。



在这组 1 mm POF 测试中，从 60 mA 降到 20 mA，典型耦合光功率下降 5.5 dB。若希望降低功耗，可先在最高损耗链路上验证接收余量，再在最低损耗链路上检查接收光功率是否超出对端允许范围。最后用目标速率、占空比和实际码型验证波形和误码。第 4 页表 6 的脉宽失真范围为 −4 至 +8 ns，对应图 2 测试电路和 30 mA 平均正向电流。



\## 哪里可以查规格书或咨询选型？



\- \[Firecomms FT10MxNR 原厂规格书 Rev. G](https://www.firecomms.com/contentFiles/technicalDocuments/FT10MxNR-Datasheet-Rev-G.pdf)

\- \[Firecomms EVAL-FT10MHNR 评估板用户指南 Rev. A](https://www.firecomms.com/contentFiles/contentblockaccordions/EVAL-FT10MHNR_Mini_Evaluation_Board_User_Guide_Revision_A.pdf)

\- \[上海芯聚电子 Firecomms 光纤器件产品中心](https://firecomms-cn.com/products.html)

\- \[咨询 FT10MHNR、FT10MVNR、FT10MWNR 选型和驱动电路](https://firecomms-cn.com/contact.html)[firecomms-ft10mxnr-redlink-transmitter-drive-current](firecomms-ft10mxnr-redlink-transmitter-drive-current)
