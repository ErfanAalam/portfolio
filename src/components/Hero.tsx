'use client';

import { motion } from 'framer-motion';
import {
  FiDownload,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from 'react-icons/fi';

export default function Hero() {
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/ErfanAalam', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/erfanaalam/', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://x.com/ErfanAalam03', label: 'Twitter' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden"
    >
      {/* ===== Animated Background ===== */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Grid */}
        <motion.div
          initial={{ backgroundPosition: '0% 0%' }}
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="
      absolute inset-0
      bg-[linear-gradient(to_right,rgba(120,120,120,0.08)_1px,transparent_1px),
          linear-gradient(to_bottom,rgba(120,120,120,0.08)_1px,transparent_1px)]
      bg-[size:40px_40px]
    "
        />

        {/* Gradient Overlay */}
        <div
          className="
      absolute inset-0
      bg-gradient-to-b
      from-transparent
      via-white/60
      to-white
      dark:via-black/40
      dark:to-black
    "
        />

        {/* Soft Glow */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="
      absolute top-1/4 left-1/3
      w-96 h-96
      bg-blue-500/20
      blur-3xl
      rounded-full
    "
        />
      </div>

      {/* ===== Content ===== */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left"
        >
          <p className="text-sm uppercase tracking-widest text-[var(--text-secondary)] mb-3">
            Hi, I’m
          </p>

          <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight
            bg-gradient-to-r from-[var(--color-primary)]
            via-[var(--color-secondary)]
            to-[var(--color-accent)]
            bg-clip-text text-transparent"
          >
            Erfan Aalam
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-[var(--text-secondary)] max-w-xl">
            Full Stack Developer crafting fast, scalable, and
            visually polished web experiences.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3
                bg-gradient-to-r from-[var(--color-primary)]
                to-[var(--color-secondary)]
                text-white dark:text-black rounded-xl font-semibold shadow-lg"
            >
              <FiMail />
              Get In Touch
            </motion.a>

            <motion.a
              href="/ErfanAalam - FullStack Developer.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3
                rounded-xl border border-[var(--border-medium)]
                text-[var(--text-primary)]
                hover:border-[var(--color-primary)]
                transition"
            >
              <FiDownload />
              Resume
            </motion.a>
          </div>

          {/* Socials */}
          <div className="mt-10 flex gap-6 justify-center md:justify-start">
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 6 }}
                className="text-[var(--text-secondary)]
                  hover:text-[var(--color-primary)] transition"
              >
                <social.icon size={22} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Floating Code Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden md:block"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative bg-[var(--bg-card)]/80 backdrop-blur-xl
              border border-[var(--border-medium)]
              rounded-2xl p-6 shadow-2xl"
          >
            <pre className="text-sm text-left text-[var(--text-secondary)] font-mono">
              {`const developer = {
  name: "Erfan Aalam",
  stack: ["Next.js", "Node", "Flutter"],
  focus: "Clean UI & Scalable Systems",
  coffee: true,
};

export default developer;`}
            </pre>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
