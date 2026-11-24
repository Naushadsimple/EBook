'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface BookMockup3DProps {
  className?: string;
  showMetadata?: boolean;
}

export default function BookMockup3D({ className = '', showMetadata = true }: BookMockup3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt physics for genuine 3D perspective
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 180 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    mouseX.set(clientX / width - 0.5);
    mouseY.set(clientY / height - 0.5);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      {/* Soft Ambient Backlight Glow */}
      <div className="absolute -inset-6 bg-gradient-to-tr from-neutral-200/60 via-amber-100/30 to-white/40 rounded-[36px] blur-2xl opacity-70 transition-opacity duration-700 pointer-events-none" />

      {/* Main Glass Card Container */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative w-full max-w-[380px] sm:max-w-[420px] backdrop-blur-xl bg-white/75 border border-white/95 p-5 sm:p-6 rounded-3xl shadow-[0_16px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.1)] transition-all duration-500 perspective-1000"
      >
        {/* 3D Book Container with Tilt */}
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          className="relative flex justify-center py-2"
        >
          {/* Simulated 3D Book with Shadow */}
          <div className="relative group cursor-pointer transition-transform duration-300">
            {/* Book Cast Shadow */}
            <div
              className="absolute -bottom-5 inset-x-4 h-8 bg-black/25 blur-xl rounded-full transform scale-95 transition-all duration-500 group-hover:scale-100 group-hover:blur-2xl"
              style={{ transform: 'translateZ(-40px)' }}
            />

            {/* Book Body */}
            <div
              className="relative rounded-r-lg rounded-l-sm overflow-hidden shadow-[2px_10px_30px_rgba(0,0,0,0.18)] border-l-2 border-neutral-800 bg-[#161616]"
              style={{
                width: '260px',
                height: '390px',
                transform: 'translateZ(30px)',
              }}
            >
              {/* Exact Book Cover Image */}
              <Image
                src="/images/front_cover.jpg"
                alt="The School of Fathers by CP Singh - Front Cover"
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 260px, 280px"
              />

              {/* Spine Highlight / Crease Sheen */}
              <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/50 via-white/15 to-transparent pointer-events-none" />

              {/* Glass Glare Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>

            {/* Thickness / Book Pages Edge on Right */}
            <div
              className="absolute top-2 bottom-2 right-[-10px] w-3 bg-gradient-to-r from-[#ece7de] to-[#ded7cc] rounded-r-sm shadow-inner pointer-events-none"
              style={{
                transform: 'rotateY(90deg) translateZ(-5px)',
                backgroundSize: '100% 3px',
                backgroundImage:
                  'linear-gradient(to bottom, #d8d0c2 1px, transparent 1px, transparent 3px)',
              }}
            />
          </div>
        </motion.div>

        {showMetadata && (
          <>
            {/* Sleek Metadata Grid (No audio references) */}
            <div className="mt-5 grid grid-cols-3 gap-2 bg-black/[0.02] border border-black/[0.04] p-3 rounded-xl text-center">
              <div>
                <span className="block font-display text-lg font-medium text-obsidian">230</span>
                <span className="block text-[10px] tracking-wider font-medium text-neutral-400 uppercase">
                  Pages
                </span>
              </div>
              <div className="border-x border-black/[0.05]">
                <span className="block font-display text-lg font-medium text-obsidian">14</span>
                <span className="block text-[10px] tracking-wider font-medium text-neutral-400 uppercase">
                  Chapters
                </span>
              </div>
              <div>
                <span className="block font-display text-lg font-medium text-obsidian">EPUB+PDF</span>
                <span className="block text-[10px] tracking-wider font-medium text-neutral-400 uppercase">
                  Formats
                </span>
              </div>
            </div>

            {/* Footer Badge in Card */}
            <div className="mt-3.5 px-1 flex items-center justify-between text-[11px] text-neutral-400">
              <span className="flex items-center gap-1.5 font-medium text-neutral-600">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                DRM-Free Edition
              </span>
              <span className="font-mono text-[10px] tracking-wider text-neutral-400">
                CP SINGH • 2024
              </span>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}
