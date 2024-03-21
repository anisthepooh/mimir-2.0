import React from 'react'
import '../Style/Input.css'

function Datapoint({datapoint, index}) {
  return (
    <div className='Input'>
      {/*Gives the datapoints a number based on the position in the array, using index in a map function*/}
        <p className = "flex-item datapoints" id="testnumber">
            {index + 1} 
        </p> 
      {/*Shows the date for the datapoint*/}
        <p className = "flex-item datapoints date" id="date" >
          {new Date(datapoint.date).toLocaleDateString('dk-DK', {year: 'numeric', month: 'long', day: 'numeric'})}
        </p>
      {/*Displays the value for the datapoint*/}
        <p className = "flex-item datapoints Small">
          {datapoint.value}
        </p>
      {/*Simple unit display*/}
      <span className="flex-item Unit datapoints"> 
          mg/mol
      </span>
    </div>
  )
}

export default Datapoint
