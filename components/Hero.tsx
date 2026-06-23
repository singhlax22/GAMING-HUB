"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black">

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <h1 className="text-7xl font-extrabold">
          Ultimate Gaming Store
        </h1>

        <p className="mt-6 text-xl text-gray-400">
          Buy PUBG UC, Free Fire Diamonds, Valorant Points & More
        </p>

        <button className="mt-8 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition">
          Shop Now
        </button>
      </motion.div>
    </section>
  );
}
