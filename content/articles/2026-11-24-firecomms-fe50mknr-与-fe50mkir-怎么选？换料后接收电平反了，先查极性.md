---
title: Firecomms FB00AKAR 模拟光纤收发器怎么用？RCLED 驱动与光电流读出
date: 2026-11-24T11:28:00.000+08:00
description: Firecomms FB00AKAR 是一款模拟 OptoLock 塑料光纤收发器，集成红光 RCLED 和 500 µm
  硅光电二极管。本文依据原厂 Rev. E 规格书说明如何设置发射偏置、读取光电流，以及如何验证整条光链路的带宽。
title_en: "Firecomms FB00AKAR Analog Fiber Optic Transceiver: How to Drive the
  RCLED and Read Photocurrent"
description_en: The Firecomms FB00AKAR is an analog OptoLock plastic optical
  fiber transceiver with a red RCLED and a 500 µm silicon photodiode. Using the
  Rev. E datasheet, this article explains how to bias the transmitter, read
  photocurrent, and verify end-to-end link bandwidth.
body_en: >-
  The Firecomms FB00AKAR is an OptoLock® plastic optical fiber transceiver for
  analog signal transmission and sensing. Use an external circuit to bias the
  transmitter RCLED, then convert the receiver photocurrent to a voltage for an
  ADC or comparator. The device accepts 2.2 mm jacketed plastic optical fiber
  (POF). The datasheet describes optical coupling to a 1 mm fiber core with a
  numerical aperture (NA) of 0.5. Applications include visible red-light
  sensing, beam interruption detection, and remote fiber optic sensing.




  \## How do I drive the FB00AKAR RCLED?




  \- \*\*Check the pinout first.\*\* FB00AKAR Rev. E, page 2, Table 3 identifies pin 5 as the RCLED anode (TD+) and pins 2, 3, 4, and 6 as the cathode (TD−). Set the DC operating point with an external current-limiting or driver circuit.


  \- \*\*Set the bias and modulation for the signal.\*\* Rev. E, page 1 describes an AC modulation operating point of approximately 20 mA at a forward voltage of approximately 1.9 V. Firecomms gives 100–470 nF as an example range for the AC coupling capacitor. For applications that must preserve DC or slowly changing signals, check the low-frequency response of the coupling network.


  \- \*\*Compare optical power under matching conditions.\*\* Rev. E, page 4, Table 6 lists a typical average output power of −5.5 dBm and a typical peak wavelength of 660 nm at a 10 mA drive current over −40 to +85 °C. The product is designated as a 650 nm red-light device. Figures 3–4 on page 4 show how fiber-coupled optical power varies with temperature and drive current.




  \## How do I interface the photodiode with an ADC?




  Receiver pin 7 is the photodiode anode (RD+) and pin 8 is the cathode (RD−). The photodiode converts received light into current, and an external readout circuit converts that current into voltage. Rev. E, page 2, Table 3 gives the pinout. Figure 2 on page 3 shows a sensor-board reference circuit with a DAC and ADC.




  \- \*\*Estimate photocurrent from optical power.\*\* Rev. E, page 5, Table 7 gives a typical responsivity of 0.30 A/W at 650 nm. Using the table’s fiber-emitted optical power reference, 10 µW corresponds to about 3 µA of signal photocurrent. Measure the dark-state reading and useful signal amplitude on the prototype before setting a detection threshold.


  \- \*\*Choose the readout circuit for the signal level and speed.\*\* A resistor readout is a starting point for beam interruption detection or low-frequency sampling. For weaker signals or greater readout bandwidth, evaluate a transimpedance amplifier (TIA) and check gain and stability against the actual photocurrent, noise, total input capacitance, and ADC range.




  \## What does the 125 MHz rating describe?




  The 125 MHz figure is the typical receiver −3 dB cutoff frequency in Rev. E, page 5, Table 7. End-to-end analog link bandwidth also depends on the RCLED bias and modulation circuit, the photodiode load, and the receiver amplifier. Table 6 on page 4 lists the transmitter cutoff separately for different bias conditions.




  On the prototype, measure the light-state and dark-state outputs with the intended fiber length and bend conditions. Then measure receiver amplitude roll-off at the target signal frequencies. These measurements establish the margin for beam interruption detection and the usable signal bandwidth, respectively.




  \## Where can I download the datasheet or get design support?




  \- \[Firecomms FB00AKAR manufacturer datasheet, Rev. E](https://www.firecomms.com/contentFiles/technicalDocuments/FB00AKAR%20Datasheet%20Revision%20E.pdf)


  \- \[Firecomms OptoLock product catalog](https://www.firecomms.com/optolock/)


  \- \[SIMACITY Firecomms part-number search](https://firecomms-cn.com/en/product-index.html)


  \- \[Contact SIMACITY about FB00AKAR samples, RCLED drive, and photocurrent readout](https://firecomms-cn.com/en/contact.html)
---
Firecomms FB00AKAR 是一款用于模拟光信号传输和传感的 OptoLock® 塑料光纤收发器。使用时，先通过外部电路给发射端 RCLED 设置偏置，再用接收端光电流转换电路把信号送入 ADC 或比较器。器件适配 2.2 mm 外护套塑料光纤（POF），原厂规格书给出的典型光学耦合条件为 1 mm 芯径、数值孔径 NA 0.5。它可用于可见红光传感、遮光检测和远端光纤传感。



\## FB00AKAR 的 RCLED 怎么驱动？



\- \*\*先核对引脚。\*\* FB00AKAR Rev. E 第 2 页表 3 显示，发射端 5 脚为 RCLED 阳极（TD+），2、3、4、6 脚为阴极（TD−）。用外部限流或驱动电路建立直流工作点。

\- \*\*按信号需求设置偏置和调制。\*\* Rev. E 第 1 页给出的交流调制参考工作点约为 20 mA，正向压降约为 1.9 V。原厂给出的交流耦合电容示例为 100–470 nF。对于需要保留直流或慢变化分量的应用，应核对耦合网络的低频响应。

\- \*\*比较光功率时对齐测试条件。\*\* Rev. E 第 4 页表 6 在驱动电流为 10 mA、温度为 −40 至 +85 °C 的条件下，列出典型平均输出光功率 −5.5 dBm，典型峰值波长 660 nm。650 nm 是该产品的红光波段标称值。第 4 页图 3–4 可用于查看温度、驱动电流与光纤耦合功率的关系。



\## 光电二极管的输出怎么接到 ADC？



接收端 7 脚为光电二极管阳极（RD+），8 脚为阴极（RD−）。光电二极管把接收光转换成电流，外部读出电路再把电流转换成电压。Rev. E 第 2 页表 3 给出引脚定义，第 3 页图 2 给出含 DAC 和 ADC 的传感板参考电路。



\- \*\*按光功率估算光电流。\*\* Rev. E 第 5 页表 7 给出的典型响应度为 0.30 A/W（650 nm）。按表中的光纤出射光功率口径估算，10 µW 对应约 3 µA 的信号光电流。设定检测阈值时，还要用样机测量暗态读数和有效信号幅度。

\- \*\*按信号幅度和速度选读出方式。\*\* 遮光检测或低频采样可先评估电阻读出。需要检测较弱信号或提高读出带宽时，可评估跨阻放大器（TIA），并按实际光电流、噪声、输入总电容和 ADC 量程核对增益与稳定性。



\## 规格书里的 125 MHz 指的是哪一级带宽？



125 MHz 是 Rev. E 第 5 页表 7 给出的接收端典型 −3 dB 截止频率。整条模拟光链路的带宽还取决于 RCLED 偏置与调制电路、光电二极管负载和接收放大电路。第 4 页表 6 单独列出了发射端在不同偏置条件下的截止频率。



样机验证时，可以先在实际光纤长度和弯折条件下测量亮态与暗态的输出，再以目标信号频率测量接收端幅度衰减。用这两组数据分别确认遮光检测余量和有效信号带宽。



\## 哪里可以下载规格书或咨询电路选型？



\- \[Firecomms FB00AKAR 原厂规格书 Rev. E](https://www.firecomms.com/contentFiles/technicalDocuments/FB00AKAR%20Datasheet%20Revision%20E.pdf)

\- \[Firecomms 原厂 OptoLock 产品目录](https://www.firecomms.com/optolock/)

\- \[上海芯聚电子 Firecomms 型号检索](https://firecomms-cn.com/product-index.html)

\- \[咨询 FB00AKAR 样品、RCLED 驱动与光电流读出](https://firecomms-cn.com/contact.html)
