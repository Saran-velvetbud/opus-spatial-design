import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Philosophy } from "@/components/Philosophy";
import { Clients } from "@/components/Clients";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Philosophy />
      <Clients />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
