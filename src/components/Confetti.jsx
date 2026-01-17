import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function Confetti({ active = false, onComplete }) {
  useEffect(() => {
    if (!active) return;
    
    const duration = 2000;
    const animationEnd = Date.now() + duration;
    
    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      
      if (timeLeft <= 0) {
        clearInterval(interval);
        if (onComplete) onComplete();
        return;
      }
      
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#7cffd1', '#7ca9ff', '#ffd166', '#ff6b6b']
      });
      
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#7cffd1', '#7ca9ff', '#ffd166', '#ff6b6b']
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, [active, onComplete]);
  
  return null;
}