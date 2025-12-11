import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: 'Jean-Pierre Kamga',
    vehicle: 'Mercedes AMG GT',
    rating: 5,
    text: "Service exceptionnel! L'équipe de KFG LUXECARS m'a accompagné du début à la fin. Ma Mercedes est parfaite et le processus de financement était très simple.",
    date: 'Octobre 2024',
  },
  {
    name: 'Marie Dupont',
    vehicle: 'Range Rover Autobiography',
    rating: 5,
    text: "Je recommande vivement KFG LUXECARS. Professionnalisme, transparence et véhicules d'exception. Mon Range Rover est tout simplement magnifique!",
    date: 'Septembre 2024',
  },
  {
    name: 'Paul Essomba',
    vehicle: 'BMW X7',
    rating: 5,
    text: "Meilleure expérience d'achat automobile de ma vie. Le showroom est superbe, les conseillers sont compétents et à l'écoute. Bravo!",
    date: 'Août 2024',
  },
  {
    name: 'Sophie Martin',
    vehicle: 'Porsche Cayenne',
    rating: 5,
    text: "KFG LUXECARS a dépassé toutes mes attentes. Service VIP du début à la fin. Mon Porsche Cayenne est un rêve devenu réalité!",
    date: 'Juillet 2024',
  },
  {
    name: 'David Ngono',
    vehicle: 'Audi Q8',
    rating: 5,
    text: "Excellent service après-vente, garantie rassurante et véhicule en parfait état. Je suis un client fidèle maintenant!",
    date: 'Juin 2024',
  },
];

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-gradient-to-b from-card to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Avis <span className="text-gradient-gold">Clients</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-2xl font-bold text-primary">4.9/5</p>
          <p className="text-muted-foreground">Basé sur {testimonials.length}+ avis clients</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl p-8 md:p-12 border-2 border-primary/20 relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 left-6 h-12 w-12 text-primary/20" />

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-4 justify-center">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="h-5 w-5 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-xl text-foreground text-center mb-8 italic leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author info */}
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-display font-bold text-primary">
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-lg text-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-primary font-semibold">
                    {testimonials[currentIndex].vehicle}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].date}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full border-primary/50 hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-border'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full border-primary/50 hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
