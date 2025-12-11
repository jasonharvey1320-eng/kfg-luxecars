import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSlider from '@/components/HeroSlider';
import StatsSection from '@/components/StatsSection';
import VehicleCard from '@/components/VehicleCard';
import FloatingParticles from '@/components/FloatingParticles';
import Decorations from '@/components/Decorations';
import BrandLogos from '@/components/BrandLogos';
import ProcessTimeline from '@/components/ProcessTimeline';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import { Button } from '@/components/ui/button';
import { Award, Shield, CreditCard, Truck, Users, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import { vehicles } from '@/data/vehicles';

const featuredVehicles = vehicles.slice(0, 12);

const advantages = [
  { icon: Award, title: 'Véhicules Certifiés', description: 'Inspection 150 points' },
  { icon: Shield, title: 'Garantie 2 Ans', description: 'Totale tranquillité' },
  { icon: CreditCard, title: 'Financement Facile', description: 'Jusqu\'à 60 mois' },
  { icon: Truck, title: 'Livraison Gratuite', description: 'Partout au Cameroun' },
  { icon: Users, title: 'Conseiller VIP', description: 'Service personnalisé' },
  { icon: Wrench, title: 'Entretien Offert', description: 'Première révision' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingParticles />
      <Decorations variant="full" position="center" />
      <Header />
      
      {/* Hero Slider */}
      <HeroSlider />

      {/* Stats */}
      <StatsSection />

      {/* Featured Vehicles */}
      <section id="featured-vehicles" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Véhicules <span className="text-gradient-gold">Vedette</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Découvrez notre sélection exclusive de véhicules de luxe neufs et d'occasion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredVehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <VehicleCard {...vehicle} />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8">
              <Link to="/catalogue">VOIR TOUT LE CATALOGUE</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <BrandLogos />

      {/* Process Timeline */}
      <ProcessTimeline />

      {/* Testimonials */}
      <TestimonialsSlider />

      {/* Brand Logos */}
      <BrandLogos />

      {/* Process Timeline */}
      <ProcessTimeline />

      {/* Testimonials */}
      <TestimonialsSlider />

      {/* Advantages */}
      <section className="py-20 bg-card relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--primary))_0%,_transparent_50%)]"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Pourquoi Choisir <span className="text-gradient-gold">KFG LUXECARS</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px -10px hsl(var(--primary) / 0.3)"
                }}
                className="flex items-start gap-4 p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-all group"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <item.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/20 via-primary/10 to-background border-y border-primary/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Prêt à Trouver Votre <span className="text-gradient-gold">Véhicule de Rêve</span> ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contactez-nous dès maintenant pour une consultation personnalisée
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8">
                <Link to="/contact">PRENDRE RENDEZ-VOUS</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8">
                <a href="https://wa.me/237693378712" target="_blank" rel="noopener noreferrer">
                  WHATSAPP
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
