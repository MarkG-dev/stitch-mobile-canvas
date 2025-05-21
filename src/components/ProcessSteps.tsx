
import React from "react";
import { Container } from "@/components/ui/container";

const steps = [
  { number: "1", label: "UPLOAD" },
  { number: "2", label: "DESIGNER" },
  { number: "3", label: "STUDIO" }
];

const ProcessSteps = () => {
  return (
    <div className="fixed bottom-20 left-0 right-0">
      <Container className="grid grid-cols-3 gap-2 border border-neon">
        {steps.map((step) => (
          <div key={step.number} className="step-item">
            <div className="step-number">{step.number}</div>
            <div className="step-label">{step.label}</div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default ProcessSteps;
