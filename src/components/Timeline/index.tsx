import React from 'react';
import styles from './styles.module.css';

interface TimelineEntry {
  period: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'education' | 'work';
}

interface TimelineProps {
  items?: TimelineEntry[];
}

const defaultItems: TimelineEntry[] = [
  {
    period: '2016 – 2020',
    title: 'Central South University',
    subtitle: 'B.Eng. in Automation',
    description:
      'Studied control theory, embedded systems, and signal processing. Built a foundation in mathematics and engineering.',
    type: 'education',
  },
  {
    period: '2021 – 2023',
    title: 'Osaka University',
    subtitle: 'M.Eng. in Automation',
    description:
      'Focused on robotics, machine learning, and advanced control systems. Conducted research on intelligent systems.',
    type: 'education',
  },
  {
    period: 'May 2023 – Oct 2025',
    title: 'Horizon Robotics',
    subtitle: 'Planning & Control Engineer',
    description:
      'Developed planning and control algorithms for autonomous driving systems. Worked on motion planning, trajectory optimization, and vehicle dynamics.',
    type: 'work',
  },
  {
    period: 'Oct 2025 – Present',
    title: 'SenseTime',
    subtitle: 'Deep Learning Engineer',
    description:
      'Working on Vision-Language Model (VLM) training at scale. Responsible for distributed training pipelines and model optimization.',
    type: 'work',
  },
];

export default function Timeline({items = defaultItems}: TimelineProps): React.ReactElement {
  return (
    <div className={styles.timeline}>
      {items.map((item, index) => (
        <div key={index} className={`${styles.entry} ${styles[item.type]}`}>
          <div className={styles.dot} />
          <div className={styles.content}>
            <span className={styles.period}>{item.period}</span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.subtitle}>{item.subtitle}</p>
            <p className={styles.description}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
