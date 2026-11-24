---
title: Firecomms FE50MSIR 与 FE50MSNR 怎么选？SMI 双工光链路的极性与 Tx/Rx 接线
date: 2026-11-24T11:43:00.000+08:00
description: Firecomms FE50MSIR 与 FE50MSNR 都是 DC–50 MBd SMI
  双工塑料光纤收发器。本文说明两款的接收极性、Tx/Rx 配对规则、板上引脚和光纤回环测试方法，帮助排查单向通信和接收数据反相。
draft: false
title_en: "Firecomms FE50MSIR vs FE50MSNR: SMI Receiver Polarity and Duplex Tx/Rx Wiring"
description_en: The Firecomms FE50MSIR and FE50MSNR are DC–50 MBd SMI duplex
  plastic optical fiber transceivers. Compare receiver polarity, Tx/Rx routing,
  board pinout, and optical loopback checks to troubleshoot one-way
  communication and inverted received data.
body_en: >-
  The main difference between the Firecomms FE50MSIR and FE50MSNR is receiver
  polarity. With stable power and a valid optical high input, the FE50MSIR
  receiver output is low and the FE50MSNR output is high. Both models have
  non-inverting transmitters. Between two devices, route A Tx to B Rx on one
  fiber and B Tx to A Rx on the other.




  \## How do I choose between FE50MSIR and FE50MSNR receiver polarity?




  \- \*\*FE50MSIR, inverting receiver.\*\* When the optical input changes from low to high, receiver output Vo changes from high to low.


  \- \*\*FE50MSNR, non-inverting receiver.\*\* When the optical input changes from low to high, Vo changes from low to high.




  Choose the FE50MSNR when the host needs the received waveform to preserve the remote transmitter input polarity. Choose the FE50MSIR when the existing circuit or logic expects an inverted signal. When designing or swapping parts, use a known pattern to compare transmitter input, receiver output, and protocol idle level. See Firecomms Rev. P2, page 1, Table 1, page 3, Figures 3–4, and page 6, Figures 8–9.




  \## How do I wire an SMI duplex link and troubleshoot one-way communication?




  An SMI duplex link has two independent optical paths. Each path connects a transmitter at one end to a receiver at the other. Check the actual Tx and Rx markings on both devices when tracing the fibers. If only one direction works, apply a known pattern to the transmitter in the failing direction and measure the receiver waveform at the other end. Repeat in the reverse direction to check each path on its own.




  A local loopback can also verify transmission, reception, and polarity on a single board. Pages 1–2 of the Firecomms EVAL-FE50MSIR and EVAL-FE50MSNR guides, Rev. Orig, use an FP-00C-3F0 long-body SMI plug and a 1 m simplex POF loop to connect local Tx back to local Rx. After the loopback passes, verify both directions with the intended duplex cable assembly.




  \## Which pins and test conditions should I check before bringing up the board?




  \- \*\*Pinout and supply.\*\* Rev. P2, page 2, Table 3 identifies pin 2 as TTL data input Vin, pin 10 as receiver output Vo, and pin 11 as NC. The nominal supply options are 3.3 V and 5 V. Firecomms recommends 3.3 V and a common supply for Tx and Rx. If using 5 V, check the downstream input voltage rating and logic-level compatibility.


  \- \*\*Signaling rate and startup.\*\* Both models use a 650 nm RCLED and a TTL-compatible push-pull CMOS receiver output. They support DC–50 MBd and operate from −40 to +85 °C. Rev. P2, page 11, Table 7 lists a typical receiver power-up delay of 40 µs, measured from VCC crossing 2.75 V. If only the first frame after power-up fails, capture VCC, Vo, and first-frame timing together.


  \- \*\*Distance and cable assembly.\*\* Rev. P2, page 1, Table 2 lists 50 m over step-index POF as a reference and notes that distance depends on installation conditions. Verify waveforms and error performance in both directions with the intended SMI plugs, fiber length, bends, and operating data pattern.




  \## Where can I get the datasheet or SMI cable selection support?




  \- \[Firecomms FE50MSIR and FE50MSNR preliminary datasheet, Rev. P2](https://www.firecomms.com/contentFiles/technicalDocuments/FE50MSIR-FE50MSNR-Data-Sheet-Rev-P2.pdf)


  \- \[Firecomms FE50MSIR evaluation board user guide, Rev. Orig](https://www.firecomms.com/contentFiles/contentblockaccordions/EVAL-FE50MSIR_SMI_Evaluation_Board_User_Guide_Orig.pdf)


  \- \[Firecomms FE50MSNR evaluation board user guide, Rev. Orig](https://www.firecomms.com/contentFiles/contentblockaccordions/EVAL-FE50MSNR_SMI_Evaluation_Board_User_Guide_Rev_Orig.pdf)


  \- \[SIMACITY Firecomms product portfolio](https://firecomms-cn.com/en/products.html)


  \- \[Contact SIMACITY about FE50MSIR and FE50MSNR selection and SMI duplex POF cable assemblies](https://firecomms-cn.com/en/contact.html)
---
Firecomms FE50MSIR 与 FE50MSNR 的主要区别是接收极性。供电稳定且光输入符合规格时，FE50MSIR 的接收输出在光高状态下为低电平，FE50MSNR 则为高电平。两款发射端均为非反相。连接两台设备时，双芯光纤应分别把 A 端 Tx 接到 B 端 Rx，把 B 端 Tx 接到 A 端 Rx。



\## FE50MSIR 和 FE50MSNR 的极性怎么选？



\- \*\*FE50MSIR，反相接收。\*\* 光输入从低状态切换到高状态时，接收端 Vo 从高电平切换到低电平。

\- \*\*FE50MSNR，非反相接收。\*\* 光输入从低状态切换到高状态时，接收端 Vo 从低电平切换到高电平。



如果主控需要接收波形与远端发射输入保持同相，可选 FE50MSNR。现有电路或逻辑需要反相接收时，可选 FE50MSIR。设计或换料时，可用已知码型比较发射输入、接收输出和协议空闲电平。参见原厂 Rev. P2 第 1 页表 1、第 3 页图 3–4 和第 6 页图 8–9。



\## SMI 双芯光纤怎么接？只有一个方向能通信怎么办？



SMI 双工链路有两条独立光路，每条把一端的发射器接到另一端的接收器。装配双芯跳线时，应按两端实际的 Tx 和 Rx 标识核对每根纤芯的去向。若只有一个方向能通信，先在故障方向的发送端输入已知码型，再在对端的接收输出测波形。换到反方向重复测试，就能分别确认两条光路。



也可以先做本机回环，检查单块板卡的发射、接收及极性。原厂 EVAL-FE50MSIR 和 EVAL-FE50MSNR 指南 Rev. Orig 第 1–2 页使用 FP-00C-3F0 长体 SMI 插头和 1 m 单芯 POF 回环，把本机 Tx 接回本机 Rx。回环通过后，再用项目的双芯跳线验证两个方向。



\## 上板前要核对哪些引脚和测试条件？



\- \*\*引脚与供电。\*\* Rev. P2 第 2 页表 3 标明，2 脚是 TTL 数据输入 Vin，10 脚是接收数据输出 Vo，11 脚为 NC。器件支持标称 3.3 V 或 5 V 供电。原厂推荐 3.3 V，并建议 Tx 和 Rx 使用同一电源。采用 5 V 供电时，应核对后级输入的耐压与逻辑电平。

\- \*\*速率与上电。\*\* 两款均采用 650 nm RCLED，提供 TTL 兼容的推挽 CMOS 输出，支持 DC–50 MBd，工作温度为 −40 至 +85 °C。Rev. P2 第 11 页表 7 将接收端上电唤醒延时列为典型 40 µs，从 VCC 超过 2.75 V 起计。若只有上电首帧异常，可同时测量 VCC、Vo 和首帧时序。

\- \*\*距离与线缆。\*\* Rev. P2 第 1 页表 2 列出阶跃型 POF 的 50 m 参考距离，并注明受安装条件影响。项目验证应使用实际 SMI 插头、光纤长度、弯折条件和运行码型，分别确认两个方向的波形及误码表现。



\## 哪里可以查规格书或咨询 SMI 配套？



\- \[Firecomms FE50MSIR 与 FE50MSNR 原厂预备版规格书 Rev. P2](https://www.firecomms.com/contentFiles/technicalDocuments/FE50MSIR-FE50MSNR-Data-Sheet-Rev-P2.pdf)

\- \[Firecomms FE50MSIR 评估板用户指南 Rev. Orig](https://www.firecomms.com/contentFiles/contentblockaccordions/EVAL-FE50MSIR_SMI_Evaluation_Board_User_Guide_Orig.pdf)

\- \[Firecomms FE50MSNR 评估板用户指南 Rev. Orig](https://www.firecomms.com/contentFiles/contentblockaccordions/EVAL-FE50MSNR_SMI_Evaluation_Board_User_Guide_Rev_Orig.pdf)

\- \[上海芯聚电子 Firecomms 产品中心](https://firecomms-cn.com/products.html)

\- \[咨询 FE50MSIR、FE50MSNR 选型及 SMI 双芯光纤配套](https://firecomms-cn.com/contact.html)
