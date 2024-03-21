import React from 'react';
import '../Style/Render.css';

function Render(){

      
 function print()
 {
    window.print()
 }


return (
   <button className='Render' onClick={print}>
      Udskriv eller gem som PDF
   </button>
)
}
export default Render