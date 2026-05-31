"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Star, Quote, MapPin, FlaskConical } from "lucide-react";

const credentials = [
  { label: "BDS", detail: "AECS Maaruti College of Dental Sciences, Bengaluru · 2017" },
  { label: "MDS", detail: "KLE V.K. Institute of Dental Sciences, Belagavi · 2022" },
  { label: "Specialization", detail: "Conservative Dentistry & Endodontics" },
  { label: "Reg. No.", detail: "33030 — Kerala State Dental Council" },
];

const visiting = [
  "Holy Family Dentcare, Kozhuvanal",
  "Mercy Hospital, Pothy",
];

export default function Practitioner() {
  return (
    <section id="practitioner" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/4 blur-[150px] pointer-events-none" />

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Award className="w-3.5 h-3.5" /> Clinical Leadership
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-serif text-foreground mb-5 leading-tight"
          >
            Specialist-led.{" "}
            <span className="italic text-primary">Research-driven.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground leading-relaxed"
          >
            Virtue Dental Clinic is led by Dr. Abhijit Sajo Sebastian — an MDS Endodontist and published researcher bringing post-graduate precision to every patient in Pala.
          </motion.p>
        </div>

        {/* Doctor card */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="grid md:grid-cols-5 gap-0 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10 bg-white"
          >
            {/* Image — 2 cols */}
            <div className="md:col-span-2 relative min-h-[420px] md:min-h-0">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
                alt="Dr. Abhijit Sajo Sebastian"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent md:bg-gradient-to-r" />

              {/* Name overlay */}
              <div className="absolute bottom-6 left-6 right-6 md:hidden">
                <div className="flex items-center gap-2 mb-1.5">
                  <Star className="w-3.5 h-3.5 text-accent fill-accent" />
                  <span className="text-white/70 text-[10px] font-bold uppercase tracking-widest">MDS Specialist</span>
                </div>
                <h3 className="text-2xl font-serif text-white">Dr. Abhijit Sajo Sebastian</h3>
                <p className="text-white/60 text-sm">Chief Dental Surgeon & Endodontist</p>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute top-6 left-6 glass-card px-3 py-2 rounded-xl flex items-center gap-2"
              >
                <FlaskConical className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold text-foreground">CBCT Research</span>
              </motion.div>
            </div>

            {/* Content — 3 cols */}
            <div className="md:col-span-3 p-8 sm:p-12 flex flex-col justify-center">
              {/* Desktop name */}
              <div className="hidden md:block mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-accent fill-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">MDS Specialist · Endodontist</span>
                </div>
                <h3 className="text-3xl font-serif text-foreground">Dr. Abhijit Sajo Sebastian</h3>
                <p className="text-muted-foreground text-sm mt-1">Chief Dental Surgeon & Endodontist</p>
              </div>

              {/* Credentials */}
              <div className="space-y-4 mb-8">
                {credentials.map((c, i) => (
                  <motion.div
                    key={c.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.07 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <GraduationCap className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{c.label}</span>
                      <p className="text-sm text-foreground mt-0.5 leading-snug">{c.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Visiting */}
              <div className="p-4 bg-muted/60 rounded-2xl mb-8">
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2.5 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3" /> Also Visiting At
                </p>
                <ul className="space-y-1">
                  {visiting.map(v => (
                    <li key={v} className="text-sm text-muted-foreground">{v}</li>
                  ))}
                </ul>
              </div>

              {/* Quote */}
              <div className="relative pl-5 border-l-2 border-primary/20">
                <Quote className="absolute -top-1 -left-3 w-5 h-5 text-primary/20" />
                <p className="text-sm italic font-serif text-foreground leading-relaxed">
                  "Painless, precise endodontics — saving your natural teeth is always the first priority."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
