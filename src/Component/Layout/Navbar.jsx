import React, { useState } from "react";
export const Navbar = ({ setPage }) => {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="bg-white text-black px-4 sm:px-6 py-4">
      <div className="flex justify-between items-center">
        <img src="/Logo.jpeg" alt="Logo" className="w-24 h-full" />
        <div className="hidden md:flex items-center gap-4 lg:gap-6 cursor-pointer font-bold">
          <a onClick={() => setPage("home")}>Home</a>
          <a onClick={() => setPage("properties")}>Properties</a>
          <a onClick={() => setPage("aboutus")}>About us</a>
          <a onClick={() => setPage("services")}>Services</a>
          <a onClick={() => setPage("blog")}>Blog</a>
          <a onClick={() => setPage("contact")}>Contact</a>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white">
            Log In
          </button>
        </div>
        <button className="text-2xl md:hidden" onClick={() => setMenu(!menu)}>
          ☰
        </button>
      </div>
      {menu && (
        <div className="flex flex-col gap-4 mt-4 md:hidden font-bold">
          <a onClick={() => { setPage("home"); setMenu(false); }}>Home</a>
          <a onClick={() => { setPage("properties"); setMenu(false); }}>Properties</a>
          <a onClick={() => { setPage("aboutus"); setMenu(false); }}>About us</a>
          <a onClick={() => { setPage("services"); setMenu(false); }}>Services</a>
          <a onClick={() => { setPage("blog"); setMenu(false); }}>Blog</a>
          <a onClick={() => { setPage("contact"); setMenu(false); }}>Contact</a>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white w-fit">
            Log In
          </button>
        </div>
      )}
    </nav>
  );
};