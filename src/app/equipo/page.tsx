"use client";

import React, { useState } from "react";
import Sidebar from "../components/sidebar";

export default function Component() {
  const [selectedOption, setSelectedOption] = useState<number>(1);

  const handleSelect = (index: number) => {
    setSelectedOption(index);
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar selectedOption={selectedOption} onSelect={handleSelect} />
      <main className="flex-1 p-4">
        {/* You can add other content here if needed */}
      </main>
    </div>
  );
}