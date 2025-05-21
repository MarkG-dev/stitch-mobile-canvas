
import React, { useState } from "react";
import { Container } from "@/components/ui/container";
import Navbar from "@/components/Navbar";
import ProcessSteps from "@/components/ProcessSteps";
import DesignerCanvas from "@/components/DesignerCanvas";
import DesignerToolbar from "@/components/DesignerToolbar";
import SideToolbar from "@/components/SideToolbar";

const Designer = () => {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [activePanel, setActivePanel] = useState<string | null>(null);

  const handleToolSelect = (tool: string) => {
    setSelectedTool(tool);
    setActivePanel(tool);
  };

  const handleClosePanel = () => {
    setActivePanel(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ProcessSteps active={1} />
      
      <main className="flex-1 flex flex-col relative">
        {/* Main Canvas Area */}
        <div className="flex-1 flex items-center justify-center overflow-hidden">
          <DesignerCanvas />
        </div>
        
        {/* Side Toolbar - Appears when an object is selected */}
        <SideToolbar />
        
        {/* Bottom Toolbar */}
        <DesignerToolbar 
          selectedTool={selectedTool} 
          onToolSelect={handleToolSelect} 
        />

        {/* Active Panel Area - Slides up from bottom when a tool is selected */}
        {activePanel && (
          <div className="absolute bottom-0 left-0 right-0 bg-black border-t-2 border-neon z-10 h-3/4 rounded-t-3xl">
            <div className="p-4">
              <button 
                onClick={handleClosePanel}
                className="absolute top-4 right-4 text-neon"
              >
                Close
              </button>
              <h2 className="text-neon text-xl">{activePanel}</h2>
              {/* Panel content will be rendered here based on activePanel */}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Designer;
