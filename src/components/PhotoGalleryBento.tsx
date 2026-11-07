import React, { useState, useRef, useEffect, DragEvent, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Upload, MapPin, Calendar, Sparkles, RefreshCw, Eye, Check } from 'lucide-react';

interface PhotoCardData {
  id: string;
  defaultSrc: string;
  title: string;
  caption: string;
  location: string;
  date: string;
  tags: string[];
  aspect: string; // for bento layout
}

const DEFAULT_PHOTOS: PhotoCardData[] = [
  {
    id: 'portrait',
    defaultSrc: '/photos/profile-suit.jpg',
    title: 'Harith Bairagoni · Executive',
    caption: 'MBA at Masters’ Union, Mechanical Engineer & High-Agency Operator.',
    location: 'Gurugram / Hyderabad',
    date: '2025–Present',
    tags: ['Profile', 'Operator', 'Strategy'],
    aspect: 'col-span-1 md:col-span-2 row-span-2',
  },
  {
    id: 'casual',
    defaultSrc: '/photos/profile-casual.jpg',
    title: 'Harith · Problem Decomposition',
    caption: '“The bottleneck is rarely technical capability; it is coordination latency and unshared models of reality.”',
    location: 'Hyderabad / Delhi NCR',
    date: 'Field & Studio',
    tags: ['First Principles', 'Mindset'],
    aspect: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    id: 'industrial',
    defaultSrc: '/photos/industrial.jpg',
    title: '₹152 Cr Plant Site Execution',
    caption: '100 KLPD greenfield distillation tower & boiler house civil load paths.',
    location: 'Telangana, India',
    date: '2024–2025',
    tags: ['Heavy Industry', 'EPC'],
    aspect: 'col-span-1 md:col-span-1 row-span-1',
  },
  {
    id: 'masters-union',
    defaultSrc: '/photos/campus.jpg',
    title: 'Masters’ Union Cohort',
    caption: 'Late-night venture debates, startup cohorts & executive strategy.',
    location: 'Cyber City, Gurugram',
    date: '2025–Present',
    tags: ['MBA', 'Ventures'],
    aspect: 'col-span-1 md:col-span-1 row-span-1',
  },
  {
    id: 'field-work',
    defaultSrc: '/photos/landsafe-field.jpg',
    title: 'LANDSAFE Field Diligence',
    caption: 'Sub-registrar revenue archive cross-checks & cadastral boundary reconciliation.',
    location: 'Telangana Districts',
    date: 'Aug 2025',
    tags: ['PropTech', 'Field Ops'],
    aspect: 'col-span-1 md:col-span-2 row-span-1',
  },
];

interface PhotoGalleryBentoProps {
  onPhotoInteracted?: () => void;
}

export default function PhotoGalleryBento({ onPhotoInteracted }: PhotoGalleryBentoProps) {
  // Store custom photo uploads in localStorage by ID
  const [photos, setPhotos] = useState<Record<string, string>>(() => {
    try {
      const stored = localStorage.getItem('harith_portfolio_gallery');
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  const [activeFlippedId, setActiveFlippedId] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [activeUploadId, setActiveUploadId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleCardClick = (id: string) => {
    setActiveFlippedId(activeFlippedId === id ? null : id);
    if (onPhotoInteracted) onPhotoInteracted();
  };

  const handleUploadClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setActiveUploadId(id);
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !activeUploadId) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        setPhotos((prev) => {
          const updated = { ...prev, [activeUploadId]: dataUrl };
          try {
            localStorage.setItem('harith_portfolio_gallery', JSON.stringify(updated));
          } catch {
            // Ignore quota
          }
          return updated;
        });

        // Also update profile photo if it's the portrait
        if (activeUploadId === 'portrait') {
          try {
            localStorage.setItem('harith_profile_photo', dataUrl);
            window.dispatchEvent(new Event('storage'));
          } catch {
            // Ignore
          }
        }
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <section id="visual-archive" className="py-24 sm:py-36 px-5 sm:px-10 lg:px-20 max-w-[1280px] mx-auto border-t border-[#DEDDD7]">
      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-4 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#66705B] font-semibold">
            VISUAL DOSSIER · REAL PHOTOGRAPHIC RECORD
          </span>
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#171717] font-normal tracking-tight">
            Work in the wild.
          </h2>
          <p className="text-base sm:text-lg text-[#6B6B67] font-light leading-relaxed">
            Click any frame to inspect field notes, dates, and locations. Drag or click the camera icon to upload your own photos directly into the portfolio.
          </p>
        </div>

        <div className="text-xs font-mono text-[#8C8A82] bg-[#EFECE6] px-3.5 py-2 rounded-xl border border-[#DEDDD7] self-start md:self-auto">
          <span>💡 CLICK CARD TO FLIP · CAMERA TO REPLACE PHOTO</span>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px] sm:auto-rows-[320px]">
        {DEFAULT_PHOTOS.map((item) => {
          const currentImage = photos[item.id] || item.defaultSrc;
          const isFlipped = activeFlippedId === item.id;
          const isHovered = hoveredCard === item.id;

          return (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.id)}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`${item.aspect} relative rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#DEDDD7] hover:border-[#66705B] transition-all duration-300 shadow-xs cursor-pointer group select-none`}
            >
              {/* Front of Card: Photo Display */}
              <div
                className={`absolute inset-0 transition-all duration-500 ${
                  isFlipped ? 'opacity-0 pointer-events-none rotate-y-180' : 'opacity-100'
                }`}
              >
                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 bg-[#EAE8E0] flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#FFFFFF] flex items-center justify-center text-[#66705B] mb-3 shadow-xs">
                    <Camera className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg text-[#171717]">{item.title}</h4>
                  <p className="text-xs font-mono text-[#8C8A82] mt-1">{item.location} · {item.date}</p>
                  <button
                    onClick={(e) => handleUploadClick(e, item.id)}
                    className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#171717] text-white text-[11px] font-mono hover:bg-[#333333] transition-colors"
                  >
                    <Upload className="w-3 h-3" />
                    <span>ADD PHOTO</span>
                  </button>
                </div>

                {/* Actual Image Tag */}
                <img
                  src={currentImage}
                  alt={item.title}
                  onError={(e) => {
                    // Hide image on error so fallback renders cleanly
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Bottom Gradient Overlay for typography contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-6 text-white pointer-events-none">
                  <div className="flex items-center justify-between text-[11px] font-mono opacity-80 mb-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#98A38C]" />
                      {item.location}
                    </span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-normal drop-shadow-sm">
                    {item.title}
                  </h3>
                </div>

                {/* Top-Right Upload Action Button */}
                <button
                  onClick={(e) => handleUploadClick(e, item.id)}
                  title="Upload / Replace Photo"
                  className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-md"
                >
                  <Camera className="w-3.5 h-3.5" />
                </button>

                {/* Flip indicator */}
                <span className="absolute top-4 left-4 z-20 text-[10px] font-mono uppercase bg-black/60 text-white px-2.5 py-1 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  CLICK TO FLIP ↺
                </span>
              </div>

              {/* Back of Card: Field Notes / Polaroid Story */}
              <div
                className={`absolute inset-0 bg-[#F7F6F2] p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 ${
                  isFlipped ? 'opacity-100' : 'opacity-0 pointer-events-none -rotate-y-180'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#DEDDD7] text-xs font-mono text-[#66705B]">
                    <span className="font-bold">FIELD NOTE · 0{item.id}</span>
                    <span>{item.date}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-[#171717] mt-4 mb-3 font-normal">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#333333] leading-relaxed font-light mb-4">
                    {item.caption}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-mono text-[#6B6B67]">
                    <MapPin className="w-3.5 h-3.5 text-[#66705B]" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#DEDDD7] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-[#EFECE6] text-[10px] font-mono text-[#66705B] font-semibold"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveFlippedId(null);
                    }}
                    className="text-xs font-mono text-[#171717] hover:text-[#66705B] transition-colors cursor-pointer"
                  >
                    CLOSE [X]
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
