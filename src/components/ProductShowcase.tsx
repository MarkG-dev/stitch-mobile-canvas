
import React from "react";
import { Container } from "@/components/ui/container";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

type ShirtProduct = {
  name: string;
  price: string;
  colors: string[];
  sizes: string[];
  image: string;
};

const shirts: ShirtProduct[] = [
  {
    name: "NAME",
    price: "$22-$38",
    colors: ["WHITE", "BLACK"],
    sizes: ["S", "M", "L", "XL"],
    image: "/lovable-uploads/e866de64-1a88-451f-96c3-53f95478df39.png"
  }, 
  {
    name: "NAME",
    price: "$22-$38",
    colors: ["WHITE", "BLACK"],
    sizes: ["S", "M", "L", "XL"],
    image: "/lovable-uploads/e866de64-1a88-451f-96c3-53f95478df39.png"
  }, 
  {
    name: "NAME",
    price: "$22-$38",
    colors: ["WHITE", "BLACK"],
    sizes: ["S", "M", "L", "XL"],
    image: "/lovable-uploads/e866de64-1a88-451f-96c3-53f95478df39.png"
  }, 
  {
    name: "NAME",
    price: "$22-$38",
    colors: ["WHITE", "BLACK"],
    sizes: ["S", "M", "L", "XL"],
    image: "/lovable-uploads/e866de64-1a88-451f-96c3-53f95478df39.png"
  }
];

const ProductShowcase = () => {
  return (
    <div className="py-10 bg-transparent">
      <Container className="mb-6">
        <div className="max-w-3xl">
          <h2 className="md:text-3xl font-serif text-white mb-1 text-xs">
            THE TEES THE BIG BRANDS USE
          </h2>
          <p className="text-white/70 text-sm">
            (BUT BUILT FOR YOU)
          </p>
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <div className="flex-1"></div>
          <div className="neon-border px-4 py-1 uppercase text-xs tracking-wide">
            <span className="text-neon font-bold">PRODUCT</span>
          </div>
        </div>
        
        <div className="w-full">
          <ScrollArea className="w-full" orientation="horizontal">
            <div className="flex gap-4 pb-4 min-w-max">
              {shirts.map((shirt, index) => (
                <div key={index} className="neon-border flex-shrink-0 w-[280px] p-4 flex flex-col">
                  <div className="mb-4 flex justify-center">
                    <div className="w-36 h-40 overflow-hidden">
                      <img src={shirt.image} alt={shirt.name} className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-white font-bold">{shirt.price}</div>
                    <div className="text-sm text-white/80 uppercase">
                      {shirt.colors.join(" / ")}
                    </div>
                    <div className="text-sm text-white/80 mt-1">
                      {shirt.sizes.join(" ")}
                    </div>
                  </div>
                  <div className="text-xl text-white font-bold">{shirt.name}</div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </Container>
    </div>
  );
};

export default ProductShowcase;
