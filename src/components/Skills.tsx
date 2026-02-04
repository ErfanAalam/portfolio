'use client';

import { motion } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFlutter,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiAmazon,
  SiFirebase,
  SiGit,
  SiGithub,
} from 'react-icons/si';

const stacks = [
  {
    title: 'Product UI & Experience',
    description:
      'Building fast, accessible, and scalable user interfaces with modern frameworks.',
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Flutter', icon: SiFlutter },
    ],
  },
  {
    title: 'Backend & APIs',
    description:
      'Designing robust APIs, handling authentication, data flow, and performance.',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Supabase', icon: SiSupabase },
    ],
  },
  {
    title: 'Cloud, DevOps & Delivery',
    description:
      'Deploying, scaling, and maintaining production applications.',
    skills: [
      { name: 'AWS', icon: SiAmazon },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-[var(--bg-primary)]">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
            My Technical Stack
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-[var(--text-secondary)]">
            A production-focused toolkit I use to design, build, and scale real-world applications.
          </p>
        </motion.div>

        {/* Skill Stacks */}
        <div className="space-y-20">
          {stacks.map((stack, i) => (
            <motion.div
              key={stack.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              {/* animated divider */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.8 }}
                className="h-[2px] mb-6 bg-gradient-to-r from-[var(--color-primary)] to-transparent"
              />

              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* text */}
                <div className="md:col-span-1">
                  <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-2">
                    {stack.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {stack.description}
                  </p>
                </div>

                {/* skills */}
                <div className="md:col-span-2 flex flex-wrap gap-4">
                  {stack.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08 }}
                      whileHover={{ y: -6 }}
                      className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[var(--bg-card)] shadow-md hover:shadow-xl transition"
                    >
                      <skill.icon className="text-xl text-[var(--color-primary)]" />
                      <span className="font-medium text-[var(--text-primary)]">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
