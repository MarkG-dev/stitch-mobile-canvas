
import React, { useEffect, useRef, useState } from "react";
import { Canvas, Image } from "fabric";

const DesignerCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fabricCanvas, setFabricCanvas] = useState<Canvas | null>(null);

  useEffect(() => {
    // Initialize Fabric canvas when component mounts
    if (!canvasRef.current) return;

    const canvas = new Canvas(canvasRef.current, {
      width: 300,
      height: 400,
      backgroundColor: "#000000",
      selection: true,
    });

    // Load t-shirt image as background
    Image.fromURL("/lovable-uploads/e866de64-1a88-451f-96c3-53f95478df39.png", (img) => {
      img.scaleToWidth(canvas.getWidth());
      img.set({
        selectable: false,
        evented: false,
        hoverCursor: 'default'
      });
      canvas.add(img);
      canvas.centerObject(img);
      canvas.renderAll();
    });
    
    // Enable touch events for mobile (using proper method for Fabric.js v6)
    canvas.setCursor('default');

    setFabricCanvas(canvas);

    // Cleanup function to dispose of canvas when component unmounts
    return () => {
      canvas.dispose();
    };
  }, []);

  return (
    <div className="designer-canvas-container">
      <canvas ref={canvasRef} className="border-2 border-neon"></canvas>
    </div>
  );
};

export default DesignerCanvas;
