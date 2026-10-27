export interface SiklusItem {
  id: string;
  semester: "Semester 1" | "Semester 2";
  kategori: "Praktik Terbimbing" | "Praktik Mandiri";
  siklusKe: number;
  judul: string;
  topik: string;
  linkDrive: string;
  keterangan: string;
  kelas: string;
  sekolah: string;
  status: string;
}

export const SIKLUS_MENGAJAR_DATA: SiklusItem[] = [
  // PPL SEMESTER 1: PRAKTIK MENGAJAR TERBIMBING
  {
    id: "terbimbing-1",
    semester: "Semester 1",
    kategori: "Praktik Terbimbing",
    siklusKe: 1,
    judul: "Siklus 1 — Praktik Mengajar Terbimbing PPL I",
    topik: "Pengenalan Computational Thinking & Logika Komputasi Dasar",
    linkDrive: "https://drive.google.com/file/d/1xDtFDWUrke9nW7Mz_lTegxdoPf_p-cAu/view?usp=sharing",
    keterangan: "Dokumen pelaksanaan pembelajaran siklus pertama terbimbing di bawah arahan Guru Pamong dan Dosen Pembimbing Lapangan di SMA Negeri 3 Yogyakarta.",
    kelas: "Fase E / Kelas X",
    sekolah: "SMA Negeri 3 Yogyakarta",
    status: "Terverifikasi PPL I"
  },
  {
    id: "terbimbing-2",
    semester: "Semester 1",
    kategori: "Praktik Terbimbing",
    siklusKe: 2,
    judul: "Siklus 2 — Praktik Mengajar Terbimbing PPL I",
    topik: "Penerapan Alur Algoritma & Pemecahan Masalah Terstruktur",
    linkDrive: "https://drive.google.com/file/d/1dQ2Qs4aFCHpsg86p3kg8TQGv2mUNCl-V/view?usp=sharing",
    keterangan: "Dokumen perencanaan, pelaksanaan, dan instrumen KBM siklus kedua dengan fokus diferensiasi proses dan scaffolding bertahap.",
    kelas: "Fase E / Kelas X",
    sekolah: "SMA Negeri 3 Yogyakarta",
    status: "Terverifikasi PPL I"
  },
  {
    id: "terbimbing-3",
    semester: "Semester 1",
    kategori: "Praktik Terbimbing",
    siklusKe: 3,
    judul: "Siklus 3 — Praktik Mengajar Terbimbing PPL I",
    topik: "Simulasi Praktikum Komputasi & Evaluasi Formatif Terbimbing",
    linkDrive: "https://drive.google.com/file/d/19BlRZ_t-JldOf8FzuLaYE60QrqUK96Hr/view?usp=sharing",
    keterangan: "Dokumen siklus ketiga yang merangkum evaluasi ketercapaian asesmen proses dan refleksi pengajaran terbimbing di laboratorium komputer.",
    kelas: "Fase E / Kelas X",
    sekolah: "SMA Negeri 3 Yogyakarta",
    status: "Terverifikasi PPL I"
  },

  // PPL SEMESTER 2: PRAKTIK MENGAJAR MANDIRI
  {
    id: "mandiri-1",
    semester: "Semester 2",
    kategori: "Praktik Mandiri",
    siklusKe: 1,
    judul: "Siklus 1 — Praktik Mengajar Mandiri PPL II",
    topik: "Berpikir Komputasional (Computational Thinking) & Perancangan Logika",
    linkDrive: "https://drive.google.com/file/d/1hB_VUWCxCM7Ov1CnwgBmM4xoTA3b-gvo/view?usp=sharing",
    keterangan: "Dokumen modul ajar dan lembar pelaksanaan siklus 1 mandiri berorientasi DUP dan studi kasus komputasi kontekstual.",
    kelas: "Fase E / Kelas X",
    sekolah: "SMA Negeri 3 Yogyakarta",
    status: "Dokumen Resmi PPL II"
  },
  {
    id: "mandiri-2",
    semester: "Semester 2",
    kategori: "Praktik Mandiri",
    siklusKe: 2,
    judul: "Siklus 2 — Praktik Mengajar Mandiri PPL II",
    topik: "Integrasi TIK — Pengolahan Data dengan Aplikasi Spreadsheet",
    linkDrive: "https://drive.google.com/file/d/1P9YOlWK-xvNKmLBPSqjafM2tpJ-UX3-Y/view?usp=sharing",
    keterangan: "Dokumen modul pembelajaran materi aplikasi pengolah angka (Spreadsheet), formula logika, dan penyajian data statistik dasar.",
    kelas: "Fase E / Kelas X",
    sekolah: "SMA Negeri 3 Yogyakarta",
    status: "Dokumen Resmi PPL II"
  },
  {
    id: "mandiri-3",
    semester: "Semester 2",
    kategori: "Praktik Mandiri",
    siklusKe: 3,
    judul: "Siklus 3 — Praktik Mengajar Mandiri PPL II",
    topik: "Integrasi TIK — Google Docs & Pembuatan Dokumen Massal (Mail Merge)",
    linkDrive: "https://drive.google.com/file/d/1VEQ3hTPMUIPao9lO8oztYCrXSBpac0yN/view?usp=sharing",
    keterangan: "Dokumen KBM pemanfaatan fitur integrasi dokumen perkantoran, penggabungan basis data spreadsheet ke formulir Google Docs.",
    kelas: "Fase E / Kelas X",
    sekolah: "SMA Negeri 3 Yogyakarta",
    status: "Dokumen Resmi PPL II"
  },
  {
    id: "mandiri-4",
    semester: "Semester 2",
    kategori: "Praktik Mandiri",
    siklusKe: 4,
    judul: "Siklus 4 — Praktik Mengajar Mandiri PPL II",
    topik: "Kompilasi Praktikum Terpadu & Asesmen Sumatif Pembelajaran",
    linkDrive: "https://drive.google.com/file/d/1iSKTWOLUwSyBk1vzMCtQIYxzJi9GVtCs/view?usp=sharing",
    keterangan: "Dokumen siklus penutup praktik mandiri, asesmen ketercapaian peserta didik, dan refleksi akhir siklus pembelajaran PPL II.",
    kelas: "Fase E / Kelas X",
    sekolah: "SMA Negeri 3 Yogyakarta",
    status: "Dokumen Resmi PPL II"
  }
];

export const JURNAL_HARIAN_PPL = {
  judul: "Jurnal Harian Praktik Pengalaman Lapangan (PPL)",
  deskripsi:
    "Catatan logbook dan jurnal harian reflektif selama pelaksanaan PPL di SMA Negeri 3 Yogyakarta, mendokumentasikan orientasi persekolahan, observasi peserta didik, praktik KBM terbimbing & mandiri, aktivitas non-mengajar, hingga bimbingan berkala bersama Guru Pamong dan Dosen Pembimbing Lapangan (DPL).",
  linkGoogleDocs:
    "https://docs.google.com/document/d/1Eb4ajPsX3ADq_q53zvMD0x4GR61zzo9p/edit?usp=sharing&ouid=109235945935102899444&rtpof=true&sd=true",
  embedUrl:
    "https://docs.google.com/document/d/1Eb4ajPsX3ADq_q53zvMD0x4GR61zzo9p/preview",
  sekolah: "SMA Negeri 3 Yogyakarta",
  status: "Dokumen Resmi Terverifikasi",
  totalHari: "Logbook Harian Lengkap"
};


