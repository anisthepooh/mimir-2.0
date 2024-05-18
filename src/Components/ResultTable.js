import React from 'react';
import { useTranslation } from 'react-i18next';
import ResultTableRow from './ResultTableRow'

function ResultTable({ datapoints, setDatapoints, answers, model }) {
  const { t } = useTranslation();

  return (
    <div className='mt-8 w-full'>
      <div className="overflow-x-auto rounded-lg w-full">
        <table className="table w-full">
          {/* head */}
          <thead className=''>
            <tr className='bg-base-200 '>
              <th className=''><div className='flex items-center gap-1'>#{t('test_nb')}</div></th>
              <th className=''><div className='flex items-center gap-1'>{t('tested')}</div></th>
              <th className=''><div className='flex items-center gap-1'>{t('test_value')}</div></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {datapoints.map((datapoint, index) => {
              return <ResultTableRow
                key={datapoint.id} 
                datapoint={datapoint} 
                setDatapoints={setDatapoints} 
                datapoints={datapoints} 
                index={index} 
                answers={answers}
                model={model}
              />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ResultTable;
