import { param } from './Parameters'
import i18next from 'i18next'

//border colours
var normalBorder = 'border-4 border-slate-500'
var redBorder = 'border-red-500 border-4'
var orangeBorder = 'border-orange-500 border-4'
var greenBorder = 'border-green-500 border-4'
var blackBorder = 'border-black border-4'

//base answers
export const answers = {
    Title: i18next.t('defaultAnswers.Title'),
    Text: i18next.t('defaultAnswers.Text'),
    borderColor: normalBorder,
    Calculation: i18next.t('defaultAnswers.Calculation'),
    Outside: ''
} 

//the number of the current test used for calculations
var specimen_base = 0;
var specimen_last = 0;

//A variable for the old title 0 = okay, 1 = outside parameter
var old_title = 0;
 
//main function
export function convertNgMg({datapoints, setDatapoints}, ModelType, unit) {

    //Sets the variable equal to the length of the list minus 1. 
    specimen_last = datapoints.length - 1

    //creates variables to use in the results
    var date_base = new Date(datapoints[specimen_base].date)
    var date_last = new Date(datapoints[specimen_last].date)
    var date_base_format = new Date(datapoints[specimen_base].date).toLocaleDateString('dk-DK', {year: 'numeric', month: 'long', day: 'numeric'})
    var date_last_format = new Date(datapoints[specimen_last].date).toLocaleDateString('dk-DK', {year: 'numeric', month: 'long', day: 'numeric'})
    
    //runs the function days between
    daysBetween()

const case1 = {
  Title: i18next.t('model.case1.Title'),
  Text: i18next.t('model.case1.Text'),
  Calculation: i18next.t('model.case1.Calculation', { testNumber: specimen_base + 1 })
};

const case2 = {
  Title: i18next.t('model.case2.Title'),
  Text: i18next.t('model.case2.Text'),
  Calculation: i18next.t('model.case2.Calculation', { testNumber: specimen_base + 1 })
};

const case3 = {
  Title: i18next.t('model.case3.Title'),
  Text: i18next.t('model.case3.Text'),
  Calculation: i18next.t('model.case3.Calculation', { testNumber: specimen_base + 1 })
};

const case4 = {
  Title: i18next.t('model.case4.Title'),
  Text: i18next.t('model.case4.Text', { date: date_base_format }),
  Calculation: i18next.t('model.case4.Calculation', { testNumber: specimen_base + 1 })
};

const case5 = {
  Title: i18next.t('model.case5.Title'),
  Text: i18next.t('model.case5.Text'),
  Calculation: i18next.t('model.case5.Calculation', { testNumber: specimen_last + 1 })
};

const case6 = {
  Calculation: i18next.t('model.case6.Calculation', { testNumber1: specimen_base + 1, testNumber2: specimen_last + 1 }),

  case6_1: {
    Title: i18next.t('model.case6.case6_1.Title'),
    Text: i18next.t('model.case6.case6_1.Text', { date: date_last_format })
  },

  case6_2: {
    Title: i18next.t('model.case6.case6_2.Title'),
    Text: i18next.t('model.case6.case6_2.Text', { date: date_last_format })
  },

  case6_3: {
    Title: i18next.t('model.case6.case6_3.Title'),
    Text: i18next.t('model.case6.case6_3.Text', { date: date_base_format, nextDate: new Date(datapoints[specimen_base].date).addDays(15).toLocaleDateString('dk-DK', { year: 'numeric', month: 'long', day: 'numeric' }) })
  },

  case6_4: {
    case6_4_1: {
      Title: i18next.t('model.case6.case6_4_1.Title'),
      Text: i18next.t('model.case6.case6_4_1.Text', { date: date_last_format })
    },
    case6_4_2: {
      Title: i18next.t('model.case6.case6_4_2.Title'),
      Text: i18next.t('model.case6.case6_4_2.Text', { date: date_last_format })
    }
  },

  case6_5: {
    Title: i18next.t('model.case6.case6_5.Title'),
    Text: i18next.t('model.case6.case6_5.Text', { date1: date_base_format, date2: date_last_format }),
    Calculation: i18next.t('model.case6.case6_5.Calculation', { testNumber1: specimen_base + 1, testNumber2: specimen_last + 1 })
  }
};

const case7 = {
  Title: i18next.t('model.case7.Title'),
  Text: i18next.t('model.case7.Text', { date: date_base_format }),
  Calculation: i18next.t('model.case7.Calculation')
};

const case8 = {
  Title: i18next.t('model.case8.Title'),
  Text: i18next.t('model.case8.Text', { date1: date_base_format, date2: date_last_format }),
  Calculation: i18next.t('model.case8.Calculation', { testNumber1: specimen_base + 1, testNumber2: specimen_last + 1 })
};

const case9 = {
  Title: i18next.t('model.case9.Title'),
  Text: i18next.t('model.case9.Text', { date1: date_base_format, date2: date_last_format }),
  Calculation: i18next.t('model.case9.Calculation', { testNumber1: specimen_base + 1, testNumber2: specimen_last + 1 })
};

const case10 = {
  Title: i18next.t('model.case10.Title'),
  Text: i18next.t('model.case10.Text'),
  Calculation: i18next.t('model.case10.Calculation', { date1: date_base_format, date2: date_last_format })
};

const case11 = {
  Title: i18next.t('model.case11.Title'),
  Text: i18next.t('model.case11.Text'),
  Calculation: i18next.t('model.case11.Calculation', { date1: date_base_format, date2: date_last_format })
};


    

    //checks if the difference between the base date and last day is not above 30 days 
    //if it is, it tries the next one until it finds the next basedate. 
    function daysBetween(){
        var daysbetween = (date_last.getTime() - date_base.getTime()) / (1000 * 3600 * 24) 
        answers.Outside = '';
        if (daysbetween >= 31){
            answers.Outside = i18next.t('defaultAnswers.Outside')
        }
    }

    //calculations for the base specimen
    let convertSpecimen_base
    if (unit === 'mg/mol') {
        convertSpecimen_base = datapoints[specimen_base].value * 1000/113.12; 
    } else {
        convertSpecimen_base = datapoints[specimen_base].value
    }

    let roundedSpecimen_base = Math.floor(convertSpecimen_base);
    let base_date = new Date(datapoints[specimen_base].date)
    
    //initiate the variable for the last specimen and assign it null
    let convertSpecimen_last = null
    let roundedSpecimen_last = null
    let last_date = null

    var totalHours = null


    if (ModelType === "cronical"){
        cronical();
        updateDatapoints();
    }
    else if (ModelType === "occational"){
        
        calcRatioOCC(); 
        updateDatapoints();
    }

    function updateDatapoints(){
        var item = datapoints[datapoints.length - 1];
        setDatapoints([...datapoints.filter((x) => x.id !== item.id),
            {
                id: item.id,
                date: item.date,
                value: item.value,
                answerTitle: answers.Title,
                qantity: [...datapoints].find((a) => a.id === item.id).qantity - 1, 
                //If increment + 1 & decrement - 1 
            },
        ])
    }




    //the if-statement that initiate the correct calculations, whether there is one or more specimens. 
    function cronical(){
        if (datapoints.length === 1 || specimen_last === specimen_base){
            above800(convertSpecimen_base); 
        }
        else{
            //assignes the variables for the last specimen
            
            if (unit === 'mg/mol') {
                convertSpecimen_last = datapoints[specimen_last].value * 1000/113.12;
            } else {
                convertSpecimen_last = datapoints[specimen_last].value
            }

            roundedSpecimen_last = Math.floor(convertSpecimen_last);

            last_date = new Date(datapoints[specimen_last].date)
            
            //calculates the hours between the tests
            const hours = 60 * 60 * 1000; 
            totalHours = (last_date.getTime() - base_date.getTime()) / hours;
            totalHours = Math.round(totalHours)
            calcRatio(); 
        }
    }

    //gives an answer based on one test
    function above800 () {
        if (roundedSpecimen_base <= param.concentration[1]){
            answers.Title = case3.Title
            answers.Text = case3.Text
            answers.Calculation = case3.Calculation
            specimen_base = specimen_base + 1
            answers.borderColor = blackBorder
            old_title = 1;
        }
        else if (roundedSpecimen_base > param.concentration[9]){
            answers.Title = case4.Title
            answers.Text = case4.Text
            answers.Calculation = case4.Calculation
            specimen_base = specimen_base + 1
            answers.borderColor = blackBorder
            old_title = 1;
        }
        else{
            if (roundedSpecimen_base > 800) {
                answers.Title = case1.Title
                answers.Text = case1.Text
                answers.borderColor = normalBorder
                answers.Calculation = case1.Calculation
                old_title = 1;
            } else {
                answers.Title = case2.Title
                answers.Text = case2.Text
                answers.borderColor = normalBorder
                answers.Calculation = case2.Calculation
                old_title = 1;
            }
        }
    }

    //calculates the ratio between the tests
    function calcRatio() {
        let ratio = roundedSpecimen_last / roundedSpecimen_base; 
        let roundedRatio = Math.floor(ratio * 100 ) / 100 

        findA(roundedRatio); 
    }

    //findes the correct parameters to use for the calculations. 
    function findA(roundedRatio) {
        if (roundedSpecimen_base <= param.concentration[1]) {
            answers.Title = case3.Title
            answers.Text = case3.Text
            answers.borderColor = blackBorder
            answers.Calculation = case3.Calculation
            specimen_base = specimen_last
            old_title = 1;
        } 
        else if (roundedSpecimen_base > param.concentration[1] && roundedSpecimen_base < param.concentration[2]) {
            upperLimit(param.A[1], param.k[1], totalHours, param.S2[1], param.RMS[1], roundedRatio)
        } 
        else if (roundedSpecimen_base > param.concentration[2] && roundedSpecimen_base < param.concentration[3]) {
            upperLimit(param.A[2], param.k[2], totalHours, param.S2[2], param.RMS[2], roundedRatio)
        } 
        else if (roundedSpecimen_base > param.concentration[3] && roundedSpecimen_base < param.concentration[4]) {
            upperLimit(param.A[3], param.k[3], totalHours, param.S2[3], param.RMS[3], roundedRatio)
        } 
        else if (roundedSpecimen_base > param.concentration[4] && roundedSpecimen_base < param.concentration[5]) {
            upperLimit(param.A[4], param.k[4], totalHours, param.S2[4], param.RMS[4], roundedRatio)
        } 
        else if (roundedSpecimen_base > param.concentration[5] && roundedSpecimen_base < param.concentration[6]) {
            upperLimit(param.A[5], param.k[5], totalHours, param.S2[5], param.RMS[5], roundedRatio)
        }
        else if (roundedSpecimen_base > param.concentration[6] && roundedSpecimen_base < param.concentration[7]) {
            upperLimit(param.A[6], param.k[6], totalHours, param.S2[6], param.RMS[6], roundedRatio)
        }
        else if (roundedSpecimen_base > param.concentration[7] && roundedSpecimen_base < param.concentration[8]) {
            upperLimit(param.A[7], param.k[7], totalHours, param.S2[7], param.RMS[7], roundedRatio)
        }
        else if (roundedSpecimen_base > param.concentration[8] && roundedSpecimen_base < param.concentration[9]) {
            upperLimit(param.A[8], param.k[8], totalHours, param.S2[8], param.RMS[8], roundedRatio)
        }
        else if (roundedSpecimen_base > param.concentration[9] ) {
            answers.Title = case4.Title
            answers.Text = case4.Text
            answers.borderColor = blackBorder
            answers.Calculation = case4.Calculation
            specimen_base = specimen_last
            old_title = 1;
        }
    }

    //calculates the upper limit for the correct parameters
    function upperLimit(A, k, t, S2, RMS, ratio) { 
        let result = (A * Math.exp(-k * t)) + (2.57*(Math.sqrt(S2+RMS))); 
        autoInterpretation(result, ratio);
    }

    //Assignes the correct result based on the result and ratio, as well as other elements
    function autoInterpretation(result, ratio) {
        if (roundedSpecimen_last <= param.concentration[1]){
            answers.Title = case5.Title
            answers.Text = case5.Text
            answers.Calculation = case5.Calculation
            answers.borderColor = blackBorder
            specimen_base = specimen_last
        }
        else if (roundedSpecimen_last > param.concentration[9]){
            answers.Title = case4.Title
            answers.Text =  case4.Text
            answers.Calculation = case4.Calculation
            answers.borderColor = blackBorder
            specimen_base = specimen_last
        }
        else {
            if (result < ratio) {
                answers.borderColor = redBorder
                answers.Calculation = case6.Calculation
                if (roundedSpecimen_base >= 800) {
                    if(roundedSpecimen_last < 200){
                        answers.Title = case6.case6_1.Title
                        answers.Text = case6.case6_1.Text
                    }
                    else if (specimen_last - specimen_base >= 1 && old_title === 0)
                    {
                        answers.Title = case6.case6_2.Title
                        answers.Text = case6.case6_2.Text
                    }
                    else{
                        answers.Title = case6.case6_3.Title
                        //Connected to the Date.prototype.addDays method to add 15 days
                        var rawDatObject = new Date(datapoints[specimen_last].date)
                        // Converts the date into a string with the month name. 
                        
                        answers.Text = case6.case6_3.Text
                        answers.borderColor = orangeBorder
                    }
                }
                else if (roundedSpecimen_base < 800) {
                    if (specimen_last > 1 && old_title === 0){
                        answers.Title = case6.case6_4.case6_4_1.Titel
                        answers.Text = case6.case6_4.case6_4_1.Text
                        answers.borderColor = redBorder
                    }
                    else
                    {
                        answers.Title = case6.case6_4.case6_4_2.Title
                        answers.Text = case6.case6_4.case6_4_2.Text
                        answers.borderColor = orangeBorder
                    }
                }
                specimen_base = specimen_last
            } 
            else if (result > ratio) {
                answers.Title = case6.case6_5.Title
                answers.borderColor = greenBorder
                answers.Text = case6.case6_5.Text
                answers.Calculation = case6.case6_5.Calculation 
            } 
            else if (result = null){
            }
            old_title = 0;
        }
    }   

    //gives an answer based on one test
    function calcRatioOCC() {

        if (datapoints.length === 1){
            answers.Title = case7.Title
            answers.Text = case7.Text
            answers.Calculation = case7.Calculation
            answers.borderColor = normalBorder
        }
        else{
            if (unit === 'mg/mol') {
                convertSpecimen_last = datapoints[specimen_last].value * 1000/113.12;;
            } else {
                convertSpecimen_last = datapoints[specimen_last].value
            }
            
            roundedSpecimen_last = Math.floor(convertSpecimen_last);
            
            last_date = new Date(datapoints[specimen_last].date)

            const hours = 60 * 60 * 1000; 
            totalHours = (last_date.getTime() - base_date.getTime()) / hours;
            totalHours = Math.round(totalHours)


            let ratio = roundedSpecimen_last / roundedSpecimen_base;

            let roundedRatio = Math.floor(ratio * 100) / 100 
            calculateOCC(totalHours, roundedRatio); 
        }
    }

    function calculateOCC(totalHours, roundedRatio) {

        if (totalHours <= param.time[1]) {
            
            answers.Title = case10.Title
            answers.Text = case10.Text
            answers.Calculation = case10.Calculation
            answers.borderColor = blackBorder
            specimen_base = specimen_last

            old_title = 1;
        } 
        else if (totalHours > param.time[1] && totalHours <= param.time[2]) {
            
            result(param.max[1], roundedRatio)
        } 
        else if (totalHours > param.time[2] && totalHours <= param.time[3]) {
            
            result(param.max[2], roundedRatio)
        } 
        else if (totalHours > param.time[3] && totalHours <= param.time[4]) {
            
            result(param.max[3], roundedRatio)
        } 
        else if (totalHours > param.time[4] && totalHours <= param.time[5]) {
            
            result(param.max[4], roundedRatio)
        } 
        else if (totalHours > param.time[5] && totalHours <= param.time[6]) {
            
            result(param.max[5], roundedRatio)
        } 
        else if (totalHours > param.time[6] ) {
            
            answers.Title = case11.Title
            answers.Text = case11.Text
            answers.Calculation = case11.Calculation
            answers.borderColor = blackBorder
            specimen_base = specimen_last
            old_title = 1;
        }
    }

    function result(max, ratio) {
        
        if (ratio>max){
            answers.Title = case9.Title
            answers.Text = case9.Text
            answers.Calculation = case9.Calculation
            answers.borderColor = redBorder
            
            specimen_base = specimen_last

        }
        else{
            answers.Title = case8.Title
            answers.Text = case8.Text
            answers.Calculation = case8.Calculation
            answers.borderColor = greenBorder
            
            specimen_base = specimen_last
        }
    }
}
//Prototype added to the Date object. It adds days to the date. 
Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}
