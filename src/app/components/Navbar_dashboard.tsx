import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [showRoleTooltip, setShowRoleTooltip] = useState(false);
  const [showProfileTooltip, setShowProfileTooltip] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-transparent">
      {/* Centro */}
      <div
        className="relative mx-auto"
        onMouseEnter={() => setShowRoleTooltip(true)}
        onMouseLeave={() => setShowRoleTooltip(false)}
      >
        {showRoleTooltip && (
          <div className="absolute top-full mt-2 px-4 py-2 text-white bg-slate-600 rounded-md max-w-[60ch] whitespace-normal break-words">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        )}
      </div>

      {/* Imagen en la extrema derecha */}
      <div className="relative">
        <button
          className={` bg-slate-950 rounded-full flex items-center justify-center transition-transform duration-300 ease-in-out ${
            showProfileTooltip ? "w-24 h-24" : ""
          }`}
          style={{
            position: "fixed",
            top: "10px",
            right: "10px",
            borderBottomLeftRadius: "100px",
            borderBottomRightRadius: "100px",
          }}
          onMouseEnter={() => setShowProfileTooltip(true)}
          onMouseLeave={() => setShowProfileTooltip(false)}
        >
          {showProfileTooltip && (
            <div className="absolute text-center text-white font-semibold mt-16">
              Perfil
            </div>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-12 h-12"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
