
import React from "react";
import { Container } from "@/components/ui/container";
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
    name: "Classic Crew Neck",
    price: "$24.99",
    colors: ["Black", "White", "Gray"],
    sizes: ["S", "M", "L", "XL"],
    image: "/lovable-uploads/e866de64-1a88-451f-96c3-53f95478df39.png"
  },
  {
    name: "Premium V-Neck",
    price: "$29.99",
    colors: ["Navy", "Burgundy", "Forest"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/lovable-uploads/e866de64-1a88-451f-96c3-53f95478df39.png"
  },
  {
    name: "Limited Edition Print",
    price: "$34.99",
    colors: ["Black", "White"],
    sizes: ["M", "L", "XL"],
    image: "/lovable-uploads/e866de64-1a88-451f-96c3-53f95478df39.png"
  }
];

const ProductShowcase = () => {
  return (
    <div className="py-10">
      <Container>
        <h2 className="text-3xl font-serif text-neon text-center mb-8">Our Shirts</h2>
        
        <div className="flex justify-center">
          <div 
            className="flex flex-col items-start gap-5 w-full max-w-[430px]"
          >
            {shirts.map((shirt, index) => (
              <div 
                key={index} 
                className="neon-border w-full p-4 flex flex-col"
              >
                <div className="flex gap-4 mb-3">
                  <div className="w-24 h-24 overflow-hidden">
                    <img 
                      src={shirt.image} 
                      alt={shirt.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-neon font-bold">{shirt.price}</div>
                    <div className="text-xs text-white/80 mt-1">
                      <span className="font-semibold">Colors:</span> {shirt.colors.join(", ")}
                    </div>
                    <div className="text-xs text-white/80 mt-1">
                      <span className="font-semibold">Sizes:</span> {shirt.sizes.join(", ")}
                    </div>
                  </div>
                </div>
                <div className="text-sm font-medium">{shirt.name}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductShowcase;
