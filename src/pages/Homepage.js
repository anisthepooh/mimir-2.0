
import React, { useState, useEffect, useCallback } from 'react';
import '../App.css';
import {answers, convertNgMg} from '../Utils/Model'; 
import Result from '../Components/Result';
import InputContainer from '../Components/InputContainer';
import DashboardHero from '../Components/DashboardHero';
import ChartView from '../Components/ChartView';
import { useTranslation } from 'react-i18next';

function Homepage() {


  const [datapoints, setDatapoints] = useState([]);
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  const [model, setModel] = useState("cronical");
  const [unit, setUnit] = useState("mg/mol")

  const { t } = useTranslation()

  useEffect(() => {
    if (datapoints.length > 0 && model === 'cronical') {
      convertNgMg({datapoints, setDatapoints}, "cronical", unit)
      forceUpdate()
    } 
    else if (datapoints.length > 0 && model === 'occational'){
      convertNgMg({datapoints, setDatapoints}, "occational", unit)
      forceUpdate()
    }
    else {
    }
  }, [datapoints.length]);


  

  return (
    <div className="pb-16">
      <div>
        <DashboardHero model={model} setModel={setModel} setDatapoints={setDatapoints} />
        <InputContainer model={model} datapoints={datapoints} setDatapoints={setDatapoints} answers={answers} setUnit={setUnit}/>
        <div className='grid grid-cols-1 md:grid-cols-2  gap-4 mt-16 p-4 w-full '>
          <div className= 'border border-slate-200 rounded-lg p-4   bg-white '> 
            <h2 className='text-2xl font-bold text-center'>{t('interpretation')} </h2>
              <div className=''>
                <Result 
                  answersTitle={answers.Title} 
                  answersText={answers.Text}
                  answersColor={answers.borderColor}
                  answersCalculation={answers.Calculation}
                  answersOutside={answers.Outside}
                />
              </div>
          </div>
          <div className='border border-slate-200 rounded-lg p-4  bg-white '>
            <h2 className='text-2xl font-bold text-center'>{t('graph_heading')}</h2>
            <ChartView data={datapoints} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage
