export interface SubpageMeta {
  id: string;
  hash: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  iconName: "FileText" | "BookOpen" | "Laptop" | "Video" | "Users" | "CheckSquare";
  badge: string;
}

export const SUBPAGES_LIST: SubpageMeta[] = [
  {
    id: "analisis-rancangan",
    hash: "#analisis-rancangan",
    number: "01",
    title: "Analisis Produk Rancangan/Perencanaan Pembelajaran untuk Praktik Mengajar Mandiri",
    shortTitle: "Perencanaan Pembelajaran",
    description: "Analisis mendalam mengenai struktur modul ajar, kesesuaian dengan kebutuhan peserta didik kelas X, integrasi pendekatan DUP (Desain Universal untuk Pembelajaran), dan keterkaitan asesmen dengan tujuan pembelajaran.",
    iconName: "FileText",
    badge: "Modul Ajar & DUP"
  },
  {
    id: "analisis-materi",
    hash: "#analisis-materi",
    number: "02",
    title: "Analisis Materi Pembelajaran yang Sudah Disusun dan Diterapkan dalam Praktik Mengajar Mandiri",
    shortTitle: "Materi Pembelajaran",
    description: "Telaah konseptual dan pedagogis materi dasar pemrograman Python, ketepatan urutan penyajian logika algoritma, scaffolding berjenjang dari flowchart ke kode, serta respons pemahaman siswa.",
    iconName: "BookOpen",
    badge: "Python & Algoritma"
  },
  {
    id: "analisis-media",
    hash: "#analisis-media",
    number: "03",
    title: "Analisis Media Pembelajaran yang Dipergunakan dalam Praktik Mengajar Mandiri",
    shortTitle: "Media Pembelajaran",
    description: "Evaluasi efektivitas media presentasi interaktif Canva, IDE pemrograman di laboratorium komputer, LKPD digital, dan kuis gamifikasi dalam memfasilitasi interaksi aktif dan pemahaman siswa.",
    iconName: "Laptop",
    badge: "Digital & Gamifikasi"
  },
  {
    id: "analisis-video",
    hash: "#analisis-video",
    number: "04",
    title: "Analisis Video Pelaksanaan Praktik Mengajar Mandiri",
    shortTitle: "Video Praktik Mengajar",
    description: "Kajian rekaman video pelaksanaan KBM di laboratorium komputer SMAN 3 Yogyakarta, mencakup fase pembukaan, inti KBM, interaksi guru-siswa, personal scaffolding, hingga fase penutup.",
    iconName: "Video",
    badge: "Observasi Rekaman KBM"
  },
  {
    id: "analisis-nonmengajar",
    hash: "#analisis-nonmengajar",
    number: "05",
    title: "Analisis Kegiatan Nonmengajar",
    shortTitle: "Kegiatan Nonmengajar",
    description: "Dokumentasi dan refleksi partisipasi dalam budaya sekolah: pembiasaan 5S di gerbang, pendampingan Gelar Karya P5 Kewirausahaan, senam bugar Padmanaba, dan kolaborasi keprofesian.",
    iconName: "Users",
    badge: "Budaya Sekolah & P5"
  },
  {
    id: "analisis-penilaian",
    hash: "#analisis-penilaian",
    number: "06",
    title: "Instrumen Penilaian yang Dirancang Beserta Analisisnya",
    shortTitle: "Instrumen Penilaian",
    description: "Rancangan asesmen diagnostik, observasi proses praktikum, rubrik analitik 4 jenjang pemahaman, kuis formatif, serta analisis kejelasan indikator dan kesesuaian dengan tujuan pembelajaran.",
    iconName: "CheckSquare",
    badge: "Asesmen & Rubrik"
  }
];

export const PRAKTIK_MANDIRI_CONTEXT = {
  mataPelajaran: "Informatika",
  faseKelas: "Fase E / Kelas X",
  sekolahMitra: "SMA Negeri 3 Yogyakarta (Padmanaba)",
  program: "PPG Calon Guru (Prajabatan) Gelombang 1",
  lptk: "Universitas Negeri Yogyakarta (UNY)",
  lingkupPraktik: "Praktik Pengalaman Lapangan (PPL II) Mandiri",
  topikMateri: "Algoritma dan Pemrograman (Dasar-dasar Pemrograman Berorientasi Logika Python)",
  tempat: "Laboratorium Komputer SMAN 3 Yogyakarta",
  driveFolderPPL: "https://drive.google.com/drive/folders/1UcSDFEWR4IspIDIav12rId4XmA8UELky?usp=sharing",
  driveVideoPPL2: "https://drive.google.com/file/d/1NRh5Bbh-PnXsLHqT3Vt96xhnGNipoAuF/view?usp=sharing",
  driveMasterArtefak: "https://drive.google.com/drive/folders/1A1VAY5ZsSI7KOn3zEArSRGyPbVw3SfW5?usp=sharing",
  driveFotoDokumentasi: "https://drive.google.com/drive/folders/1k5XueqpwL1ND6LBQ3lQMEU6LTsi2wjZH?usp=sharing",
  jurnalHarianLink: "https://docs.google.com/document/d/1Eb4ajPsX3ADq_q53zvMD0x4GR61zzo9p/edit?usp=sharing&ouid=109235945935102899444&rtpof=true&sd=true",
  jurnalHarianPreview: "https://docs.google.com/document/d/1Eb4ajPsX3ADq_q53zvMD0x4GR61zzo9p/preview"
};

// DATA SUBHALAMAN 1: PERENCANAAN PEMBELAJARAN
export const rancanganPembelajaranData = {
  identitas: {
    mataPelajaran: "Informatika",
    jenjangKelas: "SMA Kelas X (Fase E)",
    sekolah: "SMA Negeri 3 Yogyakarta",
    alokasiWaktu: "2 JP × 45 Menit (Siklus Praktik Mengajar Mandiri PPL II)",
    elemenCP: "Berpikir Komputasional (Computational Thinking) & Teknologi Informasi dan Komunikasi (TIK)",
    materiUtama: "Computational Thinking (CT) dan TIK (Spreadsheet, Google Docs, & Mail Merge)",
    capaianPembelajaran: "Peserta didik mampu menerapkan strategi berpikir komputasional (Computational Thinking) dalam pemecahan persoalan logika, serta memanfaatkan perkakas TIK secara integratif (aplikasi pengolah kata Google Docs, pengolah lembar kerja Spreadsheet, dan pembuatan surat massal Mail Merge) untuk efisiensi pengolahan dan penyajian informasi digital."
  },
  // Materi Spesifik 1: Computational Thinking (Canva & Google Presentation)
  materiComputationalThinking: [
    {
      judul: "Media Ajar Berpikir Komputasional (Canva Interaktif)",
      format: "Canva Presentation Link",
      link: "https://canva.link/lr5uq0urpj8byab",
      keterangan: "Media ajar visual interaktif konsep 4 pilar Computational Thinking: Dekomposisi, Pengenalan Pola, Abstraksi, dan Perancangan Algoritma.",
      badge: "Canva Interaktif"
    },
    {
      judul: "Slide Paparan Pembelajaran Computational Thinking",
      format: "Google Slides / Presentation",
      link: "https://docs.google.com/presentation/d/1QvwNmU_kC1BkJ4-iziEjsYeObYPWdLuV/edit?usp=sharing&ouid=109235945935102899444&rtpof=true&sd=true",
      keterangan: "Bahan tayang presentasi kelas mencakup apersepsi, latihan pemecahan masalah logika, dan studi kasus komputasional Fase E.",
      badge: "Google Presentation"
    }
  ],
  // Materi Spesifik 2: Materi TIK (Spreadsheet, Google Docs, & Mail Merge)
  materiTIK: [
    {
      no: 1,
      judul: "Materi TIK 1 — Pengenalan Lingkungan Google Docs & Format Dokumen",
      format: "Google Presentation",
      link: "https://docs.google.com/presentation/d/1eq89Ko64QUtmj3VYKqXffE9nKtFjH4ke/edit?usp=sharing&ouid=109235945935102899444&rtpof=true&sd=true",
      keterangan: "Pembahasan fitur pengolah kata awan, kolaborasi daring, struktur dokumen standar, dan penataan gaya paragraf.",
      topik: "Google Docs & Kolaborasi Digital"
    },
    {
      no: 2,
      judul: "Materi TIK 2 — Dasar Spreadsheet: Formula, Fungsi & Kalkulasi Data",
      format: "Google Presentation",
      link: "https://docs.google.com/presentation/d/1bcAVyDJ1_v-ugjgK-vJW0BRqgZWrut3t/edit?usp=sharing&ouid=109235945935102899444&rtpof=true&sd=true",
      keterangan: "Teknik pengolahan angka tabular, penggunaan formula dasar, fungsi kalkulasi logika, dan pembuatan grafik representasi data.",
      topik: "Spreadsheet & Analisis Data"
    },
    {
      no: 3,
      judul: "Materi TIK 3 — Integrasi Data Dokumen: Pembuatan Mail Merge",
      format: "Google Presentation",
      link: "https://docs.google.com/presentation/d/1r9Th-yrYX06IZC5UDKUAkhNB0uhm71bN/edit?usp=sharing&ouid=109235945935102899444&rtpof=true&sd=true",
      keterangan: "Panduan teknis langkah demi langkah menghubungkan basis data spreadsheet ke templat surat/sertifikat pada Google Docs secara otomatis.",
      topik: "Mail Merge Otomasi Dokumen"
    },
    {
      no: 4,
      judul: "Materi TIK 4 — Praktik Terpadu, Studi Kasus & Evaluasi Integrasi TIK",
      format: "Google Presentation",
      link: "https://docs.google.com/presentation/d/1gxxktkD6L6qjcT7HW4DUCoBbtJOq0yEl/edit?usp=sharing&ouid=109235945935102899444&rtpof=true&sd=true",
      keterangan: "Latihan pemecahan kasus terpadu di laboratorium komputer, verifikasi hasil Mail Merge, dan evaluasi ketercapaian kompetensi TIK.",
      topik: "Praktikum Laboratorium Terpadu"
    }
  ],
  dokumenList: [
    {
      nama: "Modul Ajar Informatika Berdiferensiasi (PPL Mandiri)",
      format: "PDF / Dokumen Perencanaan",
      status: "Tersedia di Google Drive",
      link: PRAKTIK_MANDIRI_CONTEXT.driveFolderPPL,
      keterangan: "Memuat identitas, profil pelajar pancasila, tujuan pembelajaran, asesmen diagnostik, langkah pembelajaran berdiferensiasi, serta lembar kerja peserta didik."
    },
    {
      nama: "Lembar Kerja Peserta Didik (LKPD) Berjenjang",
      format: "Digital Worksheet / PDF",
      status: "Tersedia di Google Drive",
      link: PRAKTIK_MANDIRI_CONTEXT.driveFolderPPL,
      keterangan: "Disediakan bertingkat: tantangan logika bertahap (starter code, guided challenge, open-ended problem solving)."
    },
    {
      nama: "Bahan Ajar & Slide Panduan Praktikum",
      format: "Slide Presentasi Interaktif",
      status: "Tersedia di Google Drive",
      link: PRAKTIK_MANDIRI_CONTEXT.driveFolderPPL,
      keterangan: "Dilengkapi infografis konsep logika, analogi dunia nyata, contoh sintaks, dan studi kasus penanganan error."
    },
    {
      nama: "Instrumen & Rubrik Asesmen Lengkap",
      format: "Rubrik Analitik 4 Skala",
      status: "Tersedia di Google Drive",
      link: PRAKTIK_MANDIRI_CONTEXT.driveFolderPPL,
      keterangan: "Memuat kisi-kisi, indikator pencapaian kompetensi, lembar observasi partisipasi, kuis diagnostik, dan rubrik evaluasi hasil kode."
    },
    {
      nama: "Jurnal Harian Praktik Pengalaman Lapangan (PPL)",
      format: "Google Docs / Logbook Harian",
      status: "Dokumen Resmi Terverifikasi",
      link: PRAKTIK_MANDIRI_CONTEXT.jurnalHarianLink,
      keterangan: "Logbook pencatatan harian seluruh aktivitas KBM terbimbing & mandiri, pembiasaan budaya sekolah, tugas nonmengajar, bimbingan berkala, dan refleksi pedagogik."
    }
  ],
  tujuanDanKegiatan: [
    {
      tujuan: "Peserta didik mampu menganalisis alur logika pemrograman (variabel, struktur kontrol, perulangan) untuk memecahkan persoalan komputasional terstruktur.",
      kegiatanTerkait: "Apersepsi berbasis studi kasus nyata, visualisasi alur komputasi melalui flowchart, dan analisis kode bersama (live code walkthrough)."
    },
    {
      tujuan: "Peserta didik mampu mengimplementasikan kode program Python yang bersih, bebas sintaks error, serta terstruktur rapi pada lingkungan IDE lab.",
      kegiatanTerkait: "Praktik langsung di komputer laboratorium dengan bantuan starter code, live coding interaktif, dan penanganan bug secara bertahap."
    },
    {
      tujuan: "Peserta didik mampu menumbuhkan sikap kolaboratif, regulasi emosi ketika menemukan bug program, serta kebiasaan peer debugging.",
      kegiatanTerkait: "Aktivitas peer review, saling menelusuri bug teman dengan komunikasi empatik, dan refleksi akhir kelas tentang The Power of Yet."
    }
  ],
  analisisKebutuhanSiswa: {
    profilAwal: "Berdasarkan pemetaan diagnostik awal di SMAN 3 Yogyakarta, peserta didik memiliki keberagaman latar belakang: sebagian siswa sudah familiar dengan logika pemrograman, sementara sebagian lainnya belum pernah menulis kode secara tekstual.",
    akomodasiDUP: "Prinsip Desain Universal untuk Pembelajaran (DUP) diintegrasikan dengan menyediakan multimoda representasi (alur visual diagram alir, analogi naratif, teks program, dan demonstrasi interaktif), moda aksi & ekspresi bertingkat (menulis kode utuh atau melengkapi rumpang starter code), serta moda keterlibatan (gamifikasi dan proyek nyata)."
  },
  analisisLangkahPembelajaran: {
    model: "Problem-Based Learning (PBL) dipadukan dengan pendekatan Scaffolding Bertahap",
    pendekatan: "Student-Centered Learning, Desain Universal untuk Pembelajaran (DUP), dan Integrasi Kompetensi Sosial Emosional (CASEL)",
    tahapan: [
      {
        tahap: "Fase 1: Orientasi Siswa pada Masalah (15 Menit)",
        detail: "Penyambutan ramah, presensi, apersepsi menghubungkan algoritma dengan rutinitas harian, pertanyaan pemantik, serta demonstrasi singkat persoalan nyata yang diselesaikan dengan program komputer."
      },
      {
        tahap: "Fase 2: Mengorganisasikan Siswa untuk Belajar (10 Menit)",
        detail: "Penjelasan tujuan pembelajaran, pembagian kelompok kerja yang heterogen berdasarkan data diagnostik, pembagian tautan LKPD dan starter code pada komputer masing-masing."
      },
      {
        tahap: "Fase 3: Membimbing Penyelidikan Mandiri & Kelompok (35 Menit)",
        detail: "Siswa melakukan eksplorasi logika dan penulisan kode di IDE. Guru berkeliling melakukan scaffolding 1-on-1, memotivasi siswa yang mengalami eror sintaks, serta memberi tantangan pengayaan bagi kelompok yang telah selesai lebih awal."
      },
      {
        tahap: "Fase 4: Mengembangkan & Menyajikan Hasil Karya (15 Menit)",
        detail: "Perwakilan siswa membagikan layar solusi logika yang dirancang, mendemonstrasikan eksekusi program di depan kelas, serta menjelaskan strategi mengatasi bug yang sempat ditemui."
      },
      {
        tahap: "Fase 5: Analisis & Evaluasi Proses Pemecahan Masalah (15 Menit)",
        detail: "Kuis formatif singkat, refleksi proses belajar bersama siswa ('Apa yang paling menantang dan bagaimana menyelesaikannya?'), penegasan konsep inti oleh guru, dan penutupan KBM."
      }
    ]
  },
  analisisAsesmen: {
    keselarasan: "Rancangan asesmen terhubung langsung (constructive alignment) dengan tujuan pembelajaran. Tidak hanya menguji hafalan sintaks di akhir, tetapi mengukur pemahaman konsep melalui asesmen diagnostik, observasi keterlibatan selama praktikum, dan rubrik kinerja hasil kode.",
    multimoda: "Siswa diberikan kesempatan mengonfirmasi pemahaman baik secara tertulis pada LKPD, demonstrasi langsung saat live code, maupun penjelasan nalar logika saat guru berkeliling meja."
  },
  kekuatanRancangan: [
    "Struktur perencanaan sangat komprehensif, mengintegrasikan kurikulum merdeka dengan elemen profil pelajar pancasila dan PSE.",
    "Tersedia materi diferensiasi (starter code berjenjang) sehingga mereduksi kecemasan belajar coding bagi pemula tanpa menghambat siswa mahir.",
    "Alokasi waktu tersusun proporsional dengan porsi terbesar pada penyelidikan terbimbing dan eksplorasi praktikum siswa di laboratorium.",
    "Asesmen berorientasi proses (assessment for & as learning) dengan kriteria ketercapaian tujuan pembelajaran yang transparan."
  ],
  areaPerbaikan: [
    "Perlu estimasi jeda waktu tambahan ketika terjadi kendala teknis jaringan lokal atau booting unit komputer laboratorium.",
    "Variasi skenario open-ended problem solving dapat diperbanyak untuk menguji kemampuan computational thinking tingkat lanjut.",
    "Diferensiasi produk dapat diperluas agar siswa dapat memilih menyajikan hasil berupa diagram alir, skrip program mini, atau video penjelasan singkat."
  ],
  refleksiDanRencana: {
    refleksi: "Penyusunan modul ajar mandiri ini membuktikan bahwa perencanaan yang matang dan berpusat pada siswa adalah kompas terpenting seorang pendidik. Mengajar di laboratorium komputer membutuhkan kepekaan tinggi terhadap dinamika siswa di hadapan layar monitor.",
    rencanaTindakLanjut: [
      "Menyempurnakan modul dengan menyisipkan glosarium istilah komputasi dan panduan troubleshooting mandiri (self-debugging guide).",
      "Mengembangkan bank soal diagnostik digital adaptif sebelum dimulainya unit materi berikutnya.",
      "Melakukan peer-review modul berkala bersama Guru Pamong dan rekan sejawat guru Informatika di MGMP."
    ]
  }
};

// DATA SUBHALAMAN 2: MATERI PEMBELAJARAN
export const materiPembelajaranData = {
  identitas: {
    judulMateri: "Dasar Logika Komputasi dan Pemrograman Tekstual dengan Python",
    mataPelajaran: "Informatika (Fase E)",
    elemen: "Algoritma dan Pemrograman (AP)",
    cakupanKonsep: "Variabel, Tipe Data Primitif, Operator Aritmatika & Logika, Struktur Kontrol Keputusan (if-elif-else), dan Perulangan (while/for)",
    tautanMateri: PRAKTIK_MANDIRI_CONTEXT.driveFolderPPL
  },
  kesesuaianTujuan: {
    penjelasan: "Materi disusun secara berjenjang guna mendukung pencapaian CP Elemen AP Fase E, di mana peserta didik diharapkan tidak hanya mampu menyalin kode sintaks, melainkan mampu merumuskan algoritma pemecahan masalah dan menerjemahkannya ke dalam bahasa tekstual Python yang valid dan efisien.",
    keterkaitan: "Konsep diawali dari pemahaman struktur input-proses-output, dilanjutkan penentuan variabel, kemudian pembentukan cabang keputusan logika."
  },
  ketepatanUrutan: [
    {
      tahap: "1. Konseptual Konkret (Analogi Keseharian)",
      uraian: "Memperkenalkan variabel seperti wadah berlabel penyimpan barang, dan percabangan seperti lampu lalu lintas atau aturan masuk wahana permainan."
    },
    {
      tahap: "2. Representasi Visual (Flowchart Algoritma)",
      uraian: "Siswa diajak menggambar diagram alir logika sebelum menyentuh keyboard, memastikan logika berpikir telah teruji benar sebelum penulisan sintaks."
    },
    {
      tahap: "3. Penerjemahan ke Sintaks Tekstual (Python)",
      uraian: "Mengenalkan sintaksis Python yang ringkas dan ramah pemula, mengamati pengaruh indentasi (tabulasi) pada blok kode."
    },
    {
      tahap: "4. Debugging & Pengujian Kasus Ekstrem",
      uraian: "Siswa menguji kode dengan berbagai nilai masukan, mengamati bagaimana program merespons eror tipe data atau kondisi batas."
    }
  ],
  kesesuaianTingkatKesulitan: {
    analisis: "Tingkat kesulitan disesuaikan dengan kurva belajar siswa kelas X. Materi tidak langsung meloncat ke struktur data rumit, melainkan berfokus pada logika dasar. Disediakan 3 tingkatan scaffolding:",
    tingkatan: [
      { level: "Tingkat 1 (Dasar)", deskripsi: "Melengkapi rumpang kode (fill-in-the-blank code) untuk memahami sintaks dasar dan variabel." },
      { level: "Tingkat 2 (Menengah)", deskripsi: "Menulis fungsi percabangan kondisi dari diagram alir yang telah disediakan." },
      { level: "Tingkat 3 (Tantangan Mandiri)", deskripsi: "Membangun program pemecah masalah matematika atau otomasi kasir mini dari nol." }
    ]
  },
  koneksiKonteksNyata: "Materi dikaitkan langsung dengan kasus dunia nyata yang akrab bagi siswa SMAN 3 Yogyakarta, seperti: perhitungan diskon belanja di koperasi sekolah, sistem penentuan kelayakan donor darah/olahraga berdasarkan usia dan berat badan, serta otomasi sapaan waktu otomatis.",
  analisisPenerapan: {
    kondisiKelas: "Pada saat diterapkan di laboratorium komputer, siswa menunjukkan antusiasme tinggi saat kode yang mereka tulis pertama kali berhasil dieksekusi dan menampilkan keluaran di layar terminal (terminal output).",
    intervensiGuru: "Ketika siswa mendapati syntax error (misalnya kelupaan tanda titik dua ':' pada akhir klausa if atau salah penulisan indentasi), guru tidak langsung mengetikkan solusi, melainkan memandu siswa membaca pesan terminal error Python secara mandiri."
  },
  responsDanPemahaman: {
    temuanNyata: "Sebagian besar siswa berhasil menguasai penentuan variabel dan operator logika. Tantangan umum yang teramati adalah pemahaman indentasi blok pernyataan percabangan bersarang (nested if). Melalui pendampingan live code, miskonsepsi tersebut berhasil diurai dengan baik.",
    buktiTersedia: "Dokumen catatan observasi kelas, berkas proyek latihan siswa di folder drive PPL, dan rekap partisipasi aktif praktikum lab."
  },
  evaluasiMateri: {
    kelebihan: [
      "Struktur materi runtut dan teruji ramah pemula tanpa menghilangkan esensi komputasi.",
      "Penggunaan analogi kontekstual mempermudah abstraksi konsep logika abstrak.",
      "Tersedia contoh kode bersih (clean code practices) yang membiasakan penamaan variabel deskriptif."
    ],
    kendala: [
      "Beberapa siswa cenderung terburu-buru mengetik kode tanpa menganalisis diagram alur terlebih dahulu.",
      "Perbedaan kecepatan mengetik siswa di keyboard lab komputer mempengaruhi tempo penyelesaian latihan."
    ],
    refleksi: "Menyusun materi komputasi memerlukan keseimbangan antara penguasaan konsep konseptual dan pengalaman 'hands-on'. Guru harus menjaga agar siswa tidak menganggap bahasa pemrograman sebagai hafalan kata kunci, melainkan alat penalar logika.",
    tindakLanjut: "Menambahkan lembar latihan mandiri interaktif berbasis web (misalnya Trinket/Colab) agar siswa dapat mengulang eksplorasi materi dari rumah secara fleksibel."
  }
};

// DATA SUBHALAMAN 3: MEDIA PEMBELAJARAN
export const mediaPembelajaranData = {
  daftarMedia: [
    {
      nama: "Slide Presentasi Interaktif Canva Edukasi",
      jenis: "Media Visual & Multimedia",
      link: PRAKTIK_MANDIRI_CONTEXT.driveFolderPPL,
      tujuan: "Menyajikan ringkasan konsep, infografis logika pemrograman, panduan visual langkah praktikum, dan aturan kelas secara visual memikat.",
      dokumentasi: "/dokumentasi/semester1/ds6.jpg",
      keterangan: "Desain visual modern dengan palet warna terstandar, tipografi bersih, dan diagram alur animasi."
    },
    {
      nama: "IDE Pemrograman Python (VS Code & IDLE Lab Komputer)",
      jenis: "Media Perangkat Lunak Praktikum / Digital Hands-on",
      link: PRAKTIK_MANDIRI_CONTEXT.driveFolderPPL,
      tujuan: "Memberikan lingkungan kerja pemrograman nyata dengan fitur syntax highlighting, terminal eksekusi langsung, dan pesan debugging terperinci.",
      dokumentasi: "/dokumentasi/semester2/ds22.jpeg",
      keterangan: "Terpasang pada workstation laboratorium komputer SMAN 3 Yogyakarta dengan ekstensi pendukung Python."
    },
    {
      nama: "LKPD Digital & Starter Code Python",
      jenis: "Media Interaktif Lembar Kerja",
      link: PRAKTIK_MANDIRI_CONTEXT.driveFolderPPL,
      tujuan: "Menjadi panduan berstruktur bagi siswa dalam menyelesaikan misi coding secara berjenjang (dari latihan terpimpin ke latihan bebas).",
      dokumentasi: "/dokumentasi/semester1/ds1.png",
      keterangan: "Disediakan berkas .py berisikan komentar panduan (TODO comments) yang dapat langsung dibuka siswa di komputernya."
    },
    {
      nama: "Platform Evaluasi Gamifikasi Kahoot!",
      jenis: "Media Asesmen Formatif Digital",
      link: PRAKTIK_MANDIRI_CONTEXT.driveFolderPPL,
      tujuan: "Melakukan asesmen formatif interaktif di akhir sesi dengan atmosfer menyenangkan, transparan, dan kompetitif suportif.",
      dokumentasi: "/dokumentasi/semester1/ds14.jpeg",
      keterangan: "Soal berdurasi singkat menguji kemampuan tracing alur kode dan prediksi nilai keluaran program."
    }
  ],
  analisisKesesuaian: "Kombinasi media visual (slide Canva), media alat kerja (IDE Python), media panduan (starter code), dan media evaluasi (Kahoot!) membentuk ekosistem pembelajaran yang terintegrasi. Media yang dipilih sejalan dengan karakteristik mata pelajaran Informatika yang memerlukan hands-on praktikum di depan komputer.",
  kemudahanAkses: "Seluruh media dirancang siap pakai di laboratorium sekolah. Berkas starter code dan LKPD didistribusikan melalui jaringan lokal/cloud drive sekolah sehingga siswa dapat mengakses materi dalam hitungan detik tanpa hambatan otorisasi.",
  keterlibatanSiswa: "Keterlibatan peserta didik terpantau sangat dinamis. Ketika menggunakan IDE Python, siswa aktif bereksperimen dengan kombinasi angka input. Sesi Kahoot! di penutup kelas membangkitkan energi dan tawa positif, sekaligus memperlihatkan secara instan konsep mana yang sudah dikuasai dan mana yang masih membutuhkan penegasan guru.",
  evaluasiMedia: {
    kelebihan: [
      "Tampilan media profesional dan menarik, meningkatkan fokus perhatian siswa di awal KBM.",
      "Penggunaan IDE standar industri melatih kesiapan teknis nyata siswa di era transformasi digital.",
      "Starter code menghemat waktu persiapan dan menjaga fokus siswa pada logika inti yang dipelajari."
    ],
    keterbatasan: [
      "Sangat bergantung pada ketersediaan daya listrik dan kestabilan koneksi internet laboratorium sekolah.",
      "Perbedaan resolusi monitor antar komputer lab terkadang membutuhkan penyesuaian ukuran font pada editor kode siswa."
    ],
    kendalaRiil: "Pada menit awal praktikum, dua unit komputer lab mengalami pembaruan sistem yang memperlambat pembukaan software. Kendala segera ditangani dengan memindahkan siswa ke unit cadangan atau melakukan pair programming bersama rekan terdekat.",
    refleksiDanRencana: "Media bukanlah pengganti peran guru, melainkan katalisator interaksi belajar. Rencana perbaikan meliputi penyiapan versi web-based compiler (seperti Replit / Colab) sebagai rencana cadangan jika software lokal lab mengalami gangguan teknis mendadak."
  }
};

// DATA SUBHALAMAN 4: ANALISIS VIDEO PRAKTIK MENGAJAR
export const videoPraktikData = {
  videoMeta: {
    judul: "Rekaman Video Pembelajaran Praktik Mengajar Mandiri (PPL II)",
    kelas: "Kelas X SMAN 3 Yogyakarta",
    materi: "Algoritma dan Pemrograman (Python Logic & Control Flow)",
    lokasi: "Laboratorium Komputer SMAN 3 Yogyakarta",
    semester: "Semester II",
    videoUrl: PRAKTIK_MANDIRI_CONTEXT.driveVideoPPL2,
    thumbnail: "/dokumentasi/semester2/ds22.jpeg",
    statusVideo: "Tersedia di Google Drive Resmi"
  },
  konteksPelaksanaan: "Praktik mengajar mandiri ini dilaksanakan pada siklus PPL II PPG Prajabatan Informatika UNY di SMAN 3 Yogyakarta. Mahasiswa bertindak sebagai guru model penuh yang memimpin pembelajaran dari awal hingga akhir, didampingi oleh Guru Pamong di bagian belakang ruang laboratorium.",
  tahapanPembelajaran: [
    {
      fase: "Kegiatan Pembukaan",
      observasi: "Guru membuka pelajaran dengan salam hangat, menanyakan kabar siswa, mengecek presensi, serta memimpin doa bersama. Guru menyampaikan apersepsi kontekstual dan mengaitkan materi pertemuan dengan logika komputasi yang pernah dibahas sebelumnya. Tujuan pembelajaran dan alur aktivitas praktikum disampaikan secara jelas di layar proyektor.",
      analisis: "Pembukaan berjalan terstruktur dan efektif dalam mengkondisikan kesiapan mental siswa beralih dari istirahat menuju fokus belajar komputasi. Suasana kelas terbangun aman, inklusif, dan penuh antusiasme."
    },
    {
      fase: "Kegiatan Inti",
      observasi: "Guru memaparkan konsep logika percabangan menggunakan slide Canva interaktif, diselingi demonstrasi live coding singkat. Siswa kemudian membuka IDE Python pada komputer masing-masing. Terlihat guru aktif berkeliling di antara lorong komputer laboratorium, memberikan bimbingan personal (one-on-one scaffolding), memfasilitasi peer debugging antar siswa, dan memeriksa ketercapaian misi praktikum.",
      analisis: "Pengelolaan aktivitas inti mencerminkan model student-centered. Guru tidak mendominasi layar depan kelas, melainkan mendistribusikan waktu untuk mendatangi meja-meja siswa yang memerlukan bantuan penanganan eror logika."
    },
    {
      fase: "Kegiatan Penutup",
      observasi: "Guru mengumpulkan perhatian seluruh siswa kembali ke tengah kelas. Siswa bersama guru menarik kesimpulan penting mengenai kaidah indentasi dan pembacaan pesan error Python. Sesi evaluasi formatif dilakukan, diikuti refleksi emosional singkat ('The Power of Yet') dan apresiasi atas kegigihan seluruh siswa. Kelas diakhiri dengan doa dan salam penutup.",
      analisis: "Penutupan memberikan ruang pemaknaan yang berharga bagi siswa. Refleksi membantu memantapkan konsep kognitif sekaligus memperkuat ketahanan mental siswa dalam menghadapi tantangan logika pemrograman."
    }
  ],
  komunikasiDanInteraksi: "Komunikasi verbal guru terdengar jelas, tenang, bernada positif, dan tidak intimidatif. Guru menggunakan pertanyaan terbuka untuk merangsang rasa ingin tahu siswa ketimbang langsung mendikte jawaban. Interaksi nonverbal seperti kontak mata, senyuman, dan gestur tubuh terbuka terlihat dominan sepanjang rekaman video.",
  keterlibatanSiswa: "Peserta didik aktif berinteraksi dengan komputer dan teman semejanya. Tidak terlihat siswa yang pasif tertidur atau membuka tab hiburan di luar materi praktikum. Ketika salah satu kelompok mengalami bug program, mereka berusaha menelusuri bersama sebelum memanggil guru.",
  pengelolaanKelasDanWaktu: "Manajemen transisi dari sesi pemaparan di layar depan menuju sesi praktikum mandiri berlangsung rapi dalam durasi sekitar 3 menit. Alokasi waktu inti KBM terlaksana sesuai rencana pelaksanaan pembelajaran tanpa ada tahapan penting yang terpotong.",
  momenPentingVideo: [
    {
      momen: "Apersepsi Interaktif & Pemaparan Analogi Nyata",
      deskripsi: "Guru mengajak siswa mengamati logika keputusan lampu lalu lintas dan mengaitkannya dengan logika perintah percabangan Python."
    },
    {
      momen: "Live Coding Bersama & Pengenalan Indentasi Kode",
      deskripsi: "Guru mendemonstrasikan secara langsung di layar proyektor penulisan kode terstruktur dan menunjukkan apa yang terjadi ketika terjadi kesalahan tabulasi/indentasi."
    },
    {
      momen: "Scaffolding Personal 1-on-1 di Meja Siswa",
      deskripsi: "Momen guru membungkuk di samping meja siswa di laboratorium komputer, mendengarkan kebingungan siswa secara sabar, dan mengajukan pertanyaan penuntun pemecahan masalah."
    },
    {
      momen: "Refleksi The Power of Yet di Akhir KBM",
      deskripsi: "Pemberian afirmasi positif kepada siswa bahwa 'kode yang error bukan berarti gagal, tetapi kamu belum menemukan baris perbaikannya'."
    }
  ],
  kekuatanPelaksanaan: [
    "Penguasaan materi informatika yang solid dan kemampuan menyederhanakan bahasa teknis menjadi mudah dicerna siswa.",
    "Distribusi mobilitas guru merata ke seluruh sudut laboratorium komputer, menjamin setiap kelompok terfasilitasi secara adil.",
    "Penerapan disiplin positif dan budaya menghargai usaha peserta didik.",
    "Kemampuan teknis tanggap dalam mengarahkan siswa saat menghadapi gangguan eror editor kode."
  ],
  aspekPeningkatan: [
    "Dapat memberikan alokasi waktu sekitar 2 menit lebih banyak bagi salah satu perwakilan siswa untuk mempresentasikan kodenya di hadapan seluruh kelas.",
    "Pengaturan volume mikrofon lab dapat lebih dioptimalkan agar instruksi terdengar konsisten di baris komputer paling belakang."
  ],
  refleksiDanTindakLanjut: {
    refleksi: "Menganalisis video rekaman mengajar diri sendiri memberikan perspektif objektif yang sangat bernilai. Saya menyadari pentingnya jeda berbicara (wait time) dan bagaimana gestur apresiatif guru mampu menurunkan ketegangan siswa saat belajar pemrograman.",
    tindakLanjut: "Mengabadikan praktik baik ini ke dalam portofolio digital dan menjadikannya referensi berkelanjutan dalam mengembangkan pedagogik komputasi di jenjang sekolah menengah."
  }
};

// DATA SUBHALAMAN 5: ANALISIS KEGIATAN NONMENGAJAR
export const kegiatanNonmengajarData = {
  ringkasan: "Sebagai calon guru profesional di SMAN 3 Yogyakarta, pengalaman belajar tidak terbatas pada ruang kelas dan laboratorium komputer, melainkan mencakup partisipasi aktif dalam ekosistem budaya sekolah, pembinaan karakter peserta didik, perayaan kewirausahaan, serta kegiatan kebersamaan warga sekolah.",
  daftarKegiatan: [
    {
      id: "nonajar-1",
      namaKegiatan: "Pembiasaan Budaya 5S & Tradisi Salim Pagi di Gerbang Sekolah",
      jenis: "Penguatan Budaya Sekolah & Pendidikan Karakter",
      waktu: "Agustus - Oktober 2026 (Pagi Hari Pukul 06.30 - 07.15 WIB)",
      tempat: "Pintu Masuk & Gerbang Utama SMAN 3 Yogyakarta",
      foto: "/dokumentasi/semester2/ds24.jpeg",
      fotoKeterangan: "Dokumentasi nyata kegiatan penyambutan siswa di pintu masuk SMAN 3 Yogyakarta (ds24.jpeg)",
      tujuan: "Membangun iklim sekolah yang hangat, ramah anak, serta menanamkan budaya sopan santun (Senyum, Salam, Sapa, Sopan, Santun) dan rasa hormat kepada pendidik sejak detik pertama siswa memasuki lingkungan sekolah.",
      peranTanggungJawab: "Berdiri bersama Guru Pamong dan jajaran pimpinan sekolah menyambut kedatangan siswa, menyapa dengan ramah, membalas salim hormat siswa, serta memantau ketertiban dan kerapian seragam sekolah dengan pendekatan disiplin positif.",
      proses: "Hadir sebelum pukul 06.30 WIB di pintu gerbang sekolah, menyapa siswa pejalan kaki, pesepeda, maupun yang diantar kendaraan, memberikan teguran ramah edukatif jika ada helm atau kelengkapan yang belum tepat, dan mendoakan kelancaran belajar siswa.",
      kompetensiDikembangkan: "Kompetensi Kepribadian dan Sosial: melatih keikhlasan, keramahan, keteladanan sikap, empati sosial, dan kemampuan membina hubungan harmonis dengan seluruh warga sekolah.",
      manfaat: "Menciptakan rasa aman dan nyaman psikologis bagi peserta didik sebelum memulai KBM di kelas, sekaligus memperkokoh citra SMAN 3 Yogyakarta sebagai sekolah unggul berkarakter luhur.",
      tantanganDanSolusi: "Tantangan: fluktuasi kedatangan siswa di jam padat (06.50 - 07.00 WIB). Solusi: pembagian posisi berdiri bersama guru piket agar arus masuk siswa tetap tertib, mengalir lancar, dan setiap siswa tetap tersapa hangat.",
      refleksiTindakLanjut: "Keteladanan adalah metode pendidikan yang paling ampuh. Menyambut siswa dengan senyuman tulus di pagi hari memberikan energi positif yang berdampak langsung pada kesiapan belajar mereka di ruang kelas."
    },
    {
      id: "nonajar-2",
      namaKegiatan: "Festival Makan Ikan Dinas Kelautan dan Perikanan DIY",
      jenis: "Projek Kokurikuler & Pembinaan Kewirausahaan Murid",
      waktu: "26 Agustus 2026",
      tempat: "Halaman Kampus SMAN 3 Yogyakarta",
      foto: "/dokumentasi/semester2/ds25.jpeg",
      fotoKeterangan: "Dokumentasi nyata bazar kewirausahaan kreatif Gelar Karya P5 siswa SMAN 3 Yogyakarta (ds25.jpeg)",
      tujuan: "Mengedukasi siswa mengenai pentingnya nilai gizi dan manfaat konsumsi ikan tuna bagi kesehatan serta perkembangan kecerdasan. Menumbuhkan kesadaran akan potensi perikanan lokal sekaligus memasyarakatkan Gerakan Memasyarakatkan Makan Ikan (Gemarikan) di lingkungan sekolah. Mengasah minat, bakat, serta kreativitas kuliner siswa melalui kompetisi mengolah bahan pangan sehat.",
      peranTanggungJawab: "Memfasilitasi alur kegiatan, memastikan ketersediaan sarana dan keselamatan kerja saat lomba, serta mendampingi interaksi siswa selama acara berlangsung.",
      proses: "Setiap tim siswa bekerja sama dalam durasi waktu tertentu untuk mengolah ikan tuna segar menjadi hidangan inovatif, mulai dari proses persiapan bahan, memasak, hingga teknik penyajian (plating).",
      kompetensiDikembangkan: "Menunjukkan komitmen dalam mendukung program edukasi kesehatan masyarakat (Gemarikan) serta membangun kepekaan apresiatif terhadap inovasi dan semangat berkarya peserta didik.",
      manfaat: "Melatih kemampuan kerja sama tim, kreativitas kuliner, kedisiplinan manajemen waktu, serta meningkatkan kebiasaan pola makan sehat kaya gizi.",
      tantanganDanSolusi: "Tantangan: Siswa mengalami kendala pada manajemen waktu saat mengolah ikan tuna, penataan kebersihan area memasak, serta alur penyajian produk tepat waktu. Solusi: Memberikan arahan dan coaching singkat mengenai efisiensi pembagian tugas kelompok (persiapan bahan, mengolah, dan plating) serta mengingatkan penerapan prinsip kerja higienis secara berkala selama perlombaan.",
      refleksiTindakLanjut: "Kompetisi kuliner berbasis bahan lokal ini membuktikan bahwa pembelajaran kontekstual mampu menumbuhkan daya cipta, kemandirian, dan kerja sama siswa secara nyata.Guru hadir sebagai fasilitator yang memberikan ruang berekspresi sekaligus menanamkan kesadaran gizi secara menyenangkan."
    },
    {
      id: "nonajar-3",
      namaKegiatan: "Jalan Sehat & Senam Bugar Bersama Komunitas Padmanaba",
      jenis: "Kegiatan Kebugaran & Penguatan Kohesi Warga Sekolah",
      waktu: "20 September 2026",
      tempat: "Kawasan Lingkungan SMAN 3 Yogyakarta",
      foto: "/dokumentasi/semester2/ds26.jpeg",
      fotoKeterangan: "Dokumentasi nyata kegiatan kebugaran jasmani bersama komunitas Padmanaba (ds26.jpeg)",
      tujuan: "Menjaga kebugaran jasmani, mempererat tali silaturahmi antara guru, tenaga kependidikan, siswa, dan mahasiswa PPL PPG dalam suasana riang dan sehat.",
      peranTanggungJawab: "Berpartisipasi aktif dalam barisan senam dan rute jalan sehat, berbaur dengan dewan guru dan siswa, serta turut menjaga ketertiban rute jalan di lingkungan sekitar sekolah.",
      proses: "Mengikuti apel pagi kebugaran, melakukan senam bersama di halaman sekolah, menempuh rute jalan sehat mengitari kawasan Kotabaru Yogyakarta, dan mengikuti ramah tamah kekeluargaan di sekolah.",
      kompetensiDikembangkan: "Kompetensi Sosial: menjalin kedekatan emosional dan interaksi informal yang cair dengan dewan guru senior dan siswa di luar konteks ruang kelas formal.",
      manfaat: "Menurunkan tingkat stres akademik dan pekerjaan, meningkatkan rasa memiliki (sense of belonging) terhadap almamater sekolah mitra, dan memupuk solidaritas tim pendidik.",
      tantanganDanSolusi: "Tantangan: menjaga keselamatan barisan siswa saat melintasi jalur lalu lintas publik. Solusi: koordinasi aktif bersama tim keamanan sekolah dan panitia pembagi rute jalan sehat.",
      refleksiTindakLanjut: "Kebugaran fisik dan iklim relasi yang guyub adalah penopang utama energi positif pendidik dalam mengajar. Menjadi bagian dari tradisi Padmanaba memperluas wawasan tentang pentingnya keseimbangan jiwa dan raga dalam profesi guru."
    },
    {
      id: "nonajar-4",
      namaKegiatan: "Konsultasi Reflektif & Bimbingan Keprofesian bersama Guru Pamong",
      jenis: "Pengembangan Keprofesian Berkelanjutan (PKB)",
      waktu: "Berkala Setiap Pekan (Semester II)",
      tempat: "Ruang Kerja Guru SMAN 3 Yogyakarta",
      foto: "/dokumentasi/semester2/ds27.jpeg",
      fotoKeterangan: "Dokumentasi nyata sesi diskusi bimbingan berkala bersama Guru Pamong (ds27.jpeg)",
      tujuan: "Mengevaluasi ketercapaian siklus mengajar mandiri, mengidentifikasi kelemahan pedagogik, dan merumuskan intervensi perbaikan untuk siklus KBM selanjutnya.",
      peranTanggungJawab: "Mempersiapkan catatan refleksi mengajar, mengajukan pertanyaan konsultasi terkait dinamika siswa tertentu, menerima masukan supervisi klinis, dan merevisi modul ajar sesuai rekomendasi.",
      proses: "Sesi dialog profesional terstruktur: mendiskusikan respons siswa pada materi pemrograman, menelaah efektivitas asesmen formatif, serta mendengarkan pandangan praktisi ahli dari Guru Pamong berpengalaman.",
      kompetensiDikembangkan: "Kompetensi Profesional dan Pedagogik: mengasah kebiasaan berpikir reflektif (reflective practitioner), kerendahan hati untuk terus belajar, dan kemahiran menyelaraskan teori kampus dengan kenyataan lapangan.",
      manfaat: "Peningkatan kualitas pembelajaran yang dirasakan langsung oleh siswa di kelas, serta terjalinnya kemitraan konstruktif antara LPTK UNY dan SMAN 3 Yogyakarta.",
      tantanganDanSolusi: "Tantangan: penyesuaian jadwal konsultasi di tengah padatnya agenda mengajar Guru Pamong. Solusi: menyusun daftar poin konsultasi ringkas dan terfokus terlebih dahulu agar sesi diskusi berjalan efektif dan efisien.",
      refleksiTindakLanjut: "Bimbingan Guru Pamong adalah cermin berharga yang membantu melihat area 'blind spot' dalam pengajaran. Pembelajaran terbesar seorang guru adalah kemauan untuk terus berefleksi dan menyempurnakan diri."
    },
    {
      id: "nonajar-5",
      namaKegiatan: "Partisipasi Apel Pagi dan Upacara Bendera Rutin Sekolah",
      jenis: "Penguatan Nasionalisme & Kedisiplinan Budaya Sekolah",
      waktu: "Setiap Senin Pagi & Peringatan Hari Besar Nasional",
      tempat: "Halaman Upacara SMAN 3 Yogyakarta",
      foto: "/dokumentasi/semester2/ds29.jpg",
      fotoKeterangan: "Mahasiswa PPL berbaris rapi dalam upacara bendera bersama dewan guru dan peserta didik (ds29.jpg)",
      tujuan: "Menumbuhkan jiwa nasionalisme, keteladanan kedisiplinan, dan kekhidmatan dalam pembiasaan upacara bendera serta penguatan nilai-nilai kebangsaan bagi seluruh warga sekolah.",
      peranTanggungJawab: "Berbaris tertib bersama jajaran guru dan staf sekolah, mendampingi barisan peserta didik, dan turut serta memastikan kelancaran jalannya prosesi upacara bendera.",
      proses: "Hadir tepat waktu sebelum bel tanda apel/upacara berbunyi, mengenakan seragam almamater resmi, mengikuti rangkaian pengibaran bendera merah putih, pembacaan Pancasila, dan menyimak amanat pembina upacara.",
      kompetensiDikembangkan: "Kompetensi Kepribadian dan Sosial: menjadi teladan sikap disiplin, kesiapan mental, dan penguatan komitmen kebangsaan sebagai calon pendidik.",
      manfaat: "Menciptakan keselarasan antara keteladanan guru dan kedisiplinan siswa, memperkuat budaya positif dan keteraturan di lingkungan sekolah.",
      tantanganDanSolusi: "Tantangan: Menjaga kerapian barisan di bawah terik matahari pagi. Solusi: Sikap tegap dan fokus memberi contoh langsung bagi peserta didik untuk bersikap tertib selama upacara.",
      refleksiTindakLanjut: "Keteladanan adalah bahasa yang paling mudah dipahami oleh murid. Berdiri di barisan upacara bendera bersama dewan guru mengingatkan kembali esensi pengabdian seorang guru bagi bangsa."
    },
    {
      id: "nonajar-6",
      namaKegiatan: "Pelaksanaan Tugas Non-Mengajar & Pengelolaan Administrasi Persekolahan",
      jenis: "Manajemen Persekolahan & Tata Kelola Administrasi",
      waktu: "Agustus - Oktober 2026 (Jam Kerja Non-KBM)",
      tempat: "Ruang Administrasi & Tata Usaha SMAN 3 Yogyakarta",
      foto: "/dokumentasi/semester2/ds32.jpg",
      fotoKeterangan: "Koordinasi pengelolaan administrasi dan arsip KBM di ruang kerja sekolah (ds32.jpg)",
      tujuan: "Mempelajari tata kelola administrasi pembelajaran, pengarsipan nilai dan presensi, serta mendukung operasional persuratan dan kebutuhan KBM sekolah.",
      peranTanggungJawab: "Membantu inventarisasi perangkat ajar, pencatatan log harian, koordinasi data peserta didik, dan berkolaborasi bersama tenaga administrasi sekolah.",
      proses: "Melakukan koordinasi dengan staf tata usaha, menginput dan merekap data kehadiran praktikum, serta menyusun kelengkapan berkas KBM di ruang administrasi.",
      kompetensiDikembangkan: "Kompetensi Manajerial dan Sosial: ketelitian kerja, kemampuan bekerja sama dengan staf non-edukatif, dan pemahaman operasional kelembagaan sekolah.",
      manfaat: "Mendukung kelancaran layanan administrasi akademik dan menciptakan sinergi positif antara civitas akademika di lingkungan SMAN 3 Yogyakarta.",
      tantanganDanSolusi: "Tantangan: Membagi waktu antara persiapan modul ajar dan tugas administrasi. Solusi: Menyusun skala prioritas harian dan mencatat seluruh agenda ke dalam jurnal harian resmi.",
      refleksiTindakLanjut: "Tugas seorang guru profesional tidak hanya di depan kelas, namun juga berakar pada integritas pengelolaan administrasi yang rapi, transparan, dan akuntabel."
    }
  ]
};

// DATA SUBHALAMAN 6: INSTRUMEN PENILAIAN DAN ANALISISNYA
export const instrumenPenilaianData = {
  ringkasan: "Instrumen penilaian dirancang dengan paradigma 'Asesmen Sebagai Pembelajaran (Assessment as Learning)' dan 'Asesmen Untuk Pembelajaran (Assessment for Learning)'. Seluruh instrumen mengacu pada tujuan pembelajaran Elemen Algoritma dan Pemrograman (Fase E) dengan prinsip transparansi rubrik yang adil.",
  dokumenLink: PRAKTIK_MANDIRI_CONTEXT.driveFolderPPL,
  daftarInstrumen: [
    {
      nama: "Instrumen Asesmen Diagnostik Kognitif & Non-Kognitif",
      jenis: "Kuesioner Pemetaan Awal & Kuis Singkat",
      tujuan: "Mengidentifikasi modalitas belajar, minat topik, pengalaman logika komputasi awal, serta tingkat kesiapan belajar (readiness) peserta didik sebelum materi dimulai.",
      kompetensiDinilai: "Pemahaman logika dasar non-komputer, kesiapan emosional belajar hal baru, dan pengalaman menggunakan perangkat komputer.",
      formatDokumen: "Formulir Digital & Berkas Rubrik Diagnostik (Tersedia di Drive PPL)"
    },
    {
      nama: "Lembar Observasi Praktikum & Kinerja Pemrograman",
      jenis: "Observasi Proses KBM & Kinerja Hands-on",
      tujuan: "Menilai keaktifan, kemandirian penelusuran kode, kerja sama tim, dan kepatuhan prosedur keselamatan laboratorium selama praktikum berlangsung.",
      kompetensiDinilai: "Keterampilan proses komputasional, penalaran kritis saat menghadapi error, dan etika kolaborasi peer debugging.",
      formatDokumen: "Checklist Observasi Skala Likert 4 Poin"
    },
    {
      nama: "Rubrik Analitik Penilaian Produk Kode Program (Python)",
      jenis: "Rubrik Kinerja Analitik 4 Jenjang Pemahaman",
      tujuan: "Menilai kualitas solusi program yang dihasilkan siswa secara objektif, adil, transparan, dan terukur.",
      kompetensiDinilai: "Kebenaran logika, sintaks tanpa eror, penataan indentasi bersih, efisiensi alur, dan kesesuaian dengan spesifikasi soal.",
      formatDokumen: "Matriks Rubrik Penilaian Terstruktur"
    },
    {
      nama: "Kuis Formatif Interaktif (Gamifikasi)",
      jenis: "Kuis Formatif Cepat (Kahoot! / Digital Quiz)",
      tujuan: "Mengevaluasi penguasaan konseptual instan mengenai alur eksekusi, prediksi nilai variabel, dan pendeteksian letak bug program.",
      kompetensiDinilai: "Penalaran tracing alur kode dan pemahaman konsep percabangan komputasi.",
      formatDokumen: "Paket Bank Soal Pilihan Ganda Diagnostik Formatif"
    }
  ],
  tabelRubrik: {
    kriteriaKinerja: [
      {
        kriteria: "1. Kebenaran Logika & Alur Algoritma",
        bobot: "30%",
        indikator: "Program mampu memberikan solusi logika yang tepat untuk seluruh variasi kasus masukan (input) yang disyaratkan.",
        skala: {
          baruMemulai: "Logika belum terarah; output program tidak sesuai dengan skenario masalah.",
          berkembang: "Logika dasar terpenuhi namun gagal pada kondisi batas atau variasi input tertentu.",
          cakap: "Logika program bekerja dengan benar untuk seluruh kasus uji umum.",
          mahir: "Logika program sempurna, adaptif menangani edge-cases, dan disusun dengan alur yang sangat efisien."
        }
      },
      {
        kriteria: "2. Sintaksis & Kerapian Kode (Syntax & Indentasi)",
        bobot: "25%",
        indikator: "Kode bebas dari syntax error, penggunaan indentasi blok konsisten, dan penamaan variabel representatif.",
        skala: {
          baruMemulai: "Masih terdapat syntax error yang menghentikan jalannya program; indentasi kacau.",
          berkembang: "Program dapat berjalan namun terdapat inkonsistensi indentasi dan penamaan variabel kurang jelas.",
          cakap: "Kode dieksekusi tanpa error; indentasi teratur sesuai kaidah penulisan Python.",
          mahir: "Kode sangat bersih (clean code), mengikuti panduan PEP8, dan disertai komentar penjelas yang informatif."
        }
      },
      {
        kriteria: "3. Kemandirian Pemecahan Masalah & Debugging",
        bobot: "25%",
        indikator: "Mampu membaca pesan terminal error, mengidentifikasi baris masalah, dan memperbaiki bug secara mandiri atau dengan bantuan minimal.",
        skala: {
          baruMemulai: "Mudah menyerah saat menjumpai pesan error; bergantung sepenuhnya pada bantuan guru.",
          berkembang: "Mencoba memperbaiki setelah diarahkan secara spesifik letak kesalahan sintaksisnya.",
          cakap: "Mampu melokalisasi letak pesan error dan memperbaikinya secara mandiri dengan membaca trace terminal.",
          mahir: "Secara proaktif memecahkan bug kompleks serta mampu membantu rekan sejawat (peer mentor) dalam melacak error."
        }
      },
      {
        kriteria: "4. Kolaborasi & Komunikasi Positif (PSE)",
        bobot: "20%",
        indikator: "Menunjukkan sikap saling mendukung, berbagi peran adil dalam pair programming, dan merefleksikan proses belajar dengan jujur.",
        skala: {
          baruMemulai: "Bekerja individualis, pasif dalam diskusi kelompok, atau meremehkan rekan yang kesulitan.",
          berkembang: "Berpartisipasi jika diminta, komunikasi masih terbatas pada pembagian tugas sederhana.",
          cakap: "Aktif berdiskusi, memberikan masukan santun kepada rekan, dan menghargai masukan teman.",
          mahir: "Membangun iklim tim yang sangat suportif, mempraktikkan komunikasi empatik, dan menginspirasi resiliensi tim."
        }
      }
    ]
  },
  analisisKesesuaianTujuan: {
    uraian: "Setiap butir kriteria rubrik diturunkan secara langsung dari Tujuan Pembelajaran (TP) yang tercantum pada Modul Ajar. Pemisahan antara kebenaran logika dan kerapian sintaks memastikan bahwa siswa yang memiliki ide algoritma cemerlang namun mengalami kekeliruan kecil pada tanda baca tetap mendapatkan penilaian yang adil dan apresiatif atas proses berpikirnya."
  },
  analisisKejelasanIndikator: {
    uraian: "Indikator pada setiap tingkatan (Baru Memulai, Berkembang, Cakap, Mahir) dirumuskan dengan kata kerja operasional dan deskriptor perilaku yang konkret (observable behavior). Hal ini meminimalkan bias subjektivitas guru penilai dan memungkinkan siswa melakukan penilaian diri (self-assessment) secara mandiri sebelum menyerahkan karyanya."
  },
  analisisHasilPenilaian: {
    catatanRealistis: "Berdasarkan rekap observasi formatif kelas nyata di laboratorium komputer SMAN 3 Yogyakarta tanpa membuat data fiktif peserta didik:",
    temuan: [
      "Mayoritas siswa berada pada kategori 'Cakap' dalam aspek Kebenaran Logika dan Kerapian Sintaks setelah mendapatkan pendampingan scaffolding di siklus mandiri.",
      "Aspek kemandirian debugging menunjukkan perkembangan signifikan: pada 15 menit awal sebagian siswa memanggil guru saat melihat teks merah error, namun setelah dimodelkan cara membaca nomor baris error, siswa mulai aktif meneliti sendiri baris kodenya.",
      "Hasil asesmen formatif interaktif Kahoot! memperlihatkan ketuntasan konsep percabangan dasar mencapai lebih dari 85% dari total siswa yang hadir."
    ]
  },
  evaluasiInstrumen: {
    kelebihan: [
      "Rubrik analitik 4 skala sangat transparan dan dibagikan kepada siswa sebelum praktikum dimulai.",
      "Menilai dimensi keterampilan komputasi sekaligus dimensi sikap sosial-emosional secara terpadu.",
      "Mendukung diferensiasi pembelajaran karena memberikan ruang bagi siswa menunjukkan kemajuan bertahap."
    ],
    keterbatasan: [
      "Memerlukan konsentrasi dan mobilitas tinggi bagi guru untuk mengamati seluruh kelompok di laboratorium komputer yang beranggotakan banyak siswa.",
      "Pencatatan observasi manual dengan kertas lembar penilaian terkadang kurang fleksibel saat guru bergerak cepat mendampingi meja siswa."
    ],
    rencanaPerbaikan: [
      "Mengembangkan aplikasi rubric tracker digital sederhana berbasis Google Forms / spreadsheet mobile agar guru dapat menginput skor observasi secara real-time melalui tablet/ponsel.",
      "Menambahkan rubrik asesmen antar-teman (peer-assessment rubric) yang lebih ringkas agar siswa dapat saling memberikan umpan balik konstruktif."
    ]
  }
};
