import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sandeepdash108@gmail.com',
      href: 'mailto:sandeepdash108@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+44-7799557005',
      href: 'tel:+447799557005',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Coventry, UK',
      href: '#',
    },
  ];

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-24 lg:py-32 px-6 lg:px-8 bg-contact"
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
          <p className="mono-label mb-4 text-amber-700">Get In Touch</p>
          <h2 className="heading-section text-3xl sm:text-4xl text-slate-900 max-w-2xl">
            Let's Work Together
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl">
            Looking for a Senior Software Engineer with proven expertise in Java, Spring Boot, and enterprise solutions? Let's discuss how I can contribute to your team's success.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-xl"
        >
          <h3 className="text-slate-900 text-xl font-semibold mb-8">Direct Contact</h3>
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                data-testid={`contact-${item.label.toLowerCase()}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-sm text-slate-500 group-hover:text-blue-600 group-hover:shadow-md transition-all">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="mono-label text-xs mb-1">{item.label}</p>
                  <p className="text-slate-900 group-hover:text-blue-600 transition-colors font-medium">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
