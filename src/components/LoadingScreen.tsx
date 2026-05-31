"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // Show for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
          <div className="flex flex-col items-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                transition: { duration: 0.8, ease: "easeOut" }
              }}
              className="relative w-24 h-24 mb-6"
            >
              <Image
                src="/images/logo.png"
                alt="Virtue Dental Clinic"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Text Animation */}
            <div className="flex flex-col items-center overflow-hidden">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ 
                  y: 0, 
                  opacity: 1,
                  transition: { delay: 0.4, duration: 0.6, ease: "easeOut" }
                }}
                className="flex flex-col items-center"
              >
                <span className="text-3xl font-serif font-bold text-foreground tracking-tight">VIRTUE</span>
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary mt-1">Dental Clinic</span>
              </motion.div>
            </div>

            {/* Progress line */}
            <motion.div 
              className="mt-10 h-[2px] bg-primary/10 w-48 relative overflow-hidden rounded-full"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 bg-primary"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
