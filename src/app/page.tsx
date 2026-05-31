"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import Gallery from "@/components/Gallery";
import Practitioner from "@/components/Practitioner";
import Contact from "@/components/Contact";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Mail, MessageCircle } from "lucide-react";

const footerSpecialties = ['General Dentistry', 'Cosmetic Dentistry', 'Orthodontics', 'Root Canal Treatment', 'Dental Implants', 'Crowns & Bridges'];
const footerLinks = [
  { label: 'About Our Doctor', href: '#practitioner' },
  { label: 'Clinic Gallery', href: '#gallery' },
  { label: 'Emergency Care', href: '#specialties' },
  { label: 'Location & Map', href: 'https://maps.app.goo.gl/5DS1k9PnA9vQbMU2A' },
  { label: 'Book on Practo', href: '#' },
];
const socials = [
  { Icon: Globe, href: '#', label: 'Website' },
  { Icon: Mail, href: 'mailto:abhijitsebastian@gmail.com', label: 'Email' },
  { Icon: MessageCircle, href: 'https://wa.me/918156822525', label: 'WhatsApp' },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Specialties />
      <Gallery />
      <Practitioner />
      <Contact />

      {/* Footer */}
      <footer className="bg-foreground text-white relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/8 rounded-full blur-[80px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative container mx-auto px-6 pt-20 pb-10">
          <div className="grid lg:grid-cols-4 gap-14 mb-16">

            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 group mb-7 w-fit">
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-serif text-xl font-bold"
                >
                  V
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-lg font-serif font-bold text-white leading-none">VIRTUE</span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-primary mt-0.5">Dental Clinic</span>
                </div>
              </Link>
              <p className="text-white/50 leading-relaxed max-w-sm mb-8 text-sm">
                Comprehensive specialist dental care in Pala, Kottayam. Led by Dr. Abhijit Sajo Sebastian — MDS Endodontist and published researcher.
              </p>
              <div className="flex gap-3">
                {socials.map(({ Icon, href, label }) => (
                  <motion.div key={label} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href={href}
                      target={href.startsWith('http') ? "_blank" : undefined}
                      aria-label={label}
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
                    >
                      <Icon className="w-4 h-4" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Specialties */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">Specialties</h4>
              <ul className="space-y-3">
                {footerSpecialties.map(item => (
                  <li key={item}>
                    <Link href="#specialties" className="text-white/60 hover:text-primary transition-colors text-sm">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {footerLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      target={href.startsWith('http') ? "_blank" : undefined}
                      className="text-white/60 hover:text-primary transition-colors text-sm"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
            <p>© 2026 VIRTUE Dental Clinic. All rights reserved.</p>
            <p>Pala Bypass Road, Vellappadu, Pala, Kottayam — 686575</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.93 }}
          className="animate-glow"
        >
          <Link
            href="https://wa.me/918156822525"
            aria-label="Contact us on WhatsApp"
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl shadow-[#25D366]/30"
          >
            <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
