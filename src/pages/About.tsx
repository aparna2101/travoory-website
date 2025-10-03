import { Award, Users, Globe, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">About Travoory</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner in creating unforgettable travel experiences around the world
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              At Travoory, our mission is to make travel accessible, affordable, and unforgettable for everyone. 
              We believe that exploring the world enriches lives, broadens perspectives, and creates lasting memories. 
              We're committed to providing exceptional service, competitive prices, and personalized travel experiences 
              that exceed expectations.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              We envision a world where travel is seamless and stress-free. Our goal is to become the leading travel 
              booking platform, known for our innovation, customer service excellence, and commitment to sustainable 
              tourism. We strive to connect people with diverse cultures, breathtaking destinations, and transformative 
              experiences.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Travoory?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Award Winning</h3>
              <p className="text-muted-foreground">
                Recognized for excellence in travel services and customer satisfaction
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-muted-foreground">
                Experienced travel consultants dedicated to planning your perfect trip
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
              <p className="text-muted-foreground">
                Access to thousands of destinations and partners worldwide
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer First</h3>
              <p className="text-muted-foreground">
                Your satisfaction is our priority with 24/7 support and care
              </p>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="max-w-4xl mx-auto bg-card rounded-2xl p-8 shadow-lg border border-border">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Travoory was founded with a simple belief: travel should be accessible to everyone, and planning it 
              should be a joy, not a chore. What started as a small travel agency has grown into a comprehensive 
              booking platform serving thousands of happy travelers every year.
            </p>
            <p>
              Our team of passionate travel experts brings together decades of experience in the tourism industry. 
              We've traveled the world ourselves, and we use that firsthand knowledge to curate the best experiences 
              for our customers. From budget-friendly adventures to luxury escapes, we handle every detail with care.
            </p>
            <p>
              Today, Travoory continues to innovate and expand, always keeping our customers at the heart of 
              everything we do. We're proud to be your trusted travel partner, and we look forward to helping you 
              discover your next adventure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
