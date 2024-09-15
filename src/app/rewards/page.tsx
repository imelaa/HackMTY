"use client";

import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Card from "../components/card";

const cardData = [
  {
    imageUrl: "/imagenes/1.png",
    title: "Medalla de Oro",
    description: "Premio por excelencia en la Categoría 1",
  },
  {
    imageUrl: "/imagenes/2.png",
    title: "Medalla de Plata",
    description: "Premio por segundo lugar en la Categoría 2",
  },
  {
    imageUrl: "/imagenes/3.png",
    title: "Medalla de Bronce",
    description: "Premio por tercer lugar en la Categoría 3",
  },
  {
    imageUrl: "/imagenes/4.png",
    title: "Medalla de Logro",
    description: "Reconocimiento por logros especiales",
  },
  {
    imageUrl: "/imagenes/5.png",
    title: "Medalla de Participación",
    description: "Premio por participación",
  },
  {
    imageUrl: "/imagenes/6.png",
    title: "Medalla de Mérito",
    description: "Por mérito notable",
  },
  {
    imageUrl: "/imagenes/7.png",
    title: "Medalla de Honor",
    description: "Por honor y dedicación",
  },
  {
    imageUrl: "/imagenes/8.png",
    title: "Medalla de Distinción",
    description: "Por distinción en el rendimiento",
  },
  {
    imageUrl: "/imagenes/9.png",
    title: "Medalla de Excelencia",
    description: "Por excelencia en todas las áreas",
  },
];

export default function Rewards() {
  const [selectedOption, setSelectedOption] = useState<number>(1);

  const handleSelect = (index: number) => {
    setSelectedOption(index);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar selectedOption={selectedOption} onSelect={handleSelect} />

      {/* Main Content */}
      <main className="flex-1 ml-64 p-6 overflow-y-auto bg-gray-50">
        {/* Adjust the padding and margins for responsiveness */}
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">Rewards</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cardData.map((card, index) => (
              <Card
                key={index}
                imageUrl={card.imageUrl}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}