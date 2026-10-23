import { ArrowUpRight } from 'lucide-react';

export default function ContactSection() {
  return (
    <footer id="contact" className="py-24 sm:py-36 px-5 sm:px-10 lg:px-20 max-w-[1280px] mx-auto border-t border-[#DEDDD7]">
      <div className="space-y-12 max-w-3xl">
        <div className="space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#66705B] font-semibold">
            CONTACT
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#171717] font-normal tracking-tight">
            Let’s build something together.
          </h2>
          <p className="text-base sm:text-lg text-[#6B6B67] font-light leading-relaxed">
            I am always open to conversations about product architecture, early-stage ventures, and high-impact systems.
          </p>
        </div>

        {/* Primary Email link */}
        <div>
          <a
            href="mailto:harithgoud2@gmail.com"
            id="contact-email-link"
            className="group font-serif text-2xl sm:text-3xl md:text-4xl text-[#171717] hover:text-[#66705B] transition-colors inline-flex items-center gap-3 border-b border-[#DEDDD7] pb-2"
          >
            <span>harithgoud2@gmail.com</span>
            <ArrowUpRight className="w-6 h-6 text-[#6B6B67] group-hover:text-[#66705B] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>
        </div>

        {/* Direct Links and Metadata */}
        <div className="pt-8 border-t border-[#DEDDD7] flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-xs font-mono text-[#6B6B67]">
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/in/harithgoud"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#171717] transition-colors"
            >
              LINKEDIN ↗
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#171717] transition-colors"
            >
              TWITTER / X ↗
            </a>
            <a
              href="mailto:harithgoud2@gmail.com"
              className="hover:text-[#171717] transition-colors"
            >
              EMAIL ↗
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span>HYDERABAD, INDIA</span>
            <span>·</span>
            <span>GLOBAL CITIZEN</span>
          </div>
        </div>

        <div className="text-[11px] font-mono text-[#A0A09B]">
          © {new Date().getFullYear()} Harith Goud. Quiet confidence, excellent typography, strong work.
        </div>
      </div>
    </footer>
  );
}
