
import React from "react";
import { Container } from "@/components/ui/container";

const steps = [
  { number: "1", label: "UPLOAD" },
  { number: "2", label: "DESIGNER" },
  { number: "3", label: "STUDIO" }
];

const ProcessSteps = () => {
  return (
    <div className="fixed bottom-10 left-0 right-0">
      <Container>
        <div className="flex justify-between gap-2">
          {steps.map((step) => (
            <button 
              key={step.number}
              className="neon-border flex-1 py-3 text-center text-neon"
            >
              {step.number}
            </button>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ProcessSteps;
