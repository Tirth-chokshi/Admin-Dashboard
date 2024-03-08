"use client"

import styles from './chart.module.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';


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
const data = [
  {
    name: "Week 0",
    Booking: 0,
    Profit: 0,
  },
  {
    name: "Week 1",
    Booking: 4000,
    Profit: 2400,
  },
  {
    name: "Week 2",
    Booking: 3000,
    Profit: 1398,
  },
  {
    name: "Week 3",
    Booking: 2000,
    Profit: 3800,
  },
  {
    name: "Week 4",
    Booking: 2780,
    Profit: 3908,
  },
  // {
  //   name: "Thu",
  //   Booking: 1890,
  //   Profit: 4800,
  // },
  // {
  //   name: "Fri",
  //   Booking: 2390,
  //   Profit: 3800,
  // },
  // {
  //   name: "Sat",
  //   Booking: 3490,
  //   Profit: 4300,
  // },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const data1 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Monthly Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}  
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{background:"#151c2c", border:"none"}}/>
          <Legend />
          <Line type="monotone" dataKey="Booking" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="Profit" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height="100%">
         {/*<PieChart width={400} height={400}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%"  innerRadius={40} outerRadius={60} fill="#8884d8"/>
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart> */}
        <PieChart width={800} height={400}>
        <Pie
          data={data1}
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
          data={data1}
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

export default Chart