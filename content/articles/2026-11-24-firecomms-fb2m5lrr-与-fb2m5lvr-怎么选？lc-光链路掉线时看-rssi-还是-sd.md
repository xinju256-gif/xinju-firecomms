---
title: Firecomms FB2M5LRR 与 FB2M5LVR 怎么选？LC 光链路掉线时看 RSSI 还是 SD
date: 2026-11-24T11:38:00.000+08:00
description: Firecomms FB2M5LRR 和 FB2M5LVR 均为 10–250 Mbps LC 塑料光纤收发器。FB2M5LRR 的
  RSSI 用于观察接收光功率变化，FB2M5LVR 的 Signal Detect 用于读取光信号检测状态。本文说明 9
  脚接法、接收光功率上限和板卡换料验证。
draft: false
title_en: "Firecomms FB2M5LRR vs FB2M5LVR: RSSI or Signal Detect for LC Link
  Troubleshooting?"
description_en: The Firecomms FB2M5LRR and FB2M5LVR are 10–250 Mbps LC plastic
  optical fiber transceivers. The FB2M5LRR provides RSSI for tracking received
  optical power, while the FB2M5LVR provides Signal Detect status. Compare pin
  9, receiver optical power limits, and the checks required before swapping
  parts.
body_en: >-
  Pin 9 is the main selection difference between the Firecomms FB2M5LRR and
  FB2M5LVR. Choose the FB2M5LRR with analog RSSI to track received optical power
  on an industrial Ethernet or FPGA link. Choose the FB2M5LVR with Signal Detect
  (SD) if the system only needs optical detection status. Both are LC
  transceivers for 2.2 mm jacketed plastic optical fiber (POF).




  \## How do I measure FB2M5LRR RSSI, and what does it tell me?




  Pin 9 on the FB2M5LRR supplies an analog current related to average received optical power. A load resistor from RSSI to ground converts the current to a voltage for an ADC. Compare readings before and after replacing a cable, reseating a connector, or changing a fiber bend to see whether received optical power changes.




  \- FB2M5LRR Rev. A, page 2, Table 3 defines pin 9. Page 6, Figure 8 shows the typical response with a 10 kΩ load resistor.


  \- Page 2 of the Firecomms EVAL-FB2M5LRR Rev. A guide describes how to measure RSSI voltage with a multimeter or an oscilloscope set to 1 MΩ input impedance.


  \- Use the same data pattern and duty cycle when comparing installation conditions. Calibrate on the actual board and optical link if you need to convert readings to absolute optical power.




  \## Does FB2M5LVR Signal Detect confirm that communication is working?




  Pin 9 on the FB2M5LVR provides optical detection status. Rev. E, page 2, Table 3 and Figure 2 identify the SD output. For troubleshooting, read it alongside PHY or FPGA link status, bit error rate, or CRC error counts.




  For example, if SD indicates that light is detected and CRC errors persist, check the received electrical waveform, interface termination, and optical link conditions. Before connecting SD to a controller or using it as an alarm input, confirm assert and deassert thresholds, output levels, and interface requirements with Firecomms.




  \## What should I check before swapping these LC transceivers?




  Both parts specify a 10–250 Mbps range, a 3.0–3.6 V supply with 3.3 V nominal, and an operating temperature range of −40 to +85 °C. Allow for encoding overhead. For example, 200 Mbps of data with 8B/10B encoding runs at 250 MBd on the optical link. See FB2M5LRR Rev. A, page 9, Table 7 and FB2M5LVR Rev. E, page 8, Table 7.




  \- \*\*Review the pin 9 circuit.\*\* When changing from the FB2M5LVR to the FB2M5LRR, check the load resistor, host measurement interface, and firmware logic.


  \- \*\*Check both ends of the receiver optical power range.\*\* Both datasheets list −24 dBm receiver sensitivity. The maximum allowed receive power is −2 dBm for the FB2M5LRR and 0 dBm for the FB2M5LVR. The receiver tables specify 250 Mbps PRBS7 unless otherwise stated. They also specify optical coupling through at least 0.5 m of step-index POF with a 1 mm core and 0.5 NA. Check the strongest signal on the shortest, lowest-loss link and receiver margin on the longest, highest-loss link.


  \- \*\*Validate with the intended LC cable assembly.\*\* Both datasheets list 50 m over step-index POF at 250 Mbps as a reference on page 1. Verify your required distance with the actual cable assembly, connection losses, bends, and operating rate.




  \## Where can I find datasheets or get selection support?




  \- \[Firecomms FB2M5LRR manufacturer datasheet, Rev. A](https://www.firecomms.com/contentFiles/technicalDocuments/FB2M5LRR%20Datasheet%20Revision%20A.pdf)


  \- \[Firecomms FB2M5LVR manufacturer datasheet, Rev. E](https://www.firecomms.com/contentFiles/technicalDocuments/FB2M5LVR%20Datasheet%20Revision%20E_.pdf)


  \- \[Firecomms LC transceiver evaluation boards and user guides](https://www.firecomms.com/eval-boards/)


  \- \[SIMACITY LC fiber optic transceiver portfolio](https://firecomms-cn.com/en/products.html)


  \- \[Contact SIMACITY about FB2M5LRR and FB2M5LVR selection and LC POF cable assemblies](https://firecomms-cn.com/en/contact.html)
---
Firecomms FB2M5LRR 与 FB2M5LVR 的主要选型区别在 9 脚。需要在工业以太网或 FPGA 光链路中记录接收光功率趋势，选带模拟 RSSI 输出的 FB2M5LRR。只需要读取光信号检测状态，可选带 Signal Detect（SD）输出的 FB2M5LVR。两款都是适配 2.2 mm 外护套塑料光纤（POF）的 LC 收发器。



\## FB2M5LRR 的 RSSI 怎么接？能看出什么？



FB2M5LRR 的 9 脚输出与接收端平均光功率相关的模拟电流。在 RSSI 脚与地之间接负载电阻，可把电流转换成电压，再用 ADC 采样。换线、重新插接或调整弯折前后，可以通过读数判断接收光功率是否发生变化。



\- FB2M5LRR Rev. A 第 2 页表 3 定义了 9 脚，第 6 页图 8 给出采用 10 kΩ 负载电阻时的典型响应曲线。

\- 原厂 EVAL-FB2M5LRR Rev. A 指南第 2 页给出测量方法，可用万用表或设为 1 MΩ 输入的示波器测量 RSSI 电压。

\- 比较不同安装条件时，尽量使用相同码型和占空比。需要把读数换算成绝对光功率时，应在实际板卡和光链路上标定。



\## FB2M5LVR 的 SD 能判断通信正常吗？



FB2M5LVR 的 9 脚提供光信号检测状态。原厂 Rev. E 第 2 页表 3 和图 2 标明了这一路 SD 输出。工程上可把它与 PHY 或 FPGA 的链路状态、误码率或 CRC 错误计数一起看。



例如，SD 显示检测到光信号，但接收端仍有 CRC 错误时，可同时检查接收电信号、接口端接和光链路条件。设计时若要把 SD 接入主控或作为告警依据，应先向原厂确认置位和解除门限、输出电平及接口要求。



\## 两款 LC 收发器换料前要核对什么？



两款器件的规格范围均为 10–250 Mbps，供电为 3.0–3.6 V，标称 3.3 V，工作温度为 −40 至 +85 °C。速率选型要考虑编码开销。例如，200 Mbps 数据经 8B/10B 编码后，光链路符号率为 250 MBd。相关条件见 FB2M5LRR Rev. A 第 9 页表 7 和 FB2M5LVR Rev. E 第 8 页表 7。



\- \*\*核对 9 脚电路。\*\* 从 FB2M5LVR 切换到 FB2M5LRR 时，要重新核对负载电阻、主控采样接口和固件判断逻辑。

\- \*\*检查接收光功率上下限。\*\* 两款规格书均列出 −24 dBm 的接收灵敏度。FB2M5LRR 的允许接收光功率上限为 −2 dBm，FB2M5LVR 为 0 dBm。原厂接收表默认采用 250 Mbps PRBS7，并注明光功率经至少 0.5 m、1 mm 芯径、NA 0.5 的阶跃型 POF 耦入。用最短、最低损耗的链路检查强光条件，用最长、最高损耗的链路检查接收余量。

\- \*\*用实际 LC 跳线验证。\*\* 两份规格书首页均给出在 250 Mbps 下使用阶跃型 POF 的 50 m 参考距离。项目距离应结合实际跳线、连接损耗、弯折和运行速率验证。



\## 哪里可以查规格书或咨询选型？



\- \[Firecomms FB2M5LRR 原厂规格书 Rev. A](https://www.firecomms.com/contentFiles/technicalDocuments/FB2M5LRR%20Datasheet%20Revision%20A.pdf)

\- \[Firecomms FB2M5LVR 原厂规格书 Rev. E](https://www.firecomms.com/contentFiles/technicalDocuments/FB2M5LVR%20Datasheet%20Revision%20E_.pdf)

\- \[Firecomms LC 收发器评估板与用户指南](https://www.firecomms.com/eval-boards/)

\- \[上海芯聚电子 LC 光纤收发器产品中心](https://firecomms-cn.com/products.html)

\- \[咨询 FB2M5LRR、FB2M5LVR 选型和 LC 塑料光纤配套](https://firecomms-cn.com/contact.html)
