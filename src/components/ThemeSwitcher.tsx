import React from 'react';
import { Sun, Moon, Laptop2, Waves, Trees } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const themeOptions = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
    { value: 'cyberpunk', icon: Laptop2, label: 'Cyberpunk' },
    { value: 'ocean', icon: Waves, label: 'Ocean' },
    { value: 'forest', icon: Trees, label: 'Forest' },
  ] as const;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="bg-white dark:bg-gray-800 rounded-full shadow-lg p-2 flex gap-2"
      >
        {themeOptions.map(({ value, icon: Icon, label }) => (
          <button
            key={value}
            onClick={() => setTheme(value)}
            className={`p-2 rounded-full transition-colors ${
              theme === value
                ? 'bg-blue-500 text-white'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            title={label}
          >
            <Icon size={20} />
          </button>
        ))}
      </motion.div>
    </div>
  );
};

export default ThemeSwitcher;