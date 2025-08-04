import omSymbol from "@/assets/om-symbol.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gradient-sacred">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-0.5 bg-primary/60"></div>
            <img src={omSymbol} alt="Om" className="w-8 h-8 mx-4 opacity-60" />
            <div className="w-16 h-0.5 bg-primary/60"></div>
          </div>

          <h2 className="text-3xl lg:text-4xl font-sacred font-bold text-foreground mb-8">
            Pathways to Ancient Wisdom
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Sri Sri Gurukuls have a holistic approach to education. The primary subject is the Vedas. 
              Students specialize in one branch of Vedas, learning as per a specific Shakha Sampradaya. 
              Extracurricular activities train the students in the arts, Yoga, meditation, music and cooking.
            </p>
            
            <p>
              Modern subjects keep them up to date in communication and general knowledge, 
              so that they become pillars of society.
            </p>

            <p className="text-primary font-semibold">
              Your generous contributions play a pivotal role in the mission. Your support is invaluable, 
              and together, we can make a difference in the lives of the students. By supporting their journeys, 
              you are not only preserving our cultural heritage but also ensuring bright futures for these young seekers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;