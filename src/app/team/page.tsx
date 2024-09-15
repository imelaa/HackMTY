"use client";

import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Cards from "../components/axios_card"; // Asegúrate de que la ruta sea correcta

export default function Page() {
  const [selectedOption, setSelectedOption] = useState<number>(1);

  const handleSelect = (index: number) => {
    setSelectedOption(index);
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar selectedOption={selectedOption} onSelect={handleSelect} />
      <main className="flex-1 ml-64 p-4 overflow-y-auto">
        <Cards />
      </main>
    </div>
  );
}
