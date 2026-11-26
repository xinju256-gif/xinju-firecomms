---
title: Firecomms FR05DxDR、FR05DxIR、FR05DxCR 怎么选？5 MBd 接收器换料先查 4 脚与上拉
date: 2026-11-26T11:27:00.000+08:00
description: Firecomms FR05DxIR 为推挽输出，FR05DxCR 为开集电极输出，FR05DxDR 为 MOSFET
  开漏输出。本文对照三份原厂规格书，说明 4 脚接法、20 V 开关条件，以及选型时如何验证上拉和输出波形。
title_en: Firecomms FR05DxDR vs FR05DxIR vs FR05DxCR — Pin 4 and Pull-Up Checks
  Before a Swap
description_en: The Firecomms FR05DxIR uses push-pull CMOS, the FR05DxCR uses
  open collector, and the FR05DxDR uses MOSFET open drain. Compare pin 4 wiring,
  20 V switching conditions, and the output checks required before replacing a 5
  MBd RedLink receiver.
body_en: >-
  The Firecomms FR05DxDR, FR05DxIR, and FR05DxCR are DC–5 MBd RedLink inverting
  fiber optic receivers. Evaluate the FR05DxIR if the controller needs an output
  that actively drives both logic states. Evaluate the FR05DxCR for an
  open-collector output pulled up to the receiver supply. When the output needs
  an independent pull-up rail above the receiver supply, evaluate the FR05DxDR.
  Output topology and pin 4 wiring determine which part fits the board.




  \## How do I wire the push-pull, open-collector, and open-drain outputs?




  \- \*\*FR05DxIR, push-pull CMOS.\*\* The output actively drives high and low. Rev. F, page 2, Table 3 lists pin 4 as internally unconnected. Figure 2 shows pin 4 grounded for the standard circuit. Firecomms also allows an external connection between pins 4 and 1 for existing board layouts. Figure 4 on page 3 shows the push-pull output stage. With a 5 V receiver and a 3.3 V controller, check the controller’s input voltage rating and thresholds.


  \- \*\*FR05DxCR, open collector.\*\* Rev. D, page 2, Figure 2 connects pin 1 (Vo) to pin 4 (RL) to enable the internal pull-up to VCC, which is 1 kΩ typical. With this connection and a 15 pF load, Table 6 on page 4 lists a rise time of 73 ns typical and 85 ns maximum. After a board change, remeasure the rising edge with the actual routing and input capacitance.


  \- \*\*FR05DxDR, MOSFET open drain.\*\* If the maximum Vo stays at or below VCC, use the internal 1 kΩ typical pull-up as shown in Rev. G, page 3, Figure 2. To pull the output above VCC, follow Figure 3 on the same page. Leave pin 4 (RL) open and pull pin 1 (Vo) up to a separate VSwitch rail through an external resistor.




  \## What does the FR05DxDR 20 V rating mean, and can it run at 5 MBd at that voltage?




  20 V is the upper limit for the external switching rail VSwitch. The receiver’s own VCC operating range is 2.97–5.5 V. Rev. G, page 5, Table 6 characterizes dynamic performance with VCC and VSwitch at 4.5–5.5 V, a 560 Ω external pull-up, a 22 pF load, and pin 4 left open.




  If the project switches 12 V, 15 V, or a signal near 20 V, check sink current, output dissipation, rise time, and receive data with the intended load. Use the actual data pattern to verify that downstream logic detects the shortest pulse. Apply the datasheet’s rate and voltage limits under their respective test conditions.




  \## Which part numbers fit each orientation, and what changes when moving from push-pull to open collector?




  Page 1, Table 1 of each datasheet lists the full ordering codes.




  \- \*\*Horizontal mount:\*\* FR05DHDR is open drain, FR05DHIR is push-pull, and FR05DHCR is open collector.


  \- \*\*Vertical mount:\*\* FR05DVDR is open drain, FR05DVIR is push-pull, and FR05DVCR is open collector.


  \- \*\*30° tilted mount:\*\* FR05DWDR is open drain, FR05DWIR is push-pull, and FR05DWCR is open collector.




  For example, when replacing an FR05DHIR with an FR05DHCR, remove the existing pin 4 ground connection if present, then enable the internal pull-up as shown in Rev. D, Figure 2. Check output levels, edges, and error performance with the intended fiber and data pattern. Use the optical power limits for the selected part when budgeting the link. With 1 mm, 0.5 NA POF, the minimum peak input for the optical high state is −20 dBm for DR and −22 dBm for IR and CR. See Table 6 on page 5 of DR Rev. G and page 4 of IR Rev. F and CR Rev. D.




  \## Where can I find the datasheets or get replacement support?




  \- \[Firecomms FR05DxDR open-drain receiver datasheet, Rev. G](https://www.firecomms.com/contentFiles/technicalDocuments/FR05DxDR-Datasheet-Rev-G.pdf)


  \- \[Firecomms FR05DxIR push-pull receiver datasheet, Rev. F](https://www.firecomms.com/contentFiles/technicalDocuments/FR05DxIR-Datasheet-Rev-F.pdf)


  \- \[Firecomms FR05DxCR open-collector receiver datasheet, Rev. D](https://www.firecomms.com/contentFiles/technicalDocuments/FR05DxCR-Datasheet-Rev-D.pdf)


  \- \[SIMACITY Firecomms fiber optic product portfolio](https://firecomms-cn.com/en/products.html)


  \- \[Contact SIMACITY about FR05 receiver selection and board-level replacement](https://firecomms-cn.com/en/contact.html)[firecomms-fr05dxdr-fr05dxir-fr05dxcr-output-comparison](firecomms-fr05dxdr-fr05dxir-fr05dxcr-output-comparison)
---
Firecomms FR05DxDR、FR05DxIR 和 FR05DxCR 都是 DC–5 MBd RedLink 反相光纤接收器。主控需要接收器主动驱动高低电平时，可评估 FR05DxIR。需要开集电极输出并上拉到接收器电源时，可评估 FR05DxCR。需要独立上拉电源且输出电压高于接收器供电时，可评估 FR05DxDR。三款的关键差异在输出级和 4 脚接法。



\## 推挽、开集电极和开漏，分别怎么接？



\- \*\*FR05DxIR，推挽 CMOS。\*\* 输出级主动驱动高、低电平。Rev. F 第 2 页表 3 将 4 脚列为内部未连接。按原厂图 2 的常规接法将 4 脚接地，兼容旧板布局时可按原厂说明将 4 脚与 1 脚外接。第 3 页图 4 给出推挽输出结构。若接收器用 5 V 供电、后级是 3.3 V 主控，应核对主控输入耐压和门限。

\- \*\*FR05DxCR，开集电极。\*\* Rev. D 第 2 页图 2 将 1 脚 Vo 与 4 脚 RL 相连，启用内部典型 1 kΩ 上拉至 VCC。第 4 页表 6 在这一接法、负载电容 15 pF 的条件下，列出典型上升时间 73 ns、最大 85 ns。换板后，应按实际布线和后级输入电容复测上升沿。

\- \*\*FR05DxDR，MOSFET 开漏。\*\* 当 Vo 的最高电压不超过 VCC 时，可按 Rev. G 第 3 页图 2 使用内部典型 1 kΩ 上拉。需要上拉到高于 VCC 的电压时，按同页图 3 将 4 脚 RL 留空，用外部电阻把 1 脚 Vo 上拉到独立的 VSwitch。



\## FR05DxDR 的 20 V 指什么？能同时跑到 5 MBd 吗？



20 V 是外部开关电源 VSwitch 的上限。接收器本身的 VCC 工作范围为 2.97–5.5 V。Rev. G 第 5 页表 6 的动态测试使用 4.5–5.5 V 的 VCC 和 VSwitch、560 Ω 外部上拉电阻、22 pF 负载，并将 4 脚留空。



如果项目要切换 12 V、15 V 或接近 20 V 的信号，应按实际负载核对下拉电流、输出功耗、上升时间和接收数据。用实际码型实测后级能否识别最短脉冲。原厂表中的速率和电压上限需要结合各自的测试条件使用。



\## 九个料号怎么选？从推挽换成开集电极时要看什么？



三个系列的完整订购料号均见各自规格书第 1 页表 1。



\- \*\*水平安装：\*\* FR05DHDR 为开漏，FR05DHIR 为推挽，FR05DHCR 为开集电极。

\- \*\*垂直安装：\*\* FR05DVDR 为开漏，FR05DVIR 为推挽，FR05DVCR 为开集电极。

\- \*\*30° 倾斜安装：\*\* FR05DWDR 为开漏，FR05DWIR 为推挽，FR05DWCR 为开集电极。



例如，把 FR05DHIR 换成 FR05DHCR 时，如果旧板把 4 脚接地，应先修改这条走线，再按 Rev. D 图 2 接入内部上拉。随后用实际光纤和码型检查输出高低电平、边沿和误码。做光功率预算时，也要分别查规格表。以 1 mm、NA 0.5 的 POF 为例，光高状态的峰值接收功率下限，DR 为 −20 dBm，IR 和 CR 均为 −22 dBm。对应数据见 DR Rev. G 第 5 页表 6，以及 IR Rev. F、CR Rev. D 第 4 页表 6。



\## 哪里可以查规格书或咨询换料？



\- \[Firecomms FR05DxDR 开漏接收器规格书 Rev. G](https://www.firecomms.com/contentFiles/technicalDocuments/FR05DxDR-Datasheet-Rev-G.pdf)

\- \[Firecomms FR05DxIR 推挽接收器规格书 Rev. F](https://www.firecomms.com/contentFiles/technicalDocuments/FR05DxIR-Datasheet-Rev-F.pdf)

\- \[Firecomms FR05DxCR 开集电极接收器规格书 Rev. D](https://www.firecomms.com/contentFiles/technicalDocuments/FR05DxCR-Datasheet-Rev-D.pdf)

\- \[上海芯聚电子 Firecomms 光纤器件产品中心](https://firecomms-cn.com/products.html)

\- \[咨询 FR05 系列接收器输出选型与旧板换料](https://firecomms-cn.com/contact.html)[firecomms-fr05dxdr-fr05dxir-fr05dxcr-output-comparison](firecomms-fr05dxdr-fr05dxir-fr05dxcr-output-comparison)
