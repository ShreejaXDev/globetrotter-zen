import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  MapPin, 
  Calendar, 
  Users, 
  Filter,
  SlidersHorizontal,
  ArrowUpDown
} from "lucide-react";
import { cn } from "@/lib/utils";

const SearchSection = () => {
  const [activeTab, setActiveTab] = useState("destinations");

  const tabs = [
    { id: "destinations", label: "Destinations", icon: MapPin },
    { id: "trips", label: "Trips", icon: Calendar },
    { id: "experiences", label: "Experiences", icon: Users },
  ];

  return (
    <section className="py-16 -mt-20 relative z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Card */}
        <div className="search-section p-6 md:p-8 max-w-5xl mx-auto">
          {/* Search Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg travel-transition text-sm font-medium",
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground travel-shadow"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Form */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {/* Destination Input */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Where to?"
                className="pl-10 h-12 bg-background border-border/50 focus:border-primary"
              />
            </div>

            {/* Date Inputs */}
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="date"
                placeholder="Check-in"
                className="pl-10 h-12 bg-background border-border/50 focus:border-primary"
              />
            </div>

            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="date"
                placeholder="Check-out"
                className="pl-10 h-12 bg-background border-border/50 focus:border-primary"
              />
            </div>

            {/* Search Button */}
            <Button 
              variant="ocean" 
              size="lg" 
              className="h-12 text-base font-semibold"
            >
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>

          {/* Filter Options */}
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
            
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              Group by
            </Button>
            
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4" />
              Sort by
            </Button>

            <div className="text-sm text-muted-foreground ml-auto hidden md:block">
              Over 10,000 destinations worldwide
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;