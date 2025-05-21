
import React from "react";

const SideToolbar = () => {
  const tools = [
    { id: "rotate", label: "Rotate" },
    { id: "resize", label: "Resize" },
    { id: "delete", label: "Delete" }
  ];
  
  return (
    <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
      <div className="flex flex-col space-y-4">
        {tools.map((tool) => (
          <button
            key={tool.id}
            className="w-10 h-10 rounded-full bg-black border-2 border-neon flex items-center justify-center text-neon"
            aria-label={tool.label}
          >
            {/* Placeholder for icon */}
            <div className="w-5 h-5 bg-neon/50 rounded-full"></div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideToolbar;
