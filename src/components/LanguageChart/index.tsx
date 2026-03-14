import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from 'recharts';
import styles from './styles.module.css';

const data = [
  {name: 'Chinese', level: 100, label: 'Native'},
  {name: 'Japanese', level: 90, label: 'N1'},
  {name: 'English', level: 85, label: 'Pro'},
];

const colors = ['#c9a96e', '#8b7355', '#a08667'];

export default function LanguageChart(): React.ReactElement {
  return (
    <div className={styles.container}>
      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={data} layout="vertical" margin={{top: 5, right: 50, left: 0, bottom: 5}}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="var(--landing-card-border)" />
          <XAxis type="number" domain={[0, 100]} hide />
          <YAxis
            type="category"
            dataKey="name"
            width={70}
            tick={{fontSize: 13, fontWeight: 500, fill: 'var(--ifm-font-color-base)'}}
          />
          <Tooltip
            contentStyle={{
              background: 'var(--ifm-background-color)',
              border: '1px solid var(--landing-card-border)',
              borderRadius: '8px',
              fontSize: '13px',
            }}
            formatter={(value: number, _name: string, props: {payload: {label: string}}) => [
              `${value}%`,
              'Proficiency',
            ]}
          />
          <Bar dataKey="level" radius={[0, 6, 6, 0]} barSize={24}>
            {data.map((_, index) => (
              <Cell key={index} fill={colors[index]} />
            ))}
            <LabelList
              dataKey="label"
              position="right"
              style={{fontSize: '11px', fill: 'var(--ifm-font-color-secondary)'}}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
