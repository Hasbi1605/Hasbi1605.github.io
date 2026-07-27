# Update Portfolio Hasbi - INNECTION 2026 & CIVIC-Connect

**Goal:** Menambahkan pencapaian Juara 4 Lomba Esai Nasional INNECTION 2026, detail project platform CIVIC-Connect, serta media pendukung (sertifikat dan poster pemenang) ke dalam portofolio `Hasbi1605.github.io`.

**Architecture:** Modifikasi data JSON statis (work-data, gallery-data) dan komponen Experience Next.js.

**Tech Stack:** Next.js (App Router), Tailwind CSS.

---

### Task 1: Tambahkan Data Project CIVIC-Connect ke `work-data.json`

**Objective:** Membuat halaman detail project `/work/civic-connect` secara dinamis.

**Files:**
- Modify: `public/data/work-data.json`

**Proposed JSON Entry:**
```json
    {
      "image": "/images/gallery/innection/poster.jpg",
      "title": "CIVIC-Connect (National Essay & Prototype)",
      "client": "INNECTION 2026 - UIN Syarif Hidayatullah Jakarta",
      "slug": "civic-connect",
      "description": "Won 4th Place in the National Student Essay Competition. Developed the functional prototype 'CIVIC-Connect' using Laravel, MySQL, and Tailwind to combat information disruption and digital democracy crisis.",
      "longDescription": "CIVIC-Connect is a web-based integration platform designed as a data-driven collaboration ecosystem for students. It connects information verification, academic analysis, and policy brief formulation. The project was proposed in a national essay competition at UIN Syarif Hidayatullah Jakarta and accompanied by a functional prototype built using Laravel, featuring a Hoax Buster Center (collaborative fact-checking via crowdsourcing), L.A.B Room (structured research & logic gates), and Policy Lab (open policy brief formulation). Verified using institutional-based KYA (Know Your Academician) authentication.",
      "techStack": ["Laravel", "PHP", "MySQL", "Tailwind", "Bootstrap", "Git"],
      "features": [
        "Hoax Buster Center (collaborative crowdsourced fact-checking with gamification leaderboard)",
        "L.A.B Room (Habermas deliberative democracy workspace with Logic Gate System)",
        "Policy Lab (open bank of structured policy brief recommendations)",
        "KYA (Know Your Academician) institutional authentication via KTM/KTD validation",
        "Anonymous Access Mode for public transparency"
      ],
      "youtubeUrl": "",
      "githubUrl": "https://github.com/Hasbi1605/CivicConnetct.git",
      "liveUrl": "https://civicconnetct.onrender.com",
      "screenshots": [
        "/images/gallery/innection/poster.jpg",
        "/images/gallery/innection/cert.jpg"
      ],
      "year": "2026",
      "role": "Fullstack Developer & Essay Writer"
    }
```

---

### Task 2: Tambahkan Data Galeri Baru ke `gallery-data.json`

**Objective:** Menampilkan bukti sertifikat kepesertaan dan poster pemenang pada section galeri.

**Files:**
- Modify: `public/data/gallery-data.json`

**Proposed JSON Entries:**
```json
    {
      "id": 8,
      "images": [
        "/images/gallery/innection/cert.jpg"
      ],
      "title": "INNECTION 2026 National Essay Certificate",
      "description": "Participation certificate for the National Student Essay Competition INNECTION 2026, organized by IPS Education Department, Faculty of Tarbiyah and Teacher Training, UIN Syarif Hidayatullah Jakarta.",
      "category": "Certification",
      "date": "2026"
    },
    {
      "id": 9,
      "images": [
        "/images/gallery/innection/poster.jpg"
      ],
      "title": "INNECTION 2026 Essay Competition - 4th Winner",
      "description": "Official announcement poster of the National Student Essay Competition INNECTION 2026, placing 4th among national participants.",
      "category": "Competition",
      "date": "2026"
    }
```

---

### Task 3: Tambahkan Pengalaman ke Komponen `ExperienceSec`

**Objective:** Memperbarui daftar pengalaman kerja/riset di landing page.

**Files:**
- Modify: `src/app/components/home/experience-sec/index.tsx`

**Proposed Entry (add to top of the list):**
```typescript
    {
      year: "Apr 2026 - May 2026",
      title: "Fullstack Web Developer & Research Writer",
      company: "National Essay Competition - INNECTION 2026",
      type: "Competition Project",
      description:
        "Authored a data-driven policy research essay and developed a functional web platform prototype 'CIVIC-Connect' using Laravel, Tailwind, and MySQL. Secured 4th Place nationally among participants.",
      techStack: ["laravel", "mysql", "bootstrap", "javascript"],
    }
```

---

### Task 4: Verifikasi & Build

**Objective:** Pastikan portofolio Next.js lolos kompilasi secara utuh.

**Commands:**
```bash
npm run build
```
