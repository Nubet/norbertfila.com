import { useEffect, useRef, useState, ReactNode } from 'react';
import styles from './ScrollReveal.module.css';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function ScrollReveal({ children, delay = 0, className = '' }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Kiedy element wchodzi w obszar widzenia
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Przestajemy obserwować, aby animacja wykonała się tylko raz
            if (domRef.current) {
              observer.unobserve(domRef.current);
            }
          }
        });
      },
      // Odpala animację, gdy element jest 10% powyżej dolnej krawędzi ekranu
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`${styles.reveal} ${isVisible ? styles.visible : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
