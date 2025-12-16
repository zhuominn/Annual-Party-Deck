import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SLIDES } from './data';
import { SlideManager } from './components/SlideManager';
import { ChevronRight, ChevronLeft, Maximize2 } from 'lucide-react';

const App = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, SLIDES.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowRight', 'Space', 'Enter'].includes(e.code)) {
        nextSlide();
      } else if (['ArrowLeft', 'Backspace'].includes(e.code)) {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const progress = ((currentSlideIndex + 1) / SLIDES.length) * 100;

  return (
    <div className="w-full h-screen bg-[#1a1a1a] flex flex-col items-center justify-center overflow-hidden">
      
      {/* Slide Container */}
      <AnimatePresence mode="wait">
        <div key={currentSlideIndex} className="w-full h-full">
          <SlideManager slide={SLIDES[currentSlideIndex]} />
        </div>
      </AnimatePresence>

      {/* Control UI (Hover to see) */}
      <div className="fixed bottom-0 left-0 w-full h-16 hover:opacity-100 opacity-0 transition-opacity duration-300 flex items-center justify-between px-8 bg-black/50 text-white backdrop-blur-sm z-50">
        <div className="flex gap-4">
          <button onClick={prevSlide} className="p-2 hover:bg-white/20 rounded-full">
            <ChevronLeft />
          </button>
          <span className="self-center font-mono">
             {currentSlideIndex + 1} / {SLIDES.length}
          </span>
          <button onClick={nextSlide} className="p-2 hover:bg-white/20 rounded-full">
            <ChevronRight />
          </button>
        </div>

        <div className="w-1/3 h-2 bg-gray-700 rounded-full overflow-hidden mx-4">
           <div 
             className="h-full bg-yellow-400 transition-all duration-300 ease-out" 
             style={{ width: `${progress}%` }} 
           />
        </div>

        <button onClick={toggleFullScreen} className="p-2 hover:bg-white/20 rounded-full">
          <Maximize2 />
        </button>
      </div>
    </div>
  );
};

export default App;
