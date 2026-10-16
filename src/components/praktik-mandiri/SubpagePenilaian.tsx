import React from "react";
import { motion } from "framer-motion";
import {
  CheckSquare,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Target,
  FileCheck2,
  Table,
  SlidersHorizontal,
  Lightbulb
} from "lucide-react";
import { instrumenPenilaianData, PRAKTIK_MANDIRI_CONTEXT } from "../../data/praktikMandiriData";

export function SubpagePenilaian() {
  const data = instrumenPenilaianData;

  return (
    <div className="space-y-10">
      {/* HEADER SECTION */}
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-300 mb-3">
          <CheckSquare size={13} />
          <span>Subhalaman Analisis 06</span>
        </div>
        <h1 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
          Instrumen Penilaian yang Dirancang Beserta Analisisnya
        </h1>
        <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl">
          Kajian instrumen asesmen autentik pembelajaran komputasi Python: kuis diagnostik, lembar observasi proses praktikum, rubrik analitik 4 skala pemahaman, evaluasi formatif gamifikasi, serta rencana perbaikannya.
        </p>
      </div>

      {/* OVERVIEW / DOKUMEN TAUTAN */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6"
      >
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 block">
            Prinsip Asesmen Komputasi
          </span>
          <h2 className="font-display text-xl font-bold text-white">
            Asesmen Otentik Berorientasi Proses Belajar
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-2xl">
            {data.ringkasan}
          </p>
        </div>

        <a
          href={data.dokumenLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-purple-500/20 hover:bg-purple-500 transition shrink-0"
        >
          <FileCheck2 size={14} />
          <span>Buka Berkas Instrumen di Drive</span>
          <ExternalLink size={13} />
        </a>
      </motion.section>

      {/* 1 s.d. 5. DAFTAR INSTRUMEN PENILAIAN */}
      <section className="glass rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl">
        <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Target size={20} className="text-purple-400" />
          Daftar Instrumen Penilaian yang Dirancang
        </h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {data.daftarInstrumen.map((inst, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-3 hover:border-purple-500/30 transition">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-purple-300 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20">
                  {inst.jenis}
                </span>
                <span className="text-[10px] text-zinc-500 font-semibold">Instrumen 0{idx + 1}</span>
              </div>

              <h3 className="font-display text-base font-bold text-white">
                {inst.nama}
              </h3>

              <div className="space-y-1.5 text-xs text-zinc-300 leading-relaxed">
                <p>
                  <strong className="text-purple-300">Tujuan Penilaian: </strong>
                  {inst.tujuan}
                </p>
                <p>
                  <strong className="text-zinc-400">Kompetensi yang Dinilai: </strong>
                  {inst.kompetensiDinilai}
                </p>
              </div>

              <div className="pt-2 border-t border-white/5 text-[11px] text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 size={12} />
                <span>Format: {inst.formatDokumen}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. INDIKATOR, KRITERIA, DAN MATRIKS RUBRIK ANALITIK 4 SKALA */}
      <section className="glass rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl">
        <div className="flex items-center gap-2 text-purple-400 font-semibold text-xs uppercase tracking-wider mb-2">
          <Table size={14} />
          <span>Matriks Kinerja Koding</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
          Indikator, Kriteria, dan Rubrik Penilaian Produk Kode Python
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mb-6">
          Rubrik analitik berjenjang membagi ketercapaian kompetensi ke dalam 4 skala: Baru Memulai (1), Berkembang (2), Cakap (3), dan Mahir (4).
        </p>

        <div className="space-y-6">
          {data.tabelRubrik.kriteriaKinerja.map((rubrik, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
                <div className="flex items-center gap-2">
                  <span className="grid size-6 place-items-center rounded-lg bg-purple-500/20 text-purple-300 text-xs font-bold">
                    {idx + 1}
                  </span>
                  <h3 className="font-display text-base font-bold text-white">
                    {rubrik.kriteria}
                  </h3>
                </div>
                <span className="text-xs font-semibold text-purple-300 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20 self-start sm:self-auto">
                  Bobot Penilaian: {rubrik.bobot}
                </span>
              </div>

              <p className="text-xs text-zinc-300">
                <strong className="text-zinc-400">Indikator Pencapaian: </strong>
                {rubrik.indikator}
              </p>

              {/* 4 Skala Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div className="rounded-xl border border-red-500/20 bg-red-950/10 p-3 space-y-1">
                  <span className="font-bold text-red-300 block text-[11px] uppercase tracking-wider">
                    Baru Memulai (1)
                  </span>
                  <p className="text-zinc-400 leading-relaxed">{rubrik.skala.baruMemulai}</p>
                </div>
                <div className="rounded-xl border border-amber-500/20 bg-amber-950/10 p-3 space-y-1">
                  <span className="font-bold text-amber-300 block text-[11px] uppercase tracking-wider">
                    Berkembang (2)
                  </span>
                  <p className="text-zinc-400 leading-relaxed">{rubrik.skala.berkembang}</p>
                </div>
                <div className="rounded-xl border border-sky-500/20 bg-sky-950/10 p-3 space-y-1">
                  <span className="font-bold text-sky-300 block text-[11px] uppercase tracking-wider">
                    Cakap (3)
                  </span>
                  <p className="text-zinc-300 leading-relaxed">{rubrik.skala.cakap}</p>
                </div>
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/10 p-3 space-y-1">
                  <span className="font-bold text-emerald-300 block text-[11px] uppercase tracking-wider">
                    Mahir (4)
                  </span>
                  <p className="text-zinc-200 leading-relaxed">{rubrik.skala.mahir}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7 & 8. ANALISIS KESESUAIAN TUJUAN & KEJELASAN INDIKATOR */}
      <div className="grid md:grid-cols-2 gap-6">
        <section className="glass rounded-2xl border border-white/10 p-6 shadow-xl">
          <div className="flex items-center gap-2 text-purple-400 font-semibold text-xs uppercase tracking-wider mb-2">
            <SlidersHorizontal size={14} />
            <span>7. Kesesuaian dengan Tujuan</span>
          </div>
          <h2 className="font-display text-lg font-bold text-white mb-3">
            Analisis Keselarasan Tujuan Pembelajaran
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed rounded-xl border border-white/5 bg-white/[0.02] p-4">
            {data.analisisKesesuaianTujuan.uraian}
          </p>
        </section>

        <section className="glass rounded-2xl border border-white/10 p-6 shadow-xl">
          <div className="flex items-center gap-2 text-purple-400 font-semibold text-xs uppercase tracking-wider mb-2">
            <CheckCircle2 size={14} />
            <span>8. Kejelasan Kriteria</span>
          </div>
          <h2 className="font-display text-lg font-bold text-white mb-3">
            Analisis Kejelasan Indikator &amp; Rubrik
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed rounded-xl border border-white/5 bg-white/[0.02] p-4">
            {data.analisisKejelasanIndikator.uraian}
          </p>
        </section>
      </div>

      {/* 9. ANALISIS HASIL PENILAIAN NYATA (BERDASARKAN BUKTI KELAS) */}
      <section className="glass rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl">
        <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider mb-2">
          <CheckCircle2 size={14} />
          <span>9. Hasil Penilaian Faktual</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
          Analisis Hasil Penilaian Praktik Mengajar
        </h2>
        <p className="text-xs text-zinc-400 mb-4 italic">
          {data.analisisHasilPenilaian.catatanRealistis}
        </p>

        <div className="space-y-3">
          {data.analisisHasilPenilaian.temuan.map((t, idx) => (
            <div key={idx} className="flex items-start gap-3 rounded-xl border border-emerald-500/20 bg-emerald-950/10 p-4 text-xs sm:text-sm text-zinc-300">
              <span className="size-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
              <span>{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 10 & 11. KELEBIHAN, KETERBATASAN, DAN RENCANA PERBAIKAN INSTRUMEN */}
      <section className="glass rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.02] p-5">
            <h3 className="text-emerald-400 font-semibold text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
              <CheckCircle2 size={16} />
              Kelebihan Instrumen Penilaian
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
              {data.evaluasiInstrumen.kelebihan.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="size-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.02] p-5">
            <h3 className="text-amber-400 font-semibold text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
              <AlertCircle size={16} />
              Keterbatasan Instrumen
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
              {data.evaluasiInstrumen.keterbatasan.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="size-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10">
          <div className="flex items-center gap-2 text-purple-400 font-semibold text-xs uppercase tracking-wider mb-2">
            <Lightbulb size={16} />
            <span>Rencana Perbaikan Instrumen</span>
          </div>
          <h2 className="font-display text-lg font-bold text-white mb-3">
            Rencana Tindak Lanjut Penyempurnaan Asesmen
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-300">
            {data.evaluasiInstrumen.rencanaPerbaikan.map((plan, idx) => (
              <div key={idx} className="rounded-xl border border-purple-500/30 bg-purple-950/20 p-4">
                <span className="font-bold text-purple-300 block mb-1">Rencana 0{idx + 1}</span>
                <p className="text-zinc-300 leading-relaxed">{plan}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
