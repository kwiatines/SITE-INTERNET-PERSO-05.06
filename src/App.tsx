/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Services } from './components/Services';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-surface-white selection:bg-burgundy selection:text-white">
      <Navbar />
      <Hero />
      <Philosophy />
      <Services />
      <Footer />
    </main>
  );
}

