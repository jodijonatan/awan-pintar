"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icon lucide-react

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-8 py-4 fixed w-full top-0 bg-white z-50 shadow-lg">
      {/* Logo */}
      <h1 className="text-xl font-black bg-gradient-to-r from-sky-500 to-sky-300 bg-clip-text text-transparent">
        Awan Pintar
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-x-8">
        <li className="cursor-pointer hover:underline text-black hover:text-sky-800 hover:scale-110 transition">
          <a href="/">Home</a>
        </li>
        <li className="cursor-pointer hover:underline text-black hover:text-sky-800 hover:scale-110 transition">
          <a href="#about">About</a>
        </li>
        <li className="cursor-pointer hover:underline text-black hover:text-sky-800 hover:scale-110 transition">
          <a href="/weather">Weather</a>
        </li>
      </ul>

      {/* Mobile Button */}
      <button
        className="md:hidden text-black hover:text-sky-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col gap-y-4 px-8 py-6">
            <li className="cursor-pointer hover:underline text-black hover:text-sky-800 transition">
              <a href="/" onClick={() => setIsOpen(false)}>
                Home
              </a>
            </li>
            <li className="cursor-pointer hover:underline text-black hover:text-sky-800 transition">
              <a href="#about" onClick={() => setIsOpen(false)}>
                About
              </a>
            </li>
            <li className="cursor-pointer hover:underline text-black hover:text-sky-800 transition">
              <a href="/weather" onClick={() => setIsOpen(false)}>
                Weather
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
