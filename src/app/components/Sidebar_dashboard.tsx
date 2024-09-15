"use client";
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';

interface SidebarProps {
  selectedOption: number;
  onSelect: (index: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedOption, onSelect }) => {
  
  const router = useRouter();
  
  return (
    <div className="h-screen w-2/12 bg-[#43444a] text-white flex flex-col rounded-t-2xl rounded-b-lg">
      <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center self-center justify-center text-black text-lg mt-5 ">
        <Image
          src="/" 
          alt="Logo"
          width={100}  
          height={100} 
        />
      </div>
      <div className="text-center py-3 font-bold text-xl">
        FutureFunds
      </div>
      <ul className="flex-1">
        <li
          onClick={() => router.push('/')}
          className={`px-4 py-2 cursor-pointer font-semibold text-center mx-3 rounded-[15px] my-5 transition-colors duration-500 ${
            selectedOption === 1 ? 'bg-white text-black' : 'hover:bg-slate-50 hover:text-black'
          }`}
        >
          Main Menu
        </li>
        <li
          onClick={() => router.push('/')}
          className={`px-4 py-2 cursor-pointer font-semibold text-center mx-3 rounded-[15px] my-5 transition-colors duration-500 ${
            selectedOption === 2 ? 'bg-white text-black' : 'hover:bg-slate-50 hover:text-black'
          }`}
        >
          Indice
        </li>
        <li
          onClick={() => router.push('/')}
          className={`px-4 py-2 cursor-pointer font-semibold text-center mx-3 rounded-[15px] my-5 transition-colors duration-500 ${
            selectedOption === 3 ? 'bg-white text-black' : 'hover:bg-slate-50 hover:text-black'
          }`}
        >
          Equipo
        </li>
        <li
          onClick={() => router.push('/')}
          className={`px-4 py-2 cursor-pointer font-semibold text-center mx-3 rounded-[15px] my-5 transition-colors duration-500 ${
            selectedOption === 3 ? 'bg-white text-black' : 'hover:bg-slate-50 hover:text-black'
          }`}
        >
          Rewards
        </li>
      </ul>
      <div className="px-4 py-2 text-sm text-gray-400">
        © FutureFunds
      </div>
    </div>
  );
};

export default Sidebar;
