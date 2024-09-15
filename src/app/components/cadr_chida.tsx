// components/CardWithScroll.tsx

import React from 'react';

interface CardWithScrollProps {
  title: string;
  content: React.ReactNode;
}

const CardWithScroll: React.FC<CardWithScrollProps> = ({ title, content }) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gray-200 px-40 py-200 text-lg font-semibold">
        {title}
      </div>
      <div className="p-4 h-96 overflow-auto">
        {content}
      </div>
    </div>
  );
};

export default CardWithScroll;
