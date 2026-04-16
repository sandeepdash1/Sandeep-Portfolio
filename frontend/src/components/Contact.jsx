import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await axios.post(`${BACKEND_URL}/api/contact`, formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
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

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSubmitted ? (
              <div
                data-testid="form-success"
                className="bento-item p-8 lg:p-12 flex flex-col items-center justify-center text-center h-full shadow-sm"
              >
                <CheckCircle size={48} className="text-green-500 mb-4" />
                <h3 className="text-slate-900 text-xl font-semibold mb-2">
                  Message Sent!
                </h3>
                <p className="text-slate-600">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  data-testid="send-another-btn"
                  className="mt-6 btn-secondary text-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                data-testid="contact-form"
                className="bento-item p-8 lg:p-12 shadow-sm"
              >
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="mono-label block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      data-testid="input-name"
                      className="form-input"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mono-label block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      data-testid="input-email"
                      className="form-input"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mono-label block mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      data-testid="input-message"
                      className="form-input resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {error && (
                    <p data-testid="form-error" className="text-red-500 text-sm">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    data-testid="submit-btn"
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
