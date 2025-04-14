import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="bg-neutral-900 text-white py-2 flex justify-between items-center text-sm shadow-md max-w-[1200px] mx-auto">
      <span className="text-yellow-400 font-bold text-lg px-4">Dojo Agatsu</span>
      <nav className="space-x-6 px-4 text-right text-white">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">Instagram</a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">Facebook</a>
        <Link to="/" className="hover:text-yellow-400 transition">Inicio</Link>
        <Link to="/galeria" className="hover:text-yellow-400 transition">Galería</Link>
        <a href="#contacto" className="hover:text-yellow-400 transition">Contacto</a>
      </nav>
    </div>
  );
};

export default Navbar;
