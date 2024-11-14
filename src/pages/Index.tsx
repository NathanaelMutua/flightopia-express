import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import NavBar from "@/components/NavBar";

const popularDestinations = [
  {
    city: "New York",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
    code: "NYC"
  },
  {
    city: "Los Angeles",
    image: "https://images.unsplash.com/photo-1460881680858-30d872d5b530",
    code: "LAX"
  },
  {
    city: "Miami",
    image: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f",
    code: "MIA"
  },
  {
    city: "Chicago",
    image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f",
    code: "ORD"
  },
];

const Index = () => {
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <NavBar />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05')] bg-cover bg-center mt-16">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-5xl font-bold text-white text-center mb-8 fade-in">
            Find Your Perfect Flight
          </h1>
          
          {/* Search Form */}
          <div className="glass-card max-w-4xl mx-auto p-6 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium mb-1 block text-gray-700">From</label>
                <Input placeholder="Departure City" className="w-full" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-1 block text-gray-700">To</label>
                <Input placeholder="Arrival City" className="w-full" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-1 block text-gray-700">Departure</label>
                <Input 
                  value={departureDate ? format(departureDate, "PPP") : ""} 
                  placeholder="Select date"
                  className="w-full"
                  onClick={() => document.getElementById("departure-calendar")?.classList.toggle("hidden")}
                  readOnly
                />
                <div id="departure-calendar" className="absolute mt-1 hidden">
                  <Calendar
                    mode="single"
                    selected={departureDate}
                    onSelect={setDepartureDate}
                    className="glass-card"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-1 block text-gray-700">Return</label>
                <Input 
                  value={returnDate ? format(returnDate, "PPP") : ""} 
                  placeholder="Select date"
                  className="w-full"
                  onClick={() => document.getElementById("return-calendar")?.classList.toggle("hidden")}
                  readOnly
                />
                <div id="return-calendar" className="absolute mt-1 hidden">
                  <Calendar
                    mode="single"
                    selected={returnDate}
                    onSelect={setReturnDate}
                    className="glass-card"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex justify-between items-center">
              <Select defaultValue="1">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Passengers" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Passenger</SelectItem>
                  <SelectItem value="2">2 Passengers</SelectItem>
                  <SelectItem value="3">3 Passengers</SelectItem>
                  <SelectItem value="4">4+ Passengers</SelectItem>
                </SelectContent>
              </Select>
              
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Search Flights
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularDestinations.map((destination) => (
            <div key={destination.code} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg hover-scale">
                <img
                  src={destination.image}
                  alt={destination.city}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">{destination.city}</h3>
                  <p className="text-white/80 text-sm">Explore flights</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;