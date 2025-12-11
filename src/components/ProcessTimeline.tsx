import { motion } from 'framer-motion';
import { Search, Car, CreditCard, Gift } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Sélection',
    description: 'Choisissez votre véhicule idéal parmi notre collection',
  },
  {
    icon: Car,
    title: 'Essai',
    description: 'Testez le véhicule et validez votre choix',
  },
  {
    icon: CreditCard,
    title: 'Financement',
    description: 'Solution de paiement personnalisée et flexible',
  },
  {
    icon: Gift,
    title: 'Livraison',
    description: 'Récupérez votre véhicule clé en main',
  },
];

const ProcessTimeline = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--primary))_0%,_transparent_50%)] animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Processus d'<span className="text-gradient-gold">Acquisition</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            4 étapes simples pour réaliser votre rêve automobile
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Step number */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-2xl font-price font-bold text-primary-foreground shadow-lg shadow-primary/50 relative z-10"
                >
                  {index + 1}
                </motion.div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-20 h-20 mx-auto mb-4 rounded-xl bg-card border-2 border-primary/20 flex items-center justify-center group hover:border-primary transition-all"
                >
                  <step.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                </motion.div>

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </motion.div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="hidden lg:block absolute top-8 -right-4 text-primary text-2xl"
                  >
                    →
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
