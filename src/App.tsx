import { FormEvent, useMemo, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowUpRight, Check, ChevronRight, Code2, ExternalLink, Github,
  GraduationCap, Layers3, Mail, Menu, Send, Sparkles, X
} from "lucide-react";

type Semester = "Semester I" | "Semester II";

type Project = {
  id: string;
  semester: Semester;
  title: string;
  eyebrow: string;
  description: string;
  focus: string;
  tags: string[];
  details: string[];
};

const projects: Project[] = [
  { id: "s1-1", semester: "Semester I", title: "Filosofi Pendidikan", eyebrow: "Semester I · Mata Kuliah", description: "Fondasi pemikiran tentang pendidikan, kodrat alam dan kodrat zaman, pendidikan yang berpihak pada peserta didik, serta peran guru sebagai penuntun.", focus: "Menghubungkan pembelajaran Informatika dengan kehidupan, karakter, tanggung jawab, dan konteks peserta didik.", tags: ["Kodrat Alam", "Kodrat Zaman", "Kontekstual", "Student-Centered"], details: ["Mengubah pandangan dari Informatika sebagai kemampuan teknis menjadi sarana pendidikan yang kontekstual.", "Menempatkan peserta didik sebagai subjek pembelajaran, bukan sekadar penerima materi.", "Mendorong pembelajaran Informatika yang relevan dengan kehidupan dan bertanggung jawab."] },
  { id: "s1-2", semester: "Semester I", title: "Pemahaman Tentang Peserta Didik dan Pembelajaran", eyebrow: "Semester I · Mata Kuliah", description: "Membangun pemahaman tentang keberagaman peserta didik melalui profiling, kesiapan belajar, pengetahuan awal, minat, serta karakteristik kognitif dan sosial emosional.", focus: "Menggunakan profiling sebagai dasar strategi pembelajaran dan pendampingan yang sesuai.", tags: ["Profiling", "Learning Readiness", "Minat", "Karakteristik Siswa"], details: ["Mengidentifikasi pengalaman coding, kemampuan logika, minat, dan kebutuhan siswa.", "Memahami bahwa kemampuan belajar tidak dapat dilihat hanya dari nilai.", "Menggunakan hasil pemetaan untuk membentuk kelompok belajar dan menentukan pendampingan."] },
  { id: "s1-3", semester: "Semester I", title: "Pembelajaran Mendalam dan Asessmen (PMA) Dasar SMK", eyebrow: "Semester I · Mata Kuliah", description: "Memahami pembelajaran dan asesmen yang fleksibel untuk merespons keberagaman kemampuan peserta didik.", focus: "Menerapkan prinsip Desain Universal untuk Pembelajaran agar siswa memiliki beragam cara menunjukkan pemahaman.", tags: ["PMA", "DUP", "Asesmen", "Scaffolding"], details: ["Memahami bahwa pemahaman algoritma tidak harus selalu ditunjukkan melalui kode.", "Flowchart, pseudocode, maupun penjelasan logika dapat menjadi representasi pemahaman.", "Menyediakan pilihan aktivitas dan asesmen sesuai kesiapan belajar."] },
  { id: "s1-4", semester: "Semester I", title: "Praktik Pengalaman Lapangan (PPL)", eyebrow: "Semester I · Mata Kuliah", description: "Pengalaman praktik pembelajaran Informatika melalui pendampingan praktikum pemrograman Python di lingkungan sekolah.", focus: "Mengembangkan scaffolding, diferensiasi pendampingan, praktik terbimbing, dan refleksi pembelajaran.", tags: ["PPL", "Python", "Scaffolding", "Praktik Terbimbing"], details: ["Mengalami secara langsung bahwa pembelajaran coding tidak selalu berjalan sesuai rencana.", "Mendampingi siswa memahami alur berpikir ketika menghadapi error, bukan sekadar memberi jawaban kode.", "Merancang praktikum bertahap dari memahami masalah, algoritma, coding, hingga debugging."] },
  { id: "s1-5", semester: "Semester I", title: "Pola Pikir Bertumbuh (Growth Mindset)", eyebrow: "Semester I · Mata Kuliah", description: "Membangun cara pandang bahwa kesalahan coding merupakan bagian dari proses belajar dan debugging.", focus: "Menggunakan process-based praise, The Power of Yet, dan growth-oriented feedback.", tags: ["Growth Mindset", "The Power of Yet", "Feedback", "Debugging"], details: ["Mengurangi pujian yang hanya berfokus pada label kemampuan seperti 'pintar coding'.", "Menghargai proses, usaha, strategi, dan kegigihan siswa.", "Membangun culture of debugging agar pesan error menjadi petunjuk untuk belajar."] },
  { id: "s1-6", semester: "Semester I", title: "Pendidikan Kreatif Inovatif", eyebrow: "Semester I · Mata Kuliah", description: "Mengembangkan kemampuan menemukan masalah pembelajaran dan merancang solusi kreatif serta inovatif berdasarkan data.", focus: "Menggunakan strategi seperti Pair Programming dan refleksi berbasis siklus perbaikan.", tags: ["Kreatif", "Inovatif", "Pair Programming", "PTK"], details: ["Melihat coding anxiety dan kesalahan pemrograman sebagai masalah yang dapat dianalisis.", "Mengembangkan Pair Programming dengan peran Driver dan Navigator.", "Menghubungkan identifikasi masalah, solusi, indikator keberhasilan, dan rencana aksi."] },
  { id: "s2-1", semester: "Semester II", title: "Pembelajaran Sosial Emosional", eyebrow: "Semester II · Mata Kuliah", description: "Memperluas pembelajaran Informatika dengan perhatian pada kondisi emosional, relasi, dan kemampuan sosial peserta didik.", focus: "Menerapkan lima kompetensi CASEL dalam lingkungan belajar yang aman dan suportif.", tags: ["CASEL", "Self-Awareness", "Relationship Skills", "Mindfulness"], details: ["Memahami self-awareness, self-management, social awareness, relationship skills, dan responsible decision-making.", "Membantu siswa mengelola frustrasi ketika menghadapi debugging.", "Mengembangkan peer debugging dengan komunikasi empatik dan constructive feedback."] },
  { id: "s2-2", semester: "Semester II", title: "Pembelajaran Mendalam dan Asesmen Lanjut", eyebrow: "Semester II · Mata Kuliah", description: "Memperkuat asesmen awal dan pemetaan kemampuan murid dengan pendekatan multimoda dan pembelajaran mendalam.", focus: "Menyusun learning path berdasarkan kesiapan, logika, dan kemampuan problem solving siswa.", tags: ["Asesmen Awal", "DUP", "Learning Path", "Problem Solving"], details: ["Menggunakan asesmen multimoda sebelum materi Python seperti fungsi, struktur data, dan perulangan.", "Memberi ruang bagi flowchart, blok algoritma, atau penjelasan lisan.", "Memberikan scaffolding untuk pemula dan proyek pengayaan bagi siswa yang lebih mahir."] },
  { id: "s2-3", semester: "Semester II", title: "Praktik Pengalaman Lapangan (PPL) Mandiri", eyebrow: "Semester II · Mata Kuliah", description: "Memperkuat pengalaman praktik pembelajaran Python melalui pendampingan yang lebih personal dan reflektif.", focus: "Menerapkan starter code, tantangan bertingkat, peer debugging, dan penanganan error sebagai peluang belajar.", tags: ["PPL Mandiri", "Python", "Starter Code", "Peer Debugging"], details: ["Merespons perbedaan kemampuan siswa pada variabel, indentasi, dan logika program.", "Mengubah pembelajaran satu arah menjadi pendampingan yang lebih personal.", "Mengembangkan kemandirian siswa dalam menyelesaikan masalah pemrograman."] },
  { id: "s2-4", semester: "Semester II", title: "Projek Kepemimpinan", eyebrow: "Semester II · Mata Kuliah", description: "Mengembangkan jiwa kepemimpinan guru melalui pemetaan masalah lingkungan dan perancangan program yang berdampak.", focus: "Menggunakan needs assessment, pemetaan aset, dan kerangka Why-How-What.", tags: ["Leadership", "Needs Assessment", "Why-How-What", "Mentoring"], details: ["Memahami bahwa program perlu berangkat dari kebutuhan nyata, bukan hanya ide pribadi.", "Mengembangkan gagasan Python Peer-Mentoring atau Klub Coding.", "Melibatkan Guru Pamong, kepala laboratorium, dan siswa yang lebih mahir dalam perencanaan."] },
  { id: "s2-5", semester: "Semester II", title: "Pengembangan Keprofesian Berkelanjutan", eyebrow: "Semester II · Mata Kuliah", description: "Membangun kebiasaan penelitian, refleksi, dan perbaikan praktik pembelajaran secara sistematis.", focus: "Menggunakan penelitian tindakan kelas untuk mengubah masalah pembelajaran menjadi dasar pengambilan keputusan.", tags: ["PTK", "Plan-Do-Observe-Reflect", "Data", "Refleksi"], details: ["Memahami PTK sebagai kegiatan praktis, kolaboratif, dan reflektif yang menyatu dengan pembelajaran.", "Menggunakan data kualitatif dan kuantitatif untuk mengevaluasi tindakan.", "Mengembangkan gagasan PTK tentang media interaktif untuk mengurangi kesalahan logika pada perulangan Python."] }
];

const skills = [
  "Python", "Computational Thinking", "Pembelajaran Informatika", "Scaffolding",
  "Desain Universal untuk Pembelajaran", "Asesmen Diagnostik", "Growth Mindset",
  "Pembelajaran Sosial Emosional", "Pair Programming", "Peer Debugging", "PTK", "Refleksi"
];

function SectionHeading({ kicker, title, copy }: { kicker: string; title: string; copy: string }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[.24em] text-indigo-300">{kicker}</p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-zinc-400 sm:text-lg">{copy}</p>
    </div>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const y = useTransform(scrollYProgress, [0, 0.25], [0, 100]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [semester, setSemester] = useState<"All" | Semester>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const [sent, setSent] = useState(false);
  const [formError, setFormError] = useState("");

  const visibleProjects = useMemo(
    () => semester === "All" ? projects : projects.filter(p => p.semester === semester),
    [semester]
  );

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    if (!name || !email || !message) {
      setFormError("Mohon lengkapi nama, email, dan pesan.");
      return;
    }
    setFormError("");
    setSent(true);
    e.currentTarget.reset();
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-zinc-950">
      <motion.div className="fixed left-0 top-0 z-[60] h-1 origin-left bg-indigo-400" style={{ scaleX: progress, width: "100%" }} />

      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 shadow-2xl shadow-black/20">
          <a href="#home" onClick={closeMenu} className="flex items-center gap-3" aria-label="Resa Martyaningsih home">
            <span className="grid size-9 place-items-center rounded-xl bg-white text-sm font-bold text-zinc-950">RM</span>
            <span className="hidden font-display text-sm font-semibold sm:block">Resa Martyaningsih</span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
            {["About", "Projects", "Skills", "Contact"].map(item => (
              <a key={item} className="transition hover:text-white" href={`#${item.toLowerCase()}`}>{item}</a>
            ))}
          </div>
          <a href="#contact" className="hidden rounded-xl bg-white px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-zinc-200 md:block">Let's connect</a>
          <button className="rounded-xl p-2 md:hidden" onClick={() => setMenuOpen(v => !v)} aria-label={menuOpen ? "Tutup menu" : "Buka menu"}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-4 md:hidden">
              {["About", "Projects", "Skills", "Contact"].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu} className="block rounded-xl px-4 py-3 text-zinc-300 hover:bg-white/5 hover:text-white">{item}</a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32">
          <div className="grid-bg absolute inset-0 -z-20" />
          <div className="absolute left-1/2 top-0 -z-10 size-[45rem] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-3xl" />
          <motion.div style={{ y }} className="absolute right-[-12rem] top-1/3 -z-10 size-[28rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
          <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-zinc-300">
                <Sparkles size={15} className="text-indigo-300" /> PPG Prajabatan · Informatika
              </div>
              <h1 className="max-w-5xl font-display text-5xl font-bold leading-[1.03] tracking-tight text-white sm:text-7xl lg:text-8xl">
                Mendidik melalui <span className="bg-gradient-to-r from-indigo-300 via-white to-fuchsia-300 bg-clip-text text-transparent">Informatika.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
                Resa Martyaningsih — calon guru Informatika yang menggabungkan coding, pembelajaran yang berpihak pada peserta didik, refleksi, dan desain pengalaman belajar yang adaptif.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-zinc-950 transition hover:-translate-y-0.5">
                  Explore work <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/5">
                  Contact me <ChevronRight size={17} />
                </a>
              </div>
              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-zinc-500">
                <span className="flex items-center gap-2"><GraduationCap size={16} /> Universitas Negeri Yogyakarta</span>
                <span className="flex items-center gap-2"><Code2 size={16} /> Python · Computational Thinking</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }}
              className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/10 blur-2xl" />
              <div className="glass relative rounded-[2rem] p-6 shadow-glow">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[.2em] text-zinc-500">Professional focus</p>
                    <h3 className="mt-2 font-display text-xl font-semibold">Teacher · Facilitator · Learner</h3>
                  </div>
                  <Layers3 className="text-indigo-300" />
                </div>
                <div className="space-y-3">
                  {[
                    ["01", "Understand learners", "Profiling & diagnostic assessment"],
                    ["02", "Design access", "DUP, scaffolding & differentiation"],
                    ["03", "Build confidence", "Growth mindset & social-emotional learning"],
                    ["04", "Improve continuously", "Reflection, data & PTK"]
                  ].map(([n, t, d]) => (
                    <div key={n} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <div className="flex gap-4">
                        <span className="font-mono text-xs text-indigo-300">{n}</span>
                        <div><p className="font-semibold">{t}</p><p className="mt-1 text-sm leading-6 text-zinc-500">{d}</p></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="px-6 py-28">
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <SectionHeading kicker="01 · About" title="Dari mengajar coding menjadi mendidik melalui coding." copy="Perjalanan Semester I dan II mengubah cara pandang saya: keberhasilan pembelajaran Informatika bukan hanya tentang kode yang benar, tetapi tentang bagaimana peserta didik tumbuh sebagai pembelajar." />
            <div className="space-y-6 text-zinc-400">
              <p className="text-lg leading-8">Fondasi Semester I membangun pemahaman tentang filosofi pendidikan, keberagaman peserta didik, asesmen, PPL Terbimbing, Growth Mindset, serta pembelajaran kreatif dan inovatif.</p>
              <p className="text-lg leading-8">Semester II memperluasnya melalui Pembelajaran Sosial Emosional, asesmen lanjutan, PPL Mandiri, Projek Kepemimpinan, dan Pengembangan Keprofesian Berkelanjutan.</p>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["Reflective", "Belajar dari data dan pengalaman."],
                  ["Adaptive", "Menyesuaikan dukungan dengan kesiapan."],
                  ["Inclusive", "Memberi akses dan ruang untuk berkembang."]
                ].map(([t, d]) => <div key={t} className="glass rounded-2xl p-5"><p className="font-semibold text-white">{t}</p><p className="mt-2 text-sm leading-6">{d}</p></div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="border-y border-white/5 bg-white/[0.015] px-6 py-28">
          <div className="mx-auto max-w-6xl">
            <SectionHeading kicker="02 · Selected work" title="Projects & learning artifacts" copy="Kumpulan karya yang merepresentasikan perjalanan dari analisis masalah, desain pembelajaran, praktik, hingga rencana perbaikan berbasis data." />
            <div className="mt-10 flex flex-wrap gap-2">
              {(["All", "Semester I", "Semester II"] as const).map(c => (
                <button key={c} onClick={() => setSemester(c)} className={`rounded-full px-4 py-2 text-sm transition ${semester === c ? "bg-white text-zinc-950" : "border border-white/10 text-zinc-400 hover:text-white"}`}>{c}</button>
              ))}
            </div>
            <motion.div layout className="mt-8 grid gap-5 md:grid-cols-2">
              <AnimatePresence mode="popLayout">
                {visibleProjects.map((project) => (
                  <motion.article layout key={project.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: .98 }}
                    className="group glass rounded-3xl p-6 transition hover:-translate-y-1 hover:border-white/20">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[.18em] text-indigo-300">{project.eyebrow}</p>
                        <h3 className="mt-3 font-display text-2xl font-semibold">{project.title}</h3>
                      </div>
                      <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-500">{project.semester}</span>
                    </div>
                    <p className="mt-4 leading-7 text-zinc-400">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-zinc-400">{tag}</span>)}</div>
                    <div className="mt-7 flex items-end justify-between gap-5 border-t border-white/10 pt-5">
                      <p className="max-w-sm text-sm leading-6 text-zinc-500"><span className="text-zinc-300">Fokus:</span> {project.focus}</p>
                      <button onClick={() => setSelected(project)} className="shrink-0 rounded-xl border border-white/10 p-2.5 transition group-hover:bg-white group-hover:text-zinc-950" aria-label={`Lihat detail ${project.title}`}><ArrowUpRight size={18} /></button>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="px-6 py-28">
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[.9fr_1.1fr]">
            <SectionHeading kicker="03 · Skills" title="Technical skills meet teaching craft." copy="Keahlian teknis saya menjadi lebih bermakna ketika dipakai untuk merancang pengalaman belajar yang manusiawi, terukur, dan relevan." />
            <div className="flex content-start flex-wrap gap-3">
              {skills.map((skill, i) => (
                <motion.span key={skill} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .025 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-zinc-300 transition hover:border-indigo-300/30 hover:bg-indigo-300/5">{skill}</motion.span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/5 bg-white/[0.015] px-6 py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <SectionHeading kicker="04 · Contact" title="Let's build better learning experiences." copy="Tertarik berdiskusi tentang pembelajaran Informatika, praktik mengajar, atau kolaborasi pendidikan? Kirim pesan melalui formulir berikut." />
              <div className="mt-8 space-y-3 text-sm text-zinc-400">
                <p className="flex items-center gap-3"><Mail size={17} /> Email: <span className="text-zinc-300">resamartyaningsih.2025@student.uny.ac.id</span></p>
              </div>
            </div>
            <form onSubmit={submit} noValidate className="glass rounded-3xl p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm text-zinc-400">Nama<input name="name" required className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-indigo-300/50" placeholder="Nama Anda" /></label>
                <label className="text-sm text-zinc-400">Email<input name="email" type="email" required className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-indigo-300/50" placeholder="nama@email.com" /></label>
              </div>
              <label className="mt-5 block text-sm text-zinc-400">Pesan<textarea name="message" required rows={6} className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-indigo-300/50" placeholder="Ceritakan kebutuhan atau ide kolaborasi Anda..." /></label>
              {formError && <p className="mt-3 text-sm text-rose-300" role="alert">{formError}</p>}
              <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-zinc-950 transition hover:bg-zinc-200"><Send size={17} /> Send message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Resa Martyaningsih. Built with React + TypeScript.</p>
          <p>Reflect · Adapt · Teach · Keep learning.</p>
        </div>
      </footer>

      <AnimatePresence>
        {selected && (
          <motion.div className="fixed inset-0 z-[70] grid place-items-center bg-black/70 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onMouseDown={(e) => { if (e.target === e.currentTarget) setSelected(null); }}>
            <motion.div initial={{ y: 20, opacity: 0, scale: .98 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 10, opacity: 0 }} className="glass max-h-[90vh] w-full max-w-2xl overflow-auto rounded-3xl p-7">
              <div className="flex items-start justify-between gap-6">
                <div><p className="text-xs font-semibold uppercase tracking-[.18em] text-indigo-300">{selected.eyebrow}</p><h3 className="mt-2 font-display text-3xl font-semibold">{selected.title}</h3></div>
                <button onClick={() => setSelected(null)} className="rounded-xl border border-white/10 p-2" aria-label="Tutup detail"><X size={18} /></button>
              </div>
              <p className="mt-5 leading-8 text-zinc-400">{selected.description}</p>
              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-7 text-zinc-400"><span className="font-semibold text-zinc-200">Fokus pembelajaran:</span> {selected.focus}</div>
              <ul className="mt-6 space-y-3">
                {selected.details.map(d => <li key={d} className="flex gap-3 text-sm leading-7 text-zinc-300"><Check className="mt-1 shrink-0 text-indigo-300" size={17} />{d}</li>)}
              </ul>
              <div className="mt-7 flex flex-wrap gap-2">{selected.tags.map(t => <span key={t} className="rounded-lg bg-white/5 px-3 py-1.5 text-xs text-zinc-400">{t}</span>)}</div>
            </motion.div>
          </motion.div>
        )}
        {sent && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="fixed bottom-6 right-6 z-[80] max-w-sm rounded-2xl border border-emerald-300/20 bg-zinc-900 px-5 py-4 shadow-2xl">
            <p className="font-semibold">Pesan siap dikirim ✓</p>
            <p className="mt-1 text-sm text-zinc-400">Demo frontend berhasil divalidasi. Hubungkan form ke endpoint/email service sebelum produksi.</p>
            <button onClick={() => setSent(false)} className="mt-3 text-sm text-indigo-300">Tutup</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;