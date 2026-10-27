import React from "react";
import { FileText, ExternalLink, Image as ImageIcon, Video, FolderGit2, AlertCircle } from "lucide-react";

interface EvidenceCardProps {
  title: string;
  type: "document" | "image" | "video" | "folder";
  description?: string;
  link?: string;
  imageUrl?: string;
  actionText?: string;
}

export function EvidenceCard({
  title,
  type,
  description,
  link,
  imageUrl,
  actionText = "Buka Bukti Dokumen"
}: EvidenceCardProps) {
  const getIcon = () => {
    switch (type) {
      case "video":
        return <Video size={16} className="text-pink-700" />;
      case "image":
        return <ImageIcon size={16} className="text-emerald-700" />;
      case "folder":
        return <FolderGit2 size={16} className="text-amber-700" />;
      default:
        return <FileText size={16} className="text-indigo-700" />;
    }
  };

  return (
    <div className="studio-card rounded-2xl border border-white/80 p-5 bg-white/95 shadow-sm hover:border-purple-300 hover:shadow-md transition duration-300 flex flex-col justify-between group">
      <div>
        {imageUrl && (
          <div className="relative mb-4 overflow-hidden rounded-xl border border-slate-200 aspect-video bg-slate-100">
            <img
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
              onError={(e) => {
                (e.target as HTMLElement).style.display = "none";
              }}
            />
          </div>
        )}

        <div className="flex items-center gap-2 mb-2">
          <span className="grid size-7 place-items-center rounded-lg bg-slate-100 border border-slate-200">
            {getIcon()}
          </span>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-600">
            {type === "document" ? "Dokumen Perencanaan" : type === "video" ? "Rekaman Video" : type === "image" ? "Dokumentasi Foto" : "Folder Sumber"}
          </span>
        </div>

        <h4 className="font-display text-base font-bold text-slate-900 leading-snug group-hover:text-purple-700 transition">
          {title}
        </h4>

        {description && (
          <p className="mt-2 text-xs leading-relaxed text-slate-700 font-normal">
            {description}
          </p>
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-slate-200">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-purple-50 hover:bg-gradient-to-r hover:from-[#ba83ca] hover:to-[#79b3f4] text-purple-900 hover:text-white px-3.5 py-2 text-xs font-bold uppercase tracking-wider border border-purple-200 transition shadow-2xs cursor-pointer"
          >
            <span>{actionText}</span>
            <ExternalLink size={13} />
          </a>
        ) : (
          <span className="text-[11px] text-slate-500 italic font-medium">Tersedia secara lokal di laboratorium</span>
        )}
      </div>
    </div>
  );
}

export function EvidencePlaceholder({
  label = "Dokumentasi Belum Ditambahkan",
  note = "Berkas bukti tambahan sedang dalam proses pengunggahan atau verifikasi."
}: {
  label?: string;
  note?: string;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white/70 p-6 text-center backdrop-blur-sm">
      <div className="mx-auto mb-3 grid size-10 place-items-center rounded-xl bg-purple-50 border border-purple-200 text-purple-700">
        <AlertCircle size={20} />
      </div>
      <p className="font-display text-sm font-bold text-slate-900">{label}</p>
      <p className="mt-1 text-xs text-slate-600 max-w-sm mx-auto font-normal">{note}</p>
    </div>
  );
}
