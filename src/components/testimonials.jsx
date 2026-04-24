"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    name: "Yacine",
    role: "Client",
    text: "Service rapide et très professionnel.",
    emoji: "👨‍🔧",
  },
  {
    name: "Sara",
    role: "Cliente",
    text: "Très pratique pour trouver des artisans fiables.",
    emoji: "👩‍💼",
  },
  {
    name: "Amine",
    role: "Client",
    text: "Interface simple et efficace.",
    emoji: "🧑‍💻",
  },
  {
    name: "Nadia",
    role: "Cliente",
    text: "Tout était parfait.",
    emoji: "👩‍🎓",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-10 px-6 md:px-20" id="avis">

      {/* LEFT CONTAINER */}
      <div className="max-w-3xl">

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-[#4b463d] mb-6 text-left">
          Avis clients
        </h2>

        {/* MAIN CONTENT */}
        <div className="flex items-center gap-6">

          {/* LEFT CARD */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="
                w-[320px]
                h-[160px]
                bg-[#eee8e0]
                rounded-2xl
                shadow-md
                p-5
                flex flex-col justify-center
              "
            >
              <p className="text-sm text-[#4b463d] italic mb-4">
                "{testimonials[index].text}"
              </p>

              <h4 className="text-sm font-semibold text-[#4b463d]">
                {testimonials[index].name}
              </h4>

              <span className="text-xs text-gray-500">
                {testimonials[index].role}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT AVATARS */}
          <div className="flex flex-col items-center gap-3">

            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center text-lg
                  transition-all duration-300
                  ${
                    i === index
                      ? "bg-orange-500 scale-110 shadow-md"
                      : "bg-[#d5cebf] hover:scale-105"
                  }
                `}
              >
                {t.emoji}
              </button>
            ))}

          </div>
        </div>

        {/* NEXT BUTTON */}
        <button
          onClick={next}
          className="mt-4 text-xs text-orange-500"
        >
          Suivant →
        </button>

      </div>
    </section>
  );
}