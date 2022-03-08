import Image from "next/image";
import {
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import logo from "/assets/images/logo.png"

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-2 bg-white shadow-md p-5 md:px-10">
      {/* LEFT */}
      <div className="relative flex h-10 cursor-pointer my-auto ">
        <Image
          src={logo}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      
      {/* RIGHT */}
      <div className="flex items-center space-x-4 justify-end">
        {/* Menu button */}
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full text-gray-600 transition duration-300 hover:shadow-md hover:text-gray-900">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

    </header>
  );
}

export default Header;
