import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import LiveProjectButton from './LiveProjectButton'
import pharmaSystem from '../img/Pharma System.png'
import taskManagement from '../img/Task Management.png'
import freshCart from '../img/freshcard.png'
import yummy from '../img/yummy.png'
import weatherApi from '../img/wethar API.png'

interface Project {
  number: string
  category: string
  name: string
  link: string
  images: string[]
}

interface ProjectCardProps {
  project: Project
  index: number
  totalCards: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  
  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <motion.div
      ref={ref}
      style={{ 
        scale,
        top: `${index * 28}px`
      }}
      className="sticky top-24 md:top-32 h-[85vh] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between"
    >
      {/* Top Row */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
          <span
            className="font-black text-[#D7E2EA]"
            style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
          >
            {project.number}
          </span>
          <div className="flex flex-col">
            <span className="text-[#D7E2EA] opacity-60 uppercase tracking-wider text-sm sm:text-base">
              {project.category}
            </span>
            <h3 className="text-[#D7E2EA] font-medium uppercase text-xl sm:text-2xl md:text-3xl">
              {project.name}
            </h3>
          </div>
        </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <LiveProjectButton />
        </a>
      </div>

      {/* Bottom Row - Image Grid */}
      <div className="flex gap-3 sm:gap-4 md:gap-6">
        {/* Left Column - 40% width */}
        <div className="w-[40%] flex flex-col gap-3 sm:gap-4 md:gap-6">
          <img
            src={project.images[0]}
            alt={`${project.name} 1`}
            className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover w-full"
            style={{ height: 'clamp(130px, 16vw, 230px)' }}
          />
          <img
            src={project.images[1]}
            alt={`${project.name} 2`}
            className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover w-full"
            style={{ height: 'clamp(160px, 22vw, 340px)' }}
          />
        </div>
        {/* Right Column - 60% width */}
        <div className="w-[60%]">
          <img
            src={project.images[2]}
            alt={`${project.name} 3`}
            className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover w-full h-full"
          />
        </div>
      </div>
    </motion.div>
  )
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      number: '01',
      category: 'Client',
      name: 'Pharma System',
      link: 'https://github.com/Yosab15/pharma_system',
      images: [pharmaSystem, pharmaSystem, pharmaSystem]
    },
    {
      number: '02',
      category: 'Personal',
      name: 'Task Management',
      link: 'https://github.com/Yosab15/Task_Management',
      images: [taskManagement, taskManagement, taskManagement]
    },
    {
      number: '03',
      category: 'Client',
      name: 'Fresh Cart',
      link: 'https://github.com/Yosab15/fresh-cart-final',
      images: [freshCart, freshCart, freshCart]
    },
    {
      number: '04',
      category: 'Personal',
      name: 'Yummy',
      link: 'https://github.com/Yosab15/yummy',
      images: [yummy, yummy, yummy]
    },
    {
      number: '05',
      category: 'Client',
      name: 'Weather Api',
      link: 'https://github.com/Yosab15/weather-api',
      images: [weatherApi, weatherApi, weatherApi]
    }
  ]

  const totalCards = projects.length

  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
        Project
      </h2>

      <div className="max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} totalCards={totalCards} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
