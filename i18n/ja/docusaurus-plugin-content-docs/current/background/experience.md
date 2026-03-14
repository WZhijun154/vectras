---
sidebar_position: 2
---

import Timeline from '@site/src/components/Timeline';

# 職歴

export const items = [
  {
    period: '2016 – 2020',
    title: '中南大学',
    subtitle: 'オートメーション工学学士',
    description: '制御理論、組込みシステム、信号処理を学び、数学とエンジニアリングの基盤を構築。',
    type: 'education',
  },
  {
    period: '2021 – 2023',
    title: '大阪大学',
    subtitle: 'オートメーション工学修士',
    description: 'ロボティクス、機械学習、高度制御システムに注力し、知的システムの研究を実施。',
    type: 'education',
  },
  {
    period: '2023年5月 – 2025年10月',
    title: 'Horizon Robotics',
    subtitle: '計画・制御エンジニア',
    description: '自動運転システムの計画・制御アルゴリズムの開発。モーションプランニング、軌道最適化、車両力学モデリングを担当。',
    type: 'work',
  },
  {
    period: '2025年10月 – 現在',
    title: 'SenseTime',
    subtitle: 'ディープラーニングエンジニア',
    description: 'Vision-Language Model（VLM）の大規模学習を担当。分散学習パイプラインとモデル最適化に従事。',
    type: 'work',
  },
];

<Timeline items={items} />

## Horizon Robotics — 計画・制御エンジニア

**2023年5月 – 2025年10月** | 中国・北京

自動運転の技術スタックの開発に従事し、計画・制御モジュールに注力：

- 高速道路・市街地走行シナリオ向けのモーションプランニングアルゴリズムを設計・実装
- 安全性・快適性・効率性のバランスを取る軌道最適化パイプラインを開発
- 車両力学モデルを構築し、リアルタイム制御ループに統合
- 認識・予測チームと協力し、エンドツーエンドのシステム信頼性を確保
- 大規模な計画アルゴリズムテスト用シミュレーションフレームワークに貢献

## SenseTime — ディープラーニングエンジニア

**2025年10月 – 現在** | 中国・上海

Vision-Language Model（VLM）の学習インフラに従事：

- PyTorch、DeepSpeed、Megatron-LMを使用した分散学習パイプラインの構築・保守
- 大規模GPUクラスター全体の学習スループットとGPU利用率の最適化
- マルチモーダル（画像＋テキスト）データセットのデータ処理パイプラインを実装
- モデルアーキテクチャと学習戦略に関する実験を実施
- 実験追跡とモデル評価の内部ツール開発に貢献
