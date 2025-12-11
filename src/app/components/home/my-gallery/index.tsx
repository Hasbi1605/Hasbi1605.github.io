"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import { useEffect, useState } from "react";

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
  date: string;
}

const MyGallery = () => {
  const [galleryData, setGalleryData] = useState<GalleryItem[]>([]);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

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

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <section id="gallery">
      <div className="py-16 xl:py-32">
        <div className="container">
          {/* Header */}
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-12">
            <h2>My Gallery</h2>
            <p className="text-xl text-primary">( 05 )</p>
          </div>

          {/* Description */}
          <p className="text-secondary mb-8 max-w-2xl">A glimpse into my professional journey — events, workshops, certifications, and moments that shaped my growth as a developer.</p>

          {/* Filter Buttons */}
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

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredGallery.map((item) => (
              <div key={item.id} onClick={() => setSelectedImage(item)} className="group relative overflow-hidden rounded-lg cursor-pointer aspect-[4/3]">
                <Image src={getImgPath(item.image)} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-2 py-1 bg-primary/80 text-xs rounded-full mb-2">{item.category}</span>
                    <h5 className="text-lg font-semibold text-white">{item.title}</h5>
                    <p className="text-sm text-white/80 line-clamp-2">{item.description}</p>
                  </div>
                </div>
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008B8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                    <path d="M11 8v6" />
                    <path d="M8 11h6" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredGallery.length === 0 && (
            <div className="text-center py-16">
              <p className="text-secondary">No images found in this category.</p>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative aspect-[16/10] bg-softGray">
              <Image src={getImgPath(selectedImage.image)} alt={selectedImage.title} fill className="object-contain" />
            </div>

            {/* Caption */}
            <div className="p-5 bg-white">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">{selectedImage.category}</span>
                <span className="text-sm text-secondary">{selectedImage.date}</span>
              </div>
              <h4 className="text-xl font-semibold text-black mb-2">{selectedImage.title}</h4>
              <p className="text-secondary">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyGallery;
