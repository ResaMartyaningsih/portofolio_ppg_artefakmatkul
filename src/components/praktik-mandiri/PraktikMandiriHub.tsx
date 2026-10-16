import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  BookOpen,
  Laptop,
  Video,
  Users,
  CheckSquare,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  GraduationCap,
  Sparkles,
  School,
  FolderOpen
} from "lucide-react";
import { SUBPAGES_LIST, PRAKTIK_MANDIRI_CONTEXT } from "../../data/praktikMandiriData";

interface PraktikMandiriHubProps {
  onSelectSubpage: (subpageId: string) => void;
  onBackToHome: () => void;
}

export function PraktikMandiriHub({ onSelectSubpage, onBackToHome }: PraktikMandiriHubProps) {
  const getSubpageIcon = (iconName: string) => {
    switch (iconName) {
      case "FileText":
        return <FileText size={24} className="text-indigo-400" />;
      case "BookOpen":
        return <BookOpen size={24} className="text-sky-400" />;
      case "Laptop":
        return <Laptop size={24} className="text-emerald-400" />;
      case "Video":
        return <Video size={24} className="text-pink-400" />;
      case "Users":
        return <Users size={24} className="text-amber-400" />;
      case "CheckSquare":
        return <CheckSquare size={24} className="text-purple-400" />;
      default:
        return <FileText size={24} className="text-indigo-400" />;
    }
  };

  return (
    <div className="py-12 sm:py-16">
      {/* Top Navigation Bar / Breadcrumb back to Home */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-300 hover:bg-white/10 hover:text-white transition"
        >
          <ArrowLeft size={14} />
          <span>Kembali ke Beranda Portofolio</span>
        </button>

        <a
          href={PRAKTIK_MANDIRI_CONTEXT.driveFolderPPL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-indigo-500/20 hover:scale-[1.02] transition"
        >
          <FolderOpen size={14} />
          <span>Folder Artefak PPL Mandiri di Drive</span>
          <ExternalLink size={13} />
        </a>
      </div>

      {/* Hero Banner / Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass relative overflow-hidden rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl mb-12"
      >
        <div className="absolute right-0 top-0 -z-10 size-96 rounded-full bg-gradient-to-br from-indigo-500/15 via-purple-500/10 to-transparent blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-300 mb-4">
          <Sparkles size={13} className="text-indigo-400" />
          <span>PPL II Mandiri · PPG Calon Guru Informatika UNY</span>
        </div>

        <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
          Praktik Mengajar Mandiri
        </h1>

        <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl">
          Dokumentasi dan kajian analitis komprehensif atas pelaksanaan Praktik Pengalaman Lapangan (PPL II) Mandiri mata pelajaran <strong>Informatika (Fase E / Kelas X)</strong> di <strong>SMA Negeri 3 Yogyakarta</strong>. Menyajikan 6 dimensi evaluasi reflektif mulai dari perencanaan modul ajar, materi, media praktikum, video pembelajaran, aktivitas nonmengajar, hingga instrumen asesmen analitik.
        </p>

        {/* Info Grid Pills */}
        <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div>
            <span className="block text-zinc-500 font-medium">Sekolah Praktik</span>
            <span className="font-semibold text-white flex items-center gap-1.5 mt-0.5">
              <School size={14} className="text-emerald-400 shrink-0" />
              SMAN 3 Yogyakarta
            </span>
          </div>
          <div>
            <span className="block text-zinc-500 font-medium">Fase &amp; Kelas</span>
            <span className="font-semibold text-white flex items-center gap-1.5 mt-0.5">
              <GraduationCap size={14} className="text-sky-400 shrink-0" />
              Fase E / Kelas X
            </span>
          </div>
          <div>
            <span className="block text-zinc-500 font-medium">Fokus Materi</span>
            <span className="font-semibold text-indigo-300 mt-0.5 block truncate">
              Python &amp; Algoritma
            </span>
          </div>
          <div>
            <span className="block text-zinc-500 font-medium">Ruang Lingkup</span>
            <span className="font-semibold text-purple-300 mt-0.5 block truncate">
              6 Subhalaman Analisis
            </span>
          </div>
        </div>
      </motion.div>

      {/* SECTION TITLE: 6 SUBHALAMAN ANALISIS */}
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-1">
          Struktur Menu Analisis
        </p>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
          Enam Subhalaman Analisis Praktik Mengajar Mandiri
        </h2>
        <p className="mt-2 text-sm text-zinc-400 max-w-2xl">
          Pilih salah satu subhalaman di bawah ini untuk menelaah dokumen, bukti rekaman, rubrik asesmen, dan refleksi pedagogis secara rinci dan terpisah.
        </p>
      </div>

      {/* 6 CARDS GRID */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SUBPAGES_LIST.map((sub, idx) => (
          <motion.div
            key={sub.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="glass rounded-2xl border border-white/10 p-6 shadow-xl hover:border-indigo-500/40 hover:bg-white/[0.04] transition duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Card Header: Number & Badge & Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-xs font-bold text-indigo-300 group-hover:scale-110 transition">
                    {sub.number}
                  </span>
                  <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                    {sub.badge}
                  </span>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition">
                  {getSubpageIcon(sub.iconName)}
                </div>
              </div>

              {/* Card Title */}
              <h3 className="font-display text-lg font-bold text-white group-hover:text-indigo-200 transition leading-snug">
                {sub.title}
              </h3>

              {/* Card Description */}
              <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {sub.description}
              </p>
            </div>

            {/* Card Action Button: “Lihat Analisis” */}
            <div className="mt-6 pt-4 border-t border-white/5">
              <button
                onClick={() => onSelectSubpage(sub.id)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white border border-white/10 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:border-transparent transition shadow-sm group-hover:shadow-indigo-500/20"
              >
                <span>Lihat Analisis</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition duration-200" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
