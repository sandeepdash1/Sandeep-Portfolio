import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'MetLife - Specialized Benefit Resources (SBR)',
      description: 'Specialized Benefit Resources (SBR), a full-service unit within MetLife, focuses exclusively on the design, implementation and administration of liability financing and corporate executive benefit plans. Excellent track record for meeting deadlines and submitting high quality deliverables on time while mentoring team members.',
      techStack: ['Java', 'Spring Boot', 'Microservices', 'REST API', 'Oracle'],
      imageUrl: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=800&h=600&fit=crop',
    },
    {
      title: 'API Modernization - Project ARGO',
      description: 'Led API modernization for Canada Life, migrating legacy OSGI application to Spring Boot, boosting performance and security. Demonstrated magnificent competency working as Software Development Engineer on challenging projects under stressful environments.',
      techStack: ['Spring Boot', 'Microservices', 'DB2', 'Splunk', 'Maven'],
      imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
    },
    {
      title: 'Reconciliation Systems - Federal Bank',
      description: 'Engineered secure reconciliation modules processing 5,000+ daily transactions with 99.99% success rate. Extensive knowledge of various Java developing projects with proven project management skills.',
      techStack: ['Spring Boot', 'Oracle', 'REST API', 'Maven', 'Eclipse'],
      imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
    },
    {
      title: 'Eclipse IDE Development',
      description: 'Developed Eclipse-based IDE for Bosch using JavaScript and RCP, improving data processing efficiency by 35%. Enhanced team and project management skills through continuous mentoring of team members.',
      techStack: ['Java', 'JavaScript', 'Eclipse RCP', 'Git', 'Maven'],
      imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=600&fit=crop',
    },
  ];

  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="py-24 lg:py-32 px-6 lg:px-8 bg-projects"
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
          <p className="mono-label mb-4 text-emerald-600">Featured Projects</p>
          <h2 className="heading-section text-3xl sm:text-4xl text-slate-900 max-w-2xl">
            Key projects demonstrating expertise
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl">
            Enterprise application development, API modernization, and system architecture with measurable business impact.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              data-testid={`project-${index}`}
              className="project-card group"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent md:bg-gradient-to-r" />
                </div>

                {/* Project Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="heading-section text-xl sm:text-2xl text-slate-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      size={24}
                      className="text-slate-400 group-hover:text-blue-600 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0 ml-4"
                    />
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="skill-tag text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
