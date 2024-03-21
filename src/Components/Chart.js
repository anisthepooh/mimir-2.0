import React from 'react'
//import 'chartjs-adapter-date-fns';
import '../Style/Chart.css'
import {da} from 'date-fns/locale';
//import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  TimeScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Scale,
} from 'chart.js';


// Størstedelen af ovenstående er blot at importere Chart.js elementer, der er vores graf-library; Derudover,
// så er Chart.css den associerede .css fil, og import {da} importerer dansk standard for dato-angivelse, fra date-fns, et api til at koble tid på grafer.

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend
);
// Dette aktiverer disse specifikationer, således de er associeret med ChartJS,

function Chart({datapoints}) {
//Chart er hovedfunktionen, og specificerer de egenskaber grafen skal have, samt den data der puttes ind i den.
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        align: 'center',
        display: true,
        fullsize: true,
        text: 'Graf over testresultater',
        position: 'top',
        font: {
          size: 30,
          family: "Times New Roman"
        }
        //Dette specificerer graftitlen, dens lokation, størrelse, og position.
      },
      scales: {
        x: {
          reverse: false,
          beginAtZero: true,
          max: 150,
          stepSize: 3,
        },
        // Scales er "Skalaerne", altså, hvordan måles de forskellige elementer? max siger at der maks kan være 103 punkter i dataen, beginatZero sætter x-aksens minimum til at være 0.
      },
    // Adapters sørger for at dato bliver læst af api'en som dansk tid...
      adapters: {
        date: {
          locale: da
        }
      }
    },
    y: {
      reverse: false,
      beginAtZero: true,
      min: 0,
      max: 160,
    },
  }; 
/// Labels er hvorledes disse dato-strings skal repræsenteres: Selvfølgelig i dansk format.
  const labels = datapoints.map(datapoint => 
    new Date(datapoint.date).toLocaleDateString('dk-DK', {year: 'numeric', month: 'long', day: 'numeric'})); 
  const data = {
    labels, ///specificerer hvad der skal stå på x-aksen
    datasets: [
      {
        // her mappes variablen data, som er et array, til den indtastede data fra Datapoints. 
        label: 'THC-COOH/CREA concentration',
        data: datapoints.map(datapoint => 
          datapoint.value),
        borderColor: '#8AABCE',
        backgroundColor: '#8AABCE',
      },
    ],
  };
return (
  //Endelig spytter Return denne funktion fra komponentet ud til vores app.js.
  <div className='chart-wrapper'>
    {/* <Line 
      height = {"600px"}
      width = {"1500px"}
      data = {data}
      options = {options}
    /> */}
  </div> )
}

export default Chart