
import React from "react";
import { Container } from "@/components/ui/container";

interface DesignerToolbarProps {
  selectedTool: string | null;
  onToolSelect: (tool: string) => void;
}

const DesignerToolbar: React.FC<DesignerToolbarProps> = ({ 
  selectedTool, 
  onToolSelect 
}) => {
  const tools = [
    { id: "text", label: "Text" },
    { id: "shapes", label: "Shapes" },
    { id: "upload", label: "Upload" },
    { id: "search", label: "Search" },
    { id: "layers", label: "Layers" }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t-2 border-neon py-2">
      <Container>
        <div className="flex justify-between items-center">
          {tools.map((tool) => (
            <button
              key={tool.id}
              className={`p-2 flex flex-col items-center ${
                selectedTool === tool.id ? "text-neon" : "text-white"
              }`}
              onClick={() => onToolSelect(tool.id)}
            >
              <div className="h-6 w-6 mb-1 flex items-center justify-center">
                {/* Placeholder for icon */}
                <div className={`w-5 h-5 rounded-full ${
                  selectedTool === tool.id ? "bg-neon" : "bg-white/50"
                }`}></div>
              </div>
              <span className="text-xs">{tool.label}</span>
            </button>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default DesignerToolbar;
