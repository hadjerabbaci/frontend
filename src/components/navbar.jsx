import { Icon } from "@iconify/react";
import { useState } from "react";

const NavLinks = [
  { label: "Acceuil", href: "#acceuil" },
  { label: "Services", href: "#services" },
  { label: "Comment ça marche", href: "#comment" },
  { label: "Avis", href: "#avis" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  // menu mobile
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-base border-b border-gray-100 shadow-base">
      <nav className="max-w-9xl mx-auto px-4 base:px-6 flex items-center justify-between h-20 ">
        <a href="#acceuil" className="flex items-center gap-2 ">
          <span className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-display font-bold text-lg">
            {" "}
            F
          </span>
          <span className="font-display text-4xl font-bold text-gray-900">
            {" "}
            Fix<span className="text-orange-500">It</span>
          </span>
        </a>
        <div>
          <ul className="hidden md:flex items-center gap-6 ">
            {NavLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-base font-medium text-gray-600 hover:text-orange-500 transition-color-duration-300 "
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* button action  */}
        <div className="relative flex p-1 border-amber-500 border-2 rounded-full shadow-xg">
          <Icon
            icon="mdi:magnify"
            className=" absolute left-3 top-1/2 -translate-y-1/2 text-xl flex-1 h-[5vh cursor-pointer text-gray-500 "
            onClick={"/"}
          />
          <input
            className="w-50 pl-10 pr-4 py-2  hover:shadow-2xl rounded-full outline-none "
            type="search"
            required
            placeholder="Search"
          />
        </div>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-700 text-white text-base font-bold px-4 py-2 rounded-lg transition-colors duration-200"
        >
          Login
        </a>
        {/* hamburger mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-gray-600 bg-gray-100 transition"
          aria-label="Ouvrir le menu"
        >
          {/* icon hamburger */}
          {isOpen ? (
            <svg
              className="w-6 h-6 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 "
              fill="none"
              stroke="currentColor "
              viewBox="0 0 24 24 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h14M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>
      {/* menu mobile deroulant (ki nkliki l menu ) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {NavLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              onClick={() => setIsOpen(false)} // yghlo9 l menu on click
              className="text-base font-medium text-gray-700 hover:text-orange-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-orange-500 text-white text-center font-semibold py-2 rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            {" "}
            Demander un devis
          </a>
        </div>
      )}
    </header>
  );
}
export default Navbar;
