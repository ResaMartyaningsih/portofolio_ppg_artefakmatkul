import { useState, useEffect } from "react";
import { AnimatePresence, motion, MotionValue } from "framer-motion";
import { Menu, X, ExternalLink, Sparkles } from "lucide-react";
import { MASTER_DRIVE_LINKS } from "../data/projectsData";

interface NavbarProps {
  progress: MotionValue<number>;
}

export function Navbar({ progress }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ["home", "profil", "perjalanan", "artefak", "refleksi", "galeri", "kontak"];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Beranda", href: "#home", id: "home" },
    { label: "Profil", href: "#profil", id: "profil" },
    { label: "Perjalanan", href: "#perjalanan", id: "perjalanan" },
    { label: "Artefak", href: "#artefak", id: "artefak" },
    { label: "Refleksi", href: "#refleksi", id: "refleksi" },
    { label: "Galeri", href: "#galeri", id: "galeri" },
    { label: "Kontak", href: "#kontak", id: "kontak" }
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Spring Progress Bar at Top */}
      <motion.div
        className="fixed left-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-500 shadow-sm"
        style={{ scaleX: progress, width: "100%" }}
      />

      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4 transition-all duration-300">
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
            scrolled ? "nav-glass shadow-md" : "bg-white/95 border border-slate-200/90 shadow-sm"
          }`}
        >
          {/* Logo & Brand */}
          <a
            href="#home"
            onClick={closeMenu}
            className="flex items-center gap-2.5 group"
            aria-label="Beranda Resa Martyaningsih"
          >
            <div className="grid size-9 sm:size-10 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 group-hover:scale-105 transition-transform duration-200">
              RM
            </div>
            <div className="text-left">
              <span className="block font-display text-sm sm:text-base font-bold text-slate-900 leading-tight">
                Resa Martyaningsih
              </span>
              <span className="flex items-center gap-1 text-[11px] font-medium text-slate-500 leading-tight">
                <span>PPG Informatika UNY</span>
                <span className="inline-block size-1 rounded-full bg-emerald-500" />
                <span className="text-emerald-700 font-semibold">Padmanaba</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-600">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`rounded-lg px-3 py-1.5 transition-all duration-200 ${
                    isActive
                      ? "bg-indigo-50 text-indigo-700 font-semibold shadow-xs"
                      : "hover:text-slate-950 hover:bg-slate-100/70"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Actions & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <a
              href={MASTER_DRIVE_LINKS.artefakFolder}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-indigo-200 bg-indigo-50/80 px-3.5 py-1.5 text-xs font-semibold text-indigo-700 hover:bg-indigo-100 hover:text-indigo-800 transition duration-200"
              title="Buka Arsip Google Drive Artefak"
            >
              <Sparkles size={13} className="text-indigo-600" />
              <span>Arsip Drive</span>
              <ExternalLink size={12} />
            </a>

            <a
              href="#kontak"
              className="hidden md:inline-flex rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-indigo-700 hover:shadow active:scale-95"
            >
              Hubungi Saya
            </a>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="grid size-9 place-items-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 lg:hidden transition"
              aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="mx-auto mt-2 max-w-6xl rounded-2xl border border-slate-200/90 bg-white/95 p-3 shadow-xl backdrop-blur-xl lg:hidden"
            >
              <div className="grid gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={closeMenu}
                    className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                      activeSection === item.id
                        ? "bg-indigo-50 text-indigo-700 font-semibold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{item.label}</span>
                    {activeSection === item.id && (
                      <span className="size-1.5 rounded-full bg-indigo-600" />
                    )}
                  </a>
                ))}
              </div>

              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between gap-2 px-1">
                <a
                  href={MASTER_DRIVE_LINKS.artefakFolder}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-700 py-1"
                >
                  <ExternalLink size={13} />
                  <span>Folder Drive Artefak</span>
                </a>
                <a
                  href="#kontak"
                  onClick={closeMenu}
                  className="rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white"
                >
                  Kontak
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
