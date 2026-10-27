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
      {/* HEADER SECTION IN FROSTED GLASS CARD */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="studio-card rounded-3xl border border-white/80 p-6 sm:p-9 shadow-lg bg-white/92 backdrop-blur-xl"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-pink-900 mb-3 shadow-2xs">
          <Video size={13} className="text-pink-600" />
          <span>Subhalaman Analisis 04</span>
        </div>
        <h1 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
          Analisis Video Pelaksanaan Praktik Mengajar Mandiri
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl font-normal">
          Kajian klinis observasi rekaman video pelaksanaan KBM mandiri (PPL II) di laboratorium komputer SMA Negeri 3 Yogyakarta, menelaah pengelolaan kelas, komunikasi pedagogis, dan keterlibatan peserta didik.
        </p>
      </motion.div>

      {/* 1 & 2. AREA VIDEO EMBED & INFORMASI KONTEKS PELAKSANAAN */}
      <section className="studio-card rounded-2xl border border-white/80 p-6 sm:p-8 shadow-md bg-white/92 backdrop-blur-xl">
        <div className="flex flex-col lg:grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          {/* Video Player Card / Embed */}
          <div className="w-full">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-300 bg-slate-900 shadow-xl">
              <iframe
                src={driveEmbedUrl}
                title={data.videoMeta.judul}
                className="h-full w-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1.5 text-pink-700 font-bold">
                <Play size={13} className="fill-pink-700" />
                Rekaman Resmi Google Drive
              </span>
              <a
                href={data.videoMeta.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-indigo-700 hover:text-indigo-950 transition font-bold"
              >
                <span>Buka Video di Tab Baru</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Context & Metadata */}
          <div className="space-y-4 w-full">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-pink-900 block">
              Informasi Pelaksanaan Praktik
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
              {data.videoMeta.judul}
            </h2>

            <div className="space-y-2.5 text-xs text-slate-800">
              <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-3 flex justify-between">
                <span className="text-slate-600 font-medium">Sasaran Kelas:</span>
                <span className="font-bold text-slate-900">{data.videoMeta.kelas}</span>
              </div>
              <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-3 flex justify-between">
                <span className="text-slate-600 font-medium">Lokasi:</span>
                <span className="font-bold text-slate-900">{data.videoMeta.lokasi}</span>
              </div>
              <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-3 flex justify-between">
                <span className="text-slate-600 font-medium">Materi KBM:</span>
                <span className="font-bold text-indigo-700">{data.videoMeta.materi}</span>
              </div>
              <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-3 flex justify-between">
                <span className="text-slate-600 font-medium">Status Dokumentasi:</span>
                <span className="font-bold text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 size={13} />
                  {data.videoMeta.statusVideo}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed border-t border-slate-200 pt-3 font-normal">
              {data.konteksPelaksanaan}
            </p>
          </div>
        </div>
      </section>

      {/* 3 & 4. TAHAPAN PEMBELAJARAN: PEMBUKAAN, INTI, PENUTUP */}
      <section className="studio-card rounded-2xl border border-white/80 p-6 sm:p-8 shadow-md bg-white/92 backdrop-blur-xl">
        <div className="flex items-center gap-2 text-pink-900 font-mono font-bold text-xs uppercase tracking-wider mb-2">
          <Clock size={15} />
          <span>3 &amp; 4. Observasi Tahapan KBM</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-6">
          Analisis Kegiatan Pembukaan, Inti, dan Penutup
        </h2>

        <div className="space-y-5">
          {data.tahapanPembelajaran.map((tahap, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200/90 bg-slate-50/80 p-5 sm:p-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="grid size-6 place-items-center rounded-lg bg-pink-100 text-pink-900 text-xs font-mono font-bold">
                  0{idx + 1}
                </span>
                <h3 className="font-display text-base font-bold text-slate-900">
                  {tahap.fase}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-800 leading-relaxed pt-2">
                <div className="rounded-xl border border-pink-200 bg-pink-50/70 p-4">
                  <strong className="text-pink-950 font-bold block mb-1 font-mono text-xs uppercase tracking-wider">Deskripsi Observasi Nyata:</strong>
                  <p className="text-slate-700 font-normal">{tahap.observasi}</p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-4">
                  <strong className="text-indigo-950 font-bold block mb-1 font-mono text-xs uppercase tracking-wider">Analisis Pedagogis:</strong>
                  <p className="text-slate-700 font-normal">{tahap.analisis}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5, 6, 7. KOMUNIKASI GURU, KETERLIBATAN SISWA, DAN PENGELOLAAN KELAS */}
      <div className="grid md:grid-cols-3 gap-6">
        <section className="studio-card rounded-2xl border border-white/80 p-5 shadow-md bg-white/92 backdrop-blur-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-pink-900 font-mono font-bold text-xs uppercase tracking-wider mb-2">
              <MessageSquare size={15} />
              <span>5. Interaksi Verbal</span>
            </div>
            <h3 className="font-display text-base font-bold text-slate-900 mb-3">
              Komunikasi &amp; Relasi Guru-Siswa
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed font-normal">
              {data.komunikasiDanInteraksi}
            </p>
          </div>
        </section>

        <section className="studio-card rounded-2xl border border-white/80 p-5 shadow-md bg-white/92 backdrop-blur-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-indigo-900 font-mono font-bold text-xs uppercase tracking-wider mb-2">
              <Users size={15} />
              <span>6. Keaktifan Belajar</span>
            </div>
            <h3 className="font-display text-base font-bold text-slate-900 mb-3">
              Keterlibatan Peserta Didik
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed font-normal">
              {data.keterlibatanSiswa}
            </p>
          </div>
        </section>

        <section className="studio-card rounded-2xl border border-white/80 p-5 shadow-md bg-white/92 backdrop-blur-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-emerald-900 font-mono font-bold text-xs uppercase tracking-wider mb-2">
              <Compass size={15} />
              <span>7. Manajemen Waktu</span>
            </div>
            <h3 className="font-display text-base font-bold text-slate-900 mb-3">
              Pengelolaan Kelas &amp; Alokasi
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed font-normal">
              {data.pengelolaanKelasDanWaktu}
            </p>
          </div>
        </section>
      </div>

      {/* 8. MOMEN PENTING YANG TERLIHAT PADA VIDEO */}
      <section className="studio-card rounded-2xl border border-white/80 p-6 sm:p-8 shadow-md bg-white/92 backdrop-blur-xl">
        <div className="flex items-center gap-2 text-pink-900 font-mono font-bold text-xs uppercase tracking-wider mb-2">
          <Sparkles size={15} />
          <span>8. Momen Kunci Observasi</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-2">
          Momen Penting yang Terlihat pada Rekaman Video
        </h2>
        <p className="text-xs text-slate-600 mb-6 font-medium">
          Berdasarkan rekaman pembelajaran faktual di laboratorium komputer tanpa mengarang data fiktif:
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {data.momenPentingVideo.map((item, idx) => (
            <div key={idx} className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-5">
              <span className="text-xs font-mono font-bold text-pink-900 block mb-1">
                Momen {idx + 1}: {item.momen}
              </span>
              <p className="text-xs text-slate-700 leading-relaxed font-normal">
                {item.deskripsi}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 9 & 10. KEKUATAN & ASPEK PENINGKATAN */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="studio-card rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6 shadow-md backdrop-blur-xl">
          <h3 className="text-emerald-900 font-mono font-bold text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-700" />
            Kekuatan Pelaksanaan KBM
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800 font-normal">
            {data.kekuatanPelaksanaan.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="size-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="studio-card rounded-2xl border border-amber-200 bg-amber-50/70 p-6 shadow-md backdrop-blur-xl">
          <h3 className="text-amber-900 font-mono font-bold text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
            <AlertCircle size={16} className="text-amber-700" />
            Aspek yang Perlu Ditingkatkan
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800 font-normal">
            {data.aspekPeningkatan.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="size-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 11. REFLEKSI DAN RENCANA TINDAK LANJUT */}
      <section className="studio-card rounded-2xl border border-pink-200 bg-pink-50/60 p-6 sm:p-8 shadow-md backdrop-blur-xl">
        <div className="flex items-center gap-2 text-pink-900 font-mono font-bold text-xs uppercase tracking-wider mb-2">
          <Lightbulb size={16} className="text-pink-700" />
          <span>Refleksi Klinis &amp; Rencana Tindak Lanjut</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-3">
          Refleksi Guru Terhadap Rekaman Mengajar Diri Sendiri
        </h2>
        <p className="text-xs sm:text-sm text-slate-800 italic pl-3 border-l-4 border-pink-600 mb-4 leading-relaxed font-display">
          "{data.refleksiDanTindakLanjut.refleksi}"
        </p>
        <div className="pt-2">
          <strong className="text-slate-900 text-xs sm:text-sm block mb-1 font-mono font-bold uppercase tracking-wider">Rencana Tindak Lanjut:</strong>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            {data.refleksiDanTindakLanjut.tindakLanjut}
          </p>
        </div>
      </section>
    </div>
  );
}
