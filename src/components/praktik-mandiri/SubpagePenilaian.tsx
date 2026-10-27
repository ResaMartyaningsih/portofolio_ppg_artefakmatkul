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
      {/* HEADER SECTION IN FROSTED GLASS CARD */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="studio-card rounded-3xl border border-white/80 p-6 sm:p-9 shadow-lg bg-white/92 backdrop-blur-xl"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-purple-900 mb-3 shadow-2xs">
          <CheckSquare size={13} className="text-purple-600" />
          <span>Subhalaman Analisis 06</span>
        </div>
        <h1 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
          Instrumen Penilaian yang Dirancang Beserta Analisisnya
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl font-normal">
          Kajian instrumen asesmen autentik pembelajaran komputasi Python: kuis diagnostik, lembar observasi proses praktikum, rubrik analitik 4 skala pemahaman, evaluasi formatif gamifikasi, serta rencana perbaikannya.
        </p>
      </motion.div>

      {/* OVERVIEW / DOKUMEN TAUTAN */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="studio-card rounded-2xl border border-white/80 p-6 sm:p-8 shadow-md bg-white/92 backdrop-blur-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6"
      >
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-900 block">
            Prinsip Asesmen Komputasi
          </span>
          <h2 className="font-display text-xl font-bold text-slate-900">
            Asesmen Otentik Berorientasi Proses Belajar
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-2xl font-normal">
            {data.ringkasan}
          </p>
        </div>

        <a
          href={data.dokumenLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-purple-700 hover:bg-purple-800 px-4 py-2.5 text-xs font-bold text-white shadow-md transition shrink-0"
        >
          <FileCheck2 size={14} />
          <span>Buka Berkas Instrumen di Drive</span>
          <ExternalLink size={13} />
        </a>
      </motion.section>

      {/* 1 s.d. 5. DAFTAR INSTRUMEN PENILAIAN */}
      <section className="studio-card rounded-2xl border border-white/80 p-6 sm:p-8 shadow-md bg-white/92 backdrop-blur-xl">
        <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Target size={20} className="text-purple-700" />
          <span>Daftar Instrumen Penilaian yang Dirancang</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {data.daftarInstrumen.map((inst, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200/90 bg-slate-50/80 p-5 space-y-3 hover:border-purple-300 hover:bg-white transition duration-200">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-purple-900 bg-purple-100 px-2.5 py-0.5 rounded-md border border-purple-200">
                  {inst.jenis}
                </span>
                <span className="text-[10px] font-mono text-slate-600 font-bold uppercase">Instrumen 0{idx + 1}</span>
              </div>

              <h3 className="font-display text-base font-bold text-slate-900">
                {inst.nama}
              </h3>

              <div className="space-y-1.5 text-xs text-slate-800 leading-relaxed">
                <p>
                  <strong className="text-purple-950 font-bold">Tujuan Penilaian: </strong>
                  <span className="text-slate-700 font-normal">{inst.tujuan}</span>
                </p>
                <p>
                  <strong className="text-slate-900 font-bold">Kompetensi yang Dinilai: </strong>
                  <span className="text-slate-700 font-normal">{inst.kompetensiDinilai}</span>
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200 text-[11px] text-emerald-700 font-semibold flex items-center gap-1.5">
                <CheckCircle2 size={13} />
                <span>Format: {inst.formatDokumen}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. INDIKATOR, KRITERIA, DAN MATRIKS RUBRIK ANALITIK 4 SKALA */}
      <section className="studio-card rounded-2xl border border-white/80 p-6 sm:p-8 shadow-md bg-white/92 backdrop-blur-xl">
        <div className="flex items-center gap-2 text-purple-900 font-mono font-bold text-xs uppercase tracking-wider mb-2">
          <Table size={15} />
          <span>Matriks Kinerja Koding</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-2">
          Indikator, Kriteria, dan Rubrik Penilaian Produk Kode Python
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 mb-6 font-normal">
          Rubrik analitik berjenjang membagi ketercapaian kompetensi ke dalam 4 skala: Baru Memulai (1), Berkembang (2), Cakap (3), dan Mahir (4).
        </p>

        <div className="space-y-6">
          {data.tabelRubrik.kriteriaKinerja.map((rubrik, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200/90 bg-slate-50/80 p-5 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <span className="grid size-6 place-items-center rounded-lg bg-purple-100 text-purple-900 text-xs font-mono font-bold">
                    {idx + 1}
                  </span>
                  <h3 className="font-display text-base font-bold text-slate-900">
                    {rubrik.kriteria}
                  </h3>
                </div>
                <span className="text-xs font-mono font-bold text-purple-900 bg-purple-100 px-2.5 py-0.5 rounded-md border border-purple-200 self-start sm:self-auto">
                  Bobot Penilaian: {rubrik.bobot}
                </span>
              </div>

              <p className="text-xs text-slate-800">
                <strong className="text-slate-900 font-bold">Indikator Pencapaian: </strong>
                <span className="text-slate-700 font-normal">{rubrik.indikator}</span>
              </p>

              {/* 4 Skala Cards with High Contrast Colors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div className="rounded-xl border border-rose-300 bg-rose-50/90 p-3.5 space-y-1.5 shadow-2xs">
                  <span className="font-mono font-bold text-rose-900 block text-[11px] uppercase tracking-wider">
                    Baru Memulai (1)
                  </span>
                  <p className="text-slate-800 leading-relaxed font-normal">{rubrik.skala.baruMemulai}</p>
                </div>
                <div className="rounded-xl border border-amber-300 bg-amber-50/90 p-3.5 space-y-1.5 shadow-2xs">
                  <span className="font-mono font-bold text-amber-900 block text-[11px] uppercase tracking-wider">
                    Berkembang (2)
                  </span>
                  <p className="text-slate-800 leading-relaxed font-normal">{rubrik.skala.berkembang}</p>
                </div>
                <div className="rounded-xl border border-sky-300 bg-sky-50/90 p-3.5 space-y-1.5 shadow-2xs">
                  <span className="font-mono font-bold text-sky-900 block text-[11px] uppercase tracking-wider">
                    Cakap (3)
                  </span>
                  <p className="text-slate-800 leading-relaxed font-normal">{rubrik.skala.cakap}</p>
                </div>
                <div className="rounded-xl border border-emerald-300 bg-emerald-50/90 p-3.5 space-y-1.5 shadow-2xs">
                  <span className="font-mono font-bold text-emerald-900 block text-[11px] uppercase tracking-wider">
                    Mahir (4)
                  </span>
                  <p className="text-slate-800 leading-relaxed font-normal">{rubrik.skala.mahir}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7 & 8. ANALISIS KESESUAIAN TUJUAN & KEJELASAN INDIKATOR */}
      <div className="grid md:grid-cols-2 gap-6">
        <section className="studio-card rounded-2xl border border-white/80 p-6 shadow-md bg-white/92 backdrop-blur-xl">
          <div className="flex items-center gap-2 text-purple-900 font-mono font-bold text-xs uppercase tracking-wider mb-2">
            <SlidersHorizontal size={15} />
            <span>7. Kesesuaian dengan Tujuan</span>
          </div>
          <h2 className="font-display text-lg font-bold text-slate-900 mb-3">
            Analisis Keselarasan Tujuan Pembelajaran
          </h2>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed rounded-xl border border-slate-200/90 bg-slate-50/80 p-4 font-normal">
            {data.analisisKesesuaianTujuan.uraian}
          </p>
        </section>

        <section className="studio-card rounded-2xl border border-white/80 p-6 shadow-md bg-white/92 backdrop-blur-xl">
          <div className="flex items-center gap-2 text-purple-900 font-mono font-bold text-xs uppercase tracking-wider mb-2">
            <CheckCircle2 size={15} className="text-purple-700" />
            <span>8. Kejelasan Kriteria</span>
          </div>
          <h2 className="font-display text-lg font-bold text-slate-900 mb-3">
            Analisis Kejelasan Indikator &amp; Rubrik
          </h2>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed rounded-xl border border-slate-200/90 bg-slate-50/80 p-4 font-normal">
            {data.analisisKejelasanIndikator.uraian}
          </p>
        </section>
      </div>

      {/* 9. ANALISIS HASIL PENILAIAN NYATA (BERDASARKAN BUKTI KELAS) */}
      <section className="studio-card rounded-2xl border border-white/80 p-6 sm:p-8 shadow-md bg-white/92 backdrop-blur-xl">
        <div className="flex items-center gap-2 text-emerald-900 font-mono font-bold text-xs uppercase tracking-wider mb-2">
          <CheckCircle2 size={15} className="text-emerald-700" />
          <span>9. Hasil Penilaian Faktual</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-2">
          Analisis Hasil Penilaian Praktik Mengajar
        </h2>
        <p className="text-xs text-slate-600 mb-4 italic font-medium">
          {data.analisisHasilPenilaian.catatanRealistis}
        </p>

        <div className="space-y-3">
          {data.analisisHasilPenilaian.temuan.map((t, idx) => (
            <div key={idx} className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50/80 p-4 text-xs sm:text-sm text-slate-800">
              <span className="size-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
              <span className="font-normal">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 10 & 11. KELEBIHAN, KETERBATASAN, DAN RENCANA PERBAIKAN INSTRUMEN */}
      <section className="studio-card rounded-2xl border border-white/80 p-6 sm:p-8 shadow-md bg-white/92 backdrop-blur-xl space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-5">
            <h3 className="text-emerald-900 font-mono font-bold text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-700" />
              Kelebihan Instrumen Penilaian
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-800 font-normal">
              {data.evaluasiInstrumen.kelebihan.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="size-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-5">
            <h3 className="text-amber-900 font-mono font-bold text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
              <AlertCircle size={16} className="text-amber-700" />
              Keterbatasan Instrumen
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-800 font-normal">
              {data.evaluasiInstrumen.keterbatasan.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="size-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200">
          <div className="flex items-center gap-2 text-purple-900 font-mono font-bold text-xs uppercase tracking-wider mb-2">
            <Lightbulb size={16} className="text-purple-700" />
            <span>Rencana Perbaikan Instrumen</span>
          </div>
          <h2 className="font-display text-xl font-bold text-slate-900 mb-3">
            Rencana Tindak Lanjut Penyempurnaan Asesmen
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-800">
            {data.evaluasiInstrumen.rencanaPerbaikan.map((plan, idx) => (
              <div key={idx} className="rounded-xl border border-purple-200 bg-purple-50/70 p-4">
                <span className="font-mono font-bold text-purple-900 block mb-1">Rencana 0{idx + 1}</span>
                <p className="text-slate-800 leading-relaxed font-normal">{plan}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
