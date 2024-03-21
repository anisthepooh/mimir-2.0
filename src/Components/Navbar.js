import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import i18next from 'i18next'

function Navbar({setLanguage, language}) {
    const {t} = useTranslation()


    const langOpt = {
        da: {nativeName: "Dansk"},
        en: {nativeName: "English"},
    }
    
  return (
    <div className="navbar bg-base-100 border-b-2 border-slate-200	 ">
        <div className="flex-1">
            <Link className="btn btn-ghost normal-case text-xl block text-left" to='/'>MIMIR
                <p className='text-xs italic'>Powered by Regionshospital Højrring</p>
            </Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1 items-center">
            <li><Link to='/Videnscenter'>{t('knowledgecenter')}</Link></li>
            <li><Link to='/faq'>FAQ</Link></li>
            <li><Link to='/kontakt'>{t('contact')}</Link></li>
            <div className="tabs tabs-boxed ml-4">
                {Object.keys(langOpt).map((lang) => (
                    <div className="tabs tabs-boxed">
                    <button onClick={() => i18next.changeLanguage(lang)} className={i18next.resolvedLanguage === lang ? "tab bg-neutral text-base-100" : "tab"}>{langOpt[lang].nativeName}</button> 
                    </div>
                ))}
            </div>
            </ul>
        </div>
    </div>
  )
}

export default Navbar