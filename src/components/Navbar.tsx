
import React from "react";
import { Zap } from "lucide-react";

const Navbar = () => {
  return (
    <header className="py-4 px-4 flex items-center justify-between">
      <button className="text-cream font-medium text-xs uppercase tracking-wide">
        MENU
      </button>
      
      <div className="flex items-center gap-1">
        <button className="text-cream font-medium text-xs uppercase tracking-wide">
          SIGN IN
        </button>
        <Zap size={16} className="text-neon" />
      </div>
      
      <button className="neon-border px-4 py-1 uppercase text-xs tracking-wide">
        CREATE
      </button>
    </header>
  );
};

export default Navbar;
