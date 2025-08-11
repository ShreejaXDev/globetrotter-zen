import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import SearchSection from "@/components/SearchSection";
import RecommendedDestinations from "@/components/RecommendedDestinations";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroBanner />
      <SearchSection />
      <RecommendedDestinations />
      
      {/* Create Trip Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Ready to Plan Your Next Adventure?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create personalized itineraries, discover hidden gems, and make your travel dreams come true.
          </p>
          <Button 
            variant="hero" 
            size="lg" 
            onClick={() => navigate('/create-trip')}
            className="text-lg px-8 py-4 h-auto"
          >
            <Plus className="w-5 h-5 mr-2" />
            Create New Trip
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
