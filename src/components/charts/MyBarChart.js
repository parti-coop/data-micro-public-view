import React, { PureComponent } from 'react'
import {
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
} from 'recharts'
import { palette } from '../../utils/colors'

export default function MyBarChart({ type, data, columns }) {
  data.forEach((value) => {
    columns.slice(1).forEach((column) => {
      value[column] = parseFloat(value[column])
    })
  })

  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          fontSize={11}
          margin={{ top: 10, right: 10, left: 10, bottom: 5 }}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis dataKey={columns[0]} type="category" tick={{ fontSize: 14 }} />
          <XAxis type="number" domain={[0, 'dataMax']} />
          {columns.slice(1).map((column, index) => (
            <Bar dataKey={column} fill={palette[index]} maxBarSize={60}></Bar>
          ))}
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}
