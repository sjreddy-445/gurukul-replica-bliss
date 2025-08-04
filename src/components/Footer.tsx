import { Button } from "@/components/ui/button";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import omSymbol from "@/assets/om-symbol.png";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Gurukuls", href: "#locations" },
    { name: "Programs", href: "#programs" },
    { name: "News & Events", href: "#news" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "#privacy" }
  ];

  const contactInfo = [
    { icon: Mail, text: "info@srisrigurukul.org", href: "mailto:info@srisrigurukul.org" },
    { icon: Phone, text: "+91 80 2663 3214", href: "tel:+918026633214" },
    { icon: MapPin, text: "Bangalore, Karnataka, India", href: "#" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/90 text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-sacred text-xl font-bold">ॐ</span>
              </div>
              <div>
                <h3 className="font-sacred text-xl font-semibold">Ved Vignan Maha Vidya Peeth</h3>
                <p className="text-background/80 text-sm">Preserving Ancient Wisdom</p>
              </div>
            </div>
            
            <p className="text-background/90 leading-relaxed mb-6 max-w-md">
              Empowering young minds with Vedic knowledge, discipline, and timeless Indian values. 
              Join us in nurturing the future guardians of our cultural heritage.
            </p>

            <div className="bg-primary/10 rounded-xl p-6 mb-6">
              <h4 className="font-sacred text-lg font-semibold mb-3 flex items-center">
                <Heart className="w-5 h-5 mr-2 text-primary" />
                Support Our Mission
              </h4>
              <p className="text-background/80 text-sm mb-4">
                Your donation directly impacts the lives of students preserving our ancient traditions.
              </p>
              <Button className="btn-sacred">
                Donate Now
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sacred text-lg font-semibold mb-6 flex items-center">
              <img src={omSymbol} alt="Om" className="w-5 h-5 mr-2 opacity-80 filter invert" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-sacred text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <contact.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <a
                    href={contact.href}
                    className="text-background/80 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {contact.text}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-8">
              <h5 className="font-sacred font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/70 text-sm">
              © 2024 Ved Vignan Maha Vidya Peeth. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-4 text-background/70 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-primary fill-current" />
              <span>for preserving ancient wisdom</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;