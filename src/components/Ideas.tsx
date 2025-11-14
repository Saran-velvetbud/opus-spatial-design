import { Lightbulb, Palette, Ruler, Sparkles } from "lucide-react";

const ideas = [
  {
    icon: Lightbulb,
    title: "Sustainable Materials",
    description:
      "Explore eco-friendly options that blend luxury with environmental responsibility. Natural fibers, reclaimed wood, and low-VOC finishes.",
  },
  {
    icon: Palette,
    title: "Color Psychology",
    description:
      "Understanding how colors influence mood and behavior in interior spaces. Create harmonious environments that enhance well-being.",
  },
  {
    icon: Ruler,
    title: "Space Optimization",
    description:
      "Maximize functionality without compromising aesthetics. Smart storage solutions and multi-purpose furniture for modern living.",
  },
  {
    icon: Sparkles,
    title: "Lighting Design",
    description:
      "Layer ambient, task, and accent lighting to transform spaces. Create the perfect atmosphere for every moment of the day.",
  },
];

export const Ideas = () => {
  return (
    <section id="ideas" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-navy mb-6">
            Design Ideas
          </h2>
          <p className="text-navy/70 max-w-2xl mx-auto leading-relaxed">
            Fresh perspectives and innovative concepts to inspire your next project.
            Discover trends, tips, and timeless principles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {ideas.map((idea, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-lg shadow-subtle hover:shadow-elegant transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-navy/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-navy/20 transition-colors duration-300">
                <idea.icon className="w-7 h-7 text-navy" />
              </div>
              <h3 className="font-serif text-2xl text-navy mb-4">{idea.title}</h3>
              <p className="text-navy/70 leading-relaxed">{idea.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
