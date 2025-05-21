
import React from "react";
import { Container } from "@/components/ui/container";

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
        
        <div className="flex flex-col items-start gap-5 w-full">
          <div className="flex overflow-x-auto pb-4 gap-4 no-scrollbar">
            {designs.map((design, index) => (
              <div key={index} className="neon-border flex-shrink-0 w-[240px] p-4 flex flex-col">
                <div className="mb-4 flex justify-center">
                  <div className="w-36 h-40 overflow-hidden">
                    <img src={design.image} alt={design.name} className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="text-xl text-white font-bold text-center">{design.name}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ExploreSection;
