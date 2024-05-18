import React from 'react'
import ContactCard from './components/ContactCard'
import { useTranslation } from 'react-i18next'

function Contact() {
  const { t } = useTranslation()

  return (
    <div className='flex p-4 gap-4'>
    <section className="w-full">
      <header className="flex justify-center items-center py-4 px-6" >
        <h1 className='text-4xl bold'>{t('contact')}</h1>
      </header>
      <main className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </main>
    </section>
    </div>
  )
}

export default Contact