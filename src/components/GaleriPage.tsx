import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Play,
  MapPin,
  Maximize2,
  BookOpen,
  Sparkles,
  Layers3,
  RefreshCw,
  ArrowLeft,
  Search
} from "lucide-react";
import { GalleryItem } from "../types/portfolio";

interface GaleriPageProps {
  galleryItems: GalleryItem[];
  onSelectGallery: (item: GalleryItem) => void;
  onBackToHome?: () => void;
  isStandalonePage?: boolean;
}

export function GaleriPage({
  galleryItems,
  onSelectGallery,
  onBackToHome,
  isStandalonePage = true
}: GaleriPageProps) {
  const [galleryTab, setGalleryTab] = useState<"Semester 1" | "Semester 2">("Semester 1");
  const [gallerySubFilter, setGallerySubFilter] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const semesterCounts = useMemo(() => {
    return {
      "Semester 1": galleryItems.filter((g) => g.semester === "Semester I").length,
      "Semester 2": galleryItems.filter((g) => g.semester === "Semester II").length
    };
  }, [galleryItems]);

  const currentSemesterItems = useMemo(() => {
    const target = galleryTab === "Semester 1" ? "Semester I" : "Semester II";
    return galleryItems.filter((item) => item.semester === target);
  }, [galleryItems, galleryTab]);

  const currentSubCategories = useMemo(() => {
    const isSem1 = galleryTab === "Semester 1";
    const semItems = isSem1
      ? galleryItems.filter((g) => g.semester === "Semester I")
      : galleryItems.filter((g) => g.semester === "Semester II");

    const allCount = semItems.length;
    const pmCount = semItems.filter((g) => g.category === "Praktik Mengajar").length;
    const bsCount = semItems.filter((g) => g.category === "Budaya Sekolah").length;
    const bdCount = semItems.filter((g) => g.category === "Bimbingan & Diskusi").length;
    const vidCount = semItems.filter((g) => g.type === "video" || g.category === "Video Pembelajaran").length;

    return [
      { label: "Semua", value: "Semua", count: allCount },
      {
        label: isSem1 ? "Praktik Mengajar (Terbimbing)" : "Praktik Mengajar (Mandiri)",
        value: "Praktik Mengajar",
        count: pmCount
      },
      {
        label: isSem1 ? "Observasi Lingkungan & Budaya" : "Kegiatan Nonmengajar",
        value: "Budaya Sekolah",
        count: bsCount
      },
      { label: "Bimbingan & Diskusi", value: "Bimbingan & Diskusi", count: bdCount },
      { label: "Video Pembelajaran", value: "Video Pembelajaran", count: vidCount }
    ];
  }, [galleryItems, galleryTab]);

  const visibleGallery = useMemo(() => {
    let items = currentSemesterItems;
    if (gallerySubFilter === "Video Pembelajaran") {
      items = items.filter((g) => g.type === "video" || g.category === "Video Pembelajaran");
    } else if (gallerySubFilter !== "Semua") {
      items = items.filter((g) => g.category === gallerySubFilter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(
        (g) =>
          g.title.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          g.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return items;
  }, [currentSemesterItems, gallerySubFilter, searchQuery]);

  return (
    <div className={isStandalonePage ? "py-12 sm:py-16 text-slate-800" : "border-t border-white/50 bg-white/50 backdrop-blur-md px-6 py-28"}>
      <div className="mx-auto max-w-6xl">
        {/* Breadcrumb & Kembali ke Beranda if standalone */}
        {isStandalonePage && onBackToHome && (
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 rounded-xl border border-white/80 bg-white/90 hover:bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 hover:text-purple-700 transition cursor-pointer shadow-sm backdrop-blur-md"
            >
              <ArrowLeft size={15} className="text-purple-700" />
              <span>Kembali ke Beranda Portofolio</span>
            </button>

            <nav className="flex items-center gap-2 text-xs font-mono text-slate-700">
              <span onClick={onBackToHome} className="cursor-pointer hover:text-purple-800 transition">
                Beranda
              </span>
              <span>/</span>
              <span className="font-bold text-purple-900 bg-white/80 px-2 py-0.5 rounded border border-purple-200">
                Galeri &amp; Dokumentasi PPL
              </span>
            </nav>
          </div>
        )}

        {/* Header Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="studio-card relative overflow-hidden rounded-3xl border border-white/85 p-6 sm:p-10 shadow-lg mb-8 bg-white/95 backdrop-blur-xl"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-300 bg-purple-50 px-3.5 py-1 text-xs font-mono font-bold text-purple-900 uppercase tracking-widest mb-3 shadow-2xs">
                // 04 · GALERI &amp; DOKUMENTASI PPL
              </span>
              <h1 className="font-display text-3xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-slate-900">
                Dokumentasi Kegiatan PPL
              </h1>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700 font-normal max-w-3xl">
                Rekap visual pengalaman nyata PPL PPG Prajabatan Informatika di SMAN 3 Yogyakarta. Pilih tab Semester 1 atau Semester 2 untuk meninjau dokumentasi praktik mengajar, budaya sekolah, dan bimbingan secara terarah.
              </p>
            </div>

            <div className="flex items-center gap-2 self-start md:self-end text-xs text-slate-700">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 font-mono shadow-xs font-bold text-purple-900">
                <Camera size={14} className="text-purple-700" />
                <span>Total {galleryItems.length} Dokumentasi</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* DUA TAB INTERAKTIF: SEMESTER 1 & SEMESTER 2 */}
        <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-3 p-1.5 rounded-2xl sm:rounded-3xl bg-white/80 border border-white/80 shadow-md">
          <button
            type="button"
            onClick={() => {
              setGalleryTab("Semester 1");
              setGallerySubFilter("Semua");
            }}
            className={`relative flex items-center justify-between p-4 sm:p-5 rounded-xl sm:rounded-2xl transition duration-300 text-left cursor-pointer ${
              galleryTab === "Semester 1"
                ? "bg-gradient-to-r from-[#ba83ca] to-[#79b3f4] text-slate-950 shadow-md border border-white/60 font-bold"
                : "text-slate-800 hover:text-slate-950 hover:bg-white font-bold"
            }`}
          >
            <div className="flex items-center gap-3.5">
              <div
                className={`grid size-11 place-items-center rounded-xl transition ${
                  galleryTab === "Semester 1" ? "bg-white/20 text-white" : "bg-purple-100 text-purple-800 shadow-xs"
                }`}
              >
                <BookOpen size={20} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-lg sm:text-xl">Semester 1</span>
                  <span
                    className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                      galleryTab === "Semester 1" ? "bg-slate-900/15 text-slate-950" : "bg-purple-100 text-purple-900"
                    }`}
                  >
                    PPL I
                  </span>
                </div>
                <p className={`text-xs mt-0.5 ${galleryTab === "Semester 1" ? "text-slate-900 font-medium" : "text-slate-600"}`}>
                  Praktik Terbimbing &amp; Observasi Lingkungan
                </p>
              </div>
            </div>
            <span
              className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full shrink-0 ${
                galleryTab === "Semester 1" ? "bg-white text-purple-950" : "bg-purple-100 text-purple-900 shadow-xs"
              }`}
            >
              {semesterCounts["Semester 1"]} Item
            </span>
          </button>

          <button
            type="button"
            onClick={() => {
              setGalleryTab("Semester 2");
              setGallerySubFilter("Semua");
            }}
            className={`relative flex items-center justify-between p-4 sm:p-5 rounded-xl sm:rounded-2xl transition duration-300 text-left cursor-pointer ${
              galleryTab === "Semester 2"
                ? "bg-gradient-to-r from-[#79b3f4] to-[#41dfff] text-slate-900 shadow-md border border-white/60 font-bold"
                : "text-slate-700 hover:text-slate-950 hover:bg-white font-bold"
            }`}
          >
            <div className="flex items-center gap-3.5">
              <div
                className={`grid size-11 place-items-center rounded-xl transition ${
                  galleryTab === "Semester 2" ? "bg-white/30 text-slate-900" : "bg-sky-100 text-sky-800 shadow-xs"
                }`}
              >
                <Sparkles size={20} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-lg sm:text-xl">Semester 2</span>
                  <span
                    className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                      galleryTab === "Semester 2" ? "bg-white/30 text-slate-900" : "bg-sky-100 text-sky-900"
                    }`}
                  >
                    PPL II
                  </span>
                </div>
                <p className={`text-xs mt-0.5 ${galleryTab === "Semester 2" ? "text-slate-800" : "text-slate-600"}`}>
                  Praktik Mandiri &amp; Kegiatan Nonmengajar
                </p>
              </div>
            </div>
            <span
              className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full shrink-0 ${
                galleryTab === "Semester 2" ? "bg-white text-slate-950" : "bg-sky-100 text-sky-900 shadow-xs"
              }`}
            >
              {semesterCounts["Semester 2"]} Item
            </span>
          </button>
        </div>

        {/* CONTEXT HIGHLIGHT BANNER */}
        {galleryTab === "Semester 1" ? (
          <div className="mb-6 rounded-2xl border border-white/85 bg-white/92 p-4 sm:p-5 shadow-sm">
            <div className="flex items-start gap-3.5">
              <div className="grid size-9 place-items-center rounded-xl bg-purple-100 text-purple-800 border border-purple-200 shrink-0 mt-0.5">
                <BookOpen size={18} />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-800">
                    // Fokus Dokumentasi Semester 1
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-xs font-mono text-slate-600 font-semibold">SMAN 3 Yogyakarta</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                  Menampilkan dokumentasi PPL I, terutama <strong className="text-slate-900 font-medium">praktik mengajar terbimbing</strong> (simulasi IoT Tinkercad, peer debugging, diferensiasi proses, Kahoot!) dan <strong className="text-slate-900 font-medium">observasi lingkungan belajar</strong> (budaya 5S, disiplin positif, hari busana tradisional Jawa, serta bimbingan DPL &amp; Guru Pamong).
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="mb-6 rounded-2xl border border-white/85 bg-white/92 p-4 sm:p-5 shadow-sm">
            <div className="flex items-start gap-3.5">
              <div className="grid size-9 place-items-center rounded-xl bg-sky-100 text-sky-800 border border-sky-200 shrink-0 mt-0.5">
                <Sparkles size={18} />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-800">
                    // Fokus Dokumentasi Semester 2
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-xs font-mono text-slate-600 font-semibold">SMAN 3 Yogyakarta</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                  Menampilkan dokumentasi PPL II, terutama <strong className="text-slate-900 font-medium">praktik mengajar mandiri &amp; kegiatan pembelajaran</strong> (mentoring 1-on-1 logika Python, penguatan growth mindset di lab komputer, bimbingan reflektif Guru Pamong) serta <strong className="text-slate-900 font-medium">kegiatan nonmengajar</strong> (Gelar Karya P5 stand kewirausahaan, pembiasaan karakter Salim pagi, dan Jalan Sehat Padmanaba).
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SUB-FILTER KATEGORI & PENCARIAN */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-700 font-mono mr-1 flex items-center gap-1.5 font-bold">
              <Layers3 size={14} className="text-purple-700" />
              <span>Filter:</span>
            </span>
            {currentSubCategories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setGallerySubFilter(cat.value)}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider transition cursor-pointer ${
                  gallerySubFilter === cat.value
                    ? "bg-gradient-to-r from-[#ba83ca] to-[#79b3f4] text-slate-950 shadow-sm font-bold"
                    : "border border-slate-200 bg-white/90 text-slate-800 hover:text-slate-950 hover:bg-white font-semibold"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                    gallerySubFilter === cat.value ? "bg-white/20 text-white font-bold" : "bg-purple-100 text-purple-900 font-bold"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          <div className="w-full sm:w-64">
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Cari dokumentasi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 focus:border-purple-500 focus:outline-none shadow-2xs"
              />
            </div>
          </div>
        </div>

        {/* GALLERY GRID */}
        {visibleGallery.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-white/80 bg-white/80 p-12 text-center my-6">
            <div className="mx-auto mb-4 grid size-16 place-items-center rounded-2xl bg-purple-100 text-purple-800">
              <Camera size={28} />
            </div>
            <h4 className="font-display text-xl font-bold text-slate-900">Dokumentasi belum ditambahkan</h4>
            <p className="mx-auto mt-2 max-w-md text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
              Belum ada foto atau video pada kategori penyaringan ini untuk {galleryTab}. Silakan pilih kategori lain atau beralih tab semester.
            </p>
            <button
              type="button"
              onClick={() => {
                setGallerySubFilter("Semua");
                setSearchQuery("");
              }}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#ba83ca] to-[#79b3f4] text-white px-4 py-2 text-xs font-bold hover:brightness-105 transition cursor-pointer shadow-sm"
            >
              <RefreshCw size={13} />
              <span>Tampilkan Semua Dokumentasi {galleryTab}</span>
            </button>
          </div>
        ) : (
          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visibleGallery.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="group studio-card flex flex-col justify-between overflow-hidden rounded-3xl bg-white/92 border border-white/85 hover:border-purple-300 hover:shadow-xl transition duration-300"
                >
                  <div>
                    {/* Media Thumbnail Container */}
                    <div
                      onClick={() => onSelectGallery(item)}
                      className="relative aspect-video w-full overflow-hidden bg-slate-100 cursor-pointer"
                    >
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="size-full object-cover transition duration-500 group-hover:scale-105"
                      />

                      {/* Top Overlay Badges */}
                      <div className="absolute inset-x-3 top-3 flex items-center justify-between">
                        <span className="rounded-md bg-white/95 px-2.5 py-1 text-[11px] font-mono text-slate-800 backdrop-blur-md shadow-xs border border-white/80 font-semibold">
                          {item.category}
                        </span>
                        <span
                          className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-[11px] font-mono font-bold backdrop-blur-md shadow-xs ${
                            item.type === "video"
                              ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white"
                              : "bg-gradient-to-r from-[#d16ba5] to-[#ba83ca] text-white"
                          }`}
                        >
                          {item.type === "video" ? <Play size={10} className="fill-white" /> : <Camera size={10} />}
                          <span>{item.type === "video" ? "Video" : "Foto"}</span>
                        </span>
                      </div>

                      {/* Video Play Icon Center Overlay */}
                      {item.type === "video" && (
                        <div className="absolute inset-0 grid place-items-center bg-black/25 group-hover:bg-black/10 transition">
                          <div className="grid size-12 place-items-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg group-hover:scale-110 transition duration-300">
                            <Play size={18} className="fill-white translate-x-0.5" />
                          </div>
                        </div>
                      )}

                      {/* Hover Zoom Hint */}
                      <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center pointer-events-none">
                        <span className="rounded-xl bg-white/95 border border-white/80 px-3 py-1.5 text-xs text-slate-900 font-bold shadow-md flex items-center gap-1.5 backdrop-blur-sm">
                          <Maximize2 size={13} className="text-purple-700" />
                          <span>Buka Pratinjau</span>
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-xs text-slate-700 font-mono mb-2 font-semibold">
                        <span className="flex items-center gap-1">
                          <MapPin size={13} className="text-purple-700" /> {item.location}
                        </span>
                        <span>•</span>
                        <span className="truncate font-semibold text-purple-900">{item.category}</span>
                      </div>

                      <h4 className="font-display text-lg font-bold text-slate-900 leading-snug group-hover:text-purple-700 transition">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-800 line-clamp-3 font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-5 pt-0">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-white border border-purple-200 px-2 py-0.5 text-[11px] font-mono text-purple-900 font-semibold"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectGallery(item)}
                      className="w-full flex items-center justify-center gap-2 rounded-xl border border-white/80 bg-white/90 hover:bg-gradient-to-r hover:from-[#ba83ca] hover:to-[#79b3f4] hover:text-white py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 transition active:scale-95 cursor-pointer shadow-2xs"
                    >
                      {item.type === "video" ? (
                        <>
                          <Play size={13} className="fill-current text-purple-700 group-hover:text-white" />
                          <span>Tonton Video</span>
                        </>
                      ) : (
                        <>
                          <Maximize2 size={13} className="text-purple-700 group-hover:text-white" />
                          <span>Lihat Detail Foto</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
}

