"use client";

import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import { Progress } from "../components/ui/progress";

const ProgressBar = ({ steps, currentStep, onStepClick }: { steps: string[]; currentStep: number; onStepClick: (step: number) => void }) => {
  const progress = (currentStep / (steps.length - 1)) * 100;

  return (
    <div className="w-full mx-auto mt-4 relative">
      <Progress value={progress} className="w-full h-4 bg-gray-200 rounded-full" />
      <div className="absolute top-0 left-0 w-full flex justify-between" style={{ transform: 'translateY(-50%)' }}>
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => onStepClick(index)}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
              index <= currentStep ? "bg-[#d03027] text-white" : "bg-gray-200 text-gray-400"
            } focus:outline-none transition-colors duration-200`}
            disabled={index > currentStep + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="flex justify-between mt-4 text-lg">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`${
              index <= currentStep ? "text-[#d03027]" : "text-gray-400"
            }`}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
};

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
      <main className="flex-1 p-4">
        <ProgressBar steps={steps} currentStep={currentStep} onStepClick={handleStepClick} />
      </main>
    </div>
  );
}