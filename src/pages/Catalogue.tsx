import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VehicleCard from '@/components/VehicleCard';
import VehicleDetailsDialog from '@/components/VehicleDetailsDialog';
import FloatingParticles from '@/components/FloatingParticles';
import Decorations from '@/components/Decorations';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { vehicles, VehicleSpecs } from '@/data/vehicles';

const Catalogue = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleSpecs | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const filteredVehicles = useMemo(() => {
    if (!searchQuery.trim()) {
      return vehicles;
    }

    const query = searchQuery.toLowerCase().trim();
    return vehicles.filter(vehicle => {
      const brandMatch = vehicle.brand.toLowerCase().includes(query);
      const modelMatch = vehicle.model.toLowerCase().includes(query);
      const nameMatch = vehicle.name.toLowerCase().includes(query);
      return brandMatch || modelMatch || nameMatch;
    });
  }, [searchQuery]);

  const handleSearch = () => {
    // La recherche est déjà effectuée automatiquement via useMemo
    // Cette fonction peut être utilisée pour des actions supplémentaires si nécessaire
  };

  const handleDetailsClick = (vehicle: VehicleSpecs) => {
    setSelectedVehicle(vehicle);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background relative">
      <FloatingParticles />
      <Decorations variant="full" position="center" />
      <Header />
      
      <div className="pt-20">
        {/* Page Header */}
        <section className="py-16 bg-gradient-to-b from-card to-background border-b border-border relative overflow-hidden">
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
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4"
            >
              Notre <span className="text-gradient-gold">Catalogue</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Découvrez notre collection exclusive de véhicules de luxe
            </motion.p>
          </div>
        </section>

        {/* Search Bar */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex gap-4 max-w-4xl">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Rechercher par marque, modèle..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSearch();
                    }
                  }}
                />
              </div>
              <Button 
                onClick={handleSearch}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                RECHERCHER
              </Button>
            </div>
          </div>
        </section>

        {/* Vehicles Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <p className="text-muted-foreground">
                {filteredVehicles.length} véhicule{filteredVehicles.length > 1 ? 's' : ''} trouvé{filteredVehicles.length > 1 ? 's' : ''}
                {searchQuery && filteredVehicles.length !== vehicles.length && (
                  <span className="text-sm"> sur {vehicles.length} disponibles</span>
                )}
              </p>
            </div>

            {filteredVehicles.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground mb-4">
                  Aucun véhicule trouvé pour "{searchQuery}"
                </p>
                <Button 
                  onClick={() => setSearchQuery('')}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Réinitialiser la recherche
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVehicles.map((vehicle, index) => (
                  <motion.div
                    key={vehicle.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <VehicleCard {...vehicle} onDetailsClick={handleDetailsClick} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Vehicle Details Dialog */}
        <VehicleDetailsDialog
          vehicle={selectedVehicle}
          open={dialogOpen}
          onOpenChange={setDialogOpen}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Catalogue;
