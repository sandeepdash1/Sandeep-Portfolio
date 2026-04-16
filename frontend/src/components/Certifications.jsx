import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Bot, X } from 'lucide-react';

const Certifications = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const certifications = [
    {
      icon: BrainCircuit,
      title: 'Generative AI Bootcamp',
      issuer: 'Growth School',
      image: 'https://customer-assets.emergentagent.com/job_sandeep-showcase/artifacts/yyk02qhz_GenAI.jfif',
      highlights: ['Large Language Models (LLMs)', 'Prompt Engineering & AI Workflows', 'AI-Powered Application Development'],
    },
    {
      icon: Bot,
      title: 'Claude 101',
      issuer: 'Anthropic',
      image: 'https://customer-assets.emergentagent.com/job_sandeep-showcase/artifacts/0qs9iwkx_Claude.jfif',
      highlights: ['Claude AI Fundamentals', 'Effective Prompt Techniques', 'Building with Claude API'],
    },
  ];

  return (
    <section
      id="certifications"
      data-testid="certifications-section"
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
          <p className="mono-label mb-4 text-sky-600">Certifications</p>
          <h2 className="heading-section text-3xl sm:text-4xl text-slate-900 max-w-2xl">
            AI Certification
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl">
            Completed certifications in Generative AI and Claude AI, gaining hands-on experience across modern AI technologies and development practices.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              data-testid={`cert-card-${index}`}
              className="bento-item overflow-hidden shadow-sm group"
            >
              {/* Certificate Image */}
              <div
                className="relative overflow-hidden cursor-pointer"
                onClick={() => setLightboxImage(cert.image)}
                data-testid={`cert-image-${index}`}
              >
                <img
                  src={cert.image}
                  alt={`${cert.title} Certificate`}
                  className="w-full h-56 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white text-sm font-medium bg-black/50 px-4 py-1.5 rounded-full backdrop-blur-sm">
                    View Certificate
                  </span>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-sky-50 rounded-xl text-sky-600">
                    <cert.icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold text-lg">{cert.title}</h3>
                    <p className="text-slate-500 text-sm">{cert.issuer}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {cert.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-600 text-sm">
                      <span className="w-1.5 h-1.5 bg-sky-500 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          data-testid="cert-lightbox"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            data-testid="lightbox-close"
            className="absolute top-6 right-6 text-white hover:text-slate-300 transition-colors"
          >
            <X size={32} />
          </button>
          <img
            src={lightboxImage}
            alt="Certificate"
            className="max-w-4xl max-h-[85vh] w-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Certifications;
