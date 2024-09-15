"use client";

import React from "react";
import Sidebar from "../components/sidebar"; // Adjust the path as needed
import FinanceGlossaryCard from "../components/FinanceGlossaryCard";

const FinanceGlossaryView: React.FC = () => {
  const [selectedOption, setSelectedOption] = React.useState(1);

  return (
    <div className="flex">
      <Sidebar selectedOption={selectedOption} onSelect={setSelectedOption} />
      <div className="flex-1 ml-64 p-10">
        {/* Show the finance glossary cards */}
        <FinanceGlossaryCard />
      </div>
    </div>
  );
};

export default FinanceGlossaryView;