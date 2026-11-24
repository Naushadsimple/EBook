'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Download,
  ExternalLink,
  FileText,
  Lock,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import BookMockup3D from '@/components/BookMockup3D';
import ParallaxOrbs from '@/components/ParallaxOrbs';
import SyllabusExplorer from '@/components/SyllabusExplorer';
import FAQAccordion from '@/components/FAQAccordion';
import PurchaseModal from '@/components/PurchaseModal';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [isPurchaseOpen, setIsPurchaseOpen] = useState(false);
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');

  const superprofileUrl = 'https://superprofile.bio/vp/the-school-of-fathers';
  const priceDisplay = currency === 'USD' ? '$29' : '₹499';

  // Parallax scroll effects matching Editorial Ether design
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const quoteY = useTransform(scrollYProgress, [0.1, 0.3], [24, -24]);
  const authorCardY = useTransform(scrollYProgress, [0.55, 0.75], [30, -20]);

  return (
    <div ref={containerRef} className="relative min-h-screen selection:bg-obsidian selection:text-white">
      <ParallaxOrbs />
      <Navigation onOpenPurchase={() => setIsPurchaseOpen(true)} />

      <main className="pt-28 sm:pt-36">
        {/* =========================================================================
            HERO SECTION (Faithful to code.html in Design/)
           ========================================================================= */}
        <section className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pb-16 lg:pb-28" id="overview">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Editorial Copy (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col items-start text-left"
            >
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.03] backdrop-blur-md border border-black/[0.06] text-neutral-600 text-[11px] font-medium tracking-wider uppercase mb-5 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 animate-pulse" />
                <span>Digital Edition • Instant Download • By CP Singh</span>
              </div>

              {/* Main Display Headline */}
              <h1 className="font-display text-[40px] sm:text-[54px] lg:text-[64px] leading-[1.05] tracking-tight text-obsidian font-normal mb-5">
                The foundational playbook for modern fathers who refuse to be passive.
              </h1>

              {/* Crisp Subheadline */}
              <p className="font-sans text-muted-body text-base sm:text-lg leading-relaxed max-w-xl font-normal mb-8">
                A calm, stoic, and deeply practical handbook exploring emotional presence, boundary
                design, character molding, and generational legacy.
              </p>

              {/* Dual Sleek CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
                <a
                  href="#purchase"
                  className="inline-flex items-center justify-center bg-obsidian text-white text-sm font-medium tracking-tight px-7 py-3.5 rounded-full hover:bg-neutral-800 transition-all duration-200 shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 active:translate-y-0 gap-2"
                >
                  <span>Get Instant Access — {priceDisplay}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  href="/preview"
                  className="inline-flex items-center justify-center bg-white/80 hover:bg-white text-charcoal border border-black/[0.08] backdrop-blur-md text-sm font-medium px-6 py-3.5 rounded-full transition-all duration-200 hover:border-black/20 shadow-2xs gap-2 group"
                >
                  <BookOpen className="w-4 h-4 text-neutral-500 group-hover:text-obsidian transition-colors" />
                  <span>Interactive Book Preview</span>
                </Link>
              </div>

              {/* Subtle Assurance Line */}
              <div className="flex items-center gap-2 text-neutral-400 text-xs font-normal mt-5">
                <Lock className="w-3.5 h-3.5 text-neutral-500" />
                <span>Immediate PDF, EPUB + Printable Reflection Workbook delivered via email.</span>
              </div>

              {/* Minimalist Social Proof / Press Strip */}
              <div className="mt-12 pt-7 border-t border-black/[0.06] w-full">
                <div className="text-[11px] font-medium tracking-widest text-neutral-400 uppercase mb-3.5">
                  Read by over 3,400+ fathers across 42 countries
                </div>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-neutral-400 font-display italic text-lg sm:text-xl select-none">
                  <span className="hover:text-neutral-700 transition-colors cursor-default">
                    Fatherly
                  </span>
                  <span className="font-sans font-medium text-xs tracking-[0.2em] uppercase text-neutral-400 hover:text-neutral-700 transition-colors cursor-default">
                    The Modern Stoic
                  </span>
                  <span className="font-sans font-bold text-sm tracking-[0.25em] text-neutral-400 hover:text-neutral-700 transition-colors cursor-default">
                    MONOCLE
                  </span>
                  <span className="font-sans font-bold text-xs tracking-wider uppercase text-neutral-400 hover:text-neutral-700 transition-colors cursor-default">
                    Men’s Journal
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Visual Mockup in Glassmorphic Frame (5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <BookMockup3D />
            </motion.div>
          </div>
        </section>

        {/* =========================================================================
            CORE PREMISE SECTION (With Parallax Motion)
           ========================================================================= */}
        <section
          className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-20 lg:py-28 border-t border-black/[0.05]"
          id="premise"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Pull Quote / Thesis (6 cols) */}
            <motion.div style={{ y: quoteY }} className="lg:col-span-6 flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05] text-[11px] font-medium tracking-widest uppercase text-neutral-500 mb-6">
                  The Fundamental Hypothesis
                </div>
                <h2 className="font-display italic text-2xl sm:text-3xl lg:text-[38px] leading-snug text-obsidian font-light mb-8">
                  “Most parenting manuals focus entirely on managing the child’s behavior. This book
                  focuses squarely on mastering the father’s character.”
                </h2>
              </div>

              {/* Frosted Insight Note */}
              <div className="backdrop-blur-md bg-white/70 border border-white/90 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.03)]">
                <p className="text-sm sm:text-base leading-relaxed text-muted-body mb-4 font-normal">
                  Children rarely listen to what we preach; they continuously absorb the nervous system
                  of the room. When you cultivate quiet internal authority, panic dissipates and
                  rebellion turns into willing respect.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-8 h-8 rounded-full bg-obsidian text-white flex items-center justify-center font-display italic text-xs">
                    CP
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-obsidian">CP Singh</p>
                    <p className="text-[11px] text-neutral-400">Author, Educator &amp; Mentor</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3 Modern Contrast Cards (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="text-[11px] font-medium tracking-widest text-neutral-400 uppercase mb-2 pl-1">
                Three Conscious Shifts
              </div>

              {/* Shift 1 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="backdrop-blur-md bg-white/60 hover:bg-white/85 border border-white/90 p-5 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.02)] transition-all duration-300 hover:border-black/[0.08]"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium">
                    From
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-obsidian font-semibold bg-black/[0.04] px-2 py-0.5 rounded-full">
                    To Mastery
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <span className="text-neutral-400 line-through text-sm">
                    Reactionary Parenting
                  </span>
                  <span className="text-obsidian font-medium text-sm sm:text-base">
                    Intentional Presence
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-neutral-500">
                  Replacing short-tempered, end-of-day exasperation with calculated pause and
                  non-reactive physical grounding before reacting to domestic chaos.
                </p>
              </motion.div>

              {/* Shift 2 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="backdrop-blur-md bg-white/60 hover:bg-white/85 border border-white/90 p-5 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.02)] transition-all duration-300 hover:border-black/[0.08]"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium">
                    From
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-obsidian font-semibold bg-black/[0.04] px-2 py-0.5 rounded-full">
                    To Mastery
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <span className="text-neutral-400 line-through text-sm">Fragile Praise</span>
                  <span className="text-obsidian font-medium text-sm sm:text-base">
                    Resilient Discipline
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-neutral-500">
                  Moving beyond hollow affirmations and helicopter coddling into introducing
                  age-calibrated challenges that teach genuine internal self-worth and grit.
                </p>
              </motion.div>

              {/* Shift 3 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="backdrop-blur-md bg-white/60 hover:bg-white/85 border border-white/90 p-5 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.02)] transition-all duration-300 hover:border-black/[0.08]"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium">
                    From
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-obsidian font-semibold bg-black/[0.04] px-2 py-0.5 rounded-full">
                    To Mastery
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <span className="text-neutral-400 line-through text-sm">
                    Distracted Availability
                  </span>
                  <span className="text-obsidian font-medium text-sm sm:text-base">
                    Deep Time
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-neutral-500">
                  Discarding the illusion of “being in the room while checking screens” in exchange for
                  45 minutes of complete, undivided communion every day.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            INSIDE THE SYLLABUS SECTION
           ========================================================================= */}
        <section
          className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-20 lg:py-28 border-t border-black/[0.05]"
          id="contents"
        >
          <div className="max-w-xl mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05] text-[11px] font-medium tracking-widest uppercase text-neutral-500 mb-4">
              Architectural Blueprint
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-tight text-obsidian font-normal">
              Inside the Syllabus: 3 Movements &amp; 8 Core Modules
            </h2>
            <p className="text-muted-body text-sm sm:text-base mt-3 leading-relaxed">
              A systematic framework engineered to be digested chapter-by-chapter over 30 days, or
              referenced as an ongoing household manual.
            </p>
          </div>

          {/* Interactive Syllabus Explorer */}
          <SyllabusExplorer />
        </section>

        {/* =========================================================================
            ARTIFACT BUNDLE DELIVERABLES (No Audio)
           ========================================================================= */}
        <section
          className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-20 lg:py-28 border-t border-black/[0.05]"
          id="bundle"
        >
          <div className="text-center max-w-xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05] text-[11px] font-medium tracking-widest uppercase text-neutral-500 mb-4">
              Complete Artifact Bundle
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-tight text-obsidian font-normal">
              What You Receive Upon Purchase
            </h2>
            <p className="text-muted-body text-sm sm:text-base mt-3 leading-relaxed">
              Carefully formatted for instant consumption on Kindle, iPad, reMarkable, or desktop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Deliverable 01 */}
            <div className="backdrop-blur-xl bg-white/70 border border-white/90 p-7 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgb(0,0,0,0.06)] transition-all flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-black/[0.03] border border-black/[0.06] flex items-center justify-center text-obsidian mb-6 group-hover:scale-105 transition-transform">
                  <BookOpen className="w-5 h-5 font-light" />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-neutral-400 block mb-1">
                  Deliverable 01
                </span>
                <h3 className="font-display text-2xl text-obsidian mb-2.5">
                  The Complete Digital Folio
                </h3>
                <p className="text-xs leading-relaxed text-muted-body">
                  DRM-free high-resolution PDF and Kindle-optimized EPUB. Designed with bespoke
                  typography (Newsreader &amp; Inter) tailored for comfortable night reading and
                  distraction-free study.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-black/[0.05]">
                <span className="text-[10px] tracking-wider uppercase font-semibold text-neutral-400 block mb-1">
                  Compatible With
                </span>
                <span className="text-xs font-medium text-obsidian">
                  Apple Books, Kindle, reMarkable, Kobo &amp; PDF
                </span>
              </div>
            </div>

            {/* Deliverable 02 */}
            <div className="backdrop-blur-xl bg-white/70 border border-white/90 p-7 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgb(0,0,0,0.06)] transition-all flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-black/[0.03] border border-black/[0.06] flex items-center justify-center text-obsidian mb-6 group-hover:scale-105 transition-transform">
                  <Sparkles className="w-5 h-5 font-light" />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-neutral-400 block mb-1">
                  Deliverable 02
                </span>
                <h3 className="font-display text-2xl text-obsidian mb-2.5">
                  30-Day Fatherhood Journal
                </h3>
                <p className="text-xs leading-relaxed text-muted-body">
                  A printable daily reflection framework with 30 calibrated prompts to audit your
                  daily temper, conversational presence, deep listening rituals, and weekly family
                  leadership rhythms.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-black/[0.05]">
                <span className="text-[10px] tracking-wider uppercase font-semibold text-neutral-400 block mb-1">
                  Format
                </span>
                <span className="text-xs font-medium text-obsidian">
                  Fillable PDF &amp; High-Res A4/Letter Printable
                </span>
              </div>
            </div>

            {/* Deliverable 03 */}
            <div className="backdrop-blur-xl bg-white/70 border border-white/90 p-7 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgb(0,0,0,0.06)] transition-all flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-black/[0.03] border border-black/[0.06] flex items-center justify-center text-obsidian mb-6 group-hover:scale-105 transition-transform">
                  <FileText className="w-5 h-5 font-light" />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-neutral-400 block mb-1">
                  Deliverable 03
                </span>
                <h3 className="font-display text-2xl text-obsidian mb-2.5">
                  Family Constitution Charter
                </h3>
                <p className="text-xs leading-relaxed text-muted-body">
                  A customizable household governance blueprint featuring family value declarations,
                  technology charters, milestone accountability contracts, and father’s spoken blessings.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-black/[0.05]">
                <span className="text-[10px] tracking-wider uppercase font-semibold text-neutral-400 block mb-1">
                  Included Formats
                </span>
                <span className="text-xs font-medium text-obsidian">
                  Print-Ready PDF + Editable Word / Docs Template
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            AUTHOR NOTE SECTION (CP SINGH DISPATCH)
           ========================================================================= */}
        <section
          className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-20 lg:py-28 border-t border-black/[0.05]"
          id="author"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Author Portrait in Floating Frame (5 cols) */}
            <motion.div style={{ y: authorCardY }} className="lg:col-span-5">
              <div className="relative group max-w-md mx-auto">
                <div className="absolute -inset-2 bg-gradient-to-tr from-neutral-200/50 to-neutral-100/30 rounded-3xl blur-lg" />
                <div className="relative backdrop-blur-xl bg-white/70 border border-white/90 p-4 rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.05)]">
                  <div className="w-full h-[420px] rounded-2xl overflow-hidden bg-neutral-100 relative">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                      alt="CP Singh, Author of The School of Fathers"
                      fill
                      className="object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  {/* Author Tag */}
                  <div className="mt-4 px-2 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold text-obsidian block">CP Singh</span>
                      <span className="text-[11px] text-neutral-400">
                        Author, Mentor &amp; Father
                      </span>
                    </div>
                    <span className="font-display italic text-xs text-neutral-400">
                      Author of The School of Fathers
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Editorial Dispatch (7 cols) */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05] text-[11px] font-medium tracking-widest uppercase text-neutral-500 self-start">
                Author’s Dispatch
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-tight text-obsidian font-normal">
                Why I spent ten years recording these domestic field notes.
              </h2>
              <div className="space-y-4 text-muted-body text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  Like many men of my generation, I entered fatherhood convinced that financial provision
                  and sheer physical attendance would be sufficient. I was wrong.
                </p>
                <p>
                  Children do not measure safety in square footage or balanced spreadsheets. They
                  measure it in the steady frequency of your eyes when they enter the room, the softness
                  of your voice during their most humiliating failures, and the uncompromising
                  boundaries that give their world predictable edges.
                </p>
                <p>
                  I wrote <span className="font-display italic text-obsidian">The School of Fathers</span>{' '}
                  not from an ivory tower of academic perfection, but from the messy trenches of domestic
                  trial and error. This book is a distillation of what actually withstands the storms of
                  youth.
                </p>
              </div>
              <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between">
                <div>
                  <span className="font-display italic text-xl text-obsidian block">CP Singh</span>
                  <span className="text-xs text-neutral-400">Autumn 2024</span>
                </div>
                <div className="text-xs font-mono text-neutral-400">Folio Reference #01-A</div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            TESTIMONIALS / FIELD REPORTS
           ========================================================================= */}
        <section
          className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-20 lg:py-28 border-t border-black/[0.05]"
          id="reviews"
        >
          <div className="text-center max-w-xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05] text-[11px] font-medium tracking-widest uppercase text-neutral-500 mb-4">
              Field Reports
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-tight text-obsidian font-normal">
              Words from men in the arena.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Review 1: Real review from SuperProfile */}
            <div className="backdrop-blur-xl bg-white/70 border border-white/90 p-7 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgb(0,0,0,0.06)] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-neutral-900 mb-4 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-neutral-900 text-neutral-900" />
                  ))}
                  <span className="text-[10px] font-mono text-neutral-400 ml-1.5">SuperProfile Verified</span>
                </div>
                <p className="font-display italic text-base leading-relaxed text-charcoal mb-6">
                  “Its a different book and mirror for fathers.. must read. Amazing.”
                </p>
              </div>
              <div className="pt-4 border-t border-black/[0.05]">
                <p className="text-xs font-semibold text-obsidian">Ashish Kaushal</p>
                <p className="text-[11px] text-neutral-500">Verified Reader &amp; Father</p>
                <p className="text-[10px] text-neutral-400 mt-0.5">SuperProfile Community</p>
              </div>
            </div>

            {/* Review 2 */}
            <div className="backdrop-blur-xl bg-white/70 border border-white/90 p-7 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgb(0,0,0,0.06)] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-neutral-900 mb-4 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-neutral-900 text-neutral-900" />
                  ))}
                </div>
                <p className="font-display italic text-base leading-relaxed text-charcoal mb-6">
                  “Chapter 2 on emotional regulation under pressure literally saved my connection
                  with my adolescent son. If you feel like you are losing your temper too often, buy
                  this right now.”
                </p>
              </div>
              <div className="pt-4 border-t border-black/[0.05]">
                <p className="text-xs font-semibold text-obsidian">Julian R.</p>
                <p className="text-[11px] text-neutral-500">
                  Software Executive &amp; Father of 3 (ages 9, 13, 15)
                </p>
                <p className="text-[10px] text-neutral-400 mt-0.5">Austin, Texas</p>
              </div>
            </div>

            {/* Review 3 */}
            <div className="backdrop-blur-xl bg-white/70 border border-white/90 p-7 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgb(0,0,0,0.06)] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-neutral-900 mb-4 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-neutral-900 text-neutral-900" />
                  ))}
                </div>
                <p className="font-display italic text-base leading-relaxed text-charcoal mb-6">
                  “No fluff, zero condescension, and no cheesy parenting platitudes. Just piercing,
                  actionable wisdom that changed how I walk through my front door every single evening.”
                </p>
              </div>
              <div className="pt-4 border-t border-black/[0.05]">
                <p className="text-xs font-semibold text-obsidian">David K.</p>
                <p className="text-[11px] text-neutral-500">Architect &amp; Father of 2 (ages 4 &amp; 7)</p>
                <p className="text-[10px] text-neutral-400 mt-0.5">London, United Kingdom</p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            PRICING / CHECKOUT MODULE
           ========================================================================= */}
        <section className="max-w-4xl mx-auto px-5 sm:px-6 py-20 lg:py-28" id="purchase">
          <div className="relative">
            {/* Ambient Backdrop */}
            <div className="absolute -inset-4 bg-gradient-to-b from-neutral-200/50 to-neutral-100/30 rounded-[36px] blur-2xl -z-10" />
            <div className="backdrop-blur-2xl bg-white/85 border border-white/95 rounded-3xl p-7 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-black/[0.06]">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-neutral-500 text-[11px] font-medium tracking-widest uppercase mb-2">
                    <ShieldCheck className="w-4 h-4 text-neutral-800" />
                    <span>Complete Digital Edition by CP Singh</span>
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl text-obsidian font-normal">
                    Begin Today
                  </h2>
                  <p className="text-muted-body text-xs sm:text-sm mt-1">
                    One-time purchase. Lifetime access to all digital files and future revisions.
                  </p>
                </div>

                <div className="flex flex-col items-start md:items-end">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-5xl font-light text-obsidian">
                      {priceDisplay}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                      {currency}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => setCurrency('USD')}
                      className={`text-[11px] px-2.5 py-0.5 rounded transition-colors ${
                        currency === 'USD'
                          ? 'bg-obsidian text-white'
                          : 'text-neutral-500 hover:text-obsidian'
                      }`}
                    >
                      USD ($29)
                    </button>
                    <span className="text-neutral-300">|</span>
                    <button
                      onClick={() => setCurrency('INR')}
                      className={`text-[11px] px-2.5 py-0.5 rounded transition-colors ${
                        currency === 'INR'
                          ? 'bg-obsidian text-white'
                          : 'text-neutral-500 hover:text-obsidian'
                      }`}
                    >
                      INR (₹499)
                    </button>
                  </div>
                </div>
              </div>

              {/* Feature Bullets Grid (No audio) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 py-8 border-b border-black/[0.06]">
                <div className="flex items-center gap-2.5 text-xs text-charcoal font-medium">
                  <CheckCircle2 className="w-4 h-4 text-neutral-800 shrink-0" />
                  <span>Unabridged 230-page Digital Book (EPUB &amp; PDF)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-charcoal font-medium">
                  <CheckCircle2 className="w-4 h-4 text-neutral-800 shrink-0" />
                  <span>Printable 30-Day Fatherhood Journal Workbook</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-charcoal font-medium">
                  <CheckCircle2 className="w-4 h-4 text-neutral-800 shrink-0" />
                  <span>The Family Constitution Charter Template</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-charcoal font-medium">
                  <CheckCircle2 className="w-4 h-4 text-neutral-800 shrink-0" />
                  <span>Immediate download link + direct email delivery</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-charcoal font-medium">
                  <CheckCircle2 className="w-4 h-4 text-neutral-800 shrink-0" />
                  <span>Free future edition revisions sent automatically</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-charcoal font-medium">
                  <CheckCircle2 className="w-4 h-4 text-neutral-800 shrink-0" />
                  <span>30-Day Quiet Assurance Money-Back Guarantee</span>
                </div>
              </div>

              {/* Action Button & Trust */}
              <div className="pt-8 flex flex-col items-center">
                <a
                  href={superprofileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-md bg-obsidian hover:bg-neutral-800 text-white font-medium text-sm py-4 rounded-full flex items-center justify-center gap-2 shadow-[0_6px_24px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Download className="w-4 h-4" />
                  <span>Download The Complete Bundle — {priceDisplay}</span>
                </a>

                {/* Trust Badge Line */}
                <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-neutral-400 text-[11px] mt-6">
                  <span className="flex items-center gap-1.5 text-neutral-600">
                    <Lock className="w-3.5 h-3.5" /> 256-Bit Encrypted Checkout
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5 text-neutral-600">
                    <ShieldCheck className="w-3.5 h-3.5" /> 30-Day Money-Back Guarantee
                  </span>
                  <span>•</span>
                  <span>Apple Pay • Google Pay • Cards • UPI</span>
                </div>

                {/* Assurance Callout */}
                <div className="mt-6 p-4 rounded-2xl bg-black/[0.02] border border-black/[0.04] text-center w-full max-w-lg">
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    <strong className="text-obsidian font-semibold">
                      The 30-Day Quiet Assurance:
                    </strong>{' '}
                    If this manual does not tangibly improve the peace, presence, and discipline of
                    your household within 30 days, simply send an email for an immediate 100% refund.
                    No awkward questions asked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            FAQ SECTION
           ========================================================================= */}
        <section
          className="max-w-4xl mx-auto px-5 sm:px-6 py-20 lg:py-28 border-t border-black/[0.05]"
          id="faq"
        >
          <div className="text-center max-w-xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05] text-[11px] font-medium tracking-widest uppercase text-neutral-500 mb-4">
              Clarity
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-tight text-obsidian font-normal">
              Frequently Answered Questions
            </h2>
          </div>

          <FAQAccordion />

          {/* Sign-off Quote */}
          <div className="mt-20 text-center">
            <p className="font-display italic text-xl sm:text-2xl text-neutral-600 mb-4 max-w-lg mx-auto">
              “Your children will not remember your stress; they will remember your presence.”
            </p>
            <a
              href="#purchase"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-obsidian hover:text-neutral-600 transition-colors uppercase tracking-wider"
            >
              <span>Get The School of Fathers Bundle</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>
      </main>

      <Footer />

      {/* Checkout Modal */}
      <PurchaseModal isOpen={isPurchaseOpen} onClose={() => setIsPurchaseOpen(false)} />
    </div>
  );
}
