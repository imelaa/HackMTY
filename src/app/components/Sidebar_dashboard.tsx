"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface SidebarProps {
  selectedOption: number;
  onSelect: (index: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedOption, onSelect }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col w-2/12 h-screen bg-slate-950 text-white">
      <div className="flex flex-col items-center justify-center h-1/6">
        <h1 className="text-2xl">Dashboard</h1>
      </div>
      <ul>
        <li
          onClick={() => router.push("/")}
          className={`px-4 py-2 cursor-pointer hover:scale-105 active:scale-95  font-semibold text-center mx-3 rounded-[15px] my-5 transition-colors duration-500 ${
            selectedOption === 1
              ? "bg-white text-black"
              : "hover:bg-slate-50 hover:text-black"
          }`}
        >
          inicio
        </li>
        <li
          onClick={() => router.push("")}
          className={`px-4 py-2 cursor-pointer font-semibold text-center mx-3 rounded-[15px] my-5 transition-colors duration-500 ${
            selectedOption === 2
              ? "bg-white text-black"
              : "hover:bg-slate-50 hover:text-black"
          }`}
        >
          boton2
        </li>
        <li
          onClick={() => router.push("")}
          className={`px-4 py-2 cursor-pointer font-semibold text-center mx-3 rounded-[15px] my-5 transition-colors duration-500 ${
            selectedOption === 3
              ? "bg-white text-black"
              : "hover:bg-slate-50 hover:text-black"
          }`}
        >
          boton3
        </li>
      </ul>
      <div className="px-4 py-2 text-sm text-gray-400">© The Vank 2024</div>
    </div>
  );
};
export default Sidebar;
