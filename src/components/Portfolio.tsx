import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    id: 1,
    title: "Modern Luxury Residence",
    category: "Interior Design",
    image: project1,
    description: "A sophisticated apartment blending minimalist aesthetics with luxurious materials and bespoke furnishings.",
  },
  {
    id: 2,
    title: "Contemporary Villa",
    category: "Architecture",
    image: project2,
    description: "An architectural masterpiece featuring clean lines, expansive glass facades, and seamless indoor-outdoor living.",
  },
  {
    id: 3,
    title: "Elegant Dining Space",
    category: "Interior Design",
    image: project3,
    description: "A refined dining environment showcasing statement lighting, rich textures, and timeless elegance.",
  },
  {
    id: 4,
    title: "Spa-Inspired Bathroom",
    category: "Interior Design",
    image: project4,
    description: "A tranquil sanctuary combining natural stone, ambient lighting, and premium fixtures for ultimate relaxation.",
  },
];

export const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="portfolio" 
      className="py-24 md:py-32 px-6 bg-secondary"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy mb-4">
            Selected Works
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Curated projects showcasing design excellence
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer transition-all duration-700 delay-${index * 100} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-navy/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/70 transition-all duration-500 flex items-center justify-center">
                  <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-6">
                    <p className="text-sm uppercase tracking-wider mb-2 font-light">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-serif font-semibold">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-3xl font-serif font-bold text-navy">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <img
              src={selectedProject?.image}
              alt={selectedProject?.title}
              className="w-full aspect-[4/3] object-cover"
            />
            <div>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                {selectedProject?.category}
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {selectedProject?.description}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
