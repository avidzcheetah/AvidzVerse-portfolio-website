import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'cyberpunk' | 'ocean' | 'forest';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const themes = {
  light: {
    primary: 'blue',
    background: 'gray',
    text: 'gray',
  },
  dark: {
    primary: 'blue',
    background: 'gray',
    text: 'gray',
  },
  cyberpunk: {
    primary: 'cyan',
    background: 'purple',
    text: 'pink',
  },
  ocean: {
    primary: 'teal',
    background: 'blue',
    text: 'sky',
  },
  forest: {
    primary: 'emerald',
    background: 'green',
    text: 'lime',
  },
} as const;

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as Theme) || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
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