"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const reasons: string[] = [
    "Karena senyummu bikin hariku lebih cerah 😊",
    "Karena kamu selalu ada buat aku, kapan pun aku butuh ❤️",
    "Karena kamu selalu dukung aku dalam segala hal 💪",
    "Karena kamu itu unik, nggak ada duanya di dunia ini 🌎",
    "Karena cara kamu ketawa tuh bikin aku ikut senang 😆",
    "Karena aku bisa jadi diri sendiri saat sama kamu 💕",
    "Karena kamu selalu peduli dan perhatian banget ke aku 🥰",
    "Karena kamu adalah orang paling baik yang pernah aku kenal 💖",
    "Karena kita selalu bisa ketawa bareng dan ngobrol tanpa habisnya 😍",
    "Karena hidup tanpa kamu rasanya nggak kebayang! 😘",
  ];

  const [reason, setReason] = useState<string>(
    "Klik tombol di bawah untuk melihat alasannya!"
  );
  const [previousReasons, setPreviousReasons] = useState<Set<number>>(new Set());
  const [isAnimating, setIsAnimating] = useState(false);

  const router = useRouter();

  const generateReason = () => {
    if (previousReasons.size === reasons.length) {
      setPreviousReasons(new Set());
    }

    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * reasons.length);
    } while (previousReasons.has(randomIndex));

    setIsAnimating(true);
    setTimeout(() => {
      setReason(reasons[randomIndex]);
      setPreviousReasons(new Set([...previousReasons, randomIndex]));
      setIsAnimating(false);
    }, 500);
  };

  const navigateToValentinePage = () => {
    router.push("/valentine");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-red-200 p-6">      
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-red-600 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Kenapa Aku Sangat Sayang sama Valentina?
      </motion.h1>
      
      <motion.div
        className="relative mt-8 h-24 w-full max-w-md flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          {!isAnimating && (
            <motion.p
              key={reason}
              className="text-lg md:text-xl italic text-center text-red-500 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {reason}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
      
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={generateReason}
          className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition-all"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Kenapa Aku Sayang Kamu?
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={navigateToValentinePage}
          className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 transition-all"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Lihat Halaman Selanjutnya!
        </motion.button>
      </div>
      
      <motion.div
        className="mt-12 text-sm text-red-400 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        Dibuat dengan ❤️ spesial untuk Valentina
      </motion.div>
    </main>
  );
}