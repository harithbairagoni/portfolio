import { useState, useEffect } from 'react';
import type { MouseEvent } from 'react';
import { Camera, Image as ImageIcon } from 'lucide-react';

interface NavbarProps {
  onOpenVault?: () => void;
  isVaultUnlocked?: boolean;
}

export default function Navbar({ onOpenVault, isVaultUnlocked }: NavbarProps) {
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
          ? 'bg-[#F8F7F4]/90 backdrop-blur-md border-b border-[#DEDDD7] py-4'
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
          HARITH BAIRAGONI
        </a>

        {/* Right Navigation */}
        <nav className="flex items-center gap-5 sm:gap-8">
          <a
            href="#visual-archive"
            onClick={(e) => scrollToSection(e, 'visual-archive')}
            className="text-xs font-medium tracking-[0.15em] uppercase text-[#6B6B67] hover:text-[#171717] transition-colors flex items-center gap-1.5"
            id="nav-link-photos"
          >
            <Camera className="w-3.5 h-3.5 text-[#66705B]" />
            <span>PHOTOS</span>
          </a>
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
            COLD CONNECT
          </a>
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className="text-xs font-medium tracking-[0.15em] uppercase text-[#6B6B67] hover:text-[#171717] transition-colors hidden sm:inline-block"
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

          {/* Secret Vault Trigger if unlocked */}
          {onOpenVault && isVaultUnlocked && (
            <button
              onClick={onOpenVault}
              className="px-2.5 py-1 rounded-md bg-[#171717] text-white text-[10px] font-mono tracking-wider animate-bounce cursor-pointer"
            >
              ★ VAULT
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
