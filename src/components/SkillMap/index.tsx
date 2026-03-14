import React, {useCallback} from 'react';
import {
  ReactFlow,
  Node,
  Edge,
  useNodesState,
  useEdgesState,
  Background,
  Controls,
  BackgroundVariant,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import styles from './styles.module.css';

const nodeDefaults = {
  sourcePosition: 'right' as const,
  targetPosition: 'left' as const,
};

const categoryColors: Record<string, {bg: string; border: string; text: string}> = {
  programming: {bg: '#fef3c7', border: '#f59e0b', text: '#92400e'},
  aiml: {bg: '#dbeafe', border: '#3b82f6', text: '#1e40af'},
  web: {bg: '#dcfce7', border: '#22c55e', text: '#166534'},
  devops: {bg: '#f3e8ff', border: '#a855f7', text: '#6b21a8'},
  domain: {bg: '#ffe4e6', border: '#f43f5e', text: '#9f1239'},
  aitools: {bg: '#e0f2fe', border: '#0ea5e9', text: '#0c4a6e'},
};

const darkCategoryColors: Record<string, {bg: string; border: string; text: string}> = {
  programming: {bg: '#78350f', border: '#f59e0b', text: '#fef3c7'},
  aiml: {bg: '#1e3a5f', border: '#60a5fa', text: '#dbeafe'},
  web: {bg: '#14532d', border: '#4ade80', text: '#dcfce7'},
  devops: {bg: '#3b0764', border: '#c084fc', text: '#f3e8ff'},
  domain: {bg: '#881337', border: '#fb7185', text: '#ffe4e6'},
  aitools: {bg: '#0c4a6e', border: '#38bdf8', text: '#e0f2fe'},
};

function createNodes(): Node[] {
  const hub: Node = {
    id: 'hub',
    position: {x: 400, y: 300},
    data: {label: 'Vectras'},
    type: 'default',
    style: {
      background: 'linear-gradient(135deg, #8b7355, #c9a96e)',
      color: '#fff',
      border: '2px solid #c9a96e',
      borderRadius: '50%',
      width: 90,
      height: 90,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '16px',
      fontWeight: 700,
      boxShadow: '0 4px 20px rgba(139,115,85,0.3)',
    },
    ...nodeDefaults,
  };

  const categories: {id: string; label: string; color: string; x: number; y: number}[] = [
    {id: 'programming', label: 'Programming', color: 'programming', x: 50, y: 50},
    {id: 'aiml', label: 'AI / ML', color: 'aiml', x: 750, y: 50},
    {id: 'web', label: 'Web / Full Stack', color: 'web', x: 50, y: 350},
    {id: 'devops', label: 'DevOps / Infra', color: 'devops', x: 750, y: 350},
    {id: 'domain', label: 'Domain', color: 'domain', x: 50, y: 550},
    {id: 'aitools', label: 'AI Tools', color: 'aitools', x: 750, y: 550},
  ];

  const skills: Record<string, {label: string; x: number; y: number}[]> = {
    programming: [
      {label: 'Python', x: -250, y: -30},
      {label: 'C++', x: -250, y: 30},
      {label: 'TypeScript', x: -250, y: 90},
      {label: 'Rust', x: -250, y: 150},
    ],
    aiml: [
      {label: 'PyTorch', x: 1050, y: -30},
      {label: 'DeepSpeed', x: 1050, y: 30},
      {label: 'Megatron-LM', x: 1050, y: 90},
      {label: 'HuggingFace', x: 1050, y: 150},
    ],
    web: [
      {label: 'React', x: -250, y: 270},
      {label: 'Node.js', x: -250, y: 330},
      {label: 'Next.js', x: -250, y: 390},
      {label: 'Docusaurus', x: -250, y: 450},
    ],
    devops: [
      {label: 'Docker', x: 1050, y: 270},
      {label: 'Kubernetes', x: 1050, y: 330},
      {label: 'Linux', x: 1050, y: 390},
      {label: 'Git', x: 1050, y: 450},
    ],
    domain: [
      {label: 'Autonomous Driving', x: -250, y: 500},
      {label: 'VLM Training', x: -250, y: 560},
      {label: 'Planning & Control', x: -250, y: 620},
    ],
    aitools: [
      {label: 'Claude Code', x: 1050, y: 500},
      {label: 'Cursor', x: 1050, y: 560},
      {label: 'GitHub Copilot', x: 1050, y: 620},
    ],
  };

  const categoryNodes: Node[] = categories.map((cat) => ({
    id: cat.id,
    position: {x: cat.x, y: cat.y},
    data: {label: cat.label},
    style: {
      background: categoryColors[cat.color].bg,
      border: `2px solid ${categoryColors[cat.color].border}`,
      color: categoryColors[cat.color].text,
      borderRadius: '12px',
      padding: '8px 16px',
      fontSize: '13px',
      fontWeight: 600,
      minWidth: '130px',
      textAlign: 'center' as const,
    },
    ...nodeDefaults,
  }));

  const skillNodes: Node[] = [];
  for (const [catId, items] of Object.entries(skills)) {
    const color = categoryColors[catId];
    items.forEach((skill, i) => {
      skillNodes.push({
        id: `${catId}-${i}`,
        position: {x: skill.x, y: skill.y},
        data: {label: skill.label},
        style: {
          background: color.bg,
          border: `1px solid ${color.border}`,
          color: color.text,
          borderRadius: '8px',
          padding: '4px 12px',
          fontSize: '12px',
          fontWeight: 500,
        },
        ...nodeDefaults,
      });
    });
  }

  return [hub, ...categoryNodes, ...skillNodes];
}

function createEdges(): Edge[] {
  const categories = ['programming', 'aiml', 'web', 'devops', 'domain', 'aitools'];
  const skillCounts: Record<string, number> = {
    programming: 4,
    aiml: 4,
    web: 4,
    devops: 4,
    domain: 3,
    aitools: 3,
  };

  const hubEdges: Edge[] = categories.map((cat) => ({
    id: `hub-${cat}`,
    source: 'hub',
    target: cat,
    animated: true,
    style: {stroke: categoryColors[cat].border, strokeWidth: 2},
  }));

  const skillEdges: Edge[] = [];
  for (const [catId, count] of Object.entries(skillCounts)) {
    for (let i = 0; i < count; i++) {
      skillEdges.push({
        id: `${catId}-skill-${i}`,
        source: catId,
        target: `${catId}-${i}`,
        style: {stroke: categoryColors[catId].border, strokeWidth: 1.5},
      });
    }
  }

  return [...hubEdges, ...skillEdges];
}

const initialNodes = createNodes();
const initialEdges = createEdges();

export default function SkillMap(): React.ReactElement {
  const [nodes] = useNodesState(initialNodes);
  const [edges] = useEdgesState(initialEdges);

  return (
    <div className={styles.container}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        fitViewOptions={{padding: 0.2}}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag
        zoomOnScroll
        minZoom={0.3}
        maxZoom={2}
        proOptions={{hideAttribution: true}}
      >
        <Background variant={BackgroundVariant.Dots} gap={20} size={1} />
        <Controls showInteractive={false} />
      </ReactFlow>
    </div>
  );
}
