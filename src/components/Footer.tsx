import React from 'react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-burgundy text-stone-light">
      <div className="section-container !py-32">
        <div className="grid md:grid-cols-3 gap-16 mb-24">
          <div className="col-span-2">
            <h2 className="text-4xl md:text-7xl mb-12 max-w-2xl leading-none">
              Are you ready to <span className="italic">become iconic</span>?
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
              <a href="mailto:hello@iconicscale.com" className="group">
                <span className="nav-link !text-stone-light !text-sm">Inquiry @ IconicScale.com</span>
                <div className="h-[1px] w-0 group-hover:w-full bg-stone-light transition-all duration-500 mt-2" />
              </a>
              <a href="#" className="group">
                <span className="nav-link !text-stone-light !text-sm">Book a Strategy Audit</span>
                <div className="h-[1px] w-0 group-hover:w-full bg-stone-light transition-all duration-500 mt-2" />
              </a>
            </div>
          </div>
          
          <div className="space-y-12">
            <div>
              <p className="nav-link !text-white/50 mb-4 block">Navigation</p>
              <ul className="space-y-2">
                <li><a href="#" className="nav-link !text-stone-light">Platform</a></li>
                <li><a href="#" className="nav-link !text-stone-light">Manifesto</a></li>
                <li><a href="#" className="nav-link !text-stone-light">Archives</a></li>
              </ul>
            </div>
            <div>
              <p className="nav-link !text-white/50 mb-4 block">Social</p>
              <ul className="space-y-2">
                <li><a href="#" className="nav-link !text-stone-light">Instagram</a></li>
                <li><a href="#" className="nav-link !text-stone-light">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4 text-center">
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl tracking-tighter lowercase">iconic</span>
            <div className="h-[1px] w-4 bg-white/50" />
            <span className="font-sans text-[8px] uppercase tracking-[0.3em]">scale</span>
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
            &copy; {new Date().getFullYear()} Iconic Scale LLC. All rights reserved.
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 underline">
            Privacy & Terms
          </p>
        </div>
      </div>
    </footer>
  );
};
