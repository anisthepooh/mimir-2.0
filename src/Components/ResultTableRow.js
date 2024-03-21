import React from 'react'
import { useTranslation } from 'react-i18next'

export default function ResultTableRow({datapoint, index, answers}) {

  const { t } = useTranslation()

  const {
    id,
    date,
    value,
    comment,
    answerTitle,
    answerBorder
  } = datapoint

  return (
        <tr key={id} className=' '>
            <td  >{index + 1}</td>
            <td>{new Date(date).toLocaleDateString('dk-DK', {year: 'numeric', month: 'long', day: 'numeric'})}</td>
            <td>{value} mg/mol</td>
            <td><span className="badge p-4" style={{border: answerBorder}}>{answerTitle}</span></td>
            <td>{comment}</td>
            <td>
                <button className='btn btn-outline btn-error'>{t('common.delete')}</button>
            </td>
        </tr>
  )
}
