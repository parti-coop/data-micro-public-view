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
  Cell,
} from 'recharts'

export default function MyAreaChart({ type, data }) {
  return (
    <>
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
        </AreaChart>
      </ResponsiveContainer>
    </>
  )
}
