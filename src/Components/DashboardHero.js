import React from 'react'
import { Download, LogIn } from 'lucide-react'
import { useTranslation } from 'react-i18next'

function DashboardHero({
  model, 
  setModel, 
  setDatapoints,
}) {

  const { t } = useTranslation()

  const displayTag = (e) => {
    const target = e.target.value
    if (window.confirm(`Your are now chaning the model to ${target} confirm to cange`)) {
      setDatapoints([])
      setModel(e.target.value)
    }
  }

  return (
    <div className='my-8 w-full px-6'>
        <div className='flex items-center justify-between'>
            <h1 className='text-4xl font-bold'>{t('overview_tests')}</h1>
        </div>
        <div className='flex justify-between items-center mt-16'>
          {model === "cronical" ? <div className="tabs tabs-boxed">
            <button onClick={displayTag} value="cronical" className="tab bg-neutral text-base-100">Kronisk forbrug</button> 
            <button onClick={displayTag} value="occational" className="tab ">Sporadisk forbrug</button> 
          </div>
          :
          <div className="tabs tabs-boxed">
            <button onClick={displayTag} value="cronical" className="tab">Kronisk forbrug</button> 
            <button onClick={displayTag} value="occational" className="tab bg-neutral text-base-100">Sporadisk forbrug</button> 
          </div>
          }
          <button className='btn btn-neutral capitalize btn-sm'> <Download />Download rapport</button>
        </div>
    </div>
  )
}

export default DashboardHero