# Update Portfolio Hasbi - ISTURA App & ISTA AI Integration (Plan)

**Goal:** Mengganti deskripsi magang "SIKLUS Museum" dengan menyertakan dua sistem ril: "ISTURA App" dan "ISTA AI" di data galeri, data proyek (`work-data.json`), dan komponen pengalaman (`ExperienceSec`) dengan aset format `.webp`.

**Architecture:** Modifikasi data JSON statis (work-data, gallery-data) dan komponen visual landing page.

**Tech Stack:** Next.js (App Router), Tailwind CSS.

---

### Analisis & Brainstorming Detail Sistem:

1.  **ISTURA App (Istana Untuk Rakyat)**
    *   **Deskripsi:** Monolit Laravel 13 + React 19 (Vite/TypeScript) satu origin untuk booking kunjungan Istana Kepresidenan Yogyakarta. Memiliki sistem otorisasi admin + 2FA, dashboard manajemen jadwal, visualisasi data masukan/rating (feedback) pengunjung, realtime via Reverb, dan database MySQL.
    *   **Aset WebP baru:** `istura_home_v3.webp` (landing page), `istura_login.webp` (halaman masuk admin), `istura_dashboard.webp` (ringkasan dashboard admin), `istura_booking.webp` (tabel/split data booking), `istura_schedule.webp` (pengaturan slot tanggal admin), `istura_schedule_public.webp` (halaman cek slot publik), `istura_feedback.webp` (detail feedback ulasan pengunjung), `istura_wizard.webp` (wizard pendaftaran), dan `istura_pop_up.webp` (banner perorangan gratis).
2.  **ISTA AI (Asisten AI Internal)**
    *   **Deskripsi:** Monorepo hybrid Laravel (Livewire/Volt + Blade + Alpine.js) + FastAPI (python-ai) untuk sistem RAG (Retrieval-Augmented Generation) atas dokumen internal staf Istana Kepresidenan Yogyakarta. Dilengkapi dengan ingest dokumen privat, pemrosesan embeddings/vektor (ChromaDB), model cascade router (menghubungkan ke GitHub Models/OpenAI), dan OnlyOffice integration.
    *   **Aset WebP baru:** `selfie.webp` (foto bersama di ruang rapat dengan lanyard "Republik Indonesia" terlihat) dan `working.webp` (foto pengerjaan setup software di meja kerja).

---

### Rencana Tindakan:

#### Task 1: Tambahkan Kedua Sistem ke `public/data/work-data.json`
Kita akan menambahkan 2 proyek baru ke daftar `workData` agar Hasbi memiliki halaman detail proyek yang sangat komprehensif.

*Draf Entri JSON untuk ISTURA App:*
```json
    {
      "image": "/images/gallery/internship/istura_home_v3.webp",
      "title": "ISTURA - Booking Kunjungan Istana Rakyat",
      "client": "Istana Kepresidenan Yogyakarta (Kemensetneg RI)",
      "slug": "istura-app",
      "description": "Developed a secure visitor booking web application for the Presidential Palace Yogyakarta using Laravel 13, React 19 (Vite/TypeScript), and Reverb for realtime updates.",
      "longDescription": "ISTURA (Istana Untuk Rakyat) is an enterprise booking system developed during my IT/IS internship at the Yogyakarta Presidential Palace. It replaces manual scheduling with a web platform. The user side features an 8-step wizard pendaftaran, public schedule checking, and feedback form. The admin dashboard manages operational schedules, visitor approvals, and internal ratings. Supported by Laravel 13, React 19, Reverb (WebSockets), and MySQL database.",
      "techStack": ["Laravel", "React", "TypeScript", "MySQL", "Tailwind", "Git"],
      "features": [
        "Interactive 8-step booking wizard with client-side state management",
        "Admin dashboard with real-time statistics (waiting, approved, finished)",
        "Schedule manager with custom holiday settings and time slot toggle",
        "Feedback analysis page with detailed charts, tags, and multi-criteria ratings",
        "Sanctum-based admin authentication with 2FA security"
      ],
      "youtubeUrl": "",
      "githubUrl": "https://github.com/Hasbi1605/Istura-app.git",
      "liveUrl": "",
      "screenshots": [
        "/images/gallery/internship/istura_home_v3.webp",
        "/images/gallery/internship/istura_login.webp",
        "/images/gallery/internship/istura_dashboard.webp",
        "/images/gallery/internship/istura_booking.webp",
        "/images/gallery/internship/istura_schedule.webp",
        "/images/gallery/internship/istura_schedule_public.webp",
        "/images/gallery/internship/istura_feedback.webp",
        "/images/gallery/internship/istura_wizard.webp",
        "/images/gallery/internship/istura_pop_up.webp"
      ],
      "year": "2026",
      "role": "Fullstack Developer"
    }
```

*Draf Entri JSON untuk ISTA AI:*
```json
    {
      "image": "/images/gallery/internship/selfie.webp",
      "title": "ISTA AI - Internal Document Assistant",
      "client": "Istana Kepresidenan Yogyakarta (Kemensetneg RI)",
      "slug": "ista-ai",
      "description": "Co-developed an AI assistant platform for internal Presidential Palace documents. Features document ingestion, RAG, and streaming responses.",
      "longDescription": "ISTA AI is an intelligent workspace solution built for internal staff at the Presidential Palace Yogyakarta. It uses a hybrid architecture: a Laravel frontend (Livewire, Alpine.js, Blade) for user authentication and file management, and a FastAPI (Python) backend to handle the heavy AI pipeline. Staf can upload private documents to be embedded (ChromaDB) and query the assistant with streaming SSE responses, using routed LLM engines (GitHub Models/OpenAI).",
      "techStack": ["Python", "FastAPI", "Laravel", "Livewire", "ChromaDB", "Alpine.js"],
      "features": [
        "Streaming chat interface using Server-Sent Events (SSE)",
        "Private document ingestion with token-aware chunking and embeddings",
        "RAG pipeline using local vector stores (ChromaDB)",
        "LLM model routing and cascade fallback system",
        "OnlyOffice API integration for online document editing"
      ],
      "youtubeUrl": "",
      "githubUrl": "https://github.com/Hasbi1605/ISTA-AI.git",
      "liveUrl": "",
      "screenshots": [
        "/images/gallery/internship/selfie.webp",
        "/images/gallery/internship/working.webp",
        "/images/gallery/internship/group_gathering.webp"
      ],
      "year": "2026",
      "role": "Co-Developer (AI Backend & Integration)"
    }
```

#### Task 2: Update `public/data/gallery-data.json`
Mengonsolidasi galeri magang (`id: 9`) agar menggunakan WebP yang bersih dari ISTURA App dan ISTA AI.

```json
    {
      "id": 9,
      "images": [
        "/images/gallery/internship/istura_home_v3.webp",
        "/images/gallery/internship/working.webp",
        "/images/gallery/internship/presentation.webp",
        "/images/gallery/internship/selfie.webp",
        "/images/gallery/internship/group_gathering.webp",
        "/images/gallery/internship/olimpus_portal.webp"
      ],
      "title": "IT/IS Information System Internship - Istana Kepresidenan Yogyakarta",
      "description": "3-month IT/IS internship under Kemensetneg RI. Contributed to the development of 'ISTURA App' (visitor booking system) and 'ISTA AI' (RAG document assistant).",
      "category": "Internship",
      "date": "2026"
    }
```

#### Task 3: Update `src/app/components/home/experience-sec/index.tsx`
Menyesuaikan deskripsi magang:
```typescript
      description:
        "Selected via Kemensetneg OLIMPUS program. Developed the 'ISTURA App' (visitor booking system using Laravel & React 19) and co-designed 'ISTA AI' (RAG-based AI assistant for internal documents using Laravel & FastAPI).",
```

#### Task 4: Verifikasi & Build
Menjalankan `npm run build` untuk memastikan integritas data.

---

### Konfirmasi Persetujuan:
Apakah Anda menyetujui detail implementasi di atas untuk langsung dijalankan ke codebase?
*(Mohon beri tahu jika ada koreksi kata-kata atau data).*
