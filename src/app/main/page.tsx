"use client";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar_dashboard";
import Navbar from "../components/Navbar_dashboard";
import CardWithScroll from "../components/cadr_chida";

export default function Page() {
  const [selectedOption, setSelectedOption] = useState<number>(1);

  const handleSelect = (index: number) => {
    setSelectedOption(index);
  };

  return (
    <>
      <Navbar />
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar selectedOption={selectedOption} onSelect={handleSelect} />

        {/* Main content */}
        <main className="flex-1 bg-background overflow-auto">
          <div className="flex flex-col h-full p-40 ">
            <CardWithScroll
              title="Información Importante"
              content={
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus imperdiet ligula eu turpis pretium, eget dapibus
                    lacus dictum. Integer eget quam sapien. Curabitur vel neque
                    at dui consectetur tempor ut at nunc. Nulla facilisi. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                    imperdiet ligula eu turpis pretium, eget dapibus lacus
                    dictum. Integer eget quam sapien. Curabitur vel neque at dui
                    consectetur tempor ut at nunc. Nulla facilisi. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Phasellus
                    imperdiet ligula eu turpis pretium, eget dapibus lacus
                    dictum. Integer eget quam sapien. Curabitur vel neque at dui
                    consectetur tempor ut at nunc. Nulla facilisi. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Phasellus
                    imperdiet ligula eu turpis pretium, eget dapibus lacus
                    dictum. Integer eget quam sapien. Curabitur vel neque at dui
                    consectetur tempor ut at nunc. Nulla facilisi.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus imperdiet ligula eu turpis pretium, eget dapibus
                    lacus dictum. Integer eget quam sapien. Curabitur vel neque
                    at dui consectetur tempor ut at nunc. Nulla facilisi. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                    imperdiet ligula eu turpis pretium, eget dapibus lacus
                    dictum. Integer eget quam sapien. Curabitur vel neque at dui
                    consectetur tempor ut at nunc. Nulla facilisi. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Phasellus
                    imperdiet ligula eu turpis pretium, eget dapibus lacus
                    dictum. Integer eget quam sapien. Curabitur vel neque at dui
                    consectetur tempor ut at nunc. Nulla facilisi. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Phasellus
                    imperdiet ligula eu turpis pretium, eget dapibus lacus
                    dictum. Integer eget quam sapien. Curabitur vel neque at dui
                    consectetur tempor ut at nunc. Nulla facilisi. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Phasellus
                    imperdiet ligula eu turpis pretium, eget dapibus lacus
                    dictum. Integer eget quam sapien. Curabitur vel neque at dui
                    consectetur tempor ut at nunc. Nulla facilisi.
                  </p>
                  {/* Puedes agregar más contenido aquí */}
                </div>
              }
            />
          </div>
        </main>
      </div>
    </>
  );
}
