import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Server,
      title: 'Enterprise Development',
      description: 'Expert in Java, Spring Boot, and microservices architecture for scalable solutions',
    },
    {
      icon: Code2,
      title: 'API Modernization',
      description: 'Specialized in migrating legacy systems to modern architectures with improved performance',
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Leading development teams and mentoring junior developers to achieve project excellence',
    },
  ];

  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-24 lg:py-32 px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mono-label mb-4 text-blue-600"
        >
          About Me
        </motion.p>

        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-4"
          >
            <div className="relative">
              <img
                src="https://customer-assets.emergentagent.com/job_sandeep-showcase/artifacts/03t9kwbl_IMG_0845.jpeg"
                alt="Sandeep Dash - Senior Software Engineer"
                data-testid="profile-image"
                className="profile-image w-full aspect-[3/4] object-cover object-top shadow-xl"
                style={{ objectPosition: '50% 15%', transform: 'scale(1.1)' }}
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-lg -z-10" />
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7 md:col-start-6"
          >
            <h2 className="heading-section text-3xl sm:text-4xl text-slate-900 mb-6">
              Sandeep Dash
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              A motivated Senior Software Engineer with 6+ years of experience in
              Java, Spring Boot, and enterprise application development. Specialized
              in API modernization, microservices architecture, and leading
              cross-functional teams. Proven track record of generating significant
              business value and improving system performance through innovative
              technical solutions.
            </p>

            {/* Highlights */}
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-50 rounded-lg text-blue-600">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold mb-1">{item.title}</h3>
                    <p className="text-slate-500 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
