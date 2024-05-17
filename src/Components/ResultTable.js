import React from 'react';
import { useTranslation } from 'react-i18next';
import { findIndex } from 'lodash'; // Import findIndex from lodash
import ResultTableRow from './ResultTableRow'

function ResultTable({ datapoints, setDatapoints, answers }) {
  const { t } = useTranslation();

  const deleteTest = (id) => {
    // Find the index of the datapoint with the specified ID
    const index = findIndex(datapoints, { id });

    if (index !== -1) {
      // If the datapoint is found, create a new array without it
      const updatedDatapoints = [...datapoints.slice(0, index), ...datapoints.slice(index + 1)];
      // Update the state with the new array
      setDatapoints(updatedDatapoints);
    }
  };

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
              <th className=''><div className='flex items-center gap-1'>{t('common.actions')}</div></th>
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
                deleteTest={deleteTest}
              />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ResultTable;
