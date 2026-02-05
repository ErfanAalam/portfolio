'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { useRef } from 'react';
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
    live:'https://play.google.com/store/apps/details?id=com.myfootfirst&hl=en_IN&pli=1'
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
    live:'https://xegality.com'
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
    live:'https://play.google.com/store/apps/details?id=com.aiexch.amigo&hl=en_IN'
  },
];

// 3D Card Component
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['5deg', '-5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-5deg', '5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${
        !isEven ? 'md:grid-flow-dense' : ''
      }`}
    >
      {/* Image - Modern card with hover effect */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className={`relative group ${!isEven ? 'md:col-start-2' : ''}`}
      >
        <div className="relative rounded-3xl overflow-hidden shadow-2xl 
          bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10
          p-1 backdrop-blur-sm">
          <div className="relative rounded-2xl overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover aspect-video"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full"
              transition={{ duration: 0.6 }}
            />
          </div>
        </div>
        
        {/* Floating badge */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
          className="absolute -top-4 -right-4 w-16 h-16 rounded-full
            bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]
            flex items-center justify-center shadow-lg z-10"
        >
          <span className="text-white font-bold text-lg">{index + 1}</span>
        </motion.div>
      </motion.div>

      {/* Content - Modern card design */}
      <motion.div
        className={`space-y-6 ${!isEven ? 'md:col-start-1 md:row-start-1' : ''}`}
        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
      >
        {/* Title & Subtitle */}
        <div>
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-2
              bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]
              bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
          >
            {project.title}
          </motion.h3>
          <p className="text-sm uppercase tracking-widest text-[var(--color-primary)] font-semibold mb-4">
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-[var(--text-secondary)] leading-relaxed text-base">
          {project.description}
        </p>

        {/* Highlights - Modern list */}
        <div className="space-y-3">
          {project.highlights.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.1 }}
              className="flex items-start gap-3 p-3 rounded-xl
                bg-[var(--bg-card)]/50 backdrop-blur-sm
                border border-[var(--border-light)]
                hover:border-[var(--color-primary)]/30
                transition-all group"
            >
              <motion.div
                className="mt-1 w-2 h-2 rounded-full
                  bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]
                  flex-shrink-0"
                whileHover={{ scale: 1.5 }}
              />
              <span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                {point}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack - Animated icons */}
        <div className="flex flex-wrap gap-3">
          {project.tech.map((Icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.2, rotate: -10 }}
              transition={{ 
                delay: index * 0.1 + i * 0.1,
                type: 'spring', 
                stiffness: 300, 
                damping: 20 
              }}
              className="p-3 rounded-xl
                bg-[var(--bg-card)]/70 backdrop-blur-sm
                border border-[var(--border-light)]
                hover:border-[var(--color-primary)]/50
                hover:shadow-lg hover:shadow-[var(--color-primary)]/20
                cursor-default"
            >
              <Icon className="text-2xl text-[var(--color-primary)]" />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        {project.live && (
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
              bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]
              text-white font-medium text-sm
              shadow-lg shadow-[var(--color-primary)]/30
              hover:shadow-xl hover:shadow-[var(--color-primary)]/50
              transition-all group text-[var(--text-primary)] dark:text-black"
          >
            View Live Project
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FiExternalLink className="group-hover:rotate-45 transition-transform" />
            </motion.span>
          </motion.a>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 bg-[var(--bg-secondary)] overflow-hidden">
      {/* Animated background gradients */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full
          bg-gradient-to-r from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20
          blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full
          bg-gradient-to-l from-[var(--color-secondary)]/20 to-[var(--color-primary)]/20
          blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold pb-6
              bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)]
              bg-clip-text text-transparent bg-[length:200%_auto]
              animate-[gradient_3s_ease_infinite]"
            style={{
              backgroundSize: '200%',
            }}
          >
            Selected Projects
          </motion.h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
            Real-world applications built for scale, performance, and business impact.
          </p>
          
          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-8 h-1
              bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent"
          />
        </motion.div>

        {/* Projects */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
}
