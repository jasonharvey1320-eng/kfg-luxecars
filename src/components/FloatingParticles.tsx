import { motion } from 'framer-motion';
import { useMemo } from 'react';

const FloatingParticles = () => {
  // Utiliser useMemo pour calculer les particules une seule fois
  const particles = useMemo(() => 
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 12 + Math.random() * 8,
      size: 2 + Math.random() * 3,
    })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/15 will-change-transform"
          style={{
            left: particle.left,
            width: particle.size,
            height: particle.size,
            top: '100%',
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            opacity: [0, 0.4, 0.5, 0.4, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
