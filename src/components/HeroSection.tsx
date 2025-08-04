import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-gurukul.jpg";
import omSymbol from "@/assets/om-symbol.png";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-start bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroImage})`
      }}
    >
      {/* Om Symbol - Floating */}
      <div className="absolute top-1/4 right-10 opacity-20 animate-pulse hidden lg:block">
        <img src={omSymbol} alt="Om" className="w-32 h-32 filter invert" />
      </div>

      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-2xl animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sacred font-bold text-white mb-6 leading-tight">
            Empower a child
            <br />
            <span className="text-primary">with Vedic wisdom</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
            Help sustain Sri Sri Gurukuls where young minds are nurtured with Vedic knowledge, 
            discipline and timeless Indian values. Your support today becomes their foundation for life.
          </p>

          {/* CTA Button */}
          <Button className="btn-sacred text-lg px-8 py-4 rounded-full font-semibold group">
            Donate Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Sacred Symbol */}
          <div className="mt-12 flex items-center space-x-4">
            <span className="text-4xl text-primary font-sacred">ॐ</span>
            <div className="w-16 h-0.5 bg-primary/60"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;