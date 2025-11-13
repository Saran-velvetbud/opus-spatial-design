import { useEffect, useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Working with him was transformative — every detail told a story. The final result exceeded all our expectations.",
    author: "Sarah Mitchell",
    role: "Residential Client",
  },
  {
    id: 2,
    text: "An exceptional talent with an unparalleled eye for detail. She brought our vision to life with elegance and precision.",
    author: "James Peterson",
    role: "Commercial Developer",
  },
  {
    id: 3,
    text: "The level of sophistication and thoughtfulness in every design decision was remarkable. Truly a master of him craft.",
    author: "Elena Rodriguez",
    role: "Interior Design Enthusiast",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <Quote className="w-16 h-16 text-navy/20 mx-auto" />
        </div>
        
        <div 
          className={`transition-all duration-500 ${
            isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          <blockquote className="text-2xl md:text-3xl font-serif text-navy mb-8 leading-relaxed text-balance">
            "{testimonials[currentIndex].text}"
          </blockquote>
          <div>
            <p className="text-lg font-medium text-foreground">
              {testimonials[currentIndex].author}
            </p>
            <p className="text-sm text-muted-foreground">
              {testimonials[currentIndex].role}
            </p>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-navy w-8" : "bg-navy/30"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
