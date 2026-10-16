import React from "react";
import { ArrowLeft, Home, ChevronRight, Layers } from "lucide-react";
import { SUBPAGES_LIST } from "../../data/praktikMandiriData";

interface SubpageNavProps {
  currentSubpageId: string;
  onSelectSubpage: (id: string) => void;
  onBackToHub: () => void;
  onBackToHome: () => void;
}

export function SubpageNav({
  currentSubpageId,
  onSelectSubpage,
  onBackToHub,
  onBackToHome
}: SubpageNavProps) {
  const currentSubpage = SUBPAGES_LIST.find((s) => s.id === currentSubpageId);

  return (
    <div className="sticky top-20 z-40 mb-8 w-full">
      <div className="glass rounded-2xl border border-white/10 px-4 py-3 shadow-xl backdrop-blur-xl">
        {/* Top row: Breadcrumb and Back Button */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/5 pb-3">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-zinc-400">
            <button
              onClick={onBackToHome}
              className="flex items-center gap-1 hover:text-white transition"
              title="Kembali ke Beranda Portofolio"
            >
              <Home size={13} />
              <span>Beranda</span>
            </button>
            <ChevronRight size={12} className="text-zinc-600" />
            <button
              onClick={onBackToHub}
              className="hover:text-white transition font-medium"
            >
              Praktik Mengajar Mandiri
            </button>
            {currentSubpage && (
              <>
                <ChevronRight size={12} className="text-zinc-600" />
                <span className="text-indigo-300 font-semibold truncate max-w-[200px] sm:max-w-xs">
                  {currentSubpage.shortTitle}
                </span>
              </>
            )}
          </nav>

          {/* Back Button */}
          <button
            onClick={onBackToHub}
            className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-zinc-200 hover:bg-white/10 hover:text-white transition"
          >
            <ArrowLeft size={13} />
            <span>Menu Praktik Mandiri</span>
          </button>
        </div>

        {/* Bottom row: Subpages Switcher Pills */}
        <div className="mt-3 flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 mr-1 hidden sm:inline-flex items-center gap-1 shrink-0">
            <Layers size={12} />
            Subhalaman:
          </span>
          {SUBPAGES_LIST.map((sub) => {
            const isActive = sub.id === currentSubpageId;
            return (
              <button
                key={sub.id}
                onClick={() => onSelectSubpage(sub.id)}
                className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 font-medium whitespace-nowrap transition duration-200 shrink-0 ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20 font-semibold"
                    : "border border-white/5 bg-white/[0.03] text-zinc-400 hover:bg-white/[0.08] hover:text-zinc-200"
                }`}
              >
                <span className={`text-[10px] font-bold ${isActive ? "text-indigo-200" : "text-zinc-500"}`}>
                  {sub.number}
                </span>
                <span>{sub.shortTitle}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
