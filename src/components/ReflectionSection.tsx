import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Code2,
  AlertCircle,
  Lightbulb,
  CheckCircle2,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  Users,
  Compass
} from "lucide-react";
import { teachingProductProfile, reflectionSections } from "../data/reflectionData";

export function ReflectionSection() {
  const [activeSectionId, setActiveSectionId] = useState<string>("kendala");

  const currentSection =
    reflectionSections.find((s) => s.id === activeSectionId) || reflectionSections[0];

  return (
    <section id="refleksi" className="py-20 sm:py-28 bg-white border-b border-slate-200/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-700 mb-2">
            04 · Refleksi Pembelajaran Kritis
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Kajian Analisis Artefak &amp; Praktik KBM di SMAN 3 Yogyakarta
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Refleksi mendalam implementasi perangkat KBM pemrograman Python pada peserta didik Kelas X Fase E: telaah kendala, teori pedagogi yang diadopsi, dan faktor penentu keberhasilan.
          </p>
        </div>

        {/* Highlight Card: Profil Produk Pembelajaran */}
        <div className="card-light rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-indigo-50/70 via-white to-sky-50/50 border border-indigo-200 shadow-sm mb-10">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100 border border-indigo-200 px-3 py-1 text-xs font-bold text-indigo-800 uppercase tracking-wider">
              <Terminal size={13} />
              <span>Profil Modul Produk Pembelajaran</span>
            </span>
            <span className="text-xs font-semibold text-slate-500">
              SMAN 3 Yogyakarta (PADMANABA) · Fase E
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 pt-2">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-4 space-y-1 shadow-xs">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Satuan Pendidikan &amp; Sasaran
              </p>
              <h4 className="text-sm font-bold text-slate-900">{teachingProductProfile.school}</h4>
              <p className="text-xs text-indigo-700 font-semibold">{teachingProductProfile.target}</p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-4 space-y-1 shadow-xs">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Mata Pelajaran &amp; Materi Inti
              </p>
              <h4 className="text-sm font-bold text-slate-900">{teachingProductProfile.subject}</h4>
              <p className="text-xs text-slate-600 leading-snug">{teachingProductProfile.topic}</p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-4 space-y-1 shadow-xs sm:col-span-2 lg:col-span-1">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Platform Media Utama
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {teachingProductProfile.primaryTools.map((tool) => (
                  <span
                    key={tool.name}
                    className="rounded-md bg-indigo-50 border border-indigo-100 px-2 py-0.5 text-xs font-semibold text-indigo-800"
                  >
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tools Description Row */}
          <div className="mt-4 pt-4 border-t border-indigo-100/80 grid gap-2 sm:grid-cols-3 text-xs text-slate-600">
            {teachingProductProfile.primaryTools.map((tool) => (
              <div key={tool.name} className="flex items-start gap-1.5">
                <span className="size-1.5 rounded-full bg-indigo-600 mt-1.5 shrink-0" />
                <span>
                  <strong>{tool.name}:</strong> {tool.role}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Reflection Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-slate-200 pb-3">
          {reflectionSections.map((sec) => {
            const isActive = activeSectionId === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => setActiveSectionId(sec.id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-slate-900 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-950 hover:bg-slate-100"
                }`}
              >
                {sec.id === "kendala" && <AlertCircle size={15} />}
                {sec.id === "pedagogi" && <Lightbulb size={15} />}
                {sec.id === "keberhasilan" && <CheckCircle2 size={15} />}
                <span>{sec.badge}</span>
              </button>
            );
          })}
        </div>

        {/* Reflection Cards Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="max-w-3xl">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                {currentSection.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {currentSection.intro}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {currentSection.items.map((item, idx) => (
                <div
                  key={idx}
                  className="card-light rounded-2xl p-6 bg-white border border-slate-200 shadow-xs hover:border-indigo-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    {item.tag && (
                      <span className="inline-block rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-700 mb-3">
                        {item.tag}
                      </span>
                    )}
                    <h4 className="font-display text-base font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h4>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {item.highlight && (
                    <div className="mt-5 pt-3 border-t border-slate-100 text-xs font-semibold text-indigo-700">
                      ✓ {item.highlight}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
