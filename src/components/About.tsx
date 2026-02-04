'use client';

import { motion } from 'framer-motion';
import { FiBriefcase, FiCode, FiSmartphone } from 'react-icons/fi';

const stats = [
  { label: 'Years Experience', value: '1+' },
  { label: 'Projects Delivered', value: '10+' },
  { label: 'Tech Stack', value: 'Full Stack' },
];

const skills = [
  'Next.js',
  'React',
  'Node.js',
  'PostgreSQL',
  'Supabase',
  'Android',
  'iOS',
  'Flutter',
  'REST APIs',
  'AWS',
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 overflow-hidden bg-[var(--bg-secondary)]"
    >
      {/* subtle animated gradient */}
      <motion.div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] opacity-20 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold pb-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
            Building Products, Not Just Code
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-[var(--text-secondary)]">
            Full-stack & mobile app developer helping startups and businesses
            turn ideas into fast, scalable, real-world products.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 max-w-3xl mx-auto mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-[var(--text-primary)]">
                {stat.value}
              </div>
              <div className="text-sm text-[var(--text-secondary)]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience timeline */}
        <div className="max-w-4xl mx-auto space-y-12 ">
          {[
            {
              icon: FiBriefcase,
              title: 'Senior Software Developer',
              text: 'Currently working in an IT company, building production-grade web and mobile applications.',
            },
            {
              icon: FiCode,
              title: 'Full Stack Expertise',
              text: 'End-to-end development using modern frontend, backend, and database technologies.',
            },
            {
              icon: FiSmartphone,
              title: 'Mobile App Development',
              text: 'Android & iOS apps with smooth UX, clean architecture, and real-world scalability.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex gap-6 items-start"
            >
              <div className="p-4 rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white">
                <item.icon size={22} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-1">
                  {item.title}
                </h3>
                <p className="text-[var(--text-secondary)]">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating skills */}
        {/* <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                delay: i * 0.05,
                duration: 2 + (i % 3),
                repeat: Infinity,
              }}
              className="px-4 py-2 rounded-full bg-[var(--bg-card)] shadow text-sm text-[var(--text-primary)]"
            >
              {skill}
            </motion.span>
          ))}
        </div> */}
      </div>
    </section>
  );
}
