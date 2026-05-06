import React from 'react';
import { motion } from 'motion/react';

export const Philosophy = () => {
  return (
    <section id="about" className="section-container bg-surface-white grid md:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="space-y-8"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-burgundy font-bold">
          Our Philosophy
        </span>
        <h2 className="text-4xl md:text-6xl leading-tight">
          Beyond the hustle. <br />
          Towards the <span className="italic">Legacy</span>.
        </h2>
        <p className="text-slate leading-relaxed text-lg max-w-lg">
          We believe that true scale isn't just about revenue—it's about the refinement of your operation, the clarity of your vision, and the preservation of your well-being.
        </p>
        <p className="text-slate leading-relaxed">
          At Iconic Scale, we mentor established female founders to transition from the day-to-day grind to the architectural oversight of their empires. We focus on high-yield strategy, editorial branding, and executive grace.
        </p>
        <div className="pt-4">
          <button className="btn-outline">Read the Manifesto</button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative aspect-[3/4] overflow-hidden"
      >
        <img 
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=2576" 
          alt="Editorial portrait" 
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 border-[20px] border-surface-white pointer-events-none" />
      </motion.div>
    </section>
  );
};
