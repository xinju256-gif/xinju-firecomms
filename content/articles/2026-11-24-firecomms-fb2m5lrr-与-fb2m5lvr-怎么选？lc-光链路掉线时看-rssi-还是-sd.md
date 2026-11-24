---
title: Firecomms FE50MLIR 与 FE50MLNR 怎么选？LC 光链路上电首帧异常，先查极性和时序
date: 2026-11-24T11:40:00.000+08:00
description: Firecomms FE50MLIR 与 FE50MLNR 均为 DC–50 MBd LC 塑料光纤收发器。FE50MLIR
  有光时输出低电平，FE50MLNR 有光时输出高电平。本文依据原厂 Rev. A 规格书说明接收极性、上电高阻态和首帧验证方法。
title_en: "Firecomms FE50MLIR vs FE50MLNR: LC Receiver Polarity and First-Frame
  Errors at Startup"
description_en: The Firecomms FE50MLIR and FE50MLNR are DC–50 MBd LC plastic
  optical fiber transceivers. With a valid optical high input, the FE50MLIR
  outputs low and the FE50MLNR outputs high. See how to check receiver polarity,
  startup high impedance, and first-frame timing using the Rev. A datasheet.
body_en: >-
  Choose between the Firecomms FE50MLIR and FE50MLNR based on the receiver
  polarity your system needs. The inverting FE50MLIR drives pin 10 low when the
  received optical signal is in its specified high state. The non-inverting
  FE50MLNR drives pin 10 high under the same conditions. If the link misses its
  first frame after power-up and then communicates normally, check when the
  receiver output leaves its high-impedance state and when the host starts
  accepting data.




  \## How do the FE50MLIR and FE50MLNR receiver polarities differ?




  Both are DC–50 MBd LC transceivers for 2.2 mm jacketed plastic optical fiber (POF). Both transmitters are non-inverting. With stable power and an optical signal within the specified limits, a logic high at pin 2 (Vin) produces the optical high state. Receiver pin 10 (Vo) behaves as follows.




  \- \*\*FE50MLIR, inverting receiver.\*\* Vo is low for an optical high input and high for an optical low input.


  \- \*\*FE50MLNR, non-inverting receiver.\*\* Vo is high for an optical high input and low for an optical low input.




  See Firecomms Rev. A, page 2, Table 3 for the pinout. Figures 3–4 on page 3 and Figures 8–9 on page 6 show the polarity waveforms.




  \## When is the receiver output valid after power-up?




  Firecomms Rev. A, page 5, Figure 7 and page 8, Figure 12 show that both receivers present a high-impedance output during startup. The timing diagrams show approximately 2.8 V on the rising VCC rail and a return to high impedance when VCC falls below approximately 2.6 V. Table 7 on page 11 defines receiver wake-up delay from VCC crossing 2.75 V to Vo responding correctly to the optical input. The listed delay is 40 µs typical.




  \- \*\*Measure startup timing.\*\* Capture receiver VCC, Vo at pin 10, and the first frame together on an oscilloscope. The 40 µs value is typical. Verify the system timing with the actual supply ramp and operating temperature.


  \- \*\*Check the default logic level during high impedance.\*\* Review the MCU or FPGA pull-up, pull-down, and reset settings to determine what the host reads before Vo becomes valid.


  \- \*\*Check transmitter power sequencing.\*\* Rev. A, page 9, Table 5, Note 2 specifies \`VIN ≤ VCC\` during power-up. If the host powers up before the transceiver, check whether it drives the data input before the transceiver supply is ready.




  \## What else should I check before swapping parts on a DC–50 MBd link?




  Both parts use a 650 nm RCLED and provide a TTL-compatible push-pull CMOS receiver output. They support nominal 3.3 V or 5 V supplies and operate from −40 to +85 °C. Firecomms recommends 3.3 V. See Rev. A, pages 1–2 and 9–11.




  \- \*\*Check the downstream input levels.\*\* Table 7 on page 11 specifies a receiver output high close to VCC under its stated load conditions. If the transceiver runs at 5 V, verify the downstream input rating and logic-level compatibility.


  \- \*\*Test the first frame after a cold start and the first pulse after a long idle interval.\*\* Table 7 on page 11 specifies −7 to +14 ns of receiver pulse width distortion (PWD) for the first three pulses. The characterization includes a minimum optical input pulse width of 20 ns. Test with the actual data pattern, shortest pulse, and receiver output load.


  \- \*\*Verify protocol polarity before swapping parts.\*\* The two devices share a pinout. Confirm that the host can handle the polarity change, then verify the protocol idle state, start bit, and first frame after reset.




  \## Where can I get the datasheet or LC fiber selection support?




  \- \[Firecomms FE50MLIR and FE50MLNR manufacturer datasheet, Rev. A](https://www.firecomms.com/contentFiles/technicalDocuments/FE50MLIR%20FE50MLNR%20Data%20Sheet%20Revision%20A.pdf)


  \- \[Firecomms LC fiber optic transceiver catalog](https://www.firecomms.com/LC/)


  \- \[SIMACITY LC fiber optic transceiver portfolio](https://firecomms-cn.com/en/products.html)


  \- \[Contact SIMACITY for FE50MLIR and FE50MLNR selection, samples, and LC fiber assemblies](https://firecomms-cn.com/en/contact.html)
---
Firecomms FE50MLIR 与 FE50MLNR 的选型取决于接收端需要什么极性。FE50MLIR 为反相型，光输入处于规定高状态时，10 脚输出低电平。FE50MLNR 为非反相型，同一条件下 10 脚输出高电平。如果链路上电后漏收第一帧，但随后通信正常，应优先检查接收输出何时退出高阻态，以及主控何时开始接收。



\## FE50MLIR 和 FE50MLNR 的接收极性有什么区别？



两款都是 DC–50 MBd 的 LC 塑料光纤收发器，适配 2.2 mm 外护套 POF。发射端均采用非反相逻辑。供电稳定且光信号满足规格书规定时，2 脚（Vin）输入高电平，发射端输出光高状态。接收端 10 脚（Vo）的逻辑如下。



\- \*\*FE50MLIR，反相接收。\*\* 光输入为高时，Vo 输出低电平。光输入为低时，Vo 输出高电平。

\- \*\*FE50MLNR，非反相接收。\*\* 光输入为高时，Vo 输出高电平。光输入为低时，Vo 输出低电平。



参见原厂 Rev. A 第 2 页表 3 的引脚定义，以及第 3 页图 3–4 和第 6 页图 8–9 的极性波形。



\## 上电后多久可以读取接收输出？



原厂 Rev. A 第 5 页图 7 和第 8 页图 12 显示，两款的接收输出在启动阶段处于高阻态。上电时序图以 VCC 约 2.8 V 为参考，掉电降到约 2.6 V 时，Vo 回到高阻态。第 11 页表 7 将接收唤醒延时定义为 VCC 超过 2.75 V 到 Vo 正确响应光输入的时间，列出的典型值为 40 µs。



\- \*\*测启动过程。\*\* 用示波器同时观察接收端 VCC、10 脚 Vo 和第一帧的时序。40 µs 是典型值，整机接收时序应结合实际电源斜率和温度验证。

\- \*\*检查高阻阶段的默认电平。\*\* 查看 MCU 或 FPGA 输入上拉、下拉和复位配置，确认主控在 Vo 进入有效状态前会读到什么。

\- \*\*核对发射端上电顺序。\*\* Rev. A 第 9 页表 5 注 2 要求上电过程中 \`VIN ≤ VCC\`。若主控先于收发器上电，应检查数据输入是否提前被驱动。



\## DC–50 MBd 链路换料时还要核对什么？



两款均使用 650 nm RCLED，接收端为 TTL 兼容的推挽 CMOS 输出，支持标称 3.3 V 或 5 V 供电。工作温度为 −40 至 +85 °C，原厂建议优先使用 3.3 V。参见 Rev. A 第 1–2 页及第 9–11 页。



\- \*\*检查后级输入电平。\*\* 第 11 页表 7 在指定负载条件下给出的接收高电平接近 VCC。收发器使用 5 V 供电时，先确认后级输入的耐压和电平兼容性。

\- \*\*分别验证冷启动首帧与长空闲后的首脉冲。\*\* 第 11 页表 7 单列了第 1 至第 3 个接收脉冲的脉宽失真（PWD），范围为 −7 至 +14 ns，表征条件包括最小 20 ns 光输入脉宽。用实际码型、最短脉宽和接收端负载测试。

\- \*\*换料前验证协议极性。\*\* 两款共用引脚定义。换料时需确认主控能否处理极性变化，并验证协议空闲态、起始位和复位后的第一帧。



\## 哪里可以查规格书或咨询 LC 光纤选型？



\- \[Firecomms FE50MLIR 与 FE50MLNR 原厂规格书 Rev. A](https://www.firecomms.com/contentFiles/technicalDocuments/FE50MLIR%20FE50MLNR%20Data%20Sheet%20Revision%20A.pdf)

\- \[Firecomms 原厂 LC 光纤收发器目录](https://www.firecomms.com/LC/)

\- \[上海芯聚电子 LC 光纤收发器产品中心](https://firecomms-cn.com/products.html)

\- \[咨询 FE50MLIR、FE50MLNR 选型、样品及 LC 光纤配套](https://firecomms-cn.com/contact.html)
