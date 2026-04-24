"use client";

import { motion } from "framer-motion";

const categories = [
  { name: "Plomberie", icon: "🚿" },
  { name: "Elecricité", icon: "⚡" },
  { name: "Climatisation", icon: "❄️" },
  { name: "Peinture", icon: "🎨" },
  { name: "Maçonnerie", icon: "⚙️" },
  { name: "Ménage", icon: "🧼" },
  { name: "Décoration", icon: "⚜️" },
  { name: "Charpenterie", icon: "🧺" },
  { name: "Jardinage", icon: "🌿" },
  { name: "Beauté", icon: "💄" },
  { name: "Livraison", icon: "🚚 " },
  { name: "Babysitting", icon: " 🍼" },

];

const services = [
  {
    title: "Plomberie",
    description: "Réparation de fuites, installation et dépannage sanitaire.",
    icon: "🚿",
  },
  {
    title: "Électricité",
    description: "Installation et maintenance des systèmes électriques.",
    icon: "⚡",
  },
  {
    title: "Climatisation",
    description: "Installation, entretien et réparation de climatiseurs.",
    icon: "❄️",
  },
  {
    title: "Peinture",
    description: "Peinture intérieure et extérieure pour tous types de surfaces.",
    icon: "🎨",
  },
  {
    title: "Maçonnerie",
    description: "Travaux de construction, réparation et rénovation.",
    icon: "⚙️",
  },
  {
    title: "Ménage",
    description: "Nettoyage complet de maisons, appartements et bureaux.",
    icon: "🧼",
  },
  {
    title: "Décoration",
    description: "Aménagement et décoration intérieure personnalisée.",
    icon: "⚜️",
  },
  {
    title: "Charpenterie",
    description: "Fabrication et réparation de meubles et structures en bois.",
    icon: "🧺",
  },
  {
    title: "Jardinage",
    description: "Entretien de jardins, pelouse et espaces verts.",
    icon: "🌿",
  },
  {
    title: "Beauté",
    description: "Coiffure, maquillage et soins esthétiques à domicile.",
    icon: "💄",
  },
  {
    title: "Livraison",
    description: "Livraison rapide de colis et courses à domicile.",
    icon: "🚚",
  },
  {
    title: "Babysitting",
    description: "Garde d’enfants fiable et professionnelle à domicile.",
    icon: "🍼",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function CategoriesScroll() {
  return (
    <section id="services" >
      <div className="relative bg-[#eee8e0] py-8 overflow-hidden">
        <motion.div
          className="flex gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {/* duplicate list for infinite effect */}
          {[...categories, ...categories].map((cat, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[100px] group border-amber-500"
            >
              <div
                className="w-20 h-20 rounded-full bg-[#d5cebf77]  flex items-center justify-center text-3xl
              group-hover:scale-110 transition"
              >
                {cat.icon}
              </div>

              <p className="mt-3 text-sm text-amber-500 group-hover:text-white">
                {cat.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl font-bold text-white mb-10">Nos services</h2>

        {/* Grid */}
<motion.div
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
>
  {services.map((service, index) => (
    <motion.div
      key={index}
      variants={item}
      className="
        bg-[#4b463d] 
        rounded-2xl 
        p-6 
        shadow-lg 
        transition duration-300 ease-in-out
        group
        hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20
      "
    >
      <div className="text-4xl mb-4">{service.icon}</div>

      <h3 className="text-xl font-semibold text-white mb-2">
        {service.title}
      </h3>

      <p className="text-gray-400 text-sm mb-6">
        {service.description}
      </p>

      <button className="text-sm px-4 py-2 border border-orange-500 text-orange-500 rounded-full 
        hover:bg-orange-500 hover:text-white transition cursor-pointer ">
        Explorer →
      </button>
    </motion.div>
  ))}
</motion.div>
      </div>
    </section>
  );
}
