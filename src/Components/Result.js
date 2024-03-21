import { Tag } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import '../Style/Result.css'

function Result({answersTitle, answersText, answersColor, answersCalculation, answersOutside}) {

  const { t } = useTranslation()
  

  return (
    <div>
      <div className={'text-center p-4 mt-8 rounded-lg ' + answersColor}>
        <h3 className='text-xl font-bold' defaultValue='Resultat titel'>
            {answersTitle}            
        </h3>
        <p className='mt-4' defaultValue='Tekst forklaring'>
            {answersText}
        </p>
      </div>
      <div className={'mt-4 text-center rounded-lg p-4 ' + + answersColor}>
        <p>
          {answersCalculation}
          <br></br>
          <br></br>
          {answersOutside}
        </p>
      </div>
      <div className='flex justify-center mt-4 gap-2'>
        <div className="px-2 py-1 rounded-md flex items-center gap-1 bg-slate-200 text-slate-800">
          <Tag  size={12} />
          <p className="text-sm"> {t('badges.no_answer')}</p>
        </div>
        <div className="px-2 py-1 rounded-md flex items-center gap-1 bg-orange-200 text-orange-800">
          <Tag size={12} />
          <p className="text-sm"> {t('badges.new_test_required')}</p>
        </div>
        <div className="px-2 py-1 rounded-md flex items-center gap-1 bg-red-200 text-red-800">
          <Tag size={12} />
          <p className="text-sm"> {t('badges.sign_on_use')}</p>
        </div>
        <div className="px-2 py-1 rounded-md flex items-center gap-1 bg-green-200 text-green-800">
          <Tag size={12} />
          <p className="text-sm"> {t('badges.no_new_use')}</p>
        </div>
      </div>
    </div>
  )
}

export default Result