import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroMercedes from '@/assets/hero-mercedes.jpg';
import heroBmw from '@/assets/hero-bmw.jpg';
import heroRangeRover from '@/assets/hero-rangerover.jpg';
import heroPorsche from '@/assets/hero-porsche.jpg';
import heroShowroom from '@/assets/hero-showroom.jpg';

const slides = [
  {
    image: heroMercedes,
    title: 'Mercedes AMG GT 63 S',
    subtitle: 'Performance & Élégance Absolue',
    price: '75M FCFA',
  },
  {
    image: heroBmw,
    title: 'BMW 7 Series',
    subtitle: 'Le Luxe Redéfini',
    price: '52M FCFA',
  },
  {
    image: heroRangeRover,
    title: 'Range Rover Autobiography',
    subtitle: 'Prestige & Puissance',
    price: '68M FCFA',
  },
  {
    image: heroPorsche,
    title: 'Porsche 911',
    subtitle: 'Icône Sportive Intemporelle',
    price: '58M FCFA',
  },
  {
    image: heroShowroom,
    title: 'KFG LUXECARS',
    subtitle: "L'Excellence Automobile à Votre Portée",
    price: '120+ Véhicules',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
          
          {/* Animated gradient overlay */}
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <motion.div
          key={`content-${currentSlide}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-4"
          >
            <motion.span
              animate={{ 
                boxShadow: [
                  "0 0 20px hsl(var(--primary) / 0.3)",
                  "0 0 40px hsl(var(--primary) / 0.6)",
                  "0 0 20px hsl(var(--primary) / 0.3)",
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block px-4 py-2 bg-primary/20 border border-primary rounded-full text-primary text-sm font-semibold backdrop-blur-sm"
            >
              NOUVEAU
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-4 leading-tight"
          >
            {slides[currentSlide].title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-xl md:text-2xl text-gray-200 mb-6"
          >
            {slides[currentSlide].subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mb-8"
          >
            <p className="text-4xl md:text-5xl font-price font-bold text-gradient-gold">
              {slides[currentSlide].price}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8"
              onClick={() => {
                const featuredSection = document.getElementById('featured-vehicles');
                if (featuredSection) {
                  featuredSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              DÉCOUVRIR
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8"
            >
              <Link to="/contact">PRENDRE RDV</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all"
        aria-label="Précédent"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all"
        aria-label="Suivant"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-white/50'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
