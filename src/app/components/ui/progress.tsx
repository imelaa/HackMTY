// components/ui/progress.tsx

import React from "react";

interface ProgressProps {
  steps: string[];
  currentStep: number;
  onStepClick: (step: number) => void;
}

const Progress: React.FC<ProgressProps> = ({ steps, currentStep, onStepClick }) => {
  const progress = (currentStep / (steps.length - 1)) * 100;

  return (
    <div className="w-full mx-auto mt-4 relative">
      <div className="w-full h-4 bg-gray-200 rounded-full">
        <div
          className="h-full w-full bg-[#d03027] rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="absolute top-0 left-0 w-full flex justify-between" style={{ transform: 'translateY(-40%)' }}>
        {steps.map((_, index) => {
          return (
            <button
              key={index}
              onClick={() => onStepClick(index)}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                index <= currentStep ? "bg-[#d03027] text-white" : "bg-gray-200 text-gray-400"
              } focus:outline-none transition-colors duration-200`}
              disabled={index > currentStep + 1}
            >
              <span className="absolute">{index + 1}</span> {/* Display number */}
            </button>
          );
        })}
      </div>
      <div className="flex justify-between mt-4 text-lg">
        {steps.map((step, index) => {
          const stepStatus = index < currentStep ? "Completed" : index === currentStep ? "In progress" : "Locked";
          return (
            <div
              key={index}
              className={`${
                index <= currentStep ? "text-[#d03027]" : "text-gray-400"
              }`}
            >
              {stepStatus}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Progress;