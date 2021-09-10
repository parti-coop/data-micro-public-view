import React, { PureComponent } from "react"
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
} from "recharts"

const data = [
  {
    name: "2014",
    일간신문: 171,
    주간신문: 1143,
    방송: 53,
    인터넷신문: 2332,
    통신: 15,
  },
  {
    name: "2015",
    일간신문: 177,
    주간신문: 1165,
    방송: 52,
    인터넷신문: 2767,
    통신: 18,
  },
  {
    name: "2016",
    일간신문: 191,
    주간신문: 1232,
    방송: 52,
    인터넷신문: 2604,
    통신: 21,
  },
  {
    name: "2017",
    일간신문: 197,
    주간신문: 1232,
    방송: 51,
    인터넷신문: 2796,
    통신: 20,
  },
  {
    name: "2018",
    일간신문: 192,
    주간신문: 1292,
    방송: 51,
    인터넷신문: 2900,
    통신: 24,
  },
]

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/9xopwa9v/"

  render() {
    return (
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
              paddingTop: "20px",
              fontSize: "11px",
              fontWeight: "200",
              marginLeft: "40px",
            }}
          />
          <Area
            type="monotone"
            dataKey="인터넷신문"
            fill="#ffa600"
            stroke="#ffa600"
          />
          <Area
            type="monotone"
            dataKey="주간신문"
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
    )
  }
}
