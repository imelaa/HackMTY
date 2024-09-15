import React from "react";
import Image from "next/image";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
      <div className="w-full h-32 overflow-hidden rounded-t-lg mb-2">
        <Image
          src={imageUrl}
          alt={title}
          width={200} // Ajusta el tamaño según sea necesario
          height={200} // Ajusta el tamaño según sea necesario
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600 mt-1 text-center">{description}</p>
    </div>
  );
};

export default Card;
