import { Button } from "@/components/ui/button";
import SearchBar from "@/components/SearchBar";
import DestinationCard from "@/components/DestinationCard";
import TestimonialCard from "@/components/TestimonialCard";
import { ArrowRight, Star, Shield, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-travel.jpg";
import santoriniImg from "@/assets/destination-santorini.jpg";
import baliImg from "@/assets/destination-bali.jpg";
import swissImg from "@/assets/destination-swiss.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const Home = () => {
  const navigate = useNavigate();

  const featuredDestinations = [
    {
      image: santoriniImg,
      title: "Santorini Dreams",
      location: "Greece",
      description: "Experience the magic of white-washed buildings and stunning sunsets over the Aegean Sea.",
    },
    {
      image: baliImg,
      title: "Bali Paradise",
      location: "Indonesia",
      description: "Discover ancient temples, lush rice terraces, and pristine beaches in this tropical haven.",
    },
    {
      image: swissImg,
      title: "Alpine Adventure",
      location: "Switzerland",
      description: "Explore majestic mountains, crystal-clear lakes, and charming alpine villages.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      image: testimonial1,
      rating: 5,
      text: "Travoory made our family vacation absolutely perfect! The booking process was seamless and the destinations exceeded our expectations.",
    },
    {
      name: "Michael Chen",
      location: "Singapore",
      image: testimonial2,
      rating: 5,
      text: "Best travel booking experience I've ever had. The customer service was exceptional and every detail was taken care of.",
    },
    {
      name: "Emma Williams",
      location: "London, UK",
      image: testimonial3,
      rating: 5,
      text: "I've traveled with many companies, but Travoory stands out. Great prices, amazing destinations, and hassle-free planning!",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Travel Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-32 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-white">
            Your Adventure
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Begins Here
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto animate-fade-in">
            Discover breathtaking destinations and create unforgettable memories with Travoory
          </p>

          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Destinations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the world's most beautiful places with our carefully curated selection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredDestinations.map((destination, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <DestinationCard {...destination} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" onClick={() => navigate("/destinations")}>
              View All Destinations
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Travoory?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We make travel planning simple, affordable, and unforgettable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-background hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Best Prices</h3>
              <p className="text-muted-foreground">
                Competitive rates and exclusive deals on flights, hotels, and packages
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-background hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Trusted & Safe</h3>
              <p className="text-muted-foreground">
                Secure booking process and 24/7 customer support for peace of mind
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-background hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Network</h3>
              <p className="text-muted-foreground">
                Access to thousands of destinations and partners worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Travelers Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our happy travelers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Book your dream vacation today and create memories that last a lifetime
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
            onClick={() => navigate("/booking")}
          >
            Book Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
