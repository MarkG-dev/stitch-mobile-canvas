
import React from "react";
import { Zap } from "lucide-react";

const Navbar = () => {
  return (
    <header className="py-6 px-4 flex items-center justify-between">
      <button className="text-cream font-medium text-sm uppercase tracking-wide">
        MENU
      </button>
      
      <div className="flex items-center gap-2">
        <button className="text-cream font-medium text-sm uppercase tracking-wide">
          SIGN IN
        </button>
        <Zap size={20} className="text-neon" />
      </div>
      
      <button className="neon-border px-6 py-2 uppercase text-sm tracking-wide">
        CREATE
      </button>
    </header>
  );
};

export default Navbar;
