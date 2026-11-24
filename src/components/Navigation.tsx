'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, BookOpen } from 'lucide-react';

interface NavigationProps {
  onOpenPurchase?: () => void;
}

export default function Navigation({ onOpenPurchase }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '/#overview' },
    { name: 'The Premise', href: '/#premise' },
    { name: 'Inside the Book', href: '/#contents' },
    { name: 'Deliverables', href: '/#bundle' },
    { name: 'Author', href: '/#author' },
    { name: 'FAQ', href: '/#faq' },
  ];

  return (
    <>
      {/* Topmost Hairline Scroll Progress Bar (Separate from header, zero height intrusion) */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 inset-x-0 h-[2px] bg-obsidian origin-left z-[70] pointer-events-none"
      />

      {/* Floating Slim Responsive Header */}
      <header className="fixed top-3 sm:top-4 inset-x-0 z-50 px-3 sm:px-6 max-w-6xl mx-auto">
        <div
          className={`backdrop-blur-xl bg-white/85 border border-white/95 rounded-full px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? 'shadow-[0_10px_35px_rgb(0,0,0,0.06)] border-black/[0.08]'
              : 'shadow-[0_6px_25px_rgb(0,0,0,0.03)]'
          }`}
        >
          {/* Brand Wordmark (Newsreader italic) */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-obsidian group-hover:scale-125 transition-transform" />
            <span className="font-display italic text-lg sm:text-xl tracking-tight text-obsidian font-normal group-hover:opacity-80 transition-opacity">
              The School of Fathers
            </span>
          </Link>

          {/* Minimalist Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] tracking-wide text-neutral-500 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-obsidian transition-colors py-1"
              >
                {link.name}
              </a>
            ))}

            {/* Book Preview Link in Nav */}
            <Link
              href="/preview"
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-colors border ${
                pathname === '/preview'
                  ? 'bg-obsidian text-white border-obsidian'
                  : 'bg-black/[0.03] text-neutral-600 hover:text-obsidian hover:bg-black/[0.06] border-black/[0.04]'
              }`}
            >
              <BookOpen className="w-3 h-3 text-neutral-500" />
              <span>Preview Book</span>
            </Link>
          </nav>

          {/* Right Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link
              href="/preview"
              className="hidden md:inline-flex lg:hidden items-center gap-1 text-[11px] font-medium text-neutral-600 bg-black/[0.03] px-2.5 py-1.5 rounded-full"
            >
              <BookOpen className="w-3 h-3" />
              <span>Preview</span>
            </Link>

            <button
              onClick={
                onOpenPurchase
                  ? onOpenPurchase
                  : () => {
                      const el = document.getElementById('purchase');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                      else window.location.href = 'https://superprofile.bio/vp/the-school-of-fathers';
                    }
              }
              className="inline-flex items-center justify-center bg-obsidian text-white text-xs sm:text-[13px] font-medium tracking-tight px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-neutral-800 transition-all duration-200 shadow-2xs hover:shadow active:scale-[0.98] gap-1"
            >
              <span>Get Guide — $29</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70 hidden sm:inline" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-neutral-600 hover:text-obsidian transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-2 backdrop-blur-2xl bg-white/95 border border-white/90 p-5 rounded-2xl shadow-xl flex flex-col gap-3 text-sm"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-neutral-600 hover:text-obsidian font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-black/[0.06] flex flex-col gap-2.5">
                <Link
                  href="/preview"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 bg-neutral-100 text-obsidian py-2.5 rounded-full text-xs font-medium"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Interactive Book Preview</span>
                </Link>
                <a
                  href="https://superprofile.bio/vp/the-school-of-fathers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-obsidian text-white py-2.5 rounded-full text-xs font-medium shadow-sm"
                >
                  Buy on SuperProfile
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
