import { useState } from "react";
import { MapPin, Calendar, Users, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/destinations");
  };

  return (
    <div className="bg-card rounded-2xl shadow-2xl p-6 md:p-8 max-w-5xl mx-auto border border-border">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* From */}
        <div className="relative">
          <label className="block text-sm font-medium mb-2">From</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="City or Airport"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* To */}
        <div className="relative">
          <label className="block text-sm font-medium mb-2">To</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Destination"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Date */}
        <div className="relative">
          <label className="block text-sm font-medium mb-2">Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Travelers */}
        <div className="relative">
          <label className="block text-sm font-medium mb-2">Travelers</label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="number"
              placeholder="1"
              min="1"
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      <Button
        onClick={handleSearch}
        className="w-full mt-6 h-12 text-base font-semibold"
      >
        <Search className="w-5 h-5 mr-2" />
        Search Destinations
      </Button>
    </div>
  );
};

export default SearchBar;
