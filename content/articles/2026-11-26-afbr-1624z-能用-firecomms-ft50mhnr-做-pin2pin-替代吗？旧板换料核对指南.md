---
title: 高压变频器塑料光纤怎么选？IGBT 控制、故障回传与采样反馈的选型指南
date: 2026-11-26T11:35:00.000+08:00
description: 高压变频器中，IGBT 门极驱动指令、功率单元故障状态和数字化采样数据，都可评估通过塑料光纤（POF）传输。本文以 Firecomms
  FT50MHNR 和 FR50MHNR 为例，讲解如何核对最小脉宽、传输延迟、失光状态和接收光功率。
title_en: "Plastic Optical Fiber in Medium-Voltage Drives: IGBT Control and
  Feedback Link Selection"
description_en: Plastic optical fiber can carry IGBT gate commands, power-cell
  fault status, and digitized measurements in medium-voltage drives. Using the
  Firecomms FT50MHNR and FR50MHNR as examples, this guide covers minimum pulse
  width, link delay, loss-of-light behavior, and received optical power.
body_en: >-
  Three types of signals between a control board and a power cell in a
  medium-voltage drive are candidates for plastic optical fiber (POF): outbound
  IGBT gate commands, inbound fault and ready status, and digitized voltage,
  current, and temperature measurements. Plastic optical fiber carries signals
  without a conductive path between the two endpoints. Evaluate timing,
  loss-of-light behavior, and optical power margin for each signal type.




  \## Can IGBT gate-drive PWM commands travel over plastic optical fiber?




  Yes. In a drive with a separate gate-driver board, the main controller feeds PWM switching commands into an optical transmitter. The power-cell receiver restores the logic signal, and the local gate driver drives the IGBT. Page 43 of Eaton’s SC9000 EP medium-voltage drive manual shows an example of a control board sending inverter commands over fiber.




  Check the \*\*shortest valid pulse width, end-to-end propagation delay, channel-to-channel skew, and pulse-width distortion (PWD)\*\*. If the upper and lower switches use separate channels, verify dead-time margin using the received waveforms. If pulses resume after a long idle period, check the first pulse separately. The 50 MBd rating describes symbol-rate capability. Evaluate PWM switching frequency and the shortest high and low intervals from the actual waveform.




  \[Read the Eaton SC9000 EP medium-voltage drive user manual, IB020002EN, November 2017, p. 43](https://www.eaton.com/content/dam/eaton/products/medium-voltage-power-distribution-control-systems/motor-control/literature/installation-instructions/sc9000-instruction-booklet-user-manual-ib020002en.pdf)




  \## How can the controller distinguish a fault from a disconnected fiber?




  Power-cell ready status, gate-driver undervoltage, and overcurrent can be reported over a dedicated fiber or in digital status frames. When light indicates normal operation, a device fault, disconnected fiber, or loss of transmitter power can all cause loss of light at the receiver. Define the system response to loss of light during design review. If the controller needs to tell these events apart, use independent status encoding, a heartbeat timeout, or other diagnostic information.




  The Power Integrations 2SB315B gate-driver manual shows one implementation. Normal feedback includes a brief interruption of light to acknowledge an edge, while a longer interruption signals a fault. For your design, verify normal operation, faults, fiber disconnection, power-up, and power-down against the selected driver’s logic and timing.




  \[Read the Power Integrations 2SB315B application manual, pp. 9–10, Figures 4–5](https://www.power.com/sites/default/files/documents/2SB315B_Manual.pdf)




  \## How can voltage, current, and temperature measurements be sent over fiber?




  One approach is to sample and digitize measurements at the power cell, then send them to the main controller over a serial optical link. For closed-loop control, evaluate the total delay from sampling to data availability, delay variation, and the criteria for treating data as invalid. For condition monitoring, use the required update interval, frame overhead, and timeout rules to determine the line rate.




  \## What type of link can use the Firecomms FT50MHNR and FR50MHNR?




  The Firecomms RedLink FT50MHNR transmitter and FR50MHNR receiver are candidates for a horizontal, non-inverting DC-to-50 MBd digital optical link. Both support 3.3 V or 5 V supplies with ±10% tolerance and are rated for operation from −40 °C to +85 °C.




  \- \*\*FT50MHNR transmitter.\*\* It uses a 650 nm RCLED and an integrated driver. The datasheet lists transmitter PWD of −3 to +3 ns. See \[Firecomms FT50MxxR Rev G, p. 1 and p. 4, Table 6](https://www.firecomms.com/contentFiles/technicalDocuments/FT50MxxR-Datasheet-Rev-G.pdf#page=4).


  \- \*\*FR50MHNR receiver.\*\* The peak optical input range in the light-on state is −22 to +2 dBm under the datasheet’s specified transmitter wavelength, optical edge, and receiver circuit conditions. The manufacturer lists separate PWD conditions for different received power ranges and for the first one to three pulses. See \[Firecomms FR50MxxR Rev H, p. 5, Table 6](https://www.firecomms.com/contentFiles/technicalDocuments/FR50MxxR_Datasheet_Rev_H.pdf#page=5).




  During prototype validation, measure received optical power using the shortest and longest production cable assemblies. At the receiver, capture the shortest PWM pulse, the first pulse after idle, and the output during loss of light. Verify system insulation and protective functions separately against the equipment design requirements.




  \## What information is needed to evaluate a POF link for a medium-voltage drive?




  Provide the signal direction, shortest pulse width or protocol line rate, minimum and maximum cable lengths, connector type, supply voltages at both ends, and expected response to loss of light. If the design carries both control and feedback, list the requirements for each link.




  \- \[Explore Firecomms industrial automation and plastic optical fiber applications](https://firecomms-cn.com/en/solutions.html)


  \- \[Contact Shanghai SIMACITY to evaluate a POF link for a medium-voltage drive](https://firecomms-cn.com/en/contact.html)[medium-voltage-drive-pof-control-feedback](medium-voltage-drive-pof-control-feedback)
---
高压变频器的控制板与功率单元之间，适合评估用塑料光纤（POF）传输的信号有三类：下行的 IGBT 门极驱动指令、上行的故障与就绪状态，以及数字化后的电压、电流和温度采样数据。塑料光纤可在两端之间提供无导电通路的信号传输。选型时要按信号用途分别核对时序、失光行为和光功率裕量。



\## IGBT 门极驱动的 PWM 信号可以走塑料光纤吗？



可以。在采用独立门极驱动板的架构中，主控板将 PWM 开关指令送入光发射器，功率单元侧的光接收器恢复逻辑信号，再由本地门极驱动电路驱动 IGBT。Eaton SC9000 EP 高压变频器手册第 43 页展示了控制板经光纤向逆变器发送控制指令的实例。



这类链路要核对\*\*最短有效脉宽、端到端传播延迟、通道间延迟差和脉宽失真（PWD）\*\*。如果上下桥臂走独立通道，应以接收侧的实际波形核对死区余量。设计中若有长时间空闲后的重新发脉冲，还要单独检查首脉冲。50 MBd 描述的是器件的符号速率能力，PWM 开关频率和最短高、低电平持续时间需要按实际波形分别核对。



\[查看 Eaton SC9000 EP 高压变频器用户手册 IB020002EN，2017 年 11 月版，第 43 页](https://www.eaton.com/content/dam/eaton/products/medium-voltage-power-distribution-control-systems/motor-control/literature/installation-instructions/sc9000-instruction-booklet-user-manual-ib020002en.pdf)



\## 故障回传和光纤断开，主控板怎么判断？



功率单元的就绪、驱动欠压、过流等状态可以通过独立光纤或数字状态帧回传。若接口用“有光”表示正常，器件故障、光纤断开和发射端掉电都可能导致接收端失光。设计评审应明确失光时的系统响应。需要区分原因时，可结合独立状态编码、心跳超时或其他诊断信息。



Power Integrations 的 2SB315B 门极驱动手册给出了一个实现示例。其正常反馈包含短暂灭光的确认脉冲，故障反馈则用较长的灭光时间表示。实际项目应按所用驱动器的逻辑和时序验证正常、故障、断纤及上电、掉电状态。



\[查看 Power Integrations 2SB315B 应用手册，第 9–10 页，图 4–5](https://www.power.com/sites/default/files/documents/2SB315B_Manual.pdf)



\## 电压、电流和温度采样怎么通过光纤上传？



一种常见做法是在功率单元侧完成采样和数字化，再经串行光链路送回主控。若采样用于闭环控制，应把采样到数据可用的总延迟、延迟波动和数据失效判据纳入评估。若采样用于状态监测，可根据所需更新周期、帧开销和超时规则确定线路速率。



\## Firecomms FT50MHNR 和 FR50MHNR 适合怎样的链路？



在评估水平安装、非反相的 DC–50 MBd 数字光链路时，可以将 Firecomms RedLink FT50MHNR 发射器与 FR50MHNR 接收器作为一组候选。两款器件均支持 3.3 V 或 5 V 供电，电源容差为 ±10%，额定工作温度为 −40 °C 至 +85 °C。



\- \*\*FT50MHNR 发射端\*\*采用 650 nm RCLED 和集成驱动，规格书所列发射端 PWD 为 −3 至 +3 ns。见 \[Firecomms FT50MxxR Rev G，第 1 页及第 4 页表 6](https://www.firecomms.com/contentFiles/technicalDocuments/FT50MxxR-Datasheet-Rev-G.pdf#page=4)。

\- \*\*FR50MHNR 接收端\*\*在规格书规定的发射波长、光信号边沿和接收电路条件下，光高电平峰值输入范围为 −22 至 +2 dBm。原厂对不同接收光功率区间及前 1–3 个脉冲分别列出了 PWD 条件。见 \[Firecomms FR50MxxR Rev H，第 5 页表 6](https://www.firecomms.com/contentFiles/technicalDocuments/FR50MxxR_Datasheet_Rev_H.pdf#page=5)。



样机验证时，用实际最短和最长线束检查接收光功率，并在接收端记录最短 PWM 脉冲、空闲后的首脉冲及失光时的输出。整机绝缘与保护功能按设备设计要求单独验证。



\## 评估高压变频器的塑料光纤方案，需要提供什么信息？



整理信号方向、最短脉宽或协议速率、最短及最长线长、连接器类型、两端供电和失光时预期行为。若同时承载控制和反馈，分别列出两条链路的要求。



\- \[查看飞尔康工业自动化与塑料光纤应用](https://firecomms-cn.com/solutions.html)

\- \[联系上海芯聚电子评估高压变频器 POF 链路](https://firecomms-cn.com/contact.html)[medium-voltage-drive-pof-control-feedback](medium-voltage-drive-pof-control-feedback)
