import React from 'react'

function IconDocument(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  )
}


function IconGlobe(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}


function IconMail(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


const ContactCard = () => {
  return (
    <div className="max-w-fit p-4 space-y-4 bg-white dark:bg-zinc-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
    <div className="flex items-center space-x-4">
      <div className="avatar placeholder">
        <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
          CA
        </div>
      </div> 
      <div className="space-y-1">
        <h2 className="text-2xl font-bold">Casper Anisimow</h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">Developer</p>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4 text-sm text-zinc-500 dark:text-zinc-400">
      <div className="flex items-center space-x-2 cursor-pointer btn-ghost rounded pl-0 pr-1 py-1 transition-all duration-200">
        <IconMail className="w-5 h-5" />
        <span>anisimow@live.dk</span>
      </div>
      <div className="flex items-center space-x-2 cursor-pointer btn-ghost rounded pl-0 pr-1 py-1 transition-all duration-200">
        <IconGlobe className="w-5 h-5" />
        <span>Casperanisimow.dk</span>
      </div>
    </div>
    <div className="flex items-center space-x-2 text-sm text-zinc-500 dark:text-zinc-400">
      <IconDocument className="w-5 h-5" />
      <span>Development</span>
    </div>
    <p className="text-sm">User's contribution details...</p>
  </div>
  )
}

export default ContactCard