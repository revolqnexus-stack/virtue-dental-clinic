"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = ['Specialties', 'Gallery', 'Practitioner', 'Contact'];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { scrollY } = useScroll();

  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const shadowOpacity = useTransform(scrollY, [0, 80], [0, 0.08]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    navLinks.forEach(l => {
      const el = document.getElementById(l.toLowerCase());
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
      >
        <motion.div
          className="absolute inset-0 bg-background border-b border-border"
          style={{ opacity: bgOpacity }}
        />
        <motion.div
          className="absolute inset-0"
          style={{ boxShadow: `0 4px 30px rgba(0,0,0,${shadowOpacity})` }}
        />

        <div className="relative container mx-auto px-6 py-2 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-12 h-12"
            >
              <Image
                src="/images/logo.png"
                alt="Virtue Dental Clinic Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-lg font-serif font-bold text-foreground leading-none tracking-tight">VIRTUE</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary/70 mt-0.5">Dental Clinic</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-sm font-medium py-1 group"
              >
                <span className={`transition-colors duration-200 ${activeSection === item.toLowerCase() ? 'text-primary' : 'text-foreground/60 hover:text-foreground'}`}>
                  {item}
                </span>
                <motion.span
                  className="absolute -bottom-0.5 left-0 h-px bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: activeSection === item.toLowerCase() ? '100%' : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary/40 rounded-full transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="tel:+918156822525"
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/25 text-primary text-sm font-medium hover:bg-primary/5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" /> Call Us
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="https://wa.me/918156822525"
                className="flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-lg shadow-primary/25 hover:bg-primary/90 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" /> Book Now
              </Link>
            </motion.div>
          </div>

          {/* Mobile toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="lg:hidden p-2 rounded-xl text-foreground hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isMobileMenuOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-background shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-border">
                <span className="font-serif font-bold text-lg">Menu</span>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-xl hover:bg-muted transition-colors"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              <nav className="flex-1 p-6 space-y-1">
                {navLinks.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between py-3.5 px-4 rounded-2xl hover:bg-muted transition-colors group"
                    >
                      <span className="font-serif font-bold text-foreground">{item}</span>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="p-6 space-y-3 border-t border-border">
                <Link
                  href="tel:+918156822525"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-muted text-primary font-bold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone className="w-4 h-4" /> Call Specialist
                </Link>
                <Link
                  href="https://wa.me/918156822525"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-primary text-white font-bold shadow-lg shadow-primary/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Booking
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
