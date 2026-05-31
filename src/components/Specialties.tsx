"use client";

import { motion } from "framer-motion";
import {
  Stethoscope, Smile, Microscope, Activity, Baby,
  Scissors, Scan, ShieldCheck, HeartPulse, ClipboardList, Phone
} from "lucide-react";

const specialties = [
  { title: "Root Canal Treatment", description: "Painless endodontic therapy by an MDS specialist. Modern rotary systems and CBCT-guided precision to save your natural teeth.", icon: Microscope, highlights: ["Painless RCT", "Rotary Endo", "CBCT Guided"], featured: true },
  { title: "General Dentistry", description: "Routine checkups, professional cleanings, composite fillings, and preventive care for lasting oral health.", icon: Stethoscope, highlights: ["Checkups", "Cleanings", "Fillings"] },
  { title: "Cosmetic Dentistry", description: "Smile makeovers with professional whitening, porcelain veneers, and aesthetic contouring.", icon: Smile, highlights: ["Whitening", "Veneers", "Makeover"] },
  { title: "Orthodontics", description: "Metal and ceramic braces plus clear aligners to correct misalignment for children and adults.", icon: Activity, highlights: ["Braces", "Aligners", "Correction"] },
  { title: "Dental Implants", description: "Permanent bio-compatible titanium replacements for missing teeth with a natural look and feel.", icon: Scan, highlights: ["Single Tooth", "Full Mouth", "Titanium"] },
  { title: "Crowns & Bridges", description: "Durable prosthetic restorations for damaged or missing teeth, restoring function and aesthetics.", icon: ShieldCheck, highlights: ["Crowns", "Bridges", "Ceramic"] },
  { title: "Gum Treatments", description: "Advanced periodontal therapy including deep scaling, polishing, and gum disease management.", icon: HeartPulse, highlights: ["Scaling", "Polishing", "Periodontics"] },
  { title: "Pediatric Dentistry", description: "Gentle, child-friendly dental care designed for kids' oral health and preventive needs.", icon: Baby, highlights: ["Child Friendly", "Fluoride", "Prevention"] },
  { title: "Wisdom Tooth Extraction", description: "Safe surgical removal of impacted or painful third molars to prevent crowding and infection.", icon: Scissors, highlights: ["Surgical", "Impacted", "Pain Relief"] },
  { title: "Diagnostics", description: "In-house digital X-ray and comprehensive specialist consultations for accurate treatment planning.", icon: ClipboardList, highlights: ["Digital X-Ray", "Consultation", "Planning"] },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }
  }),
};

export default function Specialties() {
  return (
    <section id="specialties" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            10 Specialties
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-serif text-foreground mb-5 leading-tight"
          >
            Clinical Excellence.{" "}
            <span className="italic text-primary">Specialist Care.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground leading-relaxed"
          >
            Led by Dr. Abhijit Sajo Sebastian, MDS — a published endodontics researcher bringing post-graduate precision to every treatment in Pala.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {specialties.map((spec, i) => (
            <motion.div
              key={spec.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`group glass-card rounded-3xl p-7 flex flex-col cursor-default transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/8 ${spec.featured ? 'ring-1 ring-primary/20 bg-white' : ''}`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-400 ${spec.featured ? 'bg-primary text-white' : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'}`}>
                <spec.icon className="w-6 h-6" />
              </div>
              {spec.featured && (
                <span className="text-[9px] font-bold uppercase tracking-widest text-primary mb-2">Signature Service</span>
              )}
              <h3 className="text-lg font-serif text-foreground mb-2 leading-snug">{spec.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">{spec.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {spec.highlights.map(tag => (
                  <span key={tag} className="px-2.5 py-1 bg-secondary/60 text-primary text-[9px] font-bold uppercase tracking-wider rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Emergency card — spans 2 cols */}
          <motion.div
            custom={10}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="xl:col-span-2 rounded-3xl bg-primary p-8 flex flex-col sm:flex-row items-center gap-8 shadow-2xl shadow-primary/25 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0"
            >
              <HeartPulse className="w-8 h-8 text-white" />
            </motion.div>
            <div className="relative z-10">
              <h3 className="text-2xl font-serif text-white mb-2">Emergency Dental Care</h3>
              <p className="text-white/75 mb-5 text-sm leading-relaxed max-w-sm">
                Acute pain or dental trauma? Our specialist provides responsive emergency support during clinic hours.
              </p>
              <motion.a
                href="tel:+918156822525"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-full font-bold text-sm shadow-lg hover:bg-secondary transition-colors"
              >
                <Phone className="w-4 h-4" /> Call for Emergency
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
