"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Clock, ArrowRight, Star, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "4.9★", label: "Patient Rating" },
  { value: "500+", label: "Happy Patients" },
];

const badges = [
  { icon: Shield, text: "MDS Specialist" },
  { icon: Zap, text: "Painless RCT" },
  { icon: Star, text: "CBCT Research" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background layers */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] -translate-y-1/4 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            style={{ y: textY }}
            className="max-w-xl"
          >
            {/* Badge */}
            <motion.div variants={item} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/8 border border-primary/15 text-primary text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Specialist Dental Care · Pala, Kottayam
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={item} className="text-5xl sm:text-6xl lg:text-[5.5rem] font-serif text-foreground leading-[1.05] mb-6 tracking-tight">
              Your smile.{" "}
              <span className="block text-shimmer">Our priority.</span>
            </motion.h1>

            <motion.p variants={item} className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-md">
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
                  className="flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground rounded-full font-bold hover:bg-secondary transition-colors"
                >
                  Our Specialties
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={item} className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-foreground">{s.value}</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest font-semibold mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: imageY }}
            className="relative"
          >
            {/* Main image frame */}
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.15)]">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop"
                alt="Virtue Dental Clinic"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />

              {/* Badges overlay */}
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                {badges.map(({ icon: Icon, text }, i) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.12 }}
                    className="glass-card flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-foreground"
                  >
                    <Icon className="w-3.5 h-3.5 text-primary" />
                    {text}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating info card */}
            <motion.div
              initial={{ opacity: 0, y: 30, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-6 -right-4 sm:-right-8 glass-card p-5 rounded-2xl shadow-2xl max-w-[220px] animate-float"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-sm text-foreground leading-tight">Pala Bypass Road</div>
                  <div className="text-[10px] text-muted-foreground">Vellappadu, Kottayam</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-primary w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-sm text-foreground leading-tight">Mon – Sat</div>
                  <div className="text-[10px] text-muted-foreground">10:00 AM – 7:00 PM</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative ring */}
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full border-2 border-primary/10 pointer-events-none" />
            <div className="absolute -top-3 -right-3 w-20 h-20 rounded-full border border-accent/20 pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-primary/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
