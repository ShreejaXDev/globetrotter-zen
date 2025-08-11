import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Search, 
  User, 
  Menu, 
  Calendar,
  TrendingUp,
  Globe
} from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: Globe, href: "#" },
    { name: "My Trips", icon: MapPin, href: "#" },
    { name: "Discover", icon: Search, href: "#" },
    { name: "Calendar", icon: Calendar, href: "#" },
    { name: "Trending", icon: TrendingUp, href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 travel-gradient-hero rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold travel-gradient-hero bg-clip-text text-transparent">
              GlobeTrotter
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground travel-transition"
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="hero" size="sm">
              Get Started
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md",
          isMenuOpen ? "block" : "hidden"
        )}>
          <nav className="py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg travel-transition"
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </a>
            ))}
            <div className="px-4 pt-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                Sign In
              </Button>
              <Button variant="hero" className="w-full">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;