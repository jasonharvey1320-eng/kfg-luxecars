import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingParticles from '@/components/FloatingParticles';
import Decorations from '@/components/Decorations';
import { ShoppingCart, RefreshCw, CreditCard, Shield, Wrench, Palette, Package, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: ShoppingCart,
    title: 'Vente Véhicules Neufs',
    description: 'Large sélection de véhicules neufs des plus grandes marques de luxe',
    features: ['Garantie constructeur', 'Financement disponible', 'Livraison gratuite'],
  },
  {
    icon: RefreshCw,
    title: 'Vente Véhicules Occasion',
    description: 'Véhicules d\'occasion certifiés avec historique complet',
    features: ['Inspection 150 points', 'Garantie 2 ans', 'Échange possible'],
  },
  {
    icon: Package,
    title: 'Reprise Auto',
    description: 'Reprise de votre véhicule actuel au meilleur prix',
    features: ['Évaluation gratuite', 'Paiement immédiat', 'Démarches simplifiées'],
  },
  {
    icon: CreditCard,
    title: 'Financement',
    description: 'Solutions de financement flexibles adaptées à votre budget',
    features: ['Jusqu\'à 60 mois', 'Taux compétitifs', 'Réponse rapide'],
  },
  {
    icon: Shield,
    title: 'Assurance',
    description: 'Partenariats avec les meilleures compagnies d\'assurance',
    features: ['Devis gratuit', 'Tous risques', 'Assistance 24/7'],
  },
  {
    icon: Wrench,
    title: 'Entretien & Maintenance',
    description: 'Service après-vente professionnel pour votre véhicule',
    features: ['Mécaniciens certifiés', 'Pièces d\'origine', 'Garantie des réparations'],
  },
  {
    icon: Palette,
    title: 'Personnalisation',
    description: 'Personnalisez votre véhicule selon vos goûts',
    features: ['Options premium', 'Covering', 'Accessoires luxe'],
  },
  {
    icon: Clock,
    title: 'Import sur Commande',
    description: 'Importation du véhicule de vos rêves',
    features: ['Commande spéciale', 'Suivi complet', 'Garantie totale'],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingParticles />
      <Decorations variant="moderate" position="center" />
      <Header />
      
      <div className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-card to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
                Nos <span className="text-gradient-gold">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Un accompagnement complet pour tous vos besoins automobiles
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all group"
                >
                  <div className="inline-flex p-4 bg-primary/10 rounded-full mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Besoin d'un Service ?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contactez-nous pour plus d'informations sur nos services
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8">
                <Link to="/contact">NOUS CONTACTER</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
