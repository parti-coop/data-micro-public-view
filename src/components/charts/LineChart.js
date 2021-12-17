import React, { PureComponent } from 'react'
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  AreaChart,
  BarChart,
  Cell,
} from 'recharts'

export default function LineChart({ type, data }) {
  const jsfiddleUrl = 'https://jsfiddle.net/alidingling/9xopwa9v/'

  return (
    <>
      <div>Line Type</div>
      <ResponsiveContainer width="100%" height={600}>
        <AreaChart
          width={500}
          height={600}
          data={data}
          fontSize={11}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: -20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend
            wrapperStyle={{
              paddingTop: '20px',
              fontSize: '11px',
              fontWeight: '200',
              marginLeft: '40px',
            }}
          />
          <Area
            type="monotone"
            dataKey="기준"
            fill="#ffa600"
            stroke="#ffa600"
          />
          <Area
            type="monotone"
            dataKey="비율"
            fill="#ff5c35"
            stroke="#ff5c35"
          />
          <Area
            type="monotone"
            dataKey="일간신문"
            fill="#f40063"
            stroke="#f40063"
          />
          <Area
            type="monotone"
            dataKey="방송"
            fill="#b60091"
            stroke="#b60091"
          />
          <Area
            type="monotone"
            dataKey="통신"
            fill="#291ab0"
            stroke="#291ab0"
          />
          {/* <Bar dataKey="주간신문" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="일간신문" stroke="#ff7300" />
          <Scatter dataKey="인터넷신문" fill="red" />
        <Scatter dataKey="통신" fill="green" /> */}
        </AreaChart>
      </ResponsiveContainer>
      <div>Bar Type</div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          fontSize={11}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis dataKey="기준" type="category" />
          <XAxis
            type="number"
            tickFormatter={(tick) => {
              return `${tick * 100}%`
            }}
          />
          {/* <Tooltip content={<CustomTooltip />} /> */}
          <Bar dataKey="비율" fill="#f15a22" barSize={12}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={'#4BE3E2'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}
