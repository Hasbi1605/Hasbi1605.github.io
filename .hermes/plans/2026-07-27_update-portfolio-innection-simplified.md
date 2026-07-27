# Update Portfolio Hasbi - INNECTION 2026 Essay (Simplified)

**Goal:** Menambahkan pencapaian Juara 4 Lomba Esai Nasional INNECTION 2026, sertifikat, dan poster pemenang ke dalam galeri portofolio dan daftar pengalaman Hasbi.

**Architecture:** Modifikasi data JSON statis (gallery-data) dan komponen Experience Next.js.

**Tech Stack:** Next.js (App Router), Tailwind CSS.

---

### Task 1: Tambahkan Data Galeri Baru ke `gallery-data.json`

**Objective:** Menampilkan bukti sertifikat kepesertaan dan poster pemenang pada section galeri.

**Files:**
- Modify: `public/data/gallery-data.json`

**Proposed JSON Entries (Append to list):**
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

### Task 2: Tambahkan Pengalaman ke Komponen `ExperienceSec`

**Objective:** Memperbarui daftar pengalaman kerja/riset di landing page.

**Files:**
- Modify: `src/app/components/home/experience-sec/index.tsx`

**Proposed Entry (add to top of the list):**
```typescript
    {
      year: "Apr 2026 - May 2026",
      title: "Research Essay Writer",
      company: "National Essay Competition - INNECTION 2026",
      type: "Competition Project",
      description:
        "Authored a data-driven policy research essay titled 'CIVIC LAB: Data-Driven Literacy Analysis Method to Fight Information Disruption and Digital Democracy Crisis' with team members from UGM. Secured 4th Place nationally.",
      techStack: ["html", "css", "sql", "oracle"], // placeholder or standard essay tools, or we can use empty array / relevant ones
    }
```

---

### Task 3: Verifikasi & Build

**Objective:** Pastikan portofolio Next.js lolos kompilasi secara utuh.

**Commands:**
```bash
npm run build
```
