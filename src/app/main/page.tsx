// src/app/page.tsx
"use client"; 

import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import Progress from '../components/ui/progress'; // Adjust the path as needed
import Crossword from '../components/CroosWord'; // Correct relative path

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

  // Sample terms for the crossword component
  const terms = [
    { word: "REACT", hint: "A popular JavaScript library for building user interfaces" },
    { word: "COMPONENT", hint: "A building block of React applications" }
  ];

  return (
    <div className="flex flex-col h-screen bg-white">
      <Sidebar selectedOption={selectedOption} onSelect={handleSelect} />
      <main className="flex-1 p-4">
        <Progress steps={steps} currentStep={currentStep} onStepClick={handleStepClick} />
        <Crossword terms={terms} /> {/* Include the Crossword component here */}
      </main>
    </div>
  );
}