---
title: Firecomms FT1M2HAR 能跑 125 MBd 吗？RCLED 外部驱动与 POF/PCS 光功率验证
date: 2026-11-24T17:56:00.000+08:00
description: Firecomms FT1M2HAR 是一款水平安装的 650 nm RedLink 光纤发射器，达到 125 MBd
  取决于外部驱动电路。本文依据原厂 Rev. A 规格书说明引脚、参考电路和不同光纤的耦合光功率，以及样机验证方法。
title_en: Can the Firecomms FT1M2HAR Run at 125 MBd? RCLED Drive and Optical Power Checks
description_en: The Firecomms FT1M2HAR is a horizontal 650 nm RedLink fiber
  optic transmitter. Reaching 125 MBd depends on the external driver. This guide
  uses the Rev. A datasheet to explain the pinout, reference circuit, coupled
  optical power for POF and PCS, and prototype tests.
body_en: >-
  The Firecomms FT1M2HAR can support optical links up to 125 MBd with a
  dedicated external driver capable of that signaling rate. It is a horizontal
  650 nm RedLink fiber optic transmitter. The board-level driver controls the
  light output through the RCLED anode and cathode. Firecomms Rev. A, page 1,
  Table 2 and page 5, Table 6 identify the signaling rate as driver-dependent.




  \## How do I connect the FT1M2HAR? Can a GPIO drive it directly?




  Select an external RCLED driver for the target rate and use the controller logic to control the driver stage. Rev. A, page 2, Table 3 identifies pin 1 as the RCLED anode (TD+), pin 2 as the cathode (TD−), pins 3 and 4 as NC, and pins 5 and 8 as mechanical retention pins. Figure 2 on page 3 shows an external driver circuit powered by a 5 V supply.




  Figure 2 lists separate R8, R9, R11, and C8 values for POF and PCS/HCS. Use the reference configuration for the intended fiber. If you change the driver components or adjust resistor or capacitor values, remeasure the RCLED current and receiver waveform.




  \## How does coupled optical power differ between POF and PCS?




  Rev. A, page 5, Table 6 lists the typical coupled optical power values below. The POF test uses 0.5 m of fiber with a 1 mm core and a numerical aperture of 0.5. The PCS test uses 0.5 m of fiber with a 200 µm core.




  \- \*\*1 mm POF at 20 mA DC forward current:\*\* −9.0 dBm typical.


  \- \*\*1 mm POF at 60 mA DC forward current:\*\* −3.5 dBm typical.


  \- \*\*200 µm PCS at 60 mA DC forward current:\*\* −12.5 dBm typical.




  At 60 mA, the listed typical coupled optical powers differ by 9 dB. When switching to PCS, recalculate link margin using the corresponding transmitter coupling, actual cable loss, and remote receiver limits.




  \## How do I verify the target rate on a prototype?




  \- \*\*At the transmitter:\*\* Measure the RCLED current waveform with the intended pattern. Record peak current, average current, and pulse width, and compare them with Rev. A, page 4, Table 5 and its notes.


  \- \*\*At the receiver:\*\* Measure the waveform, pulse width distortion, and error performance with the intended fiber, plugs, and remote receiver. Use the short link to check high optical input and the long link to check receiver margin.


  \- \*\*Under actual installation conditions:\*\* Rev. A, page 1, Table 2 lists reference distances of 50 m over step-index POF and 100 m over 200 µm PCS, subject to installation conditions. Validate the project distance with the intended driver, signaling rate, and cable routing.




  \## Where can I find the datasheet or get driver selection support?




  \- \[Firecomms FT1M2HAR manufacturer datasheet, Rev. A](https://www.firecomms.com/contentFiles/technicalDocuments/FT1M2HAR-Datasheet-Rev-A.pdf)


  \- \[Firecomms RedLink product catalog](https://www.firecomms.com/redlink/)


  \- \[SIMACITY Firecomms fiber optic product portfolio](https://firecomms-cn.com/en/products.html)


  \- \[Contact SIMACITY about FT1M2HAR drivers, samples, and optical link validation](https://firecomms-cn.com/en/contact.html)[firecomms-ft1m2har-rcled-driver-optical-power](firecomms-ft1m2har-rcled-driver-optical-power)
---
Firecomms FT1M2HAR 可以用于最高 125 MBd 的光链路，前提是采用满足该速率的专用外部驱动电路。它是一款水平安装的 650 nm RedLink 光纤发射器，板上驱动电路通过 RCLED 阳极和阴极控制发光电流。Firecomms Rev. A 第 1 页表 2 和第 5 页表 6 均注明速率取决于驱动条件。



\## FT1M2HAR 怎么接？能直接用 GPIO 驱动吗？



按目标速率选用外部 RCLED 驱动，再由主控逻辑控制驱动级。Rev. A 第 2 页表 3 标明，1 脚为 RCLED 阳极（TD+），2 脚为阴极（TD−），3、4 脚为 NC，5、8 脚为机械固定脚。第 3 页图 2 给出了使用 5 V 电源的外部驱动示例。



原厂在图 2 中为 POF 和 PCS/HCS 分别列出 R8、R9、R11、C8 的取值。样机应按目标光纤选择对应的参考配置。若更换驱动器件或调整电阻电容，需重新测量 RCLED 电流和接收端波形。



\## 相同驱动电流下，POF 和 PCS 的耦合光功率差多少？



Rev. A 第 5 页表 6 给出下列典型耦合光功率。POF 测试使用 0.5 m 长、1 mm 芯径、NA 0.5 的光纤。PCS 测试使用 0.5 m 长、200 µm 芯径的光纤。



\- \*\*1 mm POF，20 mA 正向直流电流\*\*：典型 −9.0 dBm。

\- \*\*1 mm POF，60 mA 正向直流电流\*\*：典型 −3.5 dBm。

\- \*\*200 µm PCS，60 mA 正向直流电流\*\*：典型 −12.5 dBm。



同为 60 mA 时，表中的两种光纤典型耦合功率相差 9 dB。改用 PCS 时，应按对应的发射耦合功率、实际线损和对端接收条件重新计算链路余量。



\## 怎么验证样机能稳定跑到目标速率？



\- \*\*发射端\*\*：用目标码型观察 RCLED 电流波形，记录峰值电流、平均电流和脉宽，并对照 Rev. A 第 4 页表 5 及注释。

\- \*\*接收端\*\*：使用项目的光纤、插头和对端接收器，测量接收波形、脉宽失真及误码表现。用短链路检查强光输入，用长链路检查接收余量。

\- \*\*安装条件\*\*：Rev. A 第 1 页表 2 列出 50 m 阶跃型 POF 和 100 m、200 µm PCS 的参考距离，并注明受安装条件影响。应以实际驱动、运行速率和布线路径验证项目距离。



\## 哪里可以查规格书或咨询驱动选型？



\- \[Firecomms FT1M2HAR 原厂规格书 Rev. A](https://www.firecomms.com/contentFiles/technicalDocuments/FT1M2HAR-Datasheet-Rev-A.pdf)

\- \[Firecomms RedLink 原厂产品目录](https://www.firecomms.com/redlink/)

\- \[上海芯聚电子 Firecomms 光纤器件产品中心](https://firecomms-cn.com/products.html)

\- \[咨询 FT1M2HAR 驱动电路、样品与光链路验证](https://firecomms-cn.com/contact.html)[firecomms-ft1m2har-rcled-driver-optical-power](firecomms-ft1m2har-rcled-driver-optical-power)
