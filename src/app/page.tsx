"use client";
import { useRouter } from "next/navigation";
import React from "react";
import {Button} from "flowbite-react";
export default function Home() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };
  const handleSingingClick = () => {
    router.push("/signup");
  };


  return (
    <>
      <div className="bg-[url('/Background.svg')] bg-cover bg-center h-screen">
        <main className="flex min-h-screen flex-col items-center justify-between p-24 font-Oswald">

        <h1 className="text-8xl font- font-title">This is FutureFunds</h1>
        <h2 className="text-4xl font-title">A place where u can learn</h2>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLoginClick}
          >
            Login
          </button>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSingingClick}
          >
            Sing in
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
