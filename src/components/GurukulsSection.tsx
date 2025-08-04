import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import omSymbol from "@/assets/om-symbol.png";
import gurukulBangalore from "@/assets/gurukul-bangalore.jpg";
import gurukulRishikesh from "@/assets/gurukul-rishikesh.jpg";
import gurukulOmkareshwar from "@/assets/gurukul-omkareshwar.jpg";
import gurukulVasad from "@/assets/gurukul-vasad.jpg";

const GurukulsSection = () => {
  const gurukuls = [
    {
      id: 1,
      name: "Sri Sri Gurukul Bangalore",
      location: "Bangalore, Karnataka",
      image: gurukulBangalore,
      description: "Traditional Vedic education in the silicon city"
    },
    {
      id: 2,
      name: "Sri Sri Gurukul Rishikesh",
      location: "Rishikesh, Uttarakhand",
      image: gurukulRishikesh,
      description: "Sacred learning by the holy Ganges"
    },
    {
      id: 3,
      name: "Sri Sri Gurukul Omkareshwar",
      location: "Omkareshwar, Madhya Pradesh",
      image: gurukulOmkareshwar,
      description: "Ancient wisdom at the sacred Jyotirlinga"
    },
    {
      id: 4,
      name: "Sri Sri Gurukul Vasad",
      location: "Vasad, Gujarat",
      image: gurukulVasad,
      description: "Nurturing minds with Gujarati heritage"
    },
    {
      id: 5,
      name: "Sri Sri Gurukul Cuttack",
      location: "Cuttack, Odisha",
      image: gurukulBangalore, // Reusing image for now
      description: "Preserving Odia culture and traditions"
    },
    {
      id: 6,
      name: "Sri Sri Gurukul Pune",
      location: "Pune, Maharashtra",
      image: gurukulRishikesh, // Reusing image for now
      description: "Modern facilities with ancient wisdom"
    }
  ];

  return (
    <section id="locations" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-0.5 bg-primary/60"></div>
            <img src={omSymbol} alt="Om" className="w-8 h-8 mx-4 opacity-60" />
            <div className="w-16 h-0.5 bg-primary/60"></div>
          </div>

          <h2 className="text-3xl lg:text-4xl font-sacred font-bold text-foreground mb-4">
            Gurukuls
          </h2>
          
          <p className="text-xl text-muted-foreground font-sacred italic">
            Sustaining our rich heritage.
          </p>
        </div>

        {/* Gurukuls Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gurukuls.map((gurukul, index) => (
            <Card 
              key={gurukul.id} 
              className="card-sacred group cursor-pointer overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={gurukul.image}
                  alt={gurukul.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-sacred font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {gurukul.name}
                </h3>
                
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  <span className="text-sm">{gurukul.location}</span>
                </div>

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {gurukul.description}
                </p>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-sacred rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-sacred font-bold text-foreground mb-4">
              Support Our Mission
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Your contribution helps us preserve ancient wisdom and nurture young minds 
              across all our Gurukuls. Together, we can keep the tradition alive.
            </p>
            <Button className="btn-sacred text-lg px-8 py-4 rounded-full">
              Donate Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GurukulsSection;