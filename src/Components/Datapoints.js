import React from 'react'
import Datapoint from './Datapoint'

//Is a function to map/loop over the elements in the datapoint array 
//It creates an instance of every datapoint in the arry following the component Datapoint.js
function Datapoints({datapoints, setDatapoints}) {
  return (
    datapoints.map((datapoint, index) => {
      {/*
      it assigns a key for the datapoint given by a unique number
      It also sends with it: 
      - the datapoint it is mapping
      - the function setDatapoints
      - the complete array of datapoints
      - the index in the array it is currently mapping
      */}
        return <Datapoint key={datapoint.Id} datapoint = {datapoint} setDatapoints={setDatapoints} datapoints={datapoints} index={index}/>
    })
  )
}

export default Datapoints