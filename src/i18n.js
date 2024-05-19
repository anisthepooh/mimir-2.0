import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
.use(initReactI18next)
// .use(LanguageDetector)
.init({
  fallbackLng: 'da',
  resources: {
    da: {
      translation: {
        license: "©2024 Mimir - Cannabis Test Rapport. Dette websted og dets indhold er beskyttet under GNU Affero General Public License version 3 (AGPL-3.0). Denne software er distribueret i håbet om at være nyttig, men UDEN NOGEN GARANTI; uden endda den stiltiende garanti om SALGBARHED eller EGNETHED TIL ET BESTEMT FORMÅL. Se GNU Affero General Public License for flere detaljer.",
        enterData: "Indtast dato'er og prøve resultater for at få vist en graf over resultater",
        changingModel: "Du ændrer nu modellen til {{target}}, bekræft for at ændre.",
        interpretation: "Fortolkning",
        knowledgecenter: "Videnscenter",
        contact: "Kontakt",
        overview_tests: "Overblik over tests resultater",
        user_id: "Bruger-id:",
        change_user: "Skift bruger",
        chronical_use: "Kronisk forbrug",
        occational_use: "Sporalisk forbrug",
        download_report: "Download rapport",
        enter_values: "Indtast test værdier her: ",
        graph_heading: "Graf over resultater ",
        test_nb: "Test nr.",
        tested: "Testet den",
        test_value: "Test værdi",
        add_data: "Indtast dato'er og prøve resultater for at få vist en graf over resultater",
        FAQ: {
          haveQuestion: "Har du et spørgsmål?",
          sendEmail: "Så send en mail til understående mail, og vi vil lægge spørgsmålet samt svar op her, så alle kan få glæde af det."
        },
        toast: {
          result_added: "Test resultat tilført",
          error_date: "Datoen du har indtastet ligger før tidligere indtastet datoer.",
        },
        badges: {
          no_answer: "Intet svar",
          new_test_required: "Ny prøve påkrævet",
          sign_on_use: "Tegn på nyt indtag",
          no_new_use: "Intet tegn på nyt indtag"
        },
        common: {
          close: "Luk",
          add_result: "Tilføj testresult",
          delete_results: " Slet alle testresultater",
          result: "Resultat",
          comment: "Kommentar",
          actions: "Handlinger",
          delete: "Slet",
          test_date: "Test dato: ",
          too_small_screen: "Skærmstørrelsen er for lille. Bredden på skærmen skal minimum være 992 px. Hvis du bruger en Ipad, prøv at vende den.",
          read_more: "Læs mere",
        },
        defaultAnswers: {
          Title: 'Intet resultat at vise',
          Text: 'Indtast et testsvar for at beregne et resultat',
          Calculation: 'Ingen testsvar er indsat',
          Outside: 'Spændet på de 30 dage for modellen er overskredet, resultatet er derfor udelukkende vejledende'
        },
        model: {
          case1: {
            Title: "Modellen kan endnu ikke forudsige resultatet.",
            Text: "Tag næste prøve efter 5 dage.",
            Calculation: "Modellen har givet følgende resultat baseret på test nr. {{testNumber}}."
          },
          case2: {
            Title: "Modellen kan endnu ikke forudsige resultatet.",
            Text: "Tag næste prøve tidligst efter 2 dage.",
            Calculation: "Modellen har givet følgende resultat baseret på test nr. {{testNumber}}."
          },
          case3: {
            Title: "Værdi er udenfor modellens rækkevidde (0,9 til 132 mg/mol).",
            Text: "Testværdien er for lav til modellen. Lave værdier i denne størrelse kan tolkes som udskillelse af rester fra tidligere stofbrug, som er ophobet i fedtvævet.",
            Calculation: "Modellen er uden for rækkevidde baseret på test nr. {{testNumber}}."
          },
          case4: {
            Title: "Værdi er udenfor modellens rækkevidde (0,9 til 132 mg/mol).",
            Text: "Testværdien den {{date}} er for høj, og der må afventes et fald inden modellen kan anvendes. Gentagne høje værdier kan betragtes som tegn på fortsat stofbrug",
            Calculation: "Modellen er uden for rækkevidde baseret på test nr. {{testNumber}}."
          },
          case5: {
            Title: "Værdi er udenfor modellens rækkevidde (0,9 til 132 mg/mol) ",
            Text: "Testværdien er for lav til modellen. Lave værdier i denne størrelse kan tolkes som udskillelse af rester fra tidligere stofbrug, som er ophobet i fedtvævet. BEMÆRK: Der er derfor ikke tegn på nyt indtag",
            Calculation: "Modellen er uden for rækkevidde baseret på test nr. {{testNumber}}"
          },
          case6: {
            Calculation: "Modellen har givet følgende resultat baseret på test nr. {{testNumber1}} og test nr. {{testNumber2}}",
            case6_1: {
              Title: "Tegn på nyt indtag",
              Text: "Der er evidens for nyt forbrug. Næste beregning vil ske med udgangspunkt i testen fra den {{date}}"
            },
            case6_2: {
              Title: "Tegn på nyt indtag.",
              Text: "Der er evidens for nyt forbrug. Næste beregning vil ske med udgangspunkt i testen fra den {{date}}"
            },
            case6_3: {
              Title: "Risiko for falsk forudsigelse af nyt indtag",
              Text: "BEMÆRK: Der er mulighed for en falsk positiv forudsigelse  i op til 14 dage fra testen den {{date}}, foretag derfor næste test efter den {{nextDate}}, hvorefter modellen vil være præcis."
            },
            case6_4_1: {
              Title: "Tegn på nyt indtag",
              Text: "Der er evidens for nyt forbrug. Næste beregning vil ske med udgangspunkt i testen fra den {{date}}"
            },
            case6_4_2: {
              Title: "Ny prøve påkrævet. Modellen kan endnu ikke forudsige et resultat. Der er risiko for falsk forudsigelse af nyt indtag.",
              Text: "BEMÆRK: Resultatet fra modellen er usikkert. Tag næste prøve tidligst efter 2 dage. Næste testsvar vil blive beregnet på baggrund af testen fra den {{date}}. Modellen burde herefter være præcis"
            },
            case6_5: {
              Title: "Intet tegn på nyt indtag af cannabis.",
              Text: "Der er ikke evidens for nyt cannabis forbrug mellem den {{date1}} og den {{date2}}. Næste prøve vil fortsat blive beregnet med udgangspunkt i testen fra den {{date1}}",
              Calculation: "Modellen har givet følgende resultat baseret på test nr. {{testNumber1}} og test nr. {{testNumber2}}"
            }
          },
          case7: {
            Title: "Første test",
            Text: "Testværdien den {{date}} er første indtastet test. Indtast endnu en test for at se et resultat",
            Calculation: "Modellen har kun en test på nuværende tidspunkt"
          },
          case8: {
            Title: "Intet tegn på nyt indtag af cannabis.",
            Text: "Der er ikke evidens for nyt cannabis forbrug mellem den {{date1}} og den {{date2}}. Ved at bruge modellen for sporadisk forbrug vil næste prøve blive beregnet med udgangspunkt i den nyeste test, dette betyder at det er testen fra den {{date2}}",
            Calculation: "Modellen har givet følgende resultat baseret på test nr. {{testNumber1}} og test nr. {{testNumber2}}"
          },
          case9: {
            Title: "Tegn på nyt indtag af cannabis.",
            Text: "Der er evidens for nyt cannabis forbrug mellem den {{date1}} og den {{date2}}. Næste prøve at blive beregnet med udgangspunkt i testen fra den {{date2}}",
            Calculation: "Modellen har givet følgende resultat baseret på test nr. {{testNumber1}} og test nr. {{testNumber2}}"
          },
          case10: {
            Title: "Tiden imellem de 2 tests er for kort",
            Text: "Antal timer imellem testene er for lav til modellen. Foretag derfor en ny test",
            Calculation: "Modellen kan ikke give et resultat baseret på den korte afstand mellem følgende datoer {{date1}} og {{date2}}"
          },
          case11: {
            Title: "Tiden i mellem de 2 tests er for lang",
            Text: "Antal timer imellem testene er for høj til modellen. Foretag derfor en ny test som ikke er mere end 120 timer efter seneste test",
            Calculation: "Modellen kan ikke give et resultat baseret på den lange afstand mellem følgende datoer {{date1}} og {{date2}}"
          }
        },
      },
    },
    en: {
      translation: {
        license: "©2024 Mimir - Cannabis Test Report. This website and its content are protected under the GNU Affero General Public License version 3 (AGPL-3.0). This software is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.",
        enterData: "Enter dates and test results to display a graph of the results",
        changingModel: "You are now changing the model to {{target}}, confirm to change.",
        interpretation: 'Interpretation',
        knowledgecenter: "Knowledgecenter",
        contact: "Contact", 
        overview_tests: "Overview over test results",
        user_id: "User-id:",
        change_user: "Change user",
        chronical_use: "Chronical use",
        occational_use: "Occational use",
        download_report: "Download report",
        enter_values: "Enter test values below: ",
        graph_heading: "Graph over results ",
        test_nb: "Test nb.",
        tested: "Tested at",
        test_value: "Test value",
        add_data: "Add test results to see the graph",
        FAQ: {
          haveQuestion: "Do you have a question?",
          sendEmail: "Then send an email to the address below, and we will post the question and the answer here so everyone can benefit from it."
        },
        toast: {
          result_added: "Test resultat added",
          error_date: "The date is before the previous date entered.",
        },
        badges: {
          no_answer: "No answer",
          new_test_required: "New test required",
          sign_on_use: "Sign on new use",
          no_new_use: "No sign on new use"
        },
        common: {
          close: "Close",
          add_result: "Add result",
          delete_results: " Delete all test results",
          result: "Resultat",
          comment: "Comment",
          actions: "Actions",
          delete: "Delete",
          test_date: "Test date: ",
          too_small_screen: "The computer screen is to small. It must be at least 992px. If you are using an Ipad, try to turn it.",
          read_more: "Read more",
        },
        defaultAnswers: {
          Title: 'No results to show',
          Text: 'Enter a test result to calculate a result',
          Calculation: 'No test results entered',
          Outside: 'The 30-day span for the model has been exceeded, therefore the result is only advisory'
        },
        model: {
          case1: {
            Title: "The model cannot predict the result yet.",
            Text: "Take the next test in 5 days.",
            Calculation: "The model has given the following result based on test no. {{testNumber}}."
          },
          case2: {
            Title: "The model cannot predict the result yet.",
            Text: "Take the next test at least 2 days later.",
            Calculation: "The model has given the following result based on test no. {{testNumber}}."
          },
          case3: {
            Title: "Value is outside the model's range (0.9 to 132 mg/mol).",
            Text: "The test value is too low for the model. Low values of this size can be interpreted as the excretion of residues from previous substance use, which are stored in the adipose tissue.",
            Calculation: "The model is out of range based on test no. {{testNumber}}."
          },
          case4: {
            Title: "Value is outside the model's range (0.9 to 132 mg/mol).",
            Text: "The test value on {{date}} is too high, and a decrease must be awaited before the model can be used. Repeated high values can be considered as signs of continued substance use.",
            Calculation: "The model is out of range based on test no. {{testNumber}}."
          },
          case5: {
            Title: "Value is outside the model's range (0.9 to 132 mg/mol) ",
            Text: "The test value is too low for the model. Low values of this size can be interpreted as the excretion of residues from previous substance use, which are stored in the adipose tissue. NOTE: There is therefore no sign of new intake.",
            Calculation: "The model is out of range based on test no. {{testNumber}}"
          },
          case6: {
            Calculation: "The model has given the following result based on test no. {{testNumber1}} and test no. {{testNumber2}}",
            case6_1: {
              Title: "Sign of new intake",
              Text: "There is evidence of new use. The next calculation will be based on the test from {{date}}"
            },
            case6_2: {
              Title: "Sign of new intake.",
              Text: "There is evidence of new use. The next calculation will be based on the test from {{date}}"
            },
            case6_3: {
              Title: "Risk of false prediction of new intake",
              Text: "NOTE: There is a possibility of a false positive prediction for up to 14 days from the test on {{date}}, so take the next test after {{nextDate}}, after which the model will be accurate."
            },
            case6_4_1: {
              Title: "Sign of new intake",
              Text: "There is evidence of new use. The next calculation will be based on the test from {{date}}"
            },
            case6_4_2: {
              Title: "New test required. The model cannot yet predict a result. There is a risk of false prediction of new intake.",
              Text: "NOTE: The result from the model is uncertain. Take the next test at least 2 days later. The next test result will be calculated based on the test from {{date}}. The model should then be accurate."
            },
            case6_5: {
              Title: "No sign of new cannabis use.",
              Text: "There is no evidence of new cannabis use between {{date1}} and {{date2}}. The next test will still be calculated based on the test from {{date1}}",
              Calculation: "The model has given the following result based on test no. {{testNumber1}} and test no. {{testNumber2}}"
            }
          },
          case7: {
            Title: "First test",
            Text: "The test value on {{date}} is the first entered test. Enter another test to see a result",
            Calculation: "The model currently has only one test"
          },
          case8: {
            Title: "No sign of new cannabis use.",
            Text: "There is no evidence of new cannabis use between {{date1}} and {{date2}}. Using the model for sporadic use, the next test will be calculated based on the most recent test, which means it is the test from {{date2}}",
            Calculation: "The model has given the following result based on test no. {{testNumber1}} and test no. {{testNumber2}}"
          },
          case9: {
            Title: "Sign of new cannabis use.",
            Text: "There is evidence of new cannabis use between {{date1}} and {{date2}}. The next test will be calculated based on the test from {{date2}}",
            Calculation: "The model has given the following result based on test no. {{testNumber1}} and test no. {{testNumber2}}"
          },
          case10: {
            Title: "The time between the two tests is too short",
            Text: "The number of hours between the tests is too low for the model. Therefore, take a new test.",
            Calculation: "The model cannot provide a result based on the short interval between the following dates {{date1}} and {{date2}}"
          },
          case11: {
            Title: "The time between the two tests is too long",
            Text: "The number of hours between the tests is too high for the model. Therefore, take a new test no more than 120 hours after the most recent test",
            Calculation: "The model cannot provide a result based on the long interval between the following dates {{date1}} and {{date2}}"
          }
        },
      },
    }
  }
})