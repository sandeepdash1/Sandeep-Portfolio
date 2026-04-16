import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

const experiences = [
  {
    company: 'Cognizant Solutions Pvt Ltd',
    role: 'Senior Associate',
    period: 'Jul 2021 - Jun 2025',
    location: 'Bengaluru, India',
    logo: 'https://customer-assets.emergentagent.com/job_sandeep-showcase/artifacts/qn41hdlv_CTS.png',
    highlights: [
      'Managing an API Modernization for project ARGO for Canada Life, migrating legacy code base to latest technology software to boost performance and security, migrating OSGI based application to Spring Boot using Splunk.',
      "Led MetLife's Specialized Benefit Resources unit, managing liability financing and executive benefit plans while driving Agile practices and modernized Project ARGO's backend using Spring Boot and enhanced frontend UX with Angular.",
      'Oversee coding, developing, and implementing the application in Eclipse JEE and Liberty server, Maven, DB2, JSPs environment.',
      'Own the technical direction of product roadmaps, working closely with product managers and developers to ensure alignment with the latest technologies and business priorities.',
      'Managed deployment environments and system performance, proactively resolving issues to ensure stable operations.',
      'Got recognition for generating revenue of $343,828 with 40% profit for Business.',
      'Supported onshore team in product development, resulting in a 30% faster project timeline, while identifying and reporting bugs leading to a 25% reduction in post-launch issue resolution time.',
      'Shape and manage the product backlog, coordinating the creation of detailed use cases and business requirements, ensuring all work is peer-reviewed, well-documented, and ready for delivery.',
    ],
  },
  {
    company: 'Splenta Systems Pvt Ltd',
    role: 'Senior Software Engineer',
    period: 'Dec 2019 - Jul 2021',
    location: 'Bengaluru, India',
    logo: 'https://customer-assets.emergentagent.com/job_sandeep-showcase/artifacts/wbwh4d7u_download.png',
    highlights: [
      'Developed and implemented fund transfer modules (Intra, NEFT, IMPS) with bulk upload/transaction features for corporate accounts.',
      'Built applications to send transaction alerts, manage wallet operations (block/unblock), improving customer service by 25%.',
      'Designed UI using Angular and developed backend layers (DAO, DTO, Service, Controller) using Spring Boot and MVC architecture.',
      'Created a portal for T+1 reconciliation of failed transactions (Direct, Split and UPI), enhancing financial transparency.',
      'Worked in Eclipse JEE, Tomcat, Maven, Oracle SQL, DB2, and Spring Boot in an agile environment.',
      'Documented workflows, mentored juniors, and improved team efficiency by 15%; led weekly client meetings.',
      'Delivered a user-friendly service platform that boosted customer retention by 24%.',
      'Participated in sprint planning, requirement analysis, and business logic integration with aggregators and Active Directory.',
    ],
  },
  {
    company: 'E-Square Software India Pvt Ltd',
    role: 'Software Engineer',
    period: 'May 2019 - Nov 2019',
    location: 'Bengaluru, India',
    logo: 'https://customer-assets.emergentagent.com/job_sandeep-showcase/artifacts/18ji4i4h_E2.jfif',
    highlights: [
      'Developed an Eclipse-based IDE for software and parameter handling at Bosch using JavaScript, RCP, and RCPTT, improving data processing efficiency by 35%.',
      'Built an online recruitment management system leveraging Spring Boot, Spring 4, REST APIs, Git, Maven, Eclipse JEE, and Tomcat Server, resulting in a 30% boost in recruitment efficiency.',
      'Contributed to building a global Learning Management System (LMS) using Spring and Hibernate for scalable online education.',
      'Facilitated weekly client and team review meetings, enhancing project alignment and execution efficiency by 15%.',
    ],
  },
];

const ExperienceCard = ({ exp, index }) => {
  const [expanded, setExpanded] = useState(index === 0);
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      data-testid={`experience-${index}`}
      className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-start"
    >
      {/* Timeline dot */}
      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-500 border-4 border-white shadow-md z-10 top-8" />

      {/* Card */}
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
          <div className="flex flex-wrap items-center gap-4 text-slate-500 text-sm mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {exp.period}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} />
              {exp.location}
            </span>
          </div>

          {/* Descriptions */}
          <div className={`overflow-hidden transition-all duration-300 ${expanded ? 'max-h-[2000px]' : 'max-h-0'}`}>
            <ul className="space-y-2.5 pt-2 border-t border-slate-100">
              {exp.highlights.map((item, i) => (
                <li key={i} className="flex gap-2.5 text-slate-600 text-sm leading-relaxed">
                  <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Toggle */}
          <button
            onClick={() => setExpanded(!expanded)}
            data-testid={`exp-toggle-${index}`}
            className="mt-4 flex items-center gap-1.5 text-indigo-600 text-sm font-medium hover:text-indigo-800 transition-colors"
          >
            {expanded ? (
              <>Show Less <ChevronUp size={16} /></>
            ) : (
              <>View Details <ChevronDown size={16} /></>
            )}
          </button>
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
};

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
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-300 via-indigo-200 to-transparent" />
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.company} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
