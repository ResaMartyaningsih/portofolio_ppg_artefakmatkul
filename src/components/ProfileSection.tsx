import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Heart,
  Target,
  Award,
  School,
  ExternalLink,
  MapPin,
  Mail,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Compass,
  Phone,
  Globe,
  BookOpen,
  Code2,
  Users
} from "lucide-react";
import { profileData } from "../data/profileData";

type TabType = "biodata" | "makna" | "visi-misi" | "kompetensi" | "sekolah";

export function ProfileSection() {
  const [activeTab, setActiveTab] = useState<TabType>("biodata");

  const tabs = [
    { id: "biodata" as TabType, label: "Biodata & Asal Daerah", icon: User },
    { id: "makna" as TabType, label: "Makna Guru", icon: Heart },
    { id: "visi-misi" as TabType, label: "Visi & Misi Pendidik", icon: Target },
    { id: "kompetensi" as TabType, label: "Kompetensi & Karakter", icon: Award },
    { id: "sekolah" as TabType, label: "Sekolah Mitra PPL", icon: School }
  ];

  return (
    <section id="profil" className="py-20 sm:py-28 bg-slate-50/60 border-b border-slate-200/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-700 mb-2">
              01 · Profil &amp; Filosofi Pendidik
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Mengenal Profil, Prinsip &amp; Mitra Pembelajaran
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Kombinasi keilmuan sains informatika dan panggilan hati dalam menuntun kodrat generasi muda menghadapi era percepatan teknologi.
            </p>
          </div>

          {/* Tab Navigation Controls */}
          <div className="flex flex-wrap items-center gap-1.5 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-xs shrink-0 self-start md:self-end">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-sm shadow-indigo-600/30"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  <Icon size={15} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Contents */}
        <AnimatePresence mode="wait">
          {/* TAB 1: BIODATA & ASAL DAERAH */}
          {activeTab === "biodata" && (
            <motion.div
              key="biodata"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
            >
              <div className="card-light rounded-3xl p-6 sm:p-8 bg-white border border-slate-200 shadow-sm space-y-5">
                <div className="flex items-start gap-4">
                  <div className="grid size-12 place-items-center rounded-2xl bg-indigo-50 text-indigo-700 border border-indigo-100 shrink-0">
                    <User size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-slate-900">
                      {profileData.name}
                    </h3>
                    <p className="text-sm font-medium text-indigo-700">
                      {profileData.role} · {profileData.institution}
                    </p>
                  </div>
                </div>

                <p className="text-base leading-relaxed text-slate-700">
                  {profileData.originStory.description}
                </p>

                <p className="text-base leading-relaxed text-slate-600">
                  {profileData.originStory.passion}
                </p>

                <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-4">
                  <p className="text-sm italic text-slate-700 leading-relaxed">
                    “{profileData.originStory.commitment}”
                  </p>
                </div>

                {/* Region Link Banner */}
                <div className="pt-2">
                  <a
                    href={profileData.originStory.regionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-amber-300 bg-amber-50 px-4 py-2.5 text-xs sm:text-sm font-semibold text-amber-900 hover:bg-amber-100 transition shadow-xs"
                  >
                    <Sparkles size={15} className="text-amber-700" />
                    <span>Selengkapnya Tentang Keunikan Daerahku (Gunungkidul)</span>
                    <ExternalLink size={14} />
                  </a>
                </div>

                {/* Facts Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-center gap-2.5">
                    <GraduationCap size={16} className="text-indigo-600 shrink-0" />
                    <span><strong>LPTK:</strong> Universitas Negeri Yogyakarta</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <School size={16} className="text-indigo-600 shrink-0" />
                    <span><strong>Mitra PPL:</strong> SMAN 3 Yogyakarta</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MapPin size={16} className="text-indigo-600 shrink-0" />
                    <span><strong>Asal:</strong> Gunungkidul, D.I. Yogyakarta</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail size={16} className="text-indigo-600 shrink-0" />
                    <span className="truncate"><strong>Email:</strong> {profileData.email}</span>
                  </div>
                </div>
              </div>

              {/* Education History Card */}
              <div className="space-y-4">
                <div className="card-light rounded-3xl p-6 sm:p-7 bg-white border border-slate-200 shadow-sm">
                  <h4 className="font-display text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <GraduationCap size={20} className="text-indigo-600" />
                    <span>Riwayat Pendidikan &amp; Pelatihan</span>
                  </h4>
                  <div className="space-y-4">
                    {profileData.education.map((edu, idx) => (
                      <div key={idx} className="relative pl-6 border-l-2 border-indigo-200 space-y-1">
                        <span className="absolute -left-[7px] top-1 size-3 rounded-full bg-indigo-600" />
                        <span className="inline-block rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-700">
                          {edu.year}
                        </span>
                        <h5 className="text-sm font-bold text-slate-900">{edu.program}</h5>
                        <p className="text-xs font-medium text-indigo-700">{edu.institution}</p>
                        <p className="text-xs text-slate-600 leading-relaxed mt-1">{edu.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card-light rounded-3xl p-5 bg-gradient-to-br from-indigo-50/70 to-sky-50/60 border border-indigo-100">
                  <div className="flex items-center gap-2 text-indigo-800 font-bold text-xs uppercase tracking-wider mb-2">
                    <Sparkles size={14} />
                    <span>Komitmen Profesional Guru</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Menerapkan prinsip Ki Hajar Dewantara <em>Ing Ngarsa Sung Tuladha, Ing Madya Mangun Karsa, Tut Wuri Handayani</em> dalam setiap interaksi KBM di era kecerdasan artifisial.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: MAKNA GURU */}
          {activeTab === "makna" && (
            <motion.div
              key="makna"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="card-light rounded-3xl p-7 sm:p-10 bg-white border border-slate-200 shadow-sm max-w-4xl mx-auto space-y-6"
            >
              <div className="text-center max-w-2xl mx-auto space-y-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 border border-rose-200 px-3 py-1 text-xs font-bold text-rose-700 uppercase tracking-wider">
                  <Heart size={13} />
                  <span>Panggilan Jiwa &amp; Tanggung Jawab Moral</span>
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                  {profileData.maknaGuru.title}
                </h3>
              </div>

              <blockquote className="rounded-2xl border-l-4 border-indigo-600 bg-slate-50 p-6 text-base sm:text-xl font-medium text-slate-800 italic leading-relaxed text-center">
                {profileData.maknaGuru.quote}
              </blockquote>

              <div className="grid gap-4 sm:grid-cols-3 pt-4">
                {profileData.maknaGuru.paragraphs.map((p, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5 space-y-2 hover:bg-white hover:border-slate-200 hover:shadow-xs transition duration-200"
                  >
                    <span className="font-mono text-xs font-bold text-indigo-700">0{i + 1}</span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{p}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 3: VISI & MISI */}
          {activeTab === "visi-misi" && (
            <motion.div
              key="visi-misi"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Visi Card */}
              <div className="card-light rounded-3xl p-7 sm:p-10 bg-gradient-to-br from-indigo-50 via-white to-sky-50 border border-indigo-200 shadow-sm">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100 border border-indigo-200 px-3 py-1 text-xs font-bold text-indigo-800 uppercase tracking-widest mb-3">
                  <Compass size={14} />
                  <span>Visi Pendidik Informatika</span>
                </div>
                <h3 className="font-display text-xl sm:text-3xl font-bold text-slate-900 leading-relaxed max-w-4xl">
                  “Mewujudkan pembelajaran Informatika yang transformatif, inklusif, dan humanis guna menuntun kodrat peserta didik menjadi pemecah masalah (<em>problem solver</em>) yang bernalar kritis, kreatif, berkarakter luhur, dan berdaya saing di era digital.”
                </h3>
              </div>

              {/* Misi Cards */}
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    num: "01",
                    title: "Pembelajaran Bermakna & Computational Thinking",
                    desc: "Menyajikan konsep algoritma, pemrograman, dan literasi digital yang berakar pada konteks kehidupan nyata siswa, sehingga materi tidak dirasakan abstrak melainkan aplikatif.",
                    badge: "Kontekstual"
                  },
                  {
                    num: "02",
                    title: "Inklusivitas & Diferensiasi Melalui DUP",
                    desc: "Menerapkan prinsip Desain Universal untuk Pembelajaran agar setiap siswa—dengan keragaman kesiapan awal dan modalitas belajarnya—memiliki akses dan tantangan yang berkeadilan.",
                    badge: "Inklusif & Adaptif"
                  },
                  {
                    num: "03",
                    title: "Penguatan Karakter, Growth Mindset & CASEL",
                    desc: "Membangun ruang kelas yang aman secara sosial-emosional, di mana kesalahan sintaks (syntax error) dipandang sebagai peluang belajar dan melatih ketangguhan mental siswa.",
                    badge: "Sosial Emosional"
                  },
                  {
                    num: "04",
                    title: "Refleksi Berkelanjutan & Riset PTK Berbasis Data",
                    desc: "Membiasakan evaluasi diri berbasis bukti (evidence-based teaching) melalui Penelitian Tindakan Kelas (PTK) demi perbaikan kualitas proses pembelajaran secara berkelanjutan.",
                    badge: "Continuous Learning"
                  }
                ].map((item) => (
                  <div
                    key={item.num}
                    className="card-light rounded-2xl p-6 bg-white border border-slate-200 shadow-xs hover:border-indigo-300 transition"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-sm font-bold text-indigo-700">{item.num}</span>
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-700">
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="font-display text-base font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 4: KOMPETENSI & KARAKTER */}
          {activeTab === "kompetensi" && (
            <motion.div
              key="kompetensi"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* 4 Guru Kompetensi */}
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <BookOpen size={20} className="text-indigo-600" />
                  <span>4 Standar Kompetensi Guru</span>
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {profileData.competencies.map((comp) => {
                    const iconMap: Record<string, any> = {
                      book: BookOpen,
                      code: Code2,
                      users: Users,
                      heart: Heart
                    };
                    const CompIcon = iconMap[comp.icon] || Award;
                    return (
                      <div
                        key={comp.name}
                        className="card-light rounded-2xl p-5 bg-white border border-slate-200 shadow-xs hover:border-indigo-300 transition"
                      >
                        <div className="grid size-10 place-items-center rounded-xl bg-indigo-50 text-indigo-700 mb-3 border border-indigo-100">
                          <CompIcon size={18} />
                        </div>
                        <h4 className="font-display text-sm font-bold text-slate-900">
                          {comp.name}
                        </h4>
                        <p className="mt-2 text-xs text-slate-600 leading-relaxed">{comp.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 4 Karakter Ideal dari Canva */}
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Sparkles size={20} className="text-amber-600" />
                  <span>Karakter Guru Ideal yang Dituju</span>
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {profileData.idealCharacteristics.map((char) => (
                    <div
                      key={char.name}
                      className="card-light rounded-2xl p-5 bg-white border border-slate-200 shadow-xs hover:border-amber-300 transition"
                    >
                      <span className="inline-block rounded-md bg-amber-50 px-2.5 py-0.5 text-xs font-bold text-amber-800 mb-2 border border-amber-200">
                        {char.tagline}
                      </span>
                      <h4 className="font-display text-base font-bold text-slate-900">
                        {char.name}
                      </h4>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">{char.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 5: SEKOLAH MITRA PPL */}
          {activeTab === "sekolah" && (
            <motion.div
              key="sekolah"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="card-light rounded-3xl p-6 sm:p-9 bg-white border border-slate-200 shadow-sm space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="rounded-lg bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-800 border border-emerald-200">
                      Sekolah Mitra Latihan PPL
                    </span>
                    <span className="rounded-lg bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-700">
                      {profileData.partnerSchoolProfile.accreditation}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                    {profileData.partnerSchoolProfile.name} ({profileData.partnerSchoolProfile.alias})
                  </h3>
                </div>

                <a
                  href={profileData.partnerSchoolProfile.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-800 hover:bg-slate-100 transition shrink-0"
                >
                  <MapPin size={14} className="text-rose-600" />
                  <span>Petunjuk Arah (Maps)</span>
                  <ExternalLink size={13} />
                </a>
              </div>

              <p className="text-base leading-relaxed text-slate-700">
                {profileData.partnerSchoolProfile.overview}
              </p>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 pt-3 text-xs sm:text-sm text-slate-600">
                <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 space-y-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    Alamat Lengkap
                  </p>
                  <p className="font-medium text-slate-800 leading-snug">
                    {profileData.partnerSchoolProfile.address}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 space-y-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    Website Resmi
                  </p>
                  <a
                    href={profileData.partnerSchoolProfile.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-indigo-700 hover:underline flex items-center gap-1"
                  >
                    <Globe size={13} />
                    <span>sma3jogja.sch.id</span>
                  </a>
                </div>

                <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 space-y-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    Media Sosial
                  </p>
                  <a
                    href={profileData.partnerSchoolProfile.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-pink-700 hover:underline flex items-center gap-1"
                  >
                    <span>@sma3padmanaba</span>
                  </a>
                </div>

                <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 space-y-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    Layanan Kontak
                  </p>
                  <p className="font-medium text-slate-800 flex items-center gap-1">
                    <Phone size={13} />
                    <span>{profileData.partnerSchoolProfile.phone}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
