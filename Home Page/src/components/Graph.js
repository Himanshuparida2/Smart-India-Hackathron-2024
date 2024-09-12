import React from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

function Graph() {
    const data={
        labels:['8am','9am','10am','11am','12pm','1pm','2pm'],
        datasets:[{
          label:'Appointment Over Time',
          data:[40,44,49,68,75,89,62,54],
          fill:false,
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          borderColor: 'rgba(75,192,192,1)',
        },],
      };

  return (
    <div>
      <Line data={data}/>
    </div>
  )
}

export default Graph
