import PackageCard from "@/components/PackageCard";
import luxuryImg from "@/assets/package-luxury.jpg";
import budgetImg from "@/assets/package-budget.jpg";
import groupImg from "@/assets/package-group.jpg";

const Packages = () => {
  const packages = [
    {
      image: budgetImg,
      title: "Budget Explorer",
      price: "$499",
      duration: "5 Days / 4 Nights",
      features: [
        "3-star hotel accommodation",
        "Daily breakfast included",
        "Airport transfers",
        "City tour guide",
        "Travel insurance",
      ],
    },
    {
      image: luxuryImg,
      title: "Luxury Escape",
      price: "$1,299",
      duration: "7 Days / 6 Nights",
      features: [
        "5-star resort with ocean view",
        "All meals included",
        "Private airport transfers",
        "Spa treatments",
        "Personal concierge service",
        "Premium travel insurance",
      ],
      popular: true,
    },
    {
      image: groupImg,
      title: "Group Adventure",
      price: "$799",
      duration: "6 Days / 5 Nights",
      features: [
        "4-star hotel accommodation",
        "Breakfast and dinner included",
        "Guided group tours",
        "Adventure activities",
        "Group travel insurance",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Travel Packages</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully crafted travel packages designed for every budget and style
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <PackageCard {...pkg} />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 bg-card rounded-2xl p-8 max-w-4xl mx-auto border border-border">
          <h2 className="text-2xl font-bold mb-4 text-center">All Packages Include</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <p className="text-muted-foreground">24/7 customer support throughout your trip</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <p className="text-muted-foreground">Flexible booking with easy cancellation policy</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <p className="text-muted-foreground">Professional local guides and tour operators</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <p className="text-muted-foreground">Comprehensive travel documentation assistance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
