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
    <div className="flex h-screen bg-white">
      <Sidebar selectedOption={selectedOption} onSelect={handleSelect} />
      <main className="flex-1 p-4">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
