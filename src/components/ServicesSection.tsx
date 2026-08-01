import React from 'react'
import FadeIn from './FadeIn'

const ServicesSection: React.FC = () => {
  const services = [
    {
      number: '01',
      name: 'Full-Stack Web Development',
      description: 'Building complete web applications from frontend to backend, creating seamless user experiences with robust server-side logic and database integration.'
    },
    {
      number: '02',
      name: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces using React.js and Angular, focusing on performance, accessibility, and modern design patterns.'
    },
    {
      number: '03',
      name: 'Backend Development',
      description: 'Developing scalable server-side applications using .NET and ASP.NET Core, implementing business logic, security, and API endpoints.'
    },
    {
      number: '04',
      name: 'REST API Development',
      description: 'Designing and implementing RESTful APIs for seamless integration between frontend and backend systems, ensuring security and performance.'
    },
    {
      number: '05',
      name: 'SQL Server Database Design',
      description: 'Designing and managing efficient database schemas using SQL Server, optimizing queries, and ensuring data integrity and security.'
    }
  ]

  return (
    <section id="services" className="bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2 className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
        Services
      </h2>

      <div className="max-w-5xl mx-auto">
        {services.map((service, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div
              className="flex py-8 sm:py-10 md:py-12"
              style={{ borderBottom: index < services.length - 1 ? '1px solid rgba(12, 12, 12, 0.15)' : 'none' }}
            >
              <span
                className="font-black text-[#0C0C0C] mr-8 sm:mr-12 md:mr-16"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </span>
              <div className="flex flex-col justify-center">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl opacity-60 text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
