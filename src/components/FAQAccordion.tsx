'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: 'Is this book only for fathers with young kids?',
    a: 'No. The principles of non-reactive presence, environmental structure, and spoken blessing apply to children of all ages—from newborns through young adults in their twenties. Several chapters specifically address navigating rebellion, digital screens, and establishing healthy boundaries with teenagers.',
  },
  {
    q: 'What formats are included in the download?',
    a: 'You receive DRM-free files in high-resolution PDF (typeset for iPad and desktop reading) and Kindle-optimized EPUB (for Kindle, Apple Books, Kobo, and e-readers). You also receive an A4/US Letter printable PDF for the 30-day reflection journal and family constitution charters.',
  },
  {
    q: 'How does the 30-day quiet assurance guarantee work?',
    a: 'If you read the book, try the exercises, and find that it didn’t fundamentally shift your posture and peace as a father within 30 days, simply send an email for an immediate 100% refund. No awkward questions asked.',
  },
  {
    q: 'Can I gift this book to an expectant father or friend?',
    a: 'Yes. During checkout on SuperProfile, you can easily enter the recipient’s email address or forward the downloaded archival files and workbook directly to them.',
  },
  {
    q: 'How does this compare to standard parenting guides?',
    a: 'Most parenting manuals focus entirely on managing the child’s behavior through checklists and reward charts. The School of Fathers focuses squarely on mastering the father’s own character, nervous system, and generational presence.',
  },
];

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="space-y-3.5 max-w-3xl mx-auto">
      {faqs.map((faq, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={faq.q}
            className="backdrop-blur-xl bg-white/75 border border-white/95 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.02)] transition-all"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4"
              aria-expanded={isOpen}
            >
              <h3 className="font-display text-base sm:text-lg text-obsidian font-normal">
                {faq.q}
              </h3>
              <div
                className={`w-6 h-6 rounded-full bg-black/[0.03] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 bg-black/[0.08]' : ''
                }`}
              >
                <ChevronDown className="w-4 h-4 text-neutral-600" />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm leading-relaxed text-muted-body border-t border-black/[0.04]">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
