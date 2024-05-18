import confetti from 'canvas-confetti';
import { useEffect } from 'react';

const Confetti = () => {
  useEffect(() => {
    const end = Date.now() + 5 * 1000; // Duración del confeti (5 segundos)

    const colors = ['#FF69B4', '#FFD700'];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }, []);

  return null;
};

export default Confetti;
