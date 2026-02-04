'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUpRight } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/ErfanAalam', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/erfanaalam/', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://x.com/ErfanAalam03', label: 'Twitter' },
    { icon: FiMail, href: 'mailto:erfankhansiwani@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative overflow-hidden bg-[var(--bg-primary)] px-6 pt-24 pb-10">
      {/* Animated gradient divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-full h-[1px] origin-left bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent"
      />

      <div className="container mx-auto max-w-6xl">
        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 rounded-2xl border border-[var(--border-light)] bg-[var(--bg-card)]/70 backdrop-blur-xl p-10 text-center shadow-xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary)] ">
            Have a project in mind?
          </h3>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mb-6">
            I help startups and businesses build high-quality web & mobile products.
            Let’s turn your idea into something real.
          </p>

          <a
            href="#contact"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white dark:text-black font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Let’s Work Together
            <FiArrowUpRight />
          </a>
        </motion.div>

        {/* Footer main grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent mb-4">
              Erfan Aalam
            </h4>
            <p className="text-[var(--text-tertiary)] leading-relaxed">
              Freelance Full-Stack Developer crafting scalable web & mobile applications
              with clean code and modern UX.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h5 className="text-lg font-semibold mb-4 text-[var(--text-primary)]">
              Explore
            </h5>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Process', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-[var(--text-tertiary)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h5 className="text-lg font-semibold mb-4 text-[var(--text-primary)]">
              Connect
            </h5>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-11 h-11 rounded-xl bg-[var(--bg-card)] border border-[var(--border-light)] flex items-center justify-center text-[var(--text-primary)] hover:bg-gradient-to-r hover:from-[var(--color-primary)] hover:to-[var(--color-secondary)] hover:text-white transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[var(--border-light)] pt-6 text-center text-sm text-[var(--text-tertiary)]">
          © {currentYear} Erfan Aalam. Built with care & clean code.
        </div>
      </div>
    </footer>
  );
}
