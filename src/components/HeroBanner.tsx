import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBeach from "@/assets/hero-beach.jpg";
import heroMountains from "@/assets/hero-mountains.jpg";
import heroCity from "@/assets/hero-city.jpg";

const destinations = [
  {
    image: heroBeach,
    title: "Tropical Paradise",
    subtitle: "Discover pristine beaches and crystal waters",
  },
  {
    image: heroMountains,
    title: "Mountain Adventures",
    subtitle: "Scale peaks and explore alpine wonders",
  },
  {
    image: heroCity,
    title: "Cultural Journeys", 
    subtitle: "Immerse yourself in historic cities",
  },
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % destinations.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Background Images */}
      {destinations.map((destination, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={destination.image}
            alt={destination.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl text-white animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Next
            <span className="block travel-gradient-hero bg-clip-text text-transparent">
              Adventure
            </span>
            Awaits
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            {destinations[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-8 py-4 h-auto"
            >
              Start Planning
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 h-auto bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex gap-2">
          {destinations.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full travel-transition ${
                index === currentSlide 
                  ? "bg-white travel-glow" 
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-8 right-8 hidden lg:block z-20">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-white">
          <div className="text-3xl font-bold">250K+</div>
          <div className="text-sm text-white/80">Happy Travelers</div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;