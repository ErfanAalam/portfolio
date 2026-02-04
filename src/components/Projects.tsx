'use client';

import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFlutter,
  SiFirebase,
  SiPostgresql,
  SiMongodb,
  SiAmazon,
  SiPython,
} from 'react-icons/si';

const projects = [
  {
    title: 'MyFootFirst',
    subtitle: 'Foot Scanning & E-Commerce Mobile App',
    description:
      'A cross-platform mobile application focused on biometric foot scanning, personalized measurements, and e-commerce workflows for footwear retail.',
    highlights: [
      'Computer Vision based foot measurement',
      'Firebase Auth, Firestore & Cloud Functions',
      'Retail CRM & Admin dashboard integration',
    ],
    tech: [SiReact, SiPython, SiFirebase],
    image: '/my-foot-first.jpeg',
  },
  {
    title: 'Xegality',
    subtitle: 'Legal law firm management system',
    description:
      'A legal law firm management system focused on client management, case management, and billing.',
    highlights: [
      'Client management',
      'Case management',
      'Billing',
    ],
    tech: [SiReact, SiNextdotjs, SiPostgresql],
    image: '/xegality.jpeg',
  },
  {
    title: 'Eyeric',
    subtitle: 'Production E-Commerce Platform',
    description:
      'A full-scale e-commerce platform for eyewear with prescription lens logic, secure payments, shipping automation, and admin control.',
    highlights: [
      'Razorpay (Online + COD) & Shiprocket',
      'Advanced Admin Dashboard',
      'AWS S3 + Supabase (PostgreSQL)',
    ],
    tech: [SiNextdotjs, SiPostgresql, SiAmazon],
    image: '/eyeric.png',
    live: 'https://eyeric.in',
  },
  {
    title: 'CricStock11',
    subtitle: 'Real-Time Fantasy Trading Platform',
    description:
      'A fantasy cricket platform that simulates a stock market where player values change in real time based on live match data.',
    highlights: [
      'Live WebSocket-based price updates',
      'Cricket webhook APIs & valuation engine',
      'High-frequency real-time transactions',
    ],
    tech: [SiReact, SiNodedotjs, SiMongodb],
    image: '/crickstock.jpeg',
  },
  {
    title: 'Amigo',
    subtitle: 'Real-Time Chat & VoIP App',
    description:
      'A scalable real-time chat and calling application with secure messaging, analytics, and admin-level monitoring.',
    highlights: [
      'WebRTC-based audio/video calling',
      'High-volume real-time messaging',
      'Custom admin dashboard & analytics',
    ],
    tech: [SiFlutter, SiNodedotjs],
    image: '/amigo.png',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-[var(--bg-secondary)]">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
            Selected Projects
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-[var(--text-secondary)]">
            Real-world applications built for scale, performance, and business impact.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-3xl font-semibold text-[var(--text-primary)] mb-2">
                  {project.title}
                </h3>
                <p className="text-sm uppercase tracking-wide text-[var(--color-primary)] mb-4">
                  {project.subtitle}
                </p>
                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((point, i) => (
                    <li
                      key={i}
                      className="text-sm text-[var(--text-secondary)] flex items-start gap-2"
                    >
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech */}
                <div className="flex gap-4 items-center mb-6">
                  {project.tech.map((Icon, i) => (
                    <Icon
                      key={i}
                      className="text-2xl text-[var(--color-primary)]"
                    />
                  ))}
                </div>

                {/* CTA */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:underline"
                  >
                    View Live Project <FiExternalLink />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
