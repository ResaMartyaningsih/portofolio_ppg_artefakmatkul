import React from "react";
import { motion } from "framer-motion";
import {
  Video,
  Play,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Clock,
  MessageSquare,
  Users,
  Compass,
  Lightbulb,
  Sparkles
} from "lucide-react";
import { videoPraktikData, PRAKTIK_MANDIRI_CONTEXT } from "../../data/praktikMandiriData";

export function SubpageVideo() {
  const data = videoPraktikData;

  // Convert Google Drive view URL to preview URL for iframe embed
  const driveEmbedUrl = data.videoMeta.videoUrl.replace("/view?usp=sharing", "/preview");

  return (
    <div className="space-y-10">
      {/* HEADER SECTION */}
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-1 text-xs font-semibold text-pink-300 mb-3">
          <Video size={13} />
          <span>Subhalaman Analisis 04</span>
        </div>
        <h1 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
          Analisis Video Pelaksanaan Praktik Mengajar Mandiri
        </h1>
        <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl">
          Kajian klinis observasi rekaman video pelaksanaan KBM mandiri (PPL II) di laboratorium komputer SMA Negeri 3 Yogyakarta, menelaah pengelolaan kelas, komunikasi pedagogis, dan keterlibatan peserta didik.
        </p>
      </div>

      {/* 1 & 2. AREA VIDEO EMBED & INFORMASI KONTEKS PELAKSANAAN */}
      <section className="glass rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col lg:grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          {/* Video Player Card / Embed */}
          <div className="w-full">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
              <iframe
                src={driveEmbedUrl}
                title={data.videoMeta.judul}
                className="h-full w-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-zinc-400">
              <span className="flex items-center gap-1.5 text-pink-400 font-semibold">
                <Play size={13} />
                Rekaman Resmi Google Drive
              </span>
              <a
                href={data.videoMeta.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 transition font-semibold"
              >
                <span>Buka Video di Tab Baru</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Context & Metadata */}
          <div className="space-y-4 w-full">
            <span className="text-xs font-semibold uppercase tracking-wider text-pink-400 block">
              Informasi Pelaksanaan Praktik
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
              {data.videoMeta.judul}
            </h2>

            <div className="space-y-2.5 text-xs text-zinc-300">
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 flex justify-between">
                <span className="text-zinc-400">Sasaran Kelas:</span>
                <span className="font-semibold text-white">{data.videoMeta.kelas}</span>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 flex justify-between">
                <span className="text-zinc-400">Lokasi:</span>
                <span className="font-semibold text-white">{data.videoMeta.lokasi}</span>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 flex justify-between">
                <span className="text-zinc-400">Materi KBM:</span>
                <span className="font-semibold text-indigo-300">{data.videoMeta.materi}</span>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 flex justify-between">
                <span className="text-zinc-400">Status Dokumentasi:</span>
                <span className="font-semibold text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={13} />
                  {data.videoMeta.statusVideo}
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed border-t border-white/5 pt-3">
              {data.konteksPelaksanaan}
            </p>
          </div>
        </div>
      </section>

      {/* 3 & 4. TAHAPAN PEMBELAJARAN: PEMBUKAAN, INTI, PENUTUP */}
      <section className="glass rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl">
        <div className="flex items-center gap-2 text-pink-400 font-semibold text-xs uppercase tracking-wider mb-2">
          <Clock size={14} />
          <span>3 &amp; 4. Observasi Tahapan KBM</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-6">
          Analisis Kegiatan Pembukaan, Inti, dan Penutup
        </h2>

        <div className="space-y-5">
          {data.tahapanPembelajaran.map((tahap, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="grid size-6 place-items-center rounded-lg bg-pink-500/20 text-pink-300 text-xs font-bold">
                  0{idx + 1}
                </span>
                <h3 className="font-display text-base font-bold text-white">
                  {tahap.fase}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-xs sm:text-sm text-zinc-300 leading-relaxed pt-2">
                <div className="rounded-xl border border-white/5 bg-black/20 p-4">
                  <strong className="text-pink-300 block mb-1">Deskripsi Observasi Nyata:</strong>
                  <p className="text-zinc-400">{tahap.observasi}</p>
                </div>
                <div className="rounded-xl border border-indigo-500/20 bg-indigo-950/20 p-4">
                  <strong className="text-indigo-300 block mb-1">Analisis Pedagogis:</strong>
                  <p className="text-zinc-300">{tahap.analisis}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5, 6, 7. KOMUNIKASI GURU, KETERLIBATAN SISWA, DAN PENGELOLAAN KELAS */}
      <div className="grid md:grid-cols-3 gap-6">
        <section className="glass rounded-2xl border border-white/10 p-5 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-pink-400 font-semibold text-xs uppercase tracking-wider mb-2">
              <MessageSquare size={14} />
              <span>5. Interaksi Verbal</span>
            </div>
            <h3 className="font-display text-base font-bold text-white mb-3">
              Komunikasi &amp; Relasi Guru-Siswa
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {data.komunikasiDanInteraksi}
            </p>
          </div>
        </section>

        <section className="glass rounded-2xl border border-white/10 p-5 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs uppercase tracking-wider mb-2">
              <Users size={14} />
              <span>6. Keaktifan Belajar</span>
            </div>
            <h3 className="font-display text-base font-bold text-white mb-3">
              Keterlibatan Peserta Didik
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {data.keterlibatanSiswa}
            </p>
          </div>
        </section>

        <section className="glass rounded-2xl border border-white/10 p-5 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider mb-2">
              <Compass size={14} />
              <span>7. Manajemen Waktu</span>
            </div>
            <h3 className="font-display text-base font-bold text-white mb-3">
              Pengelolaan Kelas &amp; Alokasi
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {data.pengelolaanKelasDanWaktu}
            </p>
          </div>
        </section>
      </div>

      {/* 8. MOMEN PENTING YANG TERLIHAT PADA VIDEO */}
      <section className="glass rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl">
        <div className="flex items-center gap-2 text-pink-400 font-semibold text-xs uppercase tracking-wider mb-2">
          <Sparkles size={14} />
          <span>8. Momen Kunci Observasi</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
          Momen Penting yang Terlihat pada Rekaman Video
        </h2>
        <p className="text-xs text-zinc-400 mb-6">
          Berdasarkan rekaman pembelajaran faktual di laboratorium komputer tanpa mengarang data fiktif:
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {data.momenPentingVideo.map((item, idx) => (
            <div key={idx} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <span className="text-xs font-bold text-pink-300 block mb-1">
                Momen {idx + 1}: {item.momen}
              </span>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {item.deskripsi}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 9 & 10. KEKUATAN & ASPEK PENINGKATAN */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.02] p-6 shadow-xl">
          <h3 className="text-emerald-400 font-semibold text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
            <CheckCircle2 size={16} />
            Kekuatan Pelaksanaan KBM
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
            {data.kekuatanPelaksanaan.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="size-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass rounded-2xl border border-amber-500/20 bg-amber-500/[0.02] p-6 shadow-xl">
          <h3 className="text-amber-400 font-semibold text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
            <AlertCircle size={16} />
            Aspek yang Perlu Ditingkatkan
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
            {data.aspekPeningkatan.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="size-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 11. REFLEKSI DAN RENCANA TINDAK LANJUT */}
      <section className="glass rounded-2xl border border-pink-500/30 bg-gradient-to-br from-pink-950/20 to-purple-950/20 p-6 sm:p-8 shadow-xl">
        <div className="flex items-center gap-2 text-pink-400 font-semibold text-xs uppercase tracking-wider mb-2">
          <Lightbulb size={16} />
          <span>Refleksi Klinis &amp; Rencana Tindak Lanjut</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
          Refleksi Guru Terhadap Rekaman Mengajar Diri Sendiri
        </h2>
        <p className="text-xs sm:text-sm text-zinc-300 italic pl-3 border-l-2 border-pink-500/40 mb-4 leading-relaxed">
          "{data.refleksiDanTindakLanjut.refleksi}"
        </p>
        <div className="pt-2">
          <strong className="text-white text-xs sm:text-sm block mb-1">Rencana Tindak Lanjut:</strong>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            {data.refleksiDanTindakLanjut.tindakLanjut}
          </p>
        </div>
      </section>
    </div>
  );
}
