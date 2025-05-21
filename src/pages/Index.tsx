
import React from "react";
import Navbar from "@/components/Navbar";
import TshirtDisplay from "@/components/TshirtDisplay";
import ProcessSteps from "@/components/ProcessSteps";
import { Container } from "@/components/ui/container";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex flex-col">
        <TshirtDisplay />
        
        <Container className="mt-auto mb-36">
          <h1 className="text-4xl md:text-5xl text-neon font-serif leading-tight text-center mb-4">
            App meets atelier.
          </h1>
          <p className="text-3xl md:text-4xl text-neon font-serif text-center leading-tight">
            The custom tees you always wanted.
          </p>
        </Container>
      </main>
      
      <ProcessSteps />
    </div>
  );
};

export default Index;
