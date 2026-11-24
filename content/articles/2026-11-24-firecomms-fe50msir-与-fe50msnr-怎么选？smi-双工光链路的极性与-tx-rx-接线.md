---
title: Firecomms FY-ENC-KSU 怎么接？百兆 RJ45 转塑料光纤要用一台还是两台
date: 2026-11-24T11:45:00.000+08:00
description: Firecomms FY-ENC-KSU 将 100BASE-TX RJ45 铜缆链路接入 OptoLock 塑料光纤。本文依据原厂
  Rev. C 规格书说明单台与成对使用的条件、Tx/Rx 接法、5 V 供电，以及 80 m 链路距离和 50 m 标准线缆订购长度的区别。
title_en: "Firecomms FY-ENC-KSU: Do You Need One or Two Converters for RJ45 to POF?"
description_en: The Firecomms FY-ENC-KSU converts 100BASE-TX RJ45 Ethernet to
  OptoLock plastic optical fiber. Using the Rev. C datasheet, this guide covers
  single and paired setups, Tx/Rx wiring, 5 V power, and the difference between
  the 80 m link rating and the 50 m standard cable ordering limit.
body_en: >-
  The Firecomms FY-ENC-KSU is a Fast Ethernet media converter that connects a
  100BASE-TX RJ45 copper port to OptoLock® plastic optical fiber (POF). When
  both devices have RJ45 copper ports, use one converter at each end and connect
  them with duplex POF. If one device already has a compatible Fast Ethernet POF
  port, a single converter at the copper end may be sufficient. Firecomms
  describes both configurations on page 1 of the Rev. C datasheet.




  \## Do I need one converter or two?




  \- \*\*Both devices have RJ45 copper ports.\*\* For example, each control cabinet may contain an Ethernet switch. Connect each switch to its local FY-ENC-KSU with a copper Ethernet cable and run POF between the converters.


  \- \*\*One device has RJ45 and the other already has POF.\*\* Check the remote port's rate, optical signaling, and fiber termination before testing direct interoperability with the FY-ENC-KSU. Use the remote device model and optical port specifications when checking compatibility.


  \- \*\*Check both rates.\*\* 100 Mbps is the Fast Ethernet data rate. 125 MBd is the optical signaling rate. See Rev. C, pages 1–2.




  \## How do I connect Tx and Rx on an OptoLock duplex POF link?




  Use POF with a compatible 2.2 mm jacket. Following the installation instructions on pages 3–6 of Rev. C, separate the two strands and use a POF cutter to prepare clean, flat ends. Open the OptoLock latch, insert each fiber fully, and close the latch. Run each strand from Tx at one end to Rx at the other to create the two optical paths.




  Auto-MDIX applies to the RJ45 copper connection. Use the T/R markings to verify optical routing. Once both units are powered and connected to the Ethernet devices, check the indicators and verify end-to-end traffic. If the power indicator is on and the link is down, check Tx/Rx routing, fiber seating, and the condition of the cut ends first.




  \## What do the 80 m link rating and 50 m cable ordering limit mean?




  \- \*\*80 m is the link distance stated by Firecomms.\*\* Rev. C, page 1 lists up to 80 m over POF at 100 Mbps Fast Ethernet. For installations close to that distance, test the actual fiber type, end preparation, and routing.


  \- \*\*50 m is the maximum standard cable length listed for the meter-based ordering code.\*\* Rev. C, page 7 lists the ordering rules for simplex and duplex step-index POF. The \`xxM\` length code goes up to 50 m. If the project requires a longer continuous run, confirm cable availability and validate the link separately.




  \## How is the FY-ENC-KSU powered, and what should I order?




  Rev. C, page 2 specifies a 4.5–5.5 V DC input with 5 V nominal, a current specification of 100–260 mA, and an operating temperature range of −10 to +60 °C. Page 4 describes using a 5 V adapter or a USB power-only cable. FY-ENC-KSU is the part number for the converter itself. Order the power supply, USB power cable, POF, and Ethernet cables as needed. See the accessory list on page 7.




  \## Where can I find the datasheet or get selection support?




  \- \[Firecomms FY-ENC-KSU manufacturer datasheet and installation instructions, Rev. C](https://www.firecomms.com/contentFiles/contentBlocksFiles/FY-ENC-KSU_Media_Converter_Datasheet_Rev_C.pdf)


  \- \[Firecomms media converter catalog](https://www.firecomms.com/media-converter/)


  \- \[SIMACITY Firecomms product portfolio](https://firecomms-cn.com/en/products.html)


  \- \[Contact SIMACITY about the FY-ENC-KSU, duplex POF, and power accessories](https://firecomms-cn.com/en/contact.html)
---
Firecomms FY-ENC-KSU 是一款百兆塑料光纤媒体转换器，把 100BASE-TX RJ45 铜口接入 OptoLock® 塑料光纤（POF）。两端都是 RJ45 铜口时，每端各用一台转换器，中间用双芯 POF 连接。若一端设备已有兼容的百兆 POF 光口，可评估只在铜口一端使用一台。原厂规格书 Rev. C 第 1 页给出了这两种用法。



\## 一台还是两台？先看两端的端口



\- \*\*两端都是 RJ45 铜口。\*\* 例如两个控制柜内各有一台以太网交换机。用两台 FY-ENC-KSU，交换机分别通过网线连接本端转换器，两台转换器之间走塑料光纤。

\- \*\*一端是 RJ45，另一端已有 POF 光口。\*\* 先确认对端的速率、光信号接口和光纤端接方式，再验证能否与 FY-ENC-KSU 直接通信。选型时可同时提供对端设备型号和光口规格。

\- \*\*区分数据速率与符号率。\*\* 100 Mbps 是快速以太网的数据速率，125 MBd 是光侧符号率。参见 Rev. C 第 1–2 页。



\## OptoLock 双芯 POF 的 Tx 和 Rx 怎么接？



用适配 2.2 mm 外护套的 POF。按 Rev. C 第 3–6 页的安装说明，将两根纤芯分开，用光纤切割工具制备干净平整的端面。打开 OptoLock 卡扣，插到底后锁紧。每根纤芯都从一端的 Tx 接到另一端的 Rx，形成两个方向的光路。



Auto-MDIX 用于 RJ45 铜缆侧。光纤侧应按 T/R 标识核对两根纤芯的方向。两端通电并接好网线后，先查看指示灯，再用实际业务流量验证端到端通信。如果电源灯亮但链路仍不通，优先核对 Tx/Rx 方向、光纤是否插到底和端面质量。



\## 80 m 光链路与 50 m 线缆长度分别指什么？



\- \*\*80 m 是原厂列出的链路能力。\*\* Rev. C 第 1 页列出，传输 100 Mbps 快速以太网时，POF 链路最长可达 80 m。接近该距离时，应按实际光纤型号、端面和布线路径测试。

\- \*\*50 m 是附件表中的标准米制线缆订购长度上限。\*\* Rev. C 第 7 页列出阶跃型单芯和双芯 POF 的订购规则，\`xxM\` 长度代码最大为 50 m。项目需要更长的连续线缆时，应单独确认供货规格并验证链路。



\## FY-ENC-KSU 怎么供电？下单要配什么？



Rev. C 第 2 页规定输入电压为 4.5–5.5 V DC，标称 5 V，电流规格为 100–260 mA，工作温度为 −10 至 +60 °C。第 4 页说明可使用 5 V 适配器或 USB 专用供电线。FY-ENC-KSU 是主机料号。电源、USB 供电线、POF 和网线需按项目另配，原厂附件清单见第 7 页。



\## 哪里可以查规格书或咨询配套？



\- \[Firecomms FY-ENC-KSU 原厂规格书与安装说明 Rev. C](https://www.firecomms.com/contentFiles/contentBlocksFiles/FY-ENC-KSU_Media_Converter_Datasheet_Rev_C.pdf)

\- \[Firecomms 原厂媒体转换器目录](https://www.firecomms.com/media-converter/)

\- \[上海芯聚电子 Firecomms 产品中心](https://firecomms-cn.com/products.html)

\- \[咨询 FY-ENC-KSU、双芯 POF 及电源配套](https://firecomms-cn.com/contact.html)
