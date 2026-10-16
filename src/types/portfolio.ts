export type Category =
  | "Praktik PPL"
  | "Projek Kepemimpinan"
  | "Gelar Karya & Seminar"
  | "Video Pembelajaran"
  | "Praktik Mengajar"
  | "Budaya Sekolah"
  | "Bimbingan & Diskusi"
  | "Semester I"
  | "Semester II";

export type Semester = "Semester I" | "Semester II";

export type Project = {
  id: string;
  semester: Semester;
  title: string;
  eyebrow: string;
  description: string;
  focus: string;
  tags: string[];
  details: string[];
  link?: string;
  categoryTag?: string; // e.g., "Modul Ajar", "Studi Kasus", "Asesmen"
};

export type GalleryCategory =
  | "Semua"
  | "Praktik Mengajar"
  | "Budaya Sekolah"
  | "Bimbingan & Diskusi"
  | "Projek Kepemimpinan"
  | "Video Pembelajaran"
  | "Semester I"
  | "Semester II";

export type GalleryItem = {
  id: string;
  category: Category;
  type: "photo" | "video";
  title: string;
  date: string;
  semester: Semester;
  location: string;
  thumbnail: string;
  mediaUrl?: string;
  description: string;
  reflection: string;
  tags: string[];
  driveLink?: string;
};

export type JourneyMilestone = {
  id: string;
  period: string;
  semester: Semester;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  badge: string;
  iconType: "school" | "code" | "users" | "award" | "book" | "sparkles";
};

export type ReflectionTopic = {
  id: string;
  title: string;
  category: string;
  summary: string;
  points: {
    heading: string;
    detail: string;
  }[];
};
