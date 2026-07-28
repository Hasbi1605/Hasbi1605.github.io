# Proposal: Add ISTA AI Landing Page Screenshot to Project Details

**Goal:** Menambahkan gambar screenshot landing page ISTA AI (`ista_ai_home.webp`) ke dalam daftar screenshots proyek ISTA AI di `work-data.json`.

---

### Perubahan yang Diusulkan:

1.  **Gambar baru:** `ista_ai_home.webp` sudah dikonversi dan disimpan ke `/public/images/gallery/internship/`.
2.  **Pada `public/data/work-data.json` (bagian `ista-ai`):**
    Tambahkan gambar baru tersebut ke dalam array `screenshots`:
    ```json
          "screenshots": [
            "/images/gallery/internship/ista_ai_home.webp",
            "/images/gallery/internship/selfie.webp",
            "/images/gallery/internship/working.webp",
            "/images/gallery/internship/group_gathering.webp"
          ],
    ```

---

### Konfirmasi:
Apakah Anda menyetujui penambahan tangkapan layar UI ISTA AI ini? Jika setuju, silakan konfirmasi untuk langsung diterapkan.
