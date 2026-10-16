import { ExternalLink, Heart, Sparkles } from "lucide-react";
import { MASTER_DRIVE_LINKS } from "../data/projectsData";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] pb-12 border-b border-slate-800">
          {/* Brand & Purpose */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-xl bg-indigo-600 text-white font-bold text-sm">
                RM
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white leading-tight">
                  Resa Martyaningsih, S.Kom.
                </h3>
                <p className="text-xs text-slate-400">
                  Mahasiswa PPG Calon Guru Informatika · Universitas Negeri Yogyakarta
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Website portofolio ini mendokumentasikan seluruh artefak perkuliahan, refleksi KBM praktikum di SMA Negeri 3 Yogyakarta, dan komitmen profesional untuk menuntun kodrat generasi digital secara humanis.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <Sparkles size={14} />
              <span>Reflect · Adapt · Teach · Keep Learning</span>
            </div>
          </div>

          {/* Quick Links & Sources */}
          <div className="grid grid-cols-2 gap-6 text-xs">
            <div>
              <p className="font-bold uppercase tracking-wider text-white mb-3">Navigasi Halaman</p>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="hover:text-white transition">Beranda</a>
                </li>
                <li>
                  <a href="#profil" className="hover:text-white transition">Profil &amp; Makna Guru</a>
                </li>
                <li>
                  <a href="#perjalanan" className="hover:text-white transition">Perjalanan PPG</a>
                </li>
                <li>
                  <a href="#artefak" className="hover:text-white transition">Artefak Mata Kuliah</a>
                </li>
                <li>
                  <a href="#refleksi" className="hover:text-white transition">Refleksi Pembelajaran</a>
                </li>
                <li>
                  <a href="#galeri" className="hover:text-white transition">Galeri KBM PPL</a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-bold uppercase tracking-wider text-white mb-3">Tautan Eksternal</p>
              <ul className="space-y-2">
                <li>
                  <a
                    href={MASTER_DRIVE_LINKS.artefakFolder}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition flex items-center gap-1 text-indigo-400"
                  >
                    <span>Google Drive Artefak</span>
                    <ExternalLink size={11} />
                  </a>
                </li>
                <li>
                  <a
                    href={MASTER_DRIVE_LINKS.fotoDokumentasi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition flex items-center gap-1 text-indigo-400"
                  >
                    <span>Folder Foto Dokumentasi</span>
                    <ExternalLink size={11} />
                  </a>
                </li>
                <li>
                  <a
                    href={MASTER_DRIVE_LINKS.keunikanDaerah}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition flex items-center gap-1 text-amber-400"
                  >
                    <span>Keunikan Gunungkidul</span>
                    <ExternalLink size={11} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://sma3jogja.sch.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition flex items-center gap-1"
                  >
                    <span>SMAN 3 Yogyakarta</span>
                    <ExternalLink size={11} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://uny.ac.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition flex items-center gap-1"
                  >
                    <span>LPTK UNY Official</span>
                    <ExternalLink size={11} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Resa Martyaningsih, S.Kom. Hak cipta dilindungi.</p>
          <p className="flex items-center gap-1">
            <span>Didedikasikan untuk kemajuan Pendidikan Informatika Indonesia</span>
            <Heart size={12} className="text-rose-500 fill-rose-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
