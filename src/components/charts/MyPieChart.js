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
  PieChart,
  Pie,
} from 'recharts'
import { palette } from '../../utils/colors'

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  name,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${name} ${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

export default function MyPieChart({ data, columns }) {
  console.log(columns)
  data.forEach((value) => {
    value[columns[1]] = parseFloat(value[columns[1]])
  })
  console.log(data)

  data.map((entry, index) => console.log(palette[index % palette.length]))

  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart width={730} height={400}>
          <Pie
            data={data}
            nameKey={columns[0]}
            dataKey={columns[1]}
            cx="50%"
            cy="50%"
            outerRadius={180}
            // fill={palette[0]}
            label={renderCustomizedLabel}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={palette[index % palette.length]}
              />
            ))}
          </Pie>
        </PieChart>
        {/* <PieChart width={730} height={250}>
          <Pie
            data={data}
            nameKey={columns[0]}
            dataKey={columns[1]}
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill={palette[0]}
            label
          />
        </PieChart> */}
      </ResponsiveContainer>
    </>
  )
}
