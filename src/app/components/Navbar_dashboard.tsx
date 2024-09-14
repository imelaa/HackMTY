"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

interface NavbarProps {
    selectedOption:number;
    onSelect: (index: number) => void;
}

const Navbar: React.FC<NavbarProps> = ({ selectedOption, onSelect }) => {

    const router = useRouter();

    return (
        <div className="bg-neutral-900 fixed top-0 w-fit text-color-6 p-3 z-50 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                
                {/* Left - Logo */}
                <div className="flex-shrink-0">
                    <button 
                        onClick={() => router.push('/')} 
                        className="text-xl font-bold bg-customGreen text-gray-400 py-2 px-4 rounded-3xl transition-transform duration-300 transform hover:scale-110"
                    >
                        Navbar1
                    </button>
                </div>

                {/* Center - Navigation Links */}
                <div className="flex-grow flex  space-x-4">
                    <button 
                        onClick={() => router.push('/')} 
                        className="text-xl font-bold bg-customGreen text-gray-400 py-2 px-4 rounded-3xl transition-transform duration-300 transform hover:scale-110"
                    >
                        Navbar2
                    </button>
                    <button 
                        onClick={() => router.push('/')} 
                        className="text-xl font-bold bg-customGreen text-gray-400 py-2 px-4 rounded-3xl transition-transform duration-300 transform hover:scale-110"
                    >
                        Navbar3
                    </button>
                </div>

                {/* Right - Additional Links */}
                <div className="flex-shrink-0">
                    <button
                        onClick={() => router.push('/')} 
                        className="text-xl font-bold bg-customGreen text-gray-400 py-2 px-4 rounded-3xl transition-transform duration-300 transform hover:scale-110"
                    >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                             <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                            </svg>

                    </button>
                </div>
                

            </div>
        </div>
    );
}

export default Navbar;
