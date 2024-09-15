import React from "react";

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="flex flex-1 items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl flex flex-col" style={{ minWidth: '300px' }}>
        <div className="flex-grow flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-4 text-center">{title}</h1>
            <p className="text-gray-700 text-center">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
