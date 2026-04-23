    <section>
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