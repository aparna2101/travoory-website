import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
}

const TestimonialCard = ({ name, location, image, rating, text }: TestimonialCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
      </div>

      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
};

export default TestimonialCard;
