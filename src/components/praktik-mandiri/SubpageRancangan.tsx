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
  ArrowRight,
  Code2,
  Cpu,
  FileSpreadsheet,
  Files
} from "lucide-react";
import { rancanganPembelajaranData, PRAKTIK_MANDIRI_CONTEXT } from "../../data/praktikMandiriData";

export function SubpageRancangan() {
  const data = rancanganPembelajaranData;

  return (
    <div className="space-y-10">
      {/* HEADER SECTION IN FROSTED GLASS CARD */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="studio-card rounded-3xl border border-white/80 p-6 sm:p-9 shadow-lg bg-white/92 backdrop-blur-xl"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-indigo-900 mb-3 shadow-2xs">
          <FileText size={13} className="text-indigo-600" />
          <span>Subhalaman Analisis 01</span>
        </div>
        <h1 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
          Analisis Produk Rancangan/Perencanaan Pembelajaran untuk Praktik Mengajar Mandiri
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl font-normal">
          Kajian komprehensif terhadap modul ajar berdiferensiasi, bahan ajar, materi Berpikir Komputasional (Computational Thinking), integrasi perkakas TIK (Spreadsheet, Google Docs, dan Mail Merge), serta lembar kerja yang dirancang untuk pembelajaran Informatika Fase E di SMA Negeri 3 Yogyakarta.
        </p>
      </motion.div>

      {/* 1. IDENTITAS PEMBELAJARAN DAN KONTEKS PRAKTIK */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="studio-card rounded-2xl border border-white/80 p-6 sm:p-8 shadow-md bg-white/92 backdrop-blur-xl"
      >
        <div className="flex items-center gap-2 text-indigo-800 font-mono font-bold text-xs uppercase tracking-wider mb-2">
          <Compass size={15} />
          <span>1. Identitas &amp; Konteks Praktik</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-6">
          Identitas Pembelajaran &amp; Sasaran Belajar
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-4">
            <span className="text-xs text-slate-600 font-medium block mb-1">Mata Pelajaran &amp; Jenjang</span>
            <span className="font-bold text-slate-900">{data.identitas.mataPelajaran} — {data.identitas.jenjangKelas}</span>
          </div>
          <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-4">
            <span className="text-xs text-slate-600 font-medium block mb-1">Sekolah Mitra &amp; Lokasi</span>
            <span className="font-bold text-slate-900">{data.identitas.sekolah} (Laboratorium Komputer)</span>
          </div>
          <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-4">
            <span className="text-xs text-slate-600 font-medium block mb-1">Alokasi Waktu &amp; Siklus</span>
            <span className="font-bold text-slate-900">{data.identitas.alokasiWaktu}</span>
          </div>
          <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-4">
            <span className="text-xs text-slate-600 font-medium block mb-1">Elemen Capaian Pembelajaran</span>
            <span className="font-bold text-indigo-700">{data.identitas.elemenCP}</span>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-indigo-200 bg-indigo-50/70 p-4 text-xs sm:text-sm text-slate-800 leading-relaxed">
          <strong className="text-indigo-950 block mb-1 font-bold">Rumusan Capaian Pembelajaran (CP):</strong>
          {data.identitas.capaianPembelajaran}
        </div>
      </motion.section>

      {/* 2A. MATERI ELEMEN 1: COMPUTATIONAL THINKING */}
      <section className="studio-card rounded-2xl border border-white/80 p-6 sm:p-8 shadow-md bg-white/92 backdrop-blur-xl">
        <div className="flex items-center gap-2 text-indigo-800 font-mono font-bold text-xs uppercase tracking-wider mb-2">
          <Cpu size={15} />
          <span>Materi Bagian 1 · Computational Thinking (CT)</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
              Dokumen &amp; Media Ajar Berpikir Komputasional (CT)
            </h2>
            <p className="text-xs text-slate-600 mt-1 font-normal">
              Media presentasi interaktif Canva dan Google Slides untuk materi dasar Computational Thinking Fase E.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {data.materiComputationalThinking?.map((ct, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-indigo-200 bg-gradient-to-br from-indigo-50/90 to-purple-50/70 p-5 hover:border-indigo-400 hover:shadow-md transition duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold text-indigo-900 bg-white px-2.5 py-0.5 rounded-md border border-indigo-200 shadow-2xs">
                    {ct.badge}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 size={13} />
                    Siap Digunakan
                  </span>
                </div>
                <h3 className="font-display text-base font-bold text-slate-900 mb-2">{ct.judul}</h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4 font-normal">{ct.keterangan}</p>
              </div>

              <div className="pt-3 border-t border-indigo-200/70">
                <a
                  href={ct.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 text-xs font-bold transition shadow-2xs cursor-pointer"
                >
                  <span>Buka Dokumen Materi</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Dokumentasi Nyata KBM Materi Computational Thinking */}
        <div className="mt-5 grid sm:grid-cols-2 gap-4">
          <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 group shadow-sm">
            <img
              src="/dokumentasi/semester2/ds30.jpg"
              alt="Penyampaian Tujuan Pembelajaran di Lab Komputer"
              className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="p-3 bg-white/95 border-t border-slate-200">
              <span className="text-[10px] font-mono font-bold text-indigo-900 uppercase">Dokumentasi Nyata KBM</span>
              <p className="text-xs font-semibold text-slate-900 mt-0.5">Penyampaian Tujuan Pembelajaran &amp; Apersepsi di Lab Komputer</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 group shadow-sm">
            <img
              src="/dokumentasi/semester2/ds31.jpg"
              alt="Penguatan 4 Pilar Computational Thinking"
              className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="p-3 bg-white/95 border-t border-slate-200">
              <span className="text-[10px] font-mono font-bold text-indigo-900 uppercase">Dokumentasi Nyata KBM</span>
              <p className="text-xs font-semibold text-slate-900 mt-0.5">Penjelasan Konsep 4 Pilar Computational Thinking (CT) Fase E</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2B. MATERI ELEMEN 2: TEKNOLOGI INFORMASI DAN KOMUNIKASI (TIK) */}
      <section className="studio-card rounded-2xl border border-white/80 p-6 sm:p-8 shadow-md bg-white/92 backdrop-blur-xl">
        <div className="flex items-center gap-2 text-emerald-800 font-mono font-bold text-xs uppercase tracking-wider mb-2">
          <FileSpreadsheet size={15} />
          <span>Materi Bagian 2 · Perkakas TIK (Spreadsheet, Google Docs, &amp; Mail Merge)</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
              Dokumen Materi Integrasi TIK &amp; Otomasi Dokumen
            </h2>
            <p className="text-xs text-slate-600 mt-1 font-normal">
              Empat modul materi presentasi bertahap dari pengenalan Google Docs, kalkulasi Spreadsheet, integrasi Mail Merge, hingga praktikum laboratorium.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {data.materiTIK?.map((tik) => (
            <div
              key={tik.no}
              className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-5 hover:border-emerald-300 hover:bg-white transition duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold text-emerald-900 bg-emerald-100 px-2.5 py-0.5 rounded-md border border-emerald-200">
                    Materi 0{tik.no}
                  </span>
                  <span className="text-[11px] font-mono text-slate-600 font-bold">
                    {tik.topik}
                  </span>
                </div>
                <h3 className="font-display text-base font-bold text-slate-900 mb-2">{tik.judul}</h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4 font-normal">{tik.keterangan}</p>
              </div>

              <div className="pt-3 border-t border-slate-200">
                <a
                  href={tik.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2 text-xs font-bold transition shadow-2xs cursor-pointer"
                >
                  <span>Buka Slide Presentasi TIK {tik.no}</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2C. DAFTAR DOKUMEN PERENCANAAN UMUM & LKPD */}
      <section className="studio-card rounded-2xl border border-white/80 p-6 sm:p-8 shadow-md bg-white/92 backdrop-blur-xl">
        <div className="flex items-center gap-2 text-indigo-800 font-mono font-bold text-xs uppercase tracking-wider mb-2">
          <Layers size={15} />
          <span>2. Berkas &amp; Dokumen Perencanaan</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
            Daftar Modul Ajar, LKPD &amp; Instrumen Pembelajaran
          </h2>
          <a
            href={PRAKTIK_MANDIRI_CONTEXT.driveFolderPPL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 hover:text-indigo-900 transition"
          >
            <span>Buka Folder Drive Dokumen Lengkap</span>
            <ExternalLink size={13} />
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {data.dokumenList.map((doc, idx) => (
            <div key={idx} className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-5 hover:border-indigo-300 hover:bg-white transition duration-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono font-bold text-indigo-900 bg-indigo-100 px-2.5 py-0.5 rounded-md border border-indigo-200">
                  {doc.format}
                </span>
                <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 size={13} />
                  {doc.status}
                </span>
              </div>
              <h3 className="font-display text-base font-bold text-slate-900 mb-2">{doc.nama}</h3>
              <p className="text-xs text-slate-700 leading-relaxed mb-4 font-normal">{doc.keterangan}</p>
              <a
                href={doc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 hover:text-indigo-900 transition"
              >
                <span>Lihat Dokumen di Google Drive</span>
                <ExternalLink size={12} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 3. TUJUAN PEMBELAJARAN DAN KETERKAITANNYA DENGAN KEGIATAN */}
      <section className="studio-card rounded-2xl border border-white/80 p-6 sm:p-8 shadow-md bg-white/92 backdrop-blur-xl">
        <div className="flex items-center gap-2 text-indigo-800 font-mono font-bold text-xs uppercase tracking-wider mb-2">
          <Target size={15} />
          <span>3. Alur Tujuan Pembelajaran</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-6">
          Tujuan Pembelajaran &amp; Keterkaitannya dengan Kegiatan KBM
        </h2>

        <div className="space-y-4">
          {data.tujuanDanKegiatan.map((item, idx) => (
            <div key={idx} className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-5">
              <div className="flex items-start gap-3">
                <span className="grid size-6 place-items-center rounded-full bg-indigo-100 text-indigo-900 text-xs font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div className="space-y-2">
                  <p className="text-sm font-bold text-slate-900 leading-snug">
                    {item.tujuan}
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed pl-3 border-l-2 border-indigo-400 font-normal">
                    <strong className="text-indigo-950 font-semibold">Kegiatan KBM Terkait: </strong>
                    {item.kegiatanTerkait}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ANALISIS KESESUAIAN RANCANGAN DENGAN KEBUTUHAN SISWA */}
      <section className="studio-card rounded-2xl border border-white/80 p-6 sm:p-8 shadow-md bg-white/92 backdrop-blur-xl">
        <div className="flex items-center gap-2 text-indigo-800 font-mono font-bold text-xs uppercase tracking-wider mb-2">
          <Compass size={15} />
          <span>4. Kebutuhan Peserta Didik</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-4">
          Analisis Kesesuaian Rancangan dengan Kebutuhan Peserta Didik
        </h2>
        <div className="space-y-4 text-xs sm:text-sm text-slate-800 leading-relaxed">
          <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-4">
            <strong className="text-slate-900 font-bold block mb-1">Hasil Profiling Kesiapan Belajar Awal:</strong>
            <p className="text-slate-700 font-normal">{data.analisisKebutuhanSiswa.profilAwal}</p>
          </div>
          <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-4">
            <strong className="text-slate-900 font-bold block mb-1">Penerapan Desain Universal untuk Pembelajaran (DUP / UDL):</strong>
            <p className="text-slate-700 font-normal">{data.analisisKebutuhanSiswa.akomodasiDUP}</p>
          </div>
        </div>
      </section>

      {/* 5. ANALISIS MODEL, METODE, PENDEKATAN, DAN LANGKAH PEMBELAJARAN */}
      <section className="studio-card rounded-2xl border border-white/80 p-6 sm:p-8 shadow-md bg-white/92 backdrop-blur-xl">
        <div className="flex items-center gap-2 text-indigo-800 font-mono font-bold text-xs uppercase tracking-wider mb-2">
          <Layers size={15} />
          <span>5. Sintaks &amp; Metodologi KBM</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-2">
          Analisis Model, Metode, Pendekatan, dan Langkah Pembelajaran
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 mb-6 font-medium">
          Model: <span className="text-indigo-800 font-bold">{data.analisisLangkahPembelajaran.model}</span> | Pendekatan: <span className="text-purple-800 font-bold">{data.analisisLangkahPembelajaran.pendekatan}</span>
        </p>

        <div className="space-y-4">
          {data.analisisLangkahPembelajaran.tahapan.map((step, idx) => (
            <div key={idx} className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-4">
              <span className="text-xs font-bold text-indigo-800 block mb-1">
                {step.tahap}
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ANALISIS ASESMEN DAN KESESUAIAN DENGAN TUJUAN */}
      <section className="studio-card rounded-2xl border border-white/80 p-6 sm:p-8 shadow-md bg-white/92 backdrop-blur-xl">
        <div className="flex items-center gap-2 text-indigo-800 font-mono font-bold text-xs uppercase tracking-wider mb-2">
          <Target size={15} />
          <span>6. Keselarasan Asesmen</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-4">
          Analisis Asesmen dan Kesesuaian dengan Tujuan Pembelajaran
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-800 leading-relaxed">
          <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-5">
            <h3 className="font-bold text-slate-900 mb-2">Prinsip Constructive Alignment</h3>
            <p className="text-slate-700 leading-relaxed font-normal">{data.analisisAsesmen.keselarasan}</p>
          </div>
          <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-5">
            <h3 className="font-bold text-slate-900 mb-2">Asesmen Multimoda</h3>
            <p className="text-slate-700 leading-relaxed font-normal">{data.analisisAsesmen.multimoda}</p>
          </div>
        </div>
      </section>

      {/* 7 & 8. KEKUATAN RANCANGAN DAN BAGIAN YANG PERLU DIPERBAIKI */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="studio-card rounded-2xl border border-emerald-300 bg-emerald-50/70 p-6 shadow-md backdrop-blur-xl">
          <div className="flex items-center gap-2 text-emerald-900 font-mono font-bold text-xs uppercase tracking-wider mb-3">
            <CheckCircle2 size={16} className="text-emerald-700" />
            <span>Kekuatan Rancangan</span>
          </div>
          <ul className="space-y-3">
            {data.kekuatanRancangan.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-normal">
                <span className="size-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="studio-card rounded-2xl border border-amber-300 bg-amber-50/70 p-6 shadow-md backdrop-blur-xl">
          <div className="flex items-center gap-2 text-amber-900 font-mono font-bold text-xs uppercase tracking-wider mb-3">
            <AlertCircle size={16} className="text-amber-700" />
            <span>Bagian yang Perlu Diperbaiki</span>
          </div>
          <ul className="space-y-3">
            {data.areaPerbaikan.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-normal">
                <span className="size-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 9. REFLEKSI DAN RENCANA PERBAIKAN */}
      <section className="studio-card rounded-2xl border border-indigo-200 bg-indigo-50/60 p-6 sm:p-8 shadow-md backdrop-blur-xl">
        <div className="flex items-center gap-2 text-indigo-900 font-mono font-bold text-xs uppercase tracking-wider mb-2">
          <Lightbulb size={16} className="text-indigo-700" />
          <span>Refleksi &amp; Rencana Tindak Lanjut</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-4">
          Refleksi Pendidik &amp; Rencana Tindak Lanjut
        </h2>
        <blockquote className="text-xs sm:text-sm text-slate-800 leading-relaxed mb-6 italic border-l-4 border-indigo-600 pl-4 font-display">
          "{data.refleksiDanRencana.refleksi}"
        </blockquote>

        <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-900 mb-3 font-mono">
          Rencana Aksi Perbaikan Berkelanjutan:
        </h3>
        <div className="grid sm:grid-cols-3 gap-3">
          {data.refleksiDanRencana.rencanaTindakLanjut.map((plan, idx) => (
            <div key={idx} className="rounded-xl border border-indigo-200/90 bg-white p-4 text-xs text-slate-800 shadow-2xs font-normal">
              <span className="font-bold text-indigo-900 block mb-1 font-mono">Langkah 0{idx + 1}</span>
              {plan}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
