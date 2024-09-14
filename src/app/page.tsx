"use client";
import { useRouter } from "next/navigation";
import React from "react";
import {Button} from "flowbite-react";
export default function Home() {
  const router = useRouter();

  const handleDashboard1Click = () => {
    router.push("/dashboard1");
  };
  const handleDashboard2Click = () => {
    router.push("/dashboard2");
  };
  const handleDashboard3Click = () => {
    router.push("/dashboard3");
  };

  return (
    <>
      <div className="bg-[url('/Background.svg')] bg-cover bg-center h-screen">
        <main className="flex min-h-screen flex-col items-center justify-between p-24 font-Oswald">

        <h1 className="text-8xl font- font-title">This is vank</h1>
        <h2 className="text-4xl font-title">A place where u can learn</h2>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleDashboard1Click}
          >
            Go to Dashboard1
          </button>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleDashboard2Click}
          >
            Go to Dashboard2
          </button>

          <button
            className="bg-opacity-85 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            onClick={handleDashboard2Click}
          >
            Go to Dashboard3
          </button>

          
              <p className="text-2xl text-center font-title">
                  
              </p>  
              </main>
      </div>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p>This is the footer</p>
      </footer>
    </>
  );
}
