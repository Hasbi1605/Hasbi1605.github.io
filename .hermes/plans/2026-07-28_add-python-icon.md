# Proposal: Add Python Icon to Internship Experience

**Goal:** Menambahkan ikon Python pada daftar teknologi magang di halaman utama portofolio.

---

### Perubahan Kode yang Diusulkan:

1.  **Pada `src/app/components/home/experience-sec/index.tsx`:**
    *   Tambahkan `python` ke dalam objek `techIcons`:
        ```typescript
        python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        ```
    *   Tambahkan `"python"` ke dalam array `techStack` pada entri magang Istana Kepresidenan:
        ```typescript
        techStack: ["laravel", "python", "mysql", "javascript", "bootstrap"],
        ```

---

### Konfirmasi:
Apakah Anda menyetujui perubahan ini untuk langsung diterapkan?
*(Mohon balas "OK" atau berikan masukan).*
