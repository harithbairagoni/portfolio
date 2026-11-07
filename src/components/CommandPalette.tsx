import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Compass, Cpu, FileText, Mail, Terminal, Sparkles, X, ArrowRight } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAskHarith: () => void;
  onNavigate: (sectionId: string) => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onOpenAskHarith,
  onNavigate,
}: CommandPaletteProps) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent or toggle
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'ask',
      title: 'Ask Harith Copilot (AI Knowledge Base)',
      category: 'AI ENGINE',
      icon: Sparkles,
      action: () => {
        onClose();
        onOpenAskHarith();
      },
    },
    {
      id: 'landsafe',
      title: 'Explore LANDSAFE (PropTech Cadastral Diligence)',
      category: 'WORK',
      icon: Compass,
      action: () => {
        onClose();
        onNavigate('work');
      },
    },
    {
      id: 'industrial',
      title: '₹152 Cr Greenfield Ethanol Plant Execution Scrubber',
      category: 'WORK',
      icon: Compass,
      action: () => {
        onClose();
        onNavigate('work');
      },
    },
    {
      id: 'cold-connect',
      title: 'Cold Connect (AI Networking Preparation Copilot)',
      category: 'PROJECTS',
      icon: Cpu,
      action: () => {
        onClose();
        onNavigate('projects');
      },
    },
    {
      id: 'os',
      title: 'HARITH.OS (Interactive Systems Map)',
      category: 'SYSTEMS',
      icon: Terminal,
      action: () => {
        onClose();
        onNavigate('harith-os');
      },
    },
    {
      id: 'ai-lab',
      title: 'AI Lab (Closed-Loop Agent Architecture Tracer)',
      category: 'AI LAB',
      icon: Cpu,
      action: () => {
        onClose();
        onNavigate('ai-lab');
      },
    },
    {
      id: 'resume',
      title: 'View & Download Verified Curriculum Vitae',
      category: 'RESUME',
      icon: FileText,
      action: () => {
        onClose();
        onNavigate('resume');
      },
    },
    {
      id: 'contact',
      title: 'Get in Touch (harithgoud2@gmail.com)',
      category: 'CONTACT',
      icon: Mail,
      action: () => {
        onClose();
        onNavigate('contact');
      },
    },
  ];

  const filtered = actions.filter(
    (a) =>
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[150] flex items-start justify-center pt-24 px-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          className="w-full max-w-xl bg-[#F7F6F2] rounded-2xl border border-[#DEDDD7] shadow-2xl overflow-hidden"
        >
          {/* Search bar */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-[#DEDDD7] bg-[#FFFFFF]">
            <Search className="w-5 h-5 text-[#6B6B67]" />
            <input
              type="text"
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects, skills, principles or type a command..."
              className="flex-1 bg-transparent text-sm text-[#171717] focus:outline-none placeholder:text-[#8C8A82]"
            />
            <span className="text-[10px] font-mono text-[#8C8A82] bg-[#F2F0E8] px-2 py-0.5 rounded border border-[#E0DDCF]">
              ESC
            </span>
          </div>

          {/* Action List */}
          <div className="max-h-80 overflow-y-auto p-3 space-y-1">
            {filtered.length === 0 ? (
              <div className="p-6 text-center text-xs font-mono text-[#6B6B67]">
                No matching results. Try "LANDSAFE", "Cold Connect", or "Resume".
              </div>
            ) : (
              filtered.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={item.action}
                    className="w-full text-left p-3 rounded-xl hover:bg-[#EFECE6] flex items-center justify-between transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#FFFFFF] border border-[#DEDDD7] text-[#66705B] group-hover:border-[#66705B] transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-medium text-[#171717] block">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-mono text-[#8C8A82]">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#8C8A82] group-hover:text-[#171717] group-hover:translate-x-1 transition-all" />
                  </button>
                );
              })
            )}
          </div>

          {/* Footer */}
          <div className="px-5 py-3 border-t border-[#DEDDD7] bg-[#EFECE6] flex items-center justify-between text-[11px] font-mono text-[#6B6B67]">
            <span>NAVIGATION COMMAND PALETTE</span>
            <span>PRESS ESC TO CLOSE</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
