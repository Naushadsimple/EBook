'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Lock, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PurchaseModal({ isOpen, onClose }: PurchaseModalProps) {
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const priceUSD = '$29';
  const priceINR = '₹499';
  const superprofileUrl = 'https://superprofile.bio/vp/the-school-of-fathers';

  const handleInstantCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });
    }, 800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Scrim */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-neutral-900/50 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          className="relative w-full max-w-lg bg-white border border-neutral-200/90 rounded-3xl shadow-2xl overflow-hidden z-10 p-6 sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 text-neutral-400 hover:text-obsidian rounded-full hover:bg-neutral-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSuccess ? (
            <div className="space-y-6">
              {/* Product Badge & Title */}
              <div>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded-full mb-3">
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  <span>Digital Folio • Instant Delivery</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-obsidian font-normal">
                  The School of Fathers
                </h3>
                <p className="text-xs text-neutral-500 mt-1">
                  By CP Singh • Unabridged Edition with Reflection Journal
                </p>
              </div>

              {/* Price & Currency Toggle */}
              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-150 flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl font-light text-obsidian">
                      {currency === 'USD' ? priceUSD : priceINR}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                      {currency}
                    </span>
                  </div>
                  <span className="text-[11px] text-neutral-400">
                    Lifetime access &amp; future revisions
                  </span>
                </div>

                <div className="flex items-center bg-white p-1 rounded-full border border-neutral-200 shadow-2xs">
                  <button
                    type="button"
                    onClick={() => setCurrency('USD')}
                    className={`px-3 py-1 text-xs rounded-full font-medium transition-colors ${
                      currency === 'USD' ? 'bg-obsidian text-white' : 'text-neutral-500'
                    }`}
                  >
                    USD ($29)
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrency('INR')}
                    className={`px-3 py-1 text-xs rounded-full font-medium transition-colors ${
                      currency === 'INR' ? 'bg-obsidian text-white' : 'text-neutral-500'
                    }`}
                  >
                    INR (₹499)
                  </button>
                </div>
              </div>

              {/* What you get checklist (Clean, zero audio) */}
              <div className="space-y-2.5 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>230-page Digital Book in DRM-free PDF &amp; Kindle EPUB</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Printable 30-Day Fatherhood Journal &amp; Daily Audits</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>The Family Constitution Charter Template</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Immediate download link + direct email delivery</span>
                </div>
              </div>

              {/* Primary Direct Option: Buy on Official SuperProfile */}
              <div className="pt-2 flex flex-col gap-3">
                <a
                  href={superprofileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-obsidian text-white font-medium text-sm py-3.5 rounded-full hover:bg-neutral-800 transition-all shadow-[0_4px_16px_rgba(0,0,0,0.12)] active:scale-[0.99]"
                >
                  <span>Checkout on Official SuperProfile</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                {/* Instant delivery guarantee */}
                <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400">
                  <Lock className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Secure 256-bit encrypted checkout via SuperProfile</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl text-obsidian">
                Welcome to The School of Fathers
              </h3>
              <p className="text-xs text-neutral-600 max-w-sm mx-auto leading-relaxed">
                Your order is confirmed. A download link containing your DRM-free PDF, Kindle EPUB,
                and Workbook has been dispatched to{' '}
                <strong className="text-obsidian">{email}</strong>.
              </p>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="bg-obsidian text-white text-xs font-medium px-6 py-2.5 rounded-full hover:bg-neutral-800"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
