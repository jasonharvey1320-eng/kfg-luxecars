import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingParticles from '@/components/FloatingParticles';
import Decorations from '@/components/Decorations';
import { Award, Users, Shield, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
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
                À Propos de <span className="text-gradient-gold">KFG LUXECARS</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Votre partenaire de confiance pour l'excellence automobile à Douala, Cameroun
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Notre Histoire
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Fondée par Kuate Fosso Ghislain, KFG LUXECARS est née d'une passion pour l'automobile 
                  d'exception et d'une vision claire : rendre accessible l'excellence automobile au Cameroun.
                </p>
                <p>
                  Depuis nos débuts, nous avons bâti une réputation solide basée sur la qualité, 
                  la transparence et un service client irréprochable. Chaque véhicule de notre collection 
                  est soigneusement sélectionné et inspecté pour garantir votre satisfaction totale.
                </p>
                <p>
                  Aujourd'hui, KFG LUXECARS est reconnu comme l'un des leaders dans la vente de véhicules 
                  de luxe neufs et d'occasion à Douala, avec plus de 120 véhicules vendus et un taux de 
                  satisfaction client de 98%.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-center text-foreground mb-12">
              Nos Valeurs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Award,
                  title: 'Excellence',
                  description: 'Nous sélectionnons uniquement les véhicules d\'exception',
                },
                {
                  icon: Shield,
                  title: 'Confiance',
                  description: 'Transparence totale sur l\'état de chaque véhicule',
                },
                {
                  icon: Users,
                  title: 'Service',
                  description: 'Accompagnement personnalisé à chaque étape',
                },
                {
                  icon: TrendingUp,
                  title: 'Innovation',
                  description: 'Solutions de financement flexibles et modernes',
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Notre Équipe
              </h2>
              <div className="bg-card p-8 rounded-xl border border-border">
                <div className="mb-4">
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-1">
                    Kuate Fosso Ghislain
                  </h3>
                  <p className="text-primary font-semibold mb-4">CEO & Fondateur</p>
                  <p className="text-muted-foreground">
                    Passionné d'automobile depuis toujours, Ghislain a créé KFG LUXECARS pour 
                    partager son amour des véhicules d'exception avec les clients camerounais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
