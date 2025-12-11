import { motion } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';
import { useMemo } from 'react';

interface DecorationsProps {
  variant?: 'minimal' | 'moderate' | 'full';
  position?: 'top' | 'center' | 'bottom';
}

const Decorations = ({ variant = 'moderate', position = 'center' }: DecorationsProps) => {
  if (variant === 'minimal') {
    return null;
  }

  const particleCount = variant === 'full' ? 10 : variant === 'moderate' ? 6 : 3;

  // Mémoriser les positions et animations pour éviter les recalculs
  const particles = useMemo(() => 
    Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      xOffset: (Math.random() * 50 - 25),
      duration: 4 + Math.random() * 2,
      delay: i * 0.3,
    })),
    [particleCount]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Particules flottantes */}
      {particles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute will-change-transform"
          animate={{
            y: [0, -20, 0],
            x: [0, particle.xOffset, 0],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
          style={{
            left: particle.left,
            top: particle.top,
          }}
        >
          <Sparkles className="h-2 w-2 text-primary" />
        </motion.div>
      ))}

      {/* Étoiles décoratives */}
      {variant === 'full' && (
        <>
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`star-${i}`}
              className="absolute will-change-transform"
              animate={{
                rotate: [0, 180, 360],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: 'linear',
              }}
              style={{
                left: `${20 + i * 20}%`,
                top: `${20 + (i % 2) * 40}%`,
              }}
            >
              <Star className="h-3 w-3 text-primary fill-primary/15" />
            </motion.div>
          ))}
        </>
      )}

      {/* Rayons de lumière animés - Réduits et optimisés */}
      {variant === 'full' && (
        <motion.div
          className="absolute inset-0 will-change-transform"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={`ray-${i}`}
              className="absolute top-1/2 left-1/2 w-px h-1/4 origin-bottom"
              style={{
                transform: `translate(-50%, -100%) rotate(${i * 60}deg)`,
              }}
            >
              <div className="w-full h-full bg-gradient-to-t from-primary/10 via-primary/5 to-transparent" />
            </div>
          ))}
        </motion.div>
      )}

      {/* Gradient radial animé */}
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: 'radial-gradient(circle at 50% 50%, hsl(45 100% 51%) 0%, transparent 60%)',
          top: position === 'top' ? '0%' : position === 'bottom' ? '100%' : '50%',
          transform: position === 'center' ? 'translateY(-50%)' : 'none',
        }}
      />

      {/* Lignes décoratives - Réduites */}
      {variant === 'full' && (
        <>
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute w-1/3 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent will-change-transform"
              animate={{
                x: ['-100%', '100%'],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 4,
                ease: 'linear',
              }}
              style={{
                top: `${30 + i * 40}%`,
                left: '0%',
              }}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Decorations;

