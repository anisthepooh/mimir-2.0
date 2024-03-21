import '../App'; 
import './Strings'

//Model parameters
const param = {
    concentration: [
        0, 
        6,
        15,
        25,
        50,
        100,
        200,
        400,
        600,
        1166
    ],
    //outside param:
   n: [
        'Outside param',
        3317,
        7150,
        21790,
        49052,
        29695,
        10488,
        1066,
        955,
        'Outside param'
    ],
    A: [
        'Outside param',
        1.244,
        0.994,
        1.018,
        0.891,
        0.664,
        0.384,
        0.213,
        0.212,
        'Outside param'
    ],
    k: [
        'Outside param',
        0.0016,
        0.00087,
        0.00131,
        0.00086,
        0.00129,
        0.00144,
        0.00188,
        0.00342,
        'Outside param'
    ],
    RMS: [
        'Outside param',
        0.513,
        0.282,
        0.264,
        0.174,
        0.064,
        0.014,
        0.003,
        0.001,
        'Outside param'
    ],
    S2: [
        'Outside param',
        0.000289,
        0.000289,
        0.000289,
        0.000289,
        0.000289,
        0.000289,
        0.000289,
        0.000289,
        0.000289,
        0.000289,
        'Outside param'
    ],
    time: [
        0,
        23.9,
        47.9,
        71.9,
        95.9,
        119.9,
        120.1
    ],
    //outside param:
   max: [
        3.05,
        3.05,
        1.74,
        1.45,
        0.250,
        0.215,
        'Outside param'
    ]
}

//border colours
var normalBorder = 'border-4 border-slate-500'
var redBorder = 'border-red-500 border-4'
var orangeBorder = 'border-orange-500 border-4'
var greenBorder = 'border-green-500 border-4'
var blackBorder = 'border-black border-4'

//base answers
export const answers = {
    Title: 'Intet resultat at vise',
    Text: 'Indtast et testsvar for at beregne et resultat',
    borderColor: normalBorder,
    Calculation: 'Ingen testsvar er indsat',
    Outside: ''
} 

//the number of the current test used for calculations
var specimen_base = 0;
var specimen_last = 0;

//A variable for the old title 0 = okay, 1 = outside parameter
var old_title = 0;
 
//main function
export function convertNgMg({datapoints, setDatapoints}, ModelType) {

    //Sets the variable equal to the length of the list minus 1. 
    specimen_last = datapoints.length - 1

    //creates variables to use in the results
    var date_base = new Date(datapoints[specimen_base].date)
    var date_last = new Date(datapoints[specimen_last].date)
    var date_base_format = new Date(datapoints[specimen_base].date).toLocaleDateString('dk-DK', {year: 'numeric', month: 'long', day: 'numeric'})
    var date_last_format = new Date(datapoints[specimen_last].date).toLocaleDateString('dk-DK', {year: 'numeric', month: 'long', day: 'numeric'})
    
    //runs the function days between
    daysBetween()

    // Case1 of the results describes that the model can't predict anything yet because of a large value. 
    const case1 = {
        Title: "Modellen kan endnu ikke forudsige resultatet.",
        Text: "Tag næste prøve efter 5 dage.",
        Calculation: `Modellen har givet følgende resultat baseret på test nr. ${specimen_base + 1}.`
    }
    // Case2 of the results describes that the model can't predict anything yet. 
    const case2 = {
        Title: "Modellen kan endnu ikke forudsige resultatet.",
        Text: "Tag næste prøve tidligst efter 2 dage.",
        Calculation: `Modellen har givet følgende resultat baseret på test nr. ${specimen_base + 1}.`
    }

    // Case3 of the results describes that the model can't predict anything yet beacuse of the value is less than the cut off point 0,9 mg/mol. 
    const case3 = {
        Title: "Værdi er udenfor modellens rækkevidde (0,9 til 132 mg/mol).",
        Text: "Testværdien er for lav til modellen. Lave værdier i denne størrelse kan tolkes som udskillelse af rester fra tidligere stofbrug, som er ophobet i fedtvævet.",
        Calculation: `Modellen er uden for rækkevidde baseret på test nr. ${specimen_base + 1}`
    }

    // Case4 of the results describes that the model can't predict anything yet beacuse of the value is more than the cut off point 132 mg/mol. 
    const case4 = {
        Title: "Værdi er udenfor modellens rækkevidde (0,9 til 132 mg/mol).",
        Text: `Testværdien den ${date_base_format} er for høj, og der må afventes et fald inden modellen kan anvendes. Gentagne høje værdier kan betragtes som tegn på fortsat stofbrug`,
        Calculation: `Modellen er uden for rækkevidde baseret på test nr. ${specimen_base + 1}`
    }

    // Case5 of the results describes that the model can't predict anything yet beacuse of the value is less than the cut off point 0,9 mg/mol. 
    // Case5 adds a warning about "no signs of new use"
    const case5 ={
        Title: "Værdi er udenfor modellens rækkevidde (0,9 til 132 mg/mol) ",
        Text: 'Testværdien er for lav til modellen. Lave værdier i denne størrelse kan tolkes som udskillelse af rester fra tidligere stofbrug, som er ophobet i fedtvævet. BEMÆRK: Der er derfor ikke tegn på nyt indtag',
        Calculation: `Modellen er uden for rækkevidde baseret på test nr. ${specimen_last + 1}`
    }

    // Case6 descibes which test values the result is based on.
    // Inside case6 are ohter cases nested. 
    const case6 = {
        Calculation: `Modellen har givet følgende resultat baseret på test nr. ${specimen_base + 1} og test nr. ${specimen_last + 1}`,

        // Case6_1 desctibes "new sign of use" 
        case6_1: {
            Title: `Tegn på nyt indtag`,
            Text: `Der er evidens for nyt forbrug. Næste beregning vil ske med udgangspunkt i testen fra den ${date_last_format}`
        }, 

        // Case6_2 desctibes "new sign of use" 
        case6_2: {
            Title: "Tegn på nyt indtag.",
            Text: `Der er evidens for nyt forbrug. Næste beregning vil ske med udgangspunkt i testen fra den ${date_last_format}`

        },

        // Case6_3 desctibes "risk for false positive" 
        case6_3: {
            Title: "Risiko for falsk forudsigelse af nyt indtag",
            Text: `BEMÆRK: Der er mulighed for en falsk positiv forudsigelse  i op til 14 dage fra testen den ${date_base_format}, foretag derfor næste test efter den ${new Date(datapoints[specimen_base].date).addDays(15).toLocaleDateString('dk-DK', {year: 'numeric', month: 'long', day: 'numeric'})}, hvorefter modellen vil være præcis.`
        }, 

        // Case6_4 desctibes two cases:  case6_4_1: a sign of new use case and case6_4_2: a need for another test case
        case6_4: {
            case6_4_1: {
                Titel: "Tegn på nyt indtag",
                Text: `Der er evidens for nyt forbrug. Næste beregning vil ske med udgangspunkt i testen fra den ${date_last_format}`
            },
            case6_4_2: {
                Title:"Ny prøve påkrævet. Modellen kan endnu ikke forudsige et resultat. Der er risiko for falsk forudsigelse af nyt indtag.",
                Text: `BEMÆRK: Resultatet fra modellen er usikkert. Tag næste prøve tidligst efter 2 dage. Næste testsvar vil blive beregnet på baggrund af testen fra den ${date_last_format}. Modellen burde herefter være præcis`
            }
        }, 

         // Case6_5 desctibes "no sign of new use" 
        case6_5: {
            Title: "Intet tegn på nyt indtag af cannabis.",
            Text: `Der er ikke evidens for nyt cannabis forbrug mellem den ${date_base_format} og den ${date_last_format}. Næste prøve vil fortsat blive beregnet med udgangspunkt i testen fra den ${date_base_format}`,
            Calculation: `Modellen har givet følgende resultat baseret på test nr. ${specimen_base + 1} og test nr. ${specimen_last + 1}`
        },
    }

    

    //checks if the difference between the base date and last day is not above 30 days 
    //if it is, it tries the next one until it finds the next basedate. 
    function daysBetween(){
        var daysbetween = (date_last.getTime() - date_base.getTime()) / (1000 * 3600 * 24) 
        answers.Outside = '';
        if (daysbetween >= 31){
            answers.Outside = 'Spændet på de 30 dage for modellen er overskredet, resultatet er derfor udelukkende vejledende'
        }
    }

    //calculations for the base specimen
    let convertSpecimen_base = datapoints[specimen_base].value *1000/113.12; 
    let roundedSpecimen_base = Math.floor(convertSpecimen_base);
    let base_date = new Date(datapoints[specimen_base].date)
    
    //initiate the variable for the last specimen and assign it null
    let convertSpecimen_last = null
    let roundedSpecimen_last = null
    let last_date = null

    var totalHours = null


    if (ModelType === "Cronic"){
        cronic();
        updateDatapoints();
    }
    else if (ModelType === "Occational"){
        calcRatioOCC(); 
        updateDatapoints();
    }

    function updateDatapoints(){
        var item = datapoints[datapoints.length - 1];
        console.log("datapoint to change: " + item.Id + item.value)
        setDatapoints([...datapoints.filter((x) => x.Id !== item.Id),
            {
                Id: item.Id,
                date: item.date,
                value: item.value,
                answerTitle: answers.Title,
                qantity: [...datapoints].find((a) => a.Id === item.Id).qantity - 1, 
                //If increment + 1 & decrement - 1 
            },
        ])
    }




    //the if-statement that initiate the correct calculations, whether there is one or more specimens. 
    function cronic(){
        if (datapoints.length === 1 || specimen_last === specimen_base){
            above800(convertSpecimen_base); 
        }
        else{
            //assignes the variables for the last specimen
            convertSpecimen_last = datapoints[specimen_last].value*1000/113.12;
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
            answers.Title = 'First test'
            answers.Text = 'First test'
            answers.Calculation = 'First test'
            answers.borderColor = normalBorder
        }
        else{
            convertSpecimen_last = datapoints[specimen_last].value*1000/113.12;
            roundedSpecimen_last = Math.floor(convertSpecimen_last);
            
            last_date = new Date(datapoints[specimen_last].date)

            const hours = 60 * 60 * 1000; 
            totalHours = (last_date.getTime() - base_date.getTime()) / hours;
            totalHours = Math.round(totalHours)

            console.log("Specimen_base: " + roundedSpecimen_base + " RoundedSpecimen_last: " + roundedSpecimen_last);

            let ratio = roundedSpecimen_last / roundedSpecimen_base;

            let roundedRatio = Math.floor(ratio * 100) / 100 
            calculateOCC(totalHours, roundedRatio); 
        }
    }

    function calculateOCC(totalHours, roundedRatio) {
        console.log("Total hours: " + totalHours + " RoundedRatio: " + roundedRatio)
        if (totalHours <= param.time[1]) {
            console.log("If 1")
            answers.Title = 'for lav'
            answers.Text = 'for lav'
            answers.Calculation = 'for lav'
            answers.borderColor = blackBorder
            specimen_base = specimen_last

            old_title = 1;
        } 
        else if (totalHours > param.time[1] && totalHours <= param.time[2]) {
            console.log("If 2")
            result(param.max[1], roundedRatio)
        } 
        else if (totalHours > param.time[2] && totalHours <= param.time[3]) {
            console.log("If 3")
            result(param.max[2], roundedRatio)
        } 
        else if (totalHours > param.time[3] && totalHours <= param.time[4]) {
            console.log("If 4")
            result(param.max[3], roundedRatio)
        } 
        else if (totalHours > param.time[4] && totalHours <= param.time[5]) {
            console.log("If 5")
            result(param.max[4], roundedRatio)
        } 
        else if (totalHours > param.time[5] && totalHours <= param.time[6]) {
            console.log("If 6")
            result(param.max[5], roundedRatio)
        } 
        else if (totalHours > param.time[6] && totalHours <= param.time[7]) {
            console.log("If 7")
            result(param.max[6], roundedRatio)
        } 
        else if (totalHours > param.time[7] ) {
            console.log("If max")
            answers.Title = 'for høj'
            answers.Text = 'for høj'
            answers.Calculation = 'for høj'
            answers.borderColor = blackBorder
            specimen_base = specimen_last
            old_title = 1;
        }
    }

    function result(max, ratio) {
        console.log("Max: " + max + " ratio: " + ratio)
        if (ratio>max){
            answers.Title = 'Tegn på nyt indtag'
            answers.Text = `Der er evidens for nyt forbrug. Næste beregning vil ske med udgangspunkt i testen fra den ${date_last_format}`
            answers.Calculation = `Modellen har givet følgende resultat baseret på test nr. ${specimen_base + 1} og test nr. ${specimen_last + 1}`
            answers.borderColor = redBorder
            console.log(ratio, max)
            specimen_base = specimen_last

        }
        else{
            answers.Title = "Intet tegn på nyt indtag af cannabis."
            answers.Text = `Der er ikke evidens for nyt cannabis forbrug mellem den ${date_base_format} og den ${date_last_format}. Næste prøve vi baseret på den sporadiske model blive beregnet med udgangspunkt i testen fra den ${date_last_format}`
            answers.Calculation = `Modellen har givet følgende resultat baseret på test nr. ${specimen_base + 1} og test nr. ${specimen_last + 1}`
            answers.borderColor = greenBorder
            console.log(ratio, max)
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
