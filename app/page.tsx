"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [frase, setFrase] = useState("");
  const [loading, setLoading] = useState(false);

  async function gerarFrase() {
    setLoading(true);

    const res = await fetch("/api/frases");
    const data = await res.json();

    setFrase(data.frase);
    setLoading(false);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative">

    
      <motion.div
        className="absolute top-10 left-10 text-pink-400 text-5xl select-none"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        💗
      </motion.div>

      <motion.div
        className="absolute top-20 right-20 text-pink-400 text-5xl select-none"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-pink-600 mb-8 drop-shadow"
      >
        Frases pra Ayumi 💖
      </motion.h1>

      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        onClick={gerarFrase}
        className="bg-pink-500 text-white px-8 py-4 rounded-2xl shadow-lg font-semibold text-lg transition hover:bg-pink-600"
      >
        {loading ? "Gerando..." : "Gerar frase fofinha 💘"}
      </motion.button>

      {frase && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mt-8 max-w-md bg-white p-6 rounded-2xl shadow-xl text-center text-lg text-pink-700 border border-pink-200"
        >
          {frase}
        </motion.div>
      )}
    </div>
  );
}
