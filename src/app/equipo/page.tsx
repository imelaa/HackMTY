"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "../../../public/logo.png";

const GoToMainButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/game");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[#D22E1E] text-white px-4 py-2 rounded hover:bg-[#B01E0E] mt-4"
    >
      Go to game
    </button>
  );
};

interface SidebarProps {
  selectedOption: number;
  onSelect: (index: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedOption, onSelect }) => {
  const router = useRouter();

  return (
    <div className="h-screen w-64 bg-[#d03027] text-white flex flex-col shadow-md z-50">
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black text-lg mt-5 mx-auto">
        <Image src={logo} alt="Logo" width={100} height={100} />
      </div>
      <div className="text-center py-3 font-bold text-xl">FutureFunds</div>
      <ul className="flex-1">
        {["Main Menu", "Indice", "Equipo", "Rewards"].map((text, index) => (
          <li
            key={text}
            onClick={() => {
              onSelect(index + 1);
              router.push(`/${text.toLowerCase().replace(" ", "-")}`);
            }}
            className={`px-4 py-2 cursor-pointer font-semibold text-center mx-3 rounded-[15px] my-5 transition-colors duration-500 ${
              selectedOption === index + 1
                ? "bg-white text-[#d03027]"
                : "text-white hover:text-[#d03027] hover:bg-red-700"
            }`}
          >
            {text}
          </li>
        ))}
      </ul>
      <div className="px-4 py-2 text-sm text-gray-200 text-center">
        © FutureFunds
      </div>
    </div>
  );
};

export default function Component() {
  const [selectedOption, setSelectedOption] = useState<number>(1);

  const handleSelect = (index: number) => {
    setSelectedOption(index);
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar selectedOption={selectedOption} onSelect={handleSelect} />
      <main className="flex-1 p-4">
        <GoToMainButton />
        {/* You can add more content here as needed */}
      </main>
    </div>
  );
}
