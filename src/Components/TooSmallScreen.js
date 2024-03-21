import React from 'react'
import { useTranslation } from 'react-i18next'

function TooSmallScreen() {
  
  const { t } = useTranslation()

  return (
    <div className='mt-8'>
        <div className="alert alert-warning">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            <span>{t('too_small_screen')}</span>
        </div>
    </div>
  )
}

export default TooSmallScreen