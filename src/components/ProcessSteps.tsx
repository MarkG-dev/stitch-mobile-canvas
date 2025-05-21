
import React from "react";
import { Container } from "@/components/ui/container";

const steps = [
  { number: "1", label: "UPLOAD" },
  { number: "2", label: "DESIGNER" },
  { number: "3", label: "STUDIO" }
];

const ProcessSteps = () => {
  return (
    <div className="mb-6">
      <Container>
        <div className="flex justify-between gap-2">
          {steps.map((step) => (
            <button 
              key={step.number}
              className="neon-border flex-1 py-2 text-center"
            >
              <div className="text-neon text-lg">{step.number}</div>
              <div className="text-neon text-xs mt-1">{step.label}</div>
            </button>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ProcessSteps;
