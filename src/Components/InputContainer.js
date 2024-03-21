import React from 'react'
import { useTranslation } from 'react-i18next'
import Input from './Input'

function InputContainer({datapoints, setDatapoints, answers}) {
  const { t } = useTranslation()

  return (
    <div className='w-full px-4'>
        <div className=''>  
              <h2 className='text-2xl font-bold text-center'>{t('enter_values')}</h2>
                <Input 
                  datapoints={datapoints} 
                  setDatapoints={setDatapoints}
                  answers={answers}
                />
          </div>
    </div>
  )
}

export default InputContainer