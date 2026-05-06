import React from 'react';
import { motion } from 'motion/react';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-center mix-blend-difference text-white"
    >
      <div className="flex items-center gap-2">
        <span className="font-serif text-2xl tracking-tighter lowercase">iconic</span>
        <div className="h-[1px] w-8 bg-white/50" />
        <span className="font-sans text-[10px] uppercase tracking-[0.3em]">scale</span>
      </div>

      <div className="hidden md:flex items-center gap-12">
        <a href="#about" className="nav-link !text-white">Philosophy</a>
        <a href="#services" className="nav-link !text-white">Curriculum</a>
        <a href="#contact" className="nav-link !text-white">Inquiry</a>
      </div>

      <button className="md:hidden">
        <div className="w-6 h-[1px] bg-white mb-2" />
        <div className="w-4 h-[1px] bg-white ml-auto" />
      </button>
    </motion.nav>
  );
};
