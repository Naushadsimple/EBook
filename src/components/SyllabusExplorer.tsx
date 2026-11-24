'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, ChevronRight } from 'lucide-react';

interface Chapter {
  num: string;
  title: string;
  summary: string;
  hasSample?: boolean;
}

interface Movement {
  id: string;
  part: string;
  pages: string;
  title: string;
  subtitle: string;
  chapters: Chapter[];
  fieldProtocol: string;
}

const movements: Movement[] = [
  {
    id: 'part-1',
    part: 'Part I',
    pages: '01 — 94',
    title: 'The Internal Anchor',
    subtitle: 'Mastering the man before assuming the stewardship of the child.',
    fieldProtocol: '72-Hour Voice Audit',
    chapters: [
      {
        num: 'Chapter 01',
        title: 'The Anatomy of Presence',
        summary: 'Why active sensory attention is the primary currency of childhood trust and security.',
        hasSample: true,
      },
      {
        num: 'Chapter 02',
        title: 'Emotional Regulation Under Pressure',
        summary: 'Defusing tantrums, quiet vocal authority, and de-escalating domestic friction without anger.',
      },
      {
        num: 'Chapter 03',
        title: 'The Unspoken Curriculum',
        summary: 'What your sons and daughters absorb about respect when they think you are not looking.',
      },
    ],
  },
  {
    id: 'part-2',
    part: 'Part II',
    pages: '95 — 176',
    title: 'Crafting the Environment',
    subtitle: 'Sanctuary design, intentional rituals, and building resilient grit.',
    fieldProtocol: 'Solitary Wilderness Rite',
    chapters: [
      {
        num: 'Chapter 04',
        title: 'The Architecture of the Home',
        summary: 'Screen perimeter governance, evening table rituals, and noise eradication in the digital age.',
      },
      {
        num: 'Chapter 05',
        title: 'Productive Friction',
        summary: 'Teaching physical competence, chores as honor, and resisting instant dopamine culture.',
      },
      {
        num: 'Chapter 06',
        title: 'Rites of Passage',
        summary: 'Structured developmental milestones for boys and girls from ages 7 through adulthood.',
      },
    ],
  },
  {
    id: 'part-3',
    part: 'Part III',
    pages: '177 — 230',
    title: 'Generational Continuity',
    subtitle: 'Breaking reactive ancestral wounds and constructing enduring legacy.',
    fieldProtocol: 'Fatherhood Creed Letter',
    chapters: [
      {
        num: 'Chapter 07',
        title: 'Healing Ancestral Fractures',
        summary: 'Forgiving your own father and stopping inherited cycles without alienating elders.',
      },
      {
        num: 'Chapter 08',
        title: 'The Father’s Blessing',
        summary: 'The physiological and spiritual impact of explicit verbal affirmation and generational vision.',
      },
      {
        num: 'Appendix',
        title: 'The Family Constitution Manual',
        summary: 'Fillable charters, values definitions, and milestone accountability contracts.',
      },
    ],
  },
];

interface SyllabusExplorerProps {
  onOpenSample?: () => void;
}

export default function SyllabusExplorer({ onOpenSample }: SyllabusExplorerProps) {
  const [activeMovement, setActiveMovement] = useState<string>('part-1');

  return (
    <div className="space-y-8">
      {/* 3 Movement Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {movements.map((movement, idx) => {
          const isActive = activeMovement === movement.id;
          return (
            <motion.div
              key={movement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              onClick={() => setActiveMovement(movement.id)}
              className={`backdrop-blur-xl bg-white/75 border transition-all duration-300 p-6 sm:p-7 rounded-3xl cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'border-black/20 shadow-[0_16px_40px_rgb(0,0,0,0.07)] ring-1 ring-black/10 bg-white/90'
                  : 'border-white/90 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgb(0,0,0,0.05)] hover:border-black/[0.08]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-black/[0.05]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-obsidian flex items-center gap-1.5">
                    {movement.part}
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-obsidian" />}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">{movement.pages}</span>
                </div>

                <h3 className="font-display text-2xl text-obsidian font-normal mb-2">
                  {movement.title}
                </h3>
                <p className="text-xs text-muted-body mb-6 leading-relaxed">
                  {movement.subtitle}
                </p>

                {/* Chapter List */}
                <div className="space-y-3">
                  {movement.chapters.map((ch) => (
                    <div
                      key={ch.num}
                      className="p-3.5 rounded-xl bg-black/[0.02] border border-black/[0.03] hover:bg-black/[0.04] transition-colors"
                    >
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-[10px] tracking-wider uppercase font-semibold text-neutral-400">
                          {ch.num}
                        </span>
                        {ch.hasSample && (
                          <Link
                            href="/preview"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 text-[10px] font-semibold text-neutral-800 bg-white px-2 py-0.5 rounded-full shadow-2xs hover:bg-neutral-100 transition-colors"
                          >
                            <BookOpen className="w-2.5 h-2.5" />
                            <span>Preview Available</span>
                          </Link>
                        )}
                      </div>
                      <h4 className="text-xs font-semibold text-obsidian">{ch.title}</h4>
                      <p className="text-[11px] text-neutral-500 mt-1 leading-relaxed">
                        {ch.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Protocol Footer */}
              <div className="mt-6 pt-3.5 border-t border-black/[0.05] flex items-center justify-between text-[11px]">
                <span className="text-neutral-400 uppercase tracking-wider text-[10px]">
                  Field Protocol
                </span>
                <span className="font-medium text-obsidian">{movement.fieldProtocol}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Book Preview Action Callout */}
      <div className="p-4 sm:p-5 rounded-2xl backdrop-blur-md bg-white/70 border border-white/95 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-black/[0.03] border border-black/[0.05] flex items-center justify-center text-obsidian">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-semibold text-obsidian">
              Curious about the layout and cover design?
            </p>
            <p className="text-[11px] text-neutral-500">
              Explore our interactive 3D book viewer with realistic page folding animation.
            </p>
          </div>
        </div>
        <Link
          href="/preview"
          className="inline-flex items-center gap-1.5 bg-obsidian text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-neutral-800 transition-all shadow-sm"
        >
          <span>Open Book Preview</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
