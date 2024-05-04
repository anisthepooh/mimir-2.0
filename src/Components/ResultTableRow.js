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
      <td>{index + 1} {id}</td>
      <td>{new Date(date).toLocaleDateString('dk-DK', {year: 'numeric', month: 'long', day: 'numeric'})}</td>
      <td>{value} mg/mol</td>
      <td>
        <button className='btn btn-outline btn-error' onClick={() => deleteTest(id)}>{t('common.delete')}</button>
      </td>
    </tr>
  );
}
