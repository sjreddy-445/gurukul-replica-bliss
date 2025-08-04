import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import omSymbol from "@/assets/om-symbol.png";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Pratham",
      role: "Student",
      image: "https://srisrigurukul.subhanustaging.com/lovable-uploads/1be6be3d-a4b3-4f6b-8875-39d0f7ee4bbb.png",
      quote: "I am from a moderate family, Vedic Heritage education at Sri Sri Gurukul has inspired me and empowered me to carry forward and support my family at the same time."
    },
    {
      id: 2,
      name: "Jagan",
      role: "Parent, Pune Gurukul",
      image: "https://srisrigurukul.subhanustaging.com/lovable-uploads/c5f67e5a-5645-4257-a18b-fbd94c1bb72e.png",
      quote: "We couldn't afford his books. Now, he's top in his chanting group. We're thankful to those who supported him."
    },
    {
      id: 3,
      name: "Akash",
      role: "Student",
      image: "https://srisrigurukul.subhanustaging.com/lovable-uploads/1cc1e91d-faae-4cad-8f17-1053b98ab5e4.png",
      quote: "Clearing my mind seemed a very hard thing for me. But this has been a godsend. I can quiet my mind. It's worked miracles for me."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-0.5 bg-primary/60"></div>
            <img src={omSymbol} alt="Om" className="w-8 h-8 mx-4 opacity-60" />
            <div className="w-16 h-0.5 bg-primary/60"></div>
          </div>

          <h2 className="text-3xl lg:text-4xl font-sacred font-bold text-foreground mb-4">
            Testimonials
          </h2>
          
          <p className="text-xl text-muted-foreground font-sacred italic">
            Life transformations through Vedic wisdom
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="card-sacred group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-primary/20"
                  />
                </div>

                <blockquote className="text-muted-foreground italic leading-relaxed mb-6 min-h-[120px] flex items-center">
                  "{testimonial.quote}"
                </blockquote>

                <div className="border-t border-border pt-4">
                  <h4 className="font-sacred font-semibold text-foreground text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-primary font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Final CTA Quote */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-sacred rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <span className="text-6xl text-primary font-sacred">🕉</span>
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-sacred font-bold text-foreground mb-4">
              ॥ Vidhya Dhaanam Param Dhanam ॥
            </h3>
            
            <p className="text-xl text-primary font-sacred italic mb-8">
              "The gift of education is the highest gift"
            </p>

            <h4 className="text-xl lg:text-2xl font-sacred font-semibold text-foreground mb-6">
              Participate in conserving and spreading the vast knowledge of the Vedas!
            </h4>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Your generous contribution helps sustain these ancient centers of learning, 
              ensuring that the timeless wisdom of the Vedas continues to illuminate young 
              minds and preserve our cultural heritage for future generations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-sacred text-lg px-8 py-4 rounded-full">
                Donate Now
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 rounded-full transition-all duration-300">
                Learn About Impact
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;