import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center max-h-[72px] max-w-[1280px] mx-auto">
      <div className="flex w-[150px]">
        <img src="./logo.png" alt="logo" />
      </div>

      <ul className="flex gap-10  cursor-pointer text-lg md:font-medium">
        <li className="hover:text-green-700">Home</li>
        <li className="hover:text-green-700">About</li>
        <li className="hover:text-green-700">Contact</li>
      </ul>

      <button className="bg-black text-white rounded py-2 px-5">Log-In</button>
    </nav>
  );
};

export default Navbar;
