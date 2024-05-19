import React from 'react'
import ContactCard from './components/ContactCard'
import { useTranslation } from 'react-i18next'
import { useQuery } from "react-query";
import fetchDataFromSanity from '../Utils/DataFetcher';
import { Loader  } from 'lucide-react';




function Contact() {
  const QUERY = '*[_type == "author"]' 
  const { data: FAQData, isLoading, isError } = useQuery(['authorData', QUERY], () => fetchDataFromSanity(QUERY));


  const { t } = useTranslation()

  return (
    <div className='flex p-4 gap-4'>
    <section className="w-full h-full">
      <header className="flex justify-center items-center py-4 px-6" >
        <h1 className='text-4xl bold'>{t('contact')}</h1>
      </header>
      {isLoading ?
      <main className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
        <div/>
        <Loader className="animate-spin mx-auto h-10 w-10" />
        <div/>
        </main>
      : 
      <main className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
      {FAQData?.result.map((item, index) => ( 
        <ContactCard
        item={item}
        key={index}
        />
      ))}
      </main>
      }
      
    </section>
    </div>
  )
}

export default Contact