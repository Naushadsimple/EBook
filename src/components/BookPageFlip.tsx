'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Lock,
  RotateCcw,
  Sparkles,
} from 'lucide-react';

interface BookPageFlipProps {
  onBuy?: () => void;
}

export default function BookPageFlip({ onBuy }: BookPageFlipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  const toggleBook = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setIsOpen((prev) => !prev);
    setTimeout(() => {
      setIsFlipping(false);
    }, 700);
  };

  const superprofileUrl = 'https://superprofile.bio/vp/the-school-of-fathers';

  return (
    <div className="w-full flex flex-col items-center justify-center py-6 sm:py-12">
      {/* Interactive Helper Hint */}
      <div className="mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-black/[0.06] shadow-2xs text-xs text-neutral-600">
        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
        <span>{isOpen ? 'Click "Close Book" or the cover to turn back' : 'Click the book cover to fold & open the page'}</span>
      </div>

      {/* 3D Book Stage */}
      <div
        className="relative flex items-center justify-center select-none"
        style={{
          perspective: '1800px',
        }}
      >
        {/* Book Ambient Floor Shadow */}
        <div
          className={`absolute -bottom-8 bg-black/20 blur-2xl rounded-full transition-all duration-700 pointer-events-none ${
            isOpen ? 'w-[680px] h-12 scale-100' : 'w-[320px] h-8 scale-90'
          }`}
        />

        {/* The Book Container */}
        <div
          className="relative transition-all duration-700 ease-in-out"
          style={{
            transformStyle: 'preserve-3d',
            transform: isOpen ? 'translateX(0px)' : 'translateX(0px)',
          }}
        >
          {/* =========================================================
              OPENED SPREAD BASE (Visible when book is open)
             ========================================================= */}
          <div
            className={`flex flex-col sm:flex-row rounded-r-xl rounded-l-md shadow-2xl transition-opacity duration-500 overflow-hidden ${
              isOpen ? 'opacity-100 relative' : 'opacity-0 pointer-events-none absolute inset-0'
            }`}
            style={{
              width: '100%',
              maxWidth: '740px',
              minHeight: '480px',
              backgroundColor: '#f8f5ee',
            }}
          >
            {/* Left Page (Inside Cover / Frontispiece) */}
            <div className="w-full sm:w-1/2 p-7 sm:p-10 border-b sm:border-b-0 sm:border-r border-[#e4ded0] flex flex-col justify-between bg-gradient-to-r from-[#ece6d8] via-[#f7f4ec] to-[#fbf9f4] relative">
              {/* Inner spine shadow effect */}
              <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black/[0.08] to-transparent pointer-events-none" />

              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block mb-1">
                  First Digital Folio
                </span>
                <h2 className="font-display text-2xl sm:text-3xl text-obsidian font-normal">
                  The School of Fathers
                </h2>
                <p className="font-display italic text-sm text-neutral-600 mt-1">
                  Raising Children. Building Character. Creating Legacy.
                </p>
                <div className="w-12 h-[1px] bg-neutral-300 my-4" />
                <p className="text-xs text-neutral-500 leading-relaxed">
                  A foundational curriculum engineered for fathers who seek to govern their home with
                  quiet presence, non-reactive emotional discipline, and enduring generational vision.
                </p>
              </div>

              {/* Author Attribution */}
              <div className="pt-6 border-t border-black/[0.05]">
                <p className="font-display italic text-base text-obsidian">CP Singh</p>
                <p className="text-[11px] text-neutral-400">Author &amp; Family Educator</p>
                <span className="text-[10px] text-neutral-400 font-mono mt-2 block">
                  Edition 2.4 • DRM-Free
                </span>
              </div>
            </div>

            {/* Right Page (The Page Folded Open with "Content Not Available Now") */}
            <div className="w-full sm:w-1/2 p-7 sm:p-10 flex flex-col justify-between bg-gradient-to-l from-[#ece6d8] via-[#f7f4ec] to-[#fbf9f4] relative">
              {/* Spine crease shadow on left edge */}
              <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/[0.08] to-transparent pointer-events-none" />

              {/* Header running head */}
              <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 uppercase tracking-widest pb-3 border-b border-black/[0.05]">
                <span>Chapter 01</span>
                <span>The Anatomy of Presence</span>
              </div>

              {/* CONTENT NOT AVAILABLE NOW NOTICE */}
              <div className="py-10 my-auto text-center flex flex-col items-center justify-center">
                {/* Minimalist Lock / Bookmark Icon */}
                <div className="w-14 h-14 rounded-full bg-neutral-100 border border-neutral-200/90 flex items-center justify-center text-neutral-500 mb-4 shadow-2xs">
                  <Lock className="w-6 h-6 stroke-[1.5]" />
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-[10px] font-mono uppercase tracking-widest text-neutral-600 mb-3">
                  <span>Digital Preview Notice</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl text-obsidian font-normal tracking-tight mb-2">
                  Content Not Available Now
                </h3>

                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-xs mb-6">
                  This preview chapter is currently restricted. You can unlock the full 230-page
                  digital folio, 30-day journal, and printable charters immediately on SuperProfile.
                </p>

                {/* Primary Unlock CTA */}
                <a
                  href={superprofileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-obsidian text-white text-xs font-medium px-6 py-3 rounded-full hover:bg-neutral-800 transition-all shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Unlock Full Book on SuperProfile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Page Number & Assurance */}
              <div className="flex items-center justify-between text-[11px] text-neutral-400 pt-3 border-t border-black/[0.05]">
                <span className="font-mono text-[10px]">p. 01</span>
                <span className="text-[10px] text-neutral-400">Immediate Digital Delivery</span>
                <span className="font-mono text-[10px]">230 pp</span>
              </div>
            </div>
          </div>

          {/* =========================================================
              THE 3D FOLDABLE COVER (Animates like turning a book page)
             ========================================================= */}
          <motion.div
            onClick={toggleBook}
            animate={{
              rotateY: isOpen ? -180 : 0,
            }}
            transition={{
              duration: 0.85,
              ease: [0.25, 1, 0.5, 1], // Custom realistic page-turn bezier
            }}
            style={{
              transformOrigin: 'left center',
              transformStyle: 'preserve-3d',
            }}
            className={`cursor-pointer rounded-r-xl rounded-l-sm overflow-visible ${
              isOpen ? 'absolute top-0 left-0 h-full' : 'relative'
            }`}
          >
            {/* FRONT OF THE COVER (Visible when book is closed) */}
            <div
              className="relative rounded-r-xl rounded-l-sm overflow-hidden shadow-2xl bg-[#1c1b18] border-l-2 border-neutral-900"
              style={{
                width: '320px',
                height: '480px',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              {/* Exact Front Cover Image */}
              <Image
                src="/images/front_cover.jpg"
                alt="The School of Fathers by CP Singh - Book Cover"
                fill
                priority
                className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                sizes="340px"
              />

              {/* Spine Crease / Sheen Line */}
              <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-black/60 via-white/10 to-transparent pointer-events-none" />

              {/* Edge page thickness sheen */}
              <div className="absolute inset-y-0 right-0 w-3 bg-gradient-to-l from-black/30 to-transparent pointer-events-none" />

              {/* Hover Cue Banner at bottom */}
              <div className="absolute bottom-4 inset-x-4 backdrop-blur-md bg-black/60 text-white border border-white/20 rounded-xl px-3 py-2 text-center text-xs flex items-center justify-center gap-1.5 shadow-lg group-hover:bg-black/75 transition-colors">
                <BookOpen className="w-3.5 h-3.5 text-neutral-300" />
                <span className="font-medium text-[11px] tracking-wide">Click to Turn Page</span>
              </div>
            </div>

            {/* BACK OF THE COVER (Visible when folded open 180 degrees) */}
            <div
              className="absolute inset-0 rounded-l-xl rounded-r-sm overflow-hidden bg-[#ece6d8] border-r border-[#d9d2c1] shadow-xl p-8 flex flex-col justify-between"
              style={{
                transform: 'rotateY(180deg)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              <div className="border-b border-black/[0.06] pb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                  Inside Cover
                </span>
                <p className="font-display italic text-lg text-obsidian mt-2">
                  “Fatherhood is not a destination. It is a school you never graduate from.”
                </p>
                <p className="text-xs text-neutral-500 mt-2">— CP Singh</p>
              </div>

              <div className="text-center py-4">
                <div className="w-10 h-10 rounded-full bg-black/[0.04] flex items-center justify-center mx-auto mb-2 text-neutral-600">
                  <RotateCcw className="w-4 h-4" />
                </div>
                <p className="text-[11px] text-neutral-500">
                  Click here to fold cover back and close the book
                </p>
              </div>

              <div className="pt-4 border-t border-black/[0.06] text-[10px] font-mono text-neutral-400 text-center">
                The School of Fathers • Preview Edition
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Control Buttons Under Book */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={toggleBook}
          className="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-obsidian border border-black/[0.08] px-5 py-2.5 rounded-full text-xs font-medium shadow-2xs hover:shadow transition-all"
        >
          {isOpen ? (
            <>
              <ChevronLeft className="w-4 h-4" />
              <span>Close Book (Turn Back)</span>
            </>
          ) : (
            <>
              <BookOpen className="w-4 h-4 text-neutral-500" />
              <span>Open Book &amp; Fold Page</span>
              <ChevronRight className="w-4 h-4" />
            </>
          )}
        </button>

        <a
          href={superprofileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-obsidian text-white px-5 py-2.5 rounded-full text-xs font-medium hover:bg-neutral-800 transition-all shadow-sm"
        >
          <span>Get Full Unabridged Edition</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
