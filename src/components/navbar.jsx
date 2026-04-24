"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";

const wilayas = [
  "Adrar","Chlef","Laghouat","Oum El Bouaghi","Batna","Béjaïa","Biskra","Béchar","Blida","Bouira",
  "Tamanrasset","Tébessa","Tlemcen","Tiaret","Tizi Ouzou","Alger","Djelfa","Jijel","Sétif","Saïda",
  "Skikda","Sidi Bel Abbès","Annaba","Guelma","Constantine","Médéa","Mostaganem","M'Sila","Mascara",
  "Ouargla","Oran","El Bayadh","Illizi","Bordj Bou Arréridj","Boumerdès","El Tarf","Tindouf",
  "Tissemsilt","El Oued","Khenchela","Souk Ahras","Tipaza","Mila","Aïn Defla","Naâma",
  "Aïn Témouchent","Ghardaïa","Relizane"
];

const categories = ["Coiffeuse", "Plomberie", "Electricité"];

const NavLinks = [
  { label: "Accueil", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Pourquoi nous", href: "#about" },
  { label: "Avis", href: "#avis" },
  { label: "Contact", href: "#contact" },
];

// demo data
const services = [
  { category: "Coiffeuse", wilaya: "Chlef", price: 2000, type: "Particulier" },
  { category: "Plomberie", wilaya: "Alger", price: 5000, type: "Store" },
  { category: "Electricité", wilaya: "Oran", price: 3000, type: "Particulier" },
];

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // SEARCH
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // FILTERS
  const [category, setCategory] = useState("");
  const [wilaya, setWilaya] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [type, setType] = useState("");

  // 🔎 SEARCH LOGIC
  const handleSearch = (value) => {
    setSearch(value);

    if (!value) {
      setSuggestions([]);
      return;
    }

    const results = services.filter((item) =>
      `${item.category} ${item.wilaya}`
        .toLowerCase()
        .includes(value.toLowerCase())
    );

    setSuggestions(results);
  };

  // 🎯 FULL FILTER LOGIC (FIX FOR UNUSED STATES)
  const getFilteredResults = () => {
    return services.filter((item) => {
      const matchSearch =
        search === "" ||
        `${item.category} ${item.wilaya}`
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchCategory = category === "" || item.category === category;
      const matchWilaya = wilaya === "" || item.wilaya === wilaya;

      const matchType = type === "" || item.type === type;

      const matchMin =
        minPrice === "" || item.price >= Number(minPrice);

      const matchMax =
        maxPrice === "" || item.price <= Number(maxPrice);

      return (
        matchSearch &&
        matchCategory &&
        matchWilaya &&
        matchType &&
        matchMin &&
        matchMax
      );
    });
  };

  const handleFilter = () => {
    const results = getFilteredResults();

    console.log("Filtered Results:", results);

    setIsSidebarOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 baxkdrop-blur-base shadow-base">

      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">

        {/* MENU BUTTON */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="mr-3 p-2 rounded-lg bg-gray-100"
        >
          <Icon icon="mdi:menu" className="text-xl text-gray-900" />
        </button>

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
              <a className="text-gray-600 hover:text-orange-500" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* SEARCH */}
        <div className="relative hidden md:flex items-center border border-amber-500 rounded-full px-3 py-1">

          <Icon icon="mdi:magnify" className="text-xl text-gray-500 mr-2" />

          <input
            type="search"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Service, wilaya ou prix"
            className="outline-none w-40"
          />

          {/* SUGGESTIONS */}
          {suggestions.length > 0 && (
            <div className="absolute top-10 left-0 w-full bg-white shadow-md rounded-md z-50">
              {suggestions.map((s, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setSearch(`${s.category} ${s.wilaya}`);
                    setSuggestions([]);
                  }}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                  {s.category} - {s.wilaya}
                </div>
              ))}
            </div>
          )}
        </div>

       {/* BUTTONS */}
             <div className="hidden md:flex items-center gap-3">
      {/* CREATE ANNOUNCE */}
            <a href="#" className="border border-orange-500 text-orange-500 font-semibold px-4 py-2 rounded-lg hover:bg-orange-50 transition" > 
              Créer une annonce 
              
            </a>
               {/* LOGIN */}
                <a href="/login" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg transition" >
                   Login 
                </a>
        </div>

        {/* MOBILE */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 bg-gray-100 rounded-lg">
          {isOpen ? "✖" : "☰"}
        </button>
      </nav>

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-[#2b2b2b] text-white z-50 transform transition duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b border-gray-700">
          <h2>Filtrer les résultats</h2>
        </div>

        <div className="p-4 space-y-4 text-sm">

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-[#1f1f1f] p-2 rounded"
          >
            <option value="">Toutes catégories</option>
            {categories.map((c, i) => (
              <option key={i}>{c}</option>
            ))}
          </select>

          <select
            value={wilaya}
            onChange={(e) => setWilaya(e.target.value)}
            className="w-full bg-[#1f1f1f] p-2 rounded"
          >
            <option value="">Toutes wilayas</option>
            {wilayas.map((w, i) => (
              <option key={i}>{w}</option>
            ))}
          </select>

          <input
            type="number"
            placeholder="Min price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-full bg-[#1f1f1f] p-2 rounded"
          />

          <input
            type="number"
            placeholder="Max price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full bg-[#1f1f1f] p-2 rounded"
          />

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full bg-[#1f1f1f] p-2 rounded"
          >
            <option value="">Tous types</option>
            <option>Particulier</option>
            <option>Store</option>
          </select>
        </div>

        <div className="absolute bottom-0 w-full p-4 border-t border-gray-700">
          <button
            onClick={handleFilter}
            className="w-full bg-orange-500 py-3 rounded-full"
          >
            FILTRER
          </button>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}
    </header>
  );
}