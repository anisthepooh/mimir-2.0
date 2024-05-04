import React, {useRef, useState} from 'react'
import '../Style/Input.css'
import Datapoints from './Datapoints'
import infoIcon from './Icons/infoIcon.svg'
import { v4 as uuidv4 } from 'uuid'
import { Info, Plus } from 'lucide-react'
import ResultTable from './ResultTable';
import { toast } from 'sonner';
import {answers, convertNgMg} from '../Utils/Model'; 
import { useTranslation } from 'react-i18next'


function Input({datapoints, setDatapoints, answers}) {

  const testDateRef = useRef()
  const testValueRef = useRef()
  const [date_last, setDate_last] = useState("")
  const { t } = useTranslation()
   
  document.addEventListener("wheel", function(event){
    if(document.activeElement.type === "number" &&
       document.activeElement.classList.contains("noscroll"))
    {
        document.activeElement.blur();
    }
  });

  function buttonHandlerAdd(e){
    const date = new Date(testDateRef.current.value)
    const value = testValueRef.current.value

    if (datapoints.length > 0){
      setDate_last(new Date(datapoints[datapoints.length-1].date))
    }

    if( date && value ) {
      if (date_last < date || date_last === ''){
        setDatapoints(prevDatapoints => {
          return [...prevDatapoints, { 
            id: uuidv4(), 
            date: date, 
            value: value, 
            answerTitle: answers.Title,
            answerBorder: answers.borderColor
          }]
        })
        e.preventDefault()
        testDateRef.current.value = null
        testValueRef.current.value = null

        toast.success( t('toast.result_added'), {
          action: {
            label: t('common.close'),
            onClick: () => {},
          }
        })
      }
      else{
        toast.error(t('toast.date_error'), {
          action: {
            abel: t('common.close'),
            onClick: () => {},
          }
        })
      }
    }
  }

  function buttonHandlerDelete(){
      window.location.reload(false);
  }
  
  return (
    <div className=' w-full flex justify-center items-center flex-col p-8 rounded mt-16 border border-slate-200 bg-white relative' >
      <form onSubmit={e => { e.preventDefault(); }}>
        <div className='flex justify-center flex-col items-center  mt-8 flex-wrap relative' >
          <div className='flex justify-between text-center items center rounded-lg p-2 gap-4 border border-slate-200'>
            {/*adds the number of the next element we will add to the array*/}
            <p className = "px-6 rounded-lg text-center bg-base-300 flex justify-center items-center" id="testnumber" >
              {datapoints.length + 1}
            </p>
            {/*Creates an input field for the user to enter a date based on a dropdown calender, it acceses the values using the useRef from react*/}
            <input type = "date"  className = "rounded-lg pl-2 h-13 border border-slate-200" id='date' ref={testDateRef} required />
            {/*Creates an input field for the user to enter a testvalue, again using useRef to acces it later*/}
            <div className="join">
            <div>
              <div>
                  <input type="number" className="input input-bordered join-item w-32" placeholder="Testværdi" ref={testValueRef} />
                </div>
              </div>
              <select className="select select-bordered join-item">
                <option selected value={true} >mg/mol</option>
                <option value={false} >USA</option>
              </select>
            </div>
            {/*Unit display*/}      
            {/* <div className="tooltip" data-tip="hello">
              <button className="btn"><Info /></button>
            </div>         */}
            <button className='btn btn-md capitalize' onClick={buttonHandlerAdd}>
                <Plus />
                {t('common.add_result')}
            </button>
          </div>
          <button className="btn btn-outline btn-sm btn-error capitalize mt-4 mx-auto" onClick={buttonHandlerDelete}>
            {t('common.delete_results')}
          </button>
        </div>
      </form>
      <div className='flex justify-center w-full'>
        <ResultTable datapoints={datapoints} setDatapoints={setDatapoints} answers={answers} />
      </div>
    </div>
  )
}

export default Input