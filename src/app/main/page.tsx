"use client";

import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import Progress from '../components/ui/progress';
import Crossword from '../components/CroosWord';
import Simulator from '../components/simulator'; // Import the Simulator component
import terms from '../data/terms'; // Import the terms array

export default function Component() {
  const [selectedOption, setSelectedOption] = useState<number>(1);
  const [currentStep, setCurrentStep] = useState(0);

  const handleSelect = (index: number) => {
    setSelectedOption(index);
  };

  const steps = ["Start", "Loading", "Ready"];

  const handleStepClick = (step: number) => {
    if (step <= currentStep + 1) {
      setCurrentStep(step);
    }
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar selectedOption={selectedOption} onSelect={handleSelect} />
      <main className="flex-1 ml-64 p-4 overflow-y-auto">
        <Progress steps={steps} currentStep={currentStep} onStepClick={handleStepClick} />

        {/* Conditionally render the Crossword or Simulator component */}
        {currentStep < 1 ? (
          <Crossword terms={terms} />
        ) : (
          <Simulator /> 
        )}
      </main>
    </div>
  );
}