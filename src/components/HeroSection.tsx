import PortfolioScrollHero from './ui/portfolio-scroll-hero';

interface HeroSectionProps {
  onExploreWork: () => void;
  onExploreAbout: () => void;
}

export default function HeroSection({ onExploreWork, onExploreAbout }: HeroSectionProps) {
  return (
    <PortfolioScrollHero
      onExploreWork={onExploreWork}
      onExploreAbout={onExploreAbout}
    />
  );
}
