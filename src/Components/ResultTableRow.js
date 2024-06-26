import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ResultTableRow({ datapoint, index, model }) {
  const { t } = useTranslation();

  const {
    id,
    date,
    value,
  } = datapoint;

  return (
        <tr key={id} className=' '>
          <td >{index + 1}</td>
          <td>
            {model === "cronical" ? 
              new Date(date).toLocaleDateString('dk-DK', {year: 'numeric', month: 'long', day: 'numeric' })
            :
              new Date(date).toLocaleDateString('dk-DK', {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false })
            }
          </td>
          <td>{value} mg/mol</td>
        </tr>
  )

}
