/* =============================================================
   Firecomms China — main.js v4.0
   Includes: Product Data (22 models), Mobile Nav, Dropdown,
   Lang Switch, Tab Switch, Product Search, Product Detail,
   Contact Form, Floating Contact, Back-to-Top, Footer Year
   ============================================================= */
(function () {
  'use strict';

  /* =============================================================
     1. PRODUCT DATA — All 22 models
     ============================================================= */
  const PRODUCT_DATA = [
    // ---- OptoLock® Series (4 models) ----
    {
      id: 'FB1M2KPR',
      series: 'optolock',
      seriesName: 'OptoLock® 光纤收发器',
      seriesNameEn: 'OptoLock® Fiber Optic Transceivers',
      rate: 125,
      rateText: '125 Mbps',
      wavelength: '650 nm',
      distance: '50 m',
      interface: 'Snap-lock',
      temp: '-40~85°C',
      fiber: '1mm POF',
      status: 'available',
      statusText: '✅ 在售',
      statusTextEn: '✅ In Stock',
      datasheet: 'assets/pdf/fb1m2kpr.pdf',
      desc: 'FB1M2KPR 是 Firecomms OptoLock® 系列入门级收发器，采用革命性的 Snap-lock 推拉式接口设计，光纤即插即用，无需专业工具。650nm 可见红光波长，便于安装检测。专为中国工业自动化环境设计，宽温工作范围确保恶劣条件下稳定运行。',
      descEn: 'The FB1M2KPR is Firecomms entry-level OptoLock® transceiver featuring a revolutionary snap-lock push-pull interface for tool-free, plug-and-play fiber connections. 650nm visible red light wavelength enables easy installation inspection. Designed for Chinese industrial automation environments with wide temperature range.',
      features: [
        '125 Mbps 全双工数据传输',
        'Snap-lock 即插即用接口，无需工具安装',
        '650nm 可见红光，便于安装检测',
        '传输距离最远 50m（1mm POF 光纤）',
        '工作温度 -40~85°C，适用恶劣工业环境',
        '低功耗设计，发热少，寿命长',
        '兼容标准 LC 接口设备'
      ],
      featuresEn: [
        '125 Mbps full-duplex data transmission',
        'Snap-lock plug-and-play interface, no tools required',
        '650nm visible red light for easy installation inspection',
        'Up to 50m transmission distance (1mm POF fiber)',
        'Operating temperature -40~85°C for harsh environments',
        'Low power design, minimal heat, long lifespan',
        'Compatible with standard LC interface devices'
      ],
      applications: ['工业自动化控制总线', '楼宇自动化照明系统', '医疗设备数据传输', '轨道交通信号系统'],
      applicationsEn: ['Industrial automation control bus', 'Building automation lighting', 'Medical device data transfer', 'Railway signal systems']
    },
    {
      id: 'FB2M5KVR',
      series: 'optolock',
      seriesName: 'OptoLock® 光纤收发器',
      seriesNameEn: 'OptoLock® Fiber Optic Transceivers',
      rate: 250,
      rateText: '250 Mbps',
      wavelength: '650 nm',
      distance: '50 m',
      interface: 'Snap-lock',
      temp: '-40~85°C',
      fiber: '1mm POF',
      status: 'available',
      statusText: '✅ 在售',
      statusTextEn: '✅ In Stock',
      datasheet: 'assets/pdf/fb2m5kvr.pdf',
      desc: 'FB2M5KVR 是一款高性能 OptoLock® 250 Mbps 光纤收发器，采用 Snap-lock 接口简化安装流程，支持工业以太网协议。Versatile Rate 型号兼容多种数据速率，适用于高速工业网络升级。',
      descEn: 'The FB2M5KVR is a high-performance OptoLock® 250 Mbps fiber optic transceiver with Snap-lock interface for simplified installation, supporting industrial Ethernet protocols. Versatile Rate model compatible with multiple data rates for high-speed industrial network upgrades.',
      features: [
        '250 Mbps 全双工高速传输',
        'Snap-lock 即插即用，兼容 Versatile Rate',
        '650nm 可见红光，安装即检即测',
        '传输距离最远 50m',
        '工作温度 -40~85°C',
        '符合工业 EMC 标准',
        '支持 Ethernet/IP、PROFINET 等协议'
      ],
      featuresEn: [
        '250 Mbps full-duplex high-speed transmission',
        'Snap-lock plug-and-play, Versatile Rate compatible',
        '650nm visible red light for instant installation check',
        'Up to 50m transmission distance',
        'Operating temperature -40~85°C',
        'Compliant with industrial EMC standards',
        'Supports Ethernet/IP, PROFINET protocols'
      ],
      applications: ['高速工业以太网', '自动化生产线控制', '机器视觉数据传输', '工厂能源管理系统'],
      applicationsEn: ['High-speed industrial Ethernet', 'Automated production line control', 'Machine vision data transfer', 'Factory energy management systems']
    },
    {
      id: 'FB2M5KPR',
      series: 'optolock',
      seriesName: 'OptoLock® 光纤收发器',
      seriesNameEn: 'OptoLock® Fiber Optic Transceivers',
      rate: 250,
      rateText: '250 Mbps',
      wavelength: '650 nm',
      distance: '50 m',
      interface: 'Snap-lock',
      temp: '-40~85°C',
      fiber: '1mm POF',
      status: 'available',
      statusText: '✅ 在售',
      statusTextEn: '✅ In Stock',
      datasheet: 'assets/pdf/fb2m5kpr.pdf',
      desc: 'FB2M5KPR 是 OptoLock® 系列的标准化 250 Mbps 型号，专为工业网络设计，兼容 Profinet 和 EtherNet/IP 等主流工业以太网协议。Snap-lock 接口使光纤安装如同 USB 一样简单。',
      descEn: 'The FB2M5KPR is the standard 250 Mbps OptoLock® model designed for industrial networks, compatible with Profinet and EtherNet/IP protocols. Snap-lock interface makes fiber installation as simple as USB.',
      features: [
        '250 Mbps 工业以太网标准速率',
        '兼容 Profinet / EtherNet/IP',
        'Snap-lock 即插即拔，安装便捷',
        '650nm 红光，波长可视化',
        '50m POF 传输距离',
        '-40~85°C 宽温工作',
        '低功耗 150mW'
      ],
      featuresEn: [
        '250 Mbps industrial Ethernet standard rate',
        'Compatible with Profinet / EtherNet/IP',
        'Snap-lock plug-and-pull for easy installation',
        '650nm red light wavelength for visualization',
        '50m POF transmission distance',
        '-40~85°C wide temperature operation',
        'Low power consumption 150mW'
      ],
      applications: ['工业以太网骨干网', 'PLC 通讯网络', '工厂自动化系统', '过程控制网络'],
      applicationsEn: ['Industrial Ethernet backbone', 'PLC communication networks', 'Factory automation systems', 'Process control networks']
    },
    {
      id: 'FB00AKAR',
      series: 'optolock',
      seriesName: 'OptoLock® 光纤收发器',
      seriesNameEn: 'OptoLock® Fiber Optic Transceivers',
      rate: 1000,
      rateText: '1 Gbps',
      wavelength: '650 nm',
      distance: '50 m',
      interface: 'Snap-lock',
      temp: '-40~85°C',
      fiber: '1mm POF',
      status: 'demand',
      statusText: '◐ 按需求',
      statusTextEn: '◐ On Demand',
      datasheet: 'assets/pdf/fb00akar.pdf',
      desc: 'FB00AKAR 是 Firecomms 首款 1 Gbps OptoLock® 光纤收发器，专为高速工业网络和多媒体应用设计。即插即用特性与标准 1mm POF 光纤兼容，是千兆位工业自动化网络的理想选择。',
      descEn: 'The FB00AKAR is Firecomms first 1 Gbps OptoLock® fiber optic transceiver, designed for high-speed industrial networks and multimedia applications. Plug-and-play compatibility with standard 1mm POF fiber makes it ideal for gigabit industrial automation networks.',
      features: [
        '1 Gbps 全双工高速传输',
        'Snap-lock 即插即用接口',
        '650nm 可见红光辅助安装',
        '兼容 1mm POF 及 2.2mm 塑料光纤',
        '传输距离 50m',
        '-40~85°C 超宽温度范围',
        '支持 TSN 时间敏感网络'
      ],
      featuresEn: [
        '1 Gbps full-duplex high-speed transmission',
        'Snap-lock plug-and-play interface',
        '650nm visible red light for installation assistance',
        'Compatible with 1mm POF and 2.2mm plastic optical fiber',
        '50m transmission distance',
        '-40~85°C ultra-wide temperature range',
        'Supports TSN (Time Sensitive Networking)'
      ],
      applications: ['千兆工业以太网', '工业机器视觉系统', '高速视频传输', 'TSN 时间敏感网络'],
      applicationsEn: ['Gigabit industrial Ethernet', 'Industrial machine vision systems', 'High-speed video transmission', 'TSN (Time Sensitive Networking)']
    },

    // ---- LC Fiber Transceivers (3 models) ----
    {
      id: 'FB1M2LPR',
      series: 'lc',
      seriesName: 'LC 光纤收发器',
      seriesNameEn: 'LC Fiber Optic Transceivers',
      rate: 125,
      rateText: '125 Mbps',
      wavelength: '650 nm',
      distance: '50 m',
      interface: 'LC Duplex',
      temp: '-40~85°C',
      fiber: '1mm POF',
      status: 'available',
      statusText: '✅ 在售',
      statusTextEn: '✅ In Stock',
      datasheet: 'assets/pdf/fb1m2lpr.pdf',
      desc: 'FB1M2LPR 是 Firecomms LC 系列入门级收发器，采用标准 LC Duplex 接口，与现有光纤基础设施完全兼容。125 Mbps 速率满足大多数工业控制网络需求，是传统电口到光纤过渡的经济解决方案。',
      descEn: 'The FB1M2LPR is the entry-level Firecomms LC series transceiver with standard LC Duplex interface, fully compatible with existing fiber infrastructure. 125 Mbps rate meets most industrial control network requirements as a cost-effective copper-to-fiber transition solution.',
      features: [
        '125 Mbps LC Duplex 标准接口',
        '兼容标准 LC 光纤跳线',
        '650nm 红光可视化诊断',
        '传输距离 50m（POF）',
        '-40~85°C 宽温等级',
        '低功耗设计',
        '即插即用，无需配置'
      ],
      featuresEn: [
        '125 Mbps LC Duplex standard interface',
        'Compatible with standard LC fiber patch cables',
        '650nm red light for visual diagnostics',
        '50m transmission distance (POF)',
        '-40~85°C wide temperature grade',
        'Low power design',
        'Plug-and-play, no configuration required'
      ],
      applications: ['工业串行通讯升级', 'PLC 与 HMI 互联', '工厂旧网光纤化改造', '传感器网络延伸'],
      applicationsEn: ['Industrial serial communication upgrade', 'PLC and HMI interconnection', 'Factory legacy network fiber conversion', 'Sensor network extension']
    },
    {
      id: 'FB2M5LVR',
      series: 'lc',
      seriesName: 'LC 光纤收发器',
      seriesNameEn: 'LC Fiber Optic Transceivers',
      rate: 250,
      rateText: '250 Mbps',
      wavelength: '650 nm',
      distance: '50 m',
      interface: 'LC Duplex',
      temp: '-40~85°C',
      fiber: '1mm POF',
      status: 'available',
      statusText: '✅ 在售',
      statusTextEn: '✅ In Stock',
      datasheet: 'assets/pdf/fb2m5lvr.pdf',
      desc: 'FB2M5LVR 是 LC 系列 250 Mbps Versatile Rate 型号，兼容多种速率配置，适用于需要灵活速率的工业应用。标准 LC 接口便于与现有 LC 光纤布线系统集成。',
      descEn: 'The FB2M5LVR is the LC series 250 Mbps Versatile Rate model, compatible with multiple rate configurations for industrial applications requiring flexible data rates. Standard LC interface facilitates integration with existing LC fiber cabling systems.',
      features: [
        '250 Mbps Versatile Rate 配置',
        '标准 LC Duplex 接口',
        '650nm 红光辅助诊断',
        '50m POF 传输',
        '-40~85°C 宽温',
        '支持速率自适应',
        '兼容 Ethernet/IP、PROFINET'
      ],
      featuresEn: [
        '250 Mbps Versatile Rate configuration',
        'Standard LC Duplex interface',
        '650nm red light for diagnostic assistance',
        '50m POF transmission',
        '-40~85°C wide temperature',
        'Auto-rate adaptation support',
        'Compatible with Ethernet/IP, PROFINET'
      ],
      applications: ['工业以太网交换机互联', '高速工业控制器通讯', '工厂自动化网络', '智能制造产线'],
      applicationsEn: ['Industrial Ethernet switch interconnection', 'High-speed industrial controller communication', 'Factory automation networks', 'Smart manufacturing production lines']
    },
    {
      id: 'FB2M5LPR',
      series: 'lc',
      seriesName: 'LC 光纤收发器',
      seriesNameEn: 'LC Fiber Optic Transceivers',
      rate: 250,
      rateText: '250 Mbps',
      wavelength: '650 nm',
      distance: '50 m',
      interface: 'LC Duplex',
      temp: '-40~85°C',
      fiber: '1mm POF',
      status: 'available',
      statusText: '✅ 在售',
      statusTextEn: '✅ In Stock',
      datasheet: 'assets/pdf/fb2m5lpr.pdf',
      desc: 'FB2M5LPR 是 LC 系列标准化 250 Mbps 产品，标准 LC Duplex 接口与所有标准 LC 光纤跳线完全兼容，专为工业 Profinet 和 EtherNet/IP 网络设计，是工业光纤以太网的可靠解决方案。',
      descEn: 'The FB2M5LPR is the LC series standardized 250 Mbps product with standard LC Duplex interface fully compatible with all standard LC fiber patch cables, designed specifically for industrial Profinet and EtherNet/IP networks as a reliable industrial fiber Ethernet solution.',
      features: [
        '250 Mbps 标准工业速率',
        'LC Duplex 完全兼容标准接口',
        '650nm 可见红光',
        '50m POF 光纤传输',
        '-40~85°C 工业宽温',
        '符合 IEC 61076-3-117 接口标准',
        '支持 Profinet / EtherNet/IP'
      ],
      featuresEn: [
        '250 Mbps standard industrial rate',
        'LC Duplex fully compatible with standard interfaces',
        '650nm visible red light',
        '50m POF fiber transmission',
        '-40~85°C industrial wide temperature',
        'Compliant with IEC 61076-3-117 interface standard',
        'Supports Profinet / EtherNet/IP'
      ],
      applications: ['Profinet 工业以太网', '工厂骨干网络', '自动化立体仓库', '大型机械设备网络'],
      applicationsEn: ['Profinet industrial Ethernet', 'Factory backbone networks', 'Automated storage and retrieval systems', 'Large-scale machinery networks']
    },

    // ---- RedLink® Series (7 models) ----
    {
      id: 'FT-01MH',
      series: 'redlink',
      seriesName: 'RedLink® 收发器',
      seriesNameEn: 'RedLink® Transceivers',
      rate: 1,
      rateText: '1 Mbps',
      wavelength: '650 nm',
      distance: '50 m',
      interface: 'RMS',
      temp: '-40~85°C',
      fiber: '1mm POF',
      status: 'available',
      statusText: '✅ 在售',
      statusTextEn: '✅ In Stock',
      datasheet: 'assets/pdf/ft-01mh.pdf',
      desc: 'FT-01MH 是 Firecomms RedLink® 系列入门级收发器模块，1 Mbps 速率专为工业串行通讯和旧系统升级设计。RMS 接口兼容标准工业连接器，是工厂自动化改造的经济高效解决方案。',
      descEn: 'The FT-01MH is the Firecomms RedLink® series entry-level transceiver module, 1 Mbps rate designed specifically for industrial serial communication and legacy system upgrades. RMS interface compatible with standard industrial connectors makes it a cost-effective solution for factory automation retrofitting.',
      features: [
        '1 Mbps 数据传输速率',
        'RMS 标准工业接口',
        '650nm 红色 LED 光源',
        '50m POF 传输距离',
        '-40~85°C 宽温工作',
        '低功耗设计适合电池供电应用',
        '即插即用无需软件配置'
      ],
      featuresEn: [
        '1 Mbps data transmission rate',
        'RMS standard industrial interface',
        '650nm red LED light source',
        '50m POF transmission distance',
        '-40~85°C wide temperature operation',
        'Low power design suitable for battery-powered applications',
        'Plug-and-play with no software configuration required'
      ],
      applications: ['工业 RS-232/RS-485 升级', 'PLC 串行通讯', '工厂设备联网改造', '传感器到控制器通讯'],
      applicationsEn: ['Industrial RS-232/RS-485 upgrade', 'PLC serial communication', 'Factory equipment networking retrofit', 'Sensor-to-controller communication']
    },
    {
      id: 'FR01MH',
      series: 'redlink',
      seriesName: 'RedLink® 收发器',
      seriesNameEn: 'RedLink® Transceivers',
      rate: 1,
      rateText: '1 Mbps',
      wavelength: '650 nm',
      distance: '50 m',
      interface: 'RMS',
      temp: '-40~85°C',
      fiber: '1mm POF',
      status: 'available',
      statusText: '✅ 在售',
      statusTextEn: '✅ In Stock',
      datasheet: 'assets/pdf/fr01mh.pdf',
      datasheetNote: { zh: '此规格书适用于 FR01DxDR / FR01MH 同系列接收器（详见联系工程师）', en: 'Datasheet covers FR01DxDR / FR01MH series receivers (contact engineer for details)' },
      desc: 'FR01MH 是 RedLink® 系列 1 Mbps 接收器模块，与 FT 系列发射器配套使用，组成完整的光纤链路。RMS 接口标准化设计，便于在现有工业系统中快速替换和部署。',
      descEn: 'The FR01MH is the RedLink® series 1 Mbps receiver module, used with FT series transmitters to form complete fiber optic links. Standardized RMS interface design facilitates rapid replacement and deployment in existing industrial systems.',
      features: [
        '1 Mbps 接收速率',
        'RMS 标准工业接口',
        '650nm 红色 LED 接收',
        '50m POF 传输距离',
        '-40~85°C 宽温',
        '宽动态范围输入',
        '无电磁干扰，信号完整'
      ],
      featuresEn: [
        '1 Mbps receive rate',
        'RMS standard industrial interface',
        '650nm red LED reception',
        '50m POF transmission distance',
        '-40~85°C wide temperature',
        'Wide dynamic range input',
        'No EMI, complete signal integrity'
      ],
      applications: ['工业串行光纤链路', 'PLC 通讯延长', '设备间光纤隔离', '长距离传感器网络'],
      applicationsEn: ['Industrial serial fiber links', 'PLC communication extension', 'Galvanic isolation between equipment', 'Long-distance sensor networks']
    },
    {
      id: 'FR05MH',
      series: 'redlink',
      seriesName: 'RedLink® 收发器',
      seriesNameEn: 'RedLink® Transceivers',
      rate: 5,
      rateText: '5 Mbps',
      wavelength: '650 nm',
      distance: '50 m',
      interface: 'RMS',
      temp: '-40~85°C',
      fiber: '1mm POF',
      status: 'available',
      statusText: '✅ 在售',
      statusTextEn: '✅ In Stock',
      datasheet: 'assets/pdf/fr05mh.pdf',
      datasheetNote: { zh: '此规格书适用于 FR05DxDR / FR05MH 同系列接收器（详见联系工程师）', en: 'Datasheet covers FR05DxDR / FR05MH series receivers (contact engineer for details)' },
      desc: 'FR05MH 是 RedLink® 系列 5 Mbps 接收器，提供比 1 Mbps 型号更高的带宽，适合需要快速数据交换的工业应用。RMS 接口兼容标准工业连接器，方便系统集成。',
      descEn: 'The FR05MH is the RedLink® series 5 Mbps receiver, providing higher bandwidth than the 1 Mbps model, suitable for industrial applications requiring fast data exchange. RMS interface compatible with standard industrial connectors for easy system integration.',
      features: [
        '5 Mbps 高速接收',
        'RMS 接口标准兼容',
        '650nm 红色 LED 接收灵敏度优化',
        '50m POF 传输',
        '-40~85°C 工业宽温',
        '快速响应时间',
        'EMI 免疫，传输可靠'
      ],
      featuresEn: [
        '5 Mbps high-speed reception',
        'RMS interface standard compatible',
        '650nm red LED optimized reception sensitivity',
        '50m POF transmission',
        '-40~85°C industrial wide temperature',
        'Fast response time',
        'EMI immune, reliable transmission'
      ],
      applications: ['高速工业串行链路', 'CNC 数控系统通讯', '运动控制系统', '工业网络光纤延伸'],
      applicationsEn: ['High-speed industrial serial links', 'CNC machine tool communication', 'Motion control systems', 'Industrial network fiber extension']
    },
    {
      id: 'FR10MH',
      series: 'redlink',
      seriesName: 'RedLink® 收发器',
      seriesNameEn: 'RedLink® Transceivers',
      rate: 10,
      rateText: '10 Mbps',
      wavelength: '650 nm',
      distance: '50 m',
      interface: 'RMS',
      temp: '-40~85°C',
      fiber: '1mm POF',
      status: 'available',
      statusText: '✅ 在售',
      statusTextEn: '✅ In Stock',
      datasheet: 'assets/pdf/fr10mh.pdf',
      desc: 'FR10MH 是 RedLink® 系列 10 Mbps 高速接收器，专为高速工业应用设计，传输速率满足大多数 PLC 和运动控制器的高速串行通讯需求。',
      descEn: 'The FR10MH is the RedLink® series 10 Mbps high-speed receiver, designed for high-speed industrial applications with transmission rate meeting the high-speed serial communication needs of most PLCs and motion controllers.',
      features: [
        '10 Mbps 高速数据传输',
        'RMS 标准接口',
        '650nm 红色 LED 优化',
        '50m POF 传输',
        '-40~85°C 宽温工作',
        '低延迟通讯',
        '无电磁干扰，抗噪声'
      ],
      featuresEn: [
        '10 Mbps high-speed data transmission',
        'RMS standard interface',
        '650nm red LED optimization',
        '50m POF transmission',
        '-40~85°C wide temperature operation',
        'Low latency communication',
        'EMI immune, noise resistant'
      ],
      applications: ['高速 PLC 通讯', '运动控制器数据传输', '工业机器人控制网络', '高速数据采集系统'],
      applicationsEn: ['High-speed PLC communication', 'Motion controller data transmission', 'Industrial robot control networks', 'High-speed data acquisition systems']
    },
    {
      id: 'FR50MH',
      series: 'redlink',
      seriesName: 'RedLink® 收发器',
      seriesNameEn: 'RedLink® Transceivers',
      rate: 50,
      rateText: '50 Mbps',
      wavelength: '650 nm',
      distance: '50 m',
      interface: 'RMS',
      temp: '-40~85°C',
      fiber: '1mm POF',
      status: 'available',
      statusText: '✅ 在售',
      statusTextEn: '✅ In Stock',
      datasheet: 'assets/pdf/fr50mh.pdf',
      datasheetNote: { zh: '此规格书适用于 FR50MxxR / FR50MH 同系列接收器（详见联系工程师）', en: 'Datasheet covers FR50MxxR / FR50MH series receivers (contact engineer for details)' },
      desc: 'FR50MH 是 RedLink® 系列旗舰级高速接收器，50 Mbps 传输速率满足最苛刻的工业高速数据链路需求，支持视频和高速传感器数据的光纤传输。',
      descEn: 'The FR50MH is the flagship high-speed receiver in the RedLink® series, 50 Mbps transmission rate meeting the most demanding industrial high-speed data link requirements, supporting fiber optic transmission of video and high-speed sensor data.',
      features: [
        '50 Mbps 超高速传输',
        'RMS 接口兼容',
        '650nm 高灵敏度接收器',
        '50m POF 全速传输',
        '-40~85°C 超宽温度',
        '支持高速视频信号',
        '极低误码率'
      ],
      featuresEn: [
        '50 Mbps ultra high-speed transmission',
        'RMS interface compatible',
        '650nm high-sensitivity receiver',
        '50m POF full-speed transmission',
        '-40~85°C ultra-wide temperature',
        'Supports high-speed video signals',
        'Extremely low BER (Bit Error Rate)'
      ],
      applications: ['工业机器视觉', '高速数据采集与传输', '医疗影像设备', '实时视频监控光纤化'],
      applicationsEn: ['Industrial machine vision', 'High-speed data acquisition and transmission', 'Medical imaging equipment', 'Real-time video monitoring fiber conversion']
    },
    {
      id: 'FR05DxDR',
      series: 'redlink',
      seriesName: 'RedLink® 收发器',
      seriesNameEn: 'RedLink® Transceivers',
      rate: 5,
      rateText: '5 Mbps',
      wavelength: '650 nm',
      distance: '50 m',
      interface: 'DIL',
      temp: '-40~85°C',
      fiber: '1mm POF',
      status: 'available',
      statusText: '✅ 在售',
      statusTextEn: '✅ In Stock',
      datasheet: 'assets/pdf/fr05dxdr.pdf',
      desc: 'FR05DxDR 是 RedLink® 系列 DIL 接口 5 Mbps 接收器，DIL 接口封装更适合 PCB 板级集成，是设备制造商进行光纤通讯模块设计的理想选择。',
      descEn: 'The FR05DxDR is the RedLink® series DIL interface 5 Mbps receiver, DIL interface packaging more suitable for PCB board-level integration, ideal for equipment manufacturers designing fiber optic communication modules.',
      features: [
        '5 Mbps DIL 接口型号',
        'PCB 板级封装兼容',
        '650nm 红色 LED 接收',
        '50m POF 传输',
        '-40~85°C 宽温',
        '紧凑型 DIL 封装',
        '高速光学性能'
      ],
      featuresEn: [
        '5 Mbps DIL interface model',
        'PCB board-level package compatible',
        '650nm red LED reception',
        '50m POF transmission',
        '-40~85°C wide temperature',
        'Compact DIL package',
        'High-speed optical performance'
      ],
      applications: ['设备制造商 PCB 集成', '定制化光纤通讯模块', '工业嵌入式系统', '通讯设备内部光纤互联'],
      applicationsEn: ['Equipment manufacturer PCB integration', 'Customized fiber optic communication modules', 'Industrial embedded systems', 'Communication equipment internal fiber interconnection']
    },
    {
      id: 'FR50MxxR',
      series: 'redlink',
      seriesName: 'RedLink® 收发器',
      seriesNameEn: 'RedLink® Transceivers',
      rate: 50,
      rateText: '50 Mbps',
      wavelength: '650 nm',
      distance: '50 m',
      interface: 'DIL',
      temp: '-40~85°C',
      fiber: '1mm POF',
      status: 'available',
      statusText: '✅ 在售',
      statusTextEn: '✅ In Stock',
      datasheet: 'assets/pdf/fr50mxxr.pdf',
      desc: 'FR50MxxR 是 RedLink® 系列 DIL 接口 50 Mbps 高速接收器，PCB 板级封装支持高速视频信号和高速传感器数据的光纤传输，是设备制造商高端嵌入式应用的理想选择。',
      descEn: 'The FR50MxxR is the RedLink® series DIL interface 50 Mbps high-speed receiver, PCB board-level packaging supports high-speed video signal and high-speed sensor data fiber transmission, ideal for equipment manufacturers high-end embedded applications.',
      features: [
        '50 Mbps DIL 高速型号',
        'PCB 贴片封装兼容',
        '650nm 高速光学接收',
        '50m POF 超高速传输',
        '-40~85°C 宽温设计',
        '支持高清视频光纤传输',
        '极低误码率设计'
      ],
      featuresEn: [
        '50 Mbps DIL high-speed model',
        'PCB surface-mount package compatible',
        '650nm high-speed optical reception',
        '50m POF ultra-high-speed transmission',
        '-40~85°C wide temperature design',
        'Supports HD video fiber transmission',
        'Extremely low BER design'
      ],
      applications: ['高端嵌入式视觉系统', '医疗设备高速光纤接口', '航空航天通讯模块', '专业视频制作设备'],
      applicationsEn: ['High-end embedded vision systems', 'Medical equipment high-speed fiber interfaces', 'Aerospace communication modules', 'Professional video production equipment']
    },

    // ---- SMI / Media Converters (6 models) ----
    {
      id: 'FT-05MHI',
      series: 'pof',
      seriesName: 'SMI 媒体转换器',
      seriesNameEn: 'SMI Media Converters',
      rate: 5,
      rateText: '5 Mbps',
      wavelength: '650 nm',
      distance: '50 m',
      interface: 'MII / RMII',
      temp: '-40~85°C',
      fiber: 'POF',
      status: 'available',
      statusText: '✅ 在售',
      statusTextEn: '✅ In Stock',
      datasheet: 'assets/pdf/ft-05mhi.pdf',
      desc: 'FT-05MHI 是 Firecomms SMI 媒体转换器系列的 5 Mbps 型号，专为将以太网 MAC 层直接连接至 POF 光纤而设计，支持 MII 和 RMII 双接口模式，是工业网络即插即用光纤延伸的理想方案。',
      descEn: 'The FT-05MHI is the 5 Mbps model of the Firecomms SMI media converter series, designed specifically for direct connection of Ethernet MAC layer to POF fiber, supporting both MII and RMII dual interface modes, ideal for industrial network plug-and-play fiber extension.',
      features: [
        '5 Mbps SMI 媒体转换',
        'MII / RMII 双接口支持',
        '即插即用无需配置',
        'POF 塑料光纤 50m 延伸',
        '-40~85°C 宽温等级',
        '支持快速以太网 MAC 直连',
        '低功耗单芯片方案'
      ],
      featuresEn: [
        '5 Mbps SMI media conversion',
        'MII / RMII dual interface support',
        'Plug-and-play, no configuration',
        'POF plastic fiber 50m extension',
        '-40~85°C wide temperature grade',
        'Supports Fast Ethernet MAC direct connection',
        'Low power single-chip solution'
      ],
      applications: ['以太网 MAC 层光纤延伸', '工业网络 POF 布线', '智能楼宇网络', '电机驱动控制器光纤通讯'],
      applicationsEn: ['Ethernet MAC layer fiber extension', 'Industrial network POF wiring', 'Smart building networks', 'Motor drive controller fiber communication']
    },
    {
      id: 'FT-10MHI',
      series: 'pof',
      seriesName: 'SMI 媒体转换器',
      seriesNameEn: 'SMI Media Converters',
      rate: 10,
      rateText: '10 Mbps',
      wavelength: '650 nm',
      distance: '50 m',
      interface: 'MII / RMII',
      temp: '-40~85°C',
      fiber: 'POF',
      status: 'available',
      statusText: '✅ 在售',
      statusTextEn: '✅ In Stock',
      datasheet: 'assets/pdf/ft-10mhi.pdf',
      desc: 'FT-10MHI 是 SMI 系列 10 Mbps 型号，提供更高带宽支持工业以太网 PHY 芯片直连，是工厂自动化网络中高速以太网设备光纤延伸的高性价比方案。',
      descEn: 'The FT-10MHI is the 10 Mbps model of the SMI series, providing higher bandwidth for direct connection of industrial Ethernet PHY chips, a cost-effective solution for high-speed Ethernet device fiber extension in factory automation networks.',
      features: [
        '10 Mbps 高速 SMI 转换',
        'MII / RMII 接口自动选择',
        '以太网 PHY 直连兼容',
        'POF 50m 传输延伸',
        '-40~85°C 工业宽温',
        '单芯片低功耗方案',
        '无软件配置即插即用'
      ],
      featuresEn: [
        '10 Mbps high-speed SMI conversion',
        'MII / RMII interface auto-selection',
        'Ethernet PHY direct connection compatible',
        'POF 50m transmission extension',
        '-40~85°C industrial wide temperature',
        'Single-chip low-power solution',
        'No software configuration, plug-and-play'
      ],
      applications: ['工业以太网 PHY 光纤延伸', '高速工厂网络', 'PLC 与变频器光纤通讯', '自动化设备网络集成'],
      applicationsEn: ['Industrial Ethernet PHY fiber extension', 'High-speed factory networks', 'PLC and inverter fiber communication', 'Automated equipment network integration']
    },
    {
      id: 'FT-50MHI',
      series: 'pof',
      seriesName: 'SMI 媒体转换器',
      seriesNameEn: 'SMI Media Converters',
      rate: 50,
      rateText: '50 Mbps',
      wavelength: '650 nm',
      distance: '50 m',
      interface: 'MII / RMII',
      temp: '-40~85°C',
      fiber: 'POF',
      status: 'available',
      statusText: '✅ 在售',
      statusTextEn: '✅ In Stock',
      datasheet: 'assets/pdf/ft-50mhi.pdf',
      desc: 'FT-50MHI 是 SMI 系列旗舰型号，50 Mbps 传输速率支持高速以太网应用，包括工业机器视觉和实时视频传输。专用 PHY 接口确保与工业以太网控制器的无缝集成。',
      descEn: 'The FT-50MHI is the flagship model of the SMI series, 50 Mbps transmission rate supporting high-speed Ethernet applications including industrial machine vision and real-time video transmission. Dedicated PHY interface ensures seamless integration with industrial Ethernet controllers.',
      features: [
        '50 Mbps 超高速 SMI 媒体转换',
        'MII / RMII 双接口兼容',
        '支持工业机器视觉高速数据流',
        'POF 光纤 50m 零延迟传输',
        '-40~85°C 超宽温度范围',
        '实时视频传输优化',
        '工业级 EMC 兼容'
      ],
      featuresEn: [
        '50 Mbps ultra-high-speed SMI media conversion',
        'MII / RMII dual interface compatible',
        'Supports industrial machine vision high-speed data streams',
        'POF fiber 50m zero-latency transmission',
        '-40~85°C ultra-wide temperature range',
        'Real-time video transmission optimized',
        'Industrial-grade EMC compatible'
      ],
      applications: ['工业机器视觉高速链路', '实时工业视频监控', '高速以太网光纤延伸', '自动化测试与测量系统'],
      applicationsEn: ['Industrial machine vision high-speed links', 'Real-time industrial video surveillance', 'High-speed Ethernet fiber extension', 'Automated test and measurement systems']
    },
    {
      id: 'FE50MKIR',
      series: 'pof',
      seriesName: 'SMI 媒体转换器',
      seriesNameEn: 'SMI Media Converters',
      rate: 100,
      rateText: '100 Mbps',
      wavelength: '650 nm',
      distance: '50 m',
      interface: '10/100 Ethernet',
      temp: '-40~85°C',
      fiber: 'POF',
      status: 'available',
      statusText: '✅ 在售',
      statusTextEn: '✅ In Stock',
      datasheet: 'assets/pdf/fe50mkir.pdf',
      desc: 'FE50MKIR 是 Firecomms 媒体转换器系列的全功能 100 Mbps 以太网型号，支持 SC/ST 双接口，兼容 10Mbps 和 100Mbps 自适应，是工业以太网 POF 光纤网络部署的即插即用解决方案。',
      descEn: 'The FE50MKIR is the full-featured 100 Mbps Ethernet model of the Firecomms media converter series, supporting SC/ST dual interfaces, auto-negotiable 10Mbps and 100Mbps, a plug-and-play solution for industrial Ethernet POF fiber network deployment.',
      features: [
        '100 Mbps 全双工以太网媒体转换',
        'SC / ST 双光纤接口',
        '10/100 Mbps 自适应',
        '即插即用，无需配置',
        'POF 光纤 50m 延伸',
        '-40~85°C 宽温等级',
        '兼容标准以太网交换机和路由器'
      ],
      featuresEn: [
        '100 Mbps full-duplex Ethernet media conversion',
        'SC / ST dual fiber interfaces',
        '10/100 Mbps auto-negotiation',
        'Plug-and-play, no configuration required',
        'POF fiber 50m extension',
        '-40~85°C wide temperature grade',
        'Compatible with standard Ethernet switches and routers'
      ],
      applications: ['工业以太网 POF 光纤布线', '工厂网络光纤延伸', '设备间光纤互联', '工业网络升级改造'],
      applicationsEn: ['Industrial Ethernet POF fiber wiring', 'Factory network fiber extension', 'Inter-equipment fiber interconnection', 'Industrial network upgrade and retrofit']
    },
    {
      id: 'FE50MSIR',
      series: 'pof',
      seriesName: 'SMI 媒体转换器',
      seriesNameEn: 'SMI Media Converters',
      rate: 100,
      rateText: '100 Mbps',
      wavelength: '650 nm',
      distance: '50 m',
      interface: '10/100 Ethernet',
      temp: '-40~85°C',
      fiber: 'POF',
      status: 'available',
      statusText: '✅ 在售',
      statusTextEn: '✅ In Stock',
      datasheet: 'assets/pdf/fe50msir.pdf',
      desc: 'FE50MSIR 是媒体转换器系列 100 Mbps SC 接口型号，专为需要 SC 接口标准化的工业应用设计，与标准 SC 光纤跳线完全兼容，是工业现场总线光纤化的可靠方案。',
      descEn: 'The FE50MSIR is the 100 Mbps SC interface model of the media converter series, designed specifically for industrial applications requiring standardized SC interfaces, fully compatible with standard SC fiber patch cables, a reliable solution for industrial fieldbus fiber conversion.',
      features: [
        '100 Mbps 以太网 SC 接口媒体转换',
        '标准 SC 端口完全兼容',
        '10/100 Mbps 自动协商',
        '即插即用无配置',
        'POF 光纤 50m',
        '-40~85°C 宽温设计',
        'DIN 导轨安装兼容'
      ],
      featuresEn: [
        '100 Mbps Ethernet SC interface media conversion',
        'Standard SC port fully compatible',
        '10/100 Mbps auto-negotiation',
        'Plug-and-play without configuration',
        'POF fiber 50m',
        '-40~85°C wide temperature design',
        'DIN rail mounting compatible'
      ],
      applications: ['工业现场总线光纤化', '标准 SC 接口工业网络', '工厂自动化 POF 系统', 'SC 接口设备互联'],
      applicationsEn: ['Industrial fieldbus fiber conversion', 'Standard SC interface industrial networks', 'Factory automation POF systems', 'SC interface equipment interconnection']
    },
    {
      id: 'FE50MKNR',
      series: 'pof',
      seriesName: 'SMI 媒体转换器',
      seriesNameEn: 'SMI Media Converters',
      rate: 100,
      rateText: '100 Mbps',
      wavelength: '650 nm',
      distance: '50 m',
      interface: '10/100 Ethernet',
      temp: '-40~85°C',
      fiber: 'POF',
      status: 'available',
      statusText: '✅ 在售',
      statusTextEn: '✅ In Stock',
      datasheet: 'assets/pdf/fe50mknr.pdf',
      desc: 'FE50MKNR 是 Firecomms 媒体转换器系列的高阶型号，支持双 SC 接口，适合需要链路冗余或全双工通讯的工业应用，即插即用设计简化了 POF 网络的部署和调试。',
      descEn: 'The FE50MKNR is the advanced model of the Firecomms media converter series, supporting dual SC interfaces, suitable for industrial applications requiring link redundancy or full-duplex communication, plug-and-play design simplifies POF network deployment and commissioning.',
      features: [
        '100 Mbps 双 SC 接口高阶型号',
        '支持链路冗余和全双工',
        '10/100 Mbps 自适应协商',
        'POF 光纤 50m',
        '-40~85°C 宽温工业级',
        '即插即用免配置',
        'SC/SC 双端口光纤输出'
      ],
      featuresEn: [
        '100 Mbps dual SC interface advanced model',
        'Supports link redundancy and full-duplex',
        '10/100 Mbps auto-negotiation',
        'POF fiber 50m',
        '-40~85°C wide temperature industrial grade',
        'Plug-and-play, no configuration',
        'SC/SC dual-port fiber output'
      ],
      applications: ['需要链路冗余的工业网络', '全双工高速工业通讯', 'SC/SC 双链路系统', '关键基础设施光纤网络'],
      applicationsEn: ['Industrial networks requiring link redundancy', 'Full-duplex high-speed industrial communication', 'SC/SC dual-link systems', 'Critical infrastructure fiber networks']
    },

    // ---- Evaluation Kits (4 models) ----
    {
      id: 'EVAL-POF-01',
      series: 'kit',
      seriesName: '评估套件',
      seriesNameEn: 'Evaluation Kits',
      rate: null,
      rateText: '1~50 Mbps',
      wavelength: '650 nm',
      distance: '50 m',
      interface: 'USB / RS232',
      temp: null,
      tempText: '—',
      fiber: '1m POF ×2',
      status: 'available',
      statusText: '✅ 在售',
      statusTextEn: '✅ In Stock',
      datasheet: 'no-datasheet',
      desc: 'EVAL-POF-01 是 Firecomms RedLink® 系列通用评估套件，支持 FR01MH 至 FR50MH 全系列 RedLink® 收发器评估。附带 USB/RS232 双接口，即插即用 LED 诊断指示，是工程师快速验证 POF 光纤通讯性能的首选工具。',
      descEn: 'The EVAL-POF-01 is the universal evaluation kit for the Firecomms RedLink® series, supporting evaluation of all FR01MH to FR50MH RedLink® transceivers. Equipped with USB/RS232 dual interfaces, plug-and-play LED diagnostic indicators, the preferred tool for engineers to quickly verify POF fiber communication performance.',
      features: [
        '兼容 FR01MH ~ FR50MH 全系列 RedLink® 型号',
        'USB 和 RS232 双主机接口',
        '即插即用 LED 诊断状态指示',
        '附送 1m POF 跳线 ×2',
        '支持 Windows 即插即用驱动',
        '传输距离测试用 50m POF（需另购）',
        '即开即用，无需软件配置'
      ],
      featuresEn: [
        'Compatible with all RedLink® models FR01MH ~ FR50MH',
        'USB and RS232 dual host interfaces',
        'Plug-and-play LED diagnostic status indicators',
        'Includes 2× 1m POF patch cables',
        'Supports Windows plug-and-play driver',
        '50m POF for distance testing (sold separately)',
        'Ready to use out of the box, no software configuration'
      ],
      applications: ['RedLink® 收发器性能评估', 'POF 光纤通讯方案验证', '客户样机演示', '工厂验收测试'],
      applicationsEn: ['RedLink® transceiver performance evaluation', 'POF fiber communication solution verification', 'Customer prototype demonstration', 'Factory acceptance testing']
    },
    {
      id: 'EVAL-POF-02',
      series: 'kit',
      seriesName: '评估套件',
      seriesNameEn: 'Evaluation Kits',
      rate: null,
      rateText: '125~1000 Mbps',
      wavelength: '650 nm',
      distance: '50 m',
      interface: 'USB',
      temp: null,
      tempText: '—',
      fiber: '1m POF ×2',
      status: 'available',
      statusText: '✅ 在售',
      statusTextEn: '✅ In Stock',
      datasheet: 'no-datasheet',
      desc: 'EVAL-POF-02 是 Firecomms OptoLock® 系列 FB 全型号评估套件，USB 接口连接即插即用，支持速率可调和眼图测试功能，是评估 OptoLock® 高速光纤收发器的完整解决方案。',
      descEn: 'The EVAL-POF-02 is the complete evaluation kit for the Firecomms OptoLock® series all FB models, USB interface plug-and-play connection, supports adjustable data rate and eye diagram testing functions, a complete solution for evaluating OptoLock® high-speed fiber optic transceivers.',
      features: [
        '兼容 FB1M2KPR / FB2M5KVR / FB2M5KPR / FB00AKAR',
        'USB 即插即用连接',
        '可调数据速率测试',
        '内置眼图测试功能',
        '附 1m POF 跳线 ×2',
        '支持 50m 距离性能验证',
        '即开即用，无需配置驱动'
      ],
      featuresEn: [
        'Compatible with FB1M2KPR / FB2M5KVR / FB2M5KPR / FB00AKAR',
        'USB plug-and-play connection',
        'Adjustable data rate testing',
        'Built-in eye diagram testing function',
        'Includes 2× 1m POF patch cables',
        'Supports 50m distance performance verification',
        'Ready to use, no driver configuration required'
      ],
      applications: ['OptoLock® 高速收发器评估', '工业以太网 POF 方案验证', '千兆 POF 网络测试', '研发与测试部门'],
      applicationsEn: ['OptoLock® high-speed transceiver evaluation', 'Industrial Ethernet POF solution verification', 'Gigabit POF network testing', 'R&D and testing departments']
    },
    {
      id: 'EVAL-POF-03',
      series: 'kit',
      seriesName: '评估套件',
      seriesNameEn: 'Evaluation Kits',
      rate: null,
      rateText: '125~250 Mbps',
      wavelength: '650 nm',
      distance: '50 m',
      interface: 'USB / RS232',
      temp: null,
      tempText: '—',
      fiber: 'LC Duplex ×2',
      status: 'available',
      statusText: '✅ 在售',
      statusTextEn: '✅ In Stock',
      datasheet: 'no-datasheet',
      desc: 'EVAL-POF-03 是 LC 光纤收发器系列 FB 全型号专用评估套件，LC Duplex 跳线附赠，USB/RS232 双接口支持 BER 误码率测试，是评估 LC 系列 POF 收发器的完整工具包。',
      descEn: 'The EVAL-POF-03 is the dedicated evaluation kit for the LC fiber optic transceiver series all FB models, LC Duplex patch cables included, USB/RS232 dual interfaces support BER (Bit Error Rate) testing, a complete toolkit for evaluating LC series POF transceivers.',
      features: [
        '兼容 FB1M2LPR / FB2M5LVR / FB2M5LPR 全系列 LC 型号',
        'USB / RS232 双评估接口',
        '支持 BER 误码率精确测试',
        '附 LC Duplex 跳线 ×2',
        '即插即用无需配置',
        '支持 50m LC POF 测试',
        '工业现场测试首选工具'
      ],
      featuresEn: [
        'Compatible with all LC series FB1M2LPR / FB2M5LVR / FB2M5LPR',
        'USB / RS232 dual evaluation interfaces',
        'Supports precise BER (Bit Error Rate) testing',
        'Includes LC Duplex patch cables ×2',
        'Plug-and-play, no configuration required',
        'Supports 50m LC POF testing',
        'Preferred tool for industrial field testing'
      ],
      applications: ['LC 系列 POF 收发器评估', 'Profinet/EtherNet/IP 兼容性测试', '工厂验收测试', '技术销售演示'],
      applicationsEn: ['LC series POF transceiver evaluation', 'Profinet/EtherNet/IP compatibility testing', 'Factory acceptance testing', 'Technical sales demonstration']
    },
    {
      id: 'EVAL-POF-MED',
      series: 'kit',
      seriesName: '评估套件',
      seriesNameEn: 'Evaluation Kits',
      rate: null,
      rateText: '1~50 Mbps',
      wavelength: '650 nm',
      distance: '50 m',
      interface: 'USB',
      temp: null,
      tempText: '—',
      fiber: '医疗级光纤',
      status: 'demand',
      statusText: '◐ 按需求',
      statusTextEn: '◐ On Demand',
      datasheet: 'no-datasheet',
      desc: 'EVAL-POF-MED 是 Firecomms 专为医疗级 POF 光纤通讯方案设计的评估套件，符合医疗行业相关标准，用于医疗影像设备、手术室设备和患者监护系统的光纤通讯方案评估与认证。',
      descEn: 'The EVAL-POF-MED is Firecomms evaluation kit specifically designed for medical-grade POF fiber communication solutions, compliant with relevant medical industry standards, for evaluation and certification of fiber communication solutions in medical imaging equipment, operating room devices, and patient monitoring systems.',
      features: [
        '专为医疗级 POF 方案评估设计',
        '符合医疗行业相关标准',
        '支持医疗影像设备光纤测试',
        '支持患者监护系统评估',
        'USB 即插即用接口',
        '医疗级光纤跳线配置',
        '提供认证所需测试数据'
      ],
      featuresEn: [
        'Designed specifically for medical-grade POF solution evaluation',
        'Compliant with relevant medical industry standards',
        'Supports medical imaging equipment fiber testing',
        'Supports patient monitoring system evaluation',
        'USB plug-and-play interface',
        'Medical-grade fiber optic cable configuration',
        'Provides certification-required test data'
      ],
      applications: ['医疗影像设备光纤通讯', '手术室设备 POF 网络', '患者监护系统', '医疗设备认证测试'],
      applicationsEn: ['Medical imaging equipment fiber communication', 'Operating room device POF networks', 'Patient monitoring systems', 'Medical device certification testing']
    }
  ];

  /* =============================================================
     CROSS-REFERENCE INDEX — Avago?→?Firecomms
     Single source of truth for the part-number vocabulary.
     Shared by the Avago cross-reference page and the product search.
     Source: "Firecomms VS Avago 对照表" v6 (2026-09-15).
     ============================================================= */
  const AVAGO_XREF = {
    /* 1M */
    'HFBR-1522Z': 'FT05MHNR', 'HFBR-1522ETZ': 'FT05MHNR',
    'HFBR-1532Z': 'FT05MVNR', 'HFBR-1532ETZ': 'FT05MVNR',
    'HFBR-1542ETZ': 'FT05MWNR',
    'HFBR-2522Z': 'FR2521', 'HFBR-2522ETZ': 'FR2521',
    'HFBR-2532Z': 'FR2531', 'HFBR-2532ETZ': 'FR2531',
    'HFBR-2542ETZ': 'FR2541',
    /* 5M */
    'HFBR-1521Z': 'FT05MHNR', 'HFBR-1521ETZ': 'FT05MHNR',
    'AFBR-1521CZ': 'FT10MHNR',
    'HFBR-1531Z': 'FT05MVNR', 'HFBR-1531ETZ': 'FT05MVNR',
    'AFBR-1531CZ': 'FT10MVNR',
    'HFBR-1541ETZ': 'FT05MWNR', 'AFBR-1541CZ': 'FT10MWNR',
    'HFBR-2521Z': 'FR2521', 'HFBR-2521ETZ': 'FR2521',
    'AFBR-2521CZ': 'FR05DHIR',
    'HFBR-2531Z': 'FR2531', 'HFBR-2531ETZ': 'FR2531',
    'AFBR-2531CZ': 'FR05DVIR',
    'HFBR-2541ETZ': 'FR2541', 'AFBR-2541CZ': 'FR05DWIR',
    /* 10M */
    'HFBR-1528Z': 'FT10MHNR', 'AFBR-1529Z': 'FT10MHNR', 'AFBR-1528CZ': 'FT10MHNR',
    'AFBR-1539Z': 'FT10MVNR',
    'HFBR-2528Z': 'FR10MHIR', 'AFBR-2528CZ': 'FR10MHIR',
    /* 50M */
    'AFBR-1629Z': 'FT50MHIR', 'AFBR-1639Z': 'FT50MVIR',
    'AFBR-1624Z': 'FT50MHNR', 'AFBR-1634Z': 'FT50MVNR', 'AFBR-1644Z': 'FT50MWNR',
    'AFBR-2529Z': 'FR50MHIR', 'AFBR-2539Z': 'FR50MVIR',
    'AFBR-2624Z': 'FR50MHNR', 'AFBR-2634Z': 'FR50MVNR', 'AFBR-2644Z': 'FR50MWNR',
    /* Fiber cable */
    'HFBR-EUS500Z': 'FC-500-0SB'
  };

  /* Real orderable Firecomms SKU → product-family id used by the product index. */
  const SKU_FAMILY_RULES = [
    [/^FT05M/, 'FT-05MHI'],
    [/^FT10M/, 'FT-10MHI'],
    [/^FT50M/, 'FT-50MHI'],
    [/^FT01M/, 'FT-01MH'],
    [/^FR01D/, 'FR01MH'],
    [/^FR05D/, 'FR05DxDR'],
    [/^FR10M/, 'FR10MH'],
    [/^FR50M/, 'FR50MxxR']
  ];

  /* Avago part# → family, keyed by family (built from AVAGO_XREF). */
  const PRODUCT_XREF = (function () {
    var out = {}, a, f;
    for (a in AVAGO_XREF) {
      f = skuFamily(AVAGO_XREF[a]);
      if (!f) continue;
      if (!out[f]) out[f] = [];
      out[f].push(a);
    }
    return out;
  })();

  /* Resolve a real Firecomms SKU to its product family id (or null). */
  function skuFamily(sku) {
    if (!sku) return null;
    for (var i = 0; i < SKU_FAMILY_RULES.length; i++) {
      if (SKU_FAMILY_RULES[i][0].test(sku)) return SKU_FAMILY_RULES[i][1];
    }
    return null;
  }

  /* All real Firecomms SKUs belonging to a product family. */
  function productSkus(pid) {
    var xr = PRODUCT_XREF[pid];
    if (!xr) return [];
    var seen = {}, out = [], i, fc;
    for (i = 0; i < xr.length; i++) {
      fc = AVAGO_XREF[xr[i]];
      if (!seen[fc]) { seen[fc] = 1; out.push(fc); }
    }
    return out;
  }

  /* Avago part numbers matching a query (exact or partial). */
  function avagoMatches(qRaw) {
    var q = (qRaw || '').trim().toLowerCase();
    if (!q) return [];
    var out = [], a;
    for (a in AVAGO_XREF) {
      if (a.toLowerCase().indexOf(q) > -1) {
        out.push({ avago: a, fc: AVAGO_XREF[a], family: skuFamily(AVAGO_XREF[a]) });
      }
    }
    return out;
  }

  /* Series Metadata */
  const SERIES_META = {
    optolock: {
      name: 'OptoLock® 光纤收发器',
      nameEn: 'OptoLock® Fiber Optic Transceivers',
      color: '#1d3686',
      badgeClass: 'royal',
      tagClass: 'optolock'
    },
    lc: {
      name: 'LC 光纤收发器',
      nameEn: 'LC Fiber Optic Transceivers',
      color: '#003270',
      badgeClass: 'navy',
      tagClass: 'lc'
    },
    redlink: {
      name: 'RedLink® 收发器',
      nameEn: 'RedLink® Transceivers',
      color: '#c00000',
      badgeClass: 'red',
      tagClass: 'redlink'
    },
    pof: {
      name: 'SMI / 媒体转换器',
      nameEn: 'SMI / Media Converters',
      color: '#1d3686',
      badgeClass: 'royal',
      tagClass: 'pof'
    },
    kit: {
      name: '评估套件',
      nameEn: 'Evaluation Kits',
      color: '#777a7e',
      badgeClass: 'gray',
      tagClass: 'kit'
    }
  };

  /* =============================================================
     2. DOM READY — Initialize all modules
     ============================================================= */
  document.addEventListener('DOMContentLoaded', function () {
    initMobileNav();
    initDropdown();
    initLangSwitch();
    initTabs();
    initProductSearch();
    initProductDetail();
    initContactForm();
    initBackToTop();
    initFooterYear();
    initFloatingContact();
    initActiveNav();
    initNewsModal();
    initCrossRef();
  });

  /* =============================================================
     3. MOBILE NAVIGATION
     ============================================================= */
  function initMobileNav() {
    var navToggle = document.querySelector('.nav-toggle');
    var mobileMenu = document.querySelector('.mobile-menu');

    if (!navToggle || !mobileMenu) return;

    navToggle.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.contains('open');
      navToggle.classList.toggle('active', !isOpen);
      mobileMenu.classList.toggle('open', !isOpen);
      document.body.style.overflow = isOpen ? '' : 'hidden';
      navToggle.setAttribute('aria-expanded', String(!isOpen));
    });

    // Close button in mobile menu
    var closeBtn = mobileMenu.querySelector('.mobile-menu-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        navToggle.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
        navToggle.setAttribute('aria-expanded', 'false');
      });
    }

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!navToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        navToggle.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on resize to desktop
    window.addEventListener('resize', debounce(function () {
      if (window.innerWidth > 768) {
        navToggle.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
        navToggle.setAttribute('aria-expanded', 'false');
      }
    }, 100));
  }

  /* =============================================================
     4. NAVIGATION DROPDOWN (PC)
     ============================================================= */
  function initDropdown() {
    // On mobile, clicking a nav-link with a sub-nav toggles the sub
    var mobileNavLinks = document.querySelectorAll('.mobile-menu .nav-link[data-has-dropdown]');
    mobileNavLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        var subNav = document.getElementById(link.getAttribute('data-sub'));
        if (!subNav) return;
        e.preventDefault();
        subNav.classList.toggle('open');
        var chevron = link.querySelector('.chevron');
        if (chevron) {
          chevron.textContent = subNav.classList.contains('open') ? '▲' : '▼';
        }
      });
    });
  }

  /* =============================================================
     5. LANGUAGE SWITCH
     ============================================================= */
  function initLangSwitch() {
    var supported = ['index.html', 'about.html', 'contact.html', 'cross-ref.html', 'products.html', 'product-index.html', 'product-detail.html', 'solutions.html'];
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var targetLang = this.getAttribute('data-lang');
        if (!targetLang) {
          var href = this.getAttribute('href') || '';
          targetLang = /(^|\/)en\//.test(href) || /english/i.test(this.textContent) ? 'en' : 'zh';
        }
        var parts = window.location.pathname.split('/').filter(Boolean);
        if (parts[0] === 'en') parts.shift();
        var filename = parts.length === 1 && supported.indexOf(parts[0]) !== -1 ? parts[0] : 'index.html';
        var params = new URLSearchParams(window.location.search);
        if (filename === 'product-detail.html' || params.has('lang')) params.set('lang', targetLang);
        var search = params.toString();
        // Articles currently have Chinese content only; language buttons lead to the corresponding home.
        var hash = /\/articles(?:\/|$)/.test(window.location.pathname) ? '' : window.location.hash;
        window.location.href = (targetLang === 'en' ? '/en/' : '/') + filename + (search ? '?' + search : '') + hash;
      });
    });
  }

  /* =============================================================
     6. TAB SWITCHING (products.html)
     ============================================================= */
  function initTabs() {
    var tabBtns = document.querySelectorAll('.tab-btn');
    var tabPanels = document.querySelectorAll('.tab-panel');

    if (!tabBtns.length) return;

    function activateTab(id) {
      tabBtns.forEach(function (b) { b.classList.remove('active'); });
      tabPanels.forEach(function (p) { p.classList.remove('active'); });

      var targetBtn = document.querySelector('.tab-btn[data-tab="' + id + '"]');
      var targetPanel = document.getElementById('panel-' + id);

      if (targetBtn) targetBtn.classList.add('active');
      if (targetPanel) {
        targetPanel.classList.add('active');
        targetPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      // Update URL hash
      history.replaceState(null, '', location.pathname + location.search + '#' + id);
    }

    tabBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        activateTab(this.getAttribute('data-tab'));
      });
    });

    // Read hash on load
    var hash = location.hash.replace('#', '');
    if (hash) {
      activateTab(hash);
    } else {
      // Activate first tab
      var params = new URLSearchParams(location.search);
      var tabParam = params.get('tab');
      if (tabParam) {
        activateTab(tabParam);
      } else if (tabBtns.length > 0) {
        var firstId = tabBtns[0].getAttribute('data-tab');
        activateTab(firstId);
      }
    }
  }

  /* =============================================================
     7. PRODUCT SEARCH (product-index.html)
     ============================================================= */
  function initProductSearch() {
    // 用真实存在的元素作为 guard（之前用 product-search-page 是个不存在的 ID，导致函数立刻 return）
    if (!document.getElementById('search-input') || !document.getElementById('filter-sidebar')) return;

    /* ---- 移动端筛选面板开关 ---- */
    (function initFilterToggle() {
      var sidebar = document.getElementById('filter-sidebar');
      var overlay = document.getElementById('filter-overlay');
      var openBtn = document.getElementById('filter-toggle-mobile');
      var closeBtn = document.getElementById('filter-close-mobile');

      function openFilter() {
        if (sidebar) sidebar.classList.add('open');
        if (overlay) overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
      }
      function closeFilter() {
        if (sidebar) sidebar.classList.remove('open');
        if (overlay) overlay.classList.remove('show');
        document.body.style.overflow = '';
      }

      if (openBtn) openBtn.addEventListener('click', openFilter);
      if (closeBtn) closeBtn.addEventListener('click', closeFilter);
      if (overlay) overlay.addEventListener('click', closeFilter);

      // 窗口大于 768px 时自动关闭
      window.addEventListener('resize', function() {
        if (window.innerWidth > 768) closeFilter();
      });
    })();

    var params = new URLSearchParams(window.location.search);
    var searchInput = document.getElementById('search-input');
    var searchBtn = document.getElementById('search-btn');
    // 支持 result-count（首选）或 result-meta（兼容）
    var resultMeta = document.getElementById('result-count') || document.getElementById('result-meta');
    if (!resultMeta) {
      // 兜底：找 .result-meta 下的第一个 span
      var rm = document.querySelector('.result-meta');
      if (rm) resultMeta = rm.querySelector('span') || rm;
    }
    var productList = document.getElementById('product-list');
    var paginationEl = document.getElementById('pagination');
    var emptyState = document.getElementById('empty-state');

    var currentPage = parseInt(params.get('page')) || 1;
    var selectedSeries = (params.get('series') || '').split(',').filter(Boolean);
    var selectedRates = (params.get('rate') || '').split(',').filter(Boolean).map(function (r) { return parseInt(r); });
    var selectedIface = (params.get('iface') || '').split(',').filter(Boolean);
    var selectedTemp = params.get('temp') || '';
    var selectedStatus = params.get('status') || '';
    var query = params.get('q') || '';
    var perPage = 20;

    // Initialize from URL params
    if (searchInput) searchInput.value = query;

    // Initialize checkboxes from URL
    if (selectedSeries.length) {
      selectedSeries.forEach(function (s) {
        var cb = document.querySelector('input[name="series"][value="' + s + '"]');
        if (cb) cb.checked = true;
      });
    }
    if (selectedRates.length) {
      selectedRates.forEach(function (r) {
        var cb = document.querySelector('input[name="rate"][value="' + r + '"]');
        if (cb) cb.checked = true;
      });
    }
    if (selectedIface.length) {
      selectedIface.forEach(function (v) {
        var cb = document.querySelector('input[name="iface"][value="' + v + '"]');
        if (cb) cb.checked = true;
      });
    }
    if (selectedTemp) {
      var r = document.querySelector('input[name="temp"][value="' + selectedTemp + '"]');
      if (r) r.checked = true;
    }
    if (selectedStatus) {
      var r = document.querySelector('input[name="status"][value="' + selectedStatus + '"]');
      if (r) r.checked = true;
    }

    // Interface normalization map
    var IFACE_MAP = {
      'snaplock': ['Snap-lock'],
      'lc': ['LC Duplex'],
      'rms': ['RMS'],
      'dil': ['DIL'],
      'mii': ['MII / RMII'],
      'ethernet': ['10/100 Ethernet']
    };

    function filterProducts() {
      var filtered = PRODUCT_DATA.filter(function (p) {
        // Series filter
        if (selectedSeries.length && selectedSeries.indexOf(p.series) === -1) return false;
        // Rate filter
        if (selectedRates.length && selectedRates.indexOf(p.rate) === -1) return false;
        // Interface filter
        if (selectedIface.length) {
          var match = false;
          for (var i = 0; i < selectedIface.length; i++) {
            var keywords = IFACE_MAP[selectedIface[i]] || [selectedIface[i]];
            for (var k = 0; k < keywords.length; k++) {
              if (p.interface && p.interface.toLowerCase().indexOf(keywords[k].toLowerCase()) > -1) {
                match = true;
                break;
              }
            }
            if (match) break;
          }
          if (!match) return false;
        }
        // Temperature filter
        if (selectedTemp && p.temp !== selectedTemp) return false;
        // Status filter
        if (selectedStatus && p.status !== selectedStatus) return false;
        // Query filter
        if (query) {
          var q = query.toLowerCase();
          var match = (
            p.id.toLowerCase().indexOf(q) > -1 ||
            p.seriesName.toLowerCase().indexOf(q) > -1 ||
            p.seriesNameEn.toLowerCase().indexOf(q) > -1 ||
            p.rateText.toLowerCase().indexOf(q) > -1 ||
            p.interface.toLowerCase().indexOf(q) > -1 ||
            p.series.toLowerCase().indexOf(q) > -1
          );
          // 真实 Firecomms 订购型号（与对照表同一套编号）
          if (!match) {
            var mSkus = productSkus(p.id);
            for (var si = 0; si < mSkus.length; si++) {
              if (mSkus[si].toLowerCase().indexOf(q) > -1) { match = true; break; }
            }
          }
          // Avago / HP 型号 → 反查本产品家族
          if (!match) {
            var mAvago = PRODUCT_XREF[p.id] || [];
            for (var ai = 0; ai < mAvago.length; ai++) {
              if (mAvago[ai].toLowerCase().indexOf(q) > -1) { match = true; break; }
            }
          }
          if (!match) return false;
        }
        return true;
      });
      return filtered;
    }

    function renderList(page) {
      var all = filterProducts();

      // 语言判定（空态分支也要用，故提到开头）
      var isZh = true;
      var langParam = new URLSearchParams(window.location.search).get('lang');
      if (/\/en\//.test(window.location.pathname)) isZh = false;
      if (langParam === 'en') isZh = false;
      var currentLang = langParam || 'zh';

      // Sort
      var sortBy = (document.getElementById('sort-select') || {}).value || 'default';
      if (sortBy === 'rate-asc') {
        all.sort(function (a, b) { return (a.rate || 0) - (b.rate || 0); });
      } else if (sortBy === 'rate-desc') {
        all.sort(function (a, b) { return (b.rate || 0) - (a.rate || 0); });
      } else if (sortBy === 'name') {
        all.sort(function (a, b) { return a.id.localeCompare(b.id); });
      }

      var totalPages = Math.max(1, Math.ceil(all.length / perPage));
      if (page > totalPages) page = totalPages;
      var start = (page - 1) * perPage;
      var pageItems = all.slice(start, start + perPage);

      // 搜 Avago 型号时：即使无 Firecomms 产品，直接内嵌对照结果（合并体验）
      var avHits = query ? avagoMatches(query) : [];
      var avagoResultHtml = '';
      if (avHits.length) {
        var seenPair = {}, uniqHits = [];
        for (var hi = 0; hi < avHits.length; hi++) {
          var pairKey = avHits[hi].avago + '|' + avHits[hi].fc;
          if (!seenPair[pairKey]) { seenPair[pairKey] = 1; uniqHits.push(avHits[hi]); }
        }
        avagoResultHtml = '<div class="avago-inline-result">' +
          '<div class="avago-inline-header">' +
            '<span class="avago-inline-icon">&#128260;</span>' +
            '<span class="avago-inline-title">' + (isZh ? 'Avago / HP 替代型号对照' : 'Avago / HP Cross Reference') + '</span>' +
            '<span class="avago-inline-query">&nbsp;<code>' + (query || '').trim() + '</code></span>' +
          '</div>' +
          '<div class="avago-inline-pairs">' +
            uniqHits.map(function (h) {
              var fcLink = h.family
                ? '<a href="product-detail.html?model=' + h.family + '&lang=' + currentLang + '"><code class="fc-code">' + h.fc + '</code></a>'
                : '<code class="fc-code">' + h.fc + '</code>';
              return '<div class="avago-inline-pair">' +
                '<code class="avago-code">' + h.avago + '</code>' +
                '<span class="avago-arrow">&#8594;</span>' +
                fcLink +
                (h.family ? '<a href="product-detail.html?model=' + h.family + '&lang=' + currentLang + '" class="btn btn-outline btn-xs">&#128194; 参数</a>' : '') +
              '</div>';
            }).join('')
          + '</div>' +
          '<div class="avago-inline-foot">' +
            '<span>' + (isZh ? '共 ' + uniqHits.length + ' 组对照（' + (uniqHits.filter(function (h) { return !!h.family; }).length) + ' 个可点产品）' : uniqHits.length + ' match' + (uniqHits.length > 1 ? 'es' : '') + ' (' + uniqHits.filter(function (h) { return !!h.family; }).length + ' clickable)') + '</span>' +
            '<a href="cross-ref.html?q=' + encodeURIComponent((query || '').trim()) + '" class="btn btn-outline btn-sm">' + (isZh ? '查看完整对照表 &#8594;' : 'Full cross-reference &#8594;') + '</a>' +
          '</div>' +
        '</div>';
      }

      if (all.length === 0) {
        var isEmptyEn = /\/en\//.test(window.location.pathname) || new URLSearchParams(window.location.search).get('lang') === 'en';
        var emptyContent = '<div style="text-align:center;padding:40px 20px;">' +
          '<div style="font-size:2.8rem;margin-bottom:12px;">&#128269;</div>' +
          '<h3 style="color:var(--navy);margin-bottom:10px;">' + (isEmptyEn ? 'No products found' : '未找到匹配产品') + '</h3>' +
          '<p style="color:var(--text-light);font-size:.9rem;">' +
          (isEmptyEn ? 'Try different keywords or contact SIMACITY technical support.' : '请尝试其他关键词，或联系上海芯聚技术支持。') + '</p></div>';
        productList.innerHTML = '<div class="product-list-inner">' + avagoResultHtml + emptyContent + '</div>';
        if (paginationEl) paginationEl.innerHTML = '';
        if (resultMeta) resultMeta.innerHTML = (isEmptyEn ? 'Found <strong>0</strong> products' : '找到 <strong>0</strong> 个产品');
        return;
      }

      if (emptyState) emptyState.style.display = 'none';

      var html = pageItems.map(function (p) {
        var meta = SERIES_META[p.series] || SERIES_META.redlink;
        var statusClass = p.status === 'available' ? 'available' : 'demand';
        var statusText = isZh ? p.statusText : p.statusTextEn;
        var seriesName = isZh ? p.seriesName : p.seriesNameEn;
        var specHtml = '';
        if (p.rate) {
          specHtml += '<span class="model-spec"><span class="model-spec-label">速率</span><span class="model-spec-value">' + p.rateText + '</span></span>';
        }
        if (p.interface) {
          specHtml += '<span class="model-spec"><span class="model-spec-label">接口</span><span class="model-spec-value">' + p.interface + '</span></span>';
        }
        if (p.temp) {
          specHtml += '<span class="model-spec"><span class="model-spec-label">温度</span><span class="model-spec-value">' + p.temp + '</span></span>';
        }

        return '<a href="product-detail.html?model=' + p.id + '&lang=' + currentLang + '" class="product-list-item" data-id="' + p.id + '">' +
          '<span class="series-tag ' + meta.tagClass + '">' + seriesName + '</span>' +
          '<span class="model-info">' +
          '<span class="model-name">' + p.id + '</span>' +
          '<span class="model-series">' + seriesName + '</span>' +
          (function () {
            var sk = productSkus(p.id);
            if (!sk.length) return '';
            return '<span class="model-skus">' + (isZh ? '可订购：' : 'SKUs: ') + sk.join(' · ') + '</span>';
          })() +
          '</span>' +
          '<span class="model-specs">' + specHtml + '</span>' +
          '<span class="model-status ' + statusClass + '">' + statusText + '</span>' +
          '</a>';
      }).join('');

      productList.innerHTML = avagoResultHtml + '<div class="product-list-inner">' + html + '</div>';

      if (resultMeta) {
        resultMeta.innerHTML = '共找到 <strong>' + all.length + '</strong> 个产品' +
          (all.length > perPage ? '，显示 ' + ((page - 1) * perPage + 1) + '-' + Math.min(page * perPage, all.length) : '');
      }

      // Pagination
      if (paginationEl) {
        if (totalPages <= 1) {
          paginationEl.innerHTML = '';
        } else {
          var pg = '<button ' + (page === 1 ? 'disabled' : '') + ' data-page="' + (page - 1) + '">‹</button>';
          var startP = Math.max(1, page - 2);
          var endP = Math.min(totalPages, page + 2);
          if (startP > 1) { pg += '<button data-page="1">1</button>'; if (startP > 2) pg += '<span style="padding:0 4px;color:var(--mid-gray)">…</span>'; }
          for (var i = startP; i <= endP; i++) {
            pg += '<button class="' + (i === page ? 'active' : '') + '" data-page="' + i + '">' + i + '</button>';
          }
          if (endP < totalPages) { if (endP < totalPages - 1) pg += '<span style="padding:0 4px;color:var(--mid-gray)">…</span>'; pg += '<button data-page="' + totalPages + '">' + totalPages + '</button>'; }
          pg += '<button ' + (page === totalPages ? 'disabled' : '') + ' data-page="' + (page + 1) + '">›</button>';
          paginationEl.innerHTML = pg;
        }
      }
    }

    // Search handler with debounce
    var debounceTimer;
    function handleSearch() {
      query = searchInput ? searchInput.value.trim() : '';
      currentPage = 1;
      updateURL();
      renderList(currentPage);
    }

    searchInput && searchInput.addEventListener('input', function () {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(handleSearch, 300);
    });

    searchBtn && searchBtn.addEventListener('click', function () {
      clearTimeout(debounceTimer);
      handleSearch();
    });

    // Sort select
    var sortSelect = document.getElementById('sort-select');
    sortSelect && sortSelect.addEventListener('change', function () {
      currentPage = 1;
      renderList(currentPage);
    });

    // Checkbox filters
    var checkboxes = document.querySelectorAll('#filter-sidebar input[type="checkbox"]');
    checkboxes.forEach(function (cb) {
      cb.addEventListener('change', function () {
        selectedSeries = [];
        document.querySelectorAll('input[name="series"]:checked').forEach(function (c) {
          selectedSeries.push(c.value);
        });
        selectedRates = [];
        document.querySelectorAll('input[name="rate"]:checked').forEach(function (c) {
          selectedRates.push(parseInt(c.value));
        });
        selectedIface = [];
        document.querySelectorAll('input[name="iface"]:checked').forEach(function (c) {
          selectedIface.push(c.value);
        });
        currentPage = 1;
        updateURL();
        renderList(currentPage);
      });
    });

    // Radio filters (temp + status)
    var radios = document.querySelectorAll('#filter-sidebar input[type="radio"]');
    radios.forEach(function (r) {
      r.addEventListener('change', function () {
        selectedTemp = document.querySelector('input[name="temp"]:checked') ? document.querySelector('input[name="temp"]:checked').value : '';
        selectedStatus = document.querySelector('input[name="status"]:checked') ? document.querySelector('input[name="status"]:checked').value : '';
        currentPage = 1;
        updateURL();
        renderList(currentPage);
      });
    });

    // Filter reset button
    var resetBtn = document.getElementById('filter-reset');
    resetBtn && resetBtn.addEventListener('click', function () {
      selectedSeries = [];
      selectedRates = [];
      selectedIface = [];
      selectedTemp = '';
      selectedStatus = '';
      query = '';
      currentPage = 1;
      if (searchInput) searchInput.value = '';
      document.querySelectorAll('#filter-sidebar input[type="checkbox"]').forEach(function (c) { c.checked = false; });
      document.querySelectorAll('#filter-sidebar input[type="radio"]').forEach(function (r) {
        if (r.value === '') r.checked = true;
        else r.checked = false;
      });
      updateURL();
      renderList(currentPage);
    });

    // Pagination click
    paginationEl && paginationEl.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-page]');
      if (!btn || btn.disabled) return;
      currentPage = parseInt(btn.getAttribute('data-page'));
      updateURL();
      renderList(currentPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    function updateURL() {
      var p = new URLSearchParams();
      if (selectedSeries.length) p.set('series', selectedSeries.join(','));
      if (selectedRates.length) p.set('rate', selectedRates.join(','));
      if (selectedIface.length) p.set('iface', selectedIface.join(','));
      if (selectedTemp) p.set('temp', selectedTemp);
      if (selectedStatus) p.set('status', selectedStatus);
      if (query) p.set('q', query);
      if (currentPage > 1) p.set('page', currentPage);
      var newSearch = p.toString();
      var newUrl = location.pathname + (newSearch ? '?' + newSearch : '');
      history.replaceState(null, '', newUrl);
    }

    // Initial render
    renderList(currentPage);
  }

  /* =============================================================
     8. PRODUCT DETAIL (product-detail.html)
     ============================================================= */
  function initProductDetail() {
    var detailPage = document.getElementById('product-detail-page');
    if (!detailPage) return;

    var params = new URLSearchParams(window.location.search);
    var modelId = params.get('model');
    var lang = params.get('lang') || 'zh';

    if (!modelId) {
      showNotFound(lang);
      return;
    }

    var product = PRODUCT_DATA.filter(function (p) { return p.id === modelId; })[0];

    if (!product) {
      showNotFound(lang);
      return;
    }

    var isZh = lang !== 'en';
    var meta = SERIES_META[product.series] || SERIES_META.redlink;
    var statusClass = product.status === 'available' ? 'available' : 'demand';

    // PDF paths (adapt to /en/ subdirectory)
    var isEnDir = window.location.pathname.indexOf('/en/') !== -1;
    var pathPrefix = isEnDir ? '../' : '';
    var pdfPath = product.datasheet;
    if (pdfPath && pdfPath.indexOf('assets/pdf/') === 0) {
      pdfPath = pathPrefix + pdfPath;
    }
    var hasPdf = pdfPath && pdfPath.indexOf('no-datasheet') === -1;

    // Build spec rows
    var specItems = [];
    if (product.rateText)   specItems.push({ label: '数据速率', labelEn: 'Data Rate', value: product.rateText });
    if (product.wavelength) specItems.push({ label: '波长', labelEn: 'Wavelength', value: product.wavelength });
    if (product.distance)   specItems.push({ label: '传输距离', labelEn: 'Distance', value: product.distance });
    if (product.interface)  specItems.push({ label: '接口类型', labelEn: 'Interface', value: product.interface });
    if (product.temp)      specItems.push({ label: '工作温度', labelEn: 'Temp Range', value: product.temp });
    if (product.fiber)     specItems.push({ label: '光纤类型', labelEn: 'Fiber Type', value: product.fiber });

    var specsHtml = specItems.map(function(s) {
      return '<div class="detail-spec-item">'
        + '<span class="detail-spec-label">' + (isZh ? s.label : s.labelEn) + '</span>'
        + '<span class="detail-spec-value">' + s.value + '</span>'
        + '</div>';
    }).join('');

    // Features & applications
    var features = (isZh ? product.features : product.featuresEn) || [];
    var apps = (isZh ? product.applications : product.applicationsEn) || [];
    var featuresHtml = features.map(function(f) { return '<li>' + f + '</li>'; }).join('');
    var appsHtml = apps.map(function(a) { return '<li>' + a + '</li>'; }).join('');

    // Breadcrumb (EN pages need ../ prefix)
    var breadcrumbHtml = ''
      + '<a href="' + pathPrefix + 'index.html">' + (isZh ? '首页' : 'Home') + '</a>'
      + '<span class="breadcrumb-sep">›</span>'
      + '<a href="' + pathPrefix + 'product-index.html' + (isZh ? '?lang=zh' : '?lang=en') + '">' + (isZh ? '产品中心' : 'Products') + '</a>'
      + '<span class="breadcrumb-sep">›</span>'
      + '<a href="' + pathPrefix + 'product-index.html?series=' + product.series + (isZh ? '&lang=zh' : '&lang=en') + '">' + (isZh ? product.seriesName : product.seriesNameEn) + '</a>'
      + '<span class="breadcrumb-sep">›</span>'
      + '<span>' + product.id + '</span>';

    // PDF section
    var pdfSectionHtml = '';
    if (hasPdf) {
      pdfSectionHtml = ''
        + '<div class="spec-preview">'
        +   '<iframe id="pdf-preview-frame" src="' + pdfPath + '" width="100%" height="560" frameborder="0" title="PDF规格书预览"></iframe>'
        + '</div>'
        + (product.datasheetNote ? '<div class="pdf-share-note">⚠️ ' + (isZh ? product.datasheetNote.zh : product.datasheetNote.en) + '</div>' : '')
        + '<div class="pdf-download-bar">'
        +   '<a id="pdf-download-link" href="' + pdfPath + '" download class="btn btn-red" style="flex:1;justify-content:center;">'
        +     '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>'
        +     (isZh ? '下载规格书 PDF' : 'Download Datasheet PDF')
        +   '</a>'
        + '</div>';
    } else {
      pdfSectionHtml = ''
        + '<div class="spec-preview-placeholder">'
        +   '<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>'
        +   '<p>' + (isZh ? '暂无规格书，请联系获取' : 'Datasheet not available. Contact us.') + '</p>'
        +   '<a href="contact.html' + (isZh ? '' : '?lang=en') + '#contact-form" class="btn btn-outline" style="font-size:.82rem;padding:10px 20px;">'
        +     (isZh ? '联系获取规格书 →' : 'Request Datasheet →')
        +   '</a>'
        + '</div>';
    }

    // Full layout HTML
    var layoutHtml = ''
      + '<div class="detail-main">'
      +   '<div class="breadcrumb" style="margin-bottom:24px;">' + breadcrumbHtml + '</div>'
      +   '<h1 style="font-family:var(--font-heading);font-size:2rem;font-weight:700;color:var(--navy);margin-bottom:12px;line-height:1.2;">' + product.id + '</h1>'
      +   (function () {
            var sk = productSkus(product.id);
            if (!sk.length) return '';
            return '<div class="detail-skus"><span class="detail-skus-label">' +
              (isZh ? '可订购型号' : 'Orderable SKUs') + '</span>' +
              sk.map(function (s) { return '<code class="fc-code">' + s + '</code>'; }).join('') +
              '</div>';
          })()
      +   '<div class="detail-meta">'
      +     '<span class="prod-badge ' + meta.badgeClass + '">' + (isZh ? product.seriesName : product.seriesNameEn) + '</span>'
      +     '<span class="model-status ' + statusClass + '">' + (isZh ? product.statusText : product.statusTextEn) + '</span>'
      +   '</div>'
      +   '<div class="detail-specs-grid">' + specsHtml + '</div>'
      +   '<div class="detail-desc" id="detail-desc">' + (isZh ? product.desc : product.descEn) + '</div>'
      +   '<div class="detail-features">'
      +     '<h3>' + (isZh ? '产品特点' : 'Key Features') + '</h3>'
      +     '<ul id="detail-features">' + featuresHtml + '</ul>'
      +   '</div>'
      +   '<div class="detail-applications">'
      +     '<h3>' + (isZh ? '典型应用' : 'Typical Applications') + '</h3>'
      +     '<ul id="detail-applications">' + appsHtml + '</ul>'
      +   '</div>'
      + '</div>'
      + '<aside class="detail-sidebar">'
      +   pdfSectionHtml
      +   '<div class="detail-actions">'
      +     '<a href="contact.html' + (isZh ? '' : '?lang=en') + '#contact-form" class="btn btn-primary" id="contact-form-link">'
      +       '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>'
      +       (isZh ? '申请样片 / 咨询报价' : 'Request Sample / Get Quote')
      +     '</a>'
      +     '<a href="tel:+862162271972" class="btn btn-outline">'
      +       '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.4a16 16 0 0 0 6 6l.85-.85a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.7 16.92z"/></svg>'
      +       (isZh ? '电话咨询：021-62271972' : 'Call: +86 21 6227 1972')
      +     '</a>'
      +   '</div>'
      +   '<div class="contact-mini">'
      +     '<p style="font-size:.78rem;color:var(--mid-gray);margin-bottom:8px;">' + (isZh ? '📍 技术支持与商务咨询' : '📍 Technical & Sales Support') + '</p>'
      +     '<p style="font-size:.82rem;color:var(--navy);font-weight:600;">' + (isZh ? '上海芯聚电子科技有限公司' : 'Shanghai SIMACITY Electronics') + '</p>'
      +     '<p style="font-size:.78rem;color:var(--text-body);margin-top:4px;">' + (isZh ? '周一至周五 9:00-18:00' : 'Mon–Fri 9:00–18:00') + '</p>'
      +   '</div>'
      + '</aside>';

    // Inject into container
    var container = document.getElementById('detail-container');
    if (container) container.innerHTML = layoutHtml;

    // Also update page title
    document.title = product.id + ' | Firecomms中国';
  }
  function showNotFound(lang) {
    var pathPrefix = (lang === 'en') ? '../' : '';
    var detailMain = document.querySelector('.detail-main');
    if (detailMain) {
      detailMain.innerHTML =
        '<div class="empty-state" style="padding:80px 0;">' +
        '<div class="empty-state-icon"><svg viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg></div>' +
        '<h3>' + (lang === 'en' ? 'Product Not Found' : '未找到该产品') + '</h3>' +
        '<p>' + (lang === 'en' ? 'The requested model does not exist. Please check the model number.' : '请求的产品型号不存在，请检查型号是否正确。') + '</p>' +
        '<br><a href="' + pathPrefix + 'product-index.html" class="btn btn-primary">' + (lang === 'en' ? 'Back to Products' : '返回产品中心') + '</a>' +
        '</div>';
    }
  }

  /* =============================================================
     9. CONTACT FORM (contact.html)
     ============================================================= */
  function initContactForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;

    var requiredFields = [
      { id: 'f-name', msg: '请填写您的姓名 / Please enter your name' },
      { id: 'f-company', msg: '请填写公司名称 / Please enter your company' },
      { id: 'f-email', msg: '请填写邮箱 / Please enter your email' },
      { id: 'f-message', msg: '请填写留言内容 / Please enter your message' }
    ];

    function showError(inputId, msg) {
      var input = document.getElementById(inputId);
      var err = document.getElementById(inputId + '-error');
      if (input) input.classList.add('error');
      if (err) { err.textContent = msg; err.classList.remove('show'); void err.offsetWidth; err.classList.add('show'); }
    }

    function clearError(inputId) {
      var input = document.getElementById(inputId);
      var err = document.getElementById(inputId + '-error');
      if (input) input.classList.remove('error');
      if (err) { err.textContent = ''; err.classList.remove('show'); }
    }

    function validateEmail(v) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    }

    function validatePhone(v) {
      if (!v) return true; // optional
      return /^[\d\s\-\+\(\)\.]{7,20}$/.test(v);
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var hasError = false;
      requiredFields.forEach(function (f) { clearError(f.id); });

      requiredFields.forEach(function (f) {
        var val = (document.getElementById(f.id) || {}).value.trim();
        if (!val) { showError(f.id, f.msg); hasError = true; }
      });

      var emailVal = (document.getElementById('f-email') || {}).value.trim();
      if (emailVal && !validateEmail(emailVal)) {
        showError('f-email', '邮箱格式不正确 / Invalid email format');
        hasError = true;
      }

      var phoneVal = (document.getElementById('f-phone') || {}).value.trim();
      if (phoneVal && !validatePhone(phoneVal)) {
        showError('f-phone', '电话格式不正确 / Invalid phone format');
        hasError = true;
      }

      if (hasError) return;

      // Build mailto
      var name    = (document.getElementById('f-name') || {}).value.trim();
      var company = (document.getElementById('f-company') || {}).value.trim();
      var phone   = (document.getElementById('f-phone') || {}).value.trim();
      var email   = (document.getElementById('f-email') || {}).value.trim();
      var product = (document.getElementById('f-product') || {}).value.trim();
      var qtype   = (document.getElementById('f-qtype') || {}).value;
      var message = (document.getElementById('f-message') || {}).value.trim();

      var subject = encodeURIComponent(
        '[Firecomms China] ' + name + ' ' + (qtype ? '[' + qtype + ']' : '')
      );

      var body = [
        '姓名 / Name: ' + name,
        '公司 / Company: ' + company,
        '电话 / Phone: ' + (phone || 'N/A'),
        '邮箱 / Email: ' + email,
        '需求类型 / Query Type: ' + (qtype || 'N/A'),
        product ? '产品型号 / Product: ' + product : '',
        '',
        '留言 / Message:',
        message
      ].join('\n');

      var mailtoLink = 'mailto:kevin.cai@simacity.com.cn?subject=' + subject + '&body=' + encodeURIComponent(body);
      window.location.href = mailtoLink;

      // Show success
      var success = document.getElementById('form-success');
      if (success) {
        success.classList.add('show');
        form.reset();
        setTimeout(function () { success.classList.remove('show'); }, 6000);
      }
    });

    // Live clear errors
    requiredFields.forEach(function (f) {
      var el = document.getElementById(f.id);
      if (el) el.addEventListener('input', function () { clearError(f.id); });
    });

    var phoneEl = document.getElementById('f-phone');
    if (phoneEl) phoneEl.addEventListener('input', function () { clearError('f-phone'); });
  }

  /* =============================================================
     10. BACK TO TOP
     ============================================================= */
  function initBackToTop() {
    var btt = document.querySelector('.back-to-top');
    if (!btt) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        btt.classList.add('visible');
      } else {
        btt.classList.remove('visible');
      }
    }, { passive: true });

    btt.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* =============================================================
     11. FOOTER YEAR
     ============================================================= */
  function initFooterYear() {
    var yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  /* =============================================================
     12. FLOATING CONTACT
     ============================================================= */
  function initFloatingContact() {
    var fc = document.querySelector('.floating-contact');
    if (!fc) return;

    // Chat button
    var chatBtn = fc.querySelector('.fc-chat');
    if (chatBtn) {
      chatBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = 'contact.html#contact-form';
      });
    }

    // Phone button
    var phoneBtn = fc.querySelector('.fc-phone');
    if (phoneBtn) {
      phoneBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = 'tel:+862162271972';
      });
    }

    // Email button
    var emailBtn = fc.querySelector('.fc-email');
    if (emailBtn) {
      emailBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = 'mailto:kevin.cai@simacity.com.cn';
      });
    }

    // WeChat button — toggle panel
    var wechatBtn = fc.querySelector('.fc-btn-wechat')
      || fc.querySelector('.fc-wechat')
      || document.getElementById('fc-wechat-btn')
      || fc.querySelector('a[title="企业微信"]')
      || fc.querySelector('a[title="WeChat"]');
    var wechatPanel = fc.querySelector('.fc-wechat-panel') || document.getElementById('fc-wechat-panel');
    if (wechatBtn && wechatPanel) {
      wechatBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        wechatPanel.classList.toggle('show');
      });

      // Close panel when clicking elsewhere
      document.addEventListener('click', function (e) {
        if (!fc.contains(e.target)) {
          wechatPanel.classList.remove('show');
        }
      });
    }
  }

  /* =============================================================
     13. ACTIVE NAV HIGHLIGHT
     ============================================================= */
  function initActiveNav() {
    var curPage = window.location.pathname.split('/').pop() || 'index.html';
    var navLinks = document.querySelectorAll('.nav-link, .mobile-menu a');
    navLinks.forEach(function (link) {
      var href = link.getAttribute('href') || '';
      var isMatch = (
        (curPage === href) ||
        (curPage === '' && href === 'index.html') ||
        (curPage === 'index.html' && href === 'index.html')
      );
      if (isMatch) {
        var parent = link.closest('.nav-item');
        if (parent) parent.classList.add('active');
        link.classList.add('active');
      }
    });
  }

  /* =============================================================
     13b. NEWS MODAL (About page)
     ============================================================= */
  function initNewsModal() {
    var triggers = document.querySelectorAll('[data-news]');
    var modal = document.getElementById('news-modal');
    if (!triggers.length || !modal) return;
    var body = modal.querySelector('.news-modal-body');
    var closeBtn = modal.querySelector('.news-modal-close');
    var overlay = modal.querySelector('.news-modal-overlay');

    function openModal(id) {
      var src = document.getElementById('news-detail-' + id);
      if (!src || !body) return;
      body.innerHTML = src.innerHTML;
      modal.classList.add('show');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
    function closeModal() {
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (body) body.innerHTML = '';
    }

    triggers.forEach(function (t) {
      t.addEventListener('click', function (e) {
        e.preventDefault();
        openModal(t.getAttribute('data-news'));
      });
    });
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('show')) closeModal();
    });
  }

  /* =============================================================
     14. UTILITY — Debounce
     ============================================================= */
  function debounce(fn, delay) {
    var timer;
    return function () {
      var args = arguments;
      var ctx = this;
      clearTimeout(timer);
      timer = setTimeout(function () { fn.apply(ctx, args); }, delay);
    };
  }

  /* =============================================================
     15. UTILITY — Escape HTML
     ============================================================= */
  function escHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* =============================================================
     16. CROSS REFERENCE PAGE — Avago Search
     ============================================================= */
  function initCrossRef() {
    var searchInput = document.getElementById('cross-ref-search');
    var clearBtn    = document.getElementById('cross-ref-clear');
    var chips       = document.querySelectorAll('#cross-ref-chips .chip');
    var rows        = document.querySelectorAll('#cross-ref-table tbody tr');
    var countEl     = document.getElementById('cross-ref-count');
    var emptyEl    = document.getElementById('cross-ref-empty');

    if (!searchInput || !rows.length) return;

    function doFilter() {
      var query    = searchInput.value.trim().toLowerCase();
      var activeSeries = document.querySelector('#cross-ref-chips .chip.active');
      var series   = activeSeries ? activeSeries.dataset.series : 'all';
      var visible  = 0;

      clearBtn.style.display = query ? 'block' : 'none';

      rows.forEach(function (row) {
        var rowSeries = row.dataset.series || '';
        var rowKw     = (row.dataset.kw || '').toLowerCase();
        var rowText   = row.textContent.toLowerCase();
        var matchKw   = !query || rowKw.includes(query) || rowText.includes(query);
        var matchSer  = series === 'all' || rowSeries === series;

        if (matchKw && matchSer) {
          row.style.display = '';
          visible++;
        } else {
          row.style.display = 'none';
        }
      });

      if (countEl) countEl.textContent = visible + ' ' + (countEl.dataset.unit || 'results');
      if (emptyEl) emptyEl.style.display = visible === 0 ? 'block' : 'none';
    }

    searchInput.addEventListener('input', doFilter);

    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        searchInput.value = '';
        doFilter();
        searchInput.focus();
      });
    }

    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) { c.classList.remove('active'); });
        chip.classList.add('active');
        doFilter();
      });
    });

    // Auto-focus if URL has query param
    var params = new URLSearchParams(window.location.search);
    var q = params.get('q');
    if (q) {
      searchInput.value = q;
      doFilter();
    }
  }

})();
