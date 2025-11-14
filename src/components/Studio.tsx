export const Studio = () => {
  return (
    <section id="studio" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-navy mb-6">
            Our Studio
          </h2>
          <p className="text-navy/70 max-w-2xl mx-auto leading-relaxed">
            A creative space where vision meets craftsmanship. Our studio combines
            traditional design principles with contemporary innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-serif text-2xl text-navy mb-4">
              Design Philosophy
            </h3>
            <p className="text-navy/70 mb-6 leading-relaxed">
              We believe in creating spaces that tell stories. Each project is
              approached with meticulous attention to detail, balancing aesthetics
              with functionality to deliver interiors that inspire and endure.
            </p>
            <p className="text-navy/70 leading-relaxed">
              Our team of experienced designers works collaboratively, bringing
              diverse perspectives to every project while maintaining a cohesive
              vision rooted in timeless design principles.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-navy pl-6">
              <h4 className="font-serif text-xl text-navy mb-2">Expert Team</h4>
              <p className="text-navy/70">
                15+ years of combined experience in residential and commercial design
              </p>
            </div>
            <div className="border-l-4 border-navy pl-6">
              <h4 className="font-serif text-xl text-navy mb-2">100+ Projects</h4>
              <p className="text-navy/70">
                Successfully completed spaces across various design styles
              </p>
            </div>
            <div className="border-l-4 border-navy pl-6">
              <h4 className="font-serif text-xl text-navy mb-2">Award Winning</h4>
              <p className="text-navy/70">
                Recognized for excellence in interior design and innovation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
