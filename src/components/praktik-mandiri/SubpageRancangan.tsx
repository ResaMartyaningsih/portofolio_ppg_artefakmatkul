import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Target,
  Compass,
  Lightbulb,
  Layers,
  ArrowRight
} from "lucide-react";
import { rancanganPembelajaranData, PRAKTIK_MANDIRI_CONTEXT } from "../../data/praktikMandiriData";
import { EvidenceCard } from "./EvidenceCard";

export function SubpageRancangan() {
  const data = rancanganPembelajaranData;

  return (
    <div className="space-y-10">
      {/* HEADER SECTION */}
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300 mb-3">
          <FileText size={13} />
          <span>Subhalaman Analisis 01</span>
        </div>
        <h1 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
          Analisis Produk Rancangan/Perencanaan Pembelajaran untuk Praktik Mengajar Mandiri
        </h1>
        <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl">
          Kajian komprehensif terhadap modul ajar berdiferensiasi, bahan ajar, dan lembar kerja yang dirancang untuk pembelajaran pemrograman Python pada Fase E di SMA Negeri 3 Yogyakarta.
        </p>
      </div>

      {/* 1. IDENTITAS PEMBELAJARAN DAN KONTEKS PRAKTIK */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl"
      >
        <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs uppercase tracking-wider mb-2">
          <Compass size={14} />
          <span>1. Identitas &amp; Konteks Praktik</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-6">
          Identitas Pembelajaran &amp; Sasaran Belajar
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <span className="text-xs text-zinc-400 block mb-1">Mata Pelajaran &amp; Jenjang</span>
            <span className="font-semibold text-white">{data.identitas.mataPelajaran} — {data.identitas.jenjangKelas}</span>
          </div>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <span className="text-xs text-zinc-400 block mb-1">Sekolah Mitra &amp; Lokasi</span>
            <span className="font-semibold text-white">{data.identitas.sekolah} (Laboratorium Komputer)</span>
          </div>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <span className="text-xs text-zinc-400 block mb-1">Alokasi Waktu &amp; Siklus</span>
            <span className="font-semibold text-white">{data.identitas.alokasiWaktu}</span>
          </div>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <span className="text-xs text-zinc-400 block mb-1">Elemen Capaian Pembelajaran</span>
            <span className="font-semibold text-indigo-300">{data.identitas.elemenCP}</span>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4 text-xs sm:text-sm text-zinc-300">
          <strong className="text-indigo-300 block mb-1">Rumusan Capaian Pembelajaran (CP):</strong>
          {data.identitas.capaianPembelajaran}
        </div>
      </motion.section>

      {/* 2. DAFTAR DOKUMEN PERENCANAAN YANG DIGUNAKAN */}
      <section className="glass rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl">
        <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs uppercase tracking-wider mb-2">
          <Layers size={14} />
          <span>2. Berkas &amp; Dokumen</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
            Daftar Dokumen Perencanaan yang Digunakan
          </h2>
          <a
            href={PRAKTIK_MANDIRI_CONTEXT.driveFolderPPL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300"
          >
            <span>Buka Folder Drive Dokumen Lengkap</span>
            <ExternalLink size={13} />
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {data.dokumenList.map((doc, idx) => (
            <div key={idx} className="rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:border-indigo-500/30 transition">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold text-indigo-300 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
                  {doc.format}
                </span>
                <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={12} />
                  {doc.status}
                </span>
              </div>
              <h3 className="font-display text-base font-bold text-white mb-2">{doc.nama}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">{doc.keterangan}</p>
              <a
                href={doc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-300 hover:text-white transition"
              >
                <span>Lihat Dokumen di Google Drive</span>
                <ExternalLink size={12} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 3. TUJUAN PEMBELAJARAN DAN KETERKAITANNYA DENGAN KEGIATAN */}
      <section className="glass rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl">
        <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs uppercase tracking-wider mb-2">
          <Target size={14} />
          <span>3. Alur Tujuan Pembelajaran</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-6">
          Tujuan Pembelajaran &amp; Keterkaitannya dengan Kegiatan KBM
        </h2>

        <div className="space-y-4">
          {data.tujuanDanKegiatan.map((item, idx) => (
            <div key={idx} className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
              <div className="flex items-start gap-3">
                <span className="grid size-6 place-items-center rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-white leading-snug">
                    {item.tujuan}
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed pl-3 border-l-2 border-indigo-500/30">
                    <strong className="text-indigo-300">Kegiatan KBM Terkait: </strong>
                    {item.kegiatanTerkait}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ANALISIS KESESUAIAN RANCANGAN DENGAN KEBUTUHAN SISWA */}
      <section className="glass rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl">
        <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs uppercase tracking-wider mb-2">
          <Compass size={14} />
          <span>4. Kebutuhan Peserta Didik</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4">
          Analisis Kesesuaian Rancangan dengan Kebutuhan Peserta Didik
        </h2>
        <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <strong className="text-white block mb-1">Hasil Profiling Kesiapan Belajar Awal:</strong>
            <p className="text-zinc-400">{data.analisisKebutuhanSiswa.profilAwal}</p>
          </div>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <strong className="text-white block mb-1">Penerapan Desain Universal untuk Pembelajaran (DUP / UDL):</strong>
            <p className="text-zinc-400">{data.analisisKebutuhanSiswa.akomodasiDUP}</p>
          </div>
        </div>
      </section>

      {/* 5. ANALISIS MODEL, METODE, PENDEKATAN, DAN LANGKAH PEMBELAJARAN */}
      <section className="glass rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl">
        <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs uppercase tracking-wider mb-2">
          <Layers size={14} />
          <span>5. Sintaks &amp; Metodologi KBM</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
          Analisis Model, Metode, Pendekatan, dan Langkah Pembelajaran
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mb-6">
          Model: <span className="text-indigo-300 font-semibold">{data.analisisLangkahPembelajaran.model}</span> | Pendekatan: <span className="text-purple-300 font-semibold">{data.analisisLangkahPembelajaran.pendekatan}</span>
        </p>

        <div className="space-y-4">
          {data.analisisLangkahPembelajaran.tahapan.map((step, idx) => (
            <div key={idx} className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <span className="text-xs font-bold text-indigo-300 block mb-1">
                {step.tahap}
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ANALISIS ASESMEN DAN KESESUAIAN DENGAN TUJUAN */}
      <section className="glass rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl">
        <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs uppercase tracking-wider mb-2">
          <Target size={14} />
          <span>6. Keselarasan Asesmen</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4">
          Analisis Asesmen dan Kesesuaian dengan Tujuan Pembelajaran
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
            <h3 className="font-semibold text-white mb-2">Prinsip Constructive Alignment</h3>
            <p className="text-zinc-400 leading-relaxed">{data.analisisAsesmen.keselarasan}</p>
          </div>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
            <h3 className="font-semibold text-white mb-2">Asesmen Multimoda</h3>
            <p className="text-zinc-400 leading-relaxed">{data.analisisAsesmen.multimoda}</p>
          </div>
        </div>
      </section>

      {/* 7 & 8. KEKUATAN RANCANGAN DAN BAGIAN YANG PERLU DIPERBAIKI */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.02] p-6 shadow-xl">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider mb-3">
            <CheckCircle2 size={16} />
            <span>Kekuatan Rancangan</span>
          </div>
          <ul className="space-y-3">
            {data.kekuatanRancangan.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                <span className="size-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass rounded-2xl border border-amber-500/20 bg-amber-500/[0.02] p-6 shadow-xl">
          <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-wider mb-3">
            <AlertCircle size={16} />
            <span>Bagian yang Perlu Diperbaiki</span>
          </div>
          <ul className="space-y-3">
            {data.areaPerbaikan.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                <span className="size-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 9. REFLEKSI DAN RENCANA PERBAIKAN */}
      <section className="glass rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950/20 to-purple-950/20 p-6 sm:p-8 shadow-2xl">
        <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs uppercase tracking-wider mb-2">
          <Lightbulb size={16} />
          <span>Refleksi &amp; Rencana Tindak Lanjut</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4">
          Refleksi Pendidik &amp; Rencana Tindak Lanjut
        </h2>
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 italic border-l-2 border-indigo-500/50 pl-4">
          "{data.refleksiDanRencana.refleksi}"
        </p>

        <h3 className="text-xs font-semibold uppercase tracking-wider text-indigo-300 mb-3">
          Rencana Aksi Perbaikan Berkelanjutan:
        </h3>
        <div className="grid sm:grid-cols-3 gap-3">
          {data.refleksiDanRencana.rencanaTindakLanjut.map((plan, idx) => (
            <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs text-zinc-300">
              <span className="font-bold text-indigo-300 block mb-1">Langkah 0{idx + 1}</span>
              {plan}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
