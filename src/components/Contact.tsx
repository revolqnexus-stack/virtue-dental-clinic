"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send, MessageCircle, Info, Mail } from "lucide-react";
import Link from "next/link";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    content: (
      <>
        Manakkattu Avenue, 138/2,<br />
        Pala Bypass Road, Vellappadu,<br />
        Pala, Kottayam, Kerala — 686575
      </>
    ),
    action: { label: "Get Directions", href: "https://maps.app.goo.gl/5DS1k9PnA9vQbMU2A", external: true },
  },
  {
    icon: Phone,
    title: "Connect with Us",
    content: (
      <>
        <Link href="tel:+918156822525" className="font-semibold text-foreground hover:text-primary transition-colors block">
          +91 81568 22525
        </Link>
        <Link href="https://wa.me/918156822525" className="text-primary font-bold hover:underline flex items-center gap-1.5 mt-1">
          <MessageCircle className="w-3.5 h-3.5" /> Chat on WhatsApp
        </Link>
        <Link href="mailto:abhijitsebastian@gmail.com" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 mt-1 text-sm">
          <Mail className="w-3.5 h-3.5" /> abhijitsebastian@gmail.com
        </Link>
      </>
    ),
    action: null,
  },
  {
    icon: Clock,
    title: "Opening Hours",
    content: (
      <>
        Monday – Saturday<br />
        <span className="font-semibold text-foreground">10:00 AM – 07:00 PM</span><br />
        <span className="text-destructive text-sm italic mt-1 inline-block">Closed on Sundays</span>
      </>
    ),
    action: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 ivory-gradient" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              Find Us
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif text-foreground mb-6 leading-tight">
              On the bypass road{" "}
              <span className="italic text-primary">in Pala.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12 max-w-md">
              Find us along Pala Bypass Road in Vellappadu, with ample parking for private vehicles. Virtue Dental Clinic serves as a specialist hub for Pala and the wider Kottayam district.
            </p>

            <div className="space-y-8">
              {contactInfo.map(({ icon: Icon, title, content, action }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-5"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center flex-shrink-0">
                    <Icon className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-foreground mb-1.5">{title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{content}</p>
                    {action && (
                      <Link
                        href={action.href}
                        target={action.external ? "_blank" : undefined}
                        className="inline-flex items-center gap-1 mt-2 text-sm text-primary font-medium hover:underline"
                      >
                        <MapPin className="w-3 h-3" /> {action.label}
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10 p-5 bg-primary/5 border border-primary/10 rounded-2xl flex items-start gap-3"
            >
              <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Prior appointment recommended. Listed on Practo and Justdial. Masks required on premises.
              </p>
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-card rounded-[2rem] p-8 sm:p-10 shadow-2xl shadow-primary/8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/4 rounded-bl-[4rem] pointer-events-none" />

            <h3 className="text-2xl sm:text-3xl font-serif text-foreground mb-2">Quick Inquiry</h3>
            <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
              Leave your details and our team will get back to you shortly.
            </p>

            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full px-4 py-3 bg-white/60 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wider">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="w-full px-4 py-3 bg-white/60 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-foreground uppercase tracking-wider">Treatment Interest</label>
                <select className="w-full px-4 py-3 bg-white/60 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none text-sm text-foreground">
                  <option>Root Canal Treatment (RCT)</option>
                  <option>Dental Implants</option>
                  <option>Crowns &amp; Bridges</option>
                  <option>Cosmetic Dentistry</option>
                  <option>General Checkup</option>
                  <option>Paediatric Care</option>
                  <option>Wisdom Tooth Extraction</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-foreground uppercase tracking-wider">Message</label>
                <textarea
                  rows={4}
                  placeholder="How can our specialist help you today?"
                  className="w-full px-4 py-3 bg-white/60 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none text-sm"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-primary/20"
              >
                Send Inquiry
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
