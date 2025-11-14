import { Check } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    name: "Residential Design",
    description: "Complete home transformations from concept to completion",
    features: [
      "Space planning and layout",
      "Custom furniture design",
      "Material and finish selection",
      "Project management",
      "Styling and accessories",
    ],
  },
  {
    name: "Commercial Spaces",
    description: "Professional environments that inspire productivity",
    features: [
      "Office design and planning",
      "Retail space optimization",
      "Hospitality interiors",
      "Brand integration",
      "Turnkey solutions",
    ],
  },
  {
    name: "Design Consultation",
    description: "Expert guidance for your design decisions",
    features: [
      "One-on-one consultations",
      "Color scheme development",
      "Furniture recommendations",
      "Layout optimization",
      "Budget planning",
    ],
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-navy mb-6">
            Our Services
          </h2>
          <p className="text-navy/70 max-w-2xl mx-auto leading-relaxed">
            Comprehensive design solutions tailored to your unique vision and
            lifestyle. From concept to completion, we're with you every step.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-muted/30 p-8 rounded-lg hover:shadow-elegant transition-all duration-300 flex flex-col"
            >
              <h3 className="font-serif text-2xl text-navy mb-4">
                {service.name}
              </h3>
              <p className="text-navy/70 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8 flex-grow">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                    <span className="text-navy/70">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
