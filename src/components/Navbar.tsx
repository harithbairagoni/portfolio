import { useState, useEffect } from 'react';
import type { MouseEvent } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-200 ${
        isScrolled
          ? 'bg-[#F7F6F2]/90 backdrop-blur-md border-b border-[#DEDDD7] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10 lg:px-20 flex items-center justify-between">
        {/* Left: HARITH */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-xs font-semibold tracking-[0.22em] uppercase text-[#171717] hover:text-[#66705B] transition-colors"
          id="nav-brand-harith"
        >
          HARITH
        </a>

        {/* Right: WORK, PROJECTS, ABOUT, CONTACT */}
        <nav className="flex items-center gap-5 sm:gap-8">
          <a
            href="#work"
            onClick={(e) => scrollToSection(e, 'work')}
            className="text-xs font-medium tracking-[0.15em] uppercase text-[#6B6B67] hover:text-[#171717] transition-colors"
            id="nav-link-work"
          >
            WORK
          </a>
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, 'projects')}
            className="text-xs font-medium tracking-[0.15em] uppercase text-[#6B6B67] hover:text-[#171717] transition-colors"
            id="nav-link-projects"
          >
            PROJECTS
          </a>
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className="text-xs font-medium tracking-[0.15em] uppercase text-[#6B6B67] hover:text-[#171717] transition-colors"
            id="nav-link-about"
          >
            ABOUT
          </a>
          <a
            href="#resume"
            onClick={(e) => scrollToSection(e, 'resume')}
            className="text-xs font-medium tracking-[0.15em] uppercase text-[#6B6B67] hover:text-[#171717] transition-colors"
            id="nav-link-resume"
          >
            RESUME
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="text-xs font-medium tracking-[0.15em] uppercase text-[#6B6B67] hover:text-[#171717] transition-colors"
            id="nav-link-contact"
          >
            CONTACT
          </a>
        </nav>
      </div>
    </header>
  );
}
