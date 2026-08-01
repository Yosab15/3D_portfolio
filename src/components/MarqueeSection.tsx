import React, { useEffect, useState, useRef } from 'react'
import pharmaSystem from '../img/Pharma System.png'
import taskManagement from '../img/Task Management.png'
import freshCart from '../img/freshcard.png'
import yummy from '../img/yummy.png'
import weatherApi from '../img/wethar API.png'

const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  const projectImages = [
    pharmaSystem,
    taskManagement,
    freshCart,
    yummy,
    weatherApi
  ]

  // Repeat project images to create 21 images for the marquee
  const images = [
    ...projectImages,
    ...projectImages,
    ...projectImages,
    ...projectImages,
    pharmaSystem
  ]

  const row1Images = images.slice(0, 11)
  const row2Images = images.slice(11)

  // Triple the images for seamless scrolling
  const row1Triple = [...row1Images, ...row1Images, ...row1Images]
  const row2Triple = [...row2Images, ...row2Images, ...row2Images]

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      
      const sectionTop = sectionRef.current.offsetTop
      const scrollOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(scrollOffset)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-x-clip">
      {/* Row 1 - Moves RIGHT */}
      <div className="flex gap-3 mb-3 overflow-hidden">
        <div 
          className="flex gap-3 will-change-transform"
          style={{ transform: `translateX(${offset - 200}px)` }}
        >
          {row1Triple.map((img, index) => (
            <img
              key={`row1-${index}`}
              src={img}
              alt={`Marquee ${index}`}
              loading="lazy"
              className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Row 2 - Moves LEFT */}
      <div className="flex gap-3 overflow-hidden">
        <div 
          className="flex gap-3 will-change-transform"
          style={{ transform: `translateX(-${offset - 200}px)` }}
        >
          {row2Triple.map((img, index) => (
            <img
              key={`row2-${index}`}
              src={img}
              alt={`Marquee ${index}`}
              loading="lazy"
              className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MarqueeSection
