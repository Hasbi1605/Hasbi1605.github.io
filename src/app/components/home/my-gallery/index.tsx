"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader, ScrollReveal } from "../../ui/animations";

interface GalleryItem {
  id: number;
  images: string[];
  title: string;
  description: string;
  category: string;
  date: string;
}

const MyGallery = () => {
  const [galleryData, setGalleryData] = useState<GalleryItem[]>([]);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [cardImageIndices, setCardImageIndices] = useState<{ [key: number]: number }>({});
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/gallery-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setGalleryData(data?.galleryData || []);
      } catch (error) {
        console.error("Error fetching gallery:", error);
      }
    };

    fetchData();
  }, []);

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(galleryData.map((item) => item.category)))];

  // Filter gallery based on active filter
  const filteredGallery = activeFilter === "All" ? galleryData : galleryData.filter((item) => item.category === activeFilter);

  // Handle card image change
  const handleCardImageChange = (itemId: number, newIndex: number) => {
    setCardImageIndices((prev) => ({ ...prev, [itemId]: newIndex }));
  };

  // Get current image index for a card
  const getCardImageIndex = (itemId: number) => cardImageIndices[itemId] || 0;

  // Open lightbox
  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
    setLightboxIndex(getCardImageIndex(item.id));
  };

  // Lightbox navigation
  const navigateLightbox = useCallback(
    (direction: "prev" | "next") => {
      if (!selectedImage) return;
      const total = selectedImage.images.length;
      if (direction === "prev") {
        setLightboxIndex((prev) => (prev - 1 + total) % total);
      } else {
        setLightboxIndex((prev) => (prev + 1) % total);
      }
    },
    [selectedImage]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowLeft" && selectedImage) {
        navigateLightbox("prev");
      } else if (e.key === "ArrowRight" && selectedImage) {
        navigateLightbox("next");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, navigateLightbox]);

  return (
    <section id="gallery">
      <div className="py-16 xl:py-32">
        <div className="container">
          {/* Header */}
          <SectionHeader className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-12">
            <h2>My Gallery</h2>
            <p className="text-xl text-primary">( 05 )</p>
          </SectionHeader>

          {/* Description */}
          <ScrollReveal delay={0.1}>
            <p className="text-secondary mb-8 max-w-2xl">A glimpse into my professional journey — events, workshops, certifications, and moments that shaped my growth as a developer.</p>
          </ScrollReveal>

          {/* Filter Buttons */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap gap-3 mb-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                    activeFilter === category ? "bg-primary text-white border-primary" : "bg-white text-secondary border-gray hover:border-primary hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Gallery Grid */}
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" layout transition={{ duration: 0.4, ease: "easeInOut" }}>
            <AnimatePresence mode="popLayout">
              {filteredGallery.map((item) => {
                const currentIndex = getCardImageIndex(item.id);
                const hasMultiple = item.images.length > 1;

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => openLightbox(item)}
                    className="group relative overflow-hidden rounded-lg cursor-pointer aspect-[4/3]"
                  >
                    <Image src={getImgPath(item.images[currentIndex])} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="inline-block px-2 py-1 bg-primary/80 text-xs rounded-full mb-2">{item.category}</span>
                        <h5 className="text-lg font-semibold text-white">{item.title}</h5>
                        <p className="text-sm text-white/80 line-clamp-2">{item.description}</p>
                      </div>
                    </div>

                    {/* Dots Indicator for multiple images */}
                    {hasMultiple && (
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {item.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCardImageChange(item.id, idx);
                            }}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-primary w-4" : "bg-white/70 hover:bg-white"}`}
                          />
                        ))}
                      </div>
                    )}

                    {/* Zoom Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008B8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                        <path d="M11 8v6" />
                        <path d="M8 11h6" />
                      </svg>
                    </div>

                    {/* Image count badge */}
                    {hasMultiple && (
                      <div className="absolute top-4 left-4 px-2 py-1 bg-black/60 text-white text-xs rounded-full flex items-center gap-1">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <path d="M3 15l6-6 4 4 8-8" />
                        </svg>
                        {item.images.length}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredGallery.length === 0 && (
            <div className="text-center py-16">
              <p className="text-secondary">No images found in this category.</p>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button onClick={() => setSelectedImage(null)} className="carousel-nav absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors duration-200">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>

              {/* Image Counter */}
              {selectedImage.images.length > 1 && (
                <div className="absolute top-4 left-4 z-10 px-3 py-1.5 bg-black/60 text-white text-sm rounded-full">
                  {lightboxIndex + 1} / {selectedImage.images.length}
                </div>
              )}

              {/* Image */}
              <div className="relative aspect-[16/10] bg-softGray">
                <AnimatePresence mode="wait">
                  <motion.div key={lightboxIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="absolute inset-0">
                    <Image src={getImgPath(selectedImage.images[lightboxIndex])} alt={selectedImage.title} fill className="object-contain" />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                {selectedImage.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateLightbox("prev");
                      }}
                      className="carousel-nav absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateLightbox("next");
                      }}
                      className="carousel-nav absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {/* Caption */}
              <div className="p-5 bg-white">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">{selectedImage.category}</span>
                  <span className="text-sm text-secondary">{selectedImage.date}</span>
                </div>
                <h4 className="text-xl font-semibold text-black mb-2">{selectedImage.title}</h4>
                <p className="text-secondary">{selectedImage.description}</p>

                {/* Lightbox dots */}
                {selectedImage.images.length > 1 && (
                  <div className="flex justify-center gap-2 mt-4 pt-4 border-t border-gray/20">
                    {selectedImage.images.map((_, idx) => (
                      <button key={idx} onClick={() => setLightboxIndex(idx)} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === lightboxIndex ? "bg-primary w-6" : "bg-gray/40 hover:bg-gray/60"}`} />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MyGallery;
