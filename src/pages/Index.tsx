import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import SearchSection from "@/components/SearchSection";
import RecommendedDestinations from "@/components/RecommendedDestinations";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroBanner />
      <SearchSection />
      <RecommendedDestinations />
      <Footer />
    </div>
  );
};

export default Index;
