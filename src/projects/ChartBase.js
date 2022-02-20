import React, { PureComponent } from 'react'
import MyAreaChart from '../components/charts/MyAreaChart'
import MyBarChart from '../components/charts/MyBarChart'
import MyLineChart from '../components/charts/MyLineChart'
import MyPieChart from '../components/charts/MyPieChart'
const chartByType = ({ type, data, columns }) => {
  if (type == 'line') {
    return <MyLineChart data={data} columns={columns} />
  } else if (type == 'bar') {
    return <MyBarChart data={data} columns={columns} />
  } else if (type == 'pie') {
    return <MyPieChart data={data} columns={columns} />
  } else if (type == 'area') {
    return <MyAreaChart data={data} columns={columns} />
  }
}

export default function ChartBase(props) {
  if (!props.data || !props.type) {
    return <> </>
  }
  return (
    <div>
      {chartByType(props)}
    </div>
  )
}
