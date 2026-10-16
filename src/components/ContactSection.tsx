import { useState, FormEvent } from "react";
import {
  Mail,
  MapPin,
  GraduationCap,
  School,
  Send,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { profileData } from "../data/profileData";

interface ContactSectionProps {
  onSentSuccess: () => void;
}

export function ContactSection({ onSentSuccess }: ContactSectionProps) {
  const [formError, setFormError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();

    if (!name || !email || !message) {
      setFormError("Mohon lengkapi Nama Lengkap, Email, dan Isi Pesan Anda.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setFormError("Format alamat email belum valid.");
      return;
    }

    setFormError("");
    onSentSuccess();
    e.currentTarget.reset();
  };

  return (
    <section id="kontak" className="py-20 sm:py-28 bg-white border-b border-slate-200/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] items-start">
          {/* Left Column: Direct Info */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-700 mb-2">
              06 · Kontak &amp; Kolaborasi
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Mari Berdiskusi &amp; Berbagi Praktik Baik
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Terbuka untuk diskusi bersama dosen pembimbing, guru pamong, rekan mahasiswa PPG, serta komunitas pendidik mengenai perancangan KBM Informatika yang berpusat pada murid.
            </p>

            <div className="mt-8 space-y-4 text-xs sm:text-sm text-slate-600">
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                <div className="grid size-9 place-items-center rounded-xl bg-indigo-50 text-indigo-700 shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Email Resmi PPG</p>
                  <a
                    href={`mailto:${profileData.email}`}
                    className="text-indigo-700 font-medium hover:underline break-all"
                  >
                    {profileData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                <div className="grid size-9 place-items-center rounded-xl bg-indigo-50 text-indigo-700 shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Domisili Asal &amp; Wilayah Kerja</p>
                  <p className="text-slate-600">Gunungkidul &amp; Kota Yogyakarta, D.I. Yogyakarta</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                <div className="grid size-9 place-items-center rounded-xl bg-indigo-50 text-indigo-700 shrink-0">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Afiliasi Kampus</p>
                  <p className="text-slate-600">PPG Calon Guru · Universitas Negeri Yogyakarta (UNY)</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                <div className="grid size-9 place-items-center rounded-xl bg-emerald-50 text-emerald-700 shrink-0">
                  <School size={18} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Sekolah Latihan (PPL)</p>
                  <p className="text-slate-600">SMA Negeri 3 Yogyakarta (PADMANABA)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="card-light rounded-3xl p-6 sm:p-9 bg-white border border-slate-200 shadow-sm">
            <h3 className="font-display text-xl font-bold text-slate-900 mb-1">
              Kirimkan Pesan atau Masukan Portofolio
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Silakan isi formulir berikut untuk memberikan catatan refleksi, apresiasi, atau pertanyaan.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-xs font-semibold text-slate-700">
                  Nama Lengkap
                  <input
                    name="name"
                    required
                    type="text"
                    placeholder="Nama Lengkap Anda"
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600 transition"
                  />
                </label>

                <label className="block text-xs font-semibold text-slate-700">
                  Email Aktif
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="nama@email.com"
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600 transition"
                  />
                </label>
              </div>

              <label className="block text-xs font-semibold text-slate-700">
                Instansi / Hubungan (Dosen, Guru Pamong, Rekan Sejawat, dll.)
                <input
                  name="institution"
                  type="text"
                  placeholder="Contoh: Dosen Pembimbing Lapangan UNY / Guru Pamong"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600 transition"
                />
              </label>

              <label className="block text-xs font-semibold text-slate-700">
                Isi Pesan / Catatan Refleksi
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tuliskan ulasan, masukan terhadap artefak, atau diskusi kerja sama..."
                  className="mt-1.5 w-full resize-none rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600 transition"
                />
              </label>

              {formError && (
                <div className="flex items-center gap-2 rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs font-medium text-rose-700">
                  <AlertCircle size={15} className="shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-md shadow-indigo-600/20 hover:bg-indigo-700 active:scale-95 transition"
              >
                <Send size={15} />
                <span>Kirim Pesan Sekarang</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
