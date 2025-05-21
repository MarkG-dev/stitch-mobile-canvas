
import React from "react";
import { Container } from "@/components/ui/container";
import { Link } from "react-router-dom";

const steps = [
  { number: "1", label: "UPLOAD", path: "/" },
  { number: "2", label: "DESIGNER", path: "/designer" },
  { number: "3", label: "STUDIO", path: "/studio" }
];

interface ProcessStepsProps {
  active?: number;
}

const ProcessSteps: React.FC<ProcessStepsProps> = ({ active = 0 }) => {
  return (
    <div className="mb-6">
      <Container>
        <div className="flex justify-between gap-2">
          {steps.map((step, index) => (
            <Link 
              key={step.number}
              to={step.path}
              className={`neon-border flex-1 py-2 text-center ${
                active === index ? "bg-neon/20" : ""
              }`}
            >
              <div className={`${active === index ? "text-black" : "text-neon"} text-lg`}>
                {step.number}
              </div>
              <div className={`${active === index ? "text-black" : "text-neon"} text-xs mt-1`}>
                {step.label}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ProcessSteps;
