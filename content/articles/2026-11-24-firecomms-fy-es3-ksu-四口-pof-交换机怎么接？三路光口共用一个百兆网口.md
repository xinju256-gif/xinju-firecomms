---
title: Firecomms FY-ES3-KSU 四口 POF 交换机怎么接？三路光口共用一个百兆网口
date: 2026-11-24T13:44:00.000+08:00
description: Firecomms FY-ES3-KSU 是一款 3 光 1 电的百兆塑料光纤交换机。本文依据原厂 Rev. A 规格书说明
  OptoLock 光口接线、三路流量汇聚到 RJ45 时的带宽限制，以及 5 V 供电和线缆选型。
draft: false
title_en: "Firecomms FY-ES3-KSU 4-Port POF Switch: How Three Fiber Links Share
  One RJ45 Uplink"
description_en: The Firecomms FY-ES3-KSU Fast Ethernet POF switch has three
  OptoLock fiber ports and one RJ45 copper port. Using the Rev. A datasheet,
  this guide covers wiring, shared uplink bandwidth, 5 V power, and cable
  selection.
body_en: >-
  The Firecomms FY-ES3-KSU is a four-port unmanaged plastic optical fiber (POF)
  switch with three OptoLock optical ports and one 100BASE-TX RJ45 copper port.
  To connect three devices with compatible Fast Ethernet POF ports to an
  upstream copper network, connect each device to its own optical port and use
  RJ45 for the uplink. Traffic from all three devices shares one 100 Mbps link
  when it goes through that uplink. See Firecomms Rev. A, pages 1–2, for the
  port specifications.




  \## How should I use the three optical ports and the RJ45 port?




  \- \*\*Use the RJ45 copper port\*\* for an upstream switch, a router, or a device with copper Ethernet. Firecomms specifies 100 Mbps Fast Ethernet and Auto-MDIX on the copper side.


  \- \*\*Use the three OptoLock optical ports\*\* for compatible Fast Ethernet POF devices. The optical signaling rate is 125 MBd, which carries 100 Mbps Fast Ethernet data. See Rev. A, pages 1–2.


  \- \*\*If a remote device only has RJ45\*\*, place a compatible POF media converter beside it and run duplex POF to the FY-ES3-KSU. For a single point-to-point POF link between two RJ45 devices, use one FY-ENC-KSU at each end. See the FY-ENC-KSU Rev. C datasheet, page 1.




  \## Is one 100 Mbps RJ45 uplink enough for three devices?




  It depends on how much traffic the three devices send upstream at the same time. For example, three devices each continuously uploading at 40 Mbps generate 120 Mbps in total. That exceeds the line rate of the single 100 Mbps RJ45 uplink. If the devices mainly send short control messages, check latency and packet loss under concurrent traffic.




  During acceptance testing, run the actual workload on all three links and check utilization and packet drops at the upstream switch. For devices uploading images or large files, measure application throughput as well, since Ethernet framing and higher-layer protocols consume some capacity.




  \## How do I wire duplex POF, and what does the 80 m rating mean?




  Use duplex step-index POF with a 2.2 mm jacket as listed in the Firecomms accessory section. Cut the fiber ends flat, insert the strands fully, and close the OptoLock latch. On each link, route local Tx to remote Rx and remote Tx back to local Rx. Verify each link individually, then test all three under concurrent traffic.




  Rev. A, page 1 lists up to 80 m over POF for 100 Mbps data. The standard meter-based cable ordering code \`xxM\` goes up to 50 m in the accessory section on page 3. For a continuous cable run longer than 50 m, confirm the available cable length and validate the link using the actual fiber, end preparation, and bends.




  \## How is the FY-ES3-KSU powered, and what should I order?




  Rev. A, page 2 specifies a 4.5–5.5 V DC input with 5 V nominal, current consumption of 380–420 mA, and an operating temperature range of 0 to +50 °C. Page 3 lists a 5 V, 500 mA power adapter and a USB power cable.




  FY-ES3-KSU is the part number for the switch itself. Order the power supply, USB power cable, POF, and Ethernet cables separately as needed. For cabinet installation, check the temperature at the mounting location and the available power.




  \## Where can I find the datasheets or get design support?




  \- \[Firecomms FY-ES3-KSU manufacturer datasheet, Rev. A](https://www.firecomms.com/contentFiles/contentBlocksFiles/POF_Switch_Datasheet_Rev_A.pdf)


  \- \[Firecomms FY-ENC-KSU media converter datasheet, Rev. C](https://www.firecomms.com/contentFiles/contentBlocksFiles/FY-ENC-KSU_Media_Converter_Datasheet_Rev_C.pdf)


  \- \[SIMACITY Firecomms product portfolio](https://firecomms-cn.com/en/products.html)


  \- \[Contact SIMACITY about FY-ES3-KSU network design, duplex POF, and power accessories](https://firecomms-cn.com/en/contact.html)
---
Firecomms FY-ES3-KSU 是一款四口非网管塑料光纤（POF）交换机，提供 3 个 OptoLock 光口和 1 个 100BASE-TX RJ45 铜口。需要把三台具有兼容百兆 POF 光口的设备接入同一个铜缆以太网时，可以让三台设备各占一个光口，再用 RJ45 接上级交换机。三路流量同时经 RJ45 上行时，共用这一条 100 Mbps 链路。端口规格见 Firecomms Rev. A 第 1–2 页。



\## 3 个光口和 1 个 RJ45 铜口怎么分配？



\- \*\*RJ45 铜口\*\*可接上级交换机、路由器或一台铜口设备。原厂标注该口为 100 Mbps Fast Ethernet，并支持 Auto-MDIX。

\- \*\*3 个 OptoLock 光口\*\*可分别连接兼容的百兆 POF 设备。光侧符号率为 125 MBd，对应 100 Mbps 快速以太网数据速率。参见 Rev. A 第 1–2 页。

\- \*\*对端只有 RJ45 时\*\*，可在该设备旁配置兼容的 POF 媒体转换器，再用双芯塑料光纤接入 FY-ES3-KSU。若项目只需把两台 RJ45 设备经一段 POF 点对点连接，两端可各用一台 FY-ENC-KSU。参见 FY-ENC-KSU 原厂 Rev. C 第 1 页。



\## 三路设备同时上传数据，百兆 RJ45 够用吗？



要看三路设备在同一时间送往上级网络的流量。比如三台设备各以 40 Mbps 持续上传，合计 120 Mbps，已超过单个 100 Mbps RJ45 上行口的线速。若三台设备主要交换短控制报文，则应重点检查并发时的延迟和丢包。



验收时，用实际业务负载同时运行三条支路，查看上级交换机端口的利用率和丢包计数。对上传图像或大文件的设备，还应测量业务的实际吞吐，因为以太网和上层协议本身也会占用带宽。



\## 双芯 POF 怎么接？80 m 距离怎么理解？



参照原厂附件表选择 2.2 mm 外护套的双芯阶跃型 POF。将纤芯端面切平，插到底并锁紧 OptoLock 卡扣。每条链路应把本端 Tx 接到对端 Rx，并把对端 Tx 接回本端 Rx。调试时可先逐条验证，再检查三路并发。



Rev. A 第 1 页列出 100 Mbps 数据传输时 POF 链路最长可达 80 m。第 3 页附件表中，标准米制线缆长度代码 \`xxM\` 最大为 50 m。需要超过 50 m 的连续线缆时，应确认供货长度，并用实际光纤、端面和弯折条件验证链路。



\## FY-ES3-KSU 怎么供电？下单要包含哪些附件？



Rev. A 第 2 页列出的输入电压为 4.5–5.5 V DC，标称 5 V，工作电流为 380–420 mA，工作温度为 0 至 +50 °C。第 3 页列有 5 V、500 mA 电源适配器和 USB 供电线。



FY-ES3-KSU 是主机料号。电源、USB 供电线、POF 和网线需另配。若安装在控制柜内，选型时应核对安装位置的实际温度和供电能力。



\## 哪里可以查原厂资料或咨询组网？



\- \[Firecomms FY-ES3-KSU 原厂规格书 Rev. A](https://www.firecomms.com/contentFiles/contentBlocksFiles/POF_Switch_Datasheet_Rev_A.pdf)

\- \[Firecomms FY-ENC-KSU 媒体转换器原厂规格书 Rev. C](https://www.firecomms.com/contentFiles/contentBlocksFiles/FY-ENC-KSU_Media_Converter_Datasheet_Rev_C.pdf)

\- \[上海芯聚电子 Firecomms 产品中心](https://firecomms-cn.com/products.html)

\- \[咨询 FY-ES3-KSU 组网、双芯 POF 和电源配套](https://firecomms-cn.com/contact.html)
