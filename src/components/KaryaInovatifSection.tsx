import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  ExternalLink,
  Sparkles,
  Maximize2,
  Minimize2,
  RefreshCw,
  Laptop,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Compass,
  Lightbulb,
  Heart
} from "lucide-react";

interface KaryaInovatifSectionProps {
  onBackToHome?: () => void;
  isStandalonePage?: boolean;
}

export function KaryaInovatifSection({ onBackToHome, isStandalonePage = false }: KaryaInovatifSectionProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  const websiteUrl = "https://sinaupy.vercel.app/";

  const reloadIframe = () => {
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div className={isStandalonePage ? "py-12 sm:py-16 text-slate-800" : "border-t border-white/50 bg-white/40 backdrop-blur-md px-6 py-28"}>
      <div className="mx-auto max-w-6xl">
        {/* Back to Home if standalone */}
        {isStandalonePage && onBackToHome && (
          <div className="mb-8">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 rounded-xl border border-white/80 bg-white/90 hover:bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 hover:text-purple-700 transition cursor-pointer shadow-sm backdrop-blur-md"
            >
              <ArrowLeft size={15} className="text-purple-700" />
              <span>Kembali ke Beranda Portofolio</span>
            </button>
          </div>
        )}

        {/* Section Header Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="studio-card relative overflow-hidden rounded-3xl border border-white/85 p-6 sm:p-10 shadow-lg mb-10 bg-white/95 backdrop-blur-xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-[0.2em] text-purple-900 mb-4 shadow-2xs">
            <Sparkles size={14} className="text-purple-700" />
            <span>Karya Inovatif Media Pembelajaran Digital</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            SinauPy — Media Pembelajaran Python Interaktif
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl font-normal">
            <strong>SinauPy</strong> (<a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="text-purple-800 underline font-semibold hover:text-purple-950">sinaupy.vercel.app</a>) adalah platform media pembelajaran inovatif berbasis web yang saya rancang dan kembangkan untuk mendukung KBM mata pelajaran Informatika Fase E (Kelas X SMA). Platform ini menghadirkan pengalaman belajar komputasi yang ramah pemula, interaktif, dan kontekstual guna menumbuhkan kemandirian serta mengatasi rasa cemas siswa terhadap baris kode (<em>coding anxiety</em>).
          </p>

          {/* Quick Pillars */}
          <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs">
              <span className="block text-slate-600 font-bold uppercase tracking-wider text-[10px] font-mono">Tujuan Inovasi</span>
              <p className="font-semibold text-slate-900 mt-1 leading-snug">
                Mempermudah pemahaman logika dasar dan sintaks Python secara visual tanpa hambatan instalasi teknis.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs">
              <span className="block text-slate-600 font-bold uppercase tracking-wider text-[10px] font-mono">Sasaran Pengguna</span>
              <p className="font-semibold text-slate-900 mt-1 leading-snug">
                Peserta didik SMA Fase E / Kelas X dan guru Informatika sebagai media pendamping praktikum.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs">
              <span className="block text-slate-600 font-bold uppercase tracking-wider text-[10px] font-mono">Akses Platform</span>
              <p className="font-bold text-emerald-800 mt-1 leading-snug flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                Daring Terbuka (Vercel Cloud Deploy)
              </p>
            </div>
          </div>
        </motion.div>

        {/* Feature Grid Details */}
        <div className="grid gap-6 sm:grid-cols-3 mb-10">
          <div className="studio-card rounded-2xl p-6 bg-white/92 border border-white/85 shadow-md flex flex-col justify-between">
            <div>
              <div className="grid size-10 place-items-center rounded-xl bg-purple-100 text-purple-900 mb-3 border border-purple-200">
                <Code2 size={20} />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900">Eksplorasi Kode Langsung</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                Peserta didik dapat menguji coba logika program secara instan di peramban, mempelajari pesan kesalahan (*debugging*), dan mempraktikkan konsep variabel hingga perulangan.
              </p>
            </div>
          </div>

          <div className="studio-card rounded-2xl p-6 bg-white/92 border border-white/85 shadow-md flex flex-col justify-between">
            <div>
              <div className="grid size-10 place-items-center rounded-xl bg-indigo-100 text-indigo-900 mb-3 border border-indigo-200">
                <Laptop size={20} />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900">Scaffolding Berjenjang</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                Materi disusun bertingkat dari analogi kehidupan sehari-hari, representasi visual, starter code rumpang, hingga tantangan pemecahan masalah mandiri sesuai prinsip DUP.
              </p>
            </div>
          </div>

          <div className="studio-card rounded-2xl p-6 bg-white/92 border border-white/85 shadow-md flex flex-col justify-between">
            <div>
              <div className="grid size-10 place-items-center rounded-xl bg-emerald-100 text-emerald-900 mb-3 border border-emerald-200">
                <Heart size={20} />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900">Mendukung Growth Mindset</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                Dirancang dengan panduan komunikatif yang menanamkan bahwa syntax error adalah sahabat belajar terbaik untuk mengasah ketangguhan berpikir komputasional.
              </p>
            </div>
          </div>
        </div>

        {/* INTERACTIVE LIVE WEBSITE PREVIEW EMBED */}
        <div className={`studio-card overflow-hidden rounded-3xl border border-white/85 shadow-2xl bg-white/95 backdrop-blur-xl transition duration-300 ${isFullscreen ? "fixed inset-4 z-[9999] m-0 max-w-none" : ""}`}>
          {/* Mockup Browser Window Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-slate-100/90 px-5 py-3 text-xs font-mono">
            {/* Mac-style Window Controls */}
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-rose-400 inline-block"></span>
              <span className="size-3 rounded-full bg-amber-400 inline-block"></span>
              <span className="size-3 rounded-full bg-emerald-400 inline-block"></span>
              <span className="ml-2 font-bold text-slate-700 hidden sm:inline">SinauPy Browser Preview</span>
            </div>

            {/* URL Bar */}
            <div className="flex flex-1 max-w-md items-center justify-between rounded-xl border border-slate-200 bg-white px-3.5 py-1.5 text-xs text-slate-700 shadow-2xs mx-2">
              <span className="truncate font-semibold text-slate-800">{websiteUrl}</span>
              <button
                onClick={reloadIframe}
                className="text-slate-500 hover:text-slate-900 transition ml-2 cursor-pointer"
                title="Muat ulang pratinjau"
              >
                <RefreshCw size={13} />
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-800 hover:bg-slate-50 transition cursor-pointer shadow-2xs"
                title={isFullscreen ? "Kecilkan tampilan" : "Perbesar pratinjau"}
              >
                {isFullscreen ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
                <span className="hidden sm:inline">{isFullscreen ? "Perkecil" : "Layar Penuh"}</span>
              </button>

              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#ba83ca] via-[#79b3f4] to-[#41dfff] px-3.5 py-1 text-xs font-bold text-slate-950 hover:brightness-105 transition shadow-2xs cursor-pointer"
              >
                <span>Buka di Tab Baru</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* Iframe Live Web Container */}
          <div className="relative w-full bg-white" style={{ height: isFullscreen ? "calc(100vh - 120px)" : "680px" }}>
            <iframe
              key={iframeKey}
              src={websiteUrl}
              title="SinauPy Interactive Learning Platform"
              className="size-full border-0"
              allow="clipboard-write; clipboard-read"
              loading="lazy"
            />
          </div>

          {/* Bottom Bar Info */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 border-t border-slate-200 bg-slate-50/80 text-xs text-slate-700 font-medium">
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span>Website sedang aktif dan dapat dioperasikan langsung di atas</span>
            </span>

            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-purple-800 hover:text-purple-950 transition"
            >
              <span>Kunjungi https://sinaupy.vercel.app/</span>
              <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

