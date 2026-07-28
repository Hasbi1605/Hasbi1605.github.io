# Update Portfolio Hasbi - ISTA AI & ISTURA App Integration

**Goal:** Mengganti project "SIKLUS Museum" dengan dua sistem ril dari magang: "ISTURA App" dan "ISTA AI", memperbarui portofolio data dengan gambar format WebP, serta menyesuaikan daftar pengalaman.

**Architecture:** Modifikasi data JSON statis (work-data, gallery-data) dan komponen landing page (ExperienceSec).

**Tech Stack:** Next.js (App Router), Tailwind CSS.

---

### Analisis & Alternatif:
1.  **Daftar Project (work-data.json):**
    *   *Sebelumnya:* Hanya ada Barbershop POS, Minibox, Core Initiative, SchizoCheck, Dewa Motor, dan FTI UMBY.
    *   *Rekomendasi:* "SIKLUS Museum" tidak pernah didaftarkan ke `work-data.json` sebelumnya (kemarin disepakati hanya masuk ke Gallery & Experience). Namun, karena sekarang ada dua sistem ril (**ISTURA App** dan **ISTA AI**), keduanya sangat menjual untuk masuk ke **Projects & Works** (`work-data.json`).
    *   *Detail Istura App:* Sistem booking kunjungan Istana Kepresidenan Yogyakarta. Stack: Laravel 13, React 19, Reverb, MySQL.
    *   *Detail Ista AI:* Sistem asisten RAG AI berkas internal Istana. Stack: Laravel, Livewire, Alpine.js, FastAPI, ChromaDB, OpenAI/Github Models.
2.  **Daftar Pengalaman (ExperienceSec):**
    *   *Sebelumnya:* Menampilkan "Analis Sistem Informasi/IT Intern" dengan detail "SIKLUS Museum".
    *   *Rekomendasi:* Diperbarui untuk merefleksikan pengembangan platform "ISTURA App" dan "ISTA AI".
3.  **Aset Gambar:** Semua file gambar yang dikirim telah dikonversi secara lokal ke format `.webp` berkualitas tinggi dan efisien untuk web.

---

### Rencana Implementasi:

#### Task 1: Update `public/data/work-data.json`
Menghapus draf lama (jika ada) dan menambahkan dua entri project baru:
1.  **ISTURA App (Istana Untuk Rakyat)**
    *   Slug: `istura-app`
    *   Tech Stack: `["Laravel", "React", "MySQL", "Tailwind", "Git"]`
    *   Gambar Utama: `/images/gallery/internship/istura_home.webp`
2.  **ISTA AI (Asisten AI Internal)**
    *   Slug: `ista-ai`
    *   Tech Stack: `["Laravel", "FastAPI", "Python", "ChromaDB", "Livewire", "Alpine.js"]`
    *   Gambar Utama: `/images/gallery/internship/selfie.webp` (Menunggu screenshot UI ISTA AI dari user)

#### Task 2: Update `public/data/gallery-data.json`
Memperbarui item magang (`id: 9`) dengan list gambar format `.webp` yang bersih dan hanya merujuk ke sistem magang yang valid.
```json
    {
      "id": 9,
      "images": [
        "/images/gallery/internship/istura_home.webp",
        "/images/gallery/internship/working.webp",
        "/images/gallery/internship/presentation.webp",
        "/images/gallery/internship/selfie.webp",
        "/images/gallery/internship/group_gathering.webp",
        "/images/gallery/internship/olimpus_portal.webp"
      ],
      "title": "IT/IS Information System Internship - Istana Kepresidenan Yogyakarta",
      "description": "3-month internship under Kemensetneg RI. Developed 'ISTURA App' (visitor booking system) and 'ISTA AI' (internal document RAG system).",
      "category": "Internship",
      "date": "2026"
    }
```

#### Task 3: Update `src/app/components/home/experience-sec/index.tsx`
Mengubah teks deskripsi magang untuk fokus pada ISTURA App dan ISTA AI.
```typescript
      description:
        "Selected via Kemensetneg OLIMPUS program. Developed the 'ISTURA App' (visitor booking system using Laravel & React 19) and co-designed 'ISTA AI' (RAG-based AI assistant for internal documents using Laravel & FastAPI).",
```

#### Task 4: Konversi Gambar Lomba Esai ke WebP
Memperbarui `gallery-data.json` di bagian INNECTION (`id: 8`) agar menggunakan `.webp`:
*   `cert.jpg` -> `cert.webp`
*   `poster.jpg` -> `poster.webp`
