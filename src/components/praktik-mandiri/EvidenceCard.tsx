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
        return <Video size={18} className="text-pink-400" />;
      case "image":
        return <ImageIcon size={18} className="text-emerald-400" />;
      case "folder":
        return <FolderGit2 size={18} className="text-amber-400" />;
      default:
        return <FileText size={18} className="text-indigo-400" />;
    }
  };

  return (
    <div className="glass rounded-2xl border border-white/10 p-5 shadow-lg hover:border-indigo-500/30 transition duration-300 flex flex-col justify-between group">
      <div>
        {imageUrl && (
          <div className="relative mb-4 overflow-hidden rounded-xl border border-white/10 aspect-video bg-zinc-900">
            <img
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
              onError={(e) => {
                // fallback to placeholder icon if image path fails
                (e.target as HTMLElement).style.display = "none";
              }}
            />
          </div>
        )}

        <div className="flex items-center gap-2 mb-2">
          <span className="grid size-7 place-items-center rounded-lg bg-white/5 border border-white/10">
            {getIcon()}
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
            {type === "document" ? "Dokumen Perencanaan" : type === "video" ? "Rekaman Video" : type === "image" ? "Dokumentasi Foto" : "Folder Sumber"}
          </span>
        </div>

        <h4 className="font-display text-base font-semibold text-white leading-snug group-hover:text-indigo-200 transition">
          {title}
        </h4>

        {description && (
          <p className="mt-2 text-xs leading-relaxed text-zinc-400">
            {description}
          </p>
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-white/5">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-3.5 py-2 text-xs font-semibold text-indigo-300 border border-indigo-500/20 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition"
          >
            <span>{actionText}</span>
            <ExternalLink size={13} />
          </a>
        ) : (
          <span className="text-[11px] text-zinc-500 italic">Tersedia secara lokal di laboratorium</span>
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
    <div className="rounded-2xl border border-dashed border-zinc-800 bg-white/[0.02] p-6 text-center">
      <div className="mx-auto mb-3 grid size-10 place-items-center rounded-xl bg-zinc-900 border border-white/10 text-zinc-500">
        <AlertCircle size={20} />
      </div>
      <p className="text-sm font-semibold text-zinc-300">{label}</p>
      <p className="mt-1 text-xs text-zinc-500 max-w-md mx-auto">{note}</p>
    </div>
  );
}
