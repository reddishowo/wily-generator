"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import YouTubeAudio from "@/components/YoutubeAudio";
import Link from "next/link";

export default function Valentine() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState("");
  
  const handleClickLove = (message: string) => {
    setShowConfetti(true);
    setShowHearts(true);
    setSelectedMessage(message);
    
    setTimeout(() => setShowConfetti(false), 3000);
    setTimeout(() => setShowHearts(false), 4000);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-red-100 to-pink-200 p-6 overflow-hidden">
      <YouTubeAudio />
      
      {/* Floating hearts background - now conditionally rendered based on showHearts */}
      <div className="fixed inset-0 pointer-events-none">
        {(showHearts || true) && Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={`float-heart-${index}`}
            className="absolute text-3xl"
            initial={{ 
              left: `${Math.random() * 100}%`, 
              top: "100%",
              opacity: 0.7
            }}
            animate={{ 
              top: "-5%",
              opacity: [0.7, 0.9, 0.7],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{ 
              duration: 15 + Math.random() * 10,
              ease: "linear",
              repeat: Infinity,
              delay: Math.random() * 20
            }}
          >
            {["❤️", "💕", "💓", "💗", "💖"][Math.floor(Math.random() * 5)]}
          </motion.div>
        ))}
      </div>
      
      {/* Main content */}
      <div className="relative w-64 h-64 z-10">
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            <Image
              src="/lovers.jpg"
              alt="lovers"
              width={1280}
              height={800}
              className="rounded-full object-cover shadow-lg border-4 border-pink-300"
            />
            <motion.div 
              className="absolute -top-3 -right-3 text-4xl"
              animate={{ 
                rotate: [0, 10, 0, -10, 0],
                scale: [1, 1.2, 1, 1.2, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              💝
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <motion.h1
        className="mt-8 text-4xl font-bold text-center text-red-600 drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Happy Valentines Day, Valentina! 💖
      </motion.h1>
      
      <motion.p
        className="mt-6 text-xl text-center text-red-500 max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Kamu adalah hadiah terbaik dalam hidupku. Setiap detik bersamamu adalah kebahagiaan yang gak bisa aku jelasin. Aku sangat suka jika selalu berada di sampingmu, kamu adalah salah satu orang yang bisa membuatku nyaman dan bertahan sampai sejauh ini!
        Terima Kasih karena Selalu Ada Buat Aku Sayang! ❤️
      </motion.p>
      
      {/* Display selected message when available */}
      {selectedMessage && (
        <motion.div
          className="mt-4 text-xl font-bold text-red-600 text-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
        >
          {selectedMessage}
        </motion.div>
      )}
      
      <motion.div
        className="mt-8 flex flex-col sm:flex-row gap-4 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.button
          className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition-all relative overflow-hidden group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleClickLove("I Love You, and It'll always be the same...")}
        >
          <span className="relative z-10">Click Me ❤️</span>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.4 }}
          />
        </motion.button>
        
        {/* Use Link component instead of programmatic navigation */}
        <Link href="/" passHref>
          <motion.button
            className="px-6 py-3 bg-pink-400 text-white rounded-lg shadow-lg hover:bg-pink-500 transition-all relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Go Home 🏠</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-pink-300 to-pink-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
          </motion.button>
        </Link>
      </motion.div>
      
      {/* Confetti effect - Improved animation */}
      <AnimatePresence>
        {showConfetti && (
          <motion.div 
            className="fixed inset-0 pointer-events-none z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {Array.from({ length: 150 }).map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 8 + 5}px`,
                    height: `${Math.random() * 8 + 5}px`,
                    borderRadius: Math.random() > 0.5 ? '50%' : Math.random() > 0.5 ? '0%' : '50% 0',
                    backgroundColor: ['#FF69B4', '#FF1493', '#FF0000', '#FFC0CB', '#FFB6C1', '#FFF0F5'][
                      Math.floor(Math.random() * 6)
                    ],
                    transform: `rotate(${Math.random() * 360}deg)`,
                  }}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{
                    y: `${100 + Math.random() * 150}%`,
                    x: Math.random() > 0.5 ? `-${Math.random() * 100}px` : `${Math.random() * 100}px`,
                    rotate: `${Math.random() * 360 * 2}deg`,
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}