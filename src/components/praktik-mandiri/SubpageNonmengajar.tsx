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
  Lightbulb
} from "lucide-react";
import { kegiatanNonmengajarData, PRAKTIK_MANDIRI_CONTEXT } from "../../data/praktikMandiriData";

export function SubpageNonmengajar() {
  const data = kegiatanNonmengajarData;

  return (
    <div className="space-y-10">
      {/* HEADER SECTION */}
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300 mb-3">
          <Users size={13} />
          <span>Subhalaman Analisis 05</span>
        </div>
        <h1 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
          Analisis Kegiatan Nonmengajar
        </h1>
        <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl">
          Dokumentasi dan kajian reflektif keterlibatan aktif dalam pembiasaan budaya 5S Padmanaba, pendampingan Gelar Karya P5 Kewirausahaan, kebugaran jasmani bersama warga sekolah, serta bimbingan keprofesian berkala di SMA Negeri 3 Yogyakarta.
        </p>
      </div>

      {/* OVERVIEW / INTRO */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl"
      >
        <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-wider mb-2">
          <Award size={14} />
          <span>Ekosistem Budaya Sekolah</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
          Peran Pendidik dalam Membangun Iklim Sekolah
        </h2>
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
          {data.ringkasan}
        </p>
      </motion.section>

      {/* DAFTAR KEGIATAN NONMENGAJAR (DETAILED CARDS) */}
      <div className="space-y-8">
        {data.daftarKegiatan.map((keg, idx) => (
          <section
            key={keg.id}
            className="glass rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl space-y-6"
          >
            {/* Header: Title, Category & Photo */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2">
                  <span className="grid size-7 place-items-center rounded-lg bg-amber-500/20 text-amber-300 text-xs font-bold">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                    {keg.jenis}
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-snug">
                  {keg.namaKegiatan}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 pt-1">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-indigo-400" />
                    {keg.waktu}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-emerald-400" />
                    {keg.tempat}
                  </span>
                </div>
              </div>

              {/* Photo Box */}
              {keg.foto && (
                <div className="lg:w-72 shrink-0">
                  <div className="relative overflow-hidden rounded-xl border border-white/10 aspect-[4/3] bg-zinc-900 group">
                    <img
                      src={keg.foto}
                      alt={keg.namaKegiatan}
                      className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <p className="mt-1.5 text-[11px] text-zinc-500 text-center italic">
                    {keg.fotoKeterangan}
                  </p>
                </div>
              )}
            </div>

            {/* Grid of Key Points: Tujuan, Peran, Proses */}
            <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm text-zinc-300">
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 space-y-1.5">
                <strong className="text-amber-300 block text-xs uppercase tracking-wider">Tujuan Kegiatan</strong>
                <p className="text-zinc-400 leading-relaxed">{keg.tujuan}</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 space-y-1.5">
                <strong className="text-indigo-300 block text-xs uppercase tracking-wider">Peran &amp; Tanggung Jawab</strong>
                <p className="text-zinc-400 leading-relaxed">{keg.peranTanggungJawab}</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 space-y-1.5">
                <strong className="text-emerald-300 block text-xs uppercase tracking-wider">Proses Pelaksanaan</strong>
                <p className="text-zinc-400 leading-relaxed">{keg.proses}</p>
              </div>
            </div>

            {/* Kompetensi Dikembangkan & Manfaat Nyata */}
            <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm text-zinc-300">
              <div className="rounded-xl border border-indigo-500/20 bg-indigo-950/20 p-4">
                <strong className="text-indigo-300 block mb-1">Kompetensi &amp; Nilai Profesional:</strong>
                <p className="text-zinc-300 leading-relaxed">{keg.kompetensiDikembangkan}</p>
              </div>
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-4">
                <strong className="text-emerald-300 block mb-1">Manfaat bagi Sekolah &amp; Siswa:</strong>
                <p className="text-zinc-300 leading-relaxed">{keg.manfaat}</p>
              </div>
            </div>

            {/* Tantangan & Refleksi */}
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5 space-y-3 text-xs sm:text-sm">
              <div>
                <strong className="text-amber-300 block mb-1">Tantangan yang Dihadapi &amp; Solusi:</strong>
                <p className="text-zinc-400 leading-relaxed">{keg.tantanganDanSolusi}</p>
              </div>
              <div className="pt-2 border-t border-white/5">
                <strong className="text-white block mb-1 flex items-center gap-1.5">
                  <Lightbulb size={14} className="text-amber-400" />
                  Refleksi serta Tindak Lanjut:
                </strong>
                <p className="text-zinc-300 italic pl-3 border-l-2 border-amber-500/40">
                  "{keg.refleksiTindakLanjut}"
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
