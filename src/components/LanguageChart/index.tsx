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
  {name: 'Japanese', level: 90, label: 'Fluent (JLPT N1)'},
  {name: 'English', level: 85, label: 'Professional'},
];

const colors = ['#c9a96e', '#8b7355', '#a08667'];

export default function LanguageChart(): React.ReactElement {
  return (
    <div className={styles.container}>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} layout="vertical" margin={{top: 10, right: 80, left: 20, bottom: 10}}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="var(--landing-card-border)" />
          <XAxis type="number" domain={[0, 100]} hide />
          <YAxis
            type="category"
            dataKey="name"
            width={80}
            tick={{fontSize: 14, fontWeight: 500, fill: 'var(--ifm-font-color-base)'}}
          />
          <Tooltip
            contentStyle={{
              background: 'var(--ifm-background-color)',
              border: '1px solid var(--landing-card-border)',
              borderRadius: '8px',
              fontSize: '13px',
            }}
            formatter={(value: number, _name: string, props: {payload: {label: string}}) => [
              `${value}% — ${props.payload.label}`,
              'Proficiency',
            ]}
          />
          <Bar dataKey="level" radius={[0, 6, 6, 0]} barSize={28}>
            {data.map((_, index) => (
              <Cell key={index} fill={colors[index]} />
            ))}
            <LabelList
              dataKey="label"
              position="right"
              style={{fontSize: '12px', fill: 'var(--ifm-font-color-secondary)'}}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
