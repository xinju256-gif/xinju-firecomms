---
title: Firecomms FB2M5PVR 与 FB2M5PRR 怎么选？RedLink 光链路掉线时看 SD 还是 RSSI
date: 2026-11-24T13:52:00.000+08:00
description: Firecomms FB2M5PVR 与 FB2M5PRR 均为双工 RedLink 塑料光纤收发器。FB2M5PVR 通过 6
  脚输出光信号检测状态，FB2M5PRR 通过 6 脚监测平均接收光功率。本文说明 SD 门限、RSSI 读出电路和板卡换料验证。
title_en: "Firecomms FB2M5PVR vs FB2M5PRR: SD or RSSI for RedLink Dropouts?"
description_en: The Firecomms FB2M5PVR and FB2M5PRR are duplex RedLink plastic
  optical fiber transceivers. Pin 6 reports Signal Detect status on the FB2M5PVR
  and tracks average received optical power on the FB2M5PRR. Compare SD
  thresholds, RSSI readout, and board-level replacement checks.
body_en: >-
  Choose between the Firecomms FB2M5PVR and FB2M5PRR based on what the system
  needs to monitor. Use the FB2M5PVR with Signal Detect (SD) if you only need
  optical detection status. Use the FB2M5PRR with analog RSSI if you need to
  track received optical power before and after a dropout. Both are duplex
  RedLink plastic optical fiber (POF) transceivers. Both use pin 6 for
  monitoring, with different electrical interfaces to the host.




  \## Does FB2M5PVR Signal Detect confirm that data is getting through?




  Pin 6 on the FB2M5PVR outputs SD status. Firecomms Rev. B, page 2, Table 3 identifies the pin. Page 9, Table 11 lists typical optical thresholds of −31 dBm for assertion and −33 dBm for deassertion, with 2 dB of typical hysteresis. The threshold test conditions include a 10 kΩ pull-down load on the SD output.




  The same table lists receiver sensitivity of −24 dBm. The typical SD assertion threshold is below that sensitivity figure, so verify communication with PHY link status, bit error rate, or CRC error counts after SD asserts. For intermittent dropouts, log SD and errors together to see whether optical detection status changes around the time of the fault.




  \## How do I connect FB2M5PRR RSSI to an ADC?




  Pin 6 on the FB2M5PRR supplies an analog current related to average received optical power. A resistor from RSSI to ground converts the current to a voltage for external measurement. Firecomms Rev. A, page 2, Table 3 and Figure 2 show the pin and reference circuit. Figure 9 on page 6 plots RSSI voltage against average optical power with a 10 kΩ load.




  \- \*\*Verify the measurement range.\*\* Start with the 10 kΩ reference load and check the ADC input range and measurement loading. Page 2 of the Firecomms EVAL-FB2M5PRR Rev. Orig guide uses a 1 MΩ oscilloscope input to measure RSSI.


  \- \*\*Keep measurements comparable.\*\* Use the same data pattern and duty cycle when reseating a plug, replacing a cable, or changing a bend. Rev. A, page 6 notes that RSSI voltage also varies with receiver temperature. Calibrate on the actual board and optical link if you need absolute readings in dBm.




  \## What should I verify before swapping these RedLink transceivers?




  Both use a nominal 3.3 V supply and support optical signaling from 10 to 250 MBd. In the Firecomms Fast Ethernet example, 100 Mbps of data with 4B/5B encoding corresponds to 125 MBd. Page 1 of both datasheets lists reference distances over step-index POF of 50 m at a 250 MBd optical signaling rate and 80 m at a 100 Mbps data rate. Actual distance depends on installation and operating rate.




  \- \*\*Check the pin 6 circuit.\*\* If the original board reads SD with a digital input, review the load resistor, analog sampling circuit, and firmware logic before switching to the FB2M5PRR.


  \- \*\*Check optical power and test conditions.\*\* FB2M5PVR Rev. B, page 9, Table 11 and FB2M5PRR Rev. A, page 10, Table 10 both specify −24 dBm receiver sensitivity and −2 dBm maximum allowed received power. The default tests use 250 Mbps PRBS7 and couple optical power through at least 0.5 m of step-index POF with a 1 mm core and 0.5 NA. Verify optical power and error performance with the intended RedLink plugs, remote device, and cable.


  \- \*\*Measure received data and the monitor output together.\*\* Start with a local loopback, then capture pin 6 and the receive data on the intended link during normal traffic and recovery after loss of light.




  \## Where can I find the datasheets or get selection support?




  \- \[Firecomms FB2M5PVR manufacturer datasheet, Rev. B](https://www.firecomms.com/contentFiles/technicalDocuments/FB2M5PVR-Datasheet-Rev-B.pdf)


  \- \[Firecomms FB2M5PRR manufacturer datasheet, Rev. A](https://www.firecomms.com/contentFiles/technicalDocuments/FB2M5PRR-Datasheet-Rev-A.pdf)


  \- \[Firecomms FB2M5PRR evaluation board guide, Rev. Orig](https://www.firecomms.com/contentFiles/contentblockaccordions/EVAL-FB2M5PRR_RedLink_Evaluation_Board_User_Guide_Rev_Orig.pdf)


  \- \[SIMACITY RedLink fiber optic transceiver portfolio](https://firecomms-cn.com/en/products.html)


  \- \[Contact SIMACITY about FB2M5PVR and FB2M5PRR selection and RedLink cable assemblies](https://firecomms-cn.com/en/contact.html)[fb2m5pvr-vs-fb2m5prr-redlink-sd-rssi](fb2m5pvr-vs-fb2m5prr-redlink-sd-rssi)
---
Firecomms FB2M5PVR 与 FB2M5PRR 的选型取决于需要监测什么。系统只需要读取光信号检测状态时，可选带 Signal Detect（SD）输出的 FB2M5PVR。需要在掉线前后记录接收光功率变化时，可选带模拟 RSSI 输出的 FB2M5PRR。两款都是双工 RedLink 塑料光纤（POF）收发器，监测功能都在 6 脚，接入主控的方式不同。



\## FB2M5PVR 的 Signal Detect 置位后，通信就正常了吗？



FB2M5PVR 的 6 脚输出 SD 状态。原厂 Rev. B 第 2 页表 3 定义了引脚，第 9 页表 11 给出典型光功率门限：置位 −31 dBm，解除置位 −33 dBm，典型迟滞 2 dB。门限测试条件包含 SD 输出接 10 kΩ 下拉负载。



同一规格表列出的接收灵敏度为 −24 dBm。由于 SD 典型置位门限低于该灵敏度指标，SD 置位后仍应查看 PHY 链路状态、误码率或 CRC 错误计数。间歇掉线时，可同步记录 SD 与错误计数，判断错误发生前后是否出现过光信号检测状态变化。



\## FB2M5PRR 的 RSSI 怎么接到 ADC？



FB2M5PRR 的 6 脚输出与平均接收光功率相关的模拟电流。在 RSSI 脚与地之间接负载电阻，可生成供外部电路采样的电压。原厂 Rev. A 第 2 页表 3 和图 2 给出引脚及参考电路，第 6 页图 9 给出 10 kΩ 负载下的 RSSI 电压与平均光功率曲线。



\- \*\*先验证采样范围。\*\* 用 10 kΩ 参考负载搭建样机，核对 ADC 输入范围和测量负载。原厂 EVAL-FB2M5PRR 指南 Rev. Orig 第 2 页使用 1 MΩ 输入的示波器观察 RSSI。

\- \*\*尽量保持测量条件一致。\*\* 重新插接、换线或调整光纤弯折时，保持码型和占空比一致。原厂 Rev. A 第 6 页指出，RSSI 电压还随接收器温度变化。需要以 dBm 记录绝对光功率时，应在实际板卡和光链路上标定。



\## 两款 RedLink 收发器换料时要验证什么？



两款采用标称 3.3 V 供电，支持 10–250 MBd 光侧符号率。原厂以 100 Mbps 快速以太网为例，4B/5B 编码后对应 125 MBd。两份规格书第 1 页均列出阶跃型 POF 的参考距离：250 MBd 光侧速率下 50 m，100 Mbps 数据速率下 80 m。实际距离取决于安装和速率条件。



\- \*\*确认 6 脚外围电路。\*\* 原板若按 SD 状态接入数字输入，改用 FB2M5PRR 时，应核对负载电阻、模拟采样电路和固件判断逻辑。

\- \*\*核对光功率与测试条件。\*\* FB2M5PVR Rev. B 第 9 页表 11 和 FB2M5PRR Rev. A 第 10 页表 10 均列出 −24 dBm 的接收灵敏度和 −2 dBm 的允许接收光功率上限。原厂默认使用 250 Mbps PRBS7 码型，并通过至少 0.5 m、1 mm 芯径、NA 0.5 的阶跃型 POF 耦光。应使用实际 RedLink 插头、对端设备和线缆验证光功率及误码。

\- \*\*把接收数据和监测信号一起测。\*\* 可先做本机回环，再在实际链路上同时采集 6 脚输出与接收数据，观察断光恢复和正常通信时的表现。



\## 哪里可以查规格书或咨询选型？



\- \[Firecomms FB2M5PVR 原厂规格书 Rev. B](https://www.firecomms.com/contentFiles/technicalDocuments/FB2M5PVR-Datasheet-Rev-B.pdf)

\- \[Firecomms FB2M5PRR 原厂规格书 Rev. A](https://www.firecomms.com/contentFiles/technicalDocuments/FB2M5PRR-Datasheet-Rev-A.pdf)

\- \[Firecomms FB2M5PRR 评估板指南 Rev. Orig](https://www.firecomms.com/contentFiles/contentblockaccordions/EVAL-FB2M5PRR_RedLink_Evaluation_Board_User_Guide_Rev_Orig.pdf)

\- \[上海芯聚电子 RedLink 光纤收发器产品中心](https://firecomms-cn.com/products.html)

\- \[咨询 FB2M5PVR、FB2M5PRR 选型及 RedLink 光纤线束配套](https://firecomms-cn.com/contact.html)[fb2m5pvr-vs-fb2m5prr-redlink-sd-rssi](fb2m5pvr-vs-fb2m5prr-redlink-sd-rssi)
