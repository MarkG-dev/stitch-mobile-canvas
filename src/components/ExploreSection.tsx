
import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type TShirtDesign = {
  name: string;
  image: string;
};

const designTemplates: TShirtDesign[] = [
  {
    name: "LEON THE PROFESSIONAL",
    image: "/lovable-uploads/b4297b9c-13bf-4953-ba1d-4d84bc85efdd.png"
  },
  {
    name: "WEDDING TOUR",
    image: "/lovable-uploads/b4297b9c-13bf-4953-ba1d-4d84bc85efdd.png"
  },
  {
    name: "EAT YOUR VEGGIES",
    image: "/lovable-uploads/b4297b9c-13bf-4953-ba1d-4d84bc85efdd.png"
  },
  {
    name: "THE JOHNSONS",
    image: "/lovable-uploads/b4297b9c-13bf-4953-ba1d-4d84bc85efdd.png"
  },
  {
    name: "TOMMIE",
    image: "/lovable-uploads/b4297b9c-13bf-4953-ba1d-4d84bc85efdd.png"
  },
  {
    name: "THE JOHNSONS BLACK",
    image: "/lovable-uploads/b4297b9c-13bf-4953-ba1d-4d84bc85efdd.png"
  },
];

const ExploreSection = () => {
  return (
    <div className="py-12 bg-transparent">
      <Container>
        <div className="flex flex-col mb-6">
          <h2 className="text-xl md:text-3xl font-serif text-white mb-2">
            START FROM PRE-BUILT DESIGNS
          </h2>
          <h2 className="text-xl md:text-3xl font-serif text-white">
            OR USE OUR FONT AND ELEMENTS LIBRARY
          </h2>
        </div>
        
        <div className="flex justify-end mb-6">
          <Button
            variant="outline"
            className="neon-border uppercase text-xs tracking-wide px-8 py-4"
          >
            EXPLORE
          </Button>
        </div>
        
        <div className="w-full overflow-hidden">
          <div className="flex overflow-x-auto gap-4 no-scrollbar pb-6">
            {designTemplates.map((design, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 min-w-[180px] sm:min-w-[220px]"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img 
                    src={design.image} 
                    alt={design.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ExploreSection;
