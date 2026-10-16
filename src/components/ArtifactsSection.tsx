import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  BookOpen,
  CheckCircle2,
  FolderOpen,
  Filter
} from "lucide-react";
import { Project, Semester } from "../types/portfolio";
import { projects, MASTER_DRIVE_LINKS } from "../data/projectsData";
import { artifactCategories } from "../data/reflectionData";

interface ArtifactsSectionProps {
  onSelectProject: (project: Project) => void;
}

export function ArtifactsSection({ onSelectProject }: ArtifactsSectionProps) {
  const [selectedSemester, setSelectedSemester] = useState<"All" | Semester>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchSemester =
        selectedSemester === "All" || project.semester === selectedSemester;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchSemester;

      const matchText =
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.focus.toLowerCase().includes(query) ||
        project.tags.some((t) => t.toLowerCase().includes(query)) ||
        (project.categoryTag && project.categoryTag.toLowerCase().includes(query));

      return matchSemester && matchText;
    });
  }, [selectedSemester, searchQuery]);

  return (
    <section id="artefak" className="py-20 sm:py-28 bg-slate-50/70 border-b border-slate-200/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-700 mb-2">
              03 · Artefak Mata Kuliah PPG
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Dokumentasi Modul, Perangkat &amp; Tugas
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Seluruh karya akademik dan modul ajar praktikum Informatika di SMAN 3 Yogyakarta yang disusun selama perkuliahan Semester I &amp; II.
            </p>
          </div>

          <a
            href={MASTER_DRIVE_LINKS.artefakFolder}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-indigo-600/20 hover:bg-indigo-700 transition shrink-0 self-start md:self-end"
          >
            <FolderOpen size={16} />
            <span>Buka Seluruh Folder Google Drive</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* 6 Core Artifact Categories Banner */}
        <div className="mb-10 rounded-3xl bg-white border border-slate-200 p-6 sm:p-7 shadow-xs">
          <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">
            <BookOpen size={15} className="text-indigo-600" />
            <span>Klasifikasi Artefak Pembelajaran</span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {artifactCategories.map((cat, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 hover:bg-indigo-50/30 hover:border-indigo-100 transition duration-200"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="rounded-md bg-indigo-50 px-2 py-0.5 text-[11px] font-bold text-indigo-700 border border-indigo-100">
                    {cat.badge}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  {cat.title}
                </h4>
                <p className="mt-1 text-[11px] text-slate-600 leading-relaxed line-clamp-2">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Search & Filters Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          {/* Semester Tabs */}
          <div className="flex items-center gap-1.5 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-xs">
            {(["All", "Semester I", "Semester II"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSemester(s)}
                className={`rounded-xl px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition ${
                  selectedSemester === s
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {s === "All" ? "Semua Artefak (11)" : s}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[260px] sm:max-w-xs w-full">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari mata kuliah / topik..."
              className="w-full rounded-2xl border border-slate-200 bg-white py-2 pl-9 pr-4 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>

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
                className="card-light rounded-3xl p-6 sm:p-7 bg-white border border-slate-200 shadow-sm hover:border-indigo-300 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top metadata */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700 block">
                        {project.eyebrow}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                        {project.title}
                      </h3>
                    </div>
                    <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 shrink-0">
                      {project.semester}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom details & action buttons */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="max-w-[220px] sm:max-w-xs text-xs text-slate-500 leading-snug">
                    <span className="font-bold text-slate-700">Fokus:</span> {project.focus}
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl border border-indigo-200 bg-indigo-50 px-3.5 py-2 text-xs font-semibold text-indigo-700 hover:bg-indigo-600 hover:text-white transition duration-200 shadow-xs"
                        title={`Buka Google Drive ${project.title}`}
                      >
                        <span>Link Drive</span>
                        <ExternalLink size={13} />
                      </a>
                    )}

                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition duration-200 shadow-xs"
                      title="Lihat detail lengkap tugas"
                    >
                      <span>Detail</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
            <p className="text-base font-semibold text-slate-700">
              Tidak ada artefak yang sesuai dengan pencarian "{searchQuery}"
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedSemester("All");
              }}
              className="mt-3 text-xs font-bold text-indigo-700 hover:underline"
            >
              Reset Filter &amp; Pencarian
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
