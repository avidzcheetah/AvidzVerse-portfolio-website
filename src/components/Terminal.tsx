import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

const Terminal = () => {
  const [showCursor, setShowCursor] = useState(true);
  const [displayedText, setDisplayedText] = useState('');
  
  const userInfo = `
avidz@avidzVerse:~$ whoami

USER INFORMATION
---------------
Name: Avidu Dasun Sankalpa Witharana
Alias: Avidz
Status: Undergraduate
University: University of Jaffna
Field: Computer Engineering

EDUCATION
---------
- BSc. Engineering (Computer) - University of Jaffna
- BSc. IT & Cybersecurity - PSB Academy
- Founding Chairman - Cybersecurity Students' Association

CONTACT
-------
Email: avidu@pm.me
Phone: +94 755786246 / +94 710171111
Location: Jaffna, Sri Lanka

SOCIAL LINKS
-----------
GitHub: github.com/avidzcheetah
LinkedIn: linkedin.com/in/avidz
Facebook: facebook.com/avidzxv
Instagram: instagram.com/avidz_cheetah
YouTube: youtube.com/@avidzxv

avidz@avidzVerse:~$ █`;

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < userInfo.length) {
        setDisplayedText(userInfo.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 20);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section id="terminal" className="py-20 bg-[var(--color-surface)]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-[var(--color-text)]">Terminal</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl">
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-800">
              <TerminalIcon className="w-4 h-4 text-gray-400" />
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="p-6 font-mono text-sm text-green-400 whitespace-pre-wrap">
              {displayedText}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terminal;