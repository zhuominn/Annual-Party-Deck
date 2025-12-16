import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface SlideLayoutProps {
  children: React.ReactNode;
  theme: 'yellow' | 'pink' | 'blue' | 'purple';
  footerText?: string;
  showConfetti?: boolean;
}

const themeStyles = {
  yellow: 'bg-popYellow text-black selection:bg-black selection:text-popYellow',
  pink: 'bg-popPink text-white selection:bg-white selection:text-popPink',
  blue: 'bg-popBlue text-black selection:bg-black selection:text-popBlue',
  purple: 'bg-popPurple text-white selection:bg-white selection:text-popPurple',
};

export const SlideLayout: React.FC<SlideLayoutProps> = ({ children, theme, footerText }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 1.05, y: -20 }}
      transition={{ duration: 0.4, type: "spring" }}
      className={clsx(
        "w-full h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden",
        themeStyles[theme]
      )}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-4 border-current rounded-full opacity-20 animate-bounce-slow" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border-8 border-current rotate-12 opacity-20" />
      <div className="absolute top-1/2 left-5 w-8 h-8 bg-current rounded-full opacity-10" />
      <div className="absolute top-20 right-1/4 text-9xl opacity-10 font-black select-none pointer-events-none">
        PARTY
      </div>

      {/* Main Card Container */}
      <div className="relative z-10 w-full max-w-6xl aspect-video bg-white text-black border-4 border-black shadow-neo rounded-3xl flex flex-col overflow-hidden">
        {children}
      </div>

      {/* Footer / Branding */}
      <div className="absolute bottom-4 text-sm font-bold opacity-50 uppercase tracking-widest">
        {footerText || "2025 Annual Party • Press SPACE for Next"}
      </div>
    </motion.div>
  );
};
