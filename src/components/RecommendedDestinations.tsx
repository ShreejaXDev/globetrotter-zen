import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  MapPin, 
  Clock, 
  Users,
  ArrowRight,
  Heart
} from "lucide-react";

import tokyoImage from "@/assets/tokyo.jpg";
import santoriniImage from "@/assets/santorini.jpg";
import baliImage from "@/assets/bali.jpg";
import machupicchu from "@/assets/machupicchu.jpg";
import dubaiImage from "@/assets/dubai.jpg";
import icelandImage from "@/assets/iceland.jpg";

const destinations = [
  {
    id: 1,
    name: "Tokyo, Japan",
    image: tokyoImage,
    rating: 4.9,
    duration: "7-10 days",
    price: "$1,299",
    travelers: "2.1k",
    category: "Culture",
    trending: true,
    description: "Neon lights, cherry blossoms, and modern culture"
  },
  {
    id: 2,
    name: "Santorini, Greece",
    image: santoriniImage,
    rating: 4.8,
    duration: "5-7 days",
    price: "$899",
    travelers: "1.8k",
    category: "Romance",
    trending: false,
    description: "White buildings and stunning sunsets"
  },
  {
    id: 3,
    name: "Bali, Indonesia",
    image: baliImage,
    rating: 4.7,
    duration: "8-12 days",
    price: "$799",
    travelers: "3.2k",
    category: "Adventure",
    trending: true,
    description: "Rice terraces and tropical paradise"
  },
  {
    id: 4,
    name: "Machu Picchu, Peru",
    image: machupicchu,
    rating: 4.9,
    duration: "6-8 days",
    price: "$1,199",
    travelers: "987",
    category: "Adventure",
    trending: false,
    description: "Ancient ruins and mystical mountains"
  },
  {
    id: 5,
    name: "Dubai, UAE",
    image: dubaiImage,
    rating: 4.6,
    duration: "4-6 days",
    price: "$1,099",
    travelers: "1.5k",
    category: "Luxury",
    trending: true,
    description: "Modern skyline meets desert adventure"
  },
  {
    id: 6,
    name: "Iceland",
    image: icelandImage,
    rating: 4.8,
    duration: "7-9 days",
    price: "$1,399",
    travelers: "1.2k",
    category: "Nature",
    trending: false,
    description: "Northern lights and dramatic landscapes"
  },
];

const RecommendedDestinations = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trending Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the world's most beautiful places, curated by travel experts and loved by adventurers
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {["All", "Culture", "Adventure", "Romance", "Nature", "Luxury"].map((category) => (
            <Button 
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className="travel-transition"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {destinations.map((destination, index) => (
            <Card 
              key={destination.id} 
              className="trip-card group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-110 travel-transition"
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Trending Badge */}
                {destination.trending && (
                  <Badge className="absolute top-3 left-3 travel-gradient-sunset text-white border-0">
                    🔥 Trending
                  </Badge>
                )}
                
                {/* Heart Icon */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
                >
                  <Heart className="w-4 h-4" />
                </Button>

                {/* Rating */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <span className="text-white text-xs font-medium">{destination.rating}</span>
                </div>
              </div>

              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg">{destination.name}</h3>
                  <Badge variant="outline" className="text-xs">
                    {destination.category}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground text-sm mb-3">
                  {destination.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {destination.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {destination.travelers} travelers
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-primary">{destination.price}</span>
                    <span className="text-muted-foreground text-sm ml-1">per person</span>
                  </div>
                  <Button variant="outline" size="sm" className="group/btn">
                    Explore
                    <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 travel-transition" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="ocean" size="lg" className="px-8">
            View All Destinations
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecommendedDestinations;