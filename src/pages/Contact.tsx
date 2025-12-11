import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingParticles from '@/components/FloatingParticles';
import Decorations from '@/components/Decorations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
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
                Nous <span className="text-gradient-gold">Contacter</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Notre équipe est à votre écoute pour répondre à toutes vos questions
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-card rounded-xl p-8 border border-border"
              >
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                  Envoyez-nous un Message
                </h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Nom" />
                    <Input placeholder="Prénom" />
                  </div>
                  <Input type="email" placeholder="Email" />
                  <Input type="tel" placeholder="Téléphone" />
                  <Textarea placeholder="Votre message" rows={6} />
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                    ENVOYER LE MESSAGE
                  </Button>
                </form>
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                    Informations de Contact
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Adresse</h3>
                        <p className="text-muted-foreground">Douala, Cameroun</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                      <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Téléphone</h3>
                        <a href="tel:+237693378712" className="text-muted-foreground hover:text-primary">
                          (+237) 693 37 87 12
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                      <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <a href="mailto:sales@kfgluxecars.com" className="text-muted-foreground hover:text-primary">
                          sales@kfgluxecars.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                      <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Horaires</h3>
                        <p className="text-muted-foreground">Lun-Sam: 8h00 - 19h00</p>
                        <p className="text-muted-foreground">Dimanche: Fermé</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-6 border border-primary/20">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageCircle className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-display font-bold text-foreground">
                      Besoin d'une Réponse Rapide ?
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Contactez-nous directement sur WhatsApp pour une assistance immédiate
                  </p>
                  <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href="https://wa.me/237693378712" target="_blank" rel="noopener noreferrer">
                      OUVRIR WHATSAPP
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
