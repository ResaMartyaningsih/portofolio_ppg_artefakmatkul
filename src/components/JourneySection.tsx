import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  School,
  BookOpen,
  Award,
  Sparkles,
  Code2,
  Users,
  CheckCircle2,
  Clock
} from "lucide-react";
import { journeyMilestones } from "../data/journeyData";
import { Semester } from "../types/portfolio";

export function JourneySection() {
  const [semesterFilter, setSemesterFilter] = useState<"All" | Semester>("All");

  const filteredMilestones =
    semesterFilter === "All"
      ? journeyMilestones
      : journeyMilestones.filter((m) => m.semester === semesterFilter);

  const getIcon = (type: string) => {
    switch (type) {
      case "book":
        return <BookOpen size={18} className="text-indigo-600" />;
      case "school":
        return <School size={18} className="text-emerald-600" />;
      case "code":
        return <Code2 size={18} className="text-sky-600" />;
      case "sparkles":
        return <Sparkles size={18} className="text-amber-600" />;
      case "users":
        return <Users size={18} className="text-purple-600" />;
      default:
        return <Award size={18} className="text-indigo-600" />;
    }
  };

  return (
    <section id="perjalanan" className="py-20 sm:py-28 bg-white border-b border-slate-200/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-700 mb-2">
              02 · Perjalanan PPG Calon Guru
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Linimasa Proses Belajar &amp; Praktik Lapangan
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Jejak langkah pembelajaran mendalam dari internalisasi filosofi pendidikan hingga praktik mengajar mandiri di SMAN 3 Yogyakarta.
            </p>
          </div>

          {/* Filter Semester */}
          <div className="flex items-center gap-1.5 rounded-2xl border border-slate-200 bg-slate-50 p-1.5 shrink-0 self-start md:self-end">
            {(["All", "Semester I", "Semester II"] as const).map((sem) => (
              <button
                key={sem}
                onClick={() => setSemesterFilter(sem)}
                className={`rounded-xl px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition ${
                  semesterFilter === sem
                    ? "bg-white text-indigo-700 shadow-xs border border-slate-200/80"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {sem === "All" ? "Semua Semester" : sem}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Component */}
        <div className="relative border-l-2 border-indigo-100 ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-10">
          {filteredMilestones.map((m, index) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative"
            >
              {/* Timeline Marker Node */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 grid size-8 sm:size-9 place-items-center rounded-xl bg-white border-2 border-indigo-300 shadow-xs">
                {getIcon(m.iconType)}
              </div>

              {/* Milestone Card */}
              <div className="card-light rounded-2xl p-6 sm:p-7 bg-white border border-slate-200 shadow-sm hover:border-indigo-300 transition">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded-md">
                      <Clock size={12} />
                      {m.period}
                    </span>
                    <span className="rounded-md bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">
                      {m.semester}
                    </span>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-0.5 text-[11px] font-semibold text-emerald-800 border border-emerald-200">
                    {m.badge}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mt-2">
                  {m.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">
                  {m.subtitle}
                </p>

                <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  {m.description}
                </p>

                {/* Key Points */}
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Capaian &amp; Esensi Pembelajaran
                  </p>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                    {m.keyPoints.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
