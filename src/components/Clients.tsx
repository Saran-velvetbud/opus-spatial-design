import { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import googleLogo from "@/assets/client-google.png";
import amazonLogo from "@/assets/client-amazon.png";
import weworkLogo from "@/assets/client-wework.png";
import airbnbLogo from "@/assets/client-airbnb.png";
import teslaLogo from "@/assets/client-tesla.png";
import microsoftLogo from "@/assets/client-microsoft.png";
import appleLogo from "@/assets/client-apple.png";
import nikeLogo from "@/assets/client-nike.png";

const clients = [
  { name: "Google", logo: googleLogo },
  { name: "Amazon", logo: amazonLogo },
  { name: "WeWork", logo: weworkLogo },
  { name: "Airbnb", logo: airbnbLogo },
  { name: "Tesla", logo: teslaLogo },
  { name: "Microsoft", logo: microsoftLogo },
  { name: "Apple", logo: appleLogo },
  { name: "Nike", logo: nikeLogo },
];

export const Clients = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl text-navy mb-4">
            Trusted By Industry Leaders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We've had the privilege of collaborating with some of the world's most innovative brands
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {clients.map((client, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5"
              >
                <div className="flex items-center justify-center h-32 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 group">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-16 max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
