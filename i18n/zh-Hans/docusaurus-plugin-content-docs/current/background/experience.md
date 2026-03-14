---
sidebar_position: 2
---

import Timeline from '@site/src/components/Timeline';

# 工作经验

export const items = [
  {
    period: '2017 – 2021',
    title: '中南大学',
    subtitle: '自动化工学学士',
    description: '学习控制理论、嵌入式系统和信号处理，建立了扎实的数学和工程基础。',
    type: 'education',
  },
  {
    period: '2021 – 2023',
    title: '大阪大学',
    subtitle: '自动化工学硕士',
    description: '研究方向为机器人学、机器学习和高级控制系统，开展了智能系统相关研究。',
    type: 'education',
  },
  {
    period: '2023年5月 – 2025年10月',
    title: '地平线机器人',
    subtitle: '规划与控制工程师',
    description: '开发自动驾驶系统的规划和控制算法，负责运动规划、轨迹优化和车辆动力学建模。',
    type: 'work',
  },
  {
    period: '2025年10月 – 至今',
    title: '商汤科技',
    subtitle: '深度学习工程师',
    description: '负责视觉语言模型（VLM）的大规模训练，包括分布式训练管线和模型优化。',
    type: 'work',
  },
];

<Timeline items={items} />

## 地平线机器人 — 规划与控制工程师

**2023年5月 – 2025年10月** | 中国北京

参与自动驾驶技术栈开发，专注于规划与控制模块：

- 设计并实现了高速公路和城市道路场景的运动规划算法
- 开发了兼顾安全性、舒适性和效率的轨迹优化管线
- 建立车辆动力学模型并集成到实时控制回路中
- 与感知和预测团队协作，确保端到端系统可靠性
- 贡献于仿真框架，用于大规模测试规划算法

## 商汤科技 — 深度学习工程师

**2025年10月 – 至今** | 中国上海

从事视觉语言模型（VLM）训练基础设施建设：

- 使用 PyTorch、DeepSpeed 和 Megatron-LM 构建和维护分布式训练管线
- 优化大规模 GPU 集群的训练吞吐量和 GPU 利用率
- 实现多模态（图像+文本）数据集的数据处理管线
- 开展模型架构和训练策略的实验研究
- 贡献于实验跟踪和模型评估的内部工具开发
