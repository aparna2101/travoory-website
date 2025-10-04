import DestinationCard from "@/components/DestinationCard";
import { Input } from "@/components/ui/input";
import { Search, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import santoriniImg from "@/assets/destination-santorini.jpg";
import baliImg from "@/assets/destination-bali.jpg";
import swissImg from "@/assets/destination-swiss.jpg";

interface Destination {
  image: string;
  title: string;
  location: string;
  description: string;
}

const indianStates: Destination[] = [
  {
    image: swissImg, // You can use a specific image for Indian states if you want
    title: "Uttar Pradesh",
    location: "India",
    description: "Explore the historical and cultural richness of Uttar Pradesh.",
  },
  {
    image: swissImg,
    title: "Maharashtra",
    location: "India",
    description: "Discover the bustling cities and beautiful landscapes of Maharashtra.",
  },
  {
    image: swissImg,
    title: "Tamil Nadu",
    location: "India",
    description: "Experience the temples and beaches of Tamil Nadu.",
  },
  {
    image: swissImg,
    title: "Karnataka",
    location: "India",
    description: "Enjoy the technology hubs and heritage sites in Karnataka.",
  },
  // Add all Indian states here similarly...
];

const defaultDestinations: Destination[] = [
  {
    image: santoriniImg,
    title: "Santorini Dreams",
    location: "Greece",
    description:
      "Experience the magic of white-washed buildings and stunning sunsets over the Aegean Sea. Explore charming villages and volcanic beaches.",
  },
  {
    image: baliImg,
    title: "Bali Paradise",
    location: "Indonesia",
    description:
      "Discover ancient temples, lush rice terraces, and pristine beaches in this tropical haven. Immerse yourself in Balinese culture.",
  },
  {
    image: swissImg,
    title: "Alpine Adventure",
    location: "Switzerland",
    description:
      "Explore majestic mountains, crystal-clear lakes, and charming alpine villages. Perfect for nature lovers and adventure seekers.",
  },
  {
    image: santoriniImg,
    title: "Amalfi Coast",
    location: "Italy",
    description:
      "Stunning coastal towns perched on cliffs overlooking the Mediterranean. Indulge in Italian cuisine and coastal beauty.",
  },
  {
    image: baliImg,
    title: "Phuket Paradise",
    location: "Thailand",
    description:
      "Beautiful beaches, vibrant nightlife, and delicious Thai cuisine. A perfect tropical getaway for everyone.",
  },
  {
    image: swissImg,
    title: "Iceland Adventure",
    location: "Iceland",
    description:
      "Witness the Northern Lights, explore volcanic landscapes, and relax in geothermal hot springs. Nature's wonderland.",
  },
];

const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setDestinations(defaultDestinations);
  }, []);

  useEffect(() => {
    const searchDestinations = async () => {
      if (!searchQuery.trim()) {
        setDestinations(defaultDestinations);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);

      try {
        const results: Destination[] = [];

        const queryLower = searchQuery.toLowerCase();

        // 1. Check Indian States (local hardcoded search)
        indianStates.forEach((state) => {
          if (state.title.toLowerCase().includes(queryLower)) {
            results.push(state);
          }
        });

        // 2. Search countries from REST Countries API
        const countriesResponse = await fetch(
          `https://restcountries.com/v3.1/name/${encodeURIComponent(searchQuery)}`
        );

        if (countriesResponse.ok) {
          const countries = await countriesResponse.json();
          countries.slice(0, 3).forEach((country: any) => {
            results.push({
              image: santoriniImg,
              title: country.name.common,
              location: country.region,
              description: `Explore ${country.name.common} in ${country.region}. Population: ${country.population.toLocaleString()}. Capital: ${
                country.capital?.[0] || "N/A"
              }.`,
            });
          });
        }

        // 3. Search cities from GeoDB Cities API
        const citiesResponse = await fetch(
          `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${encodeURIComponent(
            searchQuery
          )}&limit=5`,
          {
            headers: {
              "X-RapidAPI-Key": "demo", // Replace with your actual API key for production
              "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
            },
          }
        );

        if (citiesResponse.ok) {
          const citiesData = await citiesResponse.json();
          if (citiesData.data) {
            citiesData.data.forEach((city: any) => {
              results.push({
                image: baliImg,
                title: city.name,
                location: `${city.region}, ${city.country}`,
                description: `Discover ${city.name}, a beautiful destination in ${city.country}. Population: ${
                  city.population?.toLocaleString() || "N/A"
                }.`,
              });
            });
          }
        }

        setDestinations(results.length > 0 ? results : defaultDestinations);
      } catch (error) {
        console.error("Error fetching destinations:", error);
        setDestinations(defaultDestinations);
      } finally {
        setIsLoading(false);
      }
    };

    // Debounce search by 500ms
    const timeoutId = setTimeout(() => {
      searchDestinations();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Explore Destinations</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover amazing places around the world and plan your next adventure
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            {/* Show spinner only when loading */}
            {isLoading ? (
              <Loader2
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground animate-spin"
                key="loader"
              />
            ) : (
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
                key="search"
              />
            )}
            <Input
              type="text"
              placeholder="Search countries, cities, or states..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <DestinationCard {...destination} />
            </div>
          ))}
        </div>

        {destinations.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg text-muted-foreground">
              No destinations found. Try a different search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Destinations;
