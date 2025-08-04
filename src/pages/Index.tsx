import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GurukulsSection from "@/components/GurukulsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GurudevSection from "@/components/GurudevSection";
import BlogsPreview from "@/components/BlogsPreview";

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Add event listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <GurukulsSection />
      <GurudevSection />
      <BlogsPreview />
      <TestimonialsSection />
    </div>
  );
};

export default Index;
