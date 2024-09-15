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
    <div className="fixed top-20 left-0 w-64 h-screen bg-transparent text-white z-30 ">
      <div className="flex flex-col items-center justify-center h-1/6">
        <h1 className="text-2xl">Logo</h1>
      </div>
      <ul className="flex flex-col mt-4">
        {[{ name: "Inicio", route: "/" }, { name: "info", route: "/boton2" }, { name: "indice", route: "/boton3" }, { name: "Equipo", route: "/boton3" }, { name: "Recompensas", route: "/boton3" }].map((item, index) => (
          <li
            key={index}
            onClick={() => router.push(item.route)}
            className={`px-4 py-2 cursor-pointer font-semibold text-center mx-3 rounded-[15px] my-2 transition-colors duration-500 ${
              selectedOption === index + 1
                ? "bg-white text-black"
                : "hover:bg-slate-50 hover:text-black"
            }`}
          >
            {item.name}
          </li>
        ))}
      </ul>
      <div className="px-4 py-2 text-sm text-gray-400 absolute bottom-0 left-0 w-full text-center">
        © The Vank 2024
      </div>
    </div>
  );
};

export default Sidebar;
