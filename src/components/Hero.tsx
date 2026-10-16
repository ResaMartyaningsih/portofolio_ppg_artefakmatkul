import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  Film,
  Camera,
  Layers3,
  GraduationCap,
  Code2,
  School,
  CheckCircle2,
  Terminal,
  Cpu
} from "lucide-react";

interface HeroProps {
  profileImage: string;
  onOpenPhotoModal: () => void;
}

export function Hero({ profileImage, onOpenPhotoModal }: HeroProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-slate-200/70"
    >
      {/* Subtle Background Lighting & Radial Accents */}
      <div className="absolute inset-0 -z-10 bg-subtle-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 -z-10 size-[32rem] sm:size-[45rem] rounded-full bg-gradient-to-tr from-indigo-100/50 via-sky-100/30 to-amber-100/30 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-center">
          {/* Left Column: Headlines & Presentation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Top Pill Badges */}
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3.5 py-1 text-xs font-semibold text-indigo-700 shadow-xs mb-5">
              <span className="flex items-center gap-1.5">
                <Sparkles size={13} className="text-indigo-600" />
                <span>PPG Calon Guru</span>
              </span>
              <span className="text-indigo-300">•</span>
              <span>Pendidikan Informatika UNY</span>
              <span className="text-indigo-300">•</span>
              <span className="text-emerald-700 font-semibold">SMAN 3 Yogyakarta</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12]">
              “Perjalanan Menjadi{" "}
              <span className="bg-gradient-to-r from-indigo-700 via-sky-600 to-indigo-800 bg-clip-text text-transparent">
                Guru Profesional
              </span>{" "}
              di Era Digital”
            </h1>

            {/* Subtitle & Introduction */}
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl">
              Selamat datang di e-portofolio <strong>Resa Martyaningsih, S.Kom.</strong> Portofolio ini merangkum perjalanan belajar, artefak mata kuliah, praktik lapangan di SMA Negeri 3 Yogyakarta, dan refleksi pedagogik untuk mewujudkan pembelajaran komputasi yang humanis, inklusif, serta memberdayakan.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#artefak"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-600/20 hover:bg-indigo-700 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
              >
                <span>Jelajahi Artefak</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="#refleksi"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-xs hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-all duration-200"
              >
                <BookOpen size={16} className="text-indigo-600" />
                <span>Refleksi Pembelajaran</span>
              </a>

              <a
                href="#galeri"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-xs hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-all duration-200"
              >
                <Film size={16} className="text-rose-600" />
                <span>Galeri KBM</span>
              </a>
            </div>

            {/* Trust & Institution Badges */}
            <div className="mt-10 pt-7 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <div className="grid size-8 place-items-center rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-100">
                  <GraduationCap size={16} />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">LPTK Penyelenggara</p>
                  <p className="text-slate-500">Universitas Negeri Yogyakarta</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="grid size-8 place-items-center rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-100">
                  <School size={16} />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Sekolah Mitra PPL</p>
                  <p className="text-slate-500">SMAN 3 Yogyakarta</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="grid size-8 place-items-center rounded-lg bg-sky-50 text-sky-700 border border-sky-100">
                  <Code2 size={16} />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Keahlian Pembelajaran</p>
                  <p className="text-slate-500">Python · CT · DUP · CASEL</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Profile Frame & Three Pedagogical Highlights */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="card-light rounded-3xl p-6 sm:p-7 bg-white/95 border border-slate-200 shadow-md">
              {/* Profile Photo Display */}
              <div className="text-center">
                <div className="relative mx-auto w-40 sm:w-48 group">
                  {/* Subtle Border Halo */}
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-indigo-200 via-sky-200 to-amber-200 opacity-80 blur-sm group-hover:opacity-100 transition duration-300" />

                  <div className="relative overflow-hidden rounded-2xl border-2 border-white bg-slate-100 p-1 shadow-lg shadow-slate-200/60">
                    <div className="relative aspect-square overflow-hidden rounded-xl bg-slate-50">
                      <img
                        src={profileImage}
                        alt="Foto Profil Resa Martyaningsih"
                        className="size-full object-cover object-top transition duration-500 group-hover:scale-105"
                        onError={(e) => {
                          if (e.currentTarget.src !== window.location.origin + "/profil_formal.jpg") {
                            e.currentTarget.src = "/profil_formal.jpg";
                          }
                        }}
                      />

                      {/* Floating Status Badge inside Photo */}
                      <div className="absolute inset-x-2 bottom-2 flex items-center justify-between rounded-xl bg-white/95 px-2.5 py-1.5 backdrop-blur-md border border-slate-200 shadow-xs text-[11px]">
                        <div className="flex items-center gap-1.5">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                          </span>
                          <span className="font-semibold text-emerald-800">PPG Calon Guru</span>
                        </div>
                        <button
                          onClick={onOpenPhotoModal}
                          className="flex items-center gap-1 rounded px-1.5 py-0.5 text-slate-600 hover:text-indigo-700 hover:bg-slate-100 transition font-medium"
                          title="Klik untuk mengganti foto profil"
                        >
                          <Camera size={12} className="text-indigo-600" />
                          <span>Ganti</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Identity beneath Photo */}
                <div className="mt-4">
                  <h2 className="font-display text-xl font-bold text-slate-900">
                    Resa Martyaningsih, S.Kom.
                  </h2>
                  <p className="text-xs font-semibold text-indigo-700 mt-0.5">
                    Guru Informatika · Fasilitator Pembelajaran Komputasi
                  </p>
                </div>
              </div>

              {/* 3 Core Experience Pillars from Canva */}
              <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5">
                <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3 hover:bg-indigo-50/40 hover:border-indigo-100 transition duration-200">
                  <div className="grid size-8 place-items-center rounded-lg bg-indigo-100 text-indigo-700 shrink-0">
                    <Terminal size={16} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-800">Pengalaman Mengajar</h3>
                    <p className="text-[11px] text-slate-600 leading-snug mt-0.5">
                      Praktik mengajar selama PPL dengan pendekatan pembelajaran aktif, live coding, dan interaktif di SMAN 3 Yogyakarta.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3 hover:bg-indigo-50/40 hover:border-indigo-100 transition duration-200">
                  <div className="grid size-8 place-items-center rounded-lg bg-sky-100 text-sky-700 shrink-0">
                    <Cpu size={16} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-800">Media Pembelajaran</h3>
                    <p className="text-[11px] text-slate-600 leading-snug mt-0.5">
                      Penggunaan media berbasis teknologi (Online IDE, Kahoot, Codesaya) untuk mendukung pemahaman kognitif siswa.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3 hover:bg-indigo-50/40 hover:border-indigo-100 transition duration-200">
                  <div className="grid size-8 place-items-center rounded-lg bg-emerald-100 text-emerald-700 shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-800">Penilaian Profesional</h3>
                    <p className="text-[11px] text-slate-600 leading-snug mt-0.5">
                      Supervisi klinis dari Guru Pamong dan DPL sebagai refleksi berkelanjutan demi peningkatan kompetensi guru.
                    </p>
                  </div>
                </div>
              </div>

              {/* Four Focus Pillars */}
              <div className="mt-4 pt-4 border-t border-slate-100">
                <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold uppercase tracking-wider text-[10px]">Fokus Pedagogik</span>
                  <Layers3 size={14} className="text-indigo-600" />
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="rounded-lg bg-slate-50 p-2 border border-slate-100">
                    <span className="font-bold text-indigo-700 block">01 · Profiling</span>
                    <span className="text-slate-600">Kesiapan &amp; minat siswa</span>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-2 border border-slate-100">
                    <span className="font-bold text-indigo-700 block">02 · Akses DUP</span>
                    <span className="text-slate-600">Diferensiasi berkeadilan</span>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-2 border border-slate-100">
                    <span className="font-bold text-indigo-700 block">03 · Mindset</span>
                    <span className="text-slate-600">Growth mindset &amp; CASEL</span>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-2 border border-slate-100">
                    <span className="font-bold text-indigo-700 block">04 · Riset PTK</span>
                    <span className="text-slate-600">Refleksi siklus berbasis data</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
