import React from "react";
import { Container } from "@/components/ui/container";
import { Link } from "react-router-dom";
const steps = [{
  number: "1",
  label: "UPLOAD",
  path: "/"
}, {
  number: "2",
  label: "DESIGNER",
  path: "/designer"
}, {
  number: "3",
  label: "STUDIO",
  path: "/studio"
}];
interface ProcessStepsProps {
  active?: number;
}
const ProcessSteps: React.FC<ProcessStepsProps> = ({
  active = 0
}) => {
  return <div className="mb-6">
      
    </div>;
};
export default ProcessSteps;