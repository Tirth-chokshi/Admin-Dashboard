"use client"

import styles from './chart.module.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';

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
      
    </div>
  )
}

export default Chart