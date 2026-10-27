import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  ExternalLink,
  ArrowUpRight,
  ArrowLeft,
  Sparkles,
  Layers3,
  GraduationCap,
  FolderOpen
} from "lucide-react";
import { Project, Semester } from "../types/portfolio";

interface RefleksiMatkulSectionProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onNavigateToMandiri?: () => void;
  onBackToHome?: () => void;
  isStandalonePage?: boolean;
}

export function RefleksiMatkulSection({
  projects,
  onSelectProject,
  onNavigateToMandiri,
  onBackToHome,
  isStandalonePage = false
}: RefleksiMatkulSectionProps) {
  const [semesterFilter, setSemesterFilter] = useState<"All" | Semester>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchSemester = semesterFilter === "All" || p.semester === semesterFilter;
      const matchQuery =
        !searchQuery.trim() ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchSemester && matchQuery;
    });
  }, [projects, semesterFilter, searchQuery]);

  const sem1Count = projects.filter((p) => p.semester === "Semester I").length;
  const sem2Count = projects.filter((p) => p.semester === "Semester II").length;

  return (
    <div className={isStandalonePage ? "py-12 sm:py-16 text-slate-800" : "border-t border-white/50 bg-white/50 backdrop-blur-md px-6 py-28"}>
      <div className="mx-auto max-w-6xl">
        {/* Breadcrumb & Kembali ke Beranda if standalone */}
        {isStandalonePage && onBackToHome && (
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 rounded-xl border border-white/80 bg-white/90 hover:bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 hover:text-purple-700 transition cursor-pointer shadow-sm backdrop-blur-md"
            >
              <ArrowLeft size={15} className="text-purple-700" />
              <span>Kembali ke Beranda Portofolio</span>
            </button>

            <nav className="flex items-center gap-2 text-xs font-mono text-slate-700">
              <span onClick={onBackToHome} className="cursor-pointer hover:text-purple-800 transition">
                Beranda
              </span>
              <span>/</span>
              <span className="font-bold text-purple-900 bg-white/80 px-2 py-0.5 rounded border border-purple-200">
                Refleksi Mata Kuliah
              </span>
            </nav>
          </div>
        )}

        {/* Header Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="studio-card relative overflow-hidden rounded-3xl border border-white/85 p-6 sm:p-10 shadow-lg mb-8 bg-white/95 backdrop-blur-xl"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-300 bg-purple-50 px-3.5 py-1 text-xs font-mono font-bold text-purple-900 uppercase tracking-widest mb-3 shadow-2xs">
                // 02 · REFLEKSI MATA KULIAH & ARTEFAK
              </span>
              <h1 className="font-display text-3xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-slate-900">
                Refleksi Mata Kuliah
              </h1>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700 font-normal max-w-3xl">
                Kumpulan artefak pembelajaran dan kajian reflektif komprehensif dari 11 mata kuliah Program Studi PPG Prajabatan Informatika Universitas Negeri Yogyakarta (Semester 1 &amp; Semester 2).
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
                <span className="block font-mono text-2xl font-bold text-purple-800">11</span>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-600 font-semibold">
                  Mata Kuliah
                </span>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
                <span className="block font-mono text-2xl font-bold text-indigo-800">2</span>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-600 font-semibold">
                  Semester
                </span>
              </div>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSemesterFilter("All")}
                className={`rounded-xl px-4 py-2 text-xs uppercase tracking-wider transition font-mono font-bold cursor-pointer ${
                  semesterFilter === "All"
                    ? "bg-gradient-to-r from-[#ba83ca] to-[#79b3f4] text-slate-950 shadow-md border border-white/60 font-bold"
                    : "border border-slate-200 bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-50 font-bold"
                }`}
              >
                Semua ({projects.length} MK)
              </button>
              <button
                type="button"
                onClick={() => setSemesterFilter("Semester I")}
                className={`rounded-xl px-4 py-2 text-xs uppercase tracking-wider transition font-mono font-bold cursor-pointer ${
                  semesterFilter === "Semester I"
                    ? "bg-gradient-to-r from-[#ba83ca] to-[#79b3f4] text-slate-950 shadow-md border border-white/60 font-bold"
                    : "border border-slate-200 bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-50 font-bold"
                }`}
              >
                Semester 1 ({sem1Count} MK)
              </button>
              <button
                type="button"
                onClick={() => setSemesterFilter("Semester II")}
                className={`rounded-xl px-4 py-2 text-xs uppercase tracking-wider transition font-mono font-bold cursor-pointer ${
                  semesterFilter === "Semester II"
                    ? "bg-gradient-to-r from-[#79b3f4] to-[#41dfff] text-slate-950 shadow-md border border-white/60 font-bold"
                    : "border border-slate-200 bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-50 font-bold"
                }`}
              >
                Semester 2 ({sem2Count} MK)
              </button>
            </div>

            <div className="w-full sm:w-auto">
              <input
                type="text"
                placeholder="Cari mata kuliah atau topik..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 focus:border-purple-500 focus:outline-none shadow-2xs"
              />
            </div>
          </div>
        </motion.div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="group studio-card flex flex-col justify-between rounded-3xl p-7 bg-white/95 border border-white/85 hover:border-purple-300 hover:shadow-xl transition duration-300"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-purple-800">
                        {project.eyebrow}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-bold text-slate-900 group-hover:text-purple-700 transition">
                        {project.title}
                      </h3>
                    </div>
                    <span className="shrink-0 rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs text-purple-900 font-mono font-semibold">
                      {project.semester}
                    </span>
                  </div>
                  <p className="mt-4 leading-relaxed text-slate-800 text-sm font-normal">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-slate-50 border border-slate-200 px-2.5 py-1 text-xs font-mono font-semibold text-slate-900 shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/80 pt-5">
                  <p className="max-w-[240px] text-xs leading-5 text-slate-700 sm:max-w-xs font-medium">
                    <span className="font-semibold text-slate-900">Fokus:</span> {project.focus}
                  </p>
                  <div className="flex items-center gap-2 shrink-0">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#ba83ca] via-[#79b3f4] to-[#41dfff] hover:brightness-105 px-3.5 py-2 text-xs font-bold text-slate-900 transition duration-200 shadow-sm active:scale-95 cursor-pointer"
                        aria-label={`Buka link artefak ${project.title}`}
                        title={`Buka tautan ${project.title}`}
                      >
                        <span>Buka Link</span>
                        <ExternalLink size={13} />
                      </a>
                    )}
                    {project.id === "s2-3" && onNavigateToMandiri && (
                      <button
                        onClick={onNavigateToMandiri}
                        className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-3 py-2 text-xs font-bold text-white shadow-sm transition cursor-pointer"
                        title="Buka 6 Analisis Praktik Mengajar Mandiri"
                      >
                        <Sparkles size={13} />
                        <span>6 Analisis Mandiri</span>
                      </button>
                    )}
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 px-3 py-2 text-xs font-medium text-slate-800 transition duration-200 active:scale-95 cursor-pointer"
                      aria-label={`Lihat detail ${project.title}`}
                      title="Lihat detail lengkap"
                    >
                      <span>Detail</span>
                      <ArrowUpRight size={13} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

