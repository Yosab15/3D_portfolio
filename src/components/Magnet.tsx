import React, { useState, useRef, ReactNode } from 'react'

interface MagnetProps {
  children: ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
}

const Magnet: React.FC<MagnetProps> = ({ 
  children, 
  padding = 150, 
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out'
}) => {
  const [transform, setTransform] = useState('translate3d(0, 0, 0)')
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const mouseX = e.clientX
    const mouseY = e.clientY
    
    const distanceX = mouseX - centerX
    const distanceY = mouseY - centerY
    
    const translateX = distanceX / strength
    const translateY = distanceY / strength
    
    setTransform(`translate3d(${translateX}px, ${translateY}px, 0)`)
  }

  const handleMouseLeave = () => {
    setTransform('translate3d(0, 0, 0)')
    setIsHovered(false)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      style={{
        transform,
        transition: isHovered ? activeTransition : inactiveTransition,
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  )
}

export default Magnet
