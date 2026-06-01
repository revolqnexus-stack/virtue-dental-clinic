"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "500+", label: "Happy Patients" },
  { value: "4.9★", label: "Patient Rating" },
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
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-14">

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

      {/* Main content — vertically centered left */}
      <div className="relative z-10 container mx-auto px-6 py-16 lg:py-24 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{ y: textY }}
          className="max-w-2xl"
        >
          {/* Top badge */}
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
            Led by <span className="text-white font-semibold">Dr. Abhijit Sajo Sebastian</span> — MDS Endodontist &amp; published researcher — delivering painless, precision dental care in Pala.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-8">
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

          {/* Stats — mobile only */}
          <motion.div variants={item} className="flex sm:hidden items-center gap-5 pt-6 border-t border-white/20">
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center gap-2">
                <span className="text-lg font-serif font-bold text-white">{s.value}</span>
                <span className="text-[10px] text-white/55 uppercase tracking-widest font-semibold leading-tight max-w-[48px]">{s.label}</span>
                {i < stats.length - 1 && <div className="w-px h-5 bg-white/20 ml-1" />}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom-left — inline stats (desktop only) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute bottom-10 left-6 lg:left-16 z-10 hidden sm:flex items-center gap-6 sm:gap-10"
      >
        {stats.map((s, i) => (
          <div key={s.label} className="flex items-center gap-2.5">
            <span className="text-xl sm:text-2xl font-serif font-bold text-white">{s.value}</span>
            <span className="text-xs text-white/55 uppercase tracking-widest font-semibold leading-tight max-w-[60px]">{s.label}</span>
            {i < stats.length - 1 && <div className="w-px h-6 bg-white/20 ml-2 sm:ml-4" />}
          </div>
        ))}
      </motion.div>

      {/* Bottom-right — hours + call card (desktop only) */}
      <motion.div
        initial={{ opacity: 0, y: 20, x: 20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-10 right-6 lg:right-16 z-10 glass-card rounded-2xl p-4 min-w-[200px] shadow-2xl hidden sm:block"
      >
        <div className="text-xs text-muted-foreground mb-0.5 uppercase tracking-widest font-semibold">Clinic Hours</div>
        <div className="font-bold text-foreground text-sm mb-0.5">Mon – Sat</div>
        <div className="text-xs text-muted-foreground mb-4">10:00 AM – 7:00 PM</div>
        <motion.a
          href="tel:+918156822525"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          Tap to Call
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 hidden lg:flex"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
