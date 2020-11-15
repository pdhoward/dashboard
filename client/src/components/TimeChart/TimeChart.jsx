import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts'

let increment = 0
let day = 1000*60*60*24
let seed = [
  [1486684800000, 34], 
  [1486771200000, 43], 
  [1486857600000, 31] , 
  [1486944000000, 43], 
  [1487030400000, 33], 
  [1487116800000, 52]
]
let today = seed[seed.length - 1][0]

const TimeChart = (props) => {
  const {onChangeCount} = props;
  let options =  { 
        options: {
            chart: {
              height: 380,
              width: "100%",
              type: "area",
              animations: {
                initialAnimation: {
                  enabled: false
                }}
            },
            xaxis: {
              type: 'datetime'
              }
            },
        series: [
          {
            name: "Series 1",
            data: seed
          }
        ]        
   }
    
    const [stateOptions, setStateOptions] = useState(options); 
    
    useEffect(() => {
      const interval = setInterval(() => {        
          increment++      
          let nextDay = today + (day * increment)       
          let value = Math.floor(Math.random() * 99)
          console.log(`----INSIDE TIME CHART----`)
          console.log(increment)
          console.log(day)
          console.log(nextDay)
          console.log(value)
          seed.shift()
          seed.push([nextDay, value])
          console.log(seed)
          options.series[0].data=seed
          setStateOptions(options)
          onChangeCount(increment)
          
      }, 5000)
      return () => clearInterval(interval)
  })
    
     return (        
        <Chart options={stateOptions.options} series={stateOptions.series} type="line" width={600} height={320} />
     ) 
  }
  export default TimeChart

// time series - type="line"
//   let options =  { 
//     options: {
//         chart: {
//           height: 380,
//           width: "100%",
//           type: "area",
//           animations: {
//             initialAnimation: {
//               enabled: false
//             }}
//         },
//         xaxis: {
//           type: 'datetime'
//           }
//         },
//     series: [
//       {
//         name: "Series 1",
//         data: [
//           [1486684800000, 34], 
//           [1486771200000, 43], 
//           [1486857600000, 31] , 
//           [1486944000000, 43], 
//           [1487030400000, 33], 
//           [1487116800000, 52]
//         ]
//       }
//     ]        
// }

// bar chart - type="bar"
// let options = {
//         options: {
//           chart: {
//             id: 'apexchart-example'
//           },
//           xaxis: {
//             categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
//           }
//         },
//         series: [{
//           name: 'series-1',
//           data: [30, 40, 45, 50, 49, 60, 70, 91]
//         }]
//       }
  


