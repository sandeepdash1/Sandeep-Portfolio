import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Cognizant Solutions Pvt Ltd',
    role: 'Senior Associate',
    period: 'Jul 2021 - Jun 2025',
    location: 'Bengaluru, India',
    logo: 'https://customer-assets.emergentagent.com/job_sandeep-showcase/artifacts/qn41hdlv_CTS.png',
  },
  {
    company: 'Splenta Systems Pvt Ltd',
    role: 'Senior Software Engineer',
    period: 'Dec 2019 - Jul 2021',
    location: 'Bengaluru, India',
    logo: 'https://customer-assets.emergentagent.com/job_sandeep-showcase/artifacts/wbwh4d7u_download.png',
  },
  {
    company: 'E-Square Software India Pvt Ltd',
    role: 'Software Engineer',
    period: 'May 2019 - Nov 2019',
    location: 'Bengaluru, India',
    logo: 'https://customer-assets.emergentagent.com/job_sandeep-showcase/artifacts/18ji4i4h_E2.jfif',
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      data-testid="experience-section"
      className="py-24 lg:py-32 px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mono-label mb-4 text-indigo-600">Work Experience</p>
          <h2 className="heading-section text-3xl sm:text-4xl text-slate-900 max-w-2xl">
            Professional Journey
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl">
            6+ years building enterprise software across leading technology companies.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-300 via-indigo-200 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  data-testid={`experience-${index}`}
                  className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-center"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-500 border-4 border-white shadow-md z-10" />

                  {/* Card - alternating sides on desktop */}
                  <div
                    className={`ml-14 md:ml-0 ${
                      isLeft ? 'md:pr-12' : 'md:col-start-2 md:pl-12'
                    }`}
                  >
                    <div className="bento-item p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow group">
                      {/* Logo + Company */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-xl overflow-hidden border border-slate-100 flex-shrink-0 bg-white flex items-center justify-center p-1">
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            data-testid={`exp-logo-${index}`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-slate-900 font-semibold text-lg leading-tight">
                            {exp.company}
                          </h3>
                          <p className="text-indigo-600 font-medium text-sm">{exp.role}</p>
                        </div>
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap items-center gap-4 text-slate-500 text-sm">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Empty cell for alternating layout */}
                  {isLeft ? (
                    <div className="hidden md:block" />
                  ) : (
                    <div className="hidden md:block md:col-start-1 md:row-start-1" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
