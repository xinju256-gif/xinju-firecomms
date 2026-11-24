---
title: Firecomms FE50MKNR 与 FE50MKIR 怎么选？换料后接收电平反了，先查极性
date: 2026-11-24T11:24:00.000+08:00
description: Firecomms FE50MKNR 与 FE50MKIR 均为 DC–50 MBd OptoLock
  塑料光纤收发器，主要区别在接收端极性。本文说明两款型号有光和暗态时的输出电平，以及选型时应核对的供电、复位和首脉冲条件。
draft: false
title_en: "Firecomms FE50MKNR vs FE50MKIR: Why Does the Receiver Output Flip
  After a Swap?"
description_en: The Firecomms FE50MKNR and FE50MKIR are DC–50 MBd OptoLock
  plastic optical fiber transceivers with different receiver polarities. Compare
  their output levels in light and dark states, then check supply voltage, reset
  behavior, and first-pulse timing before swapping parts.
body_en: >-
  The difference between the Firecomms FE50MKNR and FE50MKIR is receiver
  polarity. Choose the non-inverting FE50MKNR when the received electrical
  signal must preserve the transmitter input polarity. Choose the FE50MKIR when
  the received signal must be inverted. Both are DC–50 MBd OptoLock® plastic
  optical fiber transceivers with non-inverting transmitters. If the received
  logic levels flip after a part swap, check the full part number and the
  receiver logic definition first.




  \## What do the FE50MKNR and FE50MKIR output when light is detected?




  With the supply stable and the optical input within datasheet limits, both transmitters emit light for a high electrical input and enter the dark state for a low input. The difference appears at receiver pin 10 (Vo).




  \- \*\*FE50MKNR, non-inverting:\*\* Vo is high when the optical input is in its high state and low when the optical input is in its low state.


  \- \*\*FE50MKIR, inverting:\*\* Vo is low when the optical input is in its high state and high when the optical input is in its low state.




  Firecomms Rev. B, page 2, Table 3 identifies the input and output pins. Page 3, Figures 3–4, and page 6, Figures 8–9, show transmitter and receiver polarity for both models.




  \## What other interface conditions matter on a DC–50 MBd link?




  Both parts use plugless OptoLock termination for 2.2 mm jacketed plastic optical fiber (POF). The transmitter uses a 650 nm RCLED, and the receiver provides a TTL-compatible push-pull CMOS output. The nominal supply options are 3.3 V and 5 V. The operating temperature range is −40 to +85 °C. Firecomms recommends 3.3 V. See Rev. B, pages 1–2 and 10–11.




  \- \*\*Check input thresholds and output levels.\*\* If the supply voltage changes, check the downstream MCU or FPGA input voltage range and evaluate Vo under the load conditions given in Table 7 on page 11.


  \- \*\*Check when the receiver output becomes valid.\*\* Page 5, Figure 7, and page 8, Figure 12, show that the receiver output can be high impedance during reset. The typical receiver power-up delay is 40 µs in Table 7 on page 11. Verify what the downstream logic reads during power-up and supply resets.


  \- \*\*Test the first pulse with the actual data pattern.\*\* Table 7 on page 11 specifies a separate receiver pulse width distortion (PWD) range of −7 to +14 ns for the first three pulses. The characterization includes a minimum optical input pulse width of 20 ns, with the first pulse representing the worst case. For industrial control or burst-mode serial links, use the target pattern and actual idle interval to verify that downstream logic detects the first valid pulse.




  \## Can I swap the FE50MKNR and FE50MKIR?




  The two models share a pinout. Before swapping them, check whether the host can handle the polarity change and verify the logic levels it sees during data transmission, protocol idle, loss of light, and reset. If the serial controller expects a particular polarity for start-bit detection or edge synchronization, verify receiver behavior on the actual hardware before approving the replacement.




  \## Where can I find the datasheet or get selection support?




  \- \[Firecomms FE50MKNR and FE50MKIR manufacturer datasheet, Rev. B](https://www.firecomms.com/contentFiles/technicalDocuments/FE50MKIR%20FE50MKNR%20Data%20Sheet%20Revision%20B.pdf)


  \- \[Firecomms OptoLock product catalog](https://www.firecomms.com/optolock/)


  \- \[SIMACITY Firecomms part-number search](https://firecomms-cn.com/en/product-index.html)


  \- \[Contact SIMACITY about FE50MKNR and FE50MKIR selection and samples](https://firecomms-cn.com/en/contact.html)
---
Firecomms FE50MKNR 与 FE50MKIR 的区别在接收端极性。需要接收输出保持与发射端输入同相时，选非反相的 FE50MKNR。需要接收输出反相时，选 FE50MKIR。两款都是 DC–50 MBd OptoLock® 塑料光纤收发器，发射端均为非反相。换料后如果发现接收数据的高低电平对调，先核对完整料号和接收端的逻辑定义。



\## FE50MKNR 和 FE50MKIR 有光时分别输出什么？



在供电稳定、光输入满足规格书条件时，两款型号的发射端均为高电平输入发光、低电平输入进入暗态。区别在接收端的 10 脚（Vo）。



\- \*\*FE50MKNR 非反相型\*\*：光输入为高状态时，Vo 输出高电平。光输入为低状态时，Vo 输出低电平。

\- \*\*FE50MKIR 反相型\*\*：光输入为高状态时，Vo 输出低电平。光输入为低状态时，Vo 输出高电平。



原厂 Rev. B 第 2 页表 3 定义了输入和输出引脚，第 3 页图 3–4 与第 6 页图 8–9 给出了两款型号的发射和接收极性。



\## DC–50 MBd 还要核对哪些接口条件？



两款均采用 OptoLock 免插头端接，适配 2.2 mm 外护套塑料光纤（POF）。发射端采用 650 nm RCLED，接收端为 TTL 兼容的推挽 CMOS 输出。器件支持标称 3.3 V 或 5 V 供电，工作温度为 −40 至 +85 °C。原厂建议优先使用 3.3 V。参见 Rev. B 第 1–2 页及第 10–11 页。



\- \*\*对照输入门限与输出电平。\*\* 更换供电电压时，应重新核对后级 MCU 或 FPGA 的输入电压范围，并按第 11 页表 7 给出的负载条件评估 Vo。

\- \*\*确认接收端何时开始有效输出。\*\* 原厂第 5 页图 7 和第 8 页图 12 显示，复位期间接收输出可能处于高阻态。第 11 页表 7 列出的接收端上电唤醒延时为典型 40 µs。设计应检查上电和电源复位时后级读到的状态。

\- \*\*用实际码型验证首脉冲。\*\* 第 11 页表 7 单列了第 1 至第 3 个接收脉冲的脉宽失真（PWD），表中范围为 −7 至 +14 ns。该项包含最小 20 ns 光输入脉宽的表征条件，首脉冲是最不利情形。工业控制或突发式串行链路，可用目标码型和实际空闲间隔检查首个有效脉冲能否被后级识别。



\## FE50MKNR 和 FE50MKIR 可以直接换料吗？



两款采用同一份引脚定义。更换前，应确认主机是否支持极性调整，并验证正常数据、协议空闲态、断光和复位时后级看到的电平。若串行通信控制器依赖固定极性识别起始位或同步边沿，应在实际硬件上验证接收行为后再确认替换方案。



\## 哪里可以查规格书或咨询选型？



\- \[Firecomms FE50MKNR 与 FE50MKIR 原厂规格书 Rev. B](https://www.firecomms.com/contentFiles/technicalDocuments/FE50MKIR%20FE50MKNR%20Data%20Sheet%20Revision%20B.pdf)

\- \[Firecomms 原厂 OptoLock 产品目录](https://www.firecomms.com/optolock/)

\- \[上海芯聚电子 Firecomms 型号检索](https://firecomms-cn.com/product-index.html)

\- \[咨询 FE50MKNR 与 FE50MKIR 极性选型及样品](https://firecomms-cn.com/contact.html)
