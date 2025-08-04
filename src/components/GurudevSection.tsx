import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import omSymbol from "@/assets/om-symbol.png";

const GurudevSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Quote Card */}
            <Card className="card-sacred relative overflow-hidden">
              <CardContent className="p-8 lg:p-12">
                <div className="absolute top-6 left-6 opacity-20">
                  <Quote className="w-16 h-16 text-primary" />
                </div>
                
                <div className="relative z-10">
                  <blockquote className="text-2xl lg:text-3xl font-sacred italic text-foreground mb-8 leading-relaxed">
                    "True knowledge is that which brings innocence in the heart, 
                    clarity in the mind, and strength in action"
                  </blockquote>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-0.5 bg-primary"></div>
                    <span className="text-primary font-sacred text-lg">ॐ</span>
                    <div className="w-12 h-0.5 bg-primary"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gurudev Info */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  <div className="w-16 h-0.5 bg-primary/60"></div>
                  <img src={omSymbol} alt="Om" className="w-6 h-6 mx-4 opacity-60" />
                  <div className="w-16 h-0.5 bg-primary/60"></div>
                </div>

                <h2 className="text-3xl lg:text-4xl font-sacred font-bold text-foreground mb-4">
                  Gurudev Sri Sri Ravi Shankar
                </h2>
                
                <p className="text-lg text-primary font-sacred font-semibold mb-6">
                  Founder
                </p>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Gurudev Sri Sri Ravi Shankar is a humanitarian leader, spiritual teacher, 
                  and an ambassador of peace. His vision of a stress-free, violence-free 
                  society has united millions of people around the world through service 
                  projects and programs offered by The Art of Living.
                </p>
                
                <p>
                  Through Sri Sri Gurukuls, he has created a unique educational system that 
                  preserves ancient Vedic wisdom while preparing students for modern challenges. 
                  His teachings emphasize the importance of combining knowledge with compassion, 
                  tradition with innovation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-sacred">
                  Learn More
                </Button>
                <Button variant="outline">
                  Read His Teachings
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GurudevSection;