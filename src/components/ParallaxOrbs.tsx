'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxOrbs() {
  const { scrollY } = useScroll();

  // Subtle different scroll rates for genuine depth
  const orb1Y = useTransform(scrollY, [0, 2000], [0, -180]);
  const orb2Y = useTransform(scrollY, [0, 2000], [0, 240]);
  const orb3Y = useTransform(scrollY, [0, 3000], [0, -220]);
  const orbScale = useTransform(scrollY, [0, 1500], [1, 1.15]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Top Center Soft Sunlight Orb */}
      <motion.div
        style={{ y: orb1Y, scale: orbScale }}
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[850px] sm:w-[1100px] h-[550px] bg-gradient-to-b from-neutral-200/50 via-neutral-100/30 to-transparent blur-3xl"
      />

      {/* Mid Right Terracotta/Warm Mist Orb */}
      <motion.div
        style={{ y: orb2Y }}
        className="absolute top-[35%] right-[-15%] sm:right-[-8%] w-[500px] sm:w-[700px] h-[600px] bg-gradient-to-br from-amber-100/25 via-stone-200/30 to-transparent rounded-full blur-[140px]"
      />

      {/* Deep Bottom Left Obsidian Aura Orb */}
      <motion.div
        style={{ y: orb3Y }}
        className="absolute top-[75%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-neutral-300/20 via-neutral-200/10 to-transparent rounded-full blur-[160px]"
      />

      {/* Architectural Hairline Grid Line (Very faint) */}
      <div className="absolute inset-x-0 top-0 h-full max-w-6xl mx-auto border-x border-black/[0.02] pointer-events-none" />
    </div>
  );
}
