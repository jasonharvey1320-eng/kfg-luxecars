import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useMemo } from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  animated?: boolean;
}

const Logo = ({ size = 'md', showSubtitle = true, animated = true }: LogoProps) => {
  // Mémoriser les positions des particules
  const sparklePositions = useMemo(() => 
    Array.from({ length: 4 }, (_, i) => ({
      left: `${25 + i * 18}%`,
      top: `${15 + i * 15}%`,
      duration: 4 + i * 0.5,
      delay: i * 0.3,
    })),
    []
  );
  const sizeClasses = {
    sm: 'text-xl md:text-2xl',
    md: 'text-2xl md:text-3xl',
    lg: 'text-4xl md:text-5xl',
  };

  const subtitleSizeClasses = {
    sm: 'text-[8px]',
    md: 'text-[10px]',
    lg: 'text-xs',
  };

  return (
    <motion.div
      className="relative inline-flex flex-col items-center justify-center"
      initial={animated ? { opacity: 0, scale: 0.8 } : {}}
      animate={animated ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      {/* Particules animées en arrière-plan - Réduites */}
      {animated && (
        <>
          {sparklePositions.map((sparkle, i) => (
            <motion.div
              key={i}
              className="absolute will-change-transform"
              animate={{
                rotate: [0, 180, 360],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: sparkle.duration,
                repeat: Infinity,
                delay: sparkle.delay,
                ease: 'easeInOut',
              }}
              style={{
                left: sparkle.left,
                top: sparkle.top,
              }}
            >
              <Sparkles className="h-2.5 w-2.5 text-primary" />
            </motion.div>
          ))}
        </>
      )}

      {/* Cercle décoratif avec gradient - Optimisé */}
      {animated && (
        <motion.div
          className="absolute inset-0 rounded-full opacity-15 will-change-transform"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            background: 'radial-gradient(circle, hsl(45 100% 51%) 0%, transparent 70%)',
          }}
        />
      )}

      {/* Bordure dorée animée */}
      <motion.div
        className="absolute -inset-2 rounded-lg opacity-30"
        animate={animated ? {
          boxShadow: [
            '0 0 20px hsl(45 100% 51% / 0.5)',
            '0 0 40px hsl(45 100% 51% / 0.8)',
            '0 0 20px hsl(45 100% 51% / 0.5)',
          ],
        } : {}}
        transition={animated ? {
          duration: 2,
          repeat: Infinity,
        } : {}}
        style={{
          background: 'linear-gradient(135deg, transparent, hsl(45 100% 51% / 0.3), transparent)',
        }}
      />

      {/* Texte principal */}
      <div className="relative z-10">
        <motion.h1
          className={`${sizeClasses[size]} font-display font-bold text-gradient-gold relative inline-block`}
          animate={animated ? {
            textShadow: [
              '0 0 10px hsl(45 100% 51% / 0.5)',
              '0 0 20px hsl(45 100% 51% / 0.8)',
              '0 0 10px hsl(45 100% 51% / 0.5)',
            ],
          } : {}}
          transition={animated ? {
            duration: 2,
            repeat: Infinity,
          } : {}}
        >
          {/* Effet shimmer */}
          <span className="relative inline-block overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer pointer-events-none" />
            <span className="relative z-10">KGH LUXECARS</span>
          </span>
        </motion.h1>

        {/* Ligne décorative sous le texte */}
        <motion.div
          className="mt-1 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
          initial={animated ? { width: 0 } : {}}
          animate={animated ? { width: '100%' } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        {/* Sous-titre */}
        {showSubtitle && (
          <motion.p
            className={`${subtitleSizeClasses[size]} text-muted-foreground tracking-[0.3em] uppercase mt-1 relative z-10`}
            initial={animated ? { opacity: 0, y: -10 } : {}}
            animate={animated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            L'Excellence Automobile
          </motion.p>
        )}
      </div>

      {/* Étoiles décoratives - Réduites */}
      {animated && (
        <>
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={`star-${i}`}
              className="absolute will-change-transform"
              animate={{
                rotate: [0, 180],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 1,
                ease: 'easeInOut',
              }}
              style={{
                left: i % 2 === 0 ? '-15px' : 'auto',
                right: i % 2 === 1 ? '-15px' : 'auto',
                top: `${35 + i * 30}%`,
              }}
            >
              <svg
                className="w-3 h-3 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </motion.div>
          ))}
        </>
      )}
    </motion.div>
  );
};

export default Logo;

