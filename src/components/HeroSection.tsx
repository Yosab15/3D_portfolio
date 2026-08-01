import React from 'react'
import FadeIn from './FadeIn'
import Magnet from './Magnet'
import ContactButton from './ContactButton'
import portrait from '../img/2222.png'

const HeroSection: React.FC = () => {
  return (
    <section className="h-screen flex flex-col overflow-x-clip">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="flex justify-between px-6 md:px-10 pt-6 md:pt-8">
        {['About', 'Services', 'Projects', 'Contact'].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-all duration-200 hover:opacity-70 border-2 border-[#D7E2EA] rounded-full px-4 py-2"
          >
            {link}
          </a>
        ))}
      </FadeIn>

      {/* Hero Portrait - Positioned absolutely with Magnet */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
            <img
              src={portrait}
              alt="Yousab Mina Portrait"
              className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Hero Heading */}
      <div className="overflow-hidden mt-6 sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14.5vw] sm:text-[15vw] md:text-[16vw] lg:text-[14.5vw]">
            Hi, i&apos;m yousab
          </h1>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 mt-auto px-6 md:px-10">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[200px] sm:max-w-[280px] md:max-w-[320px] border-2 border-gradient rounded-lg px-4 py-3" style={{ 
            fontSize: 'clamp(0.85rem, 1.5vw, 1.6rem)',
            background: 'linear-gradient(135deg, rgba(24, 1, 31, 0.8) 0%, rgba(182, 0, 168, 0.3) 50%, rgba(118, 33, 176, 0.3) 100%)',
            borderColor: 'rgba(182, 0, 168, 0.5)',
            boxShadow: '0 4px 15px rgba(182, 0, 168, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}>
            a full-stack developer building scalable web applications
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}

export default HeroSection
