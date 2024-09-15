import React, { useEffect, useRef, useState } from "react";

export default function Avatar12() {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement | null>(null);
  const dropdown = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      if (!dropdown.current || !trigger.current) return;
      if (
        dropdownOpen ||
        dropdown.current.contains(event.target as Node) ||
        trigger.current.contains(event.target as Node)
      )
        return;
      setDropdownOpen(false);
    };

    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [dropdownOpen]);

  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      if (!dropdownOpen || event.key !== "Escape") return;
      setDropdownOpen(false);
    };

    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [dropdownOpen]);

  return (
    <div className="p-4 border-t border-white">
      <div className="relative inline-block">
        <button
          ref={trigger}
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center text-left"
        >
          <div className="relative mr-4 h-[42px] w-[42px] rounded-full">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQHKB0FIJMnNog/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1669417600718?e=1732147200&v=beta&t=MhOtNoPyONUOGii5zzJtRKFsLKmSweeWADu3r1UJ64U"
              alt="avatar"
              className="h-full w-full rounded-full object-cover object-center"
            />
            <span className="absolute -right-0.5 -top-0.5 block h-[14px] w-[14px] rounded-full border-[2.3px] border-white bg-[#219653] dark:border-dark"></span>
          </div>
          <span className="text-base font-medium text-dark dark:text-white">
            Kevin Garcia
          </span>
          <span className="pl-[10px] text-dark duration-100 dark:text-white">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`fill-current ${dropdownOpen ? "-scale-y-100" : ""}`}
            >
              <path d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4062 5.65625 17.6875 5.9375C17.9688 6.21875 17.9688 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1562 10.1875 14.25 10 14.25Z" />
            </svg>
          </span>
        </button>
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
          className={`absolute left-64 -top-64 z-40 w-[200px] space-y-1 rounded bg-white p-2 shadow-card dark:bg-dark-2 dark:shadow-box-dark ${dropdownOpen ? "block" : "hidden"}`}
        >
          <a
            href="javascript:void(0)"
            className="block w-full rounded px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-3"
          >
            Profile
          </a>
          <a
            href="javascript:void(0)"
            className="block w-full rounded px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-3"
          >
            Settings
          </a>
          <a
            href="javascript:void(0)"
            className="block w-full rounded px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-3"
          >
            Sign Out
          </a>
        </div>
      </div>
    </div>
  );
}   