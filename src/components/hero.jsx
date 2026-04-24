"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full pt-65 overflow-hidden" id="home">
      {/* CLEAR IMAGE */}
      <img
        src="/bg3.jpeg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* BLUR LAYER */}
      <div className="absolute inset-0">
        <img
          src="/bg2.jpeg"
          alt="blur background"
          className="w-full h-full object-cover blur-md scale-105"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 70%)",
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 70%)",
          }}
        />
      </div>

      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col justify-center h-full px-10 md:px-20 max-w-4xl">
        <motion.span
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-orange-200 text-orange-600 text-sm px-4 py-2 mb-4 w-fit rounded-xl"
        >
          Service en 1 click
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold text-orange-300 mb-6 leading-tight"
        >
          Trouvez votre service facilement
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-300 w-130"
        >
          Accédez rapidement aux meilleurs services près de chez vous en
          quelques clics.
        </motion.p>
      </div>
    </section>
  );
}
