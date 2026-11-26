---
title: Firecomms FT1M2HNR、FT1M2VNR、FT1M2WNR 怎么选？百兆 RedLink 发射器的安装与 PHY 接线
date: 2026-11-26T10:43:00.000+08:00
description: Firecomms FT1M2xNR 是内置 RCLED 驱动的 RedLink 光纤发射器系列。本文依据原厂 Rev. A
  规格书，对照三款型号的安装方向、3.3 V 差分接口和 100BASE-FX 光侧 125 MBd 条件。
draft: false
title_en: "Firecomms FT1M2HNR, FT1M2VNR, and FT1M2WNR: Mounting and PHY Wiring
  for Fast Ethernet"
description_en: The Firecomms FT1M2xNR series offers three RedLink fiber optic
  transmitters with integrated RCLED drivers. This guide uses the Rev. A
  datasheet to compare mounting options, explain the 3.3 V differential
  interface, and show why 100BASE-FX runs at 125 MBd.
body_en: >-
  Choose the Firecomms FT1M2HNR for horizontal mounting, the FT1M2VNR for
  vertical mounting, or the FT1M2WNR for 30° tilted mounting. All three FT1M2xNR
  Fast Ethernet RedLink fiber optic transmitters are non-inverting, have
  integrated RCLED drivers, and use a nominal 3.3 V supply. Once you select the
  package, check AC coupling and termination against the actual differential
  output of your PHY, FPGA, or ASIC.




  \## Where can I find the PCB footprint for each model?




  \- \*\*FT1M2HNR, horizontal mount.\*\* See Rev. A, page 6, Figure 7 for the PCB hole pattern.


  \- \*\*FT1M2VNR, vertical mount.\*\* See page 7, Figure 9 for the PCB hole pattern.


  \- \*\*FT1M2WNR, 30° tilted mount.\*\* See page 8, Figure 11 for the PCB hole pattern.




  Page 1, Table 1 lists the full ordering codes. When changing mounting orientation, use the correct drawing to check the PCB holes, panel opening, plug insertion and removal clearance, and fiber bend radius.




  \## How do I connect the FT1M2HNR to a differential PHY output?




  Rev. A, page 2, Table 3 identifies pin 1 as VCC, pin 2 as GND, pin 3 as TD+, and pin 4 as TD−. The reference circuit in Figure 2 uses a 100 nF series coupling capacitor on each differential input, a 100 Ω termination across the pair at the transmitter input, and a 100 nF decoupling capacitor near VCC.




  Figures 4–6 on page 3 show separate LVDS, CML, and LVPECL examples. The examples make different assumptions about internal termination at the source. Check the actual PHY, FPGA, or ASIC output specification for internal termination, common-mode voltage, and differential swing. Table 6 on page 5 specifies a 3.0–3.6 V operating supply and a temperature range of −40 to +85 °C.




  \## Why does 100BASE-FX use 125 MBd?




  100BASE-FX carries 100 Mbps of data. Its 4B/5B encoding maps each four data bits to a five-bit code group, giving an optical signaling rate of 125 MBd. The FT1M2xNR Rev. A datasheet lists a signaling range of 10–250 MBd in Table 6 on page 5, with the applicable rate depending on the encoding.




  Verify three conditions on the prototype.




  1. \*\*Differential input waveform.\*\* Check amplitude and termination at TD+ and TD−. Verify transmitter operation with the intended data pattern.


  2. \*\*Recovery from idle.\*\* Table 6 lists a wake-up delay of 5 µs typical and 80 µs maximum. If the PHY stops driving the transmitter during standby, verify link establishment and initial traffic through the actual standby and resume sequence.


  3. \*\*End-to-end optical link.\*\* Page 1, Table 2 lists reference distances of 50 m over step-index POF and 100 m over 200 µm PCS, subject to installation conditions. Check received optical power and error performance with the intended plugs, cable length, bends, and remote receiver.




  \## Where can I find the datasheet or get design support?




  \- \[Firecomms FT1M2xNR manufacturer datasheet, Rev. A](https://www.firecomms.com/contentFiles/technicalDocuments/FT1M2xNR-Datasheet-Rev-A.pdf)


  \- \[Firecomms RedLink product catalog](https://www.firecomms.com/redlink/)


  \- \[SIMACITY Firecomms fiber optic product portfolio](https://firecomms-cn.com/en/products.html)


  \- \[Contact SIMACITY about FT1M2HNR, FT1M2VNR, and FT1M2WNR selection and PHY interfacing](https://firecomms-cn.com/en/contact.html)[firecomms-ft1m2xnr-fast-ethernet-transmitter-selection](firecomms-ft1m2xnr-fast-ethernet-transmitter-selection)
---
Firecomms FT1M2xNR 百兆 RedLink 光纤发射器按安装方向选型。水平安装选 FT1M2HNR，垂直安装选 FT1M2VNR，30° 倾斜安装选 FT1M2WNR。三款均为非反相型，集成 RCLED 驱动，使用标称 3.3 V 供电。选定封装后，应按 PHY、FPGA 或 ASIC 的实际差分接口核对交流耦合和端接。



\## 三款型号的 PCB 孔位在哪里查？



\- \*\*FT1M2HNR，水平安装。\*\* PCB 孔位见 Rev. A 第 6 页图 7。

\- \*\*FT1M2VNR，垂直安装。\*\* PCB 孔位见第 7 页图 9。

\- \*\*FT1M2WNR，30° 倾斜安装。\*\* PCB 孔位见第 8 页图 11。



完整订购料号见第 1 页表 1。更换安装方向时，按对应机械图核对 PCB 孔位、面板开口、插拔净空及光纤弯曲半径。



\## FT1M2HNR 怎么接 PHY 的差分输出？



Rev. A 第 2 页表 3 给出引脚定义。1 脚为 VCC，2 脚为 GND，3 脚为差分输入 TD+，4 脚为差分输入 TD−。同页图 2 的参考电路在差分输入两线上各串联 100 nF 耦合电容，在发射器输入侧跨接 100 Ω 端接电阻，并在 VCC 引脚附近放置 100 nF 去耦电容。



第 3 页图 4–6 分别给出 LVDS、CML 和 LVPECL 接法。三个例图对源端内部端接的假设不同。设计时应查实际 PHY、FPGA 或 ASIC 的输出规格，核对是否已有内部端接，以及共模电压和差分摆幅是否满足发射器输入条件。第 5 页表 6 给出的工作供电范围为 3.0–3.6 V，工作温度为 −40 至 +85 °C。



\## 100BASE-FX 为什么对应 125 MBd？



100BASE-FX 的数据速率为 100 Mbps。4B/5B 编码把每 4 位数据映射为 5 位码组，光侧符号率因此为 125 MBd。FT1M2xNR Rev. A 第 5 页表 6 列出的符号率范围为 10–250 MBd，并注明需结合编码条件判断。



样机验证时，可以依次检查以下三项。



1. \*\*差分输入波形。\*\* 在 TD+ 和 TD− 处检查幅度与端接，并用实际发送码型确认发射端工作状态。

2. \*\*待机后的恢复。\*\* 表 6 列出的唤醒延时为典型 5 µs、最大 80 µs。如果 PHY 会在待机时停止驱动发射器，应用实际待机与恢复流程验证链路建立和首批数据。

3. \*\*整条光链路。\*\* 第 1 页表 2 列出 50 m 阶跃型 POF 和 100 m、200 µm PCS 的参考距离，并注明受安装条件影响。按实际插头、线长、弯折和远端接收器验证光功率与误码表现。



\## 哪里可以查规格书或咨询选型？



\- \[Firecomms FT1M2xNR 原厂规格书 Rev. A](https://www.firecomms.com/contentFiles/technicalDocuments/FT1M2xNR-Datasheet-Rev-A.pdf)

\- \[Firecomms RedLink 原厂产品目录](https://www.firecomms.com/redlink/)

\- \[上海芯聚电子 Firecomms 光纤器件产品中心](https://firecomms-cn.com/products.html)

\- \[咨询 FT1M2HNR、FT1M2VNR、FT1M2WNR 选型及 PHY 接口](https://firecomms-cn.com/contact.html)[firecomms-ft1m2xnr-fast-ethernet-transmitter-selection](firecomms-ft1m2xnr-fast-ethernet-transmitter-selection)
