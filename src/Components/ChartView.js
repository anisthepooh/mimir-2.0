import React, {useState, useEffect} from 'react'
import { 
  ScatterChart, 
  Scatter, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  Line, 
  LineChart, 
  linearGradient } from 'recharts';
import {pick, map, maxBy} from 'lodash'
import moment from 'moment'
import { add, format, differenceInCalendarDays, isFuture } from "date-fns";
import { t } from 'i18next';
import { LineChartIcon } from 'lucide-react';



const ChartView = ({data}) => {
  const [transformedData, setTransformedData] = useState([]);

  useEffect(() => {
    // Use map to create a new array with Date and Value properties using pick
    const _transformedData = map(data, (item) =>
      pick(item, ['date', 'value'])
    ); 

    // Set the transformedData using useState
    setTransformedData(_transformedData);
  }, [data]);

  const dateFormatter = (date) => {
    return moment(date).format("MMM DD")
  }
  
  transformedData.forEach(d => {
    d.date = moment(d.date).valueOf(); // date -> epoch
  });

  const xDomainMin = transformedData[0]?.date
  const xDomainMax = transformedData[transformedData.length-1]?.date
  
  
  function CustomTooltip({ active, payload, label }) {
    if (active) {
      return (
        <div className="card bg-base-100 shadow-xl p-4">
          <p className='text-sm'>{t('common.test_date') + moment(label).format("DD. MMMM YYYY")}</p>
          <p>{t('test_value') + ": " + payload[0].value} </p>
        </div>
      );
    }
    return null;
  }

  if(transformedData.length <= 0) {
    return <div className='border border-dashed border-slate-200 rounded-2xl p-8 mt-8 flex flex-col gap-4 items-center'>
      <LineChartIcon className="text-slate-200 h-10 w-10" />
      <p className='text-slate-800 text font-semibold'>{t('enterData')}</p>
    </div>
  }


  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={transformedData} margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 20,
          }}>
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
                <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
              </linearGradient> 
            </defs>
          <Area dataKey="value" fill='url(#color)'  activeDot={{ r: 8 }}  />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
          dataKey="date" 
          tickFormatter={dateFormatter} 
          domain={[xDomainMin, xDomainMax]}
          scale="time"
          type='number'
          padding={{
            left: 30,
            right: 30
          }}
          />
          <YAxis dataKey="value" domain={[0, 150]} />
          <Tooltip content={CustomTooltip}  />
        </AreaChart>  
      </ResponsiveContainer> 
    </div>
  )
}

export default ChartView