import { useEffect, useRef, useState } from "react";
import aboutImage from "@/assets/about-portrait.jpg";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-24 md:py-32 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div 
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img 
                src={aboutImage} 
                alt="Designer Portrait" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Text */}
          <div 
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy mb-6">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-foreground/80 font-light leading-relaxed">
              <p>
                With a deep passion for spatial storytelling, I create interiors and structures 
                that blend functionality, light, and artistry into harmonious living experiences.
              </p>
              <p>
                Every project is an opportunity to transform spaces into timeless environments 
                that resonate with their inhabitants. My approach combines classical design 
                principles with contemporary aesthetics, resulting in sophisticated spaces 
                that stand the test of time.
              </p>
              <p>
                From intimate residential projects to large-scale architectural endeavors, 
                I bring a meticulous eye for detail and a commitment to excellence that 
                elevates every design beyond the ordinary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
