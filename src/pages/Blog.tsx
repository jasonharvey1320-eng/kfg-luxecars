import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingParticles from '@/components/FloatingParticles';
import Decorations from '@/components/Decorations';
import { Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'Guide d\'Achat: Comment Choisir son Véhicule de Luxe',
    excerpt: 'Découvrez les critères essentiels pour faire le bon choix lors de l\'achat d\'un véhicule de luxe...',
    date: '15 Oct 2024',
    author: 'KFG LUXECARS',
    category: 'Guide',
  },
  {
    id: 2,
    title: 'Top 5 des SUV de Luxe en 2024',
    excerpt: 'Notre sélection des meilleurs SUV de luxe disponibles cette année, avec leurs caractéristiques...',
    date: '12 Oct 2024',
    author: 'KFG LUXECARS',
    category: 'Tendances',
  },
  {
    id: 3,
    title: 'Entretien de Votre Véhicule de Luxe: Les Bonnes Pratiques',
    excerpt: 'Conseils d\'experts pour maintenir votre véhicule en parfait état et préserver sa valeur...',
    date: '08 Oct 2024',
    author: 'KFG LUXECARS',
    category: 'Entretien',
  },
];

const Blog = () => {
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
                Notre <span className="text-gradient-gold">Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Actualités, conseils et tendances du monde automobile de luxe
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all group"
                >
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5" />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <Link to={`/blog/${post.id}`}>
                      <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
