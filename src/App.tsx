import { FormEvent, useMemo, useState, useEffect } from "react";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowUpRight, Check, ChevronRight, Code2, ExternalLink,
  GraduationCap, Layers3, Mail, Menu, Send, Sparkles, X,
  Camera, Compass, Target, BookOpen, Heart, Award, Play,
  Maximize2, User, MapPin, Calendar, CheckCircle2, Film,
  ChevronLeft, RefreshCw, Info
} from "lucide-react";

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

type GalleryCategory = "Semua" | "Praktik PPL" | "Projek Kepemimpinan" | "Gelar Karya & Seminar" | "Video Pembelajaran" | "Semester I" | "Semester II";

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
    date: "Februari 2025",
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
    date: "Februari 2025",
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
    title: "Gelar Karya P5: Stand Kewirausahaan Kreatif Peserta Didik",
    date: "Februari 2025",
    semester: "Semester II",
    location: "Halaman Kampus SMAN 3 Yogyakarta",
    thumbnail: "/dokumentasi/semester2/ds25.jpeg",
    mediaUrl: "/dokumentasi/semester2/ds25.jpeg",
    description: "Pendampingan dan apresiasi pada festival bazar kewirausahaan Projek Penguatan Profil Pelajar Pancasila (P5) karya kolaboratif siswa.",
    reflection: "Projek P5 melatih kepemimpinan murid (student agency), kreativitas ekonomi, dan kerja sama tim dalam menghasilkan produk nyata.",
    tags: ["Gelar Karya P5", "Kewirausahaan", "Profil Pelajar Pancasila"]
  },
  {
    id: "ds26",
    category: "Budaya Sekolah",
    type: "photo",
    title: "Jalan Sehat & Senam Bugar Bersama Komunitas Padmanaba",
    date: "Maret 2025",
    semester: "Semester II",
    location: "Kawasan SMAN 3 Yogyakarta",
    thumbnail: "/dokumentasi/semester2/ds26.jpeg",
    mediaUrl: "/dokumentasi/semester2/ds26.jpeg",
    description: "Mengikuti rangkaian kegiatan kebugaran jasmani bersama kepala sekolah, dewan guru, karyawan, dan seluruh peserta didik SMAN 3 Yogyakarta.",
    reflection: "Keterlibatan guru dalam agenda non-akademik mempererat rasa kekeluargaan dan menciptakan kedekatan emosional yang melampaui batas ruang kelas.",
    tags: ["Jalan Sehat", "Kebugaran", "Komunitas Sekolah", "Padmanaba"]
  },

  // VIDEO PEMBELAJARAN
  {
    id: "vid-1",
    category: "Video Pembelajaran",
    type: "video",
    title: "Video Praktik Pembelajaran Terbimbing (PPL I) - Lab Informatika",
    date: "November 2026",
    semester: "Semester I",
    location: "Laboratorium Komputer SMAN 3 Yogyakarta",
    thumbnail: "/dokumentasi/semester1/ds6.jpg",
    mediaUrl: "/dokumentasi/semester1/videods1.mp4",
    driveLink: "https://drive.google.com/file/d/1Kk6vlD7RvTH29VevfUQdy5fWjbOkSJwh/view?usp=sharing",
    description: "Rekaman video pelaksanaan praktik mengajar terbimbing di laboratorium komputer SMAN 3 Yogyakarta. Mendemonstrasikan apersepsi kontekstual materi IoT, demonstrasi simulasi, pendampingan kelompok, dan asesmen formatif interaktif.",
    reflection: "Melalui rekaman video ini, saya dapat menganalisis ketepatan manajemen waktu, variasi intonasi suara, distribusi perhatian kepada seluruh kelompok siswa, dan efektivitas penggunaan media presentasi.",
    tags: ["Video PPL 1", "Microteaching", "Lab Informatika", "Refleksi Guru"]
  },
  {
    id: "vid-2",
    category: "Video Pembelajaran",
    type: "video",
    title: "Video Praktik Pembelajaran Mandiri & Diferensiasi (PPL II)",
    date: "Februari 2025",
    semester: "Semester II",
    location: "Laboratorium Komputer SMAN 3 Yogyakarta",
    thumbnail: "/dokumentasi/semester2/ds22.jpeg",
    mediaUrl: "/dokumentasi/semester2/videods2.mp4",
    driveLink: "https://drive.google.com/file/d/1ZJgBLvhTwkjyUKV8pE3dsDe7Qzt40GWv/view?usp=sharing",
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

  // State Galeri
  const [galleryCategory, setGalleryCategory] = useState<GalleryCategory>("Semua");
  const [selectedGallery, setSelectedGallery] = useState<GalleryItem | null>(null);

  // State About Tabs
  const [aboutTab, setAboutTab] = useState<"profil" | "visi-misi" | "nilai">("profil");

  // State Foto Profil (Default ke Profil.png)
  const [profileImage, setProfileImage] = useState<string>(() => {
    const saved = localStorage.getItem("resa_profile_pic");
    if (saved && saved !== "/profile.jpg") return saved;
    return "/Profil.png";
  });
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [tempPhotoUrl, setTempPhotoUrl] = useState("");

  const [sent, setSent] = useState(false);
  const [formError, setFormError] = useState("");

  const visibleProjects = useMemo(
    () => semester === "All" ? projects : projects.filter(p => p.semester === semester),
    [semester]
  );

  const categoryCounts = useMemo(() => {
    return {
      "Semua": galleryItems.length,
      "Semester I": galleryItems.filter(g => g.semester === "Semester I").length,
      "Semester II": galleryItems.filter(g => g.semester === "Semester II").length,
      "Praktik Mengajar": galleryItems.filter(g => g.category === "Praktik Mengajar").length,
      "Budaya Sekolah": galleryItems.filter(g => g.category === "Budaya Sekolah").length,
      "Bimbingan & Diskusi": galleryItems.filter(g => g.category === "Bimbingan & Diskusi").length,
      "Video Pembelajaran": galleryItems.filter(g => g.type === "video" || g.category === "Video Pembelajaran").length,
    };
  }, []);

  const visibleGallery = useMemo(() => {
    if (galleryCategory === "Semua") return galleryItems;
    if (galleryCategory === "Semester I") return galleryItems.filter(g => g.semester === "Semester I");
    if (galleryCategory === "Semester II") return galleryItems.filter(g => g.semester === "Semester II");
    if (galleryCategory === "Video Pembelajaran") return galleryItems.filter(g => g.type === "video" || g.category === "Video Pembelajaran");
    return galleryItems.filter(g => g.category === galleryCategory);
  }, [galleryCategory]);

  const currentGalleryIndex = useMemo(
    () => visibleGallery.findIndex(item => item.id === selectedGallery?.id),
    [visibleGallery, selectedGallery]
  );

  const handlePrevGallery = () => {
    if (currentGalleryIndex > 0) {
      setSelectedGallery(visibleGallery[currentGalleryIndex - 1]);
    }
  };

  const handleNextGallery = () => {
    if (currentGalleryIndex >= 0 && currentGalleryIndex < visibleGallery.length - 1) {
      setSelectedGallery(visibleGallery[currentGalleryIndex + 1]);
    }
  };

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
    const target = url.trim() || "/Profil.png";
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
    <div className="min-h-screen overflow-x-hidden bg-zinc-950 text-zinc-100 selection:bg-indigo-500/30 selection:text-white">
      {/* Scroll indicator */}
      <motion.div className="fixed left-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" style={{ scaleX: progress, width: "100%" }} />

      {/* Navigation Bar */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 shadow-2xl shadow-black/30 border border-white/10">
          <a href="#home" onClick={closeMenu} className="flex items-center gap-3 group" aria-label="Resa Martyaningsih home">
            <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-tr from-indigo-500 to-fuchsia-500 text-sm font-bold text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition">RM</span>
            <div className="hidden sm:block text-left">
              <span className="block font-display text-sm font-semibold text-white leading-tight">Resa Martyaningsih</span>
              <span className="block text-[11px] text-zinc-400 leading-tight">PPG Informatika UNY</span>
            </div>
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium text-zinc-400 md:flex">
            {[
              { label: "About", href: "#about" },
              { label: "Projects", href: "#projects" },
              { label: "Skills", href: "#skills" },
              { label: "Galeri & Rekap", href: "#gallery" },
              { label: "Contact", href: "#contact" }
            ].map(item => (
              <a key={item.label} className="transition duration-200 hover:text-white" href={item.href}>{item.label}</a>
            ))}
          </div>

          <a href="#contact" className="hidden rounded-xl bg-white px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-zinc-200 md:block">Let's connect</a>

          <button className="rounded-xl p-2 text-zinc-300 hover:text-white md:hidden" onClick={() => setMenuOpen(v => !v)} aria-label={menuOpen ? "Tutup menu" : "Buka menu"}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-4 md:hidden border border-white/15 shadow-2xl">
              {[
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Skills", href: "#skills" },
                { label: "Galeri & Rekap Foto/Video", href: "#gallery" },
                { label: "Contact", href: "#contact" }
              ].map(item => (
                <a key={item.label} href={item.href} onClick={closeMenu} className="block rounded-xl px-4 py-3 text-zinc-300 hover:bg-white/5 hover:text-white font-medium">{item.label}</a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32">
          <div className="grid-bg absolute inset-0 -z-20" />
          <div className="absolute left-1/2 top-0 -z-10 size-[45rem] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-3xl pointer-events-none" />
          <motion.div style={{ y }} className="absolute right-[-12rem] top-1/3 -z-10 size-[28rem] rounded-full bg-fuchsia-500/10 blur-3xl pointer-events-none" />

          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">

            {/* Left Column: Headline & Intro */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-indigo-300 backdrop-blur-md">
                <Sparkles size={15} className="text-indigo-300" />
                <span>PPG Prajabatan · Pendidikan Informatika UNY</span>
              </div>

              <h1 className="max-w-5xl font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.06] tracking-tight text-white">
                Mendidik melalui <span className="bg-gradient-to-r from-indigo-300 via-purple-200 to-fuchsia-300 bg-clip-text text-transparent">Informatika.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-400">
                Resa Martyaningsih, S.Kom. — calon guru Informatika profesional yang mengintegrasikan computational thinking, pedagogi berpusat pada murid, growth mindset dalam coding, dan refleksi berkelanjutan berbasis data.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-zinc-950 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/10">
                  <span>Explore Work</span>
                  <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a href="#gallery" className="inline-flex items-center gap-2 rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-5 py-3 font-semibold text-indigo-200 transition hover:bg-indigo-500/20 hover:border-indigo-400">
                  <Film size={17} />
                  <span>Galeri Kegiatan</span>
                </a>
                <a href="#about" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/5">
                  <span>Profil &amp; Visi</span>
                  <ChevronRight size={17} />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-zinc-400">
                <span className="flex items-center gap-2">
                  <GraduationCap size={16} className="text-indigo-400" />
                  Universitas Negeri Yogyakarta
                </span>
                <span className="flex items-center gap-2">
                  <Code2 size={16} className="text-indigo-400" />
                  Python · Computational Thinking · DUP
                </span>
              </div>
            </motion.div>

            {/* Right Column: Hero Profile Picture Frame & Showcase */}
            <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }}
              className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-fuchsia-500/15 blur-2xl pointer-events-none" />

              <div className="glass relative rounded-[2.2rem] p-6 shadow-glow border border-white/15">

                {/* Profile Photo Frame with Glowing Border */}
                <div className="relative mb-5 text-center">
                  <div className="relative mx-auto w-44 sm:w-52 group">
                    {/* Outer Ambient Glow Ring */}
                    <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-70 blur-md transition duration-500 group-hover:opacity-100" />

                    {/* Outer Multi-layered Border Frame */}
                    <div className="relative overflow-hidden rounded-[2.1rem] border-2 border-indigo-300/40 bg-zinc-900 p-1.5 shadow-2xl shadow-black/50">
                      <div className="relative aspect-square overflow-hidden rounded-[1.8rem] bg-zinc-950">
                        <img
                          src={profileImage}
                          alt="Foto Profil Resa Martyaningsih"
                          className="size-full object-cover object-top transition duration-500 group-hover:scale-105"
                          onError={(e) => {
                            if (e.currentTarget.src !== window.location.origin + "/profile-placeholder.svg") {
                              e.currentTarget.src = "Profil.png";
                            }
                          }}
                        />

                        {/* Floating Status Badge inside Photo */}
                        <div className="absolute inset-x-2 bottom-2 flex items-center justify-between rounded-xl bg-zinc-950/80 px-2.5 py-1.5 backdrop-blur-md border border-white/10 text-[11px]">
                          <div className="flex items-center gap-1.5">
                            <span className="relative flex h-2 w-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                            </span>
                            <span className="font-medium text-emerald-300">PPG Calon Guru</span>
                          </div>
                          <button
                            onClick={() => {
                              setTempPhotoUrl(profileImage === "/profile.jpg" ? "" : profileImage);
                              setShowPhotoModal(true);
                            }}
                            className="flex items-center gap-1 rounded px-1.5 py-0.5 text-zinc-300 hover:text-white hover:bg-white/10 transition"
                            title="Klik untuk mengganti tautan foto profil"
                          >
                            <Camera size={12} className="text-indigo-300" />
                            <span>Ganti</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Name and Tagline Under Photo Frame */}
                  <div className="mt-3">
                    <h2 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">Resa Martyaningsih, S.Kom.</h2>
                    <p className="text-xs font-medium text-indigo-300 mt-0.5">Guru Informatika · Fasilitator Pembelajaran</p>
                  </div>
                </div>

                {/* Focus Pillars */}
                <div className="border-t border-white/10 pt-4">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[.2em] text-zinc-400">Pedagogical Focus</p>
                    <Layers3 size={16} className="text-indigo-300" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      ["01", "Understand learners", "Profiling & kesiapan"],
                      ["02", "Design access", "DUP & diferensiasi"],
                      ["03", "Build confidence", "Growth mindset & CASEL"],
                      ["04", "Improve continuously", "Refleksi data & PTK"]
                    ].map(([n, t, d]) => (
                      <div key={n} className="rounded-xl border border-white/10 bg-black/30 p-2.5 transition hover:border-indigo-400/30">
                        <span className="font-mono text-[10px] font-bold text-indigo-300">{n}</span>
                        <p className="text-xs font-semibold text-zinc-200 leading-tight mt-0.5">{t}</p>
                        <p className="text-[10px] text-zinc-400 leading-snug mt-1">{d}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT SECTION (Profil Pribadi, Visi & Misi, Nilai Inti) */}
        <section id="about" className="px-6 py-28 border-t border-white/5">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10">
              <SectionHeading
                kicker="01 · About"
                title="Profil, Visi & Filosofi Pendidik"
                copy="Memadukan kompetensi teknis teknologi informasi dengan kepekaan pedagogik untuk menumbuhkan potensi setiap peserta didik."
              />

              {/* Navigation Tabs inside About */}
              <div className="flex items-center gap-1.5 rounded-2xl border border-white/10 bg-black/40 p-1.5 shrink-0 self-start md:self-end">
                {[
                  { id: "profil", label: "Profil Pribadi", icon: User },
                  { id: "visi-misi", label: "Visi & Misi", icon: Target },
                  { id: "nilai", label: "Filosofi Mengajar", icon: Heart }
                ].map(tab => {
                  const Icon = tab.icon;
                  const isActive = aboutTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setAboutTab(tab.id as typeof aboutTab)}
                      className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-semibold transition duration-200 ${isActive
                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                        }`}
                    >
                      <Icon size={15} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* TAB CONTENT: PROFIL PRIBADI */}
            {aboutTab === "profil" && (
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4 }}
                className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">

                {/* Left Card: Biodata & Refleksi Personal */}
                <div className="glass rounded-3xl p-6 sm:p-8 space-y-6 border border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="grid size-12 place-items-center rounded-2xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 shrink-0">
                      <User size={24} />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white">Resa Martyaningsih, S.Kom.</h3>
                      <p className="text-sm text-indigo-300">Calon Guru Profesional · Mahasiswa PPG Prajabatan Informatik</p>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
                    Saya merupakan lulusan kependidikan bidang Informatika yang berdedikasi untuk menciptakan pengalaman belajar komputasi yang menyenangkan, inklusif, dan relevan. Bagi saya, pembelajaran Informatika bukan sekadar transfer sintaks pemrograman, melainkan wahana melatih kemampuan bernalar kritis, memecahkan masalah (*problem solving*), dan membangun karakter tangguh.
                  </p>

                  <p className="text-base leading-relaxed text-zinc-400">
                    Selama menjalani perkuliahan dan PPL di PPG Prajabatan Universitas Negeri Yogyakarta, saya mendalami perancangan modul ajar berbasis <strong>Desain Universal untuk Pembelajaran (DUP)</strong>, asesmen diagnostik, serta integrasi <strong>Pembelajaran Sosial Emosional (CASEL)</strong> agar siswa tidak merasa terintimidasi oleh baris kode maupun eror logika.
                  </p>

                  {/* Biodata Quick Facts */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10 text-sm">
                    <div className="flex items-center gap-2.5 text-zinc-400">
                      <GraduationCap size={16} className="text-indigo-400 shrink-0" />
                      <span><strong>LPTK:</strong> UNY (PPG Prajabatan)</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-zinc-400">
                      <Award size={16} className="text-indigo-400 shrink-0" />
                      <span><strong>Keahlian:</strong> Informatika &amp; Pemrograman</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-zinc-400">
                      <MapPin size={16} className="text-indigo-400 shrink-0" />
                      <span><strong>Domisili:</strong> Gunungkidul, D.I. Yogyakarta, Indonesia</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-zinc-400">
                      <Mail size={16} className="text-indigo-400 shrink-0" />
                      <span className="truncate"><strong>Email:</strong> resamartyaningsih.2025@student.uny.ac.id</span>
                    </div>
                  </div>
                </div>

                {/* Right Card: Kompetensi & Minat Utama */}
                <div className="space-y-4">
                  <div className="glass rounded-3xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <BookOpen size={20} className="text-indigo-300" />
                      <h4 className="font-display text-lg font-bold text-white">Kompetensi Pedagogik Unggulan</h4>
                    </div>
                    <ul className="space-y-3 text-sm text-zinc-300">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-emerald-400 mt-1 shrink-0" />
                        <span><strong>Asesmen Diagnostik &amp; Profiling:</strong> Mengidentifikasi modalitas belajar, kesiapan logika, dan minat coding siswa sebelum memulai modul.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-emerald-400 mt-1 shrink-0" />
                        <span><strong>Desain Universal untuk Pembelajaran (DUP):</strong> Menyediakan ragam cara representasi materi (visual flowchart, starter code, studi kasus) dan opsi penugasan.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-emerald-400 mt-1 shrink-0" />
                        <span><strong>Pola Pikir Bertumbuh (Growth Mindset):</strong> Membiasakan <em>The Power of Yet</em> agar pesan error menjadi teman belajar, bukan kegagalan.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-emerald-400 mt-1 shrink-0" />
                        <span><strong>Penelitian Tindakan Kelas (PTK):</strong> Siklus terukur <em>Plan-Do-Observe-Reflect</em> untuk menyelesaikan kendala belajar siswa di kelas riil.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="glass rounded-3xl p-6 border border-white/10 bg-gradient-to-br from-indigo-950/30 to-purple-950/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300">Komitmen Pendidik</span>
                      <Sparkles size={16} className="text-indigo-300" />
                    </div>
                    <p className="text-sm italic leading-relaxed text-zinc-300">
                      "Guru bukan sekadar penyampai materi kurikulum, melainkan arsitek ekosistem belajar yang menuntun kodrat alam dan zaman anak dengan cinta kasih dan rasa aman."
                    </p>
                  </div>
                </div>

              </motion.div>
            )}

            {/* TAB CONTENT: VISI & MISI */}
            {aboutTab === "visi-misi" && (
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4 }}
                className="space-y-8">

                {/* Visi Card */}
                <div className="relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950/60 via-zinc-900/90 to-purple-950/50 p-7 sm:p-10 shadow-2xl">
                  <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                    <Compass size={180} />
                  </div>
                  <div className="relative max-w-3xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-300">
                      <Target size={14} /> Visi Pendidik Informatika
                    </div>
                    <h3 className="mt-4 font-display text-2xl sm:text-4xl font-bold leading-tight text-white">
                      "Mewujudkan pembelajaran Informatika yang transformatif, inklusif, dan humanis guna menuntun kodrat peserta didik menjadi pemecah masalah (*problem solver*) yang bernalar kritis, kreatif, berkarakter luhur, dan berdaya saing di era kecerdasan digital."
                    </h3>
                  </div>
                </div>

                {/* Misi Section */}
                <div>
                  <h4 className="font-display text-xl font-bold text-white mb-5 flex items-center gap-2">
                    <Compass size={20} className="text-indigo-400" />
                    <span>Misi Strategis &amp; Aksi Konkret Pembelajaran</span>
                  </h4>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      {
                        num: "01",
                        title: "Pembelajaran Bermakna & Computational Thinking",
                        desc: "Menyajikan konsep algoritma, pemrograman, dan literasi digital yang berakar pada konteks kehidupan nyata siswa, sehingga materi tidak dirasakan abstrak melainkan aplikatif.",
                        tag: "Kontekstual"
                      },
                      {
                        num: "02",
                        title: "Inklusivitas & Diferensiasi Melalui DUP",
                        desc: "Menerapkan prinsip Desain Universal untuk Pembelajaran agar setiap siswa—dengan keragaman kesiapan awal dan modalitas belajarnya—memiliki akses dan tantangan yang berkeadilan.",
                        tag: "Inklusif & Adaptif"
                      },
                      {
                        num: "03",
                        title: "Penguatan Karakter, Growth Mindset & CASEL",
                        desc: "Membangun ruang kelas yang aman secara sosial-emosional, di mana kesalahan sintaks (*syntax error*) dipandang sebagai peluang belajar dan melatih ketangguhan mental siswa.",
                        tag: "Sosial Emosional"
                      },
                      {
                        num: "04",
                        title: "Refleksi Berkelanjutan & Riset PTK Berbasis Data",
                        desc: "Membiasakan evaluasi diri berbasis bukti (*evidence-based teaching*) melalui Penelitian Tindakan Kelas (PTK) demi perbaikan kualitas proses pembelajaran secara berkelanjutan.",
                        tag: "Continuous Learning"
                      }
                    ].map(item => (
                      <div key={item.num} className="glass rounded-2xl p-6 border border-white/10 hover:border-indigo-400/30 transition duration-300">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-sm font-bold text-indigo-400">{item.num}</span>
                          <span className="rounded-md bg-white/5 px-2.5 py-0.5 text-xs text-zinc-400">{item.tag}</span>
                        </div>
                        <h5 className="mt-3 font-display text-lg font-bold text-white leading-snug">{item.title}</h5>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            )}

            {/* TAB CONTENT: FILOSOFI & NILAI INTI */}
            {aboutTab === "nilai" && (
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4 }}
                className="space-y-6">
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
                      desc: "Tidak ada satu metode yang cocok untuk semua siswa. Scaffolding, starter code, dan tantangan bertingkat dirancang sesuai peta kesiapan (*learning readiness*) masing-masing siswa.",
                      badge: "Diferensiasi"
                    },
                    {
                      title: "Inclusive",
                      subtitle: "Akses Belajar yang Adil",
                      desc: "Informatika untuk semua. Setiap murid berhak mengeksplorasi potensi logika komputasinya tanpa diskriminasi, didukung lingkungan kelas yang empatik dan bebas perundungan.",
                      badge: "DUP & CASEL"
                    }
                  ].map(val => (
                    <div key={val.title} className="glass rounded-3xl p-6 border border-white/10 hover:border-indigo-400/40 transition duration-300 flex flex-col justify-between">
                      <div>
                        <span className="inline-block rounded-lg bg-indigo-500/10 px-2.5 py-1 text-xs font-semibold text-indigo-300 mb-3 border border-indigo-500/20">{val.badge}</span>
                        <h4 className="font-display text-2xl font-bold text-white">{val.title}</h4>
                        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-300 mt-1">{val.subtitle}</p>
                        <p className="mt-4 text-sm leading-relaxed text-zinc-400">{val.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 text-zinc-400 text-sm sm:text-base leading-relaxed">
                  <p>
                    <strong>Fondasi Semester I</strong> membangun pemahaman tentang filosofi pendidikan Ki Hajar Dewantara, keberagaman peserta didik, prinsip asesmen, PPL Terbimbing, serta pembudayaan Growth Mindset dalam mengatasi coding anxiety.
                  </p>
                  <p className="mt-3">
                    <strong>Semester II</strong> memperluas wawasan melalui integrasi Pembelajaran Sosial Emosional, asesmen multimoda lanjut, PPL Mandiri, Projek Kepemimpinan komunitas sekolah, serta Pengembangan Keprofesian Berkelanjutan melalui PTK.
                  </p>
                </div>
              </motion.div>
            )}

          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="border-y border-white/5 bg-white/[0.015] px-6 py-28">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              kicker="02 · Selected work"
              title="Projects & learning artifacts"
              copy="Kumpulan karya yang merepresentasikan perjalanan dari analisis masalah, desain pembelajaran, praktik, hingga rencana perbaikan berbasis data."
            />

            <div className="mt-10 flex flex-wrap gap-2">
              {(["All", "Semester I", "Semester II"] as const).map(c => (
                <button
                  key={c}
                  onClick={() => setSemester(c)}
                  className={`rounded-full px-4 py-2 text-sm transition font-medium ${semester === c
                    ? "bg-white text-zinc-950 font-semibold"
                    : "border border-white/10 text-zinc-400 hover:text-white"
                    }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <motion.div layout className="mt-8 grid gap-5 md:grid-cols-2">
              <AnimatePresence mode="popLayout">
                {visibleProjects.map((project) => (
                  <motion.article
                    layout
                    key={project.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: .98 }}
                    className="group glass flex flex-col justify-between rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-indigo-500/5 border border-white/10"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[.18em] text-indigo-300">{project.eyebrow}</p>
                          <h3 className="mt-3 font-display text-2xl font-semibold text-white">{project.title}</h3>
                        </div>
                        <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1 text-xs text-zinc-400">{project.semester}</span>
                      </div>
                      <p className="mt-4 leading-7 text-zinc-400">{project.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-zinc-400">{tag}</span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
                      <p className="max-w-[240px] text-sm leading-6 text-zinc-500 sm:max-w-xs">
                        <span className="text-zinc-300">Fokus:</span> {project.focus}
                      </p>
                      <div className="flex items-center gap-2 shrink-0">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-xl border border-indigo-500/40 bg-indigo-500/10 px-3.5 py-2 text-xs font-semibold text-indigo-200 transition duration-200 hover:border-indigo-400 hover:bg-indigo-600 hover:text-white hover:shadow-lg hover:shadow-indigo-500/20 active:scale-95"
                            aria-label={`Buka link artefak ${project.title}`}
                            title={`Buka tautan ${project.title}`}
                          >
                            <span>Buka Link</span>
                            <ExternalLink size={14} />
                          </a>
                        )}
                        <button
                          onClick={() => setSelected(project)}
                          className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-zinc-300 transition duration-200 hover:bg-white hover:text-zinc-950 active:scale-95"
                          aria-label={`Lihat detail ${project.title}`}
                          title="Lihat detail lengkap"
                        >
                          <span>Detail</span>
                          <ArrowUpRight size={14} />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="px-6 py-28">
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[.9fr_1.1fr]">
            <SectionHeading
              kicker="03 · Skills"
              title="Technical skills meet teaching craft."
              copy="Keahlian teknis saya menjadi lebih bermakna ketika dipakai untuk merancang pengalaman belajar yang manusiawi, terukur, dan relevan."
            />
            <div className="flex content-start flex-wrap gap-3">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * .025 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-zinc-300 transition hover:border-indigo-300/30 hover:bg-indigo-300/5 font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* NEW SECTION: GALERI & REKAP FOTO / VIDEO */}
        <section id="gallery" className="border-y border-white/5 bg-white/[0.01] px-6 py-28">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10">
              <SectionHeading
                kicker="04 · Galeri &amp; Dokumentasi"
                title="Rekap Foto, Video &amp; Aktivitas"
                copy="Dokumentasi visual pengalaman nyata selama mengikuti PPG Prajabatan Informatika: aktivitas di lab komputer, inisiatif kepemimpinan, hingga simulasi microteaching."
              />

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 shrink-0 self-start md:self-end">
                {(["Semua", "Praktik PPL", "Projek Kepemimpinan", "Gelar Karya & Seminar", "Video Pembelajaran"] as const).map(cat => (
                  <button
                    key={cat}
                    onClick={() => setGalleryCategory(cat)}
                    className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition ${galleryCategory === cat
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                      : "border border-white/10 text-zinc-400 hover:text-white hover:bg-white/5"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Gallery Grid */}
            <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {visibleGallery.map(item => (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: .95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: .95 }}
                    transition={{ duration: .3 }}
                    className="group glass flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 hover:border-indigo-400/40 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10"
                  >
                    <div>
                      {/* Media Thumbnail Container */}
                      <div
                        onClick={() => setSelectedGallery(item)}
                        className="relative aspect-video w-full overflow-hidden bg-zinc-900 cursor-pointer"
                      >
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="size-full object-cover transition duration-500 group-hover:scale-105"
                        />

                        {/* Top Overlay Badges */}
                        <div className="absolute inset-x-3 top-3 flex items-center justify-between">
                          <span className="rounded-lg bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-zinc-200 backdrop-blur-md border border-white/10">
                            {item.category}
                          </span>
                          <span className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-[11px] font-semibold backdrop-blur-md ${item.type === "video"
                            ? "bg-rose-500/80 text-white"
                            : "bg-indigo-500/80 text-white"
                            }`}>
                            {item.type === "video" ? <Play size={11} className="fill-white" /> : <Camera size={11} />}
                            <span>{item.type === "video" ? "Video" : "Foto"}</span>
                          </span>
                        </div>

                        {/* Video Play Icon Center Overlay */}
                        {item.type === "video" && (
                          <div className="absolute inset-0 grid place-items-center bg-black/30 group-hover:bg-black/10 transition">
                            <div className="grid size-12 place-items-center rounded-full bg-rose-600 text-white shadow-xl shadow-rose-600/40 group-hover:scale-110 transition duration-300">
                              <Play size={20} className="fill-white translate-x-0.5" />
                            </div>
                          </div>
                        )}

                        {/* Hover Zoom Hint */}
                        <div className="absolute inset-0 bg-indigo-950/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center pointer-events-none">
                          <span className="rounded-xl bg-black/70 px-3 py-1.5 text-xs text-white backdrop-blur-md flex items-center gap-1.5 border border-white/10">
                            <Maximize2 size={13} />
                            <span>Buka Pratinjau</span>
                          </span>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-5">
                        <div className="flex items-center gap-3 text-xs text-zinc-400 mb-2">
                          <span className="flex items-center gap-1"><Calendar size={13} className="text-indigo-400" /> {item.date}</span>
                          <span>•</span>
                          <span className="truncate">{item.location}</span>
                        </div>

                        <h4 className="font-display text-lg font-bold text-white leading-snug group-hover:text-indigo-200 transition">
                          {item.title}
                        </h4>

                        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-400 line-clamp-3">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="p-5 pt-0">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {item.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-zinc-400">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => setSelectedGallery(item)}
                        className="w-full flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] py-2.5 text-xs font-semibold text-zinc-200 transition hover:bg-white hover:text-zinc-950 active:scale-95"
                      >
                        {item.type === "video" ? (
                          <>
                            <Play size={14} className="fill-current" />
                            <span>Tonton Video</span>
                          </>
                        ) : (
                          <>
                            <Maximize2 size={14} />
                            <span>Lihat Detail Foto</span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="px-6 py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <SectionHeading
                kicker="05 · Contact"
                title="Let's build better learning experiences."
                copy="Tertarik berdiskusi tentang pembelajaran Informatika, praktik mengajar, atau kolaborasi pendidikan? Kirim pesan melalui formulir berikut."
              />
              <div className="mt-8 space-y-4 text-sm text-zinc-400">
                <p className="flex items-center gap-3">
                  <Mail size={17} className="text-indigo-400" />
                  <span>Email: <strong className="text-zinc-200">resamartyaningsih.2025@student.uny.ac.id</strong></span>
                </p>
                <p className="flex items-center gap-3">
                  <MapPin size={17} className="text-indigo-400" />
                  <span>Lokasi: <strong className="text-zinc-200">Yogyakarta, Indonesia</strong></span>
                </p>
                <p className="flex items-center gap-3">
                  <GraduationCap size={17} className="text-indigo-400" />
                  <span>Afiliasi: <strong className="text-zinc-200">Universitas Negeri Yogyakarta (PPG Prajabatan)</strong></span>
                </p>
              </div>
            </div>

            <form onSubmit={submit} noValidate className="glass rounded-3xl p-6 sm:p-8 border border-white/10">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-medium text-zinc-300">
                  Nama Lengkap
                  <input
                    name="name"
                    required
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                    placeholder="Nama Anda"
                  />
                </label>
                <label className="text-sm font-medium text-zinc-300">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                    placeholder="nama@email.com"
                  />
                </label>
              </div>
              <label className="mt-5 block text-sm font-medium text-zinc-300">
                Pesan
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                  placeholder="Ceritakan kebutuhan, ide kolaborasi, atau tanggapan Anda..."
                />
              </label>
              {formError && <p className="mt-3 text-sm text-rose-400 font-medium" role="alert">{formError}</p>}
              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-zinc-950 transition hover:bg-zinc-200 active:scale-95 shadow-lg"
              >
                <Send size={17} />
                <span>Send message</span>
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 bg-zinc-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Resa Martyaningsih, S.Kom. · Portofolio PPG Prajabatan Informatika UNY.</p>
          <p className="text-zinc-500">Reflect · Adapt · Teach · Keep Learning.</p>
        </div>
      </footer>

      {/* MODAL: DETAIL PROJECT MATA KULIAH */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[70] grid place-items-center bg-black/75 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(e) => { if (e.target === e.currentTarget) setSelected(null); }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0, scale: .98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 10, opacity: 0 }}
              className="glass max-h-[90vh] w-full max-w-2xl overflow-auto rounded-3xl p-7 border border-white/15 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[.18em] text-indigo-300">{selected.eyebrow}</p>
                  <h3 className="mt-2 font-display text-3xl font-semibold text-white">{selected.title}</h3>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="rounded-xl border border-white/10 p-2 text-zinc-400 hover:text-white transition"
                  aria-label="Tutup detail"
                >
                  <X size={18} />
                </button>
              </div>

              <p className="mt-5 leading-relaxed text-zinc-300">{selected.description}</p>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-7 text-zinc-400">
                <span className="font-semibold text-zinc-200">Fokus pembelajaran:</span> {selected.focus}
              </div>

              <ul className="mt-6 space-y-3">
                {selected.details.map(d => (
                  <li key={d} className="flex gap-3 text-sm leading-relaxed text-zinc-300">
                    <Check className="mt-0.5 shrink-0 text-indigo-400" size={17} />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-2">
                {selected.tags.map(t => (
                  <span key={t} className="rounded-lg bg-white/5 px-3 py-1.5 text-xs text-zinc-400">{t}</span>
                ))}
              </div>

              {selected.link && (
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-indigo-300">Artefak &amp; Modul Mata Kuliah</p>
                    <p className="mt-0.5 text-xs text-zinc-400">Buka dokumen, tugas, atau repositori modul ini di Google Drive</p>
                  </div>
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition duration-200 hover:bg-indigo-500 hover:-translate-y-0.5 active:scale-95"
                  >
                    <span>Buka Link Mata Kuliah</span>
                    <ExternalLink size={16} />
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
            className="fixed inset-0 z-[75] grid place-items-center bg-black/80 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(e) => { if (e.target === e.currentTarget) setSelectedGallery(null); }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0, scale: .97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 10, opacity: 0 }}
              className="glass max-h-[92vh] w-full max-w-3xl overflow-auto rounded-3xl border border-white/15 p-6 sm:p-8 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="rounded-lg bg-indigo-500/20 px-2.5 py-0.5 text-xs font-semibold text-indigo-300 border border-indigo-500/30">
                      {selectedGallery.category}
                    </span>
                    <span className="text-xs text-zinc-400">{selectedGallery.semester}</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">{selectedGallery.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedGallery(null)}
                  className="rounded-xl border border-white/10 p-2 text-zinc-400 hover:text-white transition"
                  aria-label="Tutup galeri"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Media Display */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 mb-6">
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
                      <div className="grid size-full place-items-center p-8 text-center bg-zinc-900">
                        <div>
                          <Play size={48} className="mx-auto text-rose-500 mb-3" />
                          <p className="font-semibold text-white">Video Pembelajaran</p>
                          <p className="text-xs text-zinc-400 mt-1 max-w-sm">
                            Tautan video dapat disematkan (embed YouTube atau Google Drive).
                          </p>
                          {selectedGallery.mediaUrl && (
                            <a
                              href={selectedGallery.mediaUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-rose-600 px-4 py-2 text-xs font-semibold text-white"
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
                <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 border-b border-white/10 pb-3">
                  <span className="flex items-center gap-1.5"><Calendar size={14} className="text-indigo-400" /> {selectedGallery.date}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={14} className="text-indigo-400" /> {selectedGallery.location}</span>
                </div>

                <p className="text-base leading-relaxed text-zinc-300">{selectedGallery.description}</p>

                {/* Reflection Highlight */}
                <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/10 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-indigo-300 mb-1">Refleksi Pedagogik</p>
                  <p className="text-sm leading-relaxed text-zinc-300 italic">"{selectedGallery.reflection}"</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedGallery.tags.map(t => (
                    <span key={t} className="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-zinc-400">#{t}</span>
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
            className="fixed inset-0 z-[80] grid place-items-center bg-black/80 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(e) => { if (e.target === e.currentTarget) setShowPhotoModal(false); }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0, scale: .98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 10, opacity: 0 }}
              className="glass w-full max-w-lg rounded-3xl border border-white/15 p-6 sm:p-7 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    <Camera size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">Atur Foto Profil</h3>
                    <p className="text-xs text-zinc-400">Pilih metode termudah untuk memasang foto Anda</p>
                  </div>
                </div>
                <button onClick={() => setShowPhotoModal(false)} className="rounded-xl border border-white/10 p-1.5 text-zinc-400 hover:text-white">
                  <X size={18} />
                </button>
              </div>

              {/* Instructions */}
              <div className="space-y-4 text-sm text-zinc-300">
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-4">
                  <p className="font-semibold text-emerald-300 flex items-center gap-1.5 mb-1">
                    <CheckCircle2 size={16} /> Cara 1: Taruh File Foto Lokal (Rekomendasi)
                  </p>
                  <p className="text-xs leading-relaxed text-zinc-300">
                    Cukup salin file foto Anda dan beri nama <code className="rounded bg-black/50 px-1.5 py-0.5 text-emerald-300 font-mono">profile.jpg</code> lalu letakkan di folder <code className="rounded bg-black/50 px-1.5 py-0.5 text-emerald-300 font-mono">public/</code> pada project ini. Website akan otomatis memuat foto tersebut.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="font-semibold text-white flex items-center gap-1.5 mb-2">
                    <Info size={16} className="text-indigo-400" /> Cara 2: Tempel Tautan Gambar Langsung (URL)
                  </p>
                  <p className="text-xs text-zinc-400 mb-2">
                    Anda juga dapat memasukkan tautan gambar online (Google Drive direct link, Imgur, GitHub, dsb.):
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      value={tempPhotoUrl}
                      onChange={(e) => setTempPhotoUrl(e.target.value)}
                      placeholder="https://example.com/foto-anda.jpg"
                      className="w-full rounded-xl border border-white/10 bg-zinc-900 px-3 py-2 text-xs text-white outline-none focus:border-indigo-400"
                    />
                    <button
                      onClick={() => handleSavePhotoUrl(tempPhotoUrl)}
                      className="shrink-0 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-500 transition"
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
                    className="text-xs text-zinc-400 hover:text-white flex items-center gap-1.5"
                  >
                    <RefreshCw size={12} />
                    <span>Reset ke default</span>
                  </button>
                  <button
                    onClick={() => setShowPhotoModal(false)}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white hover:bg-white/10 transition"
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
            className="fixed bottom-6 right-6 z-[80] max-w-sm rounded-2xl border border-emerald-300/30 bg-zinc-900 px-5 py-4 shadow-2xl"
          >
            <div className="flex items-start gap-3">
              <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Pesan siap dikirim ✓</p>
                <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                  Formulir divalidasi dengan baik. Hubungkan ke layanan email (misal Formspree atau EmailJS) untuk pengiriman riil.
                </p>
                <button onClick={() => setSent(false)} className="mt-3 text-xs font-semibold text-indigo-300 hover:text-indigo-200">
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
