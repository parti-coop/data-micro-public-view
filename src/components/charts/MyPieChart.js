import React, { useRef, useEffect, useState } from 'react'
import { ResponsiveContainer, Cell, PieChart, Pie } from 'recharts'
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
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
        strokeWidth="2"
      />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 8}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`${name}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 8}
        y={ey}
        dy={17}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(${(percent * 100).toFixed(0)}%)`}
      </text>
    </g>
  )
}

const DrawPieChart = ({ data, columns, width }) => (
  <ResponsiveContainer width="100%" height={400}>
    <PieChart width={730} height={400}>
      <Pie
        data={data}
        nameKey={columns[0]}
        dataKey={columns[1]}
        cx="50%"
        cy="50%"
        outerRadius={(width - 100) / 2 > 200 ? 175 : (width - 100) / 2}
        // fill={palette[0]}
        label={renderCustomizedLabel}
        labelLine={false}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={palette[index % palette.length]} />
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
)

export default function MyPieChart({ data, columns }) {
  const ref = useRef(null)
  const [rendered, setRendered] = useState(0)
  useEffect(() => {
    if (ref.current) {
      setRendered(ref.current.offsetWidth > 0)
    }
  }, [ref?.current?.offsetWidth])

  data.forEach((value) => {
    value[columns[1]] = parseFloat(value[columns[1]])
  })

  return (
    <div ref={ref} style={{ width: '100%', padding: '5px' }}>
      {rendered ? (
        <>
          <DrawPieChart
            data={data}
            columns={columns}
            width={ref.current.offsetWidth}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  )
}
