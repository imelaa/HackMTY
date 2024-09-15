"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import logo from "/public/logo.svg";

interface SidebarProps {
  selectedOption: number
  onSelect: (index: number) => void
}

const Sidebar: React.FC<SidebarProps> = ({ selectedOption, onSelect }) => {
  const router = useRouter()

  return (
    <div className="h-screen w-64 bg-[#d03027] text-white flex flex-col shadow-md z-50">
      <div className=" h-32 bg-white w-full flex items-center justify-center text-black text-lg mt-5 mx-auto">
        <Image src={logo} alt="Logo"  />
      </div>
      
      <ul className="flex-1">
        {["Main Menu", "Indice", "Equipo", "Rewards"].map((text, index) => (
          <li
            key={text}
            onClick={() => {
              onSelect(index + 1)
              router.push(`/${text.toLowerCase().replace(" ", "-")}`)
            }}
            className={`px-4 py-2 cursor-pointer font-semibold text-center mx-3 rounded-[5px] my-5 transition-colors duration-500 ${
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
  )
}
export default Sidebar;
