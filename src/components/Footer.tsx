'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-black/[0.06] mt-24 py-16 text-neutral-500">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Brand & Subtitle */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-display italic text-2xl text-obsidian mb-1">
              The School of Fathers
            </span>
            <p className="text-xs text-neutral-400">
              A deliberate manual for paternal leadership and quiet presence by CP Singh.
            </p>
          </div>

          {/* Archival Quality Badge */}
          <div className="flex items-center gap-3">
            <div className="backdrop-blur-md bg-white/70 border border-white/90 px-4 py-2 rounded-xl text-center shadow-2xs">
              <span className="text-[10px] uppercase tracking-wider text-neutral-400 block font-medium">
                Archival Folio
              </span>
              <span className="text-xs font-medium text-obsidian">
                Immediate Digital Delivery (EPUB &amp; PDF)
              </span>
            </div>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-black/[0.03] hover:bg-black/[0.06] border border-black/[0.05] flex items-center justify-center text-neutral-600 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Links & Copyright */}
        <div className="pt-8 border-t border-black/[0.05] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} The School of Fathers by CP Singh. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/" className="hover:text-obsidian transition-colors">
              Overview
            </Link>
            <span>•</span>
            <Link href="/preview" className="hover:text-obsidian transition-colors font-medium text-neutral-600">
              Book Preview
            </Link>
            <span>•</span>
            <a
              href="https://superprofile.bio/vp/the-school-of-fathers"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-obsidian transition-colors underline underline-offset-4"
            >
              SuperProfile Store
            </a>
            <span>•</span>
            <span className="text-neutral-500 font-medium">Instant Delivery Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
