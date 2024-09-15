"use client";

import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import IndexCard from "../components/indice_card";

export default function Page() {
  const [selectedOption, setSelectedOption] = useState<number>(1);

  const handleSelect = (index: number) => {
    setSelectedOption(index);
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex flex-1">
        <Sidebar selectedOption={selectedOption} onSelect={handleSelect} />
        <main className="flex-1 p-4 overflow-y-auto h-screen">
          {/* Contenido principal */}
          <IndexCard />
        </main>
      </div>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p>This is the footer</p>
      </footer>
    </div>
  );
}
