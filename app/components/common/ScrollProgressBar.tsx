'use client';

import { useState, useEffect } from 'react';

export default function ScrollProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      // Avoid division by zero on pages that don't scroll
      if (docHeight > 0) {
        const scrolled = (scrollTop / docHeight) * 100;
        setScrollPercentage(scrolled);
      } else {
        setScrollPercentage(0);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Set initial scroll percentage in case the page loads scrolled down
    handleScroll(); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full pointer-events-none"
      style={{
        height: '6px',
        zIndex: 9999,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      }}
    >
      <div
        className="h-full bg-brand-saffron"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
}
