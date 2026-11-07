import { useState, useEffect, useRef, ChangeEvent, DragEvent } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Camera, Upload } from 'lucide-react';

export default function AboutSection() {
  const [photoUrl, setPhotoUrl] = useState<string | null>(() => {
    return localStorage.getItem('harith_profile_photo') || '/photos/profile-casual.jpg';
  });
  const [imageLoadError, setImageLoadError] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Attempt to check if candidate photos exist
  useEffect(() => {
    if (!photoUrl) {
      const candidates = ['/photos/profile-casual.jpg', '/photos/profile-suit.jpg', '/photos/profile.jpg'];
      let candidateIndex = 0;

      const tryNextCandidate = () => {
        if (candidateIndex >= candidates.length) {
          setImageLoadError(true);
          return;
        }
        const src = candidates[candidateIndex];
        const testImg = new Image();
        testImg.src = src;
        testImg.onload = () => {
          setPhotoUrl(src);
          setImageLoadError(false);
        };
        testImg.onerror = () => {
          candidateIndex++;
          tryNextCandidate();
        };
      };

      tryNextCandidate();
    }
  }, [photoUrl]);

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setPhotoUrl(result);
        setImageLoadError(false);
        try {
          localStorage.setItem('harith_profile_photo', result);
        } catch {
          // Ignore localStorage quota errors for large images
        }

        // Also persist to backend public directory so it survives sessions
        fetch('/api/upload-profile-photo', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ dataUrl: result, fileName: file.name || 'P1052201.JPG' })
        }).catch((err) => {
          console.warn('Could not persist to server public dir:', err);
        });
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const scrollToResume = () => {
    document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-24 sm:py-36 px-5 sm:px-10 lg:px-20 max-w-[1280px] mx-auto border-t border-[#DEDDD7]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 items-center">
        {/* ============================================================ */}
        {/* LEFT: Profile Photograph (Medium-sized portrait, subtle rounded corners) */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 flex justify-center md:justify-start"
        >
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`w-full max-w-[320px] sm:max-w-[340px] aspect-[3/4] relative rounded-2xl overflow-hidden bg-[#FAF9F5] border shadow-xs group transition-all duration-200 ${
              isDragging
                ? 'border-[#66705B] ring-2 ring-[#66705B]/30 bg-[#F2EFE9]'
                : 'border-[#DEDDD7]'
            }`}
          >
            {photoUrl && !imageLoadError ? (
              <div className="w-full h-full relative">
                <img
                  src={photoUrl}
                  alt="Harith Goud Profile"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  onError={() => setImageLoadError(true)}
                  referrerPolicy="no-referrer"
                />
                {/* Subtle upload replacement trigger on hover */}
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  title="Change profile photo"
                  className="absolute bottom-3 right-3 px-2.5 py-1.5 rounded-lg bg-[#171717]/80 hover:bg-[#171717] text-white text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs cursor-pointer flex items-center gap-1.5 shadow-sm"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>Update</span>
                </button>
              </div>
            ) : (
              /* Clearly labelled placeholder area with drag and drop support */
              <div
                onClick={() => fileInputRef.current?.click()}
                className="w-full h-full flex flex-col items-center justify-center p-8 text-center cursor-pointer transition-colors hover:bg-[#F2EFE9]"
                title="Click or drag & drop P1052201.JPG to set profile photo"
              >
                <div className="w-14 h-14 rounded-full bg-[#FFFFFF] border border-[#DEDDD7] flex items-center justify-center text-[#66705B] mb-4 shadow-2xs group-hover:scale-105 transition-transform">
                  <Upload className="w-5 h-5 text-[#66705B]" />
                </div>
                <div className="font-serif text-2xl text-[#171717] font-normal tracking-tight">
                  Add profile photo
                </div>
                <p className="text-xs text-[#6B6B67] mt-2 font-mono max-w-[220px] leading-relaxed">
                  Click or drag & drop <span className="text-[#171717] font-semibold">P1052201.JPG</span>
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-[11px] font-mono text-[#66705B] underline">
                  Upload portrait
                </span>
              </div>
            )}

            {/* Hidden file selector */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
              id="profile-photo-file-input"
            />
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* RIGHT: Short Introduction (100–150 words) */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-7 space-y-7"
        >
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#66705B] font-semibold">
              ABOUT
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#171717] font-normal tracking-tight">
              Harith Goud
            </h2>
            <div className="text-xs sm:text-sm font-mono tracking-wider text-[#66705B] font-medium">
              Engineer → Strategist → Operator → Builder
            </div>
          </div>

          {/* Concise 100–150 words narrative */}
          <div className="space-y-4 text-base sm:text-lg text-[#171717] font-light leading-relaxed">
            <p>
              I build products, systems, and operating workflows at the intersection of technology, strategy, and execution. My background spans mechanical engineering, political strategy, large-scale industrial infrastructure, entrepreneurship, and software product building.
            </p>
            <p className="text-[#6B6B67]">
              From co-founding LANDSAFE to normalize title diligence across India’s land registry ecosystem, to managing execution for a ₹152 Cr greenfield bio-energy facility and steering data-led campaigns for 4M+ voters, I focus on transforming high-entropy ambiguity into disciplined, repeatable systems.
            </p>
          </div>

          {/* Core Span Domains */}
          <div className="pt-2 border-t border-[#E5E4DE] text-xs font-mono text-[#6B6B67] flex flex-wrap gap-x-3 gap-y-1.5">
            <span>Technology</span>
            <span>·</span>
            <span>Business Operations</span>
            <span>·</span>
            <span>Infrastructure</span>
            <span>·</span>
            <span>Political Strategy</span>
            <span>·</span>
            <span>Entrepreneurship</span>
            <span>·</span>
            <span>AI & Product Building</span>
          </div>

          {/* Progressive disclosure link to Resume */}
          <div className="pt-2">
            <button
              onClick={scrollToResume}
              id="about-view-resume-btn"
              className="group inline-flex items-center gap-2 text-sm font-medium text-[#171717] hover:text-[#66705B] transition-colors cursor-pointer"
            >
              <span>View complete resume ↓</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
