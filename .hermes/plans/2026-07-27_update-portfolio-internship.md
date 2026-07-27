# Update Portfolio Hasbi - Internship Experience & Certificates

**Goal:** Menambahkan pengalaman magang 3 bulan (April - Juli) dan sertifikat pendukung (Istana & Olimpus) ke portofolio.

**Architecture:** Modifikasi data JSON statis (gallery-data) dan komponen Experience.

**Tech Stack:** Next.js (App Router), Tailwind CSS.

---

### Task 1: Dapatkan Dokumen & Verifikasi Informasi

**Objective:** Menerima file sertifikat dari user untuk ekstraksi data akurat (nama instansi, deskripsi tugas, pencapaian).

*Status:* Menunggu pengiriman file sertifikat (Istana & Olimpus) dari user.

---

### Task 2: Salin File Gambar Baru

**Objective:** Memindahkan aset foto kelompok magang ke direktori publik.

- Group Photo: `/home/ubuntu/workspace/repos/Hasbi1605.github.io/public/images/gallery/internship_group.jpg` (Sudah disalin)
- Sertifikat Istana: `public/images/gallery/istana_cert.jpg` (Akan disalin setelah dikirim)
- Sertifikat Olimpus: `public/images/gallery/olimpus_cert.jpg` (Akan disalin setelah dikirim)

---

### Task 3: Tambahkan Data ke `gallery-data.json`

**Objective:** Mendaftarkan foto magang dan sertifikat ke galeri.

**Proposed Entry (Append to list):**
```json
    {
      "id": 9,
      "images": [
        "/images/gallery/internship_group.jpg"
      ],
      "title": "State Palace Internship Cohort",
      "description": "Internship group photo at the Yogyakarta Presidential Palace porch with fellow interns.",
      "category": "Internship",
      "date": "2026"
    }
```
*(Tambahan entri sertifikat menyusul setelah ekstraksi)*

---

### Task 4: Tambahkan Pengalaman ke Komponen `ExperienceSec`

**Objective:** Mendaftarkan magang sebagai pengalaman utama baru di bagian paling atas.

**Proposed Entry (add to top of the list):**
```typescript
    {
      year: "Apr 2026 - Jul 2026",
      title: "Web Developer Intern",
      company: "Yogyakarta Presidential Palace (Istana Kepresidenan Yogyakarta)",
      type: "Internship",
      description:
        "[Deskripsi magang & pencapaian teknis dari sertifikat akan dimasukkan di sini]",
      techStack: ["laravel", "mysql", "javascript", "bootstrap"], // tech stack dinilai pas dengan Istura-app (Laravel/React/Tailwind)
    }
```

---

### Task 5: Verifikasi & Build

**Objective:** Menjalankan kompilasi produksi untuk memastikan tidak ada error.

```bash
npm run build
```
