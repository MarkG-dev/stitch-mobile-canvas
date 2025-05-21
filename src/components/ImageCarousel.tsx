
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Container } from "@/components/ui/container";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";

const carouselImages = [
  {
    src: "/lovable-uploads/8169ebfb-8a68-4f8e-81ff-c051c7a51ef1.png",
    alt: "T-shirt design with T-SHIRT.APP text"
  },
  {
    src: "/lovable-uploads/231717c1-14a3-43ef-93af-15e508c54816.png",
    alt: "T-shirt with font options"
  },
  {
    src: "/lovable-uploads/fe334936-b9e6-42aa-84c9-47753054f19c.png",
    alt: "T-shirt with wrestler mask design"
  },
  {
    src: "/lovable-uploads/99e3097b-9e4d-47b1-a347-f2835cde3908.png",
    alt: "T-shirt with art search interface"
  },
  {
    src: "/lovable-uploads/5fbf5c16-f9fa-4362-9563-e6e8e0944419.png",
    alt: "T-shirt with 3D metal text"
  }
];

const ImageCarousel = () => {
  return (
    <div className="py-8 bg-black/60 backdrop-blur-sm">
      <Container className="max-w-sm mx-auto">
        <h2 className="text-2xl md:text-3xl text-neon font-serif text-center mb-6">
          Design inspiration
        </h2>
        
        <div className="relative">
          <ScrollArea className="h-[350px]">
            <div className="flex flex-col gap-4">
              {carouselImages.map((image, index) => (
                <div 
                  key={index}
                  className="border-2 border-neon rounded-md overflow-hidden"
                >
                  <AspectRatio ratio={4/3}>
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </div>
              ))}
            </div>
          </ScrollArea>
          
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 flex gap-2">
            {carouselImages.map((_, index) => (
              <button 
                key={index}
                className={`h-2 w-2 rounded-full ${index === 0 ? 'bg-neon' : 'bg-neon/40'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ImageCarousel;
