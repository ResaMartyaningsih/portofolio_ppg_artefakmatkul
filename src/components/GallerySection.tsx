import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Play,
  Calendar,
  MapPin,
  Maximize2,
  ExternalLink,
  FolderOpen
} from "lucide-react";
import { GalleryItem, GalleryCategory } from "../types/portfolio";
import { galleryItems } from "../data/galleryData";
import { MASTER_DRIVE_LINKS } from "../data/projectsData";

interface GallerySectionProps {
  onSelectGallery: (item: GalleryItem) => void;
}

export function GallerySection({ onSelectGallery }: GallerySectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("Semua");

  const categories: GalleryCategory[] = [
    "Semua",
    "Praktik Mengajar",
    "Budaya Sekolah",
    "Bimbingan & Diskusi",
    "Video Pembelajaran",
    "Semester I",
    "Semester II"
  ];

  const categoryCounts: Record<GalleryCategory, number> = useMemo(() => {
    return {
      Semua: galleryItems.length,
      "Praktik Mengajar": galleryItems.filter((g) => g.category === "Praktik Mengajar").length,
      "Budaya Sekolah": galleryItems.filter((g) => g.category === "Budaya Sekolah").length,
      "Bimbingan & Diskusi": galleryItems.filter((g) => g.category === "Bimbingan & Diskusi").length,
      "Projek Kepemimpinan": galleryItems.filter((g) => g.category === "Projek Kepemimpinan").length,
      "Video Pembelajaran": galleryItems.filter((g) => g.type === "video").length,
      "Semester I": galleryItems.filter((g) => g.semester === "Semester I").length,
      "Semester II": galleryItems.filter((g) => g.semester === "Semester II").length
    };
  }, []);

  const visibleItems = useMemo(() => {
    if (selectedCategory === "Semua") return galleryItems;
    if (selectedCategory === "Video Pembelajaran")
      return galleryItems.filter((g) => g.type === "video");
    if (selectedCategory === "Semester I")
      return galleryItems.filter((g) => g.semester === "Semester I");
    if (selectedCategory === "Semester II")
      return galleryItems.filter((g) => g.semester === "Semester II");
    return galleryItems.filter((g) => g.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="galeri" className="py-20 sm:py-28 bg-slate-50/70 border-b border-slate-200/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-700 mb-2">
              05 · Dokumentasi Visual
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Galeri Praktik Lapangan &amp; Budaya Sekolah
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Setiap foto dan video merekam dedikasi dalam belajar, mengajar, dan bertransformasi bersama peserta didik dan dewan guru SMA Negeri 3 Yogyakarta.
            </p>
          </div>

          <a
            href={MASTER_DRIVE_LINKS.fotoDokumentasi}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-indigo-700 transition shrink-0 self-start md:self-end"
          >
            <FolderOpen size={16} />
            <span>Selengkapnya Foto Dokumentasi PPL (Drive)</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            const count = categoryCounts[cat];
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] font-bold ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Media Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="card-light rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:border-indigo-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Media Thumbnail */}
                  <div
                    onClick={() => onSelectGallery(item)}
                    className="relative aspect-video w-full overflow-hidden bg-slate-100 cursor-pointer"
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = "/profil_formal.jpg";
                      }}
                    />

                    {/* Top Badges Overlay */}
                    <div className="absolute inset-x-3 top-3 flex items-center justify-between pointer-events-none">
                      <span className="rounded-lg bg-white/90 px-2.5 py-1 text-[11px] font-bold text-slate-800 backdrop-blur-md shadow-xs border border-slate-200/50">
                        {item.category}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-[11px] font-bold text-white shadow-xs ${
                          item.type === "video" ? "bg-rose-600" : "bg-indigo-600"
                        }`}
                      >
                        {item.type === "video" ? (
                          <Play size={11} className="fill-current" />
                        ) : (
                          <Camera size={11} />
                        )}
                        <span>{item.type === "video" ? "Video" : "Foto"}</span>
                      </span>
                    </div>

                    {/* Play Overlay if Video */}
                    {item.type === "video" && (
                      <div className="absolute inset-0 grid place-items-center bg-black/25 group-hover:bg-black/10 transition">
                        <div className="grid size-12 place-items-center rounded-full bg-rose-600 text-white shadow-lg shadow-rose-600/40 group-hover:scale-110 transition duration-300">
                          <Play size={20} className="fill-white translate-x-0.5" />
                        </div>
                      </div>
                    )}

                    {/* Hover Hint */}
                    <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center pointer-events-none">
                      <span className="rounded-xl bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-900 shadow-md flex items-center gap-1.5">
                        <Maximize2 size={13} />
                        <span>Buka Pratinjau</span>
                      </span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar size={13} className="text-indigo-600" />
                        {item.date}
                      </span>
                      <span>•</span>
                      <span className="truncate">{item.location}</span>
                    </div>

                    <h3 className="font-display text-base font-bold text-slate-900 leading-snug group-hover:text-indigo-700 transition">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Footer with Tags and Action */}
                <div className="p-5 pt-0">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectGallery(item)}
                    className="w-full flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white py-2 text-xs font-semibold text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition active:scale-95 shadow-xs"
                  >
                    {item.type === "video" ? (
                      <>
                        <Play size={13} className="fill-current" />
                        <span>Tonton Video Pembelajaran</span>
                      </>
                    ) : (
                      <>
                        <Maximize2 size={13} />
                        <span>Lihat Detail &amp; Refleksi Foto</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
