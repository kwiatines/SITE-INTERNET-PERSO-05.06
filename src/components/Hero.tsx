import React from 'react';
import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-coal">
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069" 
          alt="Luxury office background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Overlay Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-stone-light/80 block mb-6">
            The standard of excellence for established founders
          </span>
          <h1 className="text-white text-5xl md:text-8xl leading-[0.9] mb-12 max-w-4xl mx-auto">
            Scale with <span className="italic">Authority</span>, Live with <span className="italic">Grace</span>.
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="btn-primary !bg-white !text-coal hover:!bg-stone-light">
              Explore the platform
            </button>
            <button className="btn-outline !border-white !text-white hover:!bg-white hover:!text-coal">
              Private Consulting
            </button>
          </div>
        </motion.div>
      </div>

      {/* Vertical Rail Text */}
      <div className="absolute right-8 bottom-24 hidden lg:block">
        <p className="font-sans text-[10px] uppercase tracking-[0.5em] text-white/30 [writing-mode:vertical-rl] rotate-180">
          Est. MMXXIV &copy; Iconic Scale Platform
        </p>
      </div>
    </section>
  );
};
