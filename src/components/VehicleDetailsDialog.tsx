import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Gauge, Fuel, Users, Zap, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { VehicleSpecs } from '@/data/vehicles';

interface VehicleDetailsDialogProps {
  vehicle: VehicleSpecs | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const VehicleDetailsDialog = ({ vehicle, open, onOpenChange }: VehicleDetailsDialogProps) => {
  if (!vehicle) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-display font-bold text-foreground">
            {vehicle.name}
          </DialogTitle>
          <DialogDescription className="text-lg text-muted-foreground mt-2">
            {vehicle.brand} {vehicle.model} • {vehicle.year}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Image */}
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full h-full object-cover"
            />
            {vehicle.isNew && (
              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                NOUVEAU
              </Badge>
            )}
          </div>

          {/* Price */}
          <div className="flex items-center justify-between border-b pb-4">
            <div>
              {vehicle.originalPrice && (
                <p className="text-sm text-muted-foreground line-through">{vehicle.originalPrice}</p>
              )}
              <p className="text-3xl font-price font-bold text-gradient-gold">{vehicle.price}</p>
            </div>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/contact">PRENDRE RENDEZ-VOUS</Link>
            </Button>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl font-display font-semibold text-foreground mb-3">
              Description
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {vehicle.description}
            </p>
          </div>

          {/* Specifications */}
          <div>
            <h3 className="text-xl font-display font-semibold text-foreground mb-4">
              Spécifications Techniques
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Année</p>
                  <p className="font-semibold text-foreground">{vehicle.year}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                <Gauge className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Kilométrage</p>
                  <p className="font-semibold text-foreground">{vehicle.mileage}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                <Fuel className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Carburant</p>
                  <p className="font-semibold text-foreground">{vehicle.fuel}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                <Zap className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Transmission</p>
                  <p className="font-semibold text-foreground">{vehicle.transmission}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                <TrendingUp className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Moteur</p>
                  <p className="font-semibold text-foreground">{vehicle.engine}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                <Award className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Puissance</p>
                  <p className="font-semibold text-foreground">{vehicle.power}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Places</p>
                  <p className="font-semibold text-foreground">{vehicle.seats} places • {vehicle.doors} portes</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                <TrendingUp className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Accélération</p>
                  <p className="font-semibold text-foreground">{vehicle.acceleration}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          {vehicle.features && vehicle.features.length > 0 && (
            <div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                Équipements & Options
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {vehicle.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 bg-card rounded border border-border">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Colors */}
          {vehicle.colors && vehicle.colors.length > 0 && (
            <div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                Couleurs Disponibles
              </h3>
              <div className="flex flex-wrap gap-2">
                {vehicle.colors.map((color, index) => (
                  <Badge key={index} variant="outline" className="px-3 py-1">
                    {color}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VehicleDetailsDialog;

