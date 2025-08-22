import React from "react";
import Image from "next/image";
import logo from "../../public/aureline-logo.png";
import { Bookmark, Search, ShoppingBag } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky z-10 top-0 w-full py-4 px-10 bg-white">
      <div className="w-full grid grid-cols-5 justify-center items-center">
        <div className="flex flex-row space-x-6">
          <a href="#" className="hover:underline nav-link">
            Home
          </a>
          <a href="#" className="hover:underline nav-link">
            About
          </a>
          <a href="#" className="hover:underline nav-link">
            Contact
          </a>
        </div>
        <div className="col-span-3 w-full flex items-center justify-center">
          <Image src={logo} alt="Aureline Logo" className="!w-40" />
        </div>
        <div className="flex flex-row space-x-4 items-center justify-end">
          <div>
            <Search className="h-5 w-5" />
          </div>
          <div>
            <Bookmark className="h-5 w-5" />
          </div>
          <div>
            <ShoppingBag className="h-5 w-5" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
