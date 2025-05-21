import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Circle, CircleDot } from "lucide-react";
const features = [{
  title: "Custom Designs",
  description: "Create unique, personalized t-shirt designs with our easy-to-use tools.",
  image: "/lovable-uploads/dea97087-6817-49f8-b641-cc8d3072f395.png"
}, {
  title: "Premium Quality",
  description: "All our t-shirts are made with high-quality materials that last.",
  image: "/lovable-uploads/3e1e4b7a-2633-4de7-b363-87bf5c5120a6.png"
}, {
  title: "Fast Delivery",
  description: "Get your custom t-shirts delivered to your doorstep in record time.",
  image: "/lovable-uploads/7f0dff18-d233-4d16-949d-e5d5f21c65d2.png"
}, {
  title: "Satisfaction Guaranteed",
  description: "Not happy with your order? We'll make it right, guaranteed.",
  image: "/lovable-uploads/2c91bf7d-be12-4aca-bdef-d016cba04c77.png"
}];
const FeatureCarousel = () => {
  const isMobile = useIsMobile();
  const [api, setApi] = React.useState<any>(null);
  const [current, setCurrent] = React.useState(0);
  const scrollTo = React.useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);
  React.useEffect(() => {
    if (!api) return;
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return <div className="py-12">
      <Container className="relative">
        <h2 className="text-3xl font-serif text-neon text-center mb-8">Features</h2>
        
        
      </Container>
    </div>;
};
export default FeatureCarousel;