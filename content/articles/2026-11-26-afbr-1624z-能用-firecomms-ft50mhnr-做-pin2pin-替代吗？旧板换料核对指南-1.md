---
title: AFBR-1624Z 能用 Firecomms FT50MHNR 做 Pin2Pin 替代吗？旧板换料核对指南
date: 2026-11-26T11:42:00.000+08:00
description: Firecomms FT50MHNR 是 Broadcom（Avago）AFBR-1624Z 的 Pin2Pin
  替代候选。本文对照两份原厂规格书，核对 50 MBd 非反相光纤发射器的引脚、PCB 封装、3.3 V／5 V 供电、峰值光功率和脉宽失真，并给出保留
  AFBR-2624Z 接收器时的验证步骤。
draft: false
title_en: Can Firecomms FT50MHNR Replace AFBR-1624Z Pin-to-Pin? A Board-Level Checklist
description_en: The Firecomms FT50MHNR is a pin-to-pin replacement candidate for
  the Broadcom (Avago) AFBR-1624Z. Compare the pinout, PCB footprint, 3.3 V and
  5 V supplies, peak optical power, and pulse-width distortion of these 50 MBd
  transmitters. Then validate the replacement with the existing AFBR-2624Z
  receiver.
body_en: >-
  The Firecomms FT50MHNR is a pin-to-pin replacement candidate for the Broadcom
  (Avago) AFBR-1624Z. Both are horizontal, non-inverting, TTL-compatible
  DC-to-50 MBd fiber optic transmitters with matching main pin functions. For an
  existing industrial control board, check the PCB holes, connector fit, and
  supply first. Then verify optical power and the received waveform using the
  original receiver and production cable assemblies.




  \## Do the AFBR-1624Z and FT50MHNR have the same pinout?




  On both transmitters, pin 1 is the supply, pin 2 is physically absent, pin 3 is ground, and pin 4 is the TTL data input. Pins 5 and 8 retain the housing. Broadcom recommends chassis ground for these two pins, and Firecomms specifies ground. Check how signal ground and chassis ground are connected on the existing board.




  Use the top-view PCB drawings to compare mounting holes, board-edge clearance, and room to insert, latch, and remove the existing connector. Both parts use horizontal packages. A sample fit check can confirm clearance around neighboring parts and the enclosure.




  Pinout and footprint references: \[Broadcom AV02-4369EN, May 31, 2023, pp. 3–4 and 6](https://docs.broadcom.com/doc/AV02-4369EN) and \[Firecomms FT50MxxR Rev G, p. 2, Table 3, and p. 5, Figure 4](https://www.firecomms.com/contentFiles/technicalDocuments/FT50MxxR-Datasheet-Rev-G.pdf).




  \## Can the existing 3.3 V or 5 V circuit be reused?




  \- \*\*Supply range.\*\* The AFBR-1624Z supports 3.3 V or 5 V with ±5% tolerance. The FT50MHNR supports 3.3 V or 5 V with ±10% tolerance. Both specify a −40 °C to +85 °C operating temperature range.


  \- \*\*Input thresholds.\*\* Both specify a minimum high-level input of 2.0 V and a maximum low-level input of 0.8 V. The FT50MHNR specifies an upper high-level input limit of VCC + 0.25 V. If the old board drives a 3.3 V transmitter with 5 V logic, check the actual peak voltage at the data pin.


  \- \*\*Input and decoupling.\*\* Check the existing input pull-down, supply filtering, and decoupling layout. Figure 2 on p. 2 of Firecomms FT50MxxR Rev G shows the recommended circuit and calls for a 100 nF decoupling capacitor as close as possible to each device’s VCC pin.




  Electrical references: \[Broadcom AV02-4369EN, pp. 7 and 9](https://docs.broadcom.com/doc/AV02-4369EN) and \[Firecomms FT50MxxR Rev G, pp. 1, 2, and 4](https://www.firecomms.com/contentFiles/technicalDocuments/FT50MxxR-Datasheet-Rev-G.pdf).




  \## Why retest optical power and the first pulse at 50 MBd?




  The AFBR-1624Z uses a 650 nm LED with an integrated driver. The FT50MHNR uses a 650 nm RCLED with an integrated driver. The datasheets specify peak optical power using different lengths of 1 mm plastic optical fiber (POF):




  \- \*\*AFBR-1624Z:\*\* −4.5 to +2 dBm measured after 1 m of POF with a numerical aperture (NA) of 0.5.


  \- \*\*FT50MHNR:\*\* −6 to +2 dBm measured with 0.5 m of POF with an NA of 0.5.




  Account for the measurement conditions when assessing the optical link budget. With the production harness, check the high optical input condition at the shortest link length and the low optical power margin at the longest length.




  Both datasheets list transmitter pulse-width distortion (PWD) of −3 to +3 ns. Broadcom separately specifies −5 to +3 ns for the first optical pulse. For burst traffic, check the first pulse after idle and the receiver’s handling of the first frame.




  Optical references: \[Broadcom AV02-4369EN, p. 9](https://docs.broadcom.com/doc/AV02-4369EN#page=9) and \[Firecomms FT50MxxR Rev G, p. 4, Table 6](https://www.firecomms.com/contentFiles/technicalDocuments/FT50MxxR-Datasheet-Rev-G.pdf#page=4).




  \## How do you validate the FT50MHNR with the existing AFBR-2624Z receiver?




  1. \*\*Capture a baseline.\*\* Use the original AFBR-1624Z, receiver, and production cable assembly. Record receiver output waveforms, pulse widths, and bit errors. Log CRC errors if the protocol uses CRC.


  2. \*\*Change only the transmitter.\*\* Install the FT50MHNR and keep the original receiver, cable assemblies, and test data. Cover the shortest and longest installed links, continuous traffic, and the first frame after idle.


  3. \*\*Retest at the equipment’s operating limits.\*\* Use the project’s waveform, bit-error, and protocol acceptance criteria at the specified supply and temperature limits. The link distance guarantee on p. 7 of the Broadcom datasheet applies to the Broadcom transmitter and receiver combinations it specifies. Qualify the FT50MHNR and AFBR-2624Z combination with measurements from your equipment.




  \## Where can I check the cross-reference or request an evaluation?




  \- \[Look up Avago and Firecomms cross-reference part numbers](https://firecomms-cn.com/en/cross-ref.html)


  \- \[Contact Shanghai SIMACITY about an AFBR-1624Z to FT50MHNR evaluation](https://firecomms-cn.com/en/contact.html). Include the existing receiver part number, supply voltage, fiber type, minimum and maximum cable lengths, and actual traffic pattern.[afbr-1624z-ft50mhnr-pin-to-pin](afbr-1624z-ft50mhnr-pin-to-pin)
---
Firecomms FT50MHNR 可以作为 Broadcom（Avago）AFBR-1624Z 的 Pin2Pin 替代候选。两款都是水平安装、非反相、TTL 兼容的 DC–50 MBd 光纤发射器，主要引脚功能一致。用于工业控制设备旧板换料时，先核对 PCB 孔位、连接器和供电，再用原接收器及实际线束验证光功率与接收波形。



\## AFBR-1624Z 和 FT50MHNR 的引脚一样吗？



两款发射器的 1 脚为电源，2 脚无实体引脚，3 脚为地，4 脚为 TTL 数据输入。5 脚和 8 脚用于外壳固定。Broadcom 建议将这两个固定脚接机壳地，Firecomms 的规格书标注接地。换料时应对照旧板的信号地和机壳地连接方式。



比对封装时，按规格书的 PCB 顶视图核对插装孔位、板边距离、旧线束插拔空间和连接器锁扣。两款器件均为水平封装，样件试装可确认相邻器件和机壳是否留有足够空间。



引脚与封装依据：\[Broadcom AV02-4369EN（2023 年 5 月 31 日），第 3–4、6 页](https://docs.broadcom.com/doc/AV02-4369EN)；\[Firecomms FT50MxxR Rev G，第 2 页表 3、第 5 页图 4](https://www.firecomms.com/contentFiles/technicalDocuments/FT50MxxR-Datasheet-Rev-G.pdf)。



\## 3.3 V 和 5 V 的旧板能沿用原电路吗？



\- \*\*供电范围\*\*：AFBR-1624Z 支持 3.3 V 或 5 V，容差为 ±5%。FT50MHNR 支持 3.3 V 或 5 V，容差为 ±10%。两款器件的工作温度范围均为 −40 °C 至 +85 °C。

\- \*\*输入门限\*\*：两款的高电平输入下限均为 2.0 V，低电平输入上限均为 0.8 V。FT50MHNR 的高电平输入上限为 VCC + 0.25 V。若旧板用 5 V 逻辑驱动 3.3 V 供电的发射器，先核对数据脚实际峰值。

\- \*\*输入与去耦\*\*：核对旧板的输入下拉、供电滤波和去耦布局。FT50MxxR Rev G 第 2 页图 2 给出了推荐电路，并要求每颗器件的 100 nF 去耦电容尽量靠近 VCC 脚。



电气依据：\[Broadcom AV02-4369EN，第 7、9 页](https://docs.broadcom.com/doc/AV02-4369EN)；\[Firecomms FT50MxxR Rev G，第 1、2、4 页](https://www.firecomms.com/contentFiles/technicalDocuments/FT50MxxR-Datasheet-Rev-G.pdf)。



\## 同为 50 MBd，为什么还要复测光功率和首脉冲？



AFBR-1624Z 使用集成驱动的 650 nm LED，FT50MHNR 使用集成驱动的 650 nm RCLED。两份规格书给出的 1 mm POF 峰值光功率采用了不同的测试光纤长度：



\- \*\*AFBR-1624Z\*\*：−4.5 至 +2 dBm，在 1 m、数值孔径 NA = 0.5 的 POF 末端测量。

\- \*\*FT50MHNR\*\*：−6 至 +2 dBm，使用 0.5 m、NA = 0.5 的 POF 测量。



计算替代后的光链路预算时，应结合各自的测量条件。在实际线束上，用最短链路检查接收端高光功率工况，用最长链路检查低光功率余量。



两份规格书所列发射端脉宽失真（PWD）均为 −3 至 +3 ns。Broadcom 另列首个光脉冲的 PWD 为 −5 至 +3 ns。若设备采用间歇发送，应单独检查空闲后的首个脉冲及接收端首帧表现。



光学依据：\[Broadcom AV02-4369EN，第 9 页](https://docs.broadcom.com/doc/AV02-4369EN#page=9)；\[Firecomms FT50MxxR Rev G，第 4 页表 6](https://www.firecomms.com/contentFiles/technicalDocuments/FT50MxxR-Datasheet-Rev-G.pdf#page=4)。



\## 保留 AFBR-2624Z 接收器时，怎么验证只换发射端？



1. \*\*记录原链路基线\*\*。使用原 AFBR-1624Z、原接收器和实际线束，在接收端记录波形、脉宽和误码。协议带 CRC 时同步记录 CRC 错误。

2. \*\*只换发射器\*\*。装上 FT50MHNR，沿用原接收器、线束和测试数据。覆盖实际最短及最长链路、连续数据以及空闲后的首帧。

3. \*\*复测设备边界条件\*\*。在设备规定的供电和温度边界下，按项目的波形、误码及协议判据验收。Broadcom 第 7 页的链路距离保证适用于其规格书指定的原厂收发配对。FT50MHNR 与 AFBR-2624Z 的组合应以实测结果作为换料依据。



\## 哪里可以查替代型号或提交选型信息？



\- \[查询 Avago 与 Firecomms 替代料号](https://firecomms-cn.com/cross-ref.html)

\- \[联系上海芯聚电子评估 AFBR-1624Z 与 FT50MHNR](https://firecomms-cn.com/contact.html)。提交原接收器料号、供电电压、光纤类型、最短及最长线长，以及实际数据模式。[afbr-1624z-ft50mhnr-pin-to-pin](afbr-1624z-ft50mhnr-pin-to-pin)
