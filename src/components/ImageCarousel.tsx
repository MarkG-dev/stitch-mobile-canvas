
import React, { useState, useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";

const images = [
  "/lovable-uploads/cce21ef8-2f56-443c-8cbe-d5f913c15b82.png",
  "/lovable-uploads/dc6e62c0-14af-4eda-be24-0c16abc1c8c8.png",
  "/lovable-uploads/4cc0c249-d2d1-4d4b-a40c-bbf0f1ce6ca8.png",
  "/lovable-uploads/c5d8be82-8c34-44c9-89c4-52cbc3c3fa29.png"
];

const ImageCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    axis: 'y',
    loop: true
  });
  
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    emblaApi.on("select", onSelect);
    
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative flex w-full mt-8 mb-8">
      {/* Navigation Dots */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 flex flex-col gap-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              selectedIndex === index 
                ? "bg-neon shadow-[0_0_10px_#CCFF00]" 
                : "bg-white/40 hover:bg-white/60"
            )}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Carousel */}
      <div className="w-full max-w-xs mx-auto pl-12">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex flex-col h-full">
            {images.map((src, index) => (
              <div key={index} className="flex-shrink-0 w-full min-h-[400px] flex items-center justify-center py-4">
                <div className="w-full relative overflow-hidden border-2 border-neon rounded-md shadow-[0_0_15px_rgba(204,255,0,0.5)]">
                  <img 
                    src={src} 
                    alt={`T-shirt design ${index + 1}`} 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
