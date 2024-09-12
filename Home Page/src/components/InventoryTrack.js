import React from 'react'
import {BarChart, Bar, XAxis, YAxis,CartesianGrid,Tooltip,Legend} from 'recharts'

function InventoryTrack() {
    const data=[
        {name:'PPE Kit',value:100},
        {name:'Thermometers',value:200},
        {name:'Antiseptics',value:200},
        {name:'Antibiotics',value:150},
        {name:'Scissors',value:50}
    ]
  return (
    <div>
      <BarChart width={1000} height={500} data={data} margin={{top: 20, right: 30, left: 20, bottom: 5}}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  )
}

export default InventoryTrack
