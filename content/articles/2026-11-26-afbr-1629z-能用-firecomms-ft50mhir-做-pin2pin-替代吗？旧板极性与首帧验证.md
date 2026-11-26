---
title: AFBR-1629Z 能用 Firecomms FT50MHIR 做 Pin2Pin 替代吗？旧板极性与首帧验证
date: 2026-11-26T11:49:00.000+08:00
description: Firecomms FT50MHIR 是 Broadcom（Avago）AFBR-1629Z 的 Pin2Pin
  替代候选。两款均为水平安装、DC–50 MBd 的反相光纤发射器。本文对照原厂规格书，说明保留 AFBR-2529Z
  接收器时如何核对引脚、空闲电平、接收光功率和首帧。
draft: false
title_en: Can Firecomms FT50MHIR Replace AFBR-1629Z Pin-to-Pin? Polarity and
  First-Frame Checks
description_en: The Firecomms FT50MHIR is a pin-to-pin replacement candidate for
  the Broadcom (Avago) AFBR-1629Z. Both are horizontal, inverting DC-to-50 MBd
  fiber optic transmitters. This datasheet-based guide covers pinout, idle
  logic, received optical power, and first-frame behavior when keeping the
  AFBR-2529Z receiver.
body_en: >-
  The Firecomms FT50MHIR is a pin-to-pin replacement candidate for the Broadcom
  (Avago) AFBR-1629Z. Both are horizontal, inverting, TTL-compatible DC-to-50
  MBd fiber optic transmitters with matching main pin functions. If the existing
  board keeps its AFBR-2529Z receiver, check the logic at both ends and verify
  the idle level, received optical power, and first frame with the actual cable
  assemblies.




  \## Should you replace the AFBR-1629Z with the FT50MHIR or the FT50MHNR?




  Evaluate the FT50MHIR when the design needs to preserve the AFBR-1629Z’s inverting transmitter logic. Under normal power, both the AFBR-1629Z and FT50MHIR emit light for a low electrical input and turn the light off for a high input. The FT50MHNR is non-inverting and emits light for a high electrical input.




  Broadcom pairs the AFBR-1629Z transmitter with the inverting AFBR-2529Z receiver in its AFBR-0547Z evaluation kit. The two inversions preserve the logic polarity from the transmitter’s electrical input to the receiver’s electrical output. If the existing board uses this pairing, verify the idle and active levels at the controller input after the change. Selecting the wrong transmitter suffix can reverse the received logic.




  \- \[Broadcom AV02-4369EN datasheet, May 31, 2023, pp. 1 and 6](https://docs.broadcom.com/doc/AV02-4369EN#page=6)


  \- \[Firecomms FT50MxxR Rev G datasheet, p. 1, Table 1, and p. 3, Figure 3](https://www.firecomms.com/contentFiles/technicalDocuments/FT50MxxR-Datasheet-Rev-G.pdf#page=3)


  \- \[Broadcom AFBR-0547Z evaluation kit and transmitter–receiver pairing](https://www.broadcom.com/products/fiber-optic-modules-components/industrial/eval-kits-accessories/industrial-eval-kits/afbr-0547z)




  \## Can you reuse the existing PCB if the pin functions match?




  On both transmitters, pin 1 is the supply, pin 2 is physically absent, pin 3 is ground, and pin 4 is the TTL data input. Pins 5 and 8 retain the housing. Broadcom recommends chassis ground for the retaining pins, and Firecomms specifies ground. Check these pads against the board’s grounding design.




  Both devices support 3.3 V or 5 V supplies. The AFBR-1629Z specifies a ±5% supply tolerance, and the FT50MHIR specifies ±10%. The FT50MHIR lists an upper high-level input limit of VCC + 0.25 V. If the controller and transmitter use different supply voltages, measure the level and overshoot at the data pin. Before assembly, compare the horizontal PCB footprints, board-edge clearance, and room for the existing connector latch.




  \- \[Broadcom AV02-4369EN, package and footprint on pp. 3–4, pinout on p. 6, and electrical characteristics on p. 9](https://docs.broadcom.com/doc/AV02-4369EN)


  \- \[Firecomms FT50MxxR Rev G, p. 2, Table 3, p. 4, Table 6, and p. 5, Figure 4](https://www.firecomms.com/contentFiles/technicalDocuments/FT50MxxR-Datasheet-Rev-G.pdf)




  \## Why test the shortest cable and the first frame after idle?




  The datasheets use different lengths of 1 mm plastic optical fiber (POF) to measure peak transmitter output. The AFBR-1629Z specifies \*\*−4.5 to +2 dBm\*\* measured with \*\*1 m\*\* of fiber. The FT50MHIR specifies \*\*−6 to +2 dBm\*\* measured with \*\*0.5 m\*\* of fiber. Both use fiber with a numerical aperture of \*\*0.5\*\*. Verify received power with the actual cable assemblies. Use the shortest link to check the receiver’s upper optical input limit and the longest link to check sensitivity margin.




  Both datasheets list transmitter pulse-width distortion (PWD) of \*\*−3 to +3 ns\*\*. Broadcom separately specifies a first optical pulse PWD of \*\*−5 to +3 ns\*\*. For burst traffic, test continuous data and the first frame after idle separately. Record the waveform, pulse width, and protocol errors at the far end.




  \- \[Broadcom AV02-4369EN, p. 9, peak optical power and first-pulse PWD](https://docs.broadcom.com/doc/AV02-4369EN#page=9)


  \- \[Firecomms FT50MxxR Rev G, p. 4, Table 6, transmitter characteristics and test conditions](https://www.firecomms.com/contentFiles/technicalDocuments/FT50MxxR-Datasheet-Rev-G.pdf#page=4)




  \## How do you validate a transmitter-only change with the AFBR-2529Z?




  1. \*\*Capture a baseline.\*\* With the AFBR-1629Z, original receiver, and actual cables, record the receiver’s idle level, first-frame waveform, and error count.


  2. \*\*Change only the transmitter.\*\* Install the FT50MHIR and retain the receiver, cables, and data pattern. Test the shortest and longest cable assemblies and repeat at the equipment’s specified voltage and temperature limits.


  3. \*\*Apply the equipment’s acceptance criteria.\*\* Check received optical power, logic levels, and pulse width. If the protocol uses CRC, log CRC errors separately for continuous traffic and the first frame after idle. Broadcom’s link guarantee on p. 7 applies to the transmitter and receiver families specified there. Qualify the FT50MHIR and AFBR-2529Z pairing in the equipment.




  \- \[Look up the Firecomms cross-reference for AFBR-1629Z](https://firecomms-cn.com/en/cross-ref.html)


  \- \[Contact Shanghai SIMACITY to evaluate an AFBR-1629Z to FT50MHIR change](https://firecomms-cn.com/en/contact.html). Include the existing receiver part number, board voltage, connector type, and minimum and maximum cable lengths.[afbr-1629z-ft50mhir-pin-to-pin](afbr-1629z-ft50mhir-pin-to-pin)
---
Firecomms FT50MHIR 可以作为 Broadcom（Avago）AFBR-1629Z 的 Pin2Pin 替代候选。两款均为水平安装、DC–50 MBd、TTL 兼容的反相光纤发射器，主要引脚功能一致。旧板若继续使用 AFBR-2529Z 接收器，应先核对发射端与接收端的逻辑，再用实际线束验证空闲电平、接收光功率和首帧。



\## AFBR-1629Z 替代料该选 FT50MHIR 还是 FT50MHNR？



原设计需要保留 AFBR-1629Z 的反相发射逻辑时，优先评估 FT50MHIR。正常供电时，AFBR-1629Z 和 FT50MHIR 的电气输入为低电平时发光，输入为高电平时熄光。FT50MHNR 的发射逻辑为非反相，输入为高电平时发光。



Broadcom 的 AFBR-0547Z 评估套件使用 AFBR-1629Z 发射器配 AFBR-2529Z 反相接收器。两次反相后，接收端电气输出与发射端电气输入同相。若旧板沿用这一配对，换料后应在主控接收脚确认空闲电平及有效电平，避免接收逻辑因选错发射器后缀而翻转。



\- \[Broadcom AV02-4369EN 规格书，2023 年 5 月 31 日版，第 1、6 页](https://docs.broadcom.com/doc/AV02-4369EN#page=6)

\- \[Firecomms FT50MxxR Rev G 规格书，第 1 页表 1、第 3 页图 3](https://www.firecomms.com/contentFiles/technicalDocuments/FT50MxxR-Datasheet-Rev-G.pdf#page=3)

\- \[Broadcom AFBR-0547Z 评估套件及收发器配对](https://www.broadcom.com/products/fiber-optic-modules-components/industrial/eval-kits-accessories/industrial-eval-kits/afbr-0547z)



\## 两款发射器的引脚相同，旧 PCB 可以直接沿用吗？



两款的 1 脚为电源，2 脚无实体引脚，3 脚为接地，4 脚为 TTL 数据输入。5 脚和 8 脚用于外壳固定。Broadcom 建议固定脚接机壳地，Firecomms 规格书标注接地。旧板应按实际接地设计核对这两个焊盘。



两款都支持 3.3 V 或 5 V 供电。AFBR-1629Z 的供电容差为 ±5%，FT50MHIR 为 ±10%。FT50MHIR 的高电平输入上限标为 VCC + 0.25 V。若发射器与主控使用不同电压，需实测数据脚电平和过冲。上板前还应比对水平封装的 PCB 孔位、板边间隙和原连接器的锁扣空间。



\- \[Broadcom AV02-4369EN，第 3–4 页封装与孔位、第 6 页引脚、第 9 页电气特性](https://docs.broadcom.com/doc/AV02-4369EN)

\- \[Firecomms FT50MxxR Rev G，第 2 页表 3、第 4 页表 6、第 5 页图 4](https://www.firecomms.com/contentFiles/technicalDocuments/FT50MxxR-Datasheet-Rev-G.pdf)



\## 为什么换完发射器，还要测最短线束和空闲后的首帧？



两份原厂规格书采用不同长度的 1 mm 塑料光纤（POF）测量发射峰值光功率。AFBR-1629Z 的规格值为 \*\*−4.5 至 +2 dBm\*\*，测量使用 \*\*1 m\*\* 光纤。FT50MHIR 的规格值为 \*\*−6 至 +2 dBm\*\*，测量使用 \*\*0.5 m\*\* 光纤。两者所用光纤的数值孔径均为 \*\*0.5\*\*。因此，替代后的接收功率应在实际线束上确认，最短链路核对接收端允许的光功率上限，最长链路核对灵敏度余量。



两份规格书均列出发射端脉宽失真（PWD）为 \*\*−3 至 +3 ns\*\*。Broadcom 还单独列出首个光脉冲的 PWD 为 \*\*−5 至 +3 ns\*\*。如果设备按帧间歇发送，可分别测试连续数据和空闲后首帧，记录远端波形、脉宽及协议错误。



\- \[Broadcom AV02-4369EN，第 9 页发射峰值光功率与首脉冲 PWD](https://docs.broadcom.com/doc/AV02-4369EN#page=9)

\- \[Firecomms FT50MxxR Rev G，第 4 页表 6 的发射特性与测试条件](https://www.firecomms.com/contentFiles/technicalDocuments/FT50MxxR-Datasheet-Rev-G.pdf#page=4)



\## 保留 AFBR-2529Z 接收器时，怎样验证只换发射端？



1. \*\*建立原链路基线。\*\* 使用 AFBR-1629Z、原接收器和实际线束，记录接收端的空闲电平、首帧波形和错误计数。

2. \*\*只更换发射器。\*\* 安装 FT50MHIR，沿用接收器、线束和数据模式。覆盖最短及最长线束，并在设备规定的供电和温度边界下复测。

3. \*\*按整机判据验收。\*\* 核对接收光功率、逻辑电平和脉宽。协议使用 CRC 时，分别记录连续通信和空闲后首帧的 CRC 错误。Broadcom 第 7 页的链路保证适用于该页指定的收发器系列，FT50MHIR 与 AFBR-2529Z 的组合应由整机测试确认。



\- \[查询 AFBR-1629Z 对应的 Firecomms 替代料号](https://firecomms-cn.com/cross-ref.html)

\- \[联系上海芯聚电子评估 AFBR-1629Z 与 FT50MHIR 换料](https://firecomms-cn.com/contact.html)。请提供原接收器料号、板上电压、连接器类型及最短和最长线束。[afbr-1629z-ft50mhir-pin-to-pin](afbr-1629z-ft50mhir-pin-to-pin)
