import { useState, useEffect } from 'react';
import type { KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock } from 'lucide-react';

const MONTHS = [
  'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
  'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

interface LiveTimeTickerProps {
  className?: string;
}

export default function LiveTimeTicker({ className = '' }: LiveTimeTickerProps) {
  const [now, setNow] = useState<Date>(() => new Date());
  const [format, setFormat] = useState<'24h' | '12h'>(() => {
    try {
      const saved = localStorage.getItem('harith_portfolio_time_format');
      if (saved === '12h' || saved === '24h') {
        return saved;
      }
    } catch {
      // Ignore localStorage read errors
    }
    return '24h';
  });

  // Continuously update time every second and automatically handle midnight date rollover
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleFormat = () => {
    setFormat((prev) => {
      const nextFormat = prev === '24h' ? '12h' : '24h';
      try {
        localStorage.setItem('harith_portfolio_time_format', nextFormat);
      } catch {
        // Ignore localStorage write errors
      }
      return nextFormat;
    });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFormat();
    }
  };

  // Time calculations
  const rawHours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  let hoursDisplay: string;
  let ampm: string | null = null;

  if (format === '12h') {
    const h12 = rawHours % 12 || 12;
    hoursDisplay = String(h12).padStart(2, '0');
    ampm = rawHours >= 12 ? 'PM' : 'AM';
  } else {
    hoursDisplay = String(rawHours).padStart(2, '0');
  }

  // Date calculation
  const month = MONTHS[now.getMonth()];
  const day = String(now.getDate()).padStart(2, '0');
  const dateDisplay = `${month} ${day}`;

  return (
    <div className={`w-full flex justify-center px-5 sm:px-10 lg:px-20 pt-24 sm:pt-28 pb-4 sm:pb-6 ${className}`}>
      <div className="relative group">
        <button
          type="button"
          onClick={toggleFormat}
          onKeyDown={handleKeyDown}
          id="live-time-ticker-btn"
          aria-label={`Current local time: ${hoursDisplay}:${minutes}:${seconds}${ampm ? ' ' + ampm : ''}, ${dateDisplay}. Click to switch between 24-hour and 12-hour format.`}
          title="Click to switch time format"
          className="relative inline-flex items-center gap-2.5 sm:gap-4 px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl bg-[#FAF9F5] hover:bg-[#FFFFFF] border border-[#DEDDD7] hover:border-[#66705B]/60 shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer select-none focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#66705B]/40 active:scale-[0.985]"
        >
          {/* Static minimalist clock icon */}
          <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#66705B] shrink-0 stroke-[1.75]" aria-hidden="true" />

          {/* Time digits container with subtle format-change animation */}
          <div className="flex items-center font-mono text-sm sm:text-base font-semibold tracking-wide text-[#171717] tabular-nums">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={format}
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -3 }}
                transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center"
              >
                <span>{hoursDisplay}</span>
                <span className="mx-1 sm:mx-1.5 text-[#66705B] font-normal select-none">:</span>
                <span>{minutes}</span>
                <span className="mx-1 sm:mx-1.5 text-[#66705B] font-normal select-none">:</span>
                <span>{seconds}</span>

                {/* 12-hour AM/PM indicator */}
                {ampm && (
                  <span className="ml-1.5 text-[10px] sm:text-xs font-mono font-semibold text-[#66705B] tracking-wider uppercase">
                    {ampm}
                  </span>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile subtle dot divider / desktop generous spacing */}
          <span className="sm:hidden text-[#DEDDD7] font-bold select-none">·</span>

          {/* Date display using portfolio's editorial typography */}
          <span className="text-xs sm:text-sm tracking-wider uppercase font-normal text-[#6B6B67] whitespace-nowrap pl-0.5 sm:pl-2">
            {dateDisplay}
          </span>
        </button>

        {/* Unobtrusive interactive hint on first hover/tap */}
        <div
          role="tooltip"
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 pointer-events-none z-30"
        >
          <span className="inline-block text-[10px] font-mono tracking-wider text-[#6B6B67] bg-[#FAF9F5]/95 backdrop-blur-xs px-2.5 py-0.5 rounded-md border border-[#DEDDD7] shadow-2xs whitespace-nowrap">
            Click to switch format ({format === '24h' ? '12H' : '24H'})
          </span>
        </div>
      </div>
    </div>
  );
}
