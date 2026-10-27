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
        return <FileText size={22} className="text-indigo-700" />;
      case "BookOpen":
        return <BookOpen size={22} className="text-sky-700" />;
      case "Laptop":
        return <Laptop size={22} className="text-emerald-700" />;
      case "Video":
        return <Video size={22} className="text-pink-700" />;
      case "Users":
        return <Users size={22} className="text-purple-700" />;
      case "CheckSquare":
        return <CheckSquare size={22} className="text-cyan-700" />;
      default:
        return <FileText size={22} className="text-indigo-700" />;
    }
  };

  return (
    <div className="py-12 sm:py-16 text-slate-800">
      {/* Top Navigation Bar / Breadcrumb back to Home */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 rounded-xl border border-white/80 bg-white/90 hover:bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 hover:text-purple-700 transition cursor-pointer shadow-sm backdrop-blur-md"
        >
          <ArrowLeft size={15} className="text-purple-700" />
          <span>Kembali ke Beranda Portofolio</span>
        </button>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href={PRAKTIK_MANDIRI_CONTEXT.jurnalHarianLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-blue-300 bg-white/95 hover:bg-blue-50 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-blue-900 shadow-sm transition cursor-pointer"
          >
            <FileText size={15} className="text-blue-600" />
            <span>Jurnal Harian PPL (Google Docs)</span>
            <ExternalLink size={13} />
          </a>
          <a
            href={PRAKTIK_MANDIRI_CONTEXT.driveFolderPPL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#d16ba5] via-[#ba83ca] to-[#79b3f4] hover:brightness-105 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition cursor-pointer"
          >
            <FolderOpen size={15} />
            <span>Folder Artefak PPL Mandiri di Drive</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>

      {/* Hero Banner / Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="studio-card relative overflow-hidden rounded-3xl border border-white/80 p-6 sm:p-10 shadow-lg mb-10 bg-white/95 backdrop-blur-xl"
      >
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-[0.2em] text-purple-900 mb-4 shadow-2xs">
            <Sparkles size={13} className="text-purple-700" />
            <span>PPL II Mandiri · PPG Calon Guru Informatika UNY</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Praktik Mengajar Mandiri
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl font-normal">
            Dokumentasi dan kajian analitis komprehensif atas pelaksanaan Praktik Pengalaman Lapangan (PPL II) Mandiri mata pelajaran <strong className="text-slate-900 font-bold">Informatika (Fase E / Kelas X)</strong> di <strong className="text-slate-900 font-bold">SMA Negeri 3 Yogyakarta</strong>. Menyajikan 6 dimensi evaluasi reflektif mulai dari perencanaan modul ajar, materi, media praktikum, video pembelajaran, aktivitas nonmengajar, hingga instrumen asesmen analitik.
          </p>

          {/* Info Grid Pills */}
          <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs">
              <span className="block text-slate-600 font-bold uppercase tracking-wider text-[10px] font-mono">Sekolah Praktik</span>
              <span className="font-bold text-slate-900 flex items-center gap-1.5 mt-1">
                <School size={15} className="text-purple-700 shrink-0" />
                SMAN 3 Yogyakarta
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs">
              <span className="block text-slate-600 font-bold uppercase tracking-wider text-[10px] font-mono">Fase &amp; Kelas</span>
              <span className="font-bold text-slate-900 flex items-center gap-1.5 mt-1">
                <GraduationCap size={15} className="text-indigo-700 shrink-0" />
                Fase E / Kelas X
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs">
              <span className="block text-slate-600 font-bold uppercase tracking-wider text-[10px] font-mono">Fokus Materi</span>
              <span className="font-bold text-emerald-800 mt-1 block truncate">
                Python &amp; Algoritma
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs">
              <span className="block text-slate-600 font-bold uppercase tracking-wider text-[10px] font-mono">Ruang Lingkup</span>
              <span className="font-bold text-purple-900 mt-1 block truncate">
                6 Subhalaman Analisis
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* SECTION TITLE: 6 SUBHALAMAN ANALISIS */}
      <div className="mb-8 rounded-2xl bg-white/85 border border-white/80 p-6 backdrop-blur-md shadow-sm">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-900 block mb-1">
          // STRUKTUR MENU ANALISIS
        </span>
        <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          Enam Subhalaman Analisis Praktik Mengajar Mandiri
        </h2>
        <p className="mt-2 text-sm text-slate-700 max-w-2xl font-normal leading-relaxed">
          Pilih salah satu subhalaman di bawah ini untuk menelaah dokumen, bukti rekaman, rubrik asesmen, dan refleksi pedagogis secara rinci dan terpisah.
        </p>
      </div>

      {/* FEATURED BANNER: JURNAL HARIAN PPL */}
      <div className="mb-8 rounded-2xl border border-blue-200 bg-white/95 p-5 sm:p-6 shadow-sm backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded bg-blue-100 px-2 py-0.5 text-[10px] font-mono font-bold text-blue-900">
              <FileText size={12} className="text-blue-700" />
              <span>Logbook Pelaksanaan</span>
            </span>
            <span className="text-xs font-mono text-slate-500 font-medium">SMA Negeri 3 Yogyakarta</span>
          </div>
          <h3 className="font-display text-lg font-bold text-slate-900">
            Jurnal Harian Praktik Pengalaman Lapangan (PPL)
          </h3>
          <p className="text-xs text-slate-600 font-normal max-w-2xl leading-relaxed">
            Merekam kronologi harian KBM mandiri &amp; terbimbing, aktivitas orientasi, interaksi budaya sekolah, serta bimbingan berkala bersama Guru Pamong.
          </p>
        </div>
        <a
          href={PRAKTIK_MANDIRI_CONTEXT.jurnalHarianLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:brightness-105 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition shrink-0 cursor-pointer"
        >
          <FileText size={14} />
          <span>Buka Jurnal Harian di Google Docs</span>
          <ExternalLink size={13} />
        </a>
      </div>

      {/* 6 CARDS GRID */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SUBPAGES_LIST.map((sub, idx) => (
          <motion.div
            key={sub.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="studio-card rounded-2xl border border-white/80 p-6 shadow-md hover:border-purple-300 hover:shadow-xl bg-white/92 backdrop-blur-md transition duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Card Header: Number & Badge & Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2xl font-bold text-purple-700 leading-none">
                    {sub.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-purple-900 bg-purple-100 px-2.5 py-0.5 rounded-md border border-purple-200 font-bold">
                    {sub.badge}
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 group-hover:bg-purple-50 group-hover:border-purple-200 transition">
                  {getSubpageIcon(sub.iconName)}
                </div>
              </div>

              {/* Card Title */}
              <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-purple-700 transition leading-snug">
                {sub.title}
              </h3>

              {/* Card Description */}
              <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {sub.description}
              </p>
            </div>

            {/* Card Action Button: “Lihat Analisis” */}
            <div className="mt-6 pt-4 border-t border-slate-200">
              <button
                onClick={() => onSelectSubpage(sub.id)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 hover:bg-gradient-to-r hover:from-[#ba83ca] hover:to-[#79b3f4] hover:text-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 border border-slate-200 transition shadow-2xs cursor-pointer group-hover:border-transparent"
              >
                <span>Lihat Analisis</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition duration-200 text-purple-700 group-hover:text-white" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
