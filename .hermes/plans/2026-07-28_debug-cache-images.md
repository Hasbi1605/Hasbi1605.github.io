# Proposal: Fix Cache and Path Resolution for Project Image Updates

**Goal:** Menganalisis mengapa gambar cover ISTA AI (`selfie.webp`) masih muncul alih-alih `ista_ai_home.webp` dan memperbaikinya secara tuntas.

---

### Analisis & Temuan Masalah:

1.  **Kondisi File `work-data.json` di Server:**
    Berdasarkan `curl` langsung ke `https://hasbi1605.github.io/data/work-data.json`, file JSON di server sudah terupdate dan menunjuk ke:
    ```json
    "image": "/images/gallery/internship/ista_ai_home.webp"
    ```
2.  **Lalu Mengapa Masih Foto Lama yang Muncul di Browser Anda?**
    *   **Penyebab A: Cache Browser.** 
        GitHub Pages memiliki headers `cache-control: max-age=600` (10 menit). Browser Anda menyimpan cache respons data JSON dari request sebelumnya.
    *   **Penyebab B: Cache Service Worker / Next.js Client Routing.**
        Next.js memelihara internal cache di client-side router.
    *   **Penyebab C: `getDataPath` mismatch di client side.**
        Pada `src/utils/image.ts`, fungsi `getDataPath` memotong path secara manual di sisi client:
        ```typescript
        const basePath = window.location.pathname.split("/")[1] || "";
        ```
        Jika dibuka di halaman sub-route atau jika basePath kosong, ini bisa mengambil asset secara tidak konsisten dari cache deployment lama.

---

### Rekomendasi Tindakan:

1.  **Cara Bersih di Client/Browser:**
    *   Lakukan **Hard Reload** (Ctrl + F5 di PC, atau hapus cache browser di menu setelan Chrome Android). Ini memaksa browser meminta file JSON paling baru dari server GitHub.
2.  **Menambahkan cache-busting di kode Next.js (Opsional):**
    Kita bisa menambahkan query parameter timestamp acak ke fetch data di `LatestWork.tsx` agar browser tidak pernah menggunakan cache lama saat mengambil data JSON:
    ```typescript
    const res = await fetch(getDataPath(`/data/work-data.json?t=${Date.now()}`));
    ```

---

### Konfirmasi:
1. Apakah Anda sudah mencoba Hard Reload / Clear Cache di HP?
2. Apakah kita perlu menambahkan cache-busting `?t=timestamp` di file `LatestWork.tsx` agar masalah cache browser seperti ini tidak terulang di masa depan? Silakan berikan instruksi sebelum dieksekusi.
