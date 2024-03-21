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
        }
      }
    },
    en: {
      translation: {
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
        }
      }
    }
  }
})