import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section
      id="education"
      data-testid="education-section"
      className="py-24 lg:py-32 px-6 lg:px-8 bg-accent-soft"
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
          <p className="mono-label mb-4 text-rose-600">Education</p>
          <h2 className="heading-section text-3xl sm:text-4xl text-slate-900 max-w-2xl">
            Academic Background
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          data-testid="education-card"
          className="bento-item p-8 lg:p-10 shadow-sm max-w-2xl"
        >
          <div className="flex items-start gap-5">
            {/* University Logo */}
            <div className="w-16 h-16 rounded-xl overflow-hidden border border-slate-100 flex-shrink-0 bg-white flex items-center justify-center p-1">
              <img
                src="https://customer-assets.emergentagent.com/job_sandeep-showcase/artifacts/znbusuao_SOA.png"
                alt="Siksha O Anusandhan University"
                data-testid="education-logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <h3 className="text-slate-900 font-semibold text-lg leading-tight">
                Siksha 'O' Anusandhan University
              </h3>
              <p className="text-rose-600 font-medium text-sm mt-1">
                Bachelor of Technology | Mechanical Engineering
              </p>
              <div className="flex items-center gap-1.5 text-slate-500 text-sm mt-3">
                <Calendar size={14} />
                <span>Aug 2010 - Jul 2014</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
