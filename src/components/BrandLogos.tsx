import { motion } from 'framer-motion';

const brands = [
  { name: 'Mercedes', color: '#00ADEF' },
  { name: 'BMW', color: '#1C69D4' },
  { name: 'Audi', color: '#BB0A30' },
  { name: 'Porsche', color: '#D5001C' },
  { name: 'Range Rover', color: '#005A2B' },
  { name: 'Lexus', color: '#000000' },
  { name: 'Bentley', color: '#00563F' },
  { name: 'Tesla', color: '#E82127' },
  { name: 'Maserati', color: '#0C2340' },
  { name: 'Jaguar', color: '#000000' },
  { name: 'Cadillac', color: '#000000' },
  { name: 'Volvo', color: '#003057' },
];

const BrandLogos = () => {
  return (
    <section className="py-20 bg-card border-y border-border overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Marques <span className="text-gradient-gold">Prestigieuses</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Découvrez notre sélection des plus grandes marques automobiles
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.5 }
              }}
              className="aspect-square bg-background rounded-xl border border-border hover:border-primary/50 flex items-center justify-center cursor-pointer group transition-all"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                  <span className="text-2xl font-display font-bold text-gradient-gold">
                    {brand.name.charAt(0)}
                  </span>
                </div>
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {brand.name}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
