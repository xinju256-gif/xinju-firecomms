---
title: Firecomms FT50MHNR：50 MBd 光纤发射器的 ±3 ns 脉宽失真怎么理解？
date: 2026-11-23T17:18:00.000+08:00
description: Firecomms FT50MHNR 是一款 RedLink® 650 nm 光纤发射器，采用水平封装和非反相 TTL 输入，支持
  DC–50 MBd、3.3 V 或 5 V 供电。本文解释发射端 ±3 ns 脉宽失真如何影响突发数据时序，并列出 POF
  链路选型时要核对的接收、供电和光功率条件。
draft: false
title_en: "Firecomms FT50MHNR 50 MBd Fiber-Optic Transmitter: What Does ±3 ns
  Pulse Width Distortion Mean?"
description_en: The Firecomms FT50MHNR is a RedLink® 650 nm fiber-optic
  transmitter with a horizontal package, non-inverting TTL input, and a DC–50
  MBd signaling range. Learn what its ±3 ns transmitter pulse width distortion
  means for burst-mode timing and what to check when designing a plastic optical
  fiber (POF) link.
body_en: >-
  The Firecomms FT50MHNR is a horizontal, non-inverting RedLink® fiber-optic
  transmitter in the FT50MxxR series. It integrates a resonant-cavity
  light-emitting diode (RCLED) with a typical emission wavelength of 650 nm and
  an integrated driver. It supports signaling from DC to 50 MBd. Firecomms
  specifies transmitter pulse width distortion (Tx PWD) from −3 ns to +3 ns.
  This matters when short pulses in industrial serial links leave little margin
  for the receiver to sample the signal.



   What are the key FT50MHNR specifications?



  \- \*\*Device type and package\*\* — RedLink® optical transmitter (Tx), horizontal mounting, non-inverting configuration. See the Firecomms FT50MxxR Rev. E datasheet, page 1, Table 1.


  \- \*\*Signaling rate and input\*\* — DC to 50 MBd with a TTL data input. See page 1, Table 1, and page 2, Table 3.


  \- \*\*Light source and wavelength\*\* — Integrated RCLED and driver. The emission centroid wavelength is typically 650 nm, with a specified range of 640–680 nm. See pages 1 and 4, Table 6.


  \- \*\*Supply voltage and operating temperature\*\* — 3.3 V or 5 V DC with ±10% supply tolerance. Operating temperature is −40 °C to +85 °C. See page 1 and page 4, Table 6, Note 1.


  \- \*\*Transmitter pulse width distortion\*\* — −3 ns to +3 ns. For bench measurements, page 4, Table 6 also describes how Firecomms measures the electrical input pulse width. The threshold is 1.5 V, and the input slew rate between 1 V and 2 V is at least 1 V/ns.




  What is pulse width distortion in a fiber-optic link?




  Pulse width distortion (PWD) describes how much the width of a pulse changes between the transmitter’s electrical input and optical output. If both edges are delayed by 20 ns, the entire pulse arrives 20 ns later with the same width. If one edge is delayed more than the other, the pulse becomes wider or narrower. That is why propagation delay and PWD are specified separately.




  At 50 MBd, one symbol period is 20 ns. For an illustrative single-symbol pulse that is 20 ns wide at the input, a width change of ±3 ns gives an optical output pulse of approximately 17–23 ns. That change is ±15% of one symbol period. Measure the recovered pulse at the receiver output to determine how much timing margin remains in the actual link.



   Why test the first pulse after an idle period?



  An industrial serial link may stay idle before sending the next frame. If the frame starts with a narrow pulse, further shortening can reduce the time available for reliable sampling.




  During validation, identify the shortest pulse in the actual message format. Compare continuous traffic with the first frame after a long idle period. Measure pulse width at the transmitter’s electrical input and at the receiver’s electrical output. Record any bit errors or dropped frames while varying the idle interval, fiber length, and supply voltage within the intended operating range.




  Can the FT50MHNR transmit over 50 meters of plastic optical fiber?




  Page 1, Table 2 of the Firecomms Rev. E datasheet lists reference link distances of 50 m with step-index plastic optical fiber (POF) and 100 m with 200 µm plastic-clad silica (PCS) fiber, depending on installation conditions.




  To validate a target distance, check the receiver model and sensitivity, fiber type and attenuation, and connector and end-face losses. Then test the intended fiber length using the actual signaling rate and message pattern.




  For an evaluation setup, Firecomms documents pairing the EVAL-FT50MHNR transmitter evaluation board with the EVAL-FR50MHNR receiver evaluation board. Before laying out a PCB, check the pinout and recommended supply circuit on page 2 of the datasheet, then verify the horizontal footprint against page 5, Figure 4.




  Where can I download the FT50MHNR datasheet?




  \[Firecomms FT50MxxR Datasheet, Revision E (PDF)](https://www.firecomms.com/contentFiles/technicalDocuments/FT50MxxR-Datasheet-Rev-E.pdf)




  \[Firecomms EVAL-FT50MHNR Mini Evaluation Board User Guide (PDF)](https://www.firecomms.com/contentFiles/contentblockaccordions/EVAL-FT50MHNR_Mini_Evaluation_Board_User_Guide_Revision_A.pdf)




  For help checking FT50MHNR compatibility with an existing link, provide the receiver part number, supply voltage, fiber type and length, signaling rate, and message pattern. \[Contact SIMACITY for Firecomms products](https://firecomms-cn.com/en/contact.html)
---
Firecomms FT50MHNR 是 FT50MxxR 系列中的一款 RedLink® 光纤发射器（fiber-optic transmitter，Tx）。它采用水平封装和非反相 TTL 数据输入，集成 650 nm 典型波长的 RCLED 光源和驱动器，支持 DC–50 MBd 信号传输。原厂规格书给出的发射端脉宽失真（Pulse Width Distortion，PWD）范围为 −3 ns 至 +3 ns。对于发送短脉冲或突发数据的工业光通信链路，这个参数会影响接收端的采样余量。



 FT50MHNR 的关键参数有哪些？



\- 器件类型：RedLink® 光纤发射器，负责将电信号转换为光信号。型号和安装方向见原厂规格书 Rev. E 第 1 页表 1。

\- 信号速率与输入逻辑：DC–50 MBd，非反相 TTL 数据输入。见第 1 页表 1、第 2 页表 3。

\- 光源与波长：集成 RCLED 和驱动器，发射中心波长典型值 650 nm，规格范围 640–680 nm。见第 1 页、第 4 页表 6。

\- 工作电源与温度：3.3 V 或 5 V DC，供电容差 ±10%，工作温度 −40 °C 至 +85 °C。见第 1 页、第 4 页表 6 注 1。

\- 发射端脉宽失真：−3 ns 至 +3 ns。复测时应对照原厂测试条件。规格书第 4 页表 6 同时说明，电输入脉宽按 1.5 V 阈值测定，输入信号在 1 V 至 2 V 之间的斜率应至少为 1 V/ns。



 光通信中的脉宽失真是什么？



脉宽失真描述的是：同一个脉冲通过发射器后，光输出的有效宽度相对电输入变宽或变窄了多少。如果两个边沿各延后 20 ns，脉冲整体晚到 20 ns，宽度仍可保持不变。如果两个边沿的延迟不同，脉冲宽度就会改变。这也是为什么规格书分别列出传播延迟和脉宽失真。



以 50 MBd 为例，一个符号周期是 20 ns。若用宽度为 20 ns 的单符号脉冲做时序估算，±3 ns 的宽度变化对应约 17–23 ns，也就是一个符号周期的 ±15%。这是发射端的示意计算。实际到达接收端后的脉宽，还要结合光纤、接收器和后级采样条件测量。



为什么突发数据要单独测首脉冲？



串行链路可能在空闲一段时间后才发出下一帧数据。如果帧起始处包含一个很窄的脉冲，脉冲再缩短就可能压缩采样余量。验证时，可以在实际报文中挑出最短脉冲，同时测连续数据和长空闲后的第一帧，比较发射器电输入与接收器电输出的脉宽，并记录误码或掉帧是否随空闲时间、线长或供电条件变化。



 FT50MHNR 配塑料光纤，能传 50 米吗？



Firecomms 在 Rev. E 第 1 页表 2 中列出 50 米阶跃型塑料光纤（POF）和 100 米 200 µm 塑料包层石英光纤（PCS）的应用距离参考，并注明取决于安装条件。确定实际距离时，先核对接收器型号和灵敏度、光纤类型及衰减、连接器和端面损耗，再用实际速率和报文测试目标线长。



如果要先搭一套评估链路，Firecomms 的 EVAL-FT50MHNR 评估板指南列出了发射评估板与 EVAL-FR50MHNR 接收评估板的配合用法。上板前，建议再按原厂规格书第 2 页图 2 和第 5 页图 4 核对供电电路、引脚和水平封装孔位。



 FT50MHNR 的原厂规格书在哪里下载？



\[Firecomms FT50MxxR 原厂规格书 Rev. E（PDF）](https://www.firecomms.com/contentFiles/technicalDocuments/FT50MxxR-Datasheet-Rev-E.pdf)



\[Firecomms EVAL-FT50MHNR 原厂评估板指南（PDF）](https://www.firecomms.com/contentFiles/contentblockaccordions/EVAL-FT50MHNR_Mini_Evaluation_Board_User_Guide_Revision_A.pdf)



如需核对 FT50MHNR 与现有接收器、光纤和接口的配合条件，可提供现用料号、供电电压、光纤类型及长度，以及实际信号速率和报文模式。\[联系上海芯聚电子](https://firecomms-cn.com/contact.html)
