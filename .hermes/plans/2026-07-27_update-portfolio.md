# Update Portfolio Hasbi1605.github.io Implementation Plan

**Goal:** Menambahkan data kompetisi esai nasional (INNECTION 2026) dan sertifikatnya ke galeri portofolio Hasbi.

**Architecture:** Modifikasi data JSON statis.

**Tech Stack:** Next.js (JSON data driven).

---

### Task 1: Tambahkan Data Galeri Baru ke gallery-data.json

**Objective:** Masukkan entri baru untuk sertifikat Lomba Esai INNECTION 2026.

**Files:**
- Modify: `public/data/gallery-data.json`

**Proposed JSON Entry:**
```json
{
  "id": 8,
  "images": [
    "/images/gallery/innection/cert.jpg"
  ],
  "title": "Lomba Esai Mahasiswa Tingkat Nasional INNECTION 2026 - Peserta",
  "description": "Mengikuti Lomba Esai Mahasiswa Tingkat Nasional INNECTION 2026 yang diselenggarakan oleh Program Studi Pendidikan IPS, Fakultas Ilmu Tarbiyah dan Keguruan UIN Syarif Hidayatullah Jakarta.",
  "category": "Competition",
  "date": "2026"
}
```

---

### Task 2: Verifikasi & Build

**Objective:** Jalankan build lokal untuk memastikan tidak ada error parser JSON atau TypeScript.

**Commands:**
```bash
npm run build
```
