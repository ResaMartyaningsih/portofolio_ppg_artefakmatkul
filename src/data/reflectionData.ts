export interface ReflectionTopicSection {
  id: string;
  badge: string;
  title: string;
  intro: string;
  items: {
    title: string;
    description: string;
    highlight?: string;
    tag?: string;
  }[];
}

export const teachingProductProfile = {
  school: "SMA Negeri 3 Yogyakarta (PADMANABA)",
  subject: "Informatika",
  target: "Kelas X Fase E",
  topic: "Pemrograman Python (Sintaks Dasar, Struktur Kontrol Percabangan & Perulangan, Fungsi, hingga Konsep Objek Dasar)",
  primaryTools: [
    { name: "Online Python IDE", role: "Menghilangkan friksi instalasi lokal, fokus langsung ke logika komputasi" },
    { name: "Kahoot!", role: "Gamifikasi apersepsi dan evaluasi formatif kilat dengan umpan balik data seketika" },
    { name: "Codesaya", role: "Self-paced procedural learning untuk melatih muscle memory pengetikan sintaks kode" }
  ]
};

export const reflectionSections: ReflectionTopicSection[] = [
  {
    id: "kendala",
    badge: "1. Analisis Kendala & Tantangan",
    title: "Tantangan Selama Proses Penyusunan & Implementasi KBM",
    intro:
      "Dalam merancang modul ajar di lingkungan sekolah berprestasi tinggi seperti SMAN 3 Yogyakarta, beberapa tantangan nyata dihadapi dan berhasil diantisipasi secara sistematis:",
    items: [
      {
        title: "Pemetaan Karakteristik & Heterogenitas Siswa",
        description:
          "Mengenali keragaman latar belakang logika dan pengalaman koding siswa dalam durasi observasi yang singkat. Modul ajar mengantisipasi hal ini melalui asesmen diagnostik awal di mana siswa kelas X dipetakan memiliki potensi logika komputasional tinggi namun membutuhkan pendampingan ritme belajar yang berbeda.",
        highlight: "Solusi: Asesmen diagnostik non-kognitif & kognitif di awal siklus KBM.",
        tag: "Karakteristik Siswa"
      },
      {
        title: "Integrasi Teknologi yang Bermakna (Bukan Sekadar Hiburan)",
        description:
          "Menyelaraskan perangkat lunak digital agar tidak mendistraksi konsentrasi peserta didik. Tantangannya adalah menyeleksi platform yang benar-benar memperkuat fungsi kognitif, seperti Online IDE yang ringan dan kuis formatif terukur via Kahoot.",
        highlight: "Solusi: Penguatan kontrak belajar dan panduan langkah kerja terstruktur di meja lab.",
        tag: "Teknologi Edukatif"
      },
      {
        title: "Manajemen Waktu & Beban Ganda PPL",
        description:
          "Menyeimbangkan tanggung jawab mengajar praktik langsung di kelas dengan kewajiban administrasi perkuliahan PPG LPTK UNY. Dibutuhkan perencanaan modul ajar yang padat, esensial, namun sarat makna (deep learning).",
        highlight: "Solusi: Penyusunan time-blocking mingguan dan lembar kerja ringkas terarah.",
        tag: "Manajemen Waktu"
      }
    ]
  },
  {
    id: "pedagogi",
    badge: "2. Teori & Konsep Pedagogik",
    title: "Landasan Teori Pedagogi yang Diadopsi dalam Modul",
    intro:
      "Desain pembelajaran tidak bertumpu pada intuisi semata, melainkan mengintegrasikan prinsip-prinsip pedagogik teruji:",
    items: [
      {
        title: "Behaviorisme & Gamifikasi (Kahoot!)",
        description:
          "Diterapkan pada sesi apersepsi awal atau cek pemahaman cepat di akhir pertemuan. Stimulus berupa pertanyaan kuis sintaks menghasilkan respons instan dari siswa, memberikan gambaran serapan materi secara transparan dan menggembirakan.",
        highlight: "Stimulus-Respons & Umpan Balik Instan",
        tag: "Gamifikasi"
      },
      {
        title: "Pembelajaran Mandiri Prosedural (Codesaya)",
        description:
          "Mengadopsi prinsip self-paced learning. Platform Codesaya digunakan sebagai pra-syarat agar siswa membiasakan ingatan motorik (muscle memory) dalam mengetik tanda kurung, indentasi Python, serta tanda petik.",
        highlight: "Melatih Kemandirian & Ketelitian Sintaks",
        tag: "Self-Paced"
      },
      {
        title: "Konstruktivisme & Problem-Based Learning (Online IDE)",
        description:
          "Siswa mengonstruksi pemahamannya sendiri dengan memecahkan studi kasus dunia nyata (seperti program struk transaksi kasir atau kalkulator diskon) menggunakan Online Python IDE secara aktif.",
        highlight: "Pemecahan Masalah Nyata Berbasis Proyek",
        tag: "Konstruktivisme"
      },
      {
        title: "Prinsip Pembelajaran Berkesadaran (Mindfulness) & Kemitraan",
        description:
          "Membuka setiap sesi dengan sapaan hangat, teknik pernapasan kesadaran penuh saat siswa jenuh, serta menghadirkan pertanyaan pemantik yang relevan dengan tren aplikasi digital yang mereka gemari.",
        highlight: "Iklim Belajar Aman Sosial-Emosional (CASEL)",
        tag: "Mindfulness"
      },
      {
        title: "Metode Live Coding Terbimbing & Tutor Sebaya",
        description:
          "Guru membimbing langsung pengetikan kode di layar proyeksi untuk meminimalisir miskonsepsi sintaks awal. Siswa yang lebih cepat memahami materi diberdayakan menjadi tutor sebaya bagi rekan sebelahnya.",
        highlight: "Kolaborasi Sebaya (Peer Learning)",
        tag: "Live Coding"
      },
      {
        title: "Rubrik Penilaian Bertingkat yang Transparan",
        description:
          "Menyediakan panduan capaian empat tingkat: Baru Memulai, Berkembang, Cakap, dan Mahir. Siswa memahami secara jernih standar kompetensi logika komputasi yang diharapkan.",
        highlight: "Rubrik Autentik & DUP",
        tag: "Asesmen"
      }
    ]
  },
  {
    id: "keberhasilan",
    badge: "3. Faktor Kunci Keberhasilan",
    title: "Strategi Penentu Efektivitas Penerapan di Kelas Riil",
    intro:
      "Keberhasilan modul pembelajaran Python Fase E di SMAN 3 Yogyakarta didorong oleh empat pilar operasional:",
    items: [
      {
        title: "Prasyarat Mandiri (Codesaya 100% / Flipped Classroom)",
        description:
          "Siswa menyelesaikan modul pengenalan sintaks di Codesaya sebelum sesi tatap muka. Ketika masuk laboratorium komputer, siswa telah memiliki modal dasar sehingga waktu kelas tidak habis untuk mengetik teori.",
        highlight: "Prinsip Flipped Classroom Efisien",
        tag: "Flipped Classroom"
      },
      {
        title: "Fokus Jam Tatap Muka: Praktik Live Coding & Troubleshooting",
        description:
          "Alokasi waktu kelas dioptimalkan 100% untuk eksplorasi logika, simulasi kasus, serta pendampingan langsung di mana guru berkeliling merespons kendala eror siswa satu per satu.",
        highlight: "Diferensiasi Proses Aktif",
        tag: "Troubleshooting"
      },
      {
        title: "Modifikasi Asesmen: Proyek Kolaboratif Berpasangan",
        description:
          "Di akhir topik, siswa bekerja berpasangan (2 orang) menyusun mini project program kasir toko. Hal ini mereduksi kecemasan coding dan memupuk keterampilan komunikasi kolaboratif.",
        highlight: "Pair Programming & Teamwork",
        tag: "Proyek Tim"
      },
      {
        title: "Kontrak Belajar & Manajemen Fasilitas Komputer",
        description:
          "Penyepakatan kontrak belajar yang tegas namun bersahabat menjamin peserta didik tetap fokus pada jendela IDE dan tidak membuka aplikasi game/sosmed selama sesi praktikum berlangsung.",
        highlight: "Manajemen Kelas Positif",
        tag: "Kontrak Belajar"
      }
    ]
  }
];

export const artifactCategories = [
  {
    title: "RPP & Modul Ajar Kurikulum Merdeka",
    desc: "Rancangan pembelajaran terstruktur yang memuat capaian pembelajaran, diferensiasi konten/proses/produk, dan asesmen diagnostik-formatif-sumatif.",
    badge: "Perencanaan KBM",
    icon: "file-text"
  },
  {
    title: "Media Pembelajaran Interaktif",
    desc: "Penggunaan slide interaktif, lembar aktivitas digital, kuis gamifikasi Kahoot!, dan platform Online IDE Python.",
    badge: "Media Digital",
    icon: "laptop"
  },
  {
    title: "Hasil Karya & Penugasan Siswa",
    desc: "Bukti artefak berupa kode program Python (aplikasi kasir, algoritma kalkulator sederhana) dan lembar refleksi koding peserta didik.",
    badge: "Capaian Siswa",
    icon: "code"
  },
  {
    title: "Lembar Penilaian Guru Pamong (Siklus 1 - 3)",
    desc: "Dokumen evaluasi klinis dan umpan balik profesional dari Guru Pamong SMAN 3 Yogyakarta terhadap perencanaan dan pelaksanaan KBM.",
    badge: "Evaluasi Pamong",
    icon: "check-circle"
  },
  {
    title: "Video Pembelajaran PPL (PPL I & PPL II)",
    desc: "Dokumentasi visual praktik mengajar langsung di laboratorium komputer, memperlihatkan interaksi guru-murid dan scaffolding.",
    badge: "Dokumentasi Video",
    icon: "video"
  },
  {
    title: "Lembar Kerja PPL (Topik 1 - 4)",
    desc: "Dokumen laporan analitis tugas perkuliahan PPL PPG UNY yang mencakup orientasi sekolah, asistensi mengajar, dan refleksi berkala.",
    badge: "Laporan PPL UNY",
    icon: "folder"
  }
];
