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
      {/* HEADER SECTION */}
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-300 mb-3">
          <BookOpen size={13} />
          <span>Subhalaman Analisis 02</span>
        </div>
        <h1 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
          Analisis Materi Pembelajaran yang Disusun dan Diterapkan dalam Praktik Mengajar Mandiri
        </h1>
        <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl">
          Telaah struktur konten dasar pemrograman Python, ketepatan urutan penyajian logika algoritma, diferensiasi tingkat kesulitan, dan respon pemahaman nyata peserta didik di laboratorium komputer SMAN 3 Yogyakarta.
        </p>
      </div>

      {/* 1 & 2. IDENTITAS MATERI DAN DOKUMEN TAUTAN */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl"
      >
        <div className="flex items-center gap-2 text-sky-400 font-semibold text-xs uppercase tracking-wider mb-2">
          <Terminal size={14} />
          <span>1 &amp; 2. Identitas &amp; Dokumen Materi</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-6">
          Identitas dan Dokumen Bahan Ajar
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 text-sm mb-6">
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <span className="text-xs text-zinc-400 block mb-1">Judul Materi Pembelajaran</span>
            <span className="font-bold text-white text-base">{data.identitas.judulMateri}</span>
          </div>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <span className="text-xs text-zinc-400 block mb-1">Mata Pelajaran &amp; Elemen</span>
            <span className="font-semibold text-white">{data.identitas.mataPelajaran} — {data.identitas.elemen}</span>
          </div>
          <div className="sm:col-span-2 rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <span className="text-xs text-zinc-400 block mb-1">Cakupan Konsep Inti</span>
            <span className="text-sky-300 font-medium">{data.identitas.cakupanKonsep}</span>
          </div>
        </div>

        <div className="rounded-xl border border-sky-500/30 bg-sky-500/5 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-white text-sm">Dokumen &amp; Berkas Materi Pembelajaran</h3>
            <p className="text-xs text-zinc-400 mt-0.5">Tersedia bahan ajar, modul rumpang starter code (.py), dan slide panduan praktikum.</p>
          </div>
          <a
            href={data.identitas.tautanMateri}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-sky-500 transition shrink-0"
          >
            <span>Buka Materi di Google Drive</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </motion.section>

      {/* 3. KESESUAIAN MATERI DENGAN TUJUAN PEMBELAJARAN */}
      <section className="glass rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl">
        <div className="flex items-center gap-2 text-sky-400 font-semibold text-xs uppercase tracking-wider mb-2">
          <CheckCircle2 size={14} />
          <span>3. Keselarasan Pedagogis</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4">
          Kesesuaian Materi dengan Tujuan Pembelajaran
        </h2>
        <div className="space-y-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
          <p className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            {data.kesesuaianTujuan.penjelasan}
          </p>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <strong className="text-white block mb-1">Keterkaitan Alur Konseptual:</strong>
            <p className="text-zinc-400">{data.kesesuaianTujuan.keterkaitan}</p>
          </div>
        </div>
      </section>

      {/* 4. KETEPATAN KONSEP DAN URUTAN PENYAJIAN */}
      <section className="glass rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl">
        <div className="flex items-center gap-2 text-sky-400 font-semibold text-xs uppercase tracking-wider mb-2">
          <Workflow size={14} />
          <span>4. Urutan Penyajian Logika</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-6">
          Ketepatan Konsep dan Urutan Penyajian (Scaffolding Konseptual)
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {data.ketepatanUrutan.map((item, idx) => (
            <div key={idx} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <span className="text-xs font-bold text-sky-300 block mb-2">{item.tahap}</span>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{item.uraian}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. KESESUAIAN TINGKAT KESULITAN DENGAN SISWA */}
      <section className="glass rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl">
        <div className="flex items-center gap-2 text-sky-400 font-semibold text-xs uppercase tracking-wider mb-2">
          <Code2 size={14} />
          <span>5. Diferensiasi Tingkat Kesulitan</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
          Kesesuaian Tingkat Kesulitan dengan Peserta Didik
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mb-6">{data.kesesuaianTingkatKesulitan.analisis}</p>

        <div className="grid sm:grid-cols-3 gap-4">
          {data.kesesuaianTingkatKesulitan.tingkatan.map((lvl, idx) => (
            <div key={idx} className="rounded-xl border border-white/5 bg-white/[0.02] p-4 flex flex-col justify-between">
              <div>
                <span className="inline-block rounded-md bg-sky-500/20 text-sky-300 text-[11px] font-bold px-2 py-0.5 mb-2">
                  {lvl.level}
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed">{lvl.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. KETERKAITAN MATERI DENGAN KONTEKS NYATA */}
      <section className="glass rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl">
        <div className="flex items-center gap-2 text-sky-400 font-semibold text-xs uppercase tracking-wider mb-2">
          <Sparkles size={14} />
          <span>6. Kontekstualisasi Nyata</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
          Keterkaitan Materi dengan Konteks Nyata Siswa
        </h2>
        <div className="rounded-xl border border-sky-500/20 bg-sky-500/5 p-5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
          {data.koneksiKonteksNyata}
        </div>
      </section>

      {/* 7 & 8. PENERAPAN MATERI & RESPONS SISWA BERDASARKAN BUKTI NYATA */}
      <div className="grid md:grid-cols-2 gap-6">
        <section className="glass rounded-2xl border border-white/10 p-6 shadow-xl">
          <h2 className="font-display text-lg font-bold text-white mb-3 flex items-center gap-2">
            <span className="size-2 rounded-full bg-sky-400" />
            7. Penerapan Saat Praktik Mengajar
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
            <p className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <strong className="text-white block mb-1">Dinamika Kelas:</strong>
              {data.analisisPenerapan.kondisiKelas}
            </p>
            <p className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <strong className="text-white block mb-1">Intervensi Pedagogis:</strong>
              {data.analisisPenerapan.intervensiGuru}
            </p>
          </div>
        </section>

        <section className="glass rounded-2xl border border-white/10 p-6 shadow-xl">
          <h2 className="font-display text-lg font-bold text-white mb-3 flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-400" />
            8. Respons &amp; Pemahaman Siswa
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
            <p className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <strong className="text-white block mb-1">Temuan Nyata KBM:</strong>
              {data.responsDanPemahaman.temuanNyata}
            </p>
            <p className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-emerald-300">
              <strong className="block mb-1">Sumber Bukti Terverifikasi:</strong>
              {data.responsDanPemahaman.buktiTersedia}
            </p>
          </div>
        </section>
      </div>

      {/* 9. KELEBIHAN, KENDALA, REFLEKSI, DAN TINDAK LANJUT */}
      <section className="glass rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl">
        <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-6">
          Kelebihan, Kendala, Refleksi, dan Rencana Tindak Lanjut
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.02] p-5">
            <h3 className="text-emerald-400 font-semibold text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
              <CheckCircle2 size={16} />
              Kelebihan Materi
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
              {data.evaluasiMateri.kelebihan.map((k, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="size-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span>{k}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.02] p-5">
            <h3 className="text-amber-400 font-semibold text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
              <AlertCircle size={16} />
              Kendala yang Ditemui
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
              {data.evaluasiMateri.kendala.map((k, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="size-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <span>{k}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-xl border border-sky-500/30 bg-sky-950/20 p-5 space-y-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
          <div className="flex items-center gap-2 text-sky-400 font-semibold text-xs uppercase tracking-wider">
            <Lightbulb size={16} />
            Refleksi &amp; Tindak Lanjut Materi
          </div>
          <p className="italic pl-3 border-l-2 border-sky-500/40">"{data.evaluasiMateri.refleksi}"</p>
          <div className="pt-2">
            <strong className="text-white block mb-1">Rencana Tindak Lanjut Materi:</strong>
            <p className="text-zinc-400">{data.evaluasiMateri.tindakLanjut}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
