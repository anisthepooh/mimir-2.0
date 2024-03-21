// fetchDataFromSanity.js
import axios from 'axios';

const fetchDataFromSanity = async (QUERY) => {
  
  try {

    const PROJECT_ID = '4nmmiy5b'
    const DATASET = "production"

    const apiUrl = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`

    const response = await axios.get(apiUrl);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchDataFromSanity;
