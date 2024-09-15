"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Card from "../components/rol_card";
import Sidebar from "../components/sidebar";
import Navbar from "../components/Navbar_dashboard";

export default function Page() {
  const [selectedOption, setSelectedOption] = useState<number>(1);
  const router = useRouter();
  const handleSelect = (index: number) => {
    setSelectedOption(index);
  };
  const handleSigClick = () => {
    router.push("/");
  };

  return (
    <>
      <Navbar />
      <div className="bg-[url('/Background.svg')] bg-cover bg-center h-screen">
        <div className="flex h-screen">
          <Sidebar selectedOption={selectedOption} onSelect={handleSelect} />
          <main className="flex-1 p-4 flex flex-col relative">
            <Card
              title="Rol"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut blandit libero, sed ultricies arcu. Maecenas sed nisl id odio malesuada laoreet. Morbi nulla enim, convallis nec tortor sed, hendrerit auctor ligula. Phasellus maximus non ex non laoreet. Aenean venenatis, elit eu hendrerit congue, augue erat sagittis velit, sed pellentesque dui lorem ut diam. Fusce sit amet bibendum diam. Cras arcu nibh, malesuada eu nibh quis, tempus molestie velit. Nullam quis luctus odio. Integer ultricies elit ut purus feugiat fringilla. Vestibulum ac tempus sem, ac varius orci. Pellentesque viverra massa sit amet auctor cursus. Praesent tellus nunc, dignissim non malesuada sed, viverra sed nulla. Nulla neque nibh, pretium ut enim dictum, molestie sagittis nulla. Nulla non placerat neque, eget ultricies nulla. Sed mauris orci, dignissim vitae ornare ac, laoreet maximus turpis. Mauris placerat eget ligula nec sollicitudin.
              Proin non erat a dui ullamcorper lobortis quis non magna. Quisque sed erat eu ex tincidunt egestas. Suspendisse placerat pretium elit sit amet finibus. Aliquam in dapibus tellus, sit amet varius quam. Duis nec risus eget sapien congue condimentum. Nunc ultrices massa nec erat laoreet pellentesque. Maecenas ut enim diam. Mauris ac hendrerit arcu, et condimentum nunc. Mauris tempus massa a eros aliquet, sit amet porttitor est tempor. Nam ultricies nibh placerat lectus tincidunt, non hendrerit arcu laoreet. Sed orci sapien, vehicula ac velit sed, interdum aliquam ipsum.
              Sed in metus felis. Nulla facilisi. Phasellus non magna vitae urna elementum ultricies in nec velit. Vestibulum feugiat, ipsum quis tincidunt tristique, tellus nisi varius augue, id iaculis lacus eros vitae ipsum. Nam rutrum quam a ipsum lacinia, at porttitor lectus fringilla. Integer vehicula pretium varius. Suspendisse potenti. Duis vel orci a ipsum porta lacinia in ac ex.
              In neque nibh, suscipit hendrerit ante sed, dictum egestas eros. In hac habitasse platea dictumst. Morbi pulvinar faucibus mauris aliquet fringilla. Vivamus egestas, sem vitae interdum suscipit, ex felis malesuada ligula, non scelerisque quam urna vel nisl. Ut ex augue, suscipit eget lacus vel, elementum dignissim massa. Sed eget aliquet elit. Maecenas vitae sem mauris. Phasellus et neque bibendum, facilisis erat id, laoreet odio. Integer ultricies magna non arcu cursus dictum."
            />
            <button
              className="absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleSigClick}
            >
              Siguiente
            </button>
          </main>
        </div>
      </div>
    </>
  );
}
