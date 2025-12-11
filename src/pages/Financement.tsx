import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingParticles from '@/components/FloatingParticles';
import Decorations from '@/components/Decorations';
import { Button } from '@/components/ui/button';
import { Calculator, CheckCircle, FileText, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Financement = () => {
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
                Solutions de <span className="text-gradient-gold">Financement</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Des options flexibles pour réaliser votre rêve automobile
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                { icon: Calculator, title: 'Simulation Gratuite', desc: 'Calculez vos mensualités' },
                { icon: CheckCircle, title: 'Approbation Rapide', desc: 'Réponse en 48h' },
                { icon: FileText, title: 'Démarches Simples', desc: 'Documents minimum' },
                { icon: CreditCard, title: 'Taux Compétitifs', desc: 'Meilleurs conditions' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Options */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-center text-foreground mb-12">
                Nos Options de Financement
              </h2>
              <div className="grid gap-6">
                {[
                  {
                    title: 'Crédit Classique',
                    duration: '12 à 60 mois',
                    rate: 'À partir de 8%',
                    features: ['Apport minimum 20%', 'Mensualités fixes', 'Remboursement anticipé possible'],
                  },
                  {
                    title: 'Leasing',
                    duration: '24 à 48 mois',
                    rate: 'Mensualités flexibles',
                    features: ['Option d\'achat finale', 'Entretien inclus', 'Véhicule de remplacement'],
                  },
                  {
                    title: 'Location Longue Durée',
                    duration: '36 à 60 mois',
                    rate: 'Tout inclus',
                    features: ['Assurance comprise', 'Maintenance incluse', 'Assistance 24/7'],
                  },
                ].map((option, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                          {option.title}
                        </h3>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span>⏱️ {option.duration}</span>
                          <span>💰 {option.rate}</span>
                        </div>
                      </div>
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90 mt-4 md:mt-0">
                        SIMULER
                      </Button>
                    </div>
                    <ul className="space-y-2">
                      {option.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
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
                Prêt à Démarrer ?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contactez nos conseillers financiers pour une étude personnalisée
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8">
                  <Link to="/contact">DEMANDER UN FINANCEMENT</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8">
                  CALCULER MES MENSUALITÉS
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Financement;
