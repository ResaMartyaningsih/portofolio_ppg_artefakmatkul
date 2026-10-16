import React from "react";
import { motion } from "framer-motion";
import {
  Laptop,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Sliders,
  Users2,
  ShieldAlert,
  Lightbulb,
  Sparkles
} from "lucide-react";
import { mediaPembelajaranData, PRAKTIK_MANDIRI_CONTEXT } from "../../data/praktikMandiriData";
import { EvidenceCard, EvidencePlaceholder } from "./EvidenceCard";

export function SubpageMedia() {
  const data = mediaPembelajaranData;

  return (
    <div className="space-y-10">
      {/* HEADER SECTION */}
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300 mb-3">
          <Laptop size={13} />
          <span>Subhalaman Analisis 03</span>
        </div>
        <h1 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
          Analisis Media Pembelajaran yang Dipergunakan dalam Praktik Mengajar Mandiri
        </h1>
        <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl">
          Evaluasi efektivitas media presentasi Canva, lingkungan pemrograman IDE di laboratorium komputer SMAN 3 Yogyakarta, LKPD digital, dan kuis gamifikasi interaktif.
        </p>
      </div>

      {/* 1 & 2. NAMA, JENIS, DOKUMENTASI, DAN TUJUAN PENGGUNAAN MEDIA */}
      <section className="glass rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block mb-1">
              1 &amp; 2. Media Praktik Lapangan
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
              Dokumentasi &amp; Tujuan Penggunaan Media
            </h2>
          </div>
          <a
            href={PRAKTIK_MANDIRI_CONTEXT.driveFotoDokumentasi}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
          >
            <span>Buka Seluruh Foto Media di Drive</span>
            <ExternalLink size={13} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {data.daftarMedia.map((m, idx) => (
            <div key={idx} className="glass rounded-2xl border border-white/10 p-5 flex flex-col justify-between group hover:border-emerald-500/30 transition">
              <div>
                {/* Media Image / Preview */}
                {m.dokumentasi && (
                  <div className="relative mb-4 overflow-hidden rounded-xl border border-white/10 aspect-video bg-zinc-900">
                    <img
                      src={m.dokumentasi}
                      alt={m.nama}
                      className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-2 left-2 rounded-lg bg-black/60 backdrop-blur-md px-2.5 py-1 text-[10px] font-semibold text-white border border-white/10">
                      {m.jenis}
                    </div>
                  </div>
                )}

                <h3 className="font-display text-base font-bold text-white mb-2 group-hover:text-emerald-300 transition">
                  {m.nama}
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed mb-3">
                  <strong className="text-emerald-400">Tujuan: </strong>
                  {m.tujuan}
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {m.keterangan}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-zinc-500">Tersedia di Lab &amp; Drive</span>
                <a
                  href={m.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  <span>Buka Berkas</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3 & 4. KESESUAIAN DENGAN MATERI & KEMUDAHAN AKSES */}
      <div className="grid md:grid-cols-2 gap-6">
        <section className="glass rounded-2xl border border-white/10 p-6 shadow-xl">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider mb-2">
            <Sliders size={14} />
            <span>3. Kesesuaian Pedagogis</span>
          </div>
          <h2 className="font-display text-lg font-bold text-white mb-3">
            Kesesuaian Media dengan Materi &amp; Tujuan
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed rounded-xl border border-white/5 bg-white/[0.02] p-4">
            {data.analisisKesesuaian}
          </p>
        </section>

        <section className="glass rounded-2xl border border-white/10 p-6 shadow-xl">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider mb-2">
            <Sparkles size={14} />
            <span>4. Aksesibilitas</span>
          </div>
          <h2 className="font-display text-lg font-bold text-white mb-3">
            Kemudahan Akses dan Penggunaan Media
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed rounded-xl border border-white/5 bg-white/[0.02] p-4">
            {data.kemudahanAkses}
          </p>
        </section>
      </div>

      {/* 5. KETERLIBATAN PESERTA DIDIK KETIKA MENGGUNAKAN MEDIA */}
      <section className="glass rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl">
        <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider mb-2">
          <Users2 size={14} />
          <span>5. Interaksi &amp; Keterlibatan Siswa</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
          Keterlibatan Peserta Didik Ketika Menggunakan Media
        </h2>
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
          {data.keterlibatanSiswa}
        </div>
      </section>

      {/* 6. KELEBIHAN DAN KETERBATASAN MEDIA */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.02] p-6 shadow-xl">
          <h3 className="text-emerald-400 font-semibold text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
            <CheckCircle2 size={16} />
            Kelebihan Media Pembelajaran
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
            {data.evaluasiMedia.kelebihan.map((item, idx) => (
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
            Keterbatasan Media
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
            {data.evaluasiMedia.keterbatasan.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="size-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 7 & 8. KENDALA NYATA & REFLEKSI RENCANA PERBAIKAN */}
      <section className="glass rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl space-y-6">
        <div>
          <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-wider mb-2">
            <ShieldAlert size={14} />
            <span>7. Kendala Teknis / Pedagogis Riil</span>
          </div>
          <h2 className="font-display text-xl font-bold text-white mb-2">
            Kendala Berdasarkan Pengalaman Nyata di Laboratorium
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed rounded-xl border border-white/5 bg-white/[0.02] p-4">
            {data.evaluasiMedia.kendalaRiil}
          </p>
        </div>

        <div className="pt-6 border-t border-white/10">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider mb-2">
            <Lightbulb size={14} />
            <span>8. Refleksi &amp; Rencana Perbaikan</span>
          </div>
          <h2 className="font-display text-xl font-bold text-white mb-2">
            Refleksi Efektivitas Media &amp; Rencana Perbaikan
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-4">
            {data.evaluasiMedia.refleksiDanRencana}
          </p>
        </div>
      </section>
    </div>
  );
}
