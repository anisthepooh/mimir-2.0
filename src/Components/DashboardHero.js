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
    if (window.confirm( t('changingModel', { target })))  {
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
           <div className="tabs tabs-boxed">
            <button onClick={displayTag} value="cronical" className={`tab ${model === "cronical" && "bg-neutral text-base-100"} `}>{t('chronical_use')}</button> 
            <button onClick={displayTag} value="occational" className={`tab ${model === "occational" && "bg-neutral text-base-100"} `}>{t('occational_use')}</button> 
          </div>
          <button onClick={() => window.print()} className='btn btn-neutral capitalize btn-sm'> <Download />Print</button>
        </div>
    </div>
  )
}

export default DashboardHero