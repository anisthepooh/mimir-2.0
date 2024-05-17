import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ResultTableRow({ datapoint, index, deleteTest }) {
  const { t } = useTranslation();

  const {
    id,
    date,
    value,
  } = datapoint;

  return (
        <tr key={id} className=' '>
            <td  >{index + 1}</td>
            <td>{new Date(date).toLocaleDateString('dk-DK', {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false })}</td>
            <td>{value} mg/mol</td>
            <td><span className="badge p-4" style={{border: answerBorder}}>{answerTitle}</span></td>
            <td>
                <button className='btn btn-outline btn-error'>{t('common.delete')}</button>
            </td>
        </tr>
  )

}
