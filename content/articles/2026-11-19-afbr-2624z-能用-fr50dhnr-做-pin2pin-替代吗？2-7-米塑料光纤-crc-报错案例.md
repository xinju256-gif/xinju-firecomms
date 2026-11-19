---
title: AFBR-2624Z 能用 FR50DHNR 做 Pin2Pin 替代吗？2.7 米塑料光纤 CRC 报错案例
date: 2026-11-19T11:34:00.000+08:00
description: AFBR-2624Z 在 2.7 米塑料光纤链路频繁 CRC 报错，25 米却正常？结合 Firecomms FR50DHNR
  规格书，核对 Pin2Pin 替代所需的引脚、接收峰值光功率、脉宽失真和整机验证条件。
draft: false
title_en: "AFBR-2624Z Pin-to-Pin Replacement Evaluation with FR50DHNR: CRC
  Errors on a 2.7 m POF Link"
description_en: Why did an AFBR-2624Z link show repeated CRC errors at 2.7 m but
  work at 25 m? Compare the FR50DHNR pinout, peak received optical power,
  pulse-width distortion, and system-level checks for a pin-to-pin replacement.
body_en: >-
  Firecomms FR50DHNR is a pin-to-pin replacement candidate for the
  Avago/Broadcom AFBR-2624Z. Both are horizontal, non-inverting DC–50 MBd
  fiber-optic receivers with matching main signal-pin functions. Before adopting
  the replacement, check the PCB footprint, grounding, and receiver timing, then
  validate the link in the target system. \[1]\[2]




  1. Why did the 2.7 m link show CRC errors while the 25 m link worked?




  In a SIMACITY project, a 2.7 m plastic optical fiber (POF) link repeatedly produced CRC errors. Communication worked with a 25 m fiber. The waveform analysis pointed to a possible relationship between changes in received optical power and pulse-width distortion (PWD). The case records the behavior at both lengths. It does not report measured peak received optical power or bit error rate (BER). \[3]




  With the same transmitter and comparable fiber and coupling conditions, a shorter fiber usually introduces less attenuation. This can increase peak optical power at the receiver. Record peak received optical power, receiver output pulse width, and CRC error counts at each length. CRC counts record failed frame checks. Measure BER separately if the project requires it.




  2. Which specifications matter when comparing AFBR-2624Z and FR50DHNR?




  Package, output, and supply. The AFBR-2624Z uses a horizontal Versatile Link package with a non-inverting TTL output. The FR50DHNR uses a horizontal RedLink® package with a non-inverting, TTL-compatible CMOS output. Both support DC–50 MBd signaling and either a 3.3 V or a 5 V supply with ±5% tolerance. \[1, pp. 1, 8] \[2, pp. 1, 6, 7]




  Pinout and grounding. Both receivers use pin 1 for output, pin 2 for ground, and pin 3 for supply. Pin 4 has no function on the AFBR-2624Z, and Broadcom recommends connecting it to signal ground. Broadcom recommends chassis ground for pins 5 and 8. Pin 4 on the FR50DHNR is internally unconnected, and Firecomms specifies that retaining pins 5 and 8 should be grounded. Check those three connections and the physical PCB hole positions on the existing board. \[1, p. 6] \[2, pp. 2, 7]




  Received optical power and pulse-width distortion. For 1 mm POF, both datasheets specify a high-state peak received optical power range of −22 to +2 dBm under their respective test conditions. Firecomms Revision P1, Table 6 on page 6, also specifies FR50DHNR PWD limits of ±4 ns from −20 to +2 dBm and ±6 ns from −22 to −20 dBm under the stated conditions, including a 50 MBd NRZ PRBS7 test signal. Measure peak power at the receiver and check the electrical output waveform on the board. \[1, p. 11] \[2, p. 6]




  Propagation delay. The AFBR-2624Z specifies a maximum receiver propagation delay of 30 ns. The FR50DHNR specifies a maximum of 50 ns for both output transitions. For timing-sensitive designs, retest against the sampling window of the existing system. \[1, p. 10] \[2, p. 6]




  3. What operating conditions does the FR50D customization address?




  SIMACITY pursued an FR50D customization for 1–2.7 m links with higher received optical power. The case record describes a design that retains the FR50 external structure and changes the internal optical chip. FR50D is the family designation used in the case. FR50DHNR is the horizontal, non-inverting orderable model listed in Revision P1. Confirm the exact ordering code and sample revision before qualifying the receiver in the target system. \[2]\[3]




  4. How can you qualify FR50DHNR on an existing PCB?




  First, check the existing board. Compare the PCB hole positions, connector orientation, pin 4, and retaining-pin connections against both datasheets. Confirm that the downstream input thresholds match the receiver output levels.




  Second, retest the short link. Keep the transmitter, protocol, and data pattern fixed. Test at 1 m, 2 m, and 2.7 m, with 25 m as the case reference. Record peak received optical power, output pulse width, and CRC error counts at each length.




  Third, check timing and operating limits. Compare continuous data with the first pulses after idle. Retest at supply and temperature limits and across representative transmitter lots. If the project specifies a BER target, record test duration, total bits, and errors.




  For FR50DHNR sample evaluation, provide the original receiver and transmitter part numbers, fiber type and length, supply voltage, and error waveforms.


  Contact SIMACITY


  https://firecomms-cn.com/en/contact.html




  Technical References




  \[1] Broadcom AV02-4369EN datasheet, pp. 1, 6, 8, and 10–11.


  https://docs.broadcom.com/doc/AV02-4369EN




  \[2] Firecomms FR50DxxR Preliminary Datasheet, Revision P1, pp. 1, 2, 6, and 7.


  https://firecomms-cn.com/assets/pdf/fr50dxxr-rev-p1.pdf




  \[3] Shanghai SIMACITY , FR50D short-link application case. Source for the 2.7 m and 25 m link observations and the 1–2.7 m customization scope.
---
Firecomms FR50DHNR 可作为 Avago／Broadcom AFBR-2624Z 的 Pin2Pin（引脚对引脚）替代候选。两款器件均为卧式、非反相的 DC–50 MBd 光纤接收器，主要信号引脚功能对应。导入前还需核对 PCB 孔位、接地方式和接收时序，并在目标设备上做链路验证。\[1]\[2]



一、为什么 2.7 米光纤频繁报错，25 米却正常？



在上海芯聚电子的一次项目排查中，2.7 米塑料光纤（POF）链路频繁出现 CRC 报错，换用 25 米光纤后通信正常。项目波形分析提示，应重点检查接收光功率变化与脉宽失真（PWD）的关系。案例记录了两种长度下的通信表现，未披露接收端峰值光功率或实测误码率（BER）。\[3]



在发射器、光纤类型和连接条件相近时，短光纤通常衰减更小，接收端的峰值光功率可能更高。排查时，可以在不同长度下同步记录峰值接收光功率、接收器输出脉宽和 CRC 错误次数。CRC 计数反映帧校验失败次数，BER 需要单独测量。



二、AFBR-2624Z 与 FR50DHNR 的替代参数怎么核对？



封装、输出与供电。AFBR-2624Z 采用卧式 Versatile Link 封装，提供非反相 TTL 输出。FR50DHNR 采用卧式 RedLink® 封装，提供非反相、TTL 兼容的 CMOS 输出。两款器件均支持 DC–50 MBd 信号速率，以及 3.3 V 或 5 V 供电，电压容差为 ±5%。\[1，第 1、8 页；2，第 1、6、7 页]



引脚与接地。两款器件均为 1 脚输出、2 脚接地、3 脚供电。AFBR-2624Z 的 4 脚无功能，Broadcom 建议接信号地，5、8 脚建议接机壳地。FR50DHNR 的 4 脚内部未连接，5、8 脚为固定脚，Firecomms 要求接地。评估替代时，应对照原板核对这三个脚位和实际 PCB 孔位。\[1，第 6 页；2，第 2、7 页]



接收光功率与脉宽失真。对于 1 mm POF，两份规格书在各自规定的测试条件下，都给出了光信号高电平时 −22 至 +2 dBm 的峰值接收光功率范围。Firecomms Revision P1 第 6 页表 6 还给出了 FR50DHNR 的 PWD 限值。在 50 MBd NRZ、PRBS7 等规定测试条件下，−20 至 +2 dBm 区间的 PWD 为 ±4 ns，−22 至 −20 dBm 区间为 ±6 ns。实测时应采用接收端峰值光功率，并同步观察板上输出波形。\[1，第 11 页；2，第 6 页]



传播延迟。AFBR-2624Z 的接收器传播延迟上限为 30 ns。FR50DHNR 的高到低、低到高传播延迟上限均为 50 ns。对接收时序敏感的设计，应按原机的采样窗口复测。\[1，第 10 页；2，第 6 页]



三、FR50D 定制方案针对什么工况？



上海芯聚电子针对 1–2.7 米短链路及较高接收光功率的工况推动了 FR50D 定制优化。按项目记录，FR50D 延续 FR50 的外部结构，调整集中在内部光芯片。FR50D 是案例中的系列称呼，FR50DHNR 是初版规格书列出的卧式、非反相订购型号。送样时应确认完整料号和样品版本，并以目标设备上的实测结果作为导入依据。\[2]\[3]



四、如何在现有 PCB 上验证 FR50DHNR？



第一步，核对原板。对照两份规格书的封装图，检查 PCB 孔位、插接方向、4 脚和固定脚接法，并确认输出电平与后级输入阈值匹配。



第二步，复测短链路。固定发射器、协议和数据模式，用 1 米、2 米、2.7 米光纤测试，以 25 米作为案例对照。同步记录峰值接收光功率、输出脉宽和 CRC 错误次数。



第三步，检查时序和边界条件。对比连续数据与空闲后的首批脉冲，复测供电和温度边界，以及代表性发射器批次。若项目有 BER 验收指标，记录测试时长、累计比特数和错误数。



如需评估 FR50DHNR 样品，可提供原接收器型号、发射器型号、光纤类型和长度、工作电压及报错波形。

联系上海芯聚电子

https://firecomms-cn.com/contact.html



技术来源



\[1] Broadcom 原厂规格书 AV02-4369EN，第 1、6、8、10–11 页。

https://docs.broadcom.com/doc/AV02-4369EN



\[2] Firecomms FR50DxxR 初版规格书，Revision P1，第 1、2、6、7 页。

https://firecomms-cn.com/assets/pdf/fr50dxxr-rev-p1.pdf



\[3] 上海芯聚电子 FR50D 短链路应用案例，记录 2.7 米与 25 米链路现象，以及 1–2.7 米短链路的定制优化方向。
