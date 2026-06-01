"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "4.9★", label: "Patient Rating" },
  { value: "500+", label: "Happy Patients" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-20">

      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(0,0,0,0.45)", zIndex: 1 }}
      />

      <div className="relative z-10 container mx-auto px-6 py-16 lg:py-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{ y: textY }}
          className="max-w-xl"
        >
          {/* Badge */}
          <motion.div variants={item} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Specialist Dental Care · Pala, Kottayam
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={item} className="text-5xl sm:text-6xl lg:text-[5.5rem] font-serif text-white leading-[1.05] mb-6 tracking-tight">
            Your smile.{" "}
            <span className="block text-shimmer">Our priority.</span>
          </motion.h1>

          <motion.p variants={item} className="text-lg text-white/75 leading-relaxed mb-10 max-w-md">
            Led by Dr. Abhijit Sajo Sebastian — MDS Endodontist and published researcher — delivering painless, precision dental care in Pala.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-12">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="https://wa.me/918156822525"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold shadow-xl shadow-primary/25 hover:bg-primary/90 transition-colors"
              >
                Book Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="#specialties"
                className="flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                Our Specialties
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div variants={item} className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-white">{s.value}</div>
                <div className="text-[10px] sm:text-xs text-white/55 uppercase tracking-widest font-semibold mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/50 font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
