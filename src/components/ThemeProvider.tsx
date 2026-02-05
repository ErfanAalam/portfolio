'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { ThemeTransition } from './ThemeTransition';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize theme from localStorage or system preference
  const getInitialTheme = (): Theme => {
    if (typeof window === 'undefined') return 'light';
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState<Theme>(() => {
    // Only access window on client side
    if (typeof window === 'undefined') return 'light';
    return getInitialTheme();
  });

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pendingTheme, setPendingTheme] = useState<Theme | null>(null);

  // Apply theme to DOM on initial load only
  useEffect(() => {
    const root = document.documentElement;
    
    // Apply the theme class on initial load
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Save to localStorage on initial load
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // localStorage might not be available
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run on mount

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    // Start transition animation
    setPendingTheme(newTheme);
    setIsTransitioning(true);
    
    // Apply theme change when splash is fully covering the screen
    // This prevents blinking and ensures smooth transition
    setTimeout(() => {
      const root = document.documentElement;
      if (newTheme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      setTheme(newTheme);
      
      // Save to localStorage
      try {
        localStorage.setItem('theme', newTheme);
      } catch {
        // localStorage might not be available
      }
      
      // Start exit animation shortly after theme change
      setTimeout(() => {
        setIsTransitioning(false);
      }, 200); // Start exit 200ms after theme change
    }, 500); // Change theme at ~62% of 0.8s animation (when splash fully covers screen)
  };

  const handleTransitionComplete = () => {
    // Immediately remove transition state
    setIsTransitioning(false);
    setPendingTheme(null);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
      {pendingTheme && (
        <ThemeTransition
          isTransitioning={isTransitioning}
          newTheme={pendingTheme}
          onComplete={handleTransitionComplete}
        />
      )}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

