import React, { PureComponent } from 'react'
import LineChart from '../components/charts/LineChart'

const data = [
  {
    name: '2014',
    일간신문: 171,
    주간신문: 1143,
    방송: 53,
    인터넷신문: 2332,
    통신: 15,
  },
  {
    name: '2015',
    일간신문: 177,
    주간신문: 1165,
    방송: 52,
    인터넷신문: 2767,
    통신: 18,
  },
  {
    name: '2016',
    일간신문: 191,
    주간신문: 1232,
    방송: 52,
    인터넷신문: 2604,
    통신: 21,
  },
  {
    name: '2017',
    일간신문: 197,
    주간신문: 1232,
    방송: 51,
    인터넷신문: 2796,
    통신: 20,
  },
  {
    name: '2018',
    일간신문: 192,
    주간신문: 1292,
    방송: 51,
    인터넷신문: 2900,
    통신: 24,
  },
]

const chartByType = (type, data) => {
  if (type == 'line') {
    return <LineChart data={data} />
  } else if (type == 'pie') {
    return <LineChart data={data} />
  } else if (type == 'donut') {
    return <LineChart data={data} />
  }
}

const csvToJson = (path) => {
  // const csv = require('csvtojson')
  // return csv()
  //   .fromFile(path)
  //   .then((jsonObj) => {
  //     return jsonObj
  //   })
}

export default function ChartBase(props) {
  const jsfiddleUrl = 'https://jsfiddle.net/alidingling/9xopwa9v/'
  const adsf = props
  console.log(props)
  // { <h1>{props && props.title ? 'asdfasdf' : 'bwewrer'}</h1>}
  if (!props.data || !props.type) {
    return <> </>
  }
  // const csvPath = `~/data/${props.data}`
  // const file = fs.readFile(csvPath)
  // const jsonData = csvToJson(csvPath)
  // console.log(jsonData)

  return (
    <div>
      {/* {<h1>{props && props.title ? 'asdfasdf' : 'bwewrer'}</h1>} */}
      <div>type: {props.type}</div>
      <div>data: {props.data}</div>
      {chartByType(props.type, data)}
      {/* 
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
          /> */}
      {/* <Bar dataKey="주간신문" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="일간신문" stroke="#ff7300" />
      <Scatter dataKey="인터넷신문" fill="red" />
    <Scatter dataKey="통신" fill="green" /> */}
      {/* </AreaChart>
      </ResponsiveContainer> */}
    </div>
  )
}

//var csv is the CSV file with headers
function csvJSON(csv) {
  var lines = csv.split('\n')

  var result = []

  // NOTE: If your columns contain commas in their values, you'll need
  // to deal with those before doing the next step
  // (you might convert them to &&& or something, then covert them back later)
  // jsfiddle showing the issue https://jsfiddle.net/
  var headers = lines[0].split(',')

  for (var i = 1; i < lines.length; i++) {
    var obj = {}
    var currentline = lines[i].split(',')

    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j]
    }

    result.push(obj)
  }

  //return result; //JavaScript object
  return JSON.stringify(result) //JSON
}
