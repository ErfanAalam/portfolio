'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
  FiGithub,
} from 'react-icons/fi';
import { useTheme } from './ThemeProvider';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Initialize mounted state to prevent hydration mismatch
  // This is necessary because theme icon depends on client-side state
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Set mounted after hydration to prevent hydration mismatch
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled
          ? 'bg-[var(--bg-primary)]/70 dark:bg-[var(--bg-primary)]/70 backdrop-blur-xl shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="text-xl md:text-2xl font-display font-bold tracking-tight
              bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]
              bg-clip-text text-transparent"
          >
            Erfan Aalam
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover="hover"
                className="relative text-[var(--text-primary)] dark:text-[var(--text-secondary)] font-medium"
              >
                {item.name}
                <motion.span
                  variants={{
                    hover: { width: '100%' },
                  }}
                  initial={{ width: 0 }}
                  className="absolute left-0 -bottom-1 h-[2px]
                    bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-secondary-light)]"
                />
              </motion.a>
            ))}

            {/* GitHub */}
            <motion.a
              href="https://github.com/ErfanAalam"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              className="text-[var(--text-primary)] dark:text-[var(--text-secondary)]"
              aria-label="GitHub"
            >
              <FiGithub size={22} />
            </motion.a>

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-xl
                bg-[var(--gray-100)] dark:bg-[var(--gray-500)]
                hover:bg-[var(--gray-200)] dark:hover:bg-[var(--gray-700)]
                transition"
            >
              {mounted ? (theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />) : <FiMoon size={18} />}
            </motion.button>
          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-[var(--gray-100)] dark:bg-[var(--bg-card)]"
            >
              {mounted ? (theme === 'light' ? <FiMoon /> : <FiSun />) : <FiMoon />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[var(--text-primary)] dark:text-[var(--text-secondary)]"
            >
              {isMobileMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-6 rounded-2xl
                bg-white/80 dark:bg-gray-900/80
                backdrop-blur-xl shadow-lg p-6 space-y-4"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium
                    text-[var(--text-primary)] dark:text-[var(--text-secondary)]"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="https://github.com/ErfanAalam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2
                  text-[var(--text-primary)] dark:text-[var(--text-secondary)] font-medium"
              >
                <FiGithub />
                GitHub
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
