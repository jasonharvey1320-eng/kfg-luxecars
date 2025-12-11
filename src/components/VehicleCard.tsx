import { useState } from 'react';
import { Heart, Fuel, Gauge, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import VehicleDetailsDialog from './VehicleDetailsDialog';
import { VehicleSpecs } from '@/data/vehicles';

interface VehicleCardProps extends VehicleSpecs {
  onDetailsClick?: (vehicle: VehicleSpecs) => void;
}

const VehicleCard = (props: VehicleCardProps) => {
  const {
    id,
    name,
    price,
    originalPrice,
    image,
    year,
    mileage,
    transmission,
    fuel,
    isNew = false,
    onDetailsClick,
  } = props;
  
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDetailsClick = () => {
    if (onDetailsClick) {
      onDetailsClick(props as VehicleSpecs);
    } else {
      setDialogOpen(true);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.3 }}
      className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20 will-change-transform"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {isNew && (
          <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground shadow-lg shadow-primary/50 animate-pulse">
            NOUVEAU
          </Badge>
        )}
        
        <button
          className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 active:scale-95"
          aria-label="Ajouter aux favoris"
        >
          <Heart className="h-5 w-5" />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <Link to={`/vehicle/${id}`}>
          <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span>{year}</span>
          </div>
          <div className="flex items-center gap-2">
            <Gauge className="h-4 w-4 text-primary" />
            <span>{mileage}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary font-semibold">⚙️</span>
            <span>{transmission}</span>
          </div>
          <div className="flex items-center gap-2">
            <Fuel className="h-4 w-4 text-primary" />
            <span>{fuel}</span>
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          {originalPrice && (
            <p className="text-sm text-muted-foreground line-through">{originalPrice}</p>
          )}
          <p className="text-2xl font-price font-bold text-gradient-gold">{price}</p>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button 
            onClick={handleDetailsClick}
            className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Détails
          </Button>
          <Button asChild variant="outline" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link to="/contact">Essai</Link>
          </Button>
        </div>
      </div>

      {!onDetailsClick && (
        <VehicleDetailsDialog
          vehicle={props as VehicleSpecs}
          open={dialogOpen}
          onOpenChange={setDialogOpen}
        />
      )}
    </motion.div>
  );
};

export default VehicleCard;
