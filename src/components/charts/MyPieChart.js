import React, { PureComponent, useRef, useEffect } from 'react'
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
  const ref = useRef(null)
  useEffect(() => {
    console.log('width', ref.current ? ref.current.offsetWidth : 0)
  }, [ref.current])

  data.forEach((value) => {
    value[columns[1]] = parseFloat(value[columns[1]])
  })

  return (
    <div ref={ref}>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart width={730} height={400}>
          <Pie
            data={data}
            nameKey={columns[0]}
            dataKey={columns[1]}
            cx="50%"
            cy="50%"
            outerRadius={(ref?.current?.offsetWidth - 10) / 2 ?? 180}
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
    </div>
  )
}
