import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface DestinationCardProps {
  image: string;
  title: string;
  location: string;
  description: string;
}

const DestinationCard = ({ image, title, location, description }: DestinationCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-card border border-border">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-secondary mb-2">
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-medium">{location}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <Button
          variant="outline"
          className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
          onClick={() => navigate("/booking")}
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default DestinationCard;
