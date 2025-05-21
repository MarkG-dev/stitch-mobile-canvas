
import React from "react";
import { Container } from "@/components/ui/container";
import { ScrollArea } from "@/components/ui/scroll-area";

type DesignItem = {
  name: string;
  image: string;
};

const designs: DesignItem[] = [
  {
    name: "LEON THE PROFESSIONAL",
    image: "/lovable-uploads/e866de64-1a88-451f-96c3-53f95478df39.png"
  },
  {
    name: "LEON THE PROFESSIONAL",
    image: "/lovable-uploads/e866de64-1a88-451f-96c3-53f95478df39.png"
  },
  {
    name: "LEON THE PROFESSIONAL",
    image: "/lovable-uploads/e866de64-1a88-451f-96c3-53f95478df39.png"
  },
  {
    name: "LEON THE PROFESSIONAL",
    image: "/lovable-uploads/e866de64-1a88-451f-96c3-53f95478df39.png"
  },
  {
    name: "LEON THE PROFESSIONAL",
    image: "/lovable-uploads/e866de64-1a88-451f-96c3-53f95478df39.png"
  }
];

const ExploreSection = () => {
  return (
    <div className="py-10 bg-transparent">
      <Container className="mb-6">
        <div className="max-w-3xl">
          <h2 className="md:text-3xl font-serif text-white mb-1 text-xs">
            START FROM PRE-BUILT DESIGNS OR USE OUR FONT AND ELEMENTS LIBRARY
          </h2>
          <p className="text-white/70 text-sm">
            (CUSTOM JUST FOR YOU)
          </p>
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <div className="flex-1"></div>
          <div className="neon-border px-4 py-1 uppercase text-xs tracking-wide">
            <span className="text-neon font-bold">EXPLORE</span>
          </div>
        </div>
        
        <ScrollArea className="w-full">
          <div className="flex gap-4 pb-4 w-max">
            {designs.map((design, index) => (
              <div key={index} className="neon-border w-[240px] p-4 flex-shrink-0">
                <img 
                  src={design.image} 
                  alt={design.name} 
                  className="h-56 w-full object-contain" 
                />
              </div>
            ))}
          </div>
        </ScrollArea>
      </Container>
    </div>
  );
};

export default ExploreSection;
