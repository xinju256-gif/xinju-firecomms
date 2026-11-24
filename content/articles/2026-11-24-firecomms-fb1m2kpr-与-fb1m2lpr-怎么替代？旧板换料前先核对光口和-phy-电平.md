---
title: Firecomms FB1M2KPR 与 FB1M2LPR 怎么替代？旧板换料前先核对光口和 PHY 电平
date: 2026-11-24T13:46:00.000+08:00
description: Firecomms 将 FB1M2KPR 标为不推荐用于新设计，将 FB1M2LPR 标为已停产，并分别指向 FB2M5KVR 和
  FB2M5LVR。本文对照原厂 Rev. E 规格书，说明如何核对 OptoLock 与 LC 光口、接收差分摆幅和光链路余量。
draft: false
title_en: "Firecomms FB1M2KPR and FB1M2LPR Replacement Guide: Fiber Interface
  and PHY Compatibility"
description_en: Firecomms marks the FB1M2KPR as not recommended for new designs
  and the FB1M2LPR as obsolete. The Rev. E datasheets point to the FB2M5KVR and
  FB2M5LVR, respectively. Check the fiber termination, receiver output swing,
  and optical margin before replacing either part.
body_en: >-
  Start with the existing board’s fiber interface when selecting a replacement
  for the Firecomms FB1M2KPR or FB1M2LPR. The FB1M2KPR uses plugless OptoLock
  termination. Page 1 of its Rev. E datasheet marks it as not recommended for
  new designs and points to the FB2M5KVR. The FB1M2LPR uses a duplex LC plug.
  Page 1 of its Rev. E datasheet marks it as obsolete and points to the
  FB2M5LVR. Before replacing either part on an existing board, validate the
  candidate with the intended cable assembly, PCB, and PHY interface.




  \## How do the FB1M2KPR and FB1M2LPR fiber interfaces differ?




  \- \*\*FB1M2KPR\*\* accepts 2.2 mm jacketed plastic optical fiber (POF). Prepare the fiber ends and insert them directly into the OptoLock latch. Rev. E, page 1 lists 50 m over step-index POF as a reference, subject to installation conditions.


  \- \*\*FB1M2LPR\*\* uses a duplex LC plug. Rev. E, page 1 lists reference configurations of 50 m over step-index POF and 100 m over plastic-clad silica (PCS), subject to installation conditions. Identify the fiber in the existing LC cable assembly and verify the replacement at the actual length.




  \## Are the FB2M5KVR and FB2M5LVR pin-to-pin replacements?




  Firecomms identifies these parts as candidates for new designs. To determine whether either one fits an existing board, check PCB pads, panel clearance, differential termination, receiver levels, and the Signal Detect (SD) interface on pin 9. Matching the optical interface or supply voltage covers only part of that review.




  \- \*\*Check the PHY receive interface.\*\* The two legacy Rev. E datasheets list a typical receiver differential output swing of 1,150 mV and a typical common-mode voltage of 1.41 V on page 6, Table 7. The two candidate Rev. E datasheets list typical values of 800 mV and 1.25 V on page 8, Table 7. Read the figures under their stated measurement conditions and check the actual PHY input swing, coupling, and bias network.


  \- \*\*Verify Signal Detect.\*\* If pin 9 connects to a PHY or controller, check the output with light present, during loss of light, and when light returns. Verify link establishment after power-up and after idle periods.


  \- \*\*Check optical margin.\*\* Both legacy parts list receiver sensitivity of −26 dBm typical and −24 dBm maximum. Both candidate receiver tables list −24 dBm. See the respective test patterns and conditions on page 6 of the legacy Rev. E datasheets and page 8 of the candidate Rev. E datasheets. Verify received power and communication with the actual remote device and the shortest and longest cables, particularly when reusing a PCS cable assembly.




  \## How should I approach legacy repairs and new designs?




  1. \*\*For legacy repair\*\*, record the exact part number, optical interface, PHY model, and installed fiber. If the repair calls for the original part, confirm available stock and lot details. If you change parts, test startup, recovery after loss of light, and sustained traffic on the actual board.


  2. \*\*For a new board\*\*, evaluate the FB2M5KVR for plugless OptoLock termination or the FB2M5LVR for duplex LC. In 100BASE-FX, 100 Mbps of data corresponds to 125 MBd on the optical side after 4B/5B encoding. Validate the link with the intended PHY and data pattern. See page 8, Table 7 of both candidate Rev. E datasheets.




  \## Where can I get the datasheets or replacement support?




  \- \[Firecomms FB1M2KPR manufacturer datasheet, Rev. E](https://www.firecomms.com/contentFiles/technicalDocuments/FB1M2KPR%20Datasheet%20Revision%20E.pdf)


  \- \[Firecomms FB1M2LPR manufacturer datasheet, Rev. E](https://www.firecomms.com/contentFiles/datasheets/FB1M2LPR%20Datasheet%20Revision%20E.pdf)


  \- \[Firecomms FB2M5KVR manufacturer datasheet, Rev. E](https://www.firecomms.com/contentFiles/technicalDocuments/FB2M5KVR%20Datasheet_Revision_E.pdf)


  \- \[Firecomms FB2M5LVR manufacturer datasheet, Rev. E](https://www.firecomms.com/contentFiles/technicalDocuments/FB2M5LVR%20Datasheet%20Revision%20E_.pdf)


  \- \[SIMACITY Firecomms fiber optic transceiver portfolio](https://firecomms-cn.com/en/products.html)


  \- \[Contact SIMACITY about FB1M2KPR and FB1M2LPR spares and replacement validation](https://firecomms-cn.com/en/contact.html)[firecomms-fb1m2kpr-fb1m2lpr-replacement-guide](firecomms-fb1m2kpr-fb1m2lpr-replacement-guide)
---
Firecomms FB1M2KPR 与 FB1M2LPR 的替代选型，先看旧板用哪种光口。FB1M2KPR 使用 OptoLock 免插头端接，原厂 Rev. E 规格书首页标明不推荐用于新设计，并指向 FB2M5KVR。FB1M2LPR 使用 LC 双工插头，原厂 Rev. E 规格书首页标明已停产，并指向 FB2M5LVR。旧板换料前，应按原有线束、PCB 和 PHY 接口验证对应候选型号。



\## FB1M2KPR 和 FB1M2LPR 的光口有什么区别？



\- \*\*FB1M2KPR\*\* 接受 2.2 mm 外护套的塑料光纤（POF），纤芯端面处理后直接插入 OptoLock 卡扣座。其 Rev. E 第 1 页列出的阶跃型 POF 参考距离为 50 m，实际距离取决于安装条件。

\- \*\*FB1M2LPR\*\* 使用 LC 双工插头。其 Rev. E 第 1 页列出 50 m 阶跃型 POF 和 100 m 塑料包层石英光纤（PCS）两种参考配置，并注明受安装条件影响。维修前应确认现有 LC 跳线用的是 POF 还是 PCS，再按实际长度核验候选器件的光链路。



\## FB2M5KVR 和 FB2M5LVR 能做 Pin-to-Pin 替代吗？



这两款是原厂给出的新设计候选。能否直接装到旧板上，要逐项检查 PCB 焊盘与面板开孔、差分端接、接收电平和 9 脚的 Signal Detect（SD）接口。相同的光口形式或供电电压只能覆盖部分换料条件。



\- \*\*先核对 PHY 接收端。\*\* 两款旧料 Rev. E 第 6 页表 7 列出的接收差分输出摆幅为典型 1,150 mV，共模电压为典型 1.41 V。两款候选 Rev. E 第 8 页表 7 分别列出典型 800 mV 和 1.25 V。应按各规格书的测量条件解读这些数值，并检查实际 PHY 输入摆幅、耦合和偏置网络。

\- \*\*再核对 SD 信号。\*\* 如果旧板把 9 脚接到 PHY 或主控，用实物验证有光、断光和恢复时的输出状态。还应核对上电和空闲后的链路建立时间。

\- \*\*检查光链路余量。\*\* 两款旧料的接收灵敏度列为典型 −26 dBm、最大 −24 dBm。两款候选的接收表均列出 −24 dBm。相关测试码型和条件见旧料 Rev. E 第 6 页与候选 Rev. E 第 8 页。用实际对端、最短和最长线缆验证接收功率及通信表现，尤其是沿用 PCS 线束的项目。



\## 旧板维护和新设计分别怎么选？



1. \*\*维护旧设备。\*\* 先记录完整料号、光口类型、PHY 型号和现有光纤。需要原型号备件时，单独确认可交付库存和批次。若要换料，用实际板卡验证启动、断光恢复和持续通信。

2. \*\*开发新板。\*\* 保留免插头 OptoLock 端接时，评估 FB2M5KVR。保留 LC 双工接口时，评估 FB2M5LVR。以 100BASE-FX 为例，100 Mbps 数据经过 4B/5B 编码后对应 125 MBd 光侧符号率。按实际 PHY 和目标码型验证链路，参见两款候选 Rev. E 第 8 页表 7。



\## 哪里可以查规格书或咨询旧板换料？



\- \[Firecomms FB1M2KPR 原厂规格书 Rev. E](https://www.firecomms.com/contentFiles/technicalDocuments/FB1M2KPR%20Datasheet%20Revision%20E.pdf)

\- \[Firecomms FB1M2LPR 原厂规格书 Rev. E](https://www.firecomms.com/contentFiles/datasheets/FB1M2LPR%20Datasheet%20Revision%20E.pdf)

\- \[Firecomms FB2M5KVR 原厂规格书 Rev. E](https://www.firecomms.com/contentFiles/technicalDocuments/FB2M5KVR%20Datasheet_Revision_E.pdf)

\- \[Firecomms FB2M5LVR 原厂规格书 Rev. E](https://www.firecomms.com/contentFiles/technicalDocuments/FB2M5LVR%20Datasheet%20Revision%20E_.pdf)

\- \[上海芯聚电子 Firecomms 光纤收发器产品中心](https://firecomms-cn.com/products.html)

\- \[咨询 FB1M2KPR、FB1M2LPR 备件及替代验证](https://firecomms-cn.com/contact.html)[firecomms-fb1m2kpr-fb1m2lpr-replacement-guide](firecomms-fb1m2kpr-fb1m2lpr-replacement-guide)
