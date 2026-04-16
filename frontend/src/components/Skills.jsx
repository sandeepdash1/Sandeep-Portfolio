import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'J2EE'],
    },
    {
      title: 'Frameworks',
      skills: ['Spring Boot', 'Spring MVC 5', 'Hibernate5', 'Microservices', 'REST API', 'Apache Camel', 'Struts', 'Kafka'],
    },
    {
      title: 'Web / Enterprise',
      skills: ['HTML', 'JavaScript', 'Angular', 'Postman'],
    },
    {
      title: 'RDBMS',
      skills: ['MySQL', 'Oracle', 'DB2', 'RDS'],
    },
    {
      title: 'Web Servers',
      skills: ['Tomcat 6/7/8/9', 'Liberty'],
    },
    {
      title: 'Cloud Platforms',
      skills: ['AWS', 'Azure'],
    },
    {
      title: 'IDE',
      skills: ['Eclipse', 'Visual Studio Code', 'STS', 'RAD', 'IntelliJ IDEA'],
    },
    {
      title: 'Version Control',
      skills: ['Git', 'SVN'],
    },
    {
      title: 'Build / Deployment',
      skills: ['Maven'],
    },
    {
      title: 'Monitoring Tools',
      skills: ['Splunk', 'Lens'],
    },
    {
      title: 'Operating Systems',
      skills: ['Windows', 'Ubuntu 16.04', 'Linux'],
    },
    {
      title: 'Agile Methodologies',
      skills: ['Agile/Scrum', 'JIRA'],
    },
  ];

  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="py-24 lg:py-32 px-6 lg:px-8 bg-skills"
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
          <p className="mono-label mb-4 text-purple-600">Skills & Expertise</p>
          <h2 className="heading-section text-3xl sm:text-4xl text-slate-900 max-w-2xl">
            Enterprise-grade technologies and frameworks
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl">
            Deep expertise in Java ecosystem, cloud platforms, and modern development practices.
          </p>
        </motion.div>

        {/* Skills Bento Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.05 }}
              data-testid={`skill-category-${categoryIndex}`}
              className="bento-item p-6 shadow-sm"
            >
              <h3 className="mono-label mb-4 text-purple-600">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    data-testid={`skill-${skill.toLowerCase().replace(/[\s/]+/g, '-')}`}
                    className="skill-tag"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
