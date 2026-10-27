import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  CheckCircle2,
  Calendar,
  MapPin,
  ExternalLink,
  Award,
  Sparkles,
  ShieldCheck,
  Lightbulb,
  FileText
} from "lucide-react";
import { kegiatanNonmengajarData, PRAKTIK_MANDIRI_CONTEXT } from "../../data/praktikMandiriData";

export function SubpageNonmengajar() {
  const data = kegiatanNonmengajarData;

  return (
    <div className="space-y-10">
      {/* HEADER SECTION IN FROSTED GLASS CARD */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="studio-card rounded-3xl border border-white/80 p-6 sm:p-9 shadow-lg bg-white/92 backdrop-blur-xl"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-amber-900 mb-3 shadow-2xs">
          <Users size={13} className="text-amber-600" />
          <span>Subhalaman Analisis 05</span>
        </div>
        <h1 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
          Analisis Kegiatan Nonmengajar
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl font-normal">
          Dokumentasi dan kajian reflektif keterlibatan aktif dalam pembiasaan budaya 5S Padmanaba, pendampingan Gelar Karya P5 Kewirausahaan, kebugaran jasmani bersama warga sekolah, serta bimbingan keprofesian berkala di SMA Negeri 3 Yogyakarta.
        </p>
      </motion.div>

      {/* OVERVIEW / INTRO */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="studio-card rounded-2xl border border-white/80 p-6 sm:p-8 shadow-md bg-white/92 backdrop-blur-xl"
      >
        <div className="flex items-center gap-2 text-amber-900 font-mono font-bold text-xs uppercase tracking-wider mb-2">
          <Award size={15} />
          <span>Ekosistem Budaya Sekolah</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-3">
          Peran Pendidik dalam Membangun Iklim Sekolah
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
          {data.ringkasan}
        </p>
      </motion.section>

      {/* JURNAL HARIAN LOGBOOK NONMENGAJAR */}
      <div className="rounded-2xl border border-blue-200 bg-white/95 p-5 sm:p-6 shadow-md backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded bg-blue-100 px-2 py-0.5 text-[10px] font-mono font-bold text-blue-900">
              <FileText size={12} className="text-blue-700" />
              <span>Logbook Kegiatan Harian</span>
            </span>
            <span className="text-xs font-mono text-slate-500 font-medium">SMA Negeri 3 Yogyakarta</span>
          </div>
          <h3 className="font-display text-lg font-bold text-slate-900">
            Jurnal Harian Praktik Pengalaman Lapangan (PPL)
          </h3>
          <p className="text-xs text-slate-600 font-normal max-w-2xl leading-relaxed">
            Catatan logbook harian seluruh aktivitas nonmengajar (apel pagi, pembiasaan 5S Padmanaba, pendampingan P5 Kewirausahaan, tugas administrasi sekolah, dan bimbingan keprofesian) tercatat lengkap dalam jurnal harian resmi.
          </p>
        </div>
        <a
          href={PRAKTIK_MANDIRI_CONTEXT.jurnalHarianLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition shrink-0 cursor-pointer"
        >
          <FileText size={14} />
          <span>Buka Jurnal Harian (Google Docs)</span>
          <ExternalLink size={13} />
        </a>
      </div>

      {/* DAFTAR KEGIATAN NONMENGAJAR (DETAILED CARDS) */}
      <div className="space-y-8">
        {data.daftarKegiatan.map((keg, idx) => (
          <section
            key={keg.id}
            className="studio-card rounded-3xl border border-white/80 p-6 sm:p-8 shadow-md bg-white/92 backdrop-blur-xl space-y-6"
          >
            {/* Header: Title, Category & Photo */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2">
                  <span className="grid size-7 place-items-center rounded-lg bg-amber-100 text-amber-900 text-xs font-mono font-bold">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-900">
                    {keg.jenis}
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  {keg.namaKegiatan}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-1 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-indigo-700" />
                    {keg.waktu}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-emerald-700" />
                    {keg.tempat}
                  </span>
                </div>
              </div>

              {/* Photo Box */}
              {keg.foto && (
                <div className="lg:w-72 shrink-0">
                  <div className="relative overflow-hidden rounded-xl border border-slate-200 aspect-[4/3] bg-slate-100 group shadow-sm">
                    <img
                      src={keg.foto}
                      alt={keg.namaKegiatan}
                      className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <p className="mt-1.5 text-[11px] text-slate-600 text-center italic font-medium">
                    {keg.fotoKeterangan}
                  </p>
                </div>
              )}
            </div>

            {/* Grid of Key Points: Tujuan, Peran, Proses */}
            <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-800">
              <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-4 space-y-1.5">
                <strong className="text-amber-900 block text-xs font-mono uppercase tracking-wider font-bold">Tujuan Kegiatan</strong>
                <p className="text-slate-700 leading-relaxed font-normal">{keg.tujuan}</p>
              </div>
              <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-4 space-y-1.5">
                <strong className="text-indigo-900 block text-xs font-mono uppercase tracking-wider font-bold">Peran &amp; Tanggung Jawab</strong>
                <p className="text-slate-700 leading-relaxed font-normal">{keg.peranTanggungJawab}</p>
              </div>
              <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-4 space-y-1.5">
                <strong className="text-emerald-900 block text-xs font-mono uppercase tracking-wider font-bold">Proses Pelaksanaan</strong>
                <p className="text-slate-700 leading-relaxed font-normal">{keg.proses}</p>
              </div>
            </div>

            {/* Kompetensi Dikembangkan & Manfaat Nyata */}
            <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-800">
              <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-4">
                <strong className="text-indigo-950 block mb-1 font-bold font-mono text-xs uppercase tracking-wider">Kompetensi &amp; Nilai Profesional:</strong>
                <p className="text-slate-700 leading-relaxed font-normal">{keg.kompetensiDikembangkan}</p>
              </div>
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4">
                <strong className="text-emerald-950 block mb-1 font-bold font-mono text-xs uppercase tracking-wider">Manfaat bagi Sekolah &amp; Siswa:</strong>
                <p className="text-slate-700 leading-relaxed font-normal">{keg.manfaat}</p>
              </div>
            </div>

            {/* Tantangan & Refleksi */}
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-5 space-y-3 text-xs sm:text-sm">
              <div>
                <strong className="text-amber-950 block mb-1 font-bold font-mono text-xs uppercase tracking-wider">Tantangan yang Dihadapi &amp; Solusi:</strong>
                <p className="text-slate-700 leading-relaxed font-normal">{keg.tantanganDanSolusi}</p>
              </div>
              <div className="pt-2 border-t border-slate-200">
                <strong className="text-slate-900 block mb-1 flex items-center gap-1.5 font-bold font-mono text-xs uppercase tracking-wider">
                  <Lightbulb size={14} className="text-amber-600" />
                  Refleksi serta Tindak Lanjut:
                </strong>
                <blockquote className="text-slate-800 italic pl-3 border-l-4 border-amber-500 font-display font-normal">
                  "{keg.refleksiTindakLanjut}"
                </blockquote>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
