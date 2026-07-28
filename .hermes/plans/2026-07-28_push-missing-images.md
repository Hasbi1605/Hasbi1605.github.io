# Proposal: Push Missing WebP Image Files to Remote

**Goal:** Memperbaiki gambar yang pecah (broken image) pada proyek ISTA AI dengan mem-push file gambar WebP yang tertinggal di lokal.

---

### Analisis Akar Masalah:
*   *Akar Masalah:* Saat menjalankan `git status`, file gambar `.webp` yang baru dikonversi di folder `public/images/gallery/internship/` statusnya masih **untracked** (belum masuk git staging). 
*   Karena file-file gambar tersebut belum di-commit dan di-push ke GitHub, server GitHub Pages tidak memiliki file fisik gambar tersebut (mengembalikan halaman HTML 404 ketika di-curl, itulah mengapa ukurannya 12KB berbentuk file teks HTML).

---

### Rencana Tindakan:
1. Menambahkan file gambar yang baru ke Git.
2. Melakukan commit dan push ke remote repository.
3. Memverifikasi build dan run deployment di GitHub Pages.

---

### Konfirmasi:
Apakah Anda menyetujui rencana untuk mem-push file gambar ini ke server? Jika setuju, silakan konfirmasi untuk langsung diterapkan.
