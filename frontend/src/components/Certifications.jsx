import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, MessageSquare, Cpu } from 'lucide-react';

const Certifications = () => {
  const highlights = [
    {
      icon: BrainCircuit,
      title: 'Large Language Models (LLMs)',
      description: 'Hands-on experience working with state-of-the-art large language models and understanding their architecture.',
    },
    {
      icon: MessageSquare,
      title: 'Prompt Engineering & AI Workflows',
      description: 'Expertise in crafting effective prompts and designing end-to-end AI-powered workflows.',
    },
    {
      icon: Cpu,
      title: 'AI-Powered Application Development',
      description: 'Building intelligent applications that leverage generative AI capabilities for real-world use cases.',
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
          <p className="mono-label mb-4 text-sky-600">Certification</p>
          <h2 className="heading-section text-3xl sm:text-4xl text-slate-900 max-w-2xl">
            Generative AI
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl">
            Completed certification in Generative AI, gaining hands-on experience across modern AI technologies and development practices.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-testid={`cert-item-${index}`}
              className="bento-item p-8 shadow-sm text-center"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-sky-50 rounded-2xl text-sky-600 mx-auto mb-5">
                <item.icon size={28} />
              </div>
              <h3 className="text-slate-900 font-semibold text-lg mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
