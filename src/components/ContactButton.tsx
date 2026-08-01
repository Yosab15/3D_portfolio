import React, { useState } from 'react'

const ContactButton: React.FC = () => {
  const [showOptions, setShowOptions] = useState(false)

  const handleWhatsApp = () => {
    window.open('https://wa.me/201205705588', '_blank')
    setShowOptions(false)
  }

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/yousab-mina-7783a8237/', '_blank')
    setShowOptions(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-white font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base transition-all duration-200 hover:opacity-90 cursor-pointer"
        style={{
          background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
          boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
          outline: 'white 2px solid',
          outlineOffset: '-3px'
        }}
      >
        Contact Me
      </button>
      
      {showOptions && (
        <div className="absolute bottom-full left-0 mb-2 flex flex-col gap-2 w-full sm:flex-row sm:w-auto">
          <button
            onClick={handleWhatsApp}
            className="rounded-full px-4 py-2 text-sm font-medium bg-[#25D366] text-white hover:opacity-90 transition-opacity"
          >
            WhatsApp
          </button>
          <button
            onClick={handleLinkedIn}
            className="rounded-full px-4 py-2 text-sm font-medium bg-[#0077B5] text-white hover:opacity-90 transition-opacity"
          >
            LinkedIn
          </button>
        </div>
      )}
    </div>
  )
}

export default ContactButton
