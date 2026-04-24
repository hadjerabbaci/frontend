import { Icon } from "@iconify/react";
import { useState } from "react";

const NavLinks = [
  { label: "Accueil", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Pourquoi nous", href: "#about" },
  { label: "Avis", href: "#avis" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100 shadow-sm">
      
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">

        {/* LOGO */}
        <a href="#home" className="flex items-center gap-2">
          <span className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold text-lg">
            F
          </span>
          <span className="text-2xl font-bold text-gray-900">
            Fix<span className="text-orange-500">It</span>
          </span>
        </a>

        {/* LINKS */}
        <ul className="hidden md:flex items-center gap-6">
          {NavLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-base font-medium text-gray-600 hover:text-orange-500 transition duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* SEARCH */}
        <div className="relative hidden md:flex items-center border border-amber-500 rounded-full px-3 py-1">
          <Icon
            icon="mdi:magnify"
            className="text-xl text-gray-500 mr-2"
          />
          <input
            type="search"
            placeholder="Search"
            className="outline-none w-40"
          />
        </div>

        {/* LOGIN BUTTON */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg transition"
        >
          Login
        </a>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg bg-gray-100"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {NavLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-gray-700 hover:text-orange-500"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-orange-500 text-white text-center font-semibold py-2 rounded-lg"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;