import { FormEvent, useMemo, useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowUpRight, ArrowRight, Check, ChevronRight, ChevronDown, Code2, ExternalLink,
  GraduationCap, Layers3, Mail, Menu, Send, Sparkles, X,
  Camera, Compass, Target, BookOpen, Heart, Award, Play,
  Maximize2, User, MapPin, Calendar, CheckCircle2, Film,
  ChevronLeft, RefreshCw, Info, Leaf, FileText
} from "lucide-react";

import { PraktikMandiriHub } from "./components/praktik-mandiri/PraktikMandiriHub";
import { SubpageNav } from "./components/praktik-mandiri/SubpageNav";
import { SubpageRancangan } from "./components/praktik-mandiri/SubpageRancangan";
import { SubpageMateri } from "./components/praktik-mandiri/SubpageMateri";
import { SubpageMedia } from "./components/praktik-mandiri/SubpageMedia";
import { SubpageVideo } from "./components/praktik-mandiri/SubpageVideo";
import { SubpageNonmengajar } from "./components/praktik-mandiri/SubpageNonmengajar";
import { SubpagePenilaian } from "./components/praktik-mandiri/SubpagePenilaian";
import { SiklusMengajarSection } from "./components/SiklusMengajarSection";
import { KaryaInovatifSection } from "./components/KaryaInovatifSection";
import { RefleksiMatkulSection } from "./components/RefleksiMatkulSection";
import { GaleriPage } from "./components/GaleriPage";

// Add the missing category strings to your union type
export type category =
  | "Praktik PPL"
  | "Projek Kepemimpinan"
  | "Gelar Karya & Seminar"
  | "Video Pembelajaran"
  | "Praktik Mengajar"
  | "Budaya Sekolah"
  | "Bimbingan & Diskusi"
  | "Semester I"
  | "Semester II";

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
  link?: string;
};

type GalleryCategory = "Semua" | "Praktik Mengajar" | "Budaya Sekolah" | "Projek Kepemimpinan" | "Video Pembelajaran" | "Semester I" | "Semester II";

type GalleryItem = {
  id: string;
  category: category;
  type: "photo" | "video";
  title: string;
  date: string;
  semester: "Semester I" | "Semester II";
  location: string;
  thumbnail: string;
  mediaUrl?: string;
  description: string;
  reflection: string;
  tags: string[];
  driveLink?: string;
};

// Catatan: Tautan Google Drive / LMS artefak mata kuliah Anda
const projects: Project[] = [
  {
    id: "s1-1",
    semester: "Semester I",
    title: "Filosofi Pendidikan",
    eyebrow: "Semester I · Mata Kuliah",
    description: "Fondasi pemikiran tentang pendidikan, kodrat alam dan kodrat zaman, pendidikan yang berpihak pada peserta didik, serta peran guru sebagai penuntun.",
    focus: "Menghubungkan pembelajaran Informatika dengan kehidupan, karakter, tanggung jawab, dan konteks peserta didik.",
    tags: ["Kodrat Alam", "Kodrat Zaman", "Kontekstual", "Student-Centered"],
    details: [
      "Mengubah pandangan dari Informatika sebagai kemampuan teknis menjadi sarana pendidikan yang kontekstual.",
      "Menempatkan peserta didik sebagai subjek pembelajaran, bukan sekadar penerima materi.",
      "Mendorong pembelajaran Informatika yang relevan dengan kehidupan dan bertanggung jawab."
    ],
    link: "https://drive.google.com/drive/folders/1-FExF2Wxcpdnh6YvMT8Mo7qpoGPvzWPK?usp=sharing"
  },
  {
    id: "s1-2",
    semester: "Semester I",
    title: "Pemahaman Tentang Peserta Didik dan Pembelajaran",
    eyebrow: "Semester I · Mata Kuliah",
    description: "Membangun pemahaman tentang keberagaman peserta didik melalui profiling, kesiapan belajar, pengetahuan awal, minat, serta karakteristik kognitif dan sosial emosional.",
    focus: "Menggunakan profiling sebagai dasar strategi pembelajaran dan pendampingan yang sesuai.",
    tags: ["Profiling", "Learning Readiness", "Minat", "Karakteristik Siswa"],
    details: [
      "Mengidentifikasi pengalaman coding, kemampuan logika, minat, dan kebutuhan siswa.",
      "Memahami bahwa kemampuan belajar tidak dapat dilihat hanya dari nilai.",
      "Menggunakan hasil pemetaan untuk membentuk kelompok belajar dan menentukan pendampingan."
    ],
    link: "https://drive.google.com/drive/folders/1XSmObTzjUtB2lw-3vihAngqUANOXyl9P?usp=sharing"
  },
  {
    id: "s1-3",
    semester: "Semester I",
    title: "Pembelajaran Mendalam dan Asessmen (PMA) Dasar SMK",
    eyebrow: "Semester I · Mata Kuliah",
    description: "Memahami pembelajaran dan asesmen yang fleksibel untuk merespons keberagaman kemampuan peserta didik.",
    focus: "Menerapkan prinsip Desain Universal untuk Pembelajaran agar siswa memiliki beragam cara menunjukkan pemahaman.",
    tags: ["PMA", "DUP", "Asesmen", "Scaffolding"],
    details: [
      "Memahami bahwa pemahaman algoritma tidak harus selalu ditunjukkan melalui kode.",
      "Flowchart, pseudocode, maupun penjelasan logika dapat menjadi representasi pemahaman.",
      "Menyediakan pilihan aktivitas dan asesmen sesuai kesiapan belajar."
    ],
    link: "https://drive.google.com/drive/folders/1gyQUtcs0k5kHeIn8EGpBnP1BeEQe24EM?usp=sharing"
  },
  {
    id: "s1-4",
    semester: "Semester I",
    title: "Praktik Pengalaman Lapangan (PPL)",
    eyebrow: "Semester I · Mata Kuliah",
    description: "Pengalaman praktik pembelajaran Informatika melalui pendampingan praktikum pemrograman Python di lingkungan sekolah.",
    focus: "Mengembangkan scaffolding, diferensiasi pendampingan, praktik terbimbing, dan refleksi pembelajaran.",
    tags: ["PPL", "Python", "Scaffolding", "Praktik Terbimbing"],
    details: [
      "Mengalami secara langsung bahwa pembelajaran coding tidak selalu berjalan sesuai rencana.",
      "Mendampingi siswa memahami alur berpikir ketika menghadapi error, bukan sekadar memberi jawaban kode.",
      "Merancang praktikum bertahap dari memahami masalah, algoritma, coding, hingga debugging."
    ],
    link: "https://drive.google.com/drive/folders/1fqAW72d8jZiSBInKERW05v-CRR0cB5wI?usp=sharing"
  },
  {
    id: "s1-5",
    semester: "Semester I",
    title: "Pola Pikir Bertumbuh (Growth Mindset)",
    eyebrow: "Semester I · Mata Kuliah",
    description: "Membangun cara pandang bahwa kesalahan coding merupakan bagian dari proses belajar dan debugging.",
    focus: "Menggunakan process-based praise, The Power of Yet, dan growth-oriented feedback.",
    tags: ["Growth Mindset", "The Power of Yet", "Feedback", "Debugging"],
    details: [
      "Mengurangi pujian yang hanya berfokus pada label kemampuan seperti 'pintar coding'.",
      "Menghargai proses, usaha, strategi, dan kegigihan siswa.",
      "Membangun culture of debugging agar pesan error menjadi petunjuk untuk belajar."
    ],
    link: "https://drive.google.com/drive/folders/1l-Xjeud6SEqg2sPcnP_bwtgxK2YRMz8A?usp=sharing"
  },
  {
    id: "s1-6",
    semester: "Semester I",
    title: "Pendidikan Kreatif Inovatif",
    eyebrow: "Semester I · Mata Kuliah",
    description: "Mengembangkan kemampuan menemukan masalah pembelajaran dan merancang solusi kreatif serta inovatif berdasarkan data.",
    focus: "Menggunakan strategi seperti Pair Programming dan refleksi berbasis siklus perbaikan.",
    tags: ["Kreatif", "Inovatif", "Pair Programming", "PTK"],
    details: [
      "Melihat coding anxiety dan kesalahan pemrograman sebagai masalah yang dapat dianalisis.",
      "Mengembangkan Pair Programming dengan peran Driver dan Navigator.",
      "Menghubungkan identifikasi masalah, solusi, indikator keberhasilan, dan rencana aksi."
    ],
    link: "https://drive.google.com/drive/folders/184mn5ILO5I0Lv3VtrnY9yrnrB9HjeJUX?usp=sharing"
  },
  {
    id: "s2-1",
    semester: "Semester II",
    title: "Pembelajaran Sosial Emosional",
    eyebrow: "Semester II · Mata Kuliah",
    description: "Memperluas pembelajaran Informatika dengan perhatian pada kondisi emosional, relasi, dan kemampuan sosial peserta didik.",
    focus: "Menerapkan lima kompetensi CASEL dalam lingkungan belajar yang aman dan suportif.",
    tags: ["CASEL", "Self-Awareness", "Relationship Skills", "Mindfulness"],
    details: [
      "Memahami self-awareness, self-management, social awareness, relationship skills, dan responsible decision-making.",
      "Membantu siswa mengelola frustrasi ketika menghadapi debugging.",
      "Mengembangkan peer debugging dengan komunikasi empatik dan constructive feedback."
    ],
    link: "https://drive.google.com/drive/folders/1T4FEmCzZdV39UUFDiAfA81XfOBV9Cimo?usp=sharing"
  },
  {
    id: "s2-2",
    semester: "Semester II",
    title: "Pembelajaran Mendalam dan Asesmen Lanjut",
    eyebrow: "Semester II · Mata Kuliah",
    description: "Memperkuat asesmen awal dan pemetaan kemampuan murid dengan pendekatan multimoda dan pembelajaran mendalam.",
    focus: "Menyusun learning path berdasarkan kesiapan, logika, dan kemampuan problem solving siswa.",
    tags: ["Asesmen Awal", "DUP", "Learning Path", "Problem Solving"],
    details: [
      "Menggunakan asesmen multimoda sebelum materi Python seperti fungsi, struktur data, dan perulangan.",
      "Memberi ruang bagi flowchart, blok algoritma, atau penjelasan lisan.",
      "Memberikan scaffolding untuk pemula dan proyek pengayaan bagi siswa yang lebih mahir."
    ],
    link: "https://drive.google.com/drive/folders/1OfObu-_ioADLZlAX75AnJhPPJqkLsvqM?usp=sharing"
  },
  {
    id: "s2-3",
    semester: "Semester II",
    title: "Praktik Pengalaman Lapangan (PPL) Mandiri",
    eyebrow: "Semester II · Mata Kuliah",
    description: "Memperkuat pengalaman praktik pembelajaran Python melalui pendampingan yang lebih personal dan reflektif.",
    focus: "Menerapkan starter code, tantangan bertingkat, peer debugging, dan penanganan error sebagai peluang belajar.",
    tags: ["PPL Mandiri", "Python", "Starter Code", "Peer Debugging"],
    details: [
      "Merespons perbedaan kemampuan siswa pada variabel, indentasi, dan logika program.",
      "Mengubah pembelajaran satu arah menjadi pendampingan yang lebih personal.",
      "Mengembangkan kemandirian siswa dalam menyelesaikan masalah pemrograman."
    ],
    link: "https://drive.google.com/drive/folders/1UcSDFEWR4IspIDIav12rId4XmA8UELky?usp=sharing"
  },
  {
    id: "s2-4",
    semester: "Semester II",
    title: "Projek Kepemimpinan",
    eyebrow: "Semester II · Mata Kuliah",
    description: "Mengembangkan jiwa kepemimpinan guru melalui pemetaan masalah lingkungan dan perancangan program yang berdampak.",
    focus: "Menggunakan needs assessment, pemetaan aset, dan kerangka Why-How-What.",
    tags: ["Leadership", "Needs Assessment", "Why-How-What", "Mentoring"],
    details: [
      "Memahami bahwa program perlu berangkat dari kebutuhan nyata, bukan hanya ide pribadi.",
      "Mengembangkan gagasan Python Peer-Mentoring atau Klub Coding.",
      "Melibatkan Guru Pamong, kepala laboratorium, dan siswa yang lebih mahir dalam perencanaan."
    ],
    link: "https://drive.google.com/drive/folders/1Wi4k5meq3Tsbo-YJ4EZI1Jtmo1XI8BQE?usp=sharing"
  },
  {
    id: "s2-5",
    semester: "Semester II",
    title: "Pengembangan Keprofesian Berkelanjutan",
    eyebrow: "Semester II · Mata Kuliah",
    description: "Membangun kebiasaan penelitian, refleksi, dan perbaikan praktik pembelajaran secara sistematis.",
    focus: "Menggunakan penelitian tindakan kelas untuk mengubah masalah pembelajaran menjadi dasar pengambilan keputusan.",
    tags: ["PTK", "Plan-Do-Observe-Reflect", "Data", "Refleksi"],
    details: [
      "Memahami PTK sebagai kegiatan praktis, kolaboratif, dan reflektif yang menyatu dengan pembelajaran.",
      "Menggunakan data kualitatif dan kuantitatif untuk mengevaluasi tindakan.",
      "Mengembangkan gagasan PTK tentang media interaktif untuk mengurangi kesalahan logika pada perulangan Python."
    ],
    link: "https://drive.google.com/drive/folders/1AWwZrOLC4NMV91gyuC1-JjokSyxv7VW6?usp=sharing"
  }
];

// Dokumentasi Galeri Kegiatan (Foto & Video Nyata dari Folder dokumentasi)
const galleryItems: GalleryItem[] = [
  // SEMESTER 1 - FOTO KEGIATAN
  {
    id: "ds1",
    category: "Praktik Mengajar",
    type: "photo",
    title: "Simulasi Sirkuit & Pemrograman IoT Tinkercad di Lab Komputer",
    date: "Oktober 2026",
    semester: "Semester I",
    location: "Laboratorium Komputer SMAN 3 Yogyakarta",
    thumbnail: "/dokumentasi/semester1/ds1.png",
    mediaUrl: "/dokumentasi/semester1/ds1.png",
    description: "Peserta didik mempraktikkan perancangan logika mikrokontroler Arduino dan simulasi sirkuit virtual menggunakan platform Tinkercad sebelum implementasi perangkat keras fisik.",
    reflection: "Simulasi virtual memberikan ruang aman bagi siswa untuk bereksperimen, memahami alur sinyal input-output, serta memperbaiki kesalahan sintaks tanpa khawatir merusak perangkat keras fisik.",
    tags: ["IoT", "Tinkercad", "Arduino", "Simulasi Lab", "Informatika"]
  },
  {
    id: "ds2",
    category: "Budaya Sekolah",
    type: "photo",
    title: "Penyambutan Siswa & Budaya 5S di Gerbang Utama Sekolah",
    date: "September 2026",
    semester: "Semester I",
    location: "Gerbang Utama SMAN 3 Yogyakarta",
    thumbnail: "/dokumentasi/semester1/ds2.jpg",
    mediaUrl: "/dokumentasi/semester1/ds2.jpg",
    description: "Pelaksanaan pembiasaan budaya 5S (Senyum, Salam, Sapa, Sopan, Santun) menyambut kedatangan peserta didik di pagi hari bersama Guru Pamong dan tim pendidik sekolah.",
    reflection: "Membangun ikatan emosional dan rasa diterima sejak langkah pertama siswa memasuki gerbang sekolah adalah fondasi penting iklim belajar yang suportif dan berpihak pada murid.",
    tags: ["Budaya 5S", "Iklim Sekolah", "Pendidikan Karakter", "SMAN 3 Yogyakarta"]
  },
  {
    id: "ds3",
    category: "Budaya Sekolah",
    type: "photo",
    title: "Penguatan Disiplin Positif & Interaksi Ramah Anak di Pagi Hari",
    date: "September 2026",
    semester: "Semester I",
    location: "Lingkungan SMAN 3 Yogyakarta",
    thumbnail: "/dokumentasi/semester1/ds3.jpg",
    mediaUrl: "/dokumentasi/semester1/ds3.jpg",
    description: "Pendampingan kedatangan siswa dengan keteladanan sikap, menegakkan budaya tertib yang hangat tanpa intimidasi guna menumbuhkan kesadaran diri peserta didik.",
    reflection: "Disiplin positif lahir dari keteladanan dan hubungan saling menghargai antara guru dan peserta didik.",
    tags: ["Disiplin Positif", "Keteladanan Guru", "Pramuka & Karakter"]
  },
  {
    id: "ds4",
    category: "Bimbingan & Diskusi",
    type: "photo",
    title: "Koordinasi Awal Perancangan Modul Ajar bersama Guru Pamong & DPL",
    date: "September 2026",
    semester: "Semester I",
    location: "Ruang Kolaborasi Guru SMAN 3 Yogyakarta",
    thumbnail: "/dokumentasi/semester1/ds4.jpg",
    mediaUrl: "/dokumentasi/semester1/ds4.jpg",
    description: "Sesi diskusi mendalam bersama Guru Pamong dan Dosen Pembimbing Lapangan LPTK UNY mengenai capaian pembelajaran, karakteristik siswa, dan rancangan asesmen diagnostik.",
    reflection: "Kolaborasi intensif dengan praktisi berpengalaman membantu menjembatani teori pedagogik kampus dengan dinamika nyata kebutuhan siswa di kelas.",
    tags: ["Bimbingan Guru Pamong", "DPL UNY", "Modul Ajar", "Perencanaan KBM"]
  },
  {
    id: "ds5",
    category: "Bimbingan & Diskusi",
    type: "photo",
    title: "Konsultasi Refleksi & Penyelarasan Modul Praktik Terbimbing",
    date: "Oktober 2026",
    semester: "Semester I",
    location: "Ruang Kerja Guru SMAN 3 Yogyakarta",
    thumbnail: "/dokumentasi/semester1/ds5.jpg",
    mediaUrl: "/dokumentasi/semester1/ds5.jpg",
    description: "Melakukan telaah kritis terhadap hasil observasi siklus mengajar pertama dan merumuskan perbaikan strategi scaffolding untuk sesi berikutnya.",
    reflection: "Refleksi bukanlah mencari kesalahan, melainkan proses sadar untuk terus memperhalus pendekatan mengajar agar setiap siswa terfasilitasi secara adil.",
    tags: ["Refleksi Terbimbing", "Supervisi Klinis", "Evaluasi KBM"]
  },
  {
    id: "ds6",
    category: "Praktik Mengajar",
    type: "photo",
    title: "Pemaparan Materi Internet of Things (IoT) & Algoritma Komputasi",
    date: "Oktober 2026",
    semester: "Semester I",
    location: "Laboratorium Komputer SMAN 3 Yogyakarta",
    thumbnail: "/dokumentasi/semester1/ds6.jpg",
    mediaUrl: "/dokumentasi/semester1/ds6.jpg",
    description: "Menjelaskan konsep arsitektur IoT, interkoneksi sensor-aktuator, dan integrasi logika pemrograman menggunakan slide interaktif dan studi kasus dunia nyata.",
    reflection: "Mengaitkan materi abstrak Informatika dengan teknologi yang ditemui siswa sehari-hari secara signifikan meningkatkan atensi dan rasa ingin tahu mereka.",
    tags: ["IoT", "Presentasi Interaktif", "Konseptual", "Lab Informatika"]
  },
  {
    id: "ds7",
    category: "Praktik Mengajar",
    type: "photo",
    title: "Pengelolaan Kelas Aktif & Penerapan Pertanyaan Pemantik",
    date: "Oktober 2026",
    semester: "Semester I",
    location: "Laboratorium Komputer SMAN 3 Yogyakarta",
    thumbnail: "/dokumentasi/semester1/ds7.jpeg",
    mediaUrl: "/dokumentasi/semester1/ds7.jpeg",
    description: "Memandu jalannya diskusi pleno, memberikan jeda berpikir (wait time), dan memancing respon kritis siswa terkait alur pemecahan masalah algoritma.",
    reflection: "Guru bukan pusat dari segala jawaban, melainkan fasilitator yang mengarahkan rasa ingin tahu siswa menuju penemuan mandiri.",
    tags: ["Pengelolaan Kelas", "Pertanyaan Pemantik", "Student Centered"]
  },
  {
    id: "ds8",
    category: "Praktik Mengajar",
    type: "photo",
    title: "Fasilitasi Diskusi Pemecahan Masalah & Alur Logika Program",
    date: "November 2026",
    semester: "Semester I",
    location: "Laboratorium Komputer SMAN 3 Yogyakarta",
    thumbnail: "/dokumentasi/semester1/ds8.jpeg",
    mediaUrl: "/dokumentasi/semester1/ds8.jpeg",
    description: "Mendampingi kelompok siswa saat mereka menganalisis studi kasus dan membedah percabangan kondisi kode bersama rekan sekelompok.",
    reflection: "Belajar dalam kelompok heterogen membantu siswa yang masih kesulitan untuk mendapatkan penjelasan dalam bahasa sebaya mereka.",
    tags: ["Diskusi Kelompok", "Kolaborasi", "Problem Solving"]
  },
  {
    id: "ds9",
    category: "Praktik Mengajar",
    type: "photo",
    title: "Implementasi Peer Debugging & Diskusi Rekan Sebaya",
    date: "November 2026",
    semester: "Semester I",
    location: "Laboratorium Komputer SMAN 3 Yogyakarta",
    thumbnail: "/dokumentasi/semester1/ds9.jpeg",
    mediaUrl: "/dokumentasi/semester1/ds9.jpeg",
    description: "Siswa saling memeriksa kode program rekan sebelahnya untuk menemukan bug atau syntax error sebelum meminta bantuan guru pembimbing.",
    reflection: "Peer debugging menumbuhkan respek, melatih komunikasi asertif, dan mengurangi beban ketergantungan siswa pada guru.",
    tags: ["Peer Debugging", "Pair Programming", "CASEL", "Informatika"]
  },
  {
    id: "ds10",
    category: "Budaya Sekolah",
    type: "photo",
    title: "Kebersamaan Pendidik & Peserta Didik di Lapangan Upacara",
    date: "November 2026",
    semester: "Semester I",
    location: "Lapangan Bendera SMAN 3 Yogyakarta",
    thumbnail: "/dokumentasi/semester1/ds10.jpeg",
    mediaUrl: "/dokumentasi/semester1/ds10.jpeg",
    description: "Dokumentasi kebersamaan penuh kehangatan bersama siswa-siswi SMAN 3 Yogyakarta setelah penutupan siklus pembelajaran terbimbing.",
    reflection: "Hubungan emosional yang tulus dan rasa saling menghargai adalah aset terbesar dalam menumbuhkan motivasi belajar intrinsik peserta didik.",
    tags: ["Komunitas Sekolah", "Padmanaba", "Kemitraan", "Kebersamaan"]
  },
  {
    id: "ds11",
    category: "Praktik Mengajar",
    type: "photo",
    title: "Pendampingan Langsung (Scaffolding) Praktikum Coding Siswa",
    date: "November 2026",
    semester: "Semester I",
    location: "Laboratorium Komputer SMAN 3 Yogyakarta",
    thumbnail: "/dokumentasi/semester1/ds11.jpeg",
    mediaUrl: "/dokumentasi/semester1/ds11.jpeg",
    description: "Memberikan bimbingan terarah bagi peserta didik yang memerlukan instruksi bertahap pada struktur perulangan (loops) dan array logika.",
    reflection: "Diferensiasi proses menuntut guru untuk peka bergerak di antara meja siswa, mengenali siswa yang malu bertanya dan memberikan bantuan tepat waktu.",
    tags: ["Scaffolding", "Diferensiasi Proses", "Praktik Komputer"]
  },
  {
    id: "ds12",
    category: "Praktik Mengajar",
    type: "photo",
    title: "Fokus & Eksplorasi Mandiri Siswa dalam Mengerjakan Proyek Informatika",
    date: "November 2026",
    semester: "Semester I",
    location: "Laboratorium Komputer SMAN 3 Yogyakarta",
    thumbnail: "/dokumentasi/semester1/ds12.jpeg",
    mediaUrl: "/dokumentasi/semester1/ds12.jpeg",
    description: "Suasana kerja mandiri peserta didik yang antusias memecahkan tantangan pemrograman bertingkat sesuai tingkat kesiapan belajar masing-masing.",
    reflection: "Tantangan berjenjang (tiered assignment) memastikan siswa yang cepat tidak bosan dan siswa yang butuh waktu tidak merasa tertinggal.",
    tags: ["Tantangan Bertingkat", "Kemandirian Belajar", "Lab Informatika"]
  },
  {
    id: "ds13",
    category: "Budaya Sekolah",
    type: "photo",
    title: "Pelestarian Budaya Lokal: Hari Busana Tradisional Jawa Padmanaba",
    date: "Desember 2026",
    semester: "Semester I",
    location: "Koridor Kelas SMAN 3 Yogyakarta",
    thumbnail: "/dokumentasi/semester1/ds13.jpeg",
    mediaUrl: "/dokumentasi/semester1/ds13.jpeg",
    description: "Partisipasi aktif dalam pelestarian budaya Yogyakarta dengan mengenakan busana tradisional Jawa pada hari Kamis Pahing bersama warga sekolah.",
    reflection: "Pendidikan yang berakar pada kearifan lokal menanamkan kebanggaan identitas budaya pada generasi muda di era percepatan digital.",
    tags: ["Kamis Pahing", "Busana Jawa", "Kearifan Lokal", "Budaya Sekolah"]
  },
  {
    id: "ds14",
    category: "Praktik Mengajar",
    type: "photo",
    title: "Asesmen Formatif Interaktif Berbasis Gamifikasi (Kahoot!)",
    date: "Desember 2026",
    semester: "Semester I",
    location: "Laboratorium Komputer SMAN 3 Yogyakarta",
    thumbnail: "/dokumentasi/semester1/ds14.jpeg",
    mediaUrl: "/dokumentasi/semester1/ds14.jpeg",
    description: "Pelaksanaan kuis formatif berbasis kuis digital interaktif Kahoot! untuk mengevaluasi pemahaman konsep Informatika secara seru, transparan, dan memotivasi.",
    reflection: "Gamifikasi mengubah asesmen dari momen yang mencemaskan menjadi pengalaman belajar yang menyenangkan dan memberikan umpan balik seketika bagi guru.",
    tags: ["Kahoot!", "Gamifikasi", "Asesmen Formatif", "Evaluasi Menyenangkan"]
  },
  {
    id: "ds15",
    category: "Budaya Sekolah",
    type: "photo",
    title: "Solidaritas & Keakraban Rekan Sejawat Mahasiswa PPL PPG UNY",
    date: "Desember 2026",
    semester: "Semester I",
    location: "SMAN 3 Yogyakarta",
    thumbnail: "/dokumentasi/semester1/ds15.jpeg",
    mediaUrl: "/dokumentasi/semester1/ds15.jpeg",
    description: "Foto bersama rekan mahasiswa PPG Prajabatan dalam balutan busana adat memperingati hari kebudayaan di sekolah mitra latihan.",
    reflection: "Komunitas praktisi sebaya (peer learning community) memberikan dukungan moral yang kuat dan wadah berbagi pengalaman selama masa PPL.",
    tags: ["Komunitas Praktisi", "PPG UNY", "Kebersamaan", "Tradisi Jawa"]
  },

  // SEMESTER 2 - FOTO KEGIATAN
  {
    id: "ds21",
    category: "Bimbingan & Diskusi",
    type: "photo",
    title: "Konsultasi Lanjutan Modul Pembelajaran Mandiri (PPL II)",
    date: "Januari 2025",
    semester: "Semester II",
    location: "Ruang Kerja Guru SMAN 3 Yogyakarta",
    thumbnail: "/dokumentasi/semester2/ds21.jpeg",
    mediaUrl: "/dokumentasi/semester2/ds21.jpeg",
    description: "Diskusi pemantapan modul ajar mandiri dan penetapan target perbaikan berkelanjutan berbasis hasil refleksi PPL siklus sebelumnya.",
    reflection: "Proses bimbingan yang berkelanjutan membentuk kebiasaan reflektif dan memperkaya wawasan metodologis guru calon profesional.",
    tags: ["PPL II", "Bimbingan Mandiri", "Pengembangan Keprofesian"]
  },
  {
    id: "ds22",
    category: "Praktik Mengajar",
    type: "photo",
    title: "Bimbingan Personal 1-on-1: Membimbing Logika & Struktur Kode",
    date: "Februari 2025",
    semester: "Semester II",
    location: "Laboratorium Komputer SMAN 3 Yogyakarta",
    thumbnail: "/dokumentasi/semester2/ds22.jpeg",
    mediaUrl: "/dokumentasi/semester2/ds22.jpeg",
    description: "Pendampingan intensif tatap muka bagi siswa untuk mendiagnosis kelemahan logika algoritma dan mengajarkan teknik penelusuran (tracing) kode.",
    reflection: "Mengetahui secara tepat letak miskonsepsi siswa memungkinkan intervensi yang cepat dan terarah tanpa mematahkan rasa percaya diri mereka.",
    tags: ["Personal Scaffolding", "1-on-1 Mentoring", "Computational Thinking"]
  },
  {
    id: "ds23",
    category: "Praktik Mengajar",
    type: "photo",
    title: "Penguatan Growth Mindset & Resiliensi Pemrograman Siswa",
    date: "Februari 2026",
    semester: "Semester II",
    location: "Laboratorium Komputer SMAN 3 Yogyakarta",
    thumbnail: "/dokumentasi/semester2/ds23.jpeg",
    mediaUrl: "/dokumentasi/semester2/ds23.jpeg",
    description: "Memotivasi siswa saat menghadapi pesan error kompleks agar melihat pesan error sebagai peluang belajar baru ('The Power of Yet').",
    reflection: "Kecerdasan komputasional bukan bakat bawaan, melainkan keterampilan yang bertumbuh seiring latihan dan keberanian menghadapi kegagalan.",
    tags: ["Growth Mindset", "Resiliensi", "Error Handling", "Motivasi Belajar"]
  },
  {
    id: "ds24",
    category: "Budaya Sekolah",
    type: "photo",
    title: "Tradisi Salim & Pembiasaan Karakter Hormat di Pagi Hari",
    date: "Agustus - Oktober 2026",
    semester: "Semester II",
    location: "Pintu Masuk SMAN 3 Yogyakarta",
    thumbnail: "/dokumentasi/semester2/ds24.jpeg",
    mediaUrl: "/dokumentasi/semester2/ds24.jpeg",
    description: "Momen hangat siswa menyalami guru saat tiba di sekolah, memelihara adab sopan santun dan relasi positif warga sekolah.",
    reflection: "Karakter dan adab mendahului ilmu pengetahuan; pembiasaan sederhana setiap pagi membentuk kepribadian luhur peserta didik.",
    tags: ["Karakter Murid", "Adab & Budaya", "SMAN 3 Yogyakarta"]
  },
  {
    id: "ds25",
    category: "Budaya Sekolah",
    type: "photo",
    title: "Festival Makan Ikan oleh Dinas Kelautan & Perikanan DIY",
    date: "26 Agustus 2026",
    semester: "Semester II",
    location: "Halaman Kampus SMAN 3 Yogyakarta",
    thumbnail: "/dokumentasi/semester2/ds25.jpeg",
    mediaUrl: "/dokumentasi/semester2/ds25.jpeg",
    description: "Acara Festival Makan Ikan yang diselenggarakan oleh Dinas Kelautan dan Perikanan DIY",
    reflection: "Melalui kegiatan Festival Makan Ikan dan Lomba Memasak Ikan Tuna, pembelajaran tidak hanya berfokus pada transfer pengetahuan gizi, tetapi juga menjadi wadah pembentukan karakter (student agency), kreativitas, dan kolaborasi nyata siswa dalam menyelesaikan tantangan berbasis proyek.",
    tags: ["Festival", "Kewirausahaan", "Profil Pelajar Pancasila"]
  },
  {
    id: "ds26",
    category: "Budaya Sekolah",
    type: "photo",
    title: "Jalan Sehat & Senam Bugar Bersama Komunitas Padmanaba",
    date: "20 September 2026",
    semester: "Semester II",
    location: "Kawasan SMAN 3 Yogyakarta",
    thumbnail: "/dokumentasi/semester2/ds26.jpeg",
    mediaUrl: "/dokumentasi/semester2/ds26.jpeg",
    description: "Mengikuti rangkaian kegiatan kebugaran jasmani bersama kepala sekolah, dewan guru, karyawan, dan seluruh peserta didik SMAN 3 Yogyakarta.",
    reflection: "Keterlibatan guru dalam agenda non-akademik mempererat rasa kekeluargaan dan menciptakan kedekatan emosional yang melampaui batas ruang kelas.",
    tags: ["Jalan Sehat", "Kebugaran", "Komunitas Sekolah", "Padmanaba"]
  },
  {
    id: "ds27",
    category: "Bimbingan & Diskusi",
    type: "photo",
    title: "Konsultasi Reflektif & Bimbingan Keprofesian bersama Guru Pamong",
    date: "Agustus - Oktober 2026",
    semester: "Semester II",
    location: "Ruang Kerja Guru SMAN 3 Yogyakarta",
    thumbnail: "/dokumentasi/semester2/ds27.jpeg",
    mediaUrl: "/dokumentasi/semester2/ds27.jpeg",
    description: "Sesi dialog profesional terstruktur bersama Guru Pamong mengevaluasi ketercapaian siklus mengajar mandiri dan merumuskan intervensi perbaikan KBM.",
    reflection: "Bimbingan berkala bersama Guru Pamong membantu melihat area perbaikan pedagogik dan memperkaya wawasan metodologis guru calon profesional.",
    tags: ["Bimbingan Guru Pamong", "Refleksi Klinis", "PPL II Mandiri"]
  },
  {
    id: "ds28",
    category: "Budaya Sekolah",
    type: "photo",
    title: "Kebersamaan Siswa & Guru PPL di Bawah Pohon Beringin Ikonik",
    date: "Semester II",
    semester: "Semester II",
    location: "Pohon Beringin SMAN 3 Yogyakarta",
    thumbnail: "/dokumentasi/semester2/ds28.jpg",
    mediaUrl: "/dokumentasi/semester2/ds28.jpg",
    description: "Dokumentasi kebersamaan penuh kehangatan antara guru model PPL bersama seluruh peserta didik di bawah pohon beringin ikonik SMA Negeri 3 Yogyakarta setelah menyelesaikan rangkaian siklus KBM.",
    reflection: "Membangun iklim kelas yang bersahabat dan hubungan emosional yang tulus membuka ruang keterbukaan bagi peserta didik untuk aktif berdiskusi dan mencintai pembelajaran Informatika.",
    tags: ["Kebersamaan Siswa", "Pohon Beringin", "Padmanaba", "CASEL", "PPL II"]
  },
  {
    id: "ds29",
    category: "Budaya Sekolah",
    type: "photo",
    title: "Partisipasi Apel Pagi dan Upacara Bendera Rutin Sekolah",
    date: "Semester II",
    semester: "Semester II",
    location: "Halaman Upacara SMAN 3 Yogyakarta",
    thumbnail: "/dokumentasi/semester2/ds29.jpg",
    mediaUrl: "/dokumentasi/semester2/ds29.jpg",
    description: "Mahasiswa PPG Prajabatan berbaris rapi mengikuti pembiasaan upacara bendera dan apel pagi bersama dewan guru serta seluruh peserta didik SMA Negeri 3 Yogyakarta.",
    reflection: "Keteladanan kedisiplinan dan pembiasaan nilai-nilai kebangsaan secara langsung di lingkungan sekolah membentuk karakter dan integritas keprofesian pendidik yang utuh.",
    tags: ["Apel Pagi", "Upacara Bendera", "Karakter Pendidik", "Budaya Sekolah"]
  },
  {
    id: "ds30",
    category: "Praktik Mengajar",
    type: "photo",
    title: "Penyampaian Tujuan Pembelajaran di Laboratorium Komputer",
    date: "Semester II",
    semester: "Semester II",
    location: "Laboratorium Komputer SMAN 3 Yogyakarta",
    thumbnail: "/dokumentasi/semester2/ds30.jpg",
    mediaUrl: "/dokumentasi/semester2/ds30.jpg",
    description: "Membuka sesi KBM di laboratorium komputer dengan memaparkan tujuan pembelajaran, alur logika komputasional, serta target capaian peserta didik melalui proyektor dan mikrofon.",
    reflection: "Penyampaian tujuan pembelajaran yang terstruktur di awal pertemuan memberikan kejelasan arah belajar (roadmap) bagi siswa dalam menyelesaikan tugas praktikum mandiri.",
    tags: ["Tujuan Pembelajaran", "Apersepsi", "Lab Informatika", "Praktik Mengajar"]
  },
  {
    id: "ds31",
    category: "Praktik Mengajar",
    type: "photo",
    title: "Penguatan Konsep 4 Pilar Berpikir Komputasional (CT)",
    date: "Semester II",
    semester: "Semester II",
    location: "Laboratorium Komputer SMAN 3 Yogyakarta",
    thumbnail: "/dokumentasi/semester2/ds31.jpg",
    mediaUrl: "/dokumentasi/semester2/ds31.jpg",
    description: "Penjelasan interaktif mengenai konsep empat pilar computational thinking (dekomposisi, pengenalan pola, abstraksi, dan perancangan algoritma) berbantuan media presentasi sebelum sesi simulasi komputer.",
    reflection: "Menghubungkan konsep abstrak computational thinking ke dalam pemecahan masalah kontekstual nyata memicu nalar kritis siswa dan mempermudah transfer konsep ke dalam alur logika program.",
    tags: ["Computational Thinking", "4 Pilar CT", "Informatika Fase E", "Praktik Mengajar"]
  },
  {
    id: "ds32",
    category: "Bimbingan & Diskusi",
    type: "photo",
    title: "Aktivitas Non-Mengajar & Koordinasi Administrasi Sekolah",
    date: "Semester II",
    semester: "Semester II",
    location: "Ruang Kerja Administrasi SMAN 3 Yogyakarta",
    thumbnail: "/dokumentasi/semester2/ds32.jpg",
    mediaUrl: "/dokumentasi/semester2/ds32.jpg",
    description: "Pelaksanaan tugas non-mengajar dan koordinasi administrasi persekolahan bersama rekan sejawat mahasiswa PPL PPG di ruang administrasi SMA Negeri 3 Yogyakarta.",
    reflection: "Keterlibatan dalam kegiatan non-mengajar memperkaya pemahaman calon guru bahwa keberhasilan KBM ditopang oleh manajemen dan tata kelola administrasi sekolah yang tertib dan kolaboratif.",
    tags: ["Aktivitas Non-Mengajar", "Administrasi Sekolah", "Kolaborasi Rekan Sejawat"]
  },

  // VIDEO PEMBELAJARAN
  {
    id: "vid-1",
    category: "Video Pembelajaran",
    type: "video",
    title: "Video 1 Praktik Pembelajaran Terbimbing (PPL I) - Lab Informatika",
    date: "November 2026",
    semester: "Semester I",
    location: "Laboratorium Komputer SMAN 3 Yogyakarta",
    thumbnail: "/dokumentasi/semester1/ds6.jpg",
    mediaUrl: "https://drive.google.com/file/d/1Kk6vlD7RvTH29VevfUQdy5fWjbOkSJwh/view?usp=sharing",
    driveLink: "https://drive.google.com/file/d/1Kk6vlD7RvTH29VevfUQdy5fWjbOkSJwh/view?usp=sharing",
    description: "Rekaman video pelaksanaan praktik mengajar terbimbing di laboratorium komputer SMAN 3 Yogyakarta. Mendemonstrasikan apersepsi kontekstual materi IoT, demonstrasi simulasi, pendampingan kelompok, dan asesmen formatif interaktif.",
    reflection: "Melalui rekaman video ini, saya dapat menganalisis ketepatan manajemen waktu, variasi intonasi suara, distribusi perhatian kepada seluruh kelompok siswa, dan efektivitas penggunaan media presentasi.",
    tags: ["Video PPL 1", "Microteaching", "Lab Informatika", "Refleksi Guru"]
  },
  {
    id: "vid-2",
    category: "Video Pembelajaran",
    type: "video",
    title: "Video 2 Praktik Pembelajaran Mandiri (PPL II) - Lab Informatika",
    date: "Oktober 2026",
    semester: "Semester II",
    location: "Laboratorium Komputer SMAN 3 Yogyakarta",
    thumbnail: "/dokumentasi/semester2/ds22.jpeg",
    mediaUrl: "https://drive.google.com/file/d/1NRh5Bbh-PnXsLHqT3Vt96xhnGNipoAuF/view?usp=sharing",
    driveLink: "https://drive.google.com/file/d/1NRh5Bbh-PnXsLHqT3Vt96xhnGNipoAuF/view?usp=sharing",
    description: "Dokumentasi video pembelajaran mandiri dengan fokus diferensiasi proses dan scaffolding bertahap pada materi pemrograman dan pemecahan masalah algoritma.",
    reflection: "Video memperlihatkan transisi dari pembelajaran terpusat pada guru menuju peran guru sebagai fasilitator yang berkeliling mendampingi siswa secara personal dan suportif.",
    tags: ["Video PPL 2", "Pembelajaran Mandiri", "Diferensiasi", "Scaffolding"]
  }
];

const skills = [
  "Python", "Computational Thinking", "Pembelajaran Informatika", "Scaffolding",
  "Desain Universal untuk Pembelajaran", "Asesmen Diagnostik", "Growth Mindset",
  "Pembelajaran Sosial Emosional", "Pair Programming", "Peer Debugging", "PTK", "Refleksi"
];

function MarqueeTicker() {
  const items = [
    "Informatika & Pemrograman",
    "Python & Algoritma",
    "Computational Thinking",
    "Desain Universal untuk Pembelajaran (DUP)",
    "Pola Pikir Bertumbuh (Growth Mindset)",
    "Pembelajaran Sosial Emosional (CASEL)",
    "Scaffolding & Starter Code",
    "Penelitian Tindakan Kelas (PTK)",
    "SMAN 3 Yogyakarta",
    "PPG Prajabatan UNY"
  ];
  return (
    <div className="relative w-full overflow-hidden border-y border-white/60 bg-white/75 py-4 backdrop-blur-md shadow-xs">
      <div className="flex w-max animate-marquee gap-8 text-xs font-mono tracking-widest text-slate-800 uppercase font-semibold">
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6">
            <span className="hover:text-purple-700 transition cursor-default">{item}</span>
            <span className="text-purple-600 font-bold">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionHeading({
  kicker,
  title,
  copy,
  centered = false
}: {
  kicker: string;
  title: string;
  copy?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <span className="inline-flex items-center gap-2 rounded-full border border-purple-300 bg-white/80 px-3.5 py-1 text-xs font-mono font-bold text-purple-800 uppercase tracking-widest mb-3 shadow-2xs backdrop-blur-sm">
        // {kicker}
      </span>
      <h2 className="font-display text-3xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-slate-900">
        {title}
      </h2>
      {copy && <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700 font-light">{copy}</p>}
    </div>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const y = useTransform(scrollYProgress, [0, 0.25], [0, 60]);

  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<{ [key: string]: boolean }>({
    pembelajaran: true,
    ppl: true
  });

  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const handleDropdownEnter = (menu: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setOpenDropdown(menu);
  };
  const handleDropdownLeave = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 320);
  };
  const [semester, setSemester] = useState<"All" | Semester>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  // State Galeri (Dua Tab Interaktif: Semester 1 & Semester 2)
  const [galleryTab, setGalleryTab] = useState<"Semester 1" | "Semester 2">("Semester 1");
  const [gallerySubFilter, setGallerySubFilter] = useState<string>("Semua");
  const [selectedGallery, setSelectedGallery] = useState<GalleryItem | null>(null);

  // State About Tabs
  const [aboutTab, setAboutTab] = useState<"profil" | "visi-misi" | "nilai">("profil");

  // State Foto Profil (Default ke profil_formal.jpg)
  const [profileImage, setProfileImage] = useState<string>(() => {
    const saved = localStorage.getItem("resa_profile_pic");
    if (saved && saved !== "/profile.jpg") return saved;
    return "/profil_formal.jpg";
  });
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [tempPhotoUrl, setTempPhotoUrl] = useState("");

  const [sent, setSent] = useState(false);
  const [formError, setFormError] = useState("");

  // Routing / View state for Portofolio (Home, Refleksi MK, Siklus Mengajar, Karya Inovatif, Galeri, Praktik Mandiri Hub & 6 Analisis)
  const [viewMode, setViewMode] = useState<string>(() => {
    const hash = typeof window !== "undefined" ? window.location.hash.replace("#", "") : "";
    if (
      hash === "praktik-mandiri" ||
      hash === "karya-inovatif" ||
      hash === "siklus-mengajar" ||
      hash === "refleksi-matkul" ||
      hash === "refleksi-mata-kuliah" ||
      hash === "gallery" ||
      hash === "galeri" ||
      hash.startsWith("analisis-")
    ) {
      if (hash === "refleksi-mata-kuliah") return "refleksi-matkul";
      if (hash === "galeri") return "gallery";
      return hash;
    }
    return "home";
  });

  const navigateToView = (targetView: string, sectionHash?: string) => {
    setViewMode(targetView);
    if (targetView === "home") {
      window.location.hash = sectionHash || "#home";
      if (sectionHash && sectionHash !== "#home") {
        setTimeout(() => {
          const el = document.getElementById(sectionHash.replace("#", ""));
          el?.scrollIntoView({ behavior: "smooth" });
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      window.location.hash = `#${targetView}`;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (
        hash === "praktik-mandiri" ||
        hash === "karya-inovatif" ||
        hash === "siklus-mengajar" ||
        hash === "refleksi-matkul" ||
        hash === "refleksi-mata-kuliah" ||
        hash === "gallery" ||
        hash === "galeri" ||
        hash === "analisis-rancangan" ||
        hash === "analisis-materi" ||
        hash === "analisis-media" ||
        hash === "analisis-video" ||
        hash === "analisis-nonmengajar" ||
        hash === "analisis-penilaian"
      ) {
        if (hash === "refleksi-mata-kuliah") {
          setViewMode("refleksi-matkul");
        } else if (hash === "galeri") {
          setViewMode("gallery");
        } else {
          setViewMode(hash);
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (!hash || ["home", "about", "skills", "contact"].includes(hash)) {
        setViewMode("home");
      }
    };

    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const visibleProjects = useMemo(
    () => (semester === "All" ? projects : projects.filter((p) => p.semester === semester)),
    [semester]
  );

  // Data Galeri per Semester (Dua Tab Interaktif)
  const semesterCounts = useMemo(() => {
    return {
      "Semester 1": galleryItems.filter((g) => g.semester === "Semester I").length,
      "Semester 2": galleryItems.filter((g) => g.semester === "Semester II").length,
    };
  }, []);

  const currentSemesterItems = useMemo(() => {
    const target = galleryTab === "Semester 1" ? "Semester I" : "Semester II";
    return galleryItems.filter((item) => item.semester === target);
  }, [galleryTab]);

  const currentSubCategories = useMemo(() => {
    const isSem1 = galleryTab === "Semester 1";
    const semItems = isSem1
      ? galleryItems.filter((g) => g.semester === "Semester I")
      : galleryItems.filter((g) => g.semester === "Semester II");

    const allCount = semItems.length;
    const pmCount = semItems.filter((g) => g.category === "Praktik Mengajar").length;
    const bsCount = semItems.filter((g) => g.category === "Budaya Sekolah").length;
    const bdCount = semItems.filter((g) => g.category === "Bimbingan & Diskusi").length;
    const vidCount = semItems.filter((g) => g.type === "video" || g.category === "Video Pembelajaran").length;

    return [
      { label: "Semua", value: "Semua", count: allCount },
      {
        label: isSem1 ? "Praktik Mengajar (Terbimbing)" : "Praktik Mengajar (Mandiri)",
        value: "Praktik Mengajar",
        count: pmCount
      },
      {
        label: isSem1 ? "Observasi Lingkungan & Budaya" : "Kegiatan Nonmengajar",
        value: "Budaya Sekolah",
        count: bsCount
      },
      { label: "Bimbingan & Diskusi", value: "Bimbingan & Diskusi", count: bdCount },
      { label: "Video Pembelajaran", value: "Video Pembelajaran", count: vidCount },
    ];
  }, [galleryTab]);

  const visibleGallery = useMemo(() => {
    if (gallerySubFilter === "Semua") return currentSemesterItems;
    if (gallerySubFilter === "Video Pembelajaran") {
      return currentSemesterItems.filter((g) => g.type === "video" || g.category === "Video Pembelajaran");
    }
    return currentSemesterItems.filter((g) => g.category === gallerySubFilter);
  }, [currentSemesterItems, gallerySubFilter]);

  const currentGalleryIndex = useMemo(
    () => visibleGallery.findIndex((item) => item.id === selectedGallery?.id),
    [visibleGallery, selectedGallery]
  );

  const handlePrevGallery = () => {
    if (visibleGallery.length === 0) return;
    if (currentGalleryIndex > 0) {
      setSelectedGallery(visibleGallery[currentGalleryIndex - 1]);
    } else {
      setSelectedGallery(visibleGallery[visibleGallery.length - 1]);
    }
  };

  const handleNextGallery = () => {
    if (visibleGallery.length === 0) return;
    if (currentGalleryIndex >= 0 && currentGalleryIndex < visibleGallery.length - 1) {
      setSelectedGallery(visibleGallery[currentGalleryIndex + 1]);
    } else {
      setSelectedGallery(visibleGallery[0]);
    }
  };

  // Keyboard navigation untuk modal perbesaran foto / video
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedGallery) return;
      if (e.key === "Escape") setSelectedGallery(null);
      if (e.key === "ArrowLeft") handlePrevGallery();
      if (e.key === "ArrowRight") handleNextGallery();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedGallery, currentGalleryIndex, visibleGallery]);

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

  const handleSavePhotoUrl = (url: string) => {
    const target = url.trim() || "/profil_formal.jpg";
    setProfileImage(target);
    localStorage.setItem("resa_profile_pic", target);
    setShowPhotoModal(false);
  };

  // Keyboard navigation for modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelected(null);
        setSelectedGallery(null);
        setShowPhotoModal(false);
      } else if (e.key === "ArrowLeft" && selectedGallery) {
        if (currentGalleryIndex > 0) {
          setSelectedGallery(visibleGallery[currentGalleryIndex - 1]);
        }
      } else if (e.key === "ArrowRight" && selectedGallery) {
        if (currentGalleryIndex >= 0 && currentGalleryIndex < visibleGallery.length - 1) {
          setSelectedGallery(visibleGallery[currentGalleryIndex + 1]);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedGallery, currentGalleryIndex, visibleGallery]);

  return (
    <div className="min-h-screen overflow-x-hidden text-slate-800 font-sans studio-grid relative selection:bg-purple-300/40 selection:text-purple-950">
      {/* Scroll indicator with aurora gradient */}
      <motion.div
        className="fixed left-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-[#d16ba5] via-[#ba83ca] to-[#41dfff] shadow-sm"
        style={{ scaleX: progress, width: "100%" }}
      />

      {/* Navigation Bar (Floating Island Pill with Frosted Glass) */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 sm:px-5 py-3 shadow-lg border border-white/85 bg-white/92 backdrop-blur-xl transition duration-300">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              navigateToView("home", "#home");
            }}
            className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer"
            aria-label="Resa Martyaningsih home"
          >
            {/* Logo UNY & Logo PPG (Hanya di navbar, clean) */}
            <div className="flex items-center gap-2 shrink-0">
              <img
                src="/logo-uny.png"
                alt="Logo Universitas Negeri Yogyakarta"
                className="size-7 sm:size-8 object-contain transition group-hover:scale-105"
              />
              <img
                src="/logo-ppg.png"
                alt="Logo PPG Calon Guru"
                className="h-7 sm:h-8 w-auto object-contain rounded-sm transition group-hover:scale-105"
              />
            </div>
            <div className="text-left">
              <span className="block font-display text-xs sm:text-sm font-bold text-slate-900 tracking-wide leading-tight group-hover:text-purple-700 transition">
                Resa Martyaningsih, S.Kom.
              </span>
              <span className="block text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-slate-600 font-semibold">
                PPG Calon Guru · UNY
              </span>
            </div>
          </a>

          {/* Desktop Nav Links dengan Dropdown Menu Rapi */}
          <div className="hidden items-center gap-1.5 sm:gap-2 text-xs font-semibold uppercase tracking-wider text-slate-700 lg:flex">
            {/* 1. About */}
            <a
              href="#about"
              onClick={(e) => {
                if (viewMode !== "home") {
                  e.preventDefault();
                  navigateToView("home", "#about");
                }
              }}
              className="rounded-xl px-3 py-1.5 text-slate-700 hover:text-purple-700 hover:bg-white/70 transition duration-200 cursor-pointer"
            >
              About
            </a>

            {/* 2. DROPDOWN SUBMENU: Pembelajaran ▾ */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("pembelajaran")}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                onClick={() => setOpenDropdown(openDropdown === "pembelajaran" ? null : "pembelajaran")}
                className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 font-semibold transition cursor-pointer ${
                  openDropdown === "pembelajaran" || viewMode === "refleksi-matkul" || viewMode === "karya-inovatif"
                    ? "bg-purple-100/90 text-purple-950 font-bold shadow-2xs"
                    : "text-slate-700 hover:text-purple-700 hover:bg-white/70"
                }`}
              >
                <span>Pembelajaran</span>
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${openDropdown === "pembelajaran" ? "rotate-180 text-purple-700" : ""}`}
                />
              </button>

              <AnimatePresence>
                {openDropdown === "pembelajaran" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    onMouseEnter={() => handleDropdownEnter("pembelajaran")}
                    onMouseLeave={handleDropdownLeave}
                    className="absolute left-0 top-full pt-2 w-72 z-50 before:absolute before:-top-2 before:left-0 before:right-0 before:h-4 before:content-['']"
                  >
                    <div className="rounded-2xl border border-white/90 bg-white/95 p-2 shadow-2xl backdrop-blur-2xl space-y-1">
                      {/* Item 1: Refleksi Mata Kuliah */}
                      <a
                        href="#refleksi-matkul"
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenDropdown(null);
                          navigateToView("refleksi-matkul");
                        }}
                        className="flex items-start gap-3 rounded-xl p-2.5 hover:bg-purple-50 transition text-left group/item cursor-pointer"
                      >
                        <div className="grid size-8 place-items-center rounded-lg bg-purple-100 text-purple-900 shrink-0 group-hover/item:bg-purple-600 group-hover/item:text-white transition">
                          <BookOpen size={16} />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="block font-display text-xs font-bold text-slate-900 group-hover/item:text-purple-800">
                              Refleksi Mata Kuliah
                            </span>
                            <span className="rounded bg-purple-100 px-1 py-0.2 text-[9px] font-mono font-bold text-purple-900">
                              11 MK
                            </span>
                          </div>
                          <span className="block text-[10px] text-slate-500 font-normal">
                            Halaman artefak &amp; modul Semester 1 &amp; 2
                          </span>
                        </div>
                      </a>

                      {/* Item 2: Karya Inovatif SinauPy */}
                      <a
                        href="#karya-inovatif"
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenDropdown(null);
                          navigateToView("karya-inovatif");
                        }}
                        className="flex items-start gap-3 rounded-xl p-2.5 hover:bg-emerald-50 transition text-left group/item cursor-pointer"
                      >
                        <div className="grid size-8 place-items-center rounded-lg bg-emerald-100 text-emerald-900 shrink-0 group-hover/item:bg-emerald-600 group-hover/item:text-white transition">
                          <Code2 size={16} />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-display text-xs font-bold text-slate-900 group-hover/item:text-emerald-800">
                              Karya Inovatif
                            </span>
                            <span className="rounded bg-emerald-100 px-1 py-0.2 text-[9px] font-mono font-bold text-emerald-900">
                              SinauPy
                            </span>
                          </div>
                          <span className="block text-[10px] text-slate-500 font-normal">
                            Halaman belajar Python interaktif live
                          </span>
                        </div>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 3. DROPDOWN SUBMENU: Praktik PPL ▾ */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("ppl")}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                onClick={() => setOpenDropdown(openDropdown === "ppl" ? null : "ppl")}
                className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 font-semibold transition cursor-pointer ${
                  openDropdown === "ppl" || viewMode === "siklus-mengajar" || viewMode === "praktik-mandiri" || viewMode.startsWith("analisis-")
                    ? "bg-purple-100/90 text-purple-950 font-bold shadow-2xs"
                    : "text-slate-700 hover:text-purple-700 hover:bg-white/70"
                }`}
              >
                <span>Praktik PPL</span>
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${openDropdown === "ppl" ? "rotate-180 text-purple-700" : ""}`}
                />
              </button>

              <AnimatePresence>
                {openDropdown === "ppl" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    onMouseEnter={() => handleDropdownEnter("ppl")}
                    onMouseLeave={handleDropdownLeave}
                    className="absolute left-0 top-full pt-2 w-80 z-50 before:absolute before:-top-2 before:left-0 before:right-0 before:h-4 before:content-['']"
                  >
                    <div className="rounded-2xl border border-white/90 bg-white/95 p-2 shadow-2xl backdrop-blur-2xl space-y-1">
                      {/* Item 1: Siklus Praktik Mengajar */}
                      <a
                        href="#siklus-mengajar"
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenDropdown(null);
                          navigateToView("siklus-mengajar");
                        }}
                        className="flex items-start gap-3 rounded-xl p-2.5 hover:bg-purple-50 transition text-left group/item cursor-pointer"
                      >
                        <div className="grid size-8 place-items-center rounded-lg bg-purple-100 text-purple-900 shrink-0 group-hover/item:bg-purple-600 group-hover/item:text-white transition">
                          <Sparkles size={16} />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-display text-xs font-bold text-slate-900 group-hover/item:text-purple-800">
                              Siklus Praktik Mengajar
                            </span>
                            <span className="rounded bg-purple-100 px-1 py-0.2 text-[9px] font-mono font-bold text-purple-900">
                              7 Siklus
                            </span>
                          </div>
                          <span className="block text-[10px] text-slate-500 font-normal">
                            Halaman 3 Terbimbing (Sem 1) &amp; 4 Mandiri (Sem 2)
                          </span>
                        </div>
                      </a>

                      {/* Item 2: 6 Analisis Praktik Mandiri */}
                      <a
                        href="#praktik-mandiri"
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenDropdown(null);
                          navigateToView("praktik-mandiri");
                        }}
                        className="flex items-start gap-3 rounded-xl p-2.5 hover:bg-indigo-50 transition text-left group/item cursor-pointer"
                      >
                        <div className="grid size-8 place-items-center rounded-lg bg-indigo-100 text-indigo-900 shrink-0 group-hover/item:bg-indigo-600 group-hover/item:text-white transition">
                          <Layers3 size={16} />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-display text-xs font-bold text-slate-900 group-hover/item:text-indigo-800">
                              Praktik Mandiri (PPL II)
                            </span>
                            <span className="rounded bg-indigo-100 px-1 py-0.2 text-[9px] font-mono font-bold text-indigo-900">
                              6 Analisis
                            </span>
                          </div>
                          <span className="block text-[10px] text-slate-500 font-normal">
                            Halaman kajian modul, media, video, asesmen
                          </span>
                        </div>
                      </a>

                      {/* Item 3: Jurnal Harian PPL (Google Docs) */}
                      <a
                        href="https://docs.google.com/document/d/1Eb4ajPsX3ADq_q53zvMD0x4GR61zzo9p/edit?usp=sharing&ouid=109235945935102899444&rtpof=true&sd=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpenDropdown(null)}
                        className="flex items-start gap-3 rounded-xl p-2.5 hover:bg-blue-50 transition text-left group/item cursor-pointer"
                      >
                        <div className="grid size-8 place-items-center rounded-lg bg-blue-100 text-blue-900 shrink-0 group-hover/item:bg-blue-600 group-hover/item:text-white transition">
                          <FileText size={16} />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-display text-xs font-bold text-slate-900 group-hover/item:text-blue-800">
                              Jurnal Harian PPL
                            </span>
                            <span className="rounded bg-blue-100 px-1 py-0.2 text-[9px] font-mono font-bold text-blue-900">
                              Docs
                            </span>
                          </div>
                          <span className="block text-[10px] text-slate-500 font-normal">
                            Logbook harian KBM &amp; nonmengajar SMAN 3
                          </span>
                        </div>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 4. Kompetensi & Skills (Menu Utama di Navbar) */}
            <a
              href="#skills"
              onClick={(e) => {
                if (viewMode !== "home") {
                  e.preventDefault();
                  navigateToView("home", "#skills");
                }
              }}
              className="rounded-xl px-3 py-1.5 text-slate-700 hover:text-purple-700 hover:bg-white/70 transition duration-200 cursor-pointer"
            >
              Kompetensi &amp; Skills
            </a>

            {/* 5. Galeri (Halaman Mandiri) */}
            <a
              href="#gallery"
              onClick={(e) => {
                e.preventDefault();
                navigateToView("gallery");
              }}
              className={`rounded-xl px-3 py-1.5 font-semibold transition duration-200 cursor-pointer ${
                viewMode === "gallery"
                  ? "bg-purple-100/90 text-purple-950 font-bold shadow-2xs"
                  : "text-slate-700 hover:text-purple-700 hover:bg-white/70"
              }`}
            >
              Galeri
            </a>

            {/* 6. Kontak */}
            <a
              href="#contact"
              onClick={(e) => {
                if (viewMode !== "home") {
                  e.preventDefault();
                  navigateToView("home", "#contact");
                }
              }}
              className="rounded-xl px-3 py-1.5 text-slate-700 hover:text-purple-700 hover:bg-white/70 transition duration-200 cursor-pointer"
            >
              Kontak
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                if (viewMode !== "home") {
                  e.preventDefault();
                  navigateToView("home", "#contact");
                }
              }}
              className="hidden rounded-xl bg-gradient-to-r from-[#d16ba5] via-[#ba83ca] to-[#79b3f4] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition hover:brightness-105 shadow-md sm:block cursor-pointer"
            >
              Let's connect
            </a>

            <button
              className="rounded-xl p-2 text-slate-800 hover:bg-white/80 transition lg:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mx-auto mt-2 max-w-6xl rounded-2xl p-4 lg:hidden border border-white/80 shadow-2xl space-y-2 bg-white/95 backdrop-blur-xl"
            >
              {/* Profil Link */}
              <a
                href="#about"
                onClick={(e) => {
                  if (viewMode !== "home") {
                    e.preventDefault();
                    navigateToView("home", "#about");
                  } else {
                    closeMenu();
                  }
                }}
                className="block rounded-xl px-4 py-2 text-slate-800 hover:bg-purple-50 font-display text-sm font-bold"
              >
                About Profil &amp; Visi
              </a>

              {/* Mobile Submenu: Pembelajaran & Karya */}
              <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-2 space-y-1">
                <span className="block px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-purple-900">
                  // Pembelajaran &amp; Karya
                </span>
                <a
                  href="#refleksi-matkul"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToView("refleksi-matkul");
                    closeMenu();
                  }}
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-slate-800 hover:bg-white text-xs font-semibold"
                >
                  <span className="flex items-center gap-2">
                    <BookOpen size={14} className="text-purple-700" />
                    <span>Halaman Refleksi Mata Kuliah</span>
                  </span>
                  <span className="text-[10px] font-mono text-purple-900 bg-purple-100 px-1.5 py-0.2 rounded font-bold">11 MK</span>
                </a>
                <a
                  href="#karya-inovatif"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToView("karya-inovatif");
                    closeMenu();
                  }}
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-slate-800 hover:bg-white text-xs font-semibold"
                >
                  <span className="flex items-center gap-2">
                    <Code2 size={14} className="text-emerald-700" />
                    <span>Halaman Karya Inovatif SinauPy</span>
                  </span>
                  <span className="text-[10px] font-mono text-emerald-900 bg-emerald-100 px-1.5 py-0.2 rounded font-bold">Live Web</span>
                </a>
              </div>

              {/* Mobile Submenu: Praktik PPL */}
              <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-2 space-y-1">
                <span className="block px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-900">
                  // Praktik Lapangan (PPL)
                </span>
                <a
                  href="#siklus-mengajar"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToView("siklus-mengajar");
                    closeMenu();
                  }}
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-slate-800 hover:bg-white text-xs font-semibold"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles size={14} className="text-indigo-700" />
                    <span>Halaman Siklus Praktik Mengajar</span>
                  </span>
                  <span className="text-[10px] font-mono text-indigo-900 bg-indigo-100 px-1.5 py-0.2 rounded font-bold">7 Siklus</span>
                </a>
                <a
                  href="#praktik-mandiri"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToView("praktik-mandiri");
                    closeMenu();
                  }}
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-slate-800 hover:bg-white text-xs font-semibold"
                >
                  <span className="flex items-center gap-2">
                    <Layers3 size={14} className="text-purple-700" />
                    <span>Halaman Praktik Mandiri (PPL II)</span>
                  </span>
                  <span className="text-[10px] font-mono text-purple-900 bg-purple-100 px-1.5 py-0.2 rounded font-bold">6 Analisis</span>
                </a>
                <a
                  href="https://docs.google.com/document/d/1Eb4ajPsX3ADq_q53zvMD0x4GR61zzo9p/edit?usp=sharing&ouid=109235945935102899444&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-slate-800 hover:bg-white text-xs font-semibold"
                >
                  <span className="flex items-center gap-2">
                    <FileText size={14} className="text-blue-700" />
                    <span>Jurnal Harian PPL (Google Docs)</span>
                  </span>
                  <span className="text-[10px] font-mono text-blue-900 bg-blue-100 px-1.5 py-0.2 rounded font-bold">Docs</span>
                </a>
              </div>

              {/* Kompetensi & Skills */}
              <a
                href="#skills"
                onClick={(e) => {
                  if (viewMode !== "home") {
                    e.preventDefault();
                    navigateToView("home", "#skills");
                  }
                  closeMenu();
                }}
                className="flex items-center gap-2.5 rounded-xl px-4 py-2 text-slate-800 hover:bg-purple-50 text-xs font-bold"
              >
                <Layers3 size={16} className="text-slate-600" />
                <span>Kompetensi &amp; Skills</span>
              </a>

              {/* Galeri (Halaman Mandiri) */}
              <a
                href="#gallery"
                onClick={(e) => {
                  e.preventDefault();
                  navigateToView("gallery");
                  closeMenu();
                }}
                className={`flex items-center justify-between rounded-xl px-4 py-2 font-display text-sm font-bold ${
                  viewMode === "gallery"
                    ? "bg-purple-100 text-purple-950"
                    : "text-slate-800 hover:bg-purple-50"
                }`}
              >
                <span>Halaman Galeri &amp; Dokumentasi</span>
                <span className="text-[10px] font-mono text-purple-900 bg-purple-100 px-1.5 py-0.2 rounded font-bold">{galleryItems.length} Item</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  if (viewMode !== "home") {
                    e.preventDefault();
                    navigateToView("home", "#contact");
                  } else {
                    closeMenu();
                  }
                }}
                className="block rounded-xl px-4 py-2 text-slate-800 hover:bg-purple-50 font-display text-sm font-bold"
              >
                Kontak &amp; Diskusi
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {viewMode === "home" ? (
          <>
            {/* HERO SECTION */}
            <section id="home" className="relative isolate flex min-h-[92vh] items-center overflow-hidden px-6 pb-16 pt-32">
              <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
                {/* Left Column: Headline & Intro */}
                <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/85 bg-white/92 px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-purple-900 shadow-sm backdrop-blur-md">
                    <Sparkles size={14} className="text-purple-700" />
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                    </span>
                    <span>PPG Calon Guru · Pendidikan Informatika UNY</span>
                  </div>

                  <h1 className="max-w-5xl font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-slate-900">
                    Mendidik melalui <br className="hidden sm:inline" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9b2c6b] via-[#6a3594] to-[#0284c7]">
                      Informatika.
                    </span>
                  </h1>

                  <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-900 font-normal">
                    Resa Martyaningsih, S.Kom. — calon guru Informatika profesional yang mengintegrasikan computational thinking, pedagogi berpusat pada murid, growth mindset dalam coding, dan refleksi berkelanjutan berbasis data.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <button
                      onClick={() => navigateToView("praktik-mandiri")}
                      className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#d16ba5] via-[#ba83ca] to-[#79b3f4] hover:brightness-105 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:scale-[1.02] cursor-pointer"
                    >
                      <Sparkles size={16} className="text-purple-100" />
                      <span>Praktik Mengajar Mandiri</span>
                    </button>
                    <button
                      onClick={() => navigateToView("refleksi-matkul")}
                      className="group inline-flex items-center gap-2 rounded-xl border border-white/85 bg-white/92 hover:bg-white px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-900 transition hover:-translate-y-0.5 shadow-sm cursor-pointer"
                    >
                      <span>Refleksi Mata Kuliah</span>
                      <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-purple-700" />
                    </button>
                    <button
                      onClick={() => navigateToView("gallery")}
                      className="inline-flex items-center gap-2 rounded-xl border border-white/85 bg-white/92 hover:bg-white px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-900 transition hover:border-purple-300 shadow-sm cursor-pointer"
                    >
                      <Film size={16} className="text-purple-700" />
                      <span>Galeri Kegiatan</span>
                    </button>
                    <button
                      onClick={() => navigateToView("home", "#about")}
                      className="inline-flex items-center gap-2 rounded-xl border border-white/80 bg-white/80 hover:bg-white px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-900 transition shadow-2xs cursor-pointer"
                    >
                      <span>Profil &amp; Visi</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs sm:text-sm text-slate-900 font-mono font-bold">
                    <span className="flex items-center gap-2">
                      <GraduationCap size={16} className="text-purple-800" />
                      Universitas Negeri Yogyakarta
                    </span>
                    <span className="flex items-center gap-2">
                      <Code2 size={16} className="text-indigo-800" />
                      Python · Computational Thinking · DUP
                    </span>
                  </div>
                </motion.div>

                {/* Right Column: Hero Profile Picture Frame & Showcase */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="relative mx-auto w-full max-w-md"
                >
                  <div className="studio-card relative rounded-[2.2rem] p-6 shadow-xl border border-white/85 bg-white/92 backdrop-blur-xl">
                    {/* Profile Photo Frame */}
                    <div className="relative mb-5 text-center">
                      <div className="relative mx-auto w-44 sm:w-52 group">
                        {/* Outer Border Frame */}
                        <div className="relative overflow-hidden rounded-[2.1rem] border border-white/80 bg-white/70 p-1.5 shadow-md">
                          <div className="relative aspect-square overflow-hidden rounded-[1.8rem] bg-white">
                            <img
                              src={profileImage}
                              alt="Foto Profil Resa Martyaningsih"
                              className="size-full object-cover object-top transition duration-500 group-hover:scale-105"
                              onError={(e) => {
                                if (e.currentTarget.src !== window.location.origin + "/profile-placeholder.svg") {
                                  e.currentTarget.src = "profil_formal.jpg";
                                }
                              }}
                            />

                            {/* Floating Status Badge inside Photo */}
                            <div className="absolute inset-x-2 bottom-2 flex items-center justify-between rounded-xl bg-white/95 px-2.5 py-1.5 backdrop-blur-md border border-white/80 text-[11px] shadow-sm">
                              <div className="flex items-center gap-1.5">
                                <span className="relative flex h-2 w-2">
                                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                                </span>
                                <span className="font-mono text-slate-800 font-semibold">PPG Calon Guru</span>
                              </div>
                              <button
                                onClick={() => {
                                  setTempPhotoUrl(profileImage === "/profile.jpg" ? "" : profileImage);
                                  setShowPhotoModal(true);
                                }}
                                className="flex items-center gap-1 rounded px-1.5 py-0.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer"
                                title="Klik untuk mengganti tautan foto profil"
                              >
                                <Camera size={12} className="text-purple-700" />
                                <span>Ganti</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Name and Tagline Under Photo Frame */}
                      <div className="mt-4">
                        <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                          Resa Martyaningsih, S.Kom.
                        </h2>
                        <p className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-purple-800 mt-1">
                          Guru Informatika · Fasilitator Pembelajaran
                        </p>
                      </div>
                    </div>

                    {/* Focus Pillars */}
                    <div className="border-t border-slate-200/80 pt-4">
                      <div className="mb-3 flex items-center justify-between">
                        <p className="text-xs font-mono font-bold uppercase tracking-[0.24em] text-slate-700">
                          // Pedagogical Focus
                        </p>
                        <Layers3 size={16} className="text-purple-700" />
                      </div>
                      <div className="grid grid-cols-2 gap-2.5">
                        {[
                          ["01", "Understand learners", "Profiling & kesiapan"],
                          ["02", "Design access", "DUP & diferensiasi"],
                          ["03", "Build confidence", "Growth mindset & CASEL"],
                          ["04", "Improve continuously", "Refleksi data & PTK"]
                        ].map(([n, t, d]) => (
                          <div
                            key={n}
                            className="rounded-xl border border-slate-200/90 bg-white/90 p-2.5 transition hover:bg-white hover:border-purple-300 shadow-2xs"
                          >
                            <span className="font-mono text-sm font-bold text-purple-700 leading-none block">{n}</span>
                            <p className="text-xs font-bold text-slate-800 leading-tight mt-1">{t}</p>
                            <p className="text-[10px] text-slate-700 leading-snug mt-0.5 font-medium">{d}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* METRICS QUICK STATS BENTO STRIP (Portal Langsung ke Halaman Tersendiri) */}
            <div className="mx-auto max-w-6xl px-6 pb-12">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
                <div
                  onClick={() => navigateToView("refleksi-matkul")}
                  className="studio-card rounded-2xl border border-white/85 bg-white/92 p-5 backdrop-blur-md shadow-md hover:border-purple-300 hover:shadow-lg transition cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <span className="block font-mono text-[10px] uppercase tracking-widest text-purple-700 font-bold">01 / REFLEKSI MK</span>
                    <ArrowUpRight size={14} className="text-purple-600 opacity-0 group-hover:opacity-100 transition" />
                  </div>
                  <span className="mt-2 block font-display text-3xl font-bold text-slate-900">11 MK</span>
                  <span className="mt-1 block text-xs text-purple-800 font-semibold group-hover:underline">Buka Refleksi →</span>
                </div>
                <div
                  onClick={() => navigateToView("siklus-mengajar")}
                  className="studio-card rounded-2xl border border-white/85 bg-white/92 p-5 backdrop-blur-md shadow-md hover:border-indigo-300 hover:shadow-lg transition cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <span className="block font-mono text-[10px] uppercase tracking-widest text-indigo-700 font-bold">02 / SIKLUS</span>
                    <ArrowUpRight size={14} className="text-indigo-600 opacity-0 group-hover:opacity-100 transition" />
                  </div>
                  <span className="mt-2 block font-display text-3xl font-bold text-slate-900">7 Siklus</span>
                  <span className="mt-1 block text-xs text-indigo-800 font-semibold group-hover:underline">Buka Siklus →</span>
                </div>
                <div
                  onClick={() => navigateToView("praktik-mandiri")}
                  className="studio-card rounded-2xl border border-white/85 bg-white/92 p-5 backdrop-blur-md shadow-md hover:border-emerald-300 hover:shadow-lg transition cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <span className="block font-mono text-[10px] uppercase tracking-widest text-emerald-700 font-bold">03 / PPL MANDIRI</span>
                    <ArrowUpRight size={14} className="text-emerald-600 opacity-0 group-hover:opacity-100 transition" />
                  </div>
                  <span className="mt-2 block font-display text-3xl font-bold text-slate-900">6 Analisis</span>
                  <span className="mt-1 block text-xs text-emerald-800 font-semibold group-hover:underline">Buka PPL II →</span>
                </div>
                <div
                  onClick={() => navigateToView("karya-inovatif")}
                  className="studio-card rounded-2xl border border-white/85 bg-white/92 p-5 backdrop-blur-md shadow-md hover:border-amber-300 hover:shadow-lg transition cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <span className="block font-mono text-[10px] uppercase tracking-widest text-amber-700 font-bold">04 / INOVASI</span>
                    <ArrowUpRight size={14} className="text-amber-600 opacity-0 group-hover:opacity-100 transition" />
                  </div>
                  <span className="mt-2 block font-display text-3xl font-bold text-slate-900">SinauPy</span>
                  <span className="mt-1 block text-xs text-amber-800 font-semibold group-hover:underline">Buka SinauPy →</span>
                </div>
                <div
                  onClick={() => navigateToView("gallery")}
                  className="studio-card rounded-2xl border border-white/85 bg-white/92 p-5 backdrop-blur-md shadow-md hover:border-pink-300 hover:shadow-lg transition cursor-pointer group col-span-2 sm:col-span-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="block font-mono text-[10px] uppercase tracking-widest text-pink-700 font-bold">05 / GALERI</span>
                    <ArrowUpRight size={14} className="text-pink-600 opacity-0 group-hover:opacity-100 transition" />
                  </div>
                  <span className="mt-2 block font-display text-3xl font-bold text-slate-900">{galleryItems.length} Item</span>
                  <span className="mt-1 block text-xs text-pink-800 font-semibold group-hover:underline">Buka Galeri →</span>
                </div>
              </div>
            </div>

            {/* MARQUEE TICKER */}
            <MarqueeTicker />

            {/* ABOUT SECTION (Profil Pribadi, Visi & Misi, Nilai Inti) */}
            <section id="about" className="px-6 py-28 border-t border-white/50 bg-white/50 backdrop-blur-md">
              <div className="mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10">
                  <SectionHeading
                    kicker="01 · ABOUT"
                    title="Profil, Visi & Filosofi Pendidik"
                    copy="Memadukan kompetensi teknis teknologi informasi dengan kepekaan pedagogik untuk menumbuhkan potensi setiap peserta didik."
                  />

                  {/* Navigation Tabs inside About */}
                  <div className="flex items-center gap-1.5 rounded-2xl border border-white/85 bg-white/92 p-1.5 shrink-0 self-start md:self-end shadow-md backdrop-blur-xl">
                    {[
                      { id: "profil", label: "Profil Pribadi", icon: User },
                      { id: "visi-misi", label: "Visi & Misi", icon: Target },
                      { id: "nilai", label: "Filosofi Mengajar", icon: Heart }
                    ].map((tab) => {
                      const Icon = tab.icon;
                      const isActive = aboutTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setAboutTab(tab.id as typeof aboutTab)}
                          className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-medium transition duration-200 cursor-pointer ${
                            isActive
                              ? "bg-gradient-to-r from-[#ba83ca] to-[#79b3f4] text-slate-950 shadow-md font-bold"
                              : "text-slate-800 hover:text-slate-950 hover:bg-white/90 font-semibold"
                          }`}
                        >
                          <Icon size={14} className={isActive ? "text-white" : "text-slate-500"} />
                          <span>{tab.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* TAB CONTENT: PROFIL PRIBADI */}
                {aboutTab === "profil" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]"
                  >
                    {/* Left Card: Biodata & Refleksi Personal */}
                    <div className="studio-card rounded-3xl p-6 sm:p-8 space-y-6 bg-white/92 border border-white/85 shadow-lg">
                      <div className="flex items-start gap-4">
                        <div className="grid size-12 place-items-center rounded-2xl bg-purple-100 text-purple-800 border border-purple-200 shrink-0">
                          <User size={24} />
                        </div>
                        <div>
                          <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                            Resa Martyaningsih, S.Kom.
                          </h3>
                          <p className="text-xs font-mono uppercase tracking-wider font-bold text-purple-800 mt-0.5">
                            Calon Guru Profesional · Mahasiswa PPG Prajabatan Informatika
                          </p>
                        </div>
                      </div>

                      <p className="text-base sm:text-lg leading-relaxed text-slate-800 font-normal">
                        Perkenalkan, saya Resa Martyaningsih, mahasiswa yang berasal dari Gunungkidul, Yogyakarta. Daerah ini dikenal dengan keindahan alamnya serta masyarakat yang menjunjung tinggi nilai kesederhanaan dan gotong royong. Lingkungan tersebut membentuk saya menjadi pribadi yang tangguh, mandiri, dan terus berusaha berkembang.
                      </p>

                      <p className="text-base leading-relaxed text-slate-800 font-normal">
                        Ketertarikan saya pada dunia pendidikan tumbuh dari pengalaman belajar dan inspirasi dari para guru yang berdampak dalam hidup saya. Saya percaya bahwa guru memiliki peran penting dalam membimbing dan menginspirasi generasi masa depan. Seiring dengan perkembangan zaman, saya juga memiliki minat dalam bidang informatika dan teknologi, khususnya dalam pemanfaatannya untuk mendukung proses pembelajaran yang lebih efektif dan interaktif.
                      </p>

                      <p className="text-base leading-relaxed text-slate-800 font-normal">
                        Saya memiliki tujuan untuk menjadi guru profesional yang tidak hanya menguasai materi, tetapi juga mampu menciptakan pembelajaran yang inovatif, menyenangkan, dan sesuai dengan kebutuhan peserta didik. Saya berkomitmen untuk terus belajar, mengembangkan kompetensi di bidang pendidikan dan teknologi, serta beradaptasi dengan perubahan di era digital agar dapat memberikan kontribusi terbaik dalam dunia pendidikan.
                      </p>

                      {/* Biodata Quick Facts */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200 text-sm">
                        <div className="flex items-center gap-2.5 text-slate-700">
                          <GraduationCap size={16} className="text-purple-700 shrink-0" />
                          <span><strong className="text-slate-900 font-semibold">LPTK:</strong> UNY (PPG Prajabatan)</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-slate-700">
                          <Award size={16} className="text-indigo-700 shrink-0" />
                          <span><strong className="text-slate-900 font-semibold">Keahlian:</strong> Informatika &amp; Pemrograman</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-slate-700">
                          <MapPin size={16} className="text-emerald-700 shrink-0" />
                          <span><strong className="text-slate-900 font-semibold">Domisili:</strong> Gunungkidul, D.I. Yogyakarta, Indonesia</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-slate-700">
                          <Mail size={16} className="text-purple-700 shrink-0" />
                          <span className="truncate"><strong className="text-slate-900 font-semibold">Email:</strong> resamartyaningsih.2025@student.uny.ac.id</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Card: Kompetensi & Minat Utama */}
                    <div className="space-y-4">
                      <div className="studio-card rounded-3xl p-6 bg-white/92 border border-white/85 shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                          <BookOpen size={20} className="text-purple-700" />
                          <h4 className="font-display text-xl font-bold text-slate-900">Kompetensi Pedagogik Unggulan</h4>
                        </div>
                        <ul className="space-y-3 text-sm text-slate-800 font-normal">
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 size={16} className="text-emerald-600 mt-1 shrink-0" />
                            <span><strong className="text-slate-900 font-semibold">Asesmen Diagnostik &amp; Profiling:</strong> Mengidentifikasi modalitas belajar, kesiapan logika, dan minat coding siswa sebelum memulai modul.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 size={16} className="text-emerald-600 mt-1 shrink-0" />
                            <span><strong className="text-slate-900 font-semibold">Desain Universal untuk Pembelajaran (DUP):</strong> Menyediakan ragam cara representasi materi (visual flowchart, starter code, studi kasus) dan opsi penugasan.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 size={16} className="text-emerald-600 mt-1 shrink-0" />
                            <span><strong className="text-slate-900 font-semibold">Pola Pikir Bertumbuh (Growth Mindset):</strong> Membiasakan <em>The Power of Yet</em> agar pesan error menjadi teman belajar, bukan kegagalan.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 size={16} className="text-emerald-600 mt-1 shrink-0" />
                            <span><strong className="text-slate-900 font-semibold">Penelitian Tindakan Kelas (PTK):</strong> Siklus terukur <em>Plan-Do-Observe-Reflect</em> untuk menyelesaikan kendala belajar siswa di kelas riil.</span>
                          </li>
                        </ul>
                      </div>

                      <div className="studio-card rounded-3xl p-6 bg-white/90 border border-purple-300 shadow-md">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-800">
                            // Komitmen Pendidik
                          </span>
                          <Sparkles size={16} className="text-purple-700" />
                        </div>
                        <blockquote className="font-display italic text-base leading-relaxed text-slate-800">
                          "Guru bukan sekadar penyampai materi kurikulum, melainkan arsitek ekosistem belajar yang menuntun kodrat alam dan zaman anak dengan cinta kasih dan rasa aman."
                        </blockquote>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* TAB CONTENT: VISI & MISI */}
                {aboutTab === "visi-misi" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-8"
                  >
                    {/* Dua Kartu Visi: Visi Pendidikan Indonesia & Visi Calon Guru */}
                    <div className="grid gap-6 lg:grid-cols-2">
                      {/* Visi Pribadi untuk Pendidikan Indonesia */}
                      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e1b4b] via-[#2e1065] to-[#0f172a] border border-white/20 text-white p-7 sm:p-9 shadow-xl flex flex-col justify-between">
                        <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none text-purple-300">
                          <Compass size={140} />
                        </div>
                        <div className="relative">
                          <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/20 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-widest text-purple-300 mb-4">
                            <Target size={14} /> Visi Pribadi untuk Pendidikan Indonesia
                          </div>
                          <h4 className="font-display text-lg sm:text-xl font-bold text-white mb-3">
                            Mewujudkan Pendidikan Berkualitas, Inklusif &amp; Adaptif
                          </h4>
                          <p className="text-sm sm:text-base leading-relaxed text-slate-200 font-normal">
                            "Visi pribadi saya untuk pendidikan di Indonesia adalah berkontribusi dalam mewujudkan pendidikan yang berkualitas, inklusif, dan adaptif melalui praktik pembelajaran yang berpusat pada peserta didik serta pengembangan guru yang profesional dan berintegritas. Saya meyakini bahwa pendidikan tidak hanya membekali peserta didik dengan pengetahuan, tetapi juga menumbuhkan karakter, kemampuan berpikir kritis, kreativitas, kolaborasi, dan kemandirian belajar agar mereka mampu menjadi pembelajar sepanjang hayat dan berkontribusi positif bagi masyarakat."
                          </p>
                        </div>
                      </div>

                      {/* Visi Pribadi Sebagai Calon Guru */}
                      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#2e1065] border border-white/20 text-white p-7 sm:p-9 shadow-xl flex flex-col justify-between">
                        <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none text-cyan-300">
                          <Sparkles size={140} />
                        </div>
                        <div className="relative">
                          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/20 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-widest text-cyan-300 mb-4">
                            <Sparkles size={14} /> Visi Pribadi Sebagai Calon Guru
                          </div>
                          <h4 className="font-display text-lg sm:text-xl font-bold text-white mb-3">
                            Guru Profesional, Berintegritas, Reflektif &amp; Inovatif
                          </h4>
                          <p className="text-sm sm:text-base leading-relaxed text-slate-200 font-normal">
                            "Sebagai calon guru, visi saya adalah menjadi guru profesional yang berintegritas, reflektif, inovatif, dan berorientasi pada pembelajaran yang berpusat pada peserta didik. Saya ingin menciptakan lingkungan belajar yang aman, inklusif, dan bermakna sehingga setiap peserta didik memperoleh kesempatan berkembang sesuai potensinya, memiliki karakter yang kuat, mampu berpikir kritis, kreatif, berkolaborasi, serta siap menghadapi perubahan zaman."
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Misi Strategis dan Aksi Konkret */}
                    <div className="studio-card rounded-3xl p-6 sm:p-8 bg-white/92 border border-white/85 shadow-md space-y-6">
                      <div>
                        <div className="flex items-center gap-2.5 mb-2">
                          <Compass size={22} className="text-purple-700" />
                          <h4 className="font-display text-2xl font-bold text-slate-900">
                            Misi Strategis &amp; Aksi Konkret Pembelajaran
                          </h4>
                        </div>
                        <div className="rounded-xl border border-purple-200 bg-purple-50/70 p-4 mt-3">
                          <p className="text-sm sm:text-base text-slate-800 font-semibold leading-relaxed">
                            "Terus meningkatkan kompetensi melalui pendidikan profesi, pelatihan, seminar, membaca literatur, dan mengikuti komunitas belajar guru sebagai bentuk pengembangan profesional berkelanjutan."
                          </p>
                        </div>
                      </div>

                      {/* 3 Butir Aksi Konkret */}
                      <div className="grid gap-4 sm:grid-cols-3">
                        <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs flex flex-col justify-between">
                          <div>
                            <span className="font-mono text-2xl font-bold text-purple-700 leading-none">01</span>
                            <span className="block mt-1 text-[11px] font-mono font-bold uppercase tracking-wider text-purple-900 bg-purple-100 px-2 py-0.5 rounded w-max">
                              Pembelajaran Berpusat pada Murid
                            </span>
                            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-800 font-normal">
                              Dalam pembelajaran, saya akan menerapkan pendekatan yang berpusat pada peserta didik dengan menggunakan model pembelajaran yang sesuai, memanfaatkan teknologi secara efektif, serta menerapkan pembelajaran berdiferensiasi sesuai kebutuhan peserta didik.
                            </p>
                          </div>
                        </div>

                        <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs flex flex-col justify-between">
                          <div>
                            <span className="font-mono text-2xl font-bold text-indigo-700 leading-none">02</span>
                            <span className="block mt-1 text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-900 bg-indigo-100 px-2 py-0.5 rounded w-max">
                              Komunikasi &amp; Kolaborasi Kemitraan
                            </span>
                            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-800 font-normal">
                              Saya juga akan membangun komunikasi dan kolaborasi yang baik dengan peserta didik, orang tua, rekan sejawat, dan masyarakat untuk mendukung proses belajar.
                            </p>
                          </div>
                        </div>

                        <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs flex flex-col justify-between">
                          <div>
                            <span className="font-mono text-2xl font-bold text-emerald-700 leading-none">03</span>
                            <span className="block mt-1 text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded w-max">
                              Nalar Kritis &amp; Refleksi Belajar
                            </span>
                            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-800 font-normal">
                              Saya akan merancang pembelajaran yang mendorong peserta didik berpikir kritis, kreatif, mampu berkolaborasi, serta melakukan refleksi terhadap proses belajarnya.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Komitmen Asesmen, Integritas & Kode Etik */}
                      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 text-slate-800 text-xs sm:text-sm leading-relaxed">
                        <strong className="text-emerald-950 block mb-1 font-bold font-mono text-xs uppercase tracking-wider">
                          Komitmen Evaluasi &amp; Kode Etik Profesi Guru:
                        </strong>
                        <p className="font-normal text-slate-800">
                          Selain itu, saya akan melakukan asesmen dan refleksi secara berkala guna memperbaiki kualitas pembelajaran, menjaga integritas serta menjunjung tinggi kode etik profesi guru agar dapat memberikan layanan pendidikan yang berkualitas dan berdampak positif bagi peserta didik.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* TAB CONTENT: FILOSOFI & NILAI INTI */}
                {aboutTab === "nilai" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >
                    <div className="grid gap-6 sm:grid-cols-3">
                      {[
                        {
                          title: "Reflective",
                          subtitle: "Belajar dari Pengalaman & Data",
                          desc: "Setiap sesi mengajar dan praktikum coding dievaluasi melalui jurnal reflektif dan asesmen formatif. Data pembelajaran menjadi kompas perbaikan siklus berikutnya.",
                          badge: "Siklus PTK"
                        },
                        {
                          title: "Adaptive",
                          subtitle: "Menyesuaikan dengan Kebutuhan",
                          desc: "Tidak ada satu metode yang cocok untuk semua siswa. Scaffolding, starter code, dan tantangan bertingkat dirancang sesuai peta kesiapan (learning readiness) masing-masing siswa.",
                          badge: "Diferensiasi"
                        },
                        {
                          title: "Inclusive",
                          subtitle: "Akses Belajar yang Adil",
                          desc: "Informatika untuk semua. Setiap murid berhak mengeksplorasi potensi logika komputasinya tanpa diskriminasi, didukung lingkungan kelas yang empatik dan bebas perundungan.",
                          badge: "DUP & CASEL"
                        }
                      ].map((val) => (
                        <div key={val.title} className="studio-card rounded-3xl p-6 bg-white/92 border border-white/85 shadow-md flex flex-col justify-between">
                          <div>
                            <span className="inline-block rounded-lg bg-purple-100 px-2.5 py-1 text-xs font-mono font-bold text-purple-900 mb-3 border border-purple-200">
                              {val.badge}
                            </span>
                            <h4 className="font-display text-2xl font-bold text-slate-900">{val.title}</h4>
                            <p className="text-xs font-mono uppercase tracking-wider text-slate-600 mt-1 font-semibold">{val.subtitle}</p>
                            <p className="mt-4 text-sm leading-relaxed text-slate-800 font-normal">{val.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-3xl border border-white/85 bg-white/92 p-6 sm:p-8 text-slate-800 text-sm sm:text-base leading-relaxed shadow-md font-normal">
                      <p>
                        <strong className="text-slate-900">Fondasi Semester I</strong> membangun pemahaman tentang filosofi pendidikan Ki Hajar Dewantara, keberagaman peserta didik, prinsip asesmen, PPL Terbimbing, serta pembudayaan Growth Mindset dalam mengatasi coding anxiety.
                      </p>
                      <p className="mt-3">
                        <strong className="text-slate-900">Semester II</strong> memperluas wawasan melalui integrasi Pembelajaran Sosial Emosional, asesmen multimoda lanjut, PPL Mandiri, Projek Kepemimpinan komunitas sekolah, serta Pengembangan Keprofesian Berkelanjutan melalui PTK.
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </section>

            {/* SKILLS SECTION */}
            <section id="skills" className="px-6 py-28 border-t border-white/50 bg-white/50 backdrop-blur-md">
              <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.9fr_1.1fr] items-center">
                <SectionHeading
                  kicker="03 · SKILLS"
                  title="Technical skills meet teaching craft."
                  copy="Keahlian teknis saya menjadi lebih bermakna ketika dipakai untuk merancang pengalaman belajar yang manusiawi, terukur, dan relevan."
                />
                <div className="flex content-start flex-wrap gap-2.5">
                  {skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.025 }}
                      className="studio-card rounded-full px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-900 bg-white/95 border border-white/85 transition hover:border-purple-400 hover:text-purple-800 hover:scale-105 shadow-sm cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </section>

            {/* CONTACT SECTION */}
            <section id="contact" className="px-6 py-28 border-t border-white/40 bg-white/40 backdrop-blur-md">
              <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.85fr_1.15fr] items-start">
                <div>
                  <SectionHeading
                    kicker="05 · CONTACT"
                    title="Let's build better learning experiences."
                    copy="Tertarik berdiskusi tentang pembelajaran Informatika, praktik mengajar, atau kolaborasi pendidikan? Kirim pesan melalui formulir berikut."
                  />

                  {/* Deep Aurora Accent Contact Card */}
                  <div className="mt-8 rounded-3xl bg-gradient-to-br from-[#1e1b4b] via-[#2e1065] to-[#0f172a] text-white border border-white/20 p-7 sm:p-9 shadow-xl space-y-5">
                    <div>
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-purple-300">
                        // CONNECT &amp; REACH OUT
                      </span>
                      <h3 className="font-display text-2xl font-bold mt-1">Mari Berdiskusi</h3>
                    </div>

                    <div className="space-y-3.5 text-xs sm:text-sm text-slate-200">
                      <p className="flex items-center gap-3">
                        <Mail size={16} className="text-cyan-300 shrink-0" />
                        <span className="truncate">resamartyaningsih.2025@student.uny.ac.id</span>
                      </p>
                      <p className="flex items-center gap-3">
                        <MapPin size={16} className="text-cyan-300 shrink-0" />
                        <span>Yogyakarta, Indonesia</span>
                      </p>
                      <p className="flex items-center gap-3">
                        <GraduationCap size={16} className="text-cyan-300 shrink-0" />
                        <span>Universitas Negeri Yogyakarta (PPG Prajabatan)</span>
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 text-xs italic font-display text-slate-300">
                      "Pendidikan bermakna berawal dari dialog terbuka dan kolaborasi reflektif antar pendidik."
                    </div>

                    <div className="pt-2 flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                      </span>
                      <span>Terbuka untuk kolaborasi pedagogik &amp; KBM Informatika</span>
                    </div>
                  </div>
                </div>

                {/* Form Card */}
                <form onSubmit={submit} noValidate className="studio-card rounded-3xl p-6 sm:p-9 bg-white/90 border border-white/80 shadow-xl">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
                      Nama Lengkap
                      <input
                        name="name"
                        required
                        className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-purple-600 text-sm font-sans shadow-2xs"
                        placeholder="Nama Anda"
                      />
                    </label>
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
                      Email
                      <input
                        name="email"
                        type="email"
                        required
                        className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-purple-600 text-sm font-sans shadow-2xs"
                        placeholder="nama@email.com"
                      />
                    </label>
                  </div>
                  <label className="mt-5 block text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
                    Pesan
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="mt-2 w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-purple-600 text-sm font-sans shadow-2xs"
                      placeholder="Ceritakan kebutuhan, ide kolaborasi, atau tanggapan Anda..."
                    />
                  </label>
                  {formError && <p className="mt-3 text-xs text-rose-600 font-semibold" role="alert">{formError}</p>}
                  <button
                    type="submit"
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#d16ba5] via-[#ba83ca] to-[#79b3f4] hover:brightness-105 px-7 py-3.5 font-bold text-xs uppercase tracking-wider text-white transition active:scale-95 shadow-md cursor-pointer"
                  >
                    <Send size={15} />
                    <span>Send message</span>
                  </button>
                </form>
              </div>
            </section>
          </>
        ) : viewMode === "refleksi-matkul" ? (
          <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-24 pb-20">
            <RefleksiMatkulSection
              projects={projects}
              onSelectProject={(project) => setSelected(project)}
              onNavigateToMandiri={() => navigateToView("praktik-mandiri")}
              onBackToHome={() => navigateToView("home")}
              isStandalonePage={true}
            />
          </div>
        ) : viewMode === "siklus-mengajar" ? (
          <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-24 pb-20">
            <SiklusMengajarSection
              onNavigateToMandiri={() => navigateToView("praktik-mandiri")}
              onBackToHome={() => navigateToView("home")}
              isStandalonePage={true}
            />
          </div>
        ) : viewMode === "karya-inovatif" ? (
          <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-24 pb-20">
            <KaryaInovatifSection onBackToHome={() => navigateToView("home")} isStandalonePage={true} />
          </div>
        ) : viewMode === "praktik-mandiri" ? (
          <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-24 pb-20">
            <PraktikMandiriHub
              onSelectSubpage={(subId) => navigateToView(subId)}
              onBackToHome={() => navigateToView("home")}
            />
          </div>
        ) : viewMode === "gallery" ? (
          <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-24 pb-20">
            <GaleriPage
              galleryItems={galleryItems}
              onSelectGallery={(item) => setSelectedGallery(item)}
              onBackToHome={() => navigateToView("home")}
              isStandalonePage={true}
            />
          </div>
        ) : (
          <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-24 pb-20">
            <SubpageNav
              currentSubpageId={viewMode}
              onSelectSubpage={(subId) => navigateToView(subId)}
              onBackToHub={() => navigateToView("praktik-mandiri")}
              onBackToHome={() => navigateToView("home")}
            />
            {viewMode === "analisis-rancangan" && <SubpageRancangan />}
            {viewMode === "analisis-materi" && <SubpageMateri />}
            {viewMode === "analisis-media" && <SubpageMedia />}
            {viewMode === "analisis-video" && <SubpageVideo />}
            {viewMode === "analisis-nonmengajar" && <SubpageNonmengajar />}
            {viewMode === "analisis-penilaian" && <SubpagePenilaian />}
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/30 px-6 py-12 bg-gradient-to-br from-[#1e1b4b] via-[#2e1065] to-[#0f172a] text-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/10 text-sm">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 font-display text-xl font-bold tracking-wider text-white">
                <div className="grid size-9 place-items-center rounded-xl bg-white/10 text-white font-mono font-bold text-sm border border-white/20">
                  RM
                </div>
                <span>RESA MARTYANINGSIH, S.KOM.</span>
              </div>
              <p className="mt-2 text-xs font-mono uppercase tracking-[0.2em] text-cyan-300 font-semibold">
                Portofolio PPG Prajabatan Informatika UNY
              </p>
              <p className="mt-3 text-xs text-slate-300 max-w-sm leading-relaxed font-light">
                Mendokumentasikan perjalanan belajar, refleksi pedagogik, dan praktik nyata pembelajaran Informatika di SMA Negeri 3 Yogyakarta.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-purple-300 mb-3">Navigasi Halaman</h4>
              <div className="space-y-2 text-xs text-slate-300">
                <div><button onClick={() => navigateToView("home", "#home")} className="hover:text-white transition cursor-pointer">Beranda &amp; Profil</button></div>
                <div><button onClick={() => navigateToView("refleksi-matkul")} className="text-purple-300 hover:text-white transition cursor-pointer font-semibold">Halaman Refleksi MK (11 Modul)</button></div>
                <div><button onClick={() => navigateToView("siklus-mengajar")} className="text-indigo-300 hover:text-white transition cursor-pointer font-semibold">Halaman Siklus Mengajar (7 Siklus)</button></div>
                <div><button onClick={() => navigateToView("karya-inovatif")} className="text-emerald-300 hover:text-white transition cursor-pointer font-semibold">Halaman Karya Inovatif (SinauPy)</button></div>
                <div><button onClick={() => navigateToView("praktik-mandiri")} className="text-cyan-300 hover:text-white transition cursor-pointer font-semibold">Halaman Praktik Mandiri (PPL II)</button></div>
                <div><button onClick={() => navigateToView("home", "#skills")} className="hover:text-white transition cursor-pointer">Kompetensi &amp; Skills</button></div>
                <div><button onClick={() => navigateToView("gallery")} className="text-pink-300 hover:text-white transition cursor-pointer font-semibold">Halaman Galeri ({galleryItems.length} Item)</button></div>
                <div><a href="https://docs.google.com/document/d/1Eb4ajPsX3ADq_q53zvMD0x4GR61zzo9p/edit?usp=sharing&ouid=109235945935102899444&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white transition cursor-pointer font-semibold inline-flex items-center gap-1.5"><span>Jurnal Harian PPL (Google Docs)</span><ExternalLink size={12} /></a></div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-300 mb-3">PPL II Mandiri</h4>
              <div className="space-y-2 text-xs text-slate-300">
                <div><button onClick={() => navigateToView("praktik-mandiri")} className="text-cyan-300 hover:text-white font-medium transition cursor-pointer">Hub Praktik Mandiri</button></div>
                <div><button onClick={() => navigateToView("analisis-rancangan")} className="hover:text-white transition cursor-pointer">Analisis Modul Ajar</button></div>
                <div><button onClick={() => navigateToView("analisis-materi")} className="hover:text-white transition cursor-pointer">Materi Pemrograman</button></div>
                <div><button onClick={() => navigateToView("analisis-media")} className="hover:text-white transition cursor-pointer">Media Pembelajaran</button></div>
                <div><button onClick={() => navigateToView("analisis-video")} className="hover:text-white transition cursor-pointer">Video KBM</button></div>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-slate-400 font-mono">
            <p>© {new Date().getFullYear()} Resa Martyaningsih, S.Kom. All rights reserved.</p>
            <p className="text-slate-300">Reflect · Adapt · Teach · Keep Learning.</p>
          </div>
        </div>
      </footer>

      {/* MODAL: DETAIL PROJECT MATA KULIAH */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[70] grid place-items-center bg-black/60 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) setSelected(null);
            }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 10, opacity: 0 }}
              className="studio-card max-h-[90vh] w-full max-w-2xl overflow-auto rounded-3xl p-7 sm:p-8 border border-white/90 shadow-2xl bg-white text-slate-900"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-purple-800">{selected.eyebrow}</p>
                  <h3 className="mt-2 font-display text-3xl font-bold text-slate-900">{selected.title}</h3>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="rounded-xl border border-slate-200 p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer"
                  aria-label="Tutup detail"
                >
                  <X size={18} />
                </button>
              </div>

              <p className="mt-5 leading-relaxed text-slate-800 font-normal">{selected.description}</p>

              <div className="mt-5 rounded-2xl border border-purple-200 bg-purple-50/70 p-4 text-sm leading-relaxed text-slate-700">
                <span className="font-semibold text-slate-900">Fokus pembelajaran:</span> {selected.focus}
              </div>

              <ul className="mt-6 space-y-3">
                {selected.details.map((d) => (
                  <li key={d} className="flex gap-3 text-sm leading-relaxed text-slate-800">
                    <Check className="mt-0.5 shrink-0 text-emerald-600" size={17} />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-2">
                {selected.tags.map((t) => (
                  <span key={t} className="rounded-md bg-purple-100 border border-purple-200 px-3 py-1 text-xs font-mono text-purple-900 font-semibold">
                    {t}
                  </span>
                ))}
              </div>

              {selected.id === "s2-3" && (
                <div className="mt-6 rounded-2xl border border-emerald-300 bg-emerald-50 p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-emerald-700 font-mono font-bold text-xs uppercase tracking-wider mb-1">
                        <Sparkles size={14} />
                        <span>Kajian Analisis Komprehensif</span>
                      </div>
                      <h4 className="font-display text-lg font-bold text-slate-900">
                        Tersedia 6 Subhalaman Analisis Praktik Mengajar Mandiri
                      </h4>
                      <p className="text-xs text-slate-700 mt-1 leading-relaxed font-light">
                        Telaah produk modul ajar, materi Python, media interaktif, rekaman video KBM, kegiatan nonmengajar, dan rubrik asesmen secara rinci.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setSelected(null);
                        navigateToView("praktik-mandiri");
                      }}
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition shrink-0 cursor-pointer"
                    >
                      <span>Buka 6 Analisis</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              )}

              {selected.link && (
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6">
                  <div>
                    <p className="text-xs font-mono font-bold uppercase tracking-wider text-purple-800">Artefak &amp; Modul Mata Kuliah</p>
                    <p className="mt-0.5 text-xs text-slate-600">Buka dokumen, tugas, atau repositori modul ini di Google Drive</p>
                  </div>
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#ba83ca] via-[#79b3f4] to-[#41dfff] hover:brightness-105 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-900 shadow-sm transition duration-200 active:scale-95"
                  >
                    <span>Buka Link Mata Kuliah</span>
                    <ExternalLink size={15} />
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL: DETAIL GALERI FOTO / VIDEO */}
      <AnimatePresence>
        {selectedGallery && (
          <motion.div
            className="fixed inset-0 z-[75] grid place-items-center bg-black/60 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) setSelectedGallery(null);
            }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 10, opacity: 0 }}
              className="studio-card max-h-[92vh] w-full max-w-3xl overflow-auto rounded-3xl border border-white/90 p-6 sm:p-8 shadow-2xl bg-white text-slate-900"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <div className="flex items-center gap-2 mb-2 font-mono">
                    <span className="rounded-md bg-purple-100 px-2.5 py-0.5 text-xs font-bold text-purple-900 border border-purple-200">
                      {selectedGallery.category}
                    </span>
                    <span className="text-xs text-slate-600 font-semibold">{selectedGallery.semester}</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">{selectedGallery.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedGallery(null)}
                  className="rounded-xl border border-slate-200 p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer"
                  aria-label="Tutup galeri"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Media Display */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 mb-6">
                {selectedGallery.type === "video" ? (
                  <div className="aspect-video w-full">
                    {selectedGallery.mediaUrl && selectedGallery.mediaUrl.includes("embed") ? (
                      <iframe
                        src={selectedGallery.mediaUrl}
                        title={selectedGallery.title}
                        className="size-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <div className="grid size-full place-items-center p-8 text-center bg-slate-100">
                        <div>
                          <Play size={48} className="mx-auto text-purple-700 mb-3" />
                          <p className="font-display text-xl font-bold text-slate-900">Video Pembelajaran</p>
                          <p className="text-xs text-slate-600 mt-1 max-w-sm">
                            Tautan video dapat disematkan atau dibuka melalui Google Drive.
                          </p>
                          {selectedGallery.mediaUrl && (
                            <a
                              href={selectedGallery.mediaUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#ba83ca] via-[#79b3f4] to-[#41dfff] hover:brightness-105 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-900 shadow-sm"
                            >
                              <span>Buka Video Eksternal</span>
                              <ExternalLink size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <img
                    src={selectedGallery.mediaUrl || selectedGallery.thumbnail}
                    alt={selectedGallery.title}
                    className="w-full max-h-[55vh] object-contain mx-auto"
                  />
                )}
              </div>

              {/* Meta & Descriptions */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600 border-b border-slate-200 pb-3 font-medium">
                  <span className="flex items-center gap-1.5 font-bold text-slate-800">
                    <MapPin size={14} className="text-purple-700" /> {selectedGallery.location}
                  </span>
                  <span className="flex items-center gap-1.5 font-bold text-purple-900">
                    <Sparkles size={14} className="text-purple-700" /> {selectedGallery.category}
                  </span>
                </div>

                <p className="text-base leading-relaxed text-slate-800 font-normal">{selectedGallery.description}</p>

                {/* Reflection Highlight */}
                <div className="rounded-2xl border-l-4 border-purple-500 bg-purple-50 p-4">
                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-purple-900 mb-1">
                    // Refleksi Pedagogik
                  </p>
                  <p className="text-base leading-relaxed text-slate-900 italic font-display">"{selectedGallery.reflection}"</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedGallery.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-purple-100 border border-purple-200 px-2.5 py-1 text-xs font-mono text-purple-900 font-semibold"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL: GANTI FOTO PROFIL / CARA MENGGANTI */}
      <AnimatePresence>
        {showPhotoModal && (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-black/60 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) setShowPhotoModal(false);
            }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 10, opacity: 0 }}
              className="studio-card w-full max-w-lg rounded-3xl border border-white/90 p-6 sm:p-7 shadow-2xl bg-white text-slate-900"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-xl bg-purple-100 text-purple-800 border border-purple-200">
                    <Camera size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-slate-900">Atur Foto Profil</h3>
                    <p className="text-xs text-slate-600">Pilih metode termudah untuk memasang foto Anda</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowPhotoModal(false)}
                  className="rounded-xl border border-slate-200 p-1.5 text-slate-500 hover:text-slate-900 cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Instructions */}
              <div className="space-y-4 text-sm text-slate-700">
                <div className="rounded-2xl border border-emerald-300 bg-emerald-50 p-4">
                  <p className="font-bold text-emerald-800 flex items-center gap-1.5 mb-1 text-xs font-mono uppercase tracking-wider">
                    <CheckCircle2 size={16} /> Cara 1: Taruh File Foto Lokal (Rekomendasi)
                  </p>
                  <p className="text-xs leading-relaxed text-slate-600">
                    Cukup salin file foto Anda dan beri nama{" "}
                    <code className="rounded bg-white px-1.5 py-0.5 text-purple-800 font-mono border border-slate-200 font-bold">
                      profile.jpg
                    </code>{" "}
                    lalu letakkan di folder{" "}
                    <code className="rounded bg-white px-1.5 py-0.5 text-purple-800 font-mono border border-slate-200 font-bold">
                      public/
                    </code>{" "}
                    pada project ini. Website akan otomatis memuat foto tersebut.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-bold text-slate-900 flex items-center gap-1.5 mb-2 text-xs font-mono uppercase tracking-wider">
                    <Info size={16} className="text-purple-700" /> Cara 2: Tempel Tautan Gambar Langsung (URL)
                  </p>
                  <p className="text-xs text-slate-600 mb-2">
                    Anda juga dapat memasukkan tautan gambar online (Google Drive direct link, Imgur, GitHub, dsb.):
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      value={tempPhotoUrl}
                      onChange={(e) => setTempPhotoUrl(e.target.value)}
                      placeholder="https://example.com/foto-anda.jpg"
                      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 outline-none focus:border-purple-600"
                    />
                    <button
                      onClick={() => handleSavePhotoUrl(tempPhotoUrl)}
                      className="shrink-0 rounded-xl bg-gradient-to-r from-[#ba83ca] to-[#79b3f4] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition cursor-pointer shadow-2xs"
                    >
                      Terapkan
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => {
                      localStorage.removeItem("resa_profile_pic");
                      setProfileImage("/profile.jpg");
                      setShowPhotoModal(false);
                    }}
                    className="text-xs text-slate-600 hover:text-slate-950 flex items-center gap-1.5 cursor-pointer font-mono font-medium"
                  >
                    <RefreshCw size={12} />
                    <span>Reset ke default</span>
                  </button>
                  <button
                    onClick={() => setShowPhotoModal(false)}
                    className="rounded-xl border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-800 hover:bg-slate-200 transition cursor-pointer"
                  >
                    Selesai
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TOAST SUKSES PESAN */}
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-[80] max-w-sm rounded-2xl border border-emerald-300 bg-white px-5 py-4 shadow-2xl text-slate-900"
          >
            <div className="flex items-start gap-3">
              <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-display text-lg font-bold text-slate-900">Pesan siap dikirim ✓</p>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed font-light">
                  Formulir divalidasi dengan baik. Hubungkan ke layanan email (misal Formspree atau EmailJS) untuk pengiriman riil.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-3 text-xs font-mono font-bold text-purple-700 hover:underline uppercase tracking-wider cursor-pointer"
                >
                  Tutup Notifikasi
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
