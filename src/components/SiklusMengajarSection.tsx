import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  ExternalLink,
  BookOpen,
  Sparkles,
  School,
  GraduationCap,
  Calendar,
  CheckCircle2,
  Layers,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import { SIKLUS_MENGAJAR_DATA, SiklusItem, JURNAL_HARIAN_PPL } from "../data/siklusMengajarData";

interface SiklusMengajarSectionProps {
  onNavigateToMandiri?: () => void;
  onBackToHome?: () => void;
  isStandalonePage?: boolean;
}

export function SiklusMengajarSection({
  onNavigateToMandiri,
  onBackToHome,
  isStandalonePage = false
}: SiklusMengajarSectionProps) {
  const [activeTab, setActiveTab] = useState<"Semester 1" | "Semester 2">("Semester 1");
  const [showJournalEmbed, setShowJournalEmbed] = useState(false);

  const filteredItems = SIKLUS_MENGAJAR_DATA.filter((item) => item.semester === activeTab);

  return (
    <div className={isStandalonePage ? "py-12 sm:py-16 text-slate-800" : "border-t border-white/50 bg-white/40 backdrop-blur-md px-6 py-28"}>
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
                Siklus Praktik Mengajar
              </span>
            </nav>
          </div>
        )}

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-300 bg-white/90 px-3.5 py-1 text-xs font-mono font-bold text-purple-900 uppercase tracking-widest mb-3 shadow-2xs backdrop-blur-sm">
              // 03 · SIKLUS PRAKTIK MENGAJAR
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-slate-900">
              Siklus Praktik Mengajar KBM
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700 font-normal max-w-3xl">
              Dokumentasi komprehensif pelaksanaan siklus KBM Informatika Fase E di SMA Negeri 3 Yogyakarta, mencakup 3 Siklus Terbimbing pada PPL I dan 4 Siklus Mandiri pada PPL II.
            </p>
          </div>

          {/* Quick Context Pill */}
          <div className="flex items-center gap-2 self-start md:self-end text-xs text-slate-800">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/85 bg-white/95 px-4 py-2 font-mono shadow-sm font-bold text-slate-900">
              <School size={15} className="text-purple-700" />
              <span>SMAN 3 Yogyakarta · 7 Siklus</span>
            </span>
          </div>
        </div>

        {/* BANNER UTAMA: JURNAL HARIAN PPL RESMI */}
        <div className="mb-10 overflow-hidden rounded-3xl border border-white/85 bg-white/95 p-6 sm:p-8 shadow-xl backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2.5 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-blue-900 shadow-2xs">
                  <FileText size={13} className="text-blue-600" />
                  <span>Logbook Resmi PPL</span>
                </span>
                <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-mono font-bold text-emerald-900 border border-emerald-200">
                  {JURNAL_HARIAN_PPL.status}
                </span>
                <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-[11px] font-mono font-bold text-purple-900 border border-purple-200">
                  {JURNAL_HARIAN_PPL.totalHari}
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                {JURNAL_HARIAN_PPL.judul}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal max-w-3xl">
                {JURNAL_HARIAN_PPL.deskripsi}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600 pt-1 font-medium">
                <span className="flex items-center gap-1.5 font-bold text-slate-900">
                  <School size={14} className="text-purple-700" /> {JURNAL_HARIAN_PPL.sekolah}
                </span>
                <span className="flex items-center gap-1.5 font-bold text-blue-900">
                  <CheckCircle2 size={14} className="text-emerald-600" /> Terintegrasi Google Docs
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0">
              <a
                href={JURNAL_HARIAN_PPL.linkGoogleDocs}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ba83ca] via-[#79b3f4] to-[#41dfff] hover:brightness-105 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-md transition active:scale-95 cursor-pointer"
              >
                <FileText size={16} />
                <span>Buka Jurnal Harian (Google Docs)</span>
                <ExternalLink size={14} />
              </a>

              <button
                type="button"
                onClick={() => setShowJournalEmbed(!showJournalEmbed)}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-slate-100 hover:bg-slate-200 px-4 py-2.5 text-xs font-bold text-slate-800 transition cursor-pointer"
              >
                <span>{showJournalEmbed ? "Tutup Pratinjau Dokumen" : "Lihat Pratinjau Dokumen di Sini"}</span>
              </button>
            </div>
          </div>

          {/* Collapsible Iframe Embed */}
          <AnimatePresence>
            {showJournalEmbed && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 pt-6 border-t border-slate-200"
              >
                <div className="flex items-center justify-between pb-3">
                  <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                    Pratinjau Langsung Jurnal Harian PPL (Google Docs Viewer)
                  </span>
                  <a
                    href={JURNAL_HARIAN_PPL.linkGoogleDocs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-purple-700 hover:underline flex items-center gap-1"
                  >
                    <span>Buka Penuh di Tab Baru</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
                <div className="relative w-full rounded-2xl border border-slate-300 bg-white overflow-hidden shadow-inner h-[650px]">
                  <iframe
                    src={JURNAL_HARIAN_PPL.embedUrl}
                    title="Jurnal Harian PPL Google Docs"
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Tab Switcher: PPL I (Semester 1) & PPL II (Semester 2) */}
        <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3 p-1.5 rounded-2xl sm:rounded-3xl bg-white/85 border border-white/85 shadow-md">
          <button
            type="button"
            onClick={() => setActiveTab("Semester 1")}
            className={`relative flex items-center justify-between p-4 sm:p-5 rounded-xl sm:rounded-2xl transition duration-300 text-left cursor-pointer ${
              activeTab === "Semester 1"
                ? "bg-gradient-to-r from-[#ba83ca] to-[#79b3f4] text-slate-950 shadow-md border border-white/60 font-bold"
                : "text-slate-800 hover:text-slate-950 hover:bg-white font-bold"
            }`}
          >
            <div className="flex items-center gap-3.5">
              <div
                className={`grid size-11 place-items-center rounded-xl transition ${
                  activeTab === "Semester 1" ? "bg-white/30 text-slate-950" : "bg-purple-100 text-purple-900 shadow-2xs"
                }`}
              >
                <BookOpen size={20} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-lg sm:text-xl">Semester 1 (PPL I)</span>
                  <span
                    className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                      activeTab === "Semester 1" ? "bg-white/30 text-slate-950" : "bg-purple-100 text-purple-900"
                    }`}
                  >
                    3 Siklus
                  </span>
                </div>
                <p className={`text-xs mt-0.5 ${activeTab === "Semester 1" ? "text-slate-900 font-medium" : "text-slate-600"}`}>
                  Praktik Mengajar Terbimbing Bersama Guru Pamong
                </p>
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("Semester 2")}
            className={`relative flex items-center justify-between p-4 sm:p-5 rounded-xl sm:rounded-2xl transition duration-300 text-left cursor-pointer ${
              activeTab === "Semester 2"
                ? "bg-gradient-to-r from-[#79b3f4] to-[#41dfff] text-slate-950 shadow-md border border-white/60 font-bold"
                : "text-slate-800 hover:text-slate-950 hover:bg-white font-bold"
            }`}
          >
            <div className="flex items-center gap-3.5">
              <div
                className={`grid size-11 place-items-center rounded-xl transition ${
                  activeTab === "Semester 2" ? "bg-white/35 text-slate-950" : "bg-sky-100 text-sky-900 shadow-2xs"
                }`}
              >
                <Sparkles size={20} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-lg sm:text-xl">Semester 2 (PPL II)</span>
                  <span
                    className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                      activeTab === "Semester 2" ? "bg-white/35 text-slate-950" : "bg-sky-100 text-sky-900"
                    }`}
                  >
                    4 Siklus
                  </span>
                </div>
                <p className={`text-xs mt-0.5 ${activeTab === "Semester 2" ? "text-slate-900 font-medium" : "text-slate-600"}`}>
                  Praktik Mengajar Mandiri di Laboratorium Komputer
                </p>
              </div>
            </div>
          </button>
        </div>

        {/* Tab Context Banner */}
        <div className="mb-8 rounded-2xl border border-white/85 bg-white/92 p-5 shadow-sm">
          <div className="flex items-start gap-3.5">
            <div className="grid size-10 place-items-center rounded-xl bg-purple-100 text-purple-900 shrink-0 mt-0.5">
              <Layers size={18} />
            </div>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-900">
                {activeTab === "Semester 1" ? "// FOKUS PRAKTIK TERBIMBING SEMESTER 1" : "// FOKUS PRAKTIK MANDIRI SEMESTER 2"}
              </span>
              <p className="mt-1 text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                {activeTab === "Semester 1"
                  ? "Praktik mengajar terbimbing mencakup 3 siklus pembelajaran bertahap dengan pendampingan intensif dari Guru Pamong dan Dosen Pembimbing Lapangan di SMA Negeri 3 Yogyakarta. Setiap siklus memuat perangkat RPP/modul ajar, lembar observasi, dan instrumen asesmen proses."
                  : "Praktik mengajar mandiri mencakup 4 siklus pembelajaran mandiri pada mata pelajaran Informatika Fase E (Kelas X). Meliputi materi Berpikir Komputasional (Computational Thinking), integrasi perkakas TIK (Spreadsheet, Google Docs, dan Mail Merge), serta asesmen portofolio praktikum."}
              </p>
            </div>
          </div>
        </div>

        {/* Siklus Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((siklus) => (
              <motion.div
                layout
                key={siklus.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="group studio-card flex flex-col justify-between rounded-3xl p-6 sm:p-7 bg-white/92 border border-white/85 hover:border-purple-300 hover:shadow-xl transition duration-300"
              >
                <div>
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-tr from-[#ba83ca] to-[#79b3f4] text-slate-950 font-mono font-bold text-sm shadow-2xs">
                      S{siklus.siklusKe}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-purple-900 bg-purple-100 px-2.5 py-1 rounded-md border border-purple-200">
                      {siklus.kategori}
                    </span>
                  </div>

                  {/* Title & Topic */}
                  <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-purple-700 transition leading-snug">
                    {siklus.judul}
                  </h3>

                  <div className="mt-2.5 rounded-xl border border-purple-200 bg-purple-50/70 p-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-purple-900 font-bold block mb-0.5">Topik KBM:</span>
                    <p className="text-xs font-semibold text-slate-900 leading-snug">{siklus.topik}</p>
                  </div>

                  <p className="mt-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {siklus.keterangan}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-200 space-y-1.5 text-xs text-slate-600 font-medium">
                    <div className="flex items-center justify-between">
                      <span>Sasaran Kelas:</span>
                      <span className="font-bold text-slate-900">{siklus.kelas}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Sekolah:</span>
                      <span className="font-bold text-slate-900">{siklus.sekolah}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Button: Buka Dokumen Drive */}
                <div className="mt-6 pt-4 border-t border-slate-200 space-y-2">
                  <a
                    href={siklus.linkDrive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ba83ca] via-[#79b3f4] to-[#41dfff] hover:brightness-105 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-sm transition active:scale-95 cursor-pointer"
                  >
                    <FileText size={14} />
                    <span>Buka Dokumen Siklus {siklus.siklusKe}</span>
                    <ExternalLink size={13} />
                  </a>

                  {siklus.semester === "Semester 2" && onNavigateToMandiri && (
                    <button
                      type="button"
                      onClick={onNavigateToMandiri}
                      className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 text-[11px] font-bold text-slate-800 transition cursor-pointer"
                    >
                      <Sparkles size={12} className="text-purple-700" />
                      <span>Lihat 6 Analisis Lengkap PPL Mandiri</span>
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

