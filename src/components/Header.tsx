'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
  FiGithub,
  FiHome,
  FiUser,
  FiCode,
  FiBriefcase,
  FiMail,
} from 'react-icons/fi';
import { useTheme } from './ThemeProvider';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(72);
  const headerRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!isMobileMenuOpen) setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!headerRef.current) return;
    const update = () =>
      setHeaderHeight(headerRef.current!.getBoundingClientRect().height);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [isScrolled]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Home', href: '#home', icon: FiHome },
    { name: 'About', href: '#about', icon: FiUser },
    { name: 'Skills', href: '#skills', icon: FiCode },
    { name: 'Projects', href: '#projects', icon: FiBriefcase },
    { name: 'Contact', href: '#contact', icon: FiMail },
  ];

  return (
    <>
      {/* HEADER */}
      <motion.header
        ref={headerRef}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: isScrolled && !isMobile ? 12 : 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all ${
          isScrolled
            ? 'bg-[var(--bg-primary)]/80 backdrop-blur-2xl shadow-lg md:w-[60vw] md:mx-auto md:rounded-full'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a
              href="#home"
              className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent"
            >
              Erfan Aalam
            </a>

            {/* DESKTOP */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative font-medium text-[var(--text-primary)]"
                >
                  {item.name}
                </a>
              ))}

              <a href="https://github.com/ErfanAalam" target="_blank" className="text-[var(--text-primary)]">
                <FiGithub size={22} />
              </a>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-[var(--gray-100)] dark:bg-[var(--gray-700)]"
              >
                {mounted && theme === 'dark' ? <FiSun /> : <FiMoon />}
              </button>
            </div>

            {/* MOBILE */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-[var(--gray-100)] dark:bg-[var(--gray-700)]"
              >
                {mounted && theme === 'dark' ? <FiSun /> : <FiMoon />}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                className="p-2 rounded-lg bg-[var(--gray-100)] dark:bg-[var(--gray-700)]"
              >
                {isMobileMenuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* MENU CARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.25 }}
              className="fixed z-50 left-4 right-4 rounded-3xl
                bg-[var(--bg-card)]/90 backdrop-blur-2xl
                shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)]
                border border-white/10 overflow-hidden"
              style={{ top: headerHeight + 12 }}
            >
              {/* HANDLE */}
              <div className="flex justify-center py-3">
                <div className="h-1.5 w-10 rounded-full bg-white/20" />
              </div>

              <div className="px-4 pb-4 space-y-2">
                {navItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-4 px-5 py-4 rounded-2xl
                        hover:bg-white/5 transition text-[var(--text-primary)]"
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center
                        bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20">
                        <Icon size={18} />
                      </div>
                      <span className="font-semibold">{item.name}</span>
                    </motion.a>
                  );
                })}

                {/* GITHUB */}
                <a
                  href="https://github.com/ErfanAalam"
                  target="_blank"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between px-5 py-4 rounded-2xl
                    bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 text-[var(--text-primary)]"
                >
                  <div className="flex items-center gap-3">
                    <FiGithub size={18} />
                    <span className="font-medium">GitHub</span>
                  </div>
                  <span className="opacity-60">↗</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
