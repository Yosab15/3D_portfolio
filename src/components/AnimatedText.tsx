import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const ref = React.useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2']
  })

  const characters = text.split('')

  return (
    <p ref={ref} className={className}>
      {characters.map((char, index) => {
        const start = index / characters.length
        const end = (index + 1) / characters.length
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1])
        
        return (
          <span key={index} className="inline-block relative">
            <span className="invisible">{char}</span>
            <motion.span
              style={{ opacity, position: 'absolute', left: 0, top: 0 }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          </span>
        )
      })}
    </p>
  )
}

export default AnimatedText
