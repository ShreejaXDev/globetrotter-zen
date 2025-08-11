import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Calendar, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CreateTrip = () => {
  const navigate = useNavigate();
  const [tripData, setTripData] = useState({
    startDate: "",
    place: "",
    endDate: "",
    description: ""
  });

  // Random animal names for the floating tags (like in the screenshot)
  const floatingTags = [
    "Accomplished Jaguar",
    "Peaceful Moose", 
    "Handmade Elephant",
    "Sophisticated Lar",
    "Productive Boar",
    "Legal Locust",
    "X-Cution",
    "Vigilant Owl",
    "Darling Weasel"
  ];

  const tagColors = [
    "bg-pink-200 text-pink-800",
    "bg-blue-200 text-blue-800", 
    "bg-green-200 text-green-800",
    "bg-yellow-200 text-yellow-800",
    "bg-purple-200 text-purple-800",
    "bg-orange-200 text-orange-800",
    "bg-teal-200 text-teal-800",
    "bg-indigo-200 text-indigo-800",
    "bg-red-200 text-red-800"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Floating Tags Background */}
      {floatingTags.map((tag, index) => (
        <div
          key={tag}
          className={`absolute px-3 py-1 rounded-full text-sm font-medium ${tagColors[index]} animate-pulse`}
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 90 + 5}%`,
            animationDelay: `${index * 0.5}s`,
            zIndex: 1
          }}
        >
          {tag}
        </div>
      ))}

      <div className="relative z-10">
        {/* Header */}
        <div className="p-6 border-b bg-background/80 backdrop-blur-sm">
          <div className="container mx-auto flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-2xl font-bold text-foreground">Create New Trip</h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto p-6 max-w-4xl">
          <Card className="bg-background/90 backdrop-blur-sm border-2">
            <CardContent className="p-8">
              {/* Trip Details Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-2">
                  <Label htmlFor="startDate" className="text-sm font-medium">
                    Start Date:
                  </Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="startDate"
                      type="date"
                      value={tripData.startDate}
                      onChange={(e) => setTripData({...tripData, startDate: e.target.value})}
                      className="pl-10 h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="place" className="text-sm font-medium">
                    Select a Place:
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="place"
                      placeholder="Enter destination"
                      value={tripData.place}
                      onChange={(e) => setTripData({...tripData, place: e.target.value})}
                      className="pl-10 h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="endDate" className="text-sm font-medium">
                    End Date:
                  </Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="endDate"
                      type="date"
                      value={tripData.endDate}
                      onChange={(e) => setTripData({...tripData, endDate: e.target.value})}
                      className="pl-10 h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-sm font-medium">
                    Description:
                  </Label>
                  <Input
                    id="description"
                    placeholder="Brief trip description"
                    value={tripData.description}
                    onChange={(e) => setTripData({...tripData, description: e.target.value})}
                    className="h-12"
                  />
                </div>
              </div>

              {/* Places to Visit Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  Places to Visit/Activities to perform
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Empty Activity Cards */}
                  {[1, 2, 3, 4, 5, 6].map((index) => (
                    <Card key={index} className="h-40 border-2 border-dashed border-muted-foreground/30 hover:border-primary/50 transition-colors cursor-pointer group">
                      <CardContent className="h-full flex items-center justify-center">
                        <div className="text-center">
                          <Plus className="w-8 h-8 text-muted-foreground group-hover:text-primary mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground group-hover:text-primary">
                            Add Activity
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between mt-8">
                <Button variant="outline" onClick={() => navigate('/')}>
                  Cancel
                </Button>
                <Button variant="hero" className="px-8">
                  Create Trip
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CreateTrip;