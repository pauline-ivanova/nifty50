'use client';

import { useEffect, useRef } from 'react';
import { setInGlossarySection } from './glossaryState';

interface GlossarySectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default function GlossarySection({ children, id, className }: GlossarySectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setInGlossarySection(true);
    return () => {
      setInGlossarySection(false);
    };
  }, []);

  return (
    <div ref={sectionRef} id={id} className={className}>
      {children}
    </div>
  );
}


