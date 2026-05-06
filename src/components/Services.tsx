import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const programs = [
  {
    order: '01',
    title: 'The Iconic Boardroom',
    description: 'A 12-month intimate mastermind for CEOs scaling past $2M. Focus on operational excellence and exit readiness.',
    tags: ['Mastermind', 'Executive Strategy']
  },
  {
    order: '02',
    title: 'Private Advisory',
    description: 'Direct 1:1 mentorship for high-impact decision making, brand refinement, and personal leadership coaching.',
    tags: ['1:1 Consulting', 'Brand Identity']
  },
  {
    order: '03',
    title: 'Recursive Growth',
    description: 'System-wide audit and optimization. Build an business that grows without your constant presence.',
    tags: ['Operations', 'Automation']
  }
];

export const Services = () => {
  return (
    <section id="services" className="bg-stone-light">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-burgundy font-bold block mb-4">
              Curriculum & Advisory
            </span>
            <h2 className="text-4xl md:text-6xl font-serif">Selected Paths for <span className="italic">Evolution</span></h2>
          </div>
          <p className="text-slate max-w-xs text-sm italic">
            Each path is designed for specific stages of scale, ensuring that your growth is both sustainable and prestigious.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border-t border-coal/10">
          {programs.map((program, idx) => (
            <motion.div 
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group p-8 md:p-12 border-b md:border-b-0 md:border-r border-coal/10 hover:bg-burgundy transition-colors duration-500 last:border-r-0"
            >
              <span className="font-serif text-3xl text-burgundy group-hover:text-stone-light transition-colors duration-500 mb-8 block">
                {program.order}
              </span>
              <h3 className="text-2xl mb-6 group-hover:text-white transition-colors duration-500">
                {program.title}
              </h3>
              <p className="text-slate group-hover:text-stone-light/70 transition-colors duration-500 mb-8 line-clamp-3">
                {program.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {program.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[9px] uppercase tracking-widest border border-coal/10 px-2 py-1 group-hover:border-white/30 group-hover:text-white transition-colors duration-500">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold group-hover:text-white transition-colors duration-500">
                Inquire <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
