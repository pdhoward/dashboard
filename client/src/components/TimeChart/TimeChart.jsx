import React, { useState } from 'react';
import Chart from 'react-apexcharts'

const TimeChart = (props) => {
    let options = {
        options: {
          chart: {
            id: 'apexchart-example'
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }]
      }
    const [stateOptions] = useState(options);   
    
     return (        
        <Chart options={stateOptions.options} series={stateOptions.series} type="bar" width={500} height={320} />
     ) 
  }
  export default TimeChart


