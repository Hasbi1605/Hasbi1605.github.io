# Proposal: Convert Main Profile Photo to WebP

**Goal:** Mengonversi foto profil utama dari format PNG ke WebP (`banner-img.webp`) untuk optimasi performa *loading* dan ukuran file yang lebih ringan di landing page, serta memperbarui referensinya di kode React.

---

### Alasan Penggunaan WebP:
*   *Aspek Performa:* File PNG hasil konversi sebelumnya cukup berat. Format WebP dapat memotong ukuran file hingga 70-80% lebih kecil tanpa kehilangan kualitas yang terlihat.
*   *Aspek Konsistensi:* Menyelaraskan seluruh aset gambar baru di portofolio Hasbi agar seragam menggunakan ekstensi modern `.webp`.

---

### Rencana Tindakan:

1.  **Konversi Fisik File:**
    Mengonversi `img_572570c5bba2.jpg` (foto almamater asli dari cache) ke `/public/images/home/banner/banner-img.webp` menggunakan library Python Pillow dengan kualitas kompresi 85%.
2.  **Hapus File PNG Lama:**
    Menghapus file `public/images/home/banner/banner-img.png` agar repositori tetap bersih.
3.  **Update Referensi Kode:**
    Melakukan modifikasi rute pemanggilan gambar di `src/app/components/home/hero-section/index.tsx` dari `banner-img.png` menjadi `banner-img.webp`.

---

### Konfirmasi:
Apakah Anda menyetujui rencana optimasi ke format WebP ini? Jika setuju, silakan konfirmasi untuk langsung diterapkan.
