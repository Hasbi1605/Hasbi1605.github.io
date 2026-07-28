# Proposal: Update Project Titles for ISTURA and ISTA AI

**Goal:** Menyesuaikan judul proyek ISTURA agar lebih presisi dan memperluas sub-judul ISTA AI di file `work-data.json` agar mencerminkan fungsionalitasnya yang luas (bukan hanya asisten RAG, tapi juga online editor & prompt generator).

---

### Koreksi & Brainstorming Judul:

1.  **ISTURA App:**
    *   *Sebelum:* `"title": "ISTURA - Booking Kunjungan Istana Rakyat"`
    *   *Rekomendasi:* `"title": "ISTURA - Booking Kunjungan Istana Untuk Rakyat"` (Sesuai masukan Anda, menambahkan kata "Untuk").
2.  **ISTA AI:**
    *   *Sebelum:* `"title": "ISTA AI - Internal Document Assistant"`
    *   *Analisis:* Fungsi ISTA AI sangat komprehensif, mencakup:
        *   RAG AI Assistant (percakapan berbasis berkas).
        *   Collaborative Document Workspace (OnlyOffice Online Editor).
        *   Prompt Studio Generator (Prompy Studio).
        *   Staf & Admin Management.
    *   *Rekomendasi Judul/Sub-judul Baru:*
        *   `"title": "ISTA AI - Smart Workspace & Document Assistant"` ATAU
        *   `"title": "ISTA AI - Intelligent Document Workspace & AI Assistant"` (Lebih representatif karena mencakup workspace pengerjaan dokumen kolaboratif sekaligus asisten kecerdasan buatan).

---

### Perubahan Kode yang Diusulkan:

Pada `public/data/work-data.json`:

*   **ISTURA:**
    ```json
    "title": "ISTURA - Booking Kunjungan Istana Untuk Rakyat"
    ```
*   **ISTA AI:**
    ```json
    "title": "ISTA AI - Intelligent Document Workspace & AI Assistant"
    ```

---

### Konfirmasi:
Apakah Anda menyetujui perubahan judul-judul proyek ini? Jika setuju, silakan konfirmasi untuk langsung diterapkan.
