"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import logo from "/public/logo.svg";

interface SidebarProps {
  selectedOption: number;
  onSelect: (index: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedOption, onSelect }) => {
  const router = useRouter();
  const pathname = usePathname();

  // Links as a constant
  const links = ["Main", "Wiki", "Team", "Rewards"];

  useEffect(() => {
    const currentPathIndex = links.findIndex(
      (link) => `/${link.toLowerCase().replace(" ", "-")}` === pathname
    );
    if (currentPathIndex !== -1) {
      onSelect(currentPathIndex + 1);
    }
  }, [pathname, onSelect, links]);

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-[#d03027] text-white flex flex-col shadow-lg z-50">
      <div className="h-32 bg-white w-full flex items-center justify-center text-black p-4">
        <Image src={logo} alt="Logo" className=" w-auto" />
      </div>

      <ul className="flex-1 overflow-y-auto">
        {links.map((text, index) => (
          <li
            key={text}
            onClick={() => {
              onSelect(index + 1);
              router.push(`/${text.toLowerCase().replace(" ", "-")}`);
            }}
            className={`px-4 py-3 cursor-pointer font-semibold text-center mx-2 rounded-lg my-2 transition-colors duration-300 ${
              selectedOption === index + 1
                ? "bg-white text-[#d03027] shadow-lg"
                : "text-white hover:text-[#d03027] hover:bg-red-700"
            }`}
          >
            {text}
          </li>
        ))}
      </ul>

      <div className="px-4 py-3 text-sm text-gray-300 text-center border-t border-white">
        © FutureFunds
      </div>
    </div>
  );
};

export default Sidebar;