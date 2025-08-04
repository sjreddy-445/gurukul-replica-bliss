import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search, Filter } from "lucide-react";
import omSymbol from "@/assets/om-symbol.png";
import gurukulBangalore from "@/assets/gurukul-bangalore.jpg";
import gurukulRishikesh from "@/assets/gurukul-rishikesh.jpg";
import gurukulOmkareshwar from "@/assets/gurukul-omkareshwar.jpg";
import gurukulVasad from "@/assets/gurukul-vasad.jpg";

const Locations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("All");

  const gurukuls = [
    {
      id: 1,
      name: "Sri Sri Gurukul Bangalore",
      location: "Bangalore, Karnataka",
      state: "Karnataka",
      image: gurukulBangalore,
      description: "Traditional Vedic education in the silicon city. Our Bangalore center combines ancient wisdom with modern facilities.",
      students: 120,
      established: 2015,
      specialization: "Rig Veda"
    },
    {
      id: 2,
      name: "Sri Sri Gurukul Rishikesh",
      location: "Rishikesh, Uttarakhand",
      state: "Uttarakhand",
      image: gurukulRishikesh,
      description: "Sacred learning by the holy Ganges. Experience the spiritual energy of the yoga capital of the world.",
      students: 85,
      established: 2012,
      specialization: "Sama Veda"
    },
    {
      id: 3,
      name: "Sri Sri Gurukul Omkareshwar",
      location: "Omkareshwar, Madhya Pradesh",
      state: "Madhya Pradesh",
      image: gurukulOmkareshwar,
      description: "Ancient wisdom at the sacred Jyotirlinga. A place where spirituality meets traditional learning.",
      students: 95,
      established: 2018,
      specialization: "Yajur Veda"
    },
    {
      id: 4,
      name: "Sri Sri Gurukul Vasad",
      location: "Vasad, Gujarat",
      state: "Gujarat",
      image: gurukulVasad,
      description: "Nurturing minds with Gujarati heritage. Preserving local culture while teaching Vedic knowledge.",
      students: 110,
      established: 2020,
      specialization: "Atharva Veda"
    },
    {
      id: 5,
      name: "Sri Sri Gurukul Cuttack",
      location: "Cuttack, Odisha",
      state: "Odisha",
      image: gurukulBangalore,
      description: "Preserving Odia culture and traditions. A center of learning in the cultural capital of Odisha.",
      students: 75,
      established: 2019,
      specialization: "Rig Veda"
    },
    {
      id: 6,
      name: "Sri Sri Gurukul Pune",
      location: "Pune, Maharashtra",
      state: "Maharashtra",
      image: gurukulRishikesh,
      description: "Modern facilities with ancient wisdom. Located in the educational hub of Maharashtra.",
      students: 130,
      established: 2016,
      specialization: "Sama Veda"
    }
  ];

  const states = ["All", ...new Set(gurukuls.map(g => g.state))];

  const filteredGurukuls = gurukuls.filter(gurukul => {
    const matchesSearch = gurukul.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         gurukul.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = selectedState === "All" || gurukul.state === selectedState;
    return matchesSearch && matchesState;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="pt-24 pb-16 bg-gradient-sacred">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-0.5 bg-primary/60"></div>
              <img src={omSymbol} alt="Om" className="w-8 h-8 mx-4 opacity-60" />
              <div className="w-16 h-0.5 bg-primary/60"></div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-sacred font-bold text-foreground mb-6">
              Our Gurukuls
            </h1>
            
            <p className="text-xl text-muted-foreground font-sacred italic mb-8">
              Centers of ancient wisdom across India
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Explore our network of traditional Gurukuls where young minds are nurtured with 
              Vedic knowledge, discipline, and timeless Indian values. Each center is uniquely 
              positioned to serve the local community while preserving our rich heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search gurukuls or locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="border border-border rounded-md px-3 py-2 bg-background text-foreground"
              >
                {states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Gurukuls Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGurukuls.map((gurukul, index) => (
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
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                    {gurukul.students} Students
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-sacred font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {gurukul.name}
                  </h3>
                  
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    <span className="text-sm">{gurukul.location}</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {gurukul.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-xs">
                    <div>
                      <span className="text-muted-foreground">Established:</span>
                      <div className="font-medium text-foreground">{gurukul.established}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Specialization:</span>
                      <div className="font-medium text-foreground">{gurukul.specialization}</div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                    >
                      Learn More
                    </Button>
                    <Button className="btn-sacred px-4">
                      Donate
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredGurukuls.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-4">No gurukuls found matching your criteria.</p>
              <Button 
                onClick={() => { setSearchTerm(""); setSelectedState("All"); }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-sacred">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-sacred rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-sacred font-bold text-foreground mb-4">
              Support All Our Gurukuls
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Your contribution helps preserve ancient wisdom across all our centers. 
              Together, we can ensure these sacred institutions continue to flourish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-sacred text-lg px-8 py-4 rounded-full">
                Donate to All Gurukuls
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4 rounded-full">
                Learn About Impact
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;