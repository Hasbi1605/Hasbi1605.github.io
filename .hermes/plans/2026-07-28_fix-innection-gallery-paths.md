# Proposal: Fix Broken Image Paths for INNECTION in Gallery Data

**Goal:** Memperbaiki gambar yang pecah (broken image) pada item galeri kompetisi INNECTION dengan memperbarui ekstensi path-nya ke format WebP di `gallery-data.json`.

---

### Analisis Akar Masalah:
*   *Akar Masalah:* Pada file data galeri `gallery-data.json` bagian item `id: 8`, list gambar masih menunjuk ke file lama berformat JPG:
    ```json
    "images": [
      "/images/gallery/innection/poster.jpg",
      "/images/gallery/innection/cert.jpg"
    ]
    ```
*   Padahal, file JPG tersebut sudah kita hapus dan ganti fisiknya dengan WebP (`poster.webp` dan `cert.webp`). Inilah mengapa gambar galeri INNECTION pecah saat diakses di browser.

---

### Perubahan Kode yang Diusulkan:

Pada `public/data/gallery-data.json` (bagian `id: 8`):

*   *Sebelum:*
    ```json
        {
          "id": 8,
          "images": [
            "/images/gallery/innection/poster.jpg",
            "/images/gallery/innection/cert.jpg"
          ],
          "title": "INNECTION 2026 Essay Competition - 4th Winner",
    ```
*   *Sesudah:*
    ```json
        {
          "id": 8,
          "images": [
            "/images/gallery/innection/poster.webp",
            "/images/gallery/innection/cert.webp"
          ],
          "title": "INNECTION 2026 Essay Competition - 4th Winner",
    ```

---

### Konfirmasi:
Apakah Anda menyetujui perubahan ekstensi path gambar ke WebP ini? Jika setuju, silakan konfirmasi untuk langsung diterapkan.
