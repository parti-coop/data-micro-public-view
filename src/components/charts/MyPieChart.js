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
  fill,
  value,
  name,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 1.2
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)
  const sin = Math.sin(-RADIAN * midAngle)
  const cos = Math.cos(-RADIAN * midAngle)
  const sx = cx + (outerRadius - 6) * cos
  const sy = cy + (outerRadius - 6) * sin
  const mx = cx + (outerRadius + 15) * cos
  const my = cy + (outerRadius + 15) * sin
  const ex = mx + (cos >= 0 ? 1 : -1) * 10
  const ey = my
  const textAnchor = cos >= 0 ? 'start' : 'end'

  return (
    <g>
      {/* <text
        x={x}
        y={y}
        fill="black"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${name} (${(percent * 100).toFixed(0)}%)`}
      </text> */}
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
        stroke-width="2"
      />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 7}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`${name}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 7}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(${(percent * 100).toFixed(0)}%)`}
      </text>
    </g>
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
            outerRadius={(ref?.current?.offsetWidth - 50) / 2 ?? 180}
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
