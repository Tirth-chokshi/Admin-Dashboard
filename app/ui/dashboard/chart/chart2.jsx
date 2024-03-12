"use client"

import styles from './chart.module.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const data1 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const data01 = [  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 56 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },

];
const Chart2 =({ data69 }) =>{
  return (
    <div className={styles.container}>
        <ResponsiveContainer width="100%" height="100%">
         {/* <PieChart width={400} height={400}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%"  innerRadius={40} outerRadius={60} fill="#8884d8"/>
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart> */}
        <PieChart width={800} height={400}>
        <Pie
          data={data69}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label
        >
          {data1.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          data={data69}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label
        >
          {data1.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      </ResponsiveContainer>

    </div>
  )
}
export default Chart2