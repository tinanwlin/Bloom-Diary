import React, {Component} from 'react';
var RadarChart = require("react-chartjs").Radar;


// import Chart from 'chart.js';

// Chart.defaults.global.animation.duration = 200;

// const radarChartTest = new Chart.Radar(CHART, {
//   type: 'radar',
//   data: {
//     labels : ['joy', 'anger', 'disgust', 'sadness', 'fear'], 
//     datasets: [
//       {
//         scores: [0.47, 0.14, 0.13, 0.5, 0.09]
//       }
//     ]
//   }
// });




class MyComponent extends Component {
  render() {
    return (
    <RadarChart data={{
      labels : ['joy', 'anger', 'disgust', 'sadness', 'fear'],
      datasets: [
        {
          label: '# of Votes',
          data : [0.47, 0.14, 0.13, 0.5, 0.09],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }
      ]
    }}
    height={600}
    width={700}
    />
    )
  }
}

export default MyComponent;
