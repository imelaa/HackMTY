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
    <div className="flex h-screen bg-white">
        <Sidebar selectedOption={selectedOption} onSelect={handleSelect} />
        <main className="flex-1 ml-64 p-4 overflow-y-auto">
        <IndexCard />
        </main>

    </div>
  );
}
