"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import logo from "../../../public/logo.png";

interface SidebarProps {
  selectedOption: number;
  onSelect: (index: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedOption, onSelect }) => {
  const router = useRouter();

  return (
    <div className="h-screen w-64 bg-[#d03027] text-white flex flex-col rounded-r-lg shadow-md z-50">
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black text-lg mt-5 mx-auto">
        <Image src={logo} alt="Logo" width={100} height={100} />
      </div>
      <div className="text-center py-3 font-bold text-xl">FutureFunds</div>
      <ul className="flex-1">
        {["Main Menu", "Indice", "Equipo", "Rewards"].map((text, index) => (
          <li
            key={text}
            onClick={() => {
              onSelect(index + 1); // Update selected option
              router.push(`/${text.toLowerCase().replace(" ", "-")}`); // Example routing
            }}
            className={`px-4 py-2 cursor-pointer font-semibold text-center mx-3 rounded-[15px] my-5 transition-colors duration-500 ${
              selectedOption === index + 1
                ? "bg-white text-[#d03027]" // Active state
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

export default Sidebar;
