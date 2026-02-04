'use client';

import { motion } from 'framer-motion';
import { FiSearch, FiPenTool, FiCode, FiCheckCircle } from 'react-icons/fi';

const steps = [
  {
    step: '01',
    title: 'Understanding the Problem',
    description:
      'I start by deeply understanding your idea, business goals, and users. I ask the right questions to avoid assumptions and clarify scope early.',
    icon: FiSearch,
  },
  {
    step: '02',
    title: 'Planning & System Design',
    description:
      'Before writing code, I design the architecture, data flow, and UI structure. This ensures scalability, performance, and fewer changes later.',
    icon: FiPenTool,
  },
  {
    step: '03',
    title: 'Development & Iteration',
    description:
      'I build in small, testable iterations with regular updates. You see progress early and can give feedback anytime.',
    icon: FiCode,
  },
  {
    step: '04',
    title: 'Delivery, Testing & Support',
    description:
      'After testing and polishing, I deliver clean, documented code. I also provide post-delivery support and guidance if needed.',
    icon: FiCheckCircle,
  },
];

export default function HowIWork() {
  return (
    <section id="process" className="py-28 px-6 bg-[var(--bg-secondary)]">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
            How I Work
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-[var(--text-secondary)]">
            A clear, transparent process that keeps projects on track and clients confident.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-12">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative p-8 rounded-2xl bg-[var(--bg-card)] shadow-lg hover:shadow-xl transition"
            >
              {/* Step number */}
              <span className="absolute -top-4 -right-4 text-6xl font-bold text-[var(--color-primary)]/10">
                {item.step}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 mb-6 rounded-xl flex items-center justify-center bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]">
                <item.icon className="text-white text-2xl" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold mb-3 text-[var(--text-primary)]">
                {item.title}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-20 text-[var(--text-secondary)] text-lg"
        >
          Clear communication. Predictable delivery. No surprises.
        </motion.p>
      </div>
    </section>
  );
}
