import { useEffect, useRef, useState } from "react";
import philosophyBg from "@/assets/philosophy-bg.jpg";

export const Philosophy = () => {
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
      className="relative py-32 md:py-40 px-6 overflow-hidden"
    >
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${philosophyBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-navy/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div 
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8">
            Where Art Meets Architecture
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-white/90 font-light leading-relaxed">
            <p>
              Design is more than aesthetics—it's the thoughtful choreography of space, 
              light, and material. Every line drawn, every texture selected, contributes 
              to an environment that elevates the human experience.
            </p>
            <p>
              I believe in creating spaces that tell stories, evoke emotions, and stand 
              as testaments to timeless craftsmanship. Each project begins with deep 
              listening and ends with exceptional execution.
            </p>
            <p>
              The intersection of form and function is where magic happens. It's where 
              dreams take shape, and ordinary spaces transform into extraordinary 
              expressions of beauty and purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
