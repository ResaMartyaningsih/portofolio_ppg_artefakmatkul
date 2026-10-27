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
      <div className="studio-card rounded-2xl border border-white/85 px-5 py-3.5 shadow-lg bg-white/95 backdrop-blur-xl">
        {/* Top row: Breadcrumb and Back Button */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-600 font-medium">
            <button
              onClick={onBackToHome}
              className="flex items-center gap-1.5 hover:text-purple-700 transition cursor-pointer font-bold text-slate-800"
              title="Kembali ke Beranda Portofolio"
            >
              <Home size={14} className="text-purple-700" />
              <span>Beranda</span>
            </button>
            <ChevronRight size={13} className="text-slate-400" />
            <button
              onClick={onBackToHub}
              className="hover:text-purple-700 transition font-bold text-slate-800 cursor-pointer"
            >
              Praktik Mengajar Mandiri
            </button>
            {currentSubpage && (
              <>
                <ChevronRight size={13} className="text-slate-400" />
                <span className="text-purple-900 font-bold truncate max-w-[200px] sm:max-w-xs font-mono">
                  {currentSubpage.shortTitle}
                </span>
              </>
            )}
          </nav>

          {/* Back Button */}
          <button
            onClick={onBackToHub}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-100 hover:bg-gradient-to-r hover:from-[#ba83ca] hover:to-[#79b3f4] hover:text-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-800 transition cursor-pointer shadow-2xs"
          >
            <ArrowLeft size={13} />
            <span>Menu Praktik Mandiri</span>
          </button>
        </div>

        {/* Bottom row: Subpages Switcher Pills */}
        <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1 text-xs no-scrollbar">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-700 mr-1 hidden sm:inline-flex items-center gap-1 shrink-0">
            <Layers size={13} className="text-purple-700" />
            Subhalaman:
          </span>
          {SUBPAGES_LIST.map((sub) => {
            const isActive = sub.id === currentSubpageId;
            return (
              <button
                key={sub.id}
                onClick={() => onSelectSubpage(sub.id)}
                className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 font-bold whitespace-nowrap transition duration-200 shrink-0 cursor-pointer text-xs ${
                  isActive
                    ? "bg-gradient-to-r from-[#ba83ca] to-[#79b3f4] text-white shadow-md border border-white/50"
                    : "border border-slate-200 bg-slate-100/90 text-slate-700 hover:bg-white hover:text-slate-950 hover:border-purple-200"
                }`}
              >
                <span className={`text-[10px] font-mono ${isActive ? "text-purple-100" : "text-slate-500 font-semibold"}`}>
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
