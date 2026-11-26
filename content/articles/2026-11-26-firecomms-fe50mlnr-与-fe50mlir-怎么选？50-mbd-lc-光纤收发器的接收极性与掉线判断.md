---
title: Firecomms FE50MLNR 与 FE50MLIR 怎么选？50 MBd LC 光纤收发器的接收极性与掉线判断
date: 2026-11-26T11:44:00.000+08:00
description: Firecomms FE50MLNR 和 FE50MLIR 都是 DC–50 MBd LC 塑料光纤收发器。FE50MLNR
  接收端有光输出高电平，FE50MLIR 接收端有光输出低电平。本文结合原厂 Rev A 规格书，说明如何核对接收极性、上电高阻、线束和接收光功率。
draft: false
title_en: "Firecomms FE50MLNR vs FE50MLIR: Receiver Polarity and Link-Loss
  Checks for 50 MBd LC POF"
description_en: The Firecomms FE50MLNR and FE50MLIR are DC-to-50 MBd LC plastic
  optical fiber transceivers. With light present, the FE50MLNR receiver outputs
  high and the FE50MLIR receiver outputs low. This guide uses the manufacturer’s
  Rev A datasheet to explain receiver polarity, high-impedance startup behavior,
  cable selection, and received optical power.
body_en: >-
  The receiver output polarity determines which part to select. Under normal
  power, choose the Firecomms FE50MLNR when the controller expects the receiver
  to output \*\*high with light present\*\*. Choose the FE50MLIR when it expects
  the receiver to output \*\*low with light present\*\*. Both are DC-to-50 MBd
  LC plastic optical fiber (POF) transceivers with non-inverting transmitters. A
  high electrical input turns on the transmitter light in both variants.




  \## Will a link between an FE50MLNR and an FE50MLIR invert the data?




  It depends on the direction. Both devices use the same transmitter polarity, so the far-end receiver determines the electrical output polarity for each direction.




  \- \*\*FE50MLNR at the receiving end:\*\* The receiver outputs high with light and low without light under normal power. The electrical signal retains its polarity from the local input to the remote output.


  \- \*\*FE50MLIR at the receiving end:\*\* The receiver outputs low with light and high without light under normal power. The electrical signal is inverted from the local input to the remote output.




  With an FE50MLNR at one end and an FE50MLIR at the other, the two directions have different logic polarities. Check the required idle and active levels in each direction.




  \[Read the Firecomms FE50MLIR and FE50MLNR datasheet, Rev A, p. 1, Table 1](https://www.firecomms.com/contentFiles/technicalDocuments/FE50MLIR%20FE50MLNR%20Data%20Sheet%20Revision%20A.pdf#page=1)




  \## Why test loss of light, power-up, and power-down separately?




  With the receiver powered normally, loss of light produces the no-light logic level described above. During power-up or power-down, the receiver output can enter a high-impedance state. The board’s bias circuit then determines the level read by the controller. If a fixed logic level indicates a healthy link, check whether high impedance, protocol idle, and fiber disconnection can produce the same reading.




  Both devices support \*\*3.3 V or 5 V, with a ±5% supply tolerance in the datasheet test conditions\*\*. The operating temperature range is \*\*−40 °C to +85 °C\*\*. During prototype testing, capture the receiver waveform during data transfer, idle, fiber disconnection, and different power-up sequences at the two ends. When the application requires link-loss detection, use protocol frames or a heartbeat timeout as part of the link check.




  \[See Rev A receiver power timing on pp. 5 and 8 and Table 7 on p. 11](https://www.firecomms.com/contentFiles/technicalDocuments/FE50MLIR%20FE50MLNR%20Data%20Sheet%20Revision%20A.pdf#page=5)




  \## Can an LC POF link reach 50 meters, and how should the cable assembly be verified?




  Table 2 on p. 1 of the manufacturer’s Rev A datasheet lists \*\*50 meters\*\* as an application distance for step-index POF, subject to installation conditions. Check the LC termination, fiber type, and cable specifications, then validate the actual connectors, bends, and routing.




  Table 7 on p. 11 lists a light-on peak receiver input range of \*\*−22 to −1 dBm\*\* under the manufacturer’s specified transmitter wavelength, signal edge, and test circuit conditions. Use the shortest cable assembly to check the upper received-power limit and the longest to check sensitivity margin. For burst traffic, also verify the first frame after idle using the application’s actual data pattern.




  \[See the receiver optical power and pulse-width distortion test conditions in Rev A, p. 11, Table 7](https://www.firecomms.com/contentFiles/technicalDocuments/FE50MLIR%20FE50MLNR%20Data%20Sheet%20Revision%20A.pdf#page=11)




  \## What information is needed for an FE50MLNR or FE50MLIR evaluation?




  Provide the required logic polarity in each direction, controller I/O voltage, line rate, LC cable type, minimum and maximum cable lengths, and the controller’s expected response to link loss.




  \- \[Explore the Firecomms China product portfolio and LC fiber transceivers](https://firecomms-cn.com/en/products.html)


  \- \[Contact Shanghai SIMACITY to evaluate an FE50MLNR or FE50MLIR link](https://firecomms-cn.com/en/contact.html)[firecomms-fe50mlnr-fe50mlir-lc-pof-selection](firecomms-fe50mlnr-fe50mlir-lc-pof-selection)
---
Firecomms FE50MLNR 和 FE50MLIR 的选型差异在接收端。正常供电时，如果主控要求接收端\*\*有光输出高电平\*\*，评估 FE50MLNR。如果要求接收端\*\*有光输出低电平\*\*，评估 FE50MLIR。两款均为 DC–50 MBd LC 塑料光纤收发器，发射端均为非反相，电气输入为高时发光。



\## FE50MLNR 和 FE50MLIR 接在一起，数据会反相吗？



看数据传输方向。这两款器件的发射端逻辑相同，每条链路的输出极性由远端接收器决定。



\- \*\*远端用 FE50MLNR\*\*：接收端有光输出高电平，正常供电下无光输出低电平。从近端电气输入到远端电气输出，逻辑保持同相。

\- \*\*远端用 FE50MLIR\*\*：接收端有光输出低电平，正常供电下无光输出高电平。从近端电气输入到远端电气输出，逻辑反相。



如果一端用 FE50MLNR，另一端用 FE50MLIR，两个方向的逻辑极性会不同。设计双向链路时，应分别核对两个方向的空闲电平和有效电平。



\[查看 Firecomms FE50MLIR／FE50MLNR 原厂规格书 Rev A，第 1 页表 1](https://www.firecomms.com/contentFiles/technicalDocuments/FE50MLIR%20FE50MLNR%20Data%20Sheet%20Revision%20A.pdf#page=1)



\## 为什么要分别测试失光、上电和掉电？



接收端正常供电时，失光对应上面的无光逻辑。上电或掉电期间，接收输出还可能进入高阻态。当输出为高阻时，主控读到的电平取决于板上的偏置电路。若系统把某个固定电平当作链路正常标志，就要核对高阻、协议空闲和断纤是否会被判成同一种状态。



两款器件支持 \*\*3.3 V 或 5 V，规格书测试条件为 ±5%\*\*，工作温度为 \*\*−40 °C 至 +85 °C\*\*。样机验证时，分别记录正常收发、空闲、断纤和两端先后上电时的接收波形。有掉线检测要求时，可结合协议帧或心跳超时判断。



\[查看 Rev A 第 5、8 页的接收端电源时序及第 11 页表 7](https://www.firecomms.com/contentFiles/technicalDocuments/FE50MLIR%20FE50MLNR%20Data%20Sheet%20Revision%20A.pdf#page=5)



\## LC 塑料光纤能传 50 米吗？怎样验收实际线束？



原厂 Rev A 第 1 页表 2 将 \*\*50 米\*\*列为阶跃型塑料光纤的应用距离，并注明取决于安装条件。选线时先核对 LC 端接、光纤类型和线束规格，再按实际连接器、弯折和布线路径验证。



第 11 页表 7 所列有光状态的峰值接收功率范围为 \*\*−22 至 −1 dBm\*\*。该范围依据原厂规定的发射波长、信号边沿和测试电路得出。可用最短线束核对接收光功率上限，用最长线束核对灵敏度余量。链路若采用间歇传输，还应在实际数据模式下检查空闲后的首帧。



\[查看 Rev A 第 11 页表 7 的接收光功率及脉宽失真测试条件](https://www.firecomms.com/contentFiles/technicalDocuments/FE50MLIR%20FE50MLNR%20Data%20Sheet%20Revision%20A.pdf#page=11)



\## 咨询 FE50MLNR 或 FE50MLIR 时，需要提供什么信息？



提供两个方向所需的逻辑极性、控制器 I/O 电压、线路速率、LC 线束类型、最短和最长线长，以及掉线时主控应如何判断。



\- \[查看飞尔康中国站产品中心与 LC 光纤收发器系列](https://firecomms-cn.com/products.html)

\- \[联系上海芯聚电子评估 FE50MLNR 或 FE50MLIR 链路](https://firecomms-cn.com/contact.html)[firecomms-fe50mlnr-fe50mlir-lc-pof-selection](firecomms-fe50mlnr-fe50mlir-lc-pof-selection)
