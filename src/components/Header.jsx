import { useState } from "react";

const Header = ({ onLoginClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300">
      {/* Brand */}
      <h1 className="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
        BrandKu
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6 text-slate-700 font-medium">
        <a href="#" className="relative hover:text-blue-600 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all">
          Beranda
        </a>
        <a href="#" className="relative hover:text-blue-600 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all">
          Fitur
        </a>
        <a href="#" className="relative hover:text-blue-600 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all">
          Harga
        </a>
        <button
          onClick={onLoginClick}
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-2.5 rounded-full font-semibold shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
        >
          Login
        </button>
      </nav>

      {/* Hamburger Button */}
      <button
        className="md:hidden text-3xl text-slate-700 hover:text-blue-600 focus:outline-none transition-transform duration-300 z-50"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span className={`inline-block transition-transform duration-300 ${isMenuOpen ? "rotate-90" : "rotate-0"}`}>
          {isMenuOpen ? "✕" : "☰"}
        </span>
      </button>

      {/* Mobile Menu */}
      <nav
        className={`md:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-md shadow-2xl flex flex-col items-center space-y-4 py-6 transition-all duration-300 origin-top ${
          isMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <a href="#" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
          Beranda
        </a>
        <a href="#" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
          Fitur
        </a>
        <a href="#" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
          Harga
        </a>
        <button
          onClick={() => {
            onLoginClick();
            setIsMenuOpen(false); // tutup menu setelah klik login di mobile
          }}
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2.5 rounded-full font-semibold shadow-md hover:shadow-xl transition-all duration-200 mt-2"
        >
          Login
        </button>
      </nav>
    </header>
  );
};

export default Header;