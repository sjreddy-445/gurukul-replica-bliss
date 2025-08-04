import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Users, BookOpen, Heart, Award, Globe } from "lucide-react";
import omSymbol from "@/assets/om-symbol.png";

const AboutUs = () => {
  const stats = [
    { icon: Users, label: "Students", value: "600+" },
    { icon: BookOpen, label: "Years of Tradition", value: "15+" },
    { icon: Globe, label: "Gurukuls", value: "6" },
    { icon: Award, label: "Vedic Branches", value: "4" }
  ];

  const values = [
    {
      title: "Traditional Wisdom",
      description: "Preserving and teaching ancient Vedic knowledge through authentic methods passed down through generations.",
      icon: BookOpen
    },
    {
      title: "Holistic Development",
      description: "Nurturing not just academic excellence but character, spirituality, and life skills for complete personal growth.",
      icon: Heart
    },
    {
      title: "Cultural Heritage",
      description: "Maintaining and celebrating the rich tapestry of Indian culture, traditions, and spiritual practices.",
      icon: Award
    },
    {
      title: "Global Vision",
      description: "Preparing students to be ambassadors of ancient wisdom while being relevant in the modern world.",
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-sacred">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-0.5 bg-primary/60"></div>
              <img src={omSymbol} alt="Om" className="w-8 h-8 mx-4 opacity-60" />
              <div className="w-16 h-0.5 bg-primary/60"></div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-sacred font-bold text-foreground mb-6">
              About Ved Vignan Maha Vidya Peeth
            </h1>
            
            <p className="text-xl text-muted-foreground font-sacred italic mb-8">
              Preserving ancient wisdom for future generations
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Founded with the vision of preserving and propagating Vedic knowledge, Sri Sri Gurukuls 
              represent a harmonious blend of traditional wisdom and modern education. We are committed 
              to nurturing young minds with the timeless values and knowledge of our ancestors.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-3xl lg:text-4xl font-sacred font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gradient-sacred">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-sacred font-bold text-foreground mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                To create a world where the timeless wisdom of the Vedas illuminates modern minds, 
                fostering a generation that is rooted in ancient values yet equipped to face 
                contemporary challenges with wisdom, compassion, and integrity.
              </p>
              
              <h2 className="text-3xl lg:text-4xl font-sacred font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To provide authentic Vedic education that nurtures the complete development of 
                students - intellectually, spiritually, and morally - while preserving and 
                propagating India's rich cultural heritage for future generations.
              </p>
            </div>

            <div className="relative">
              <div className="bg-background rounded-2xl p-8 shadow-sacred">
                <Quote className="w-12 h-12 text-primary mb-6" />
                <blockquote className="text-xl font-sacred italic text-foreground mb-6">
                  "True knowledge is that which brings innocence in the heart, 
                  clarity in the mind, and strength in action"
                </blockquote>
                <cite className="text-primary font-semibold">— Gurudev Sri Sri Ravi Shankar ji</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-sacred font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape the character 
              of our students and our institution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="card-sacred animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-sacred font-bold text-foreground mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Approach */}
      <section className="py-16 bg-gradient-sacred">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-sacred font-bold text-foreground mb-6">
                Our Educational Approach
              </h2>
              <p className="text-lg text-muted-foreground">
                A holistic methodology that balances ancient wisdom with modern relevance
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-background rounded-xl p-8 shadow-sacred">
                <h3 className="text-xl font-sacred font-bold text-foreground mb-4">
                  Vedic Foundation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Students specialize in one of the four Vedas - Rig, Sama, Yajur, or Atharva - 
                  learning according to specific Shakha Sampradaya traditions. This forms the 
                  core of their education, providing deep spiritual and philosophical grounding.
                </p>
              </div>

              <div className="bg-background rounded-xl p-8 shadow-sacred">
                <h3 className="text-xl font-sacred font-bold text-foreground mb-4">
                  Holistic Development
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Beyond Vedic studies, students engage in yoga, meditation, classical music, 
                  traditional arts, and cooking. These activities develop physical health, 
                  mental clarity, creative expression, and practical life skills.
                </p>
              </div>

              <div className="bg-background rounded-xl p-8 shadow-sacred">
                <h3 className="text-xl font-sacred font-bold text-foreground mb-4">
                  Modern Integration
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Contemporary subjects in communication, general knowledge, and technology 
                  ensure our students are well-equipped to navigate the modern world while 
                  remaining anchored in traditional values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-sacred rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-sacred font-bold text-foreground mb-4">
              Join Our Mission
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether through donations, volunteering, or spreading awareness, you can be 
              part of preserving and nurturing ancient wisdom for future generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-sacred text-lg px-8 py-4 rounded-full">
                Support Our Cause
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4 rounded-full">
                Visit a Gurukul
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;