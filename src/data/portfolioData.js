export const personalInfo = {
  name: "Firjatullah Anang Setiawan",
  shortName: "Firjatullah Anang S.",
  nickname: "Luffy Juro",
  role: "Web Developer & Tech Enthusiast",
  education: {
    degree: "Diploma 3 (D3) Teknik Informatika",
    institution: "Politeknik Negeri Batam",
    graduation: "Agustus 2026",
    gpa: "3.79 / 4.00",
  },
  bio: [
    "Tech enthusiast dan Web Developer lulusan D3 Teknik Informatika Politeknik Negeri Batam (IPK 3.79 / 4.00, Lulus Agustus 2026).",
    "Passionate dalam membangun solusi web modern yang clean, snappy, dan interaktif menggunakan ekosistem Next.js, React, dan Tailwind CSS.",
    "Di sisi backend, terbiasa merancang arsitektur sistem andal berbasis PHP Laravel dan MySQL — termasuk pengalaman nyata memimpin migrasi sistem informasi anggaran kampus di Unit Transformasi Digital Polibatam.",
    "Selain web engineering, aktif bereksperimen dengan integrasi IoT (ESP8266/ESP32 & sensor RFID) ke cloud dan mobile (Flutter/Firebase). Selalu haus belajar stack baru dan siap berkontribusi dalam tim tech pengembang."
  ],
  contacts: {
    email: "anangsy29@gmail.com",
    phone: "+62 821 6936 6832",
    phoneRaw: "+6282169366832",
    whatsappLink: "https://wa.me/6282169366832",
    linkedin: "https://linkedin.com/in/firjatullah-anang-setiawan",
    linkedinDisplay: "firjatullah-anang-setiawan",
    github: "https://github.com/anangsy29",
    githubDisplay: "github.com/anangsy29",
    cvPdf: "/CV_Firjatullah_Anang_Setiawan_EN.pdf",
    profileImage: "/images/profile-recent.jpeg"
  }
};

export const navLinks = [
  { id: "beranda", label: "Beranda", title: "Beranda" },
  { id: "tentang", label: "Tentang", title: "Tentang Saya" },
  { id: "pengalaman", label: "Pengalaman", title: "Pengalaman Kerja" },
  { id: "proyek", label: "Proyek", title: "Proyek Unggulan" },
  { id: "keahlian", label: "Keahlian & Sertifikasi", title: "Keahlian & Sertifikasi" },
  { id: "kontak", label: "Kontak", title: "Kontak" }
];

export const experienceData = [
  {
    role: "Web Developer Intern",
    institution: "Politeknik Negeri Batam",
    unit: "Unit Transformasi Digital (Digital Transformation Unit)",
    period: "Sep 2025 – Feb 2026 (6 Bulan)",
    points: [
      {
        title: "Migrasi Arsitektur Sistem",
        desc: "Memimpin refactoring dan migrasi codebase legacy C# ke PHP Laravel & MySQL untuk 'Budget Management Information System', menghasilkan sistem yang lebih modular dan maintainable."
      },
      {
        title: "Deployment & Production Usage",
        desc: "Sistem berhasil di-deploy ke lingkungan produksi dan aktif digunakan untuk operasional tata kelola anggaran unit kampus selama ±5 bulan."
      },
      {
        title: "Redesain UI/UX & Optimasi Performa",
        desc: "Merancang ulang antarmuka website unit agar lebih modern, clean, dan responsif, meningkatkan efisiensi navigasi dan alur kerja pengguna."
      },
      {
        title: "Kolaborasi Tim & Quality Assurance",
        desc: "Bekerja sama erat dengan tim developer dan stakeholder dalam continuous testing (QA) untuk memastikan stabilitas dan akurasi logika bisnis."
      }
    ],
    skills: ["PHP Laravel", "MySQL", "C# Migration", "UI/UX Design", "Stakeholder Coordination", "Software Testing"],
    certIndex: 2 // refers to cert-magang
  }
];

export const projects = [
  {
    id: 1,
    title: "Budget Management Information System",
    category: "web",
    badge: "Tugas Akhir & Sistem Kampus",
    period: "Sep 2025 – Feb 2026",
    role: "Web Developer (Migrasi Sistem)",
    description:
      "Sistem Informasi Manajemen Anggaran kampus. Berhasil mentransformasi sistem lama ke PHP Laravel dengan database MySQL yang lebih terstruktur serta UI yang modern. Sukses diterapkan dan aktif digunakan secara operasional oleh Unit Transformasi Digital selama ±5 bulan.",
    tags: ["PHP Laravel", "MySQL", "C# Migration", "UI/UX Redesign", "System Analysis", "Software Testing"],
    github: "https://github.com/anangsy29",
    highlight: true,
  },
  {
    id: 2,
    title: "RFID-based Smart Gate System",
    category: "iot",
    badge: "IoT & Web Solution",
    period: "Sep 2024 – Jul 2025",
    role: "IoT Engineer | Front-End & Back-End | Team Leader",
    description:
      "Solusi otomasi gerbang pintar berbasis IoT dengan deteksi RFID kendaraan, didukung backend Laravel dan aplikasi mobile Flutter + Firebase. Dilengkapi dashboard web interaktif bagi petugas untuk memantau lalu lintas kendaraan secara real-time.",
    tags: ["ESP8266", "RFID RC522", "Laravel", "Flutter", "Firebase", "C++", "Team Leader"],
    github: "https://github.com/anangsy29",
    highlight: true,
  },
  {
    id: 3,
    title: "Ship Ticket Buy & Sell Web Application",
    category: "web",
    badge: "Web Application",
    period: "Feb 2024 – Jun 2024",
    role: "Web Developer | Front-End",
    description:
      "Platform web pemesanan dan penjualan tiket kapal online yang dirancang dengan antarmuka bersih dan responsif, memudahkan pengguna dalam mencari jadwal dan melakukan transaksi tiket secara praktis.",
    tags: ["Laravel", "PHP", "MySQL", "JavaScript", "Responsive UI", "Figma"],
    github: "https://github.com/anangsy29",
    highlight: false,
  },
  {
    id: 4,
    title: "Mobile Credit Buy & Sell Platform",
    category: "web",
    badge: "Web Application",
    period: "Sep 2023 – Dec 2023",
    role: "Web Developer | Front-End | Team Leader",
    description:
      "Aplikasi web transaksi pembelian pulsa dengan fokus kemudahan alur belanja bagi pengguna, tampilan adaptif di perangkat mobile maupun desktop, serta kepemimpinan tim desain antarmuka.",
    tags: ["PHP", "HTML5/CSS3", "JavaScript", "UI/UX", "Team Leadership"],
    github: "https://github.com/anangsy29",
    highlight: false,
  },
  {
    id: 5,
    title: "Interactive Modern Portfolio",
    category: "web",
    badge: "Frontend Engineering",
    period: "2025 – 2026",
    role: "Fullstack / Frontend Developer",
    description:
      "Website portofolio pribadi interaktif dengan transisi mulus, mode Dark & Light adaptif (radial theme switcher), komponen modular, dan performa tinggi berbasis Next.js App Router dan Tailwind CSS.",
    tags: ["Next.js 15", "React 19", "Tailwind CSS", "Turbopack", "JavaScript"],
    github: "https://github.com/anangsy29",
    highlight: false,
  },
];

export const skillsData = [
  {
    category: "Programming & Frameworks",
    iconName: "code",
    skills: ["PHP", "Laravel", "JavaScript (ES6+)", "Next.js", "React", "HTML5 & CSS3", "Tailwind CSS", "Dart", "Flutter", "Python Basics"],
  },
  {
    category: "Database & Cloud Integration",
    iconName: "database",
    skills: ["MySQL", "Database Design & Migration", "RESTful API", "Firebase (Firestore/FCM)", "CRUD Architecture"],
  },
  {
    category: "IoT & Embedded Systems",
    iconName: "cpu",
    skills: ["ESP8266 Microcontroller", "ESP32", "RFID RC522 Sensor", "C / C++", "Arduino IDE", "Hardware-to-Cloud Integration"],
  },
  {
    category: "Tools, Design & Soft Skills",
    iconName: "tool",
    skills: ["Git & GitHub", "VS Code", "Figma", "Draw.io", "Team Leadership", "Technical Documentation", "Quality Testing", "Time Management"],
  },
];

export const certifications = [
  {
    id: 0,
    title: "Certified Fullstack Developer Associate (CFDA)",
    issuer: "Logical Operations",
    date: "Juli 2026",
    badge: "Sertifikasi Internasional",
    desc: "Standar kompetensi profesional dalam arsitektur pengembangan web fullstack, frontend, backend API, dan manajemen database.",
    image: "/images/cert-cfda.jpeg",
  },
  {
    id: 1,
    title: "TOEIC Listening & Reading Test — Score: 495",
    issuer: "Politeknik Negeri Batam",
    date: "Agustus 2026 (Berlaku s/d Agu 2028)",
    badge: "Kemampuan Bahasa Inggris",
    desc: "Listening: 330, Reading: 165. Penguasaan komunikasi bahasa Inggris dalam lingkungan kerja profesional dan teknis.",
    image: "/images/cert-toeic.jpeg",
  },
  {
    id: 2,
    title: "Sertifikat Magang Unit Transformasi Digital",
    issuer: "Politeknik Negeri Batam",
    date: "Februari 2026",
    badge: "Pengalaman Industri Kampus",
    desc: "Penyelesaian program magang 6 bulan sebagai Web Developer dalam migrasi sistem informasi anggaran kampus.",
    image: "/images/cert-magang.jpeg",
  },
  {
    id: 3,
    title: "Peserta IdFest 2024: \"DNS & Internet Governance\"",
    issuer: "PANDI, ITEBA & Politeknik Negeri Batam",
    date: "November 2024",
    badge: "Seminar & Workshop",
    desc: "Partisipasi dalam tata kelola infrastruktur internet, domain nama sistem (DNS), dan keamanan digital tingkat nasional.",
    image: "/images/cert-idfest.jpeg",
  },
  {
    id: 4,
    title: "Peserta Online Class Microsoft Excell For Warehouse",
    issuer: "AmanExcel",
    date: "November 2026",
    badge: "Certificate of Participation (2-Hour Training)",
    desc: "Completed an online class covering warehouse administration processes, inventory database management, inbound and outbound goods tracking, and automated stock monitoring using Microsoft Excel",
    image: "/images/cert-excelwarehouse.jpg",
  },
];
