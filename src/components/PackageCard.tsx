import { Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface PackageCardProps {
  image: string;
  title: string;
  price: string;
  duration: string;
  features: string[];
  popular?: boolean;
}

const PackageCard = ({ image, title, price, duration, features, popular }: PackageCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-card border-2 ${
        popular ? "border-secondary scale-105" : "border-border"
      }`}
    >
      {popular && (
        <div className="absolute top-4 right-4 z-10 bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </div>
      )}

      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <Clock className="w-4 h-4" />
          <span className="text-sm">{duration}</span>
        </div>

        <div className="mb-6">
          <div className="text-3xl font-bold text-primary mb-4">{price}</div>
          
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button
          className="w-full"
          variant={popular ? "default" : "outline"}
          onClick={() => navigate("/booking")}
        >
          Book Package
        </Button>
      </div>
    </div>
  );
};

export default PackageCard;
