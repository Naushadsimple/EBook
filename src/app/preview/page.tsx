'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, BookOpen, Lock, ShieldCheck, Sparkles, Star } from 'lucide-react';
import ParallaxOrbs from '@/components/ParallaxOrbs';
import BookPageFlip from '@/components/BookPageFlip';
import Footer from '@/components/Footer';

export default function BookPreviewPage() {
  const superprofileUrl = 'https://superprofile.bio/vp/the-school-of-fathers';

  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-obsidian selection:text-white">
      <ParallaxOrbs />

      {/* Slim, Minimal Top Bar */}
      <header className="fixed top-4 inset-x-0 z-50 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="backdrop-blur-xl bg-white/85 border border-white/95 rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-neutral-600 hover:text-obsidian font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Overview</span>
            <span className="sm:hidden">Back</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="font-display italic text-base sm:text-lg text-obsidian">
              The School of Fathers
            </span>
            <span className="text-[10px] font-mono uppercase text-neutral-400 bg-black/[0.04] px-2 py-0.5 rounded-full hidden md:inline">
              Preview Mode
            </span>
          </div>

          <a
            href={superprofileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-obsidian text-white text-xs font-medium px-4 py-1.5 rounded-full hover:bg-neutral-800 transition-all shadow-2xs"
          >
            <span>Get Book</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Main Preview Area */}
      <main className="flex-1 pt-28 sm:pt-36 pb-16 px-4 sm:px-6 max-w-5xl mx-auto w-full">
        {/* Eyebrow & Title */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05] text-[11px] font-mono tracking-widest uppercase text-neutral-500 mb-3">
            <BookOpen className="w-3.5 h-3.5 text-neutral-700" />
            <span>Interactive 3D Book Viewer</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-obsidian font-normal">
            Book Preview Edition
          </h1>
          <p className="text-muted-body text-xs sm:text-sm mt-2 max-w-md mx-auto leading-relaxed">
            Flip through the cover below to inspect the layout, typography, and publication notes by
            author CP Singh.
          </p>
        </div>

        {/* 3D Realistic Foldable Book with Page Flip Animation */}
        <div className="my-4">
          <BookPageFlip />
        </div>

        {/* Informational Card */}
        <div className="mt-16 max-w-xl mx-auto backdrop-blur-xl bg-white/75 border border-white/95 rounded-2xl p-6 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.03)] text-center">
          <div className="flex items-center justify-center gap-1 text-neutral-900 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-neutral-900 text-neutral-900" />
            ))}
          </div>
          <p className="font-display italic text-sm text-neutral-700 mb-2">
            “Its a different book and mirror for fathers.. must read. Amazing.”
          </p>
          <p className="text-[11px] text-neutral-400 mb-6">— Ashish Kaushal, Verified Reader</p>

          <div className="pt-4 border-t border-black/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
            <div>
              <p className="text-xs font-semibold text-obsidian">Ready for the complete manual?</p>
              <p className="text-[11px] text-neutral-400">
                230 pages in DRM-free EPUB, PDF &amp; Reflection Journal.
              </p>
            </div>
            <a
              href={superprofileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-obsidian text-white text-xs font-medium px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-all shrink-0 shadow-2xs"
            >
              <span>Buy on SuperProfile — $29</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
