"use client";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar_dashboard";
import Navbar from "../components/Navbar_dashboard";
import { Card } from "flowbite-react";
export default function Page() {
  const [selectedOption, setSelectedOption] = useState<number>(1);

  const handleSelect = (index: number) => {
    setSelectedOption(index);
  };

  return (
    <>
      <div className="bg-[url('/Background.svg')] bg-cover bg-center overflow-hidden h-screen">
        <Navbar selectedOption={selectedOption} onSelect={handleSelect} />
        <div className="flex mt-20">
          <Sidebar selectedOption={selectedOption} onSelect={handleSelect} />
        </div>

        <div className="flex h-screen overflow-hidden">
          <div className="flex-1 bg-background overflow-auto p-8 flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center"></div>
          </div>
        </div>
      </div>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p>This is the footer</p>
      </footer>
    </>
  );
}
