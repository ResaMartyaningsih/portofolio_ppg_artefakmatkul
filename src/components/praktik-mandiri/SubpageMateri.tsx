import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Code2,
  Terminal,
  Workflow,
  Sparkles,
  Lightbulb
} from "lucide-react";
import { materiPembelajaranData, PRAKTIK_MANDIRI_CONTEXT } from "../../data/praktikMandiriData";

export function SubpageMateri() {
  const data = materiPembelajaranData;

  return (
    <div className="space-y-10">
      {/* HEADER SECTION IN FROSTED GLASS CARD */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="studio-card rounded-3xl border border-white/80 p-6 sm:p-9 shadow-lg bg-white/92 backdrop-blur-xl"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-sky-900 mb-3 shadow-2xs">
          <BookOpen size={13} className="text-sky-600" />
          <span>Subhalaman Analisis 02</span>
        </div>
        <h1 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
          Analisis Materi Pembelajaran yang Disusun dan Diterapkan dalam Praktik Mengajar Mandiri
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl font-normal">
          Telaah struktur konten dasar pemrograman Python, ketepatan urutan penyajian logika algoritma, diferensiasi tingkat kesulitan, dan respon pemahaman nyata peserta didik di laboratorium komputer SMAN 3 Yogyakarta.
        </p>
      </motion.div>

      {/* 1 & 2. IDENTITAS MATERI DAN DOKUMEN TAUTAN */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="studio-card rounded-2xl border border-white/80 p-6 sm:p-8 shadow-md bg-white/92 backdrop-blur-xl"
      >
        <div className="flex items-center gap-2 text-sky-900 font-mono font-bold text-xs uppercase tracking-wider mb-2">
          <Terminal size={15} />
          <span>1 &amp; 2. Identitas &amp; Dokumen Materi</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-6">
          Identitas dan Dokumen Bahan Ajar
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 text-sm mb-6">
          <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-4">
            <span className="text-xs text-slate-600 font-medium block mb-1">Judul Materi Pembelajaran</span>
            <span className="font-bold text-slate-900 text-base">{data.identitas.judulMateri}</span>
          </div>
          <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-4">
            <span className="text-xs text-slate-600 font-medium block mb-1">Mata Pelajaran &amp; Elemen</span>
            <span className="font-bold text-slate-900">{data.identitas.mataPelajaran} — {data.identitas.elemen}</span>
          </div>
          <div className="sm:col-span-2 rounded-xl border border-slate-200/90 bg-slate-50/80 p-4">
            <span className="text-xs text-slate-600 font-medium block mb-1">Cakupan Konsep Inti</span>
            <span className="text-sky-800 font-semibold">{data.identitas.cakupanKonsep}</span>
          </div>
        </div>

        <div className="rounded-xl border border-sky-200 bg-sky-50/70 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-slate-900 text-sm">Dokumen &amp; Berkas Materi Pembelajaran</h3>
            <p className="text-xs text-slate-700 mt-0.5 font-normal">Tersedia bahan ajar, modul rumpang starter code (.py), dan slide panduan praktikum.</p>
          </div>
          <a
            href={data.identitas.tautanMateri}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-sky-600 hover:bg-sky-500 px-4 py-2 text-xs font-bold text-white shadow-sm transition shrink-0"
          >
            <span>Buka Materi di Google Drive</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </motion.section>

      {/* 3. KESESUAIAN MATERI DENGAN TUJUAN PEMBELAJARAN */}
      <section className="studio-card rounded-2xl border border-white/80 p-6 sm:p-8 shadow-md bg-white/92 backdrop-blur-xl">
        <div className="flex items-center gap-2 text-sky-900 font-mono font-bold text-xs uppercase tracking-wider mb-2">
          <CheckCircle2 size={15} />
          <span>3. Keselarasan Pedagogis</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-4">
          Kesesuaian Materi dengan Tujuan Pembelajaran
        </h2>
        <div className="space-y-3 text-xs sm:text-sm text-slate-800 leading-relaxed">
          <p className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-4 font-normal">
            {data.kesesuaianTujuan.penjelasan}
          </p>
          <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-4">
            <strong className="text-slate-900 font-bold block mb-1">Keterkaitan Alur Konseptual:</strong>
            <p className="text-slate-700 font-normal">{data.kesesuaianTujuan.keterkaitan}</p>
          </div>
        </div>
      </section>

      {/* 4. KETEPATAN KONSEP DAN URUTAN PENYAJIAN */}
      <section className="studio-card rounded-2xl border border-white/80 p-6 sm:p-8 shadow-md bg-white/92 backdrop-blur-xl">
        <div className="flex items-center gap-2 text-sky-900 font-mono font-bold text-xs uppercase tracking-wider mb-2">
          <Workflow size={15} />
          <span>4. Urutan Penyajian Logika</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-6">
          Ketepatan Konsep dan Urutan Penyajian (Scaffolding Konseptual)
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {data.ketepatanUrutan.map((item, idx) => (
            <div key={idx} className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-5">
              <span className="text-xs font-mono font-bold text-sky-900 block mb-2">{item.tahap}</span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">{item.uraian}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. KESESUAIAN TINGKAT KESULITAN DENGAN SISWA */}
      <section className="studio-card rounded-2xl border border-white/80 p-6 sm:p-8 shadow-md bg-white/92 backdrop-blur-xl">
        <div className="flex items-center gap-2 text-sky-900 font-mono font-bold text-xs uppercase tracking-wider mb-2">
          <Code2 size={15} />
          <span>5. Diferensiasi Tingkat Kesulitan</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-3">
          Kesesuaian Tingkat Kesulitan dengan Peserta Didik
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 mb-6 font-normal">{data.kesesuaianTingkatKesulitan.analisis}</p>

        <div className="grid sm:grid-cols-3 gap-4">
          {data.kesesuaianTingkatKesulitan.tingkatan.map((lvl, idx) => (
            <div key={idx} className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-4 flex flex-col justify-between">
              <div>
                <span className="inline-block rounded-md bg-sky-100 text-sky-900 border border-sky-200 text-[11px] font-mono font-bold px-2 py-0.5 mb-2">
                  {lvl.level}
                </span>
                <p className="text-xs text-slate-700 leading-relaxed font-normal">{lvl.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. KETERKAITAN MATERI DENGAN KONTEKS NYATA */}
      <section className="studio-card rounded-2xl border border-white/80 p-6 sm:p-8 shadow-md bg-white/92 backdrop-blur-xl">
        <div className="flex items-center gap-2 text-sky-900 font-mono font-bold text-xs uppercase tracking-wider mb-2">
          <Sparkles size={15} />
          <span>6. Kontekstualisasi Nyata</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-3">
          Keterkaitan Materi dengan Konteks Nyata Siswa
        </h2>
        <div className="rounded-xl border border-sky-200 bg-sky-50/70 p-5 text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
          {data.koneksiKonteksNyata}
        </div>
      </section>

      {/* 7 & 8. PENERAPAN MATERI & RESPONS SISWA BERDASARKAN BUKTI NYATA */}
      <div className="grid md:grid-cols-2 gap-6">
        <section className="studio-card rounded-2xl border border-white/80 p-6 shadow-md bg-white/92 backdrop-blur-xl">
          <h2 className="font-display text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="size-2 rounded-full bg-sky-600" />
            7. Penerapan Saat Praktik Mengajar
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-slate-800 leading-relaxed">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-4">
              <strong className="text-slate-900 font-bold block mb-1">Dinamika Kelas:</strong>
              <p className="text-slate-700 font-normal">{data.analisisPenerapan.kondisiKelas}</p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-4">
              <strong className="text-slate-900 font-bold block mb-1">Intervensi Pedagogis:</strong>
              <p className="text-slate-700 font-normal">{data.analisisPenerapan.intervensiGuru}</p>
            </div>
          </div>
        </section>

        <section className="studio-card rounded-2xl border border-white/80 p-6 shadow-md bg-white/92 backdrop-blur-xl">
          <h2 className="font-display text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-600" />
            8. Respons &amp; Pemahaman Siswa
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-slate-800 leading-relaxed">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-4">
              <strong className="text-slate-900 font-bold block mb-1">Temuan Nyata KBM:</strong>
              <p className="text-slate-700 font-normal">{data.responsDanPemahaman.temuanNyata}</p>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 text-emerald-900">
              <strong className="block mb-1 font-bold">Sumber Bukti Terverifikasi:</strong>
              <p className="text-slate-800 font-normal">{data.responsDanPemahaman.buktiTersedia}</p>
            </div>
          </div>
        </section>
      </div>

      {/* 9. KELEBIHAN, KENDALA, REFLEKSI, DAN TINDAK LANJUT */}
      <section className="studio-card rounded-2xl border border-white/80 p-6 sm:p-8 shadow-md bg-white/92 backdrop-blur-xl">
        <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-6">
          Kelebihan, Kendala, Refleksi, dan Rencana Tindak Lanjut
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-5">
            <h3 className="text-emerald-900 font-mono font-bold text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-700" />
              Kelebihan Materi
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-800 font-normal">
              {data.evaluasiMateri.kelebihan.map((k, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="size-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                  <span>{k}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-5">
            <h3 className="text-amber-900 font-mono font-bold text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
              <AlertCircle size={16} className="text-amber-700" />
              Kendala yang Ditemui
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-800 font-normal">
              {data.evaluasiMateri.kendala.map((k, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="size-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                  <span>{k}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-xl border border-sky-200 bg-sky-50/60 p-5 space-y-3 text-xs sm:text-sm text-slate-800 leading-relaxed">
          <div className="flex items-center gap-2 text-sky-900 font-mono font-bold text-xs uppercase tracking-wider">
            <Lightbulb size={16} className="text-sky-700" />
            Refleksi &amp; Tindak Lanjut Materi
          </div>
          <p className="italic pl-3 border-l-4 border-sky-600 text-slate-900 font-display">"{data.evaluasiMateri.refleksi}"</p>
          <div className="pt-2">
            <strong className="text-slate-900 font-bold block mb-1 font-mono text-xs uppercase tracking-wider">Rencana Tindak Lanjut Materi:</strong>
            <p className="text-slate-700 font-normal">{data.evaluasiMateri.tindakLanjut}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
