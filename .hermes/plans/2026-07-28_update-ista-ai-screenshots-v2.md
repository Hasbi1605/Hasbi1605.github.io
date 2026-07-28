# Proposal: Add New ISTA AI UI Screenshots to Project Details

**Goal:** Mengganti foto-foto non-UI (seperti foto rapat/grup) pada halaman detail proyek ISTA AI di `work-data.json` dengan tangkapan layar UI fungsional ISTA AI yang baru dikirim.

---

### Aset Baru yang Dikonversi:
1.  `ista_ai_home.webp` (Landing Page)
2.  `ista_ai_login.webp` (Portal Masuk Staf/Admin)
3.  `ista_ai_chat.webp` (Antarmuka Chat RAG & Riwayat)
4.  `ista_ai_editor.webp` (Fitur Asisten Memo & Online Editor OnlyOffice)
5.  `ista_ai_prompy.webp` (Prompy Studio - Pembuat Prompt AI)
6.  `ista_ai_profile.webp` (Keamanan Profil Staf/Admin)

---

### Perubahan Kode yang Diusulkan:

Pada `public/data/work-data.json` (bagian `ista-ai`):

*   *Sebelum:*
    ```json
          "screenshots": [
            "/images/gallery/internship/selfie.webp",
            "/images/gallery/internship/working.webp",
            "/images/gallery/internship/group_gathering.webp"
          ]
    ```
*   *Sesudah:*
    ```json
          "screenshots": [
            "/images/gallery/internship/ista_ai_home.webp",
            "/images/gallery/internship/ista_ai_login.webp",
            "/images/gallery/internship/ista_ai_chat.webp",
            "/images/gallery/internship/ista_ai_editor.webp",
            "/images/gallery/internship/ista_ai_prompy.webp",
            "/images/gallery/internship/ista_ai_profile.webp"
          ]
    ```

---

### Konfirmasi:
Apakah Anda menyetujui pergantian daftar tangkapan layar UI ISTA AI di atas? Jika setuju, silakan konfirmasi untuk langsung diterapkan.
