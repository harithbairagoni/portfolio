import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Award, Sparkles, BookOpen, Coffee, Mail, Check, Copy, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface SecretVaultModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SecretVaultModal({ isOpen, onClose }: SecretVaultModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const copyEmail = () => {
    navigator.clipboard.writeText('harithgoud2@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl bg-[#F7F6F2] rounded-3xl border border-[#DEDDD7] shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-start justify-between pb-6 border-b border-[#DEDDD7]">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#66705B] animate-ping" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#66705B] font-bold">
                  CLEARANCE LEVEL 3 · EXECUTIVE VAULT UNLOCKED
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#171717] font-normal">
                Behind the Curtains.
              </h2>
              <p className="text-sm text-[#6B6B67] font-light">
                You’ve explored the operational track record. Here are candid notes, mental models, and a direct line to Harith.
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#6B6B67] hover:text-[#171717] hover:bg-[#EAE8E0] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Bento Content inside the Vault */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {/* Box 1: Operating Philosophy */}
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#DEDDD7] space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#66705B] font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>HOW I OPERATE IN HIGH AMBIGUITY</span>
              </div>
              <h4 className="font-serif text-xl text-[#171717]">
                First Principles & Cadence Over Consensus
              </h4>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Whether synchronizing ₹152 Cr piping contractors or untangling 40-year-old revenue deeds, the real bottleneck is almost never technical competence—it is communication latency and unshared models of reality.
              </p>
            </div>

            {/* Box 2: Recommended Books / Influences */}
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#DEDDD7] space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#66705B] font-semibold">
                <BookOpen className="w-4 h-4" />
                <span>RADICAL CANDOR & INFLUENCES</span>
              </div>
              <h4 className="font-serif text-xl text-[#171717]">
                Essential Reading List
              </h4>
              <ul className="text-xs space-y-2 text-[#555555] font-mono">
                <li>• High Output Management — Andy Grove</li>
                <li>• The Hard Thing About Hard Things — Ben Horowitz</li>
                <li>• Principles for Dealing with the Changing World Order — Ray Dalio</li>
                <li>• Designing Data-Intensive Applications — Martin Kleppmann</li>
              </ul>
            </div>

            {/* Box 3: What I am Building Next */}
            <div className="p-6 rounded-2xl bg-[#EFECE6] border border-[#DEDDD7] space-y-3 md:col-span-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#66705B] font-semibold">
                <Coffee className="w-4 h-4" />
                <span>WHAT EXCITES ME RIGHT NOW</span>
              </div>
              <h4 className="font-serif text-2xl text-[#171717]">
                Next-Gen Infrastructure × High-Agency AI Workflows
              </h4>
              <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                I am actively seeking to collaborate on high-stakes ventures, early-stage product leadership, and capital-intensive systems that leverage intelligent workflows to solve physical-world friction.
              </p>
            </div>
          </div>

          {/* VIP Direct Action Strip */}
          <div className="p-6 rounded-2xl bg-[#171717] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#98A38C] font-semibold block">
                PRIORITY DIRECT CHANNEL
              </span>
              <p className="text-sm font-medium mt-0.5">
                Reach Harith directly for ventures, advisory, or founder conversations.
              </p>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={copyEmail}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-[#2C2C2C] hover:bg-[#3D3D3D] text-xs font-mono transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#98A38C]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'COPIED EMAIL' : 'COPY EMAIL'}</span>
              </button>

              <a
                href="mailto:harithgoud2@gmail.com?subject=Reaching%20out%20via%20Portfolio%20Vault"
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-[#FFFFFF] hover:bg-[#EAE8E0] text-[#171717] text-xs font-mono font-bold transition-colors flex items-center justify-center gap-2"
              >
                <span>OPEN MAIL</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
