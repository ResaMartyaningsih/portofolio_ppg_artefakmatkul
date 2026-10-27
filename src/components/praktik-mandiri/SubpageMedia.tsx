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
      {/* HEADER SECTION IN FROSTED GLASS CARD */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="studio-card rounded-3xl border border-white/80 p-6 sm:p-9 shadow-lg bg-white/92 backdrop-blur-xl"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-emerald-900 mb-3 shadow-2xs">
          <Laptop size={13} className="text-emerald-600" />
          <span>Subhalaman Analisis 03</span>
        </div>
        <h1 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
          Analisis Media Pembelajaran yang Dipergunakan dalam Praktik Mengajar Mandiri
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl font-normal">
          Evaluasi efektivitas media presentasi Canva, lingkungan pemrograman IDE di laboratorium komputer SMAN 3 Yogyakarta, LKPD digital, dan kuis gamifikasi interaktif.
        </p>
      </motion.div>

      {/* 1 & 2. NAMA, JENIS, DOKUMENTASI, DAN TUJUAN PENGGUNAAN MEDIA */}
      <section className="studio-card rounded-2xl border border-white/80 p-6 sm:p-8 shadow-md bg-white/92 backdrop-blur-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-900 block mb-1">
              1 &amp; 2. Media Praktik Lapangan
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
              Dokumentasi &amp; Tujuan Penggunaan Media
            </h2>
          </div>
          <a
            href={PRAKTIK_MANDIRI_CONTEXT.driveFotoDokumentasi}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-900 transition"
          >
            <span>Buka Seluruh Foto Media di Drive</span>
            <ExternalLink size={13} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {data.daftarMedia.map((m, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200/90 bg-slate-50/80 p-5 flex flex-col justify-between group hover:border-emerald-300 hover:bg-white transition duration-200">
              <div>
                {/* Media Image / Preview */}
                {m.dokumentasi && (
                  <div className="relative mb-4 overflow-hidden rounded-xl border border-slate-200 aspect-video bg-slate-100">
                    <img
                      src={m.dokumentasi}
                      alt={m.nama}
                      className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-2 left-2 rounded-lg bg-slate-900/80 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono font-bold text-white border border-white/20">
                      {m.jenis}
                    </div>
                  </div>
                )}

                <h3 className="font-display text-base font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition">
                  {m.nama}
                </h3>
                <p className="text-xs text-slate-800 leading-relaxed mb-3 font-normal">
                  <strong className="text-emerald-950 font-semibold">Tujuan: </strong>
                  {m.tujuan}
                </p>
                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  {m.keterangan}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-600 font-medium">Tersedia di Lab &amp; Drive</span>
                <a
                  href={m.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900"
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
        <section className="studio-card rounded-2xl border border-white/80 p-6 shadow-md bg-white/92 backdrop-blur-xl">
          <div className="flex items-center gap-2 text-emerald-900 font-mono font-bold text-xs uppercase tracking-wider mb-2">
            <Sliders size={15} />
            <span>3. Kesesuaian Pedagogis</span>
          </div>
          <h2 className="font-display text-lg font-bold text-slate-900 mb-3">
            Kesesuaian Media dengan Materi &amp; Tujuan
          </h2>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed rounded-xl border border-slate-200/90 bg-slate-50/80 p-4 font-normal">
            {data.analisisKesesuaian}
          </p>
        </section>

        <section className="studio-card rounded-2xl border border-white/80 p-6 shadow-md bg-white/92 backdrop-blur-xl">
          <div className="flex items-center gap-2 text-emerald-900 font-mono font-bold text-xs uppercase tracking-wider mb-2">
            <Sparkles size={15} />
            <span>4. Aksesibilitas</span>
          </div>
          <h2 className="font-display text-lg font-bold text-slate-900 mb-3">
            Kemudahan Akses dan Penggunaan Media
          </h2>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed rounded-xl border border-slate-200/90 bg-slate-50/80 p-4 font-normal">
            {data.kemudahanAkses}
          </p>
        </section>
      </div>

      {/* 5. KETERLIBATAN PESERTA DIDIK KETIKA MENGGUNAKAN MEDIA */}
      <section className="studio-card rounded-2xl border border-white/80 p-6 sm:p-8 shadow-md bg-white/92 backdrop-blur-xl">
        <div className="flex items-center gap-2 text-emerald-900 font-mono font-bold text-xs uppercase tracking-wider mb-2">
          <Users2 size={15} />
          <span>5. Interaksi &amp; Keterlibatan Siswa</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-3">
          Keterlibatan Peserta Didik Ketika Menggunakan Media
        </h2>
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-5 text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
          {data.keterlibatanSiswa}
        </div>
      </section>

      {/* 6. KELEBIHAN DAN KETERBATASAN MEDIA */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="studio-card rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6 shadow-md backdrop-blur-xl">
          <h3 className="text-emerald-900 font-mono font-bold text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-700" />
            Kelebihan Media Pembelajaran
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800 font-normal">
            {data.evaluasiMedia.kelebihan.map((item, idx) => (
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
            Keterbatasan Media
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800 font-normal">
            {data.evaluasiMedia.keterbatasan.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="size-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 7 & 8. KENDALA NYATA & REFLEKSI RENCANA PERBAIKAN */}
      <section className="studio-card rounded-2xl border border-white/80 p-6 sm:p-8 shadow-md bg-white/92 backdrop-blur-xl space-y-6">
        <div>
          <div className="flex items-center gap-2 text-amber-900 font-mono font-bold text-xs uppercase tracking-wider mb-2">
            <ShieldAlert size={15} className="text-amber-700" />
            <span>7. Kendala Teknis / Pedagogis Riil</span>
          </div>
          <h2 className="font-display text-xl font-bold text-slate-900 mb-2">
            Kendala Berdasarkan Pengalaman Nyata di Laboratorium
          </h2>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed rounded-xl border border-slate-200/90 bg-slate-50/80 p-4 font-normal">
            {data.evaluasiMedia.kendalaRiil}
          </p>
        </div>

        <div className="pt-6 border-t border-slate-200">
          <div className="flex items-center gap-2 text-emerald-900 font-mono font-bold text-xs uppercase tracking-wider mb-2">
            <Lightbulb size={15} className="text-emerald-700" />
            <span>8. Refleksi &amp; Rencana Perbaikan</span>
          </div>
          <h2 className="font-display text-xl font-bold text-slate-900 mb-2">
            Refleksi Efektivitas Media &amp; Rencana Perbaikan
          </h2>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed rounded-xl border border-emerald-200 bg-emerald-50/60 p-4 font-normal">
            {data.evaluasiMedia.refleksiDanRencana}
          </p>
        </div>
      </section>
    </div>
  );
}
