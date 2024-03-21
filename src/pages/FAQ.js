import axios from 'axios';
import React, {useState} from 'react'
import { useQuery } from "react-query";
import fetchDataFromSanity from '../Utils/DataFetcher';


const FAQ = () => {
  const QUERY = '*[_type == "FAQ"]' 
  const { data: FAQData, isLoading, isError } = useQuery(['FAQData', QUERY], () => fetchDataFromSanity(QUERY));
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return ( 
    <div>
      <h1 className='text-4xl mx-auto text-center mt-8'>Frequently Asked Questions</h1>
      <div className='max-w-4xl mx-auto pt-10'>
        {FAQData?.result.map((item, index) => (
          <div key={item._createdAt} className="collapse collapse-arrow bg-base-200 mt-4">
            <input 
              onClick={() => handleToggle(index)} 
              type="radio" 
              name="my-accordion-2" 
              checked={openIndex === index} 
            /> 
            <div className="collapse-title text-xl font-medium">
              {item.question}
            </div>
            <div className="collapse-content"> 
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
        <div className="mt-10 p-6 bg-white shadow-md rounded-lg dark:bg-zinc-700">
          <h3 className="text-2xl font-bold mb-4">Har du et spørgsmål?</h3>
          <p className="text-lg text-zinc-500 dark:text-zinc-400">
            Så send en mail til understående mail, og vi vil lægge spørgsmålet samt svar op her, så alle kan få glæde af det. 
          </p>
          <button className="btn btn-link mt-6 pl-0">
            torben@rhn.dk
          </button>
        </div>
      </div>
    </div>
  )
}

export default FAQ