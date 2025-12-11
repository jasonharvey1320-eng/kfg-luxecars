import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  delay?: number;
}

const StatItem = ({ value, suffix, label, delay = 0 }: StatItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-price font-bold text-gradient-gold mb-2">
        {count}{suffix}
      </div>
      <p className="text-muted-foreground font-body">{label}</p>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <StatItem value={150} suffix="+" label="Véhicules Disponibles" delay={0.1} />
          <StatItem value={98} suffix="%" label="Clients Satisfaits" delay={0.2} />
          <StatItem value={5} suffix="⭐" label="Note Moyenne" delay={0.3} />
          <StatItem value={24} suffix="/7" label="Support Client" delay={0.4} />
          <StatItem value={2} suffix=" ans" label="Garantie Incluse" delay={0.5} />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
