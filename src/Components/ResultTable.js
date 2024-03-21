import React from 'react'
import Datapoint from './Datapoint'
import ResultTableRow from './ResultTableRow'
import { Calculator, CalendarDays, Hash, MessageSquare, SquareEqual, Trash2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'

function ResultTable({datapoints, setDatapoints, answers }) {
  const { t } = useTranslation()

  
  return (
    <div className='mt-8 w-full'>
            <div className="overflow-x-auto rounded-lg w-full">
            <table className="table w-full">
                {/* head */}
                <thead className=''>
                <tr className='bg-base-200 '>
                    <th className=''><div className='flex items-center gap-1'><Hash size={12} />{t('test_nb')}</div></th>
                    <th className=''><div className='flex items-center gap-1'><CalendarDays size={12}/>{t('tested')}</div></th>
                    <th className=''><div className='flex items-center gap-1'><Calculator size={12} />{t('test_value')}</div></th>
                    <th className=''><div className='flex items-center gap-1'><SquareEqual size={12} />{t('common.result')}</div></th>
                    <th className=''><div className='flex items-center gap-1'><MessageSquare size={12} />{t('common.comment')}</div></th>
                    <th className=''><div className='flex items-center gap-1'><Trash2 size={12} />{t('common.actions')}</div></th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                {datapoints.map((datapoint, index) => {
                  return <ResultTableRow key={datapoint.Id} datapoint={datapoint} setDatapoints={setDatapoints} datapoints={datapoints} index={index} answers={answers}/>
                })}
                
                </tbody>
        </table>
        </div>
        
        
    </div>
  )
}

export default ResultTable