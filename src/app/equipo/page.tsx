'use client';
import { useRouter } from "next/navigation";
import React from "react";
// import equipos_card  from "../components/equipos_card";
import {Button} from "flowbite-react";
export default function Home() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };
  const handleSingingClick = () => {
    router.push("/singin");
  };
return (
    <>
    
    </>
)
}