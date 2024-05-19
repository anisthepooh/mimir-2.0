
import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Contact from './pages/Contact';
import { Toaster } from 'sonner';
import KnowledgeCenter from './pages/KnowledgeCenter';
import FAQ from './pages/FAQ';
import { ArticleTemplate } from './articles/ArticleTemplate';
import { useTranslation } from 'react-i18next';

function App() {

 const { t } = useTranslation()

  //State to control language selection - true = dansk & false = english
  const [language, setLanguage] = useState(true);



  return (
    <div className="pb-16 bg-slate-50 min-h-screen">
      <Navbar setLanguage={setLanguage} language={language} />
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/kontakt' element={<Contact />} />
        <Route path='/faq' element={<FAQ/>} />
        <Route path='/videnscenter' element={<KnowledgeCenter />} />
        <Route path="videnscenter/:slug"  element={<ArticleTemplate/>} />
      </Routes>
      <footer className=" rounded-lg m-4 mt-16">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center ">
          {t('license')}
          <a className="hover:underline" href="https://www.gnu.org/licenses/agpl-3.0.en.html" target="_blank"> https://www.gnu.org/licenses/agpl-3.0.en.html</a>.
          </span>
        </div>
      </footer>
      <Toaster richColors />
    </div>
  );
}

export default App
