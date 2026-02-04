'use client';

import { motion } from 'framer-motion';
import { FiMail, FiSend, FiCheckCircle, FiPhone } from 'react-icons/fi';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--color-primary)]/10 blur-3xl rounded-full" />

      <div className="relative container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
            Let’s Build Something Great
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-[var(--text-secondary)]">
            Have an idea, product, or problem to solve?  
            I’d love to hear about it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <h3 className="text-3xl font-semibold text-[var(--text-primary)]">
              What happens next?
            </h3>

            <ul className="space-y-6">
              {[
                'I’ll review your requirements carefully',
                'We’ll discuss scope, timeline & budget',
                'You’ll get a clear plan before any work starts',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 text-[var(--text-secondary)]"
                >
                  <FiCheckCircle className="text-[var(--color-primary)] mt-1" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="pt-6">
              <p className="text-sm text-[var(--text-tertiary)]">
                Prefer email?
              </p>
              <a
                href="mailto:erfankhansiwani@gmail.com"
                className="inline-flex items-center gap-2 mt-2 text-[var(--color-primary)] font-medium hover:underline"
              >
                <FiMail />
                erfankhansiwani@gmail.com
              </a>
            </div>
            <div className="pt-6">
              <p className="text-sm text-[var(--text-tertiary)]">
                Prefer WhatsApp?
              </p>
              <a
                href="https://wa.me/918030647364"
                className="inline-flex items-center gap-2 mt-2 text-[var(--color-primary)] font-medium hover:underline"
              >
                <FiPhone />+91 8030647364
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-[var(--bg-card)] md:p-10 rounded-2xl shadow-xl"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-[var(--text-secondary)]">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-medium)] focus:ring-2 focus:ring-[var(--color-primary)] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-[var(--text-secondary)]">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-medium)] focus:ring-2 focus:ring-[var(--color-primary)] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-[var(--text-secondary)]">
                  Project Details
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-medium)] focus:ring-2 focus:ring-[var(--color-primary)] outline-none resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white dark:text-black font-semibold flex items-center justify-center gap-2 shadow-lg"
              >
                <FiSend />
                Send Message
              </motion.button>

              <p className="text-xs text-center text-[var(--text-tertiary)]">
                I usually respond within 24 hours.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
