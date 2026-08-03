# Laravel Dashboard Builder - Roadmap & Recommended Updates 🚀

## 📌 Executive Summary
Dokumen ini berisi rangkuman rekomendasi pembaruan, bug fix yang telah diselesaikan (termasuk penanganan Inertia JSON response error), serta roadmap pengembangan versi mendatang untuk **`laravel-dashboard-builder`** (`manggala/laravel-dashboard-builder`).

---

## 🛠️ 1. Issue Teridentifikasi & Solusi (Terbaru)

### 🐛 Issue: Inertia JSON Response Error (`X-Inertia` Header Response)
* **Deskripsi Masalah**:
  Ketika melakukan permintaan HTTP (seperti POST, PUT, DELETE, Favorite, Duplicate) menggunakan `router` dari `@inertiajs/react`, Inertia mengharapkan response berupa **Inertia Redirect** (`RedirectResponse` / `redirect()->back()`). Sebelumnya, controller mengembalikan **Plain JSON** (`response()->json(...)`), sehingga memicu error:
  > *"All Inertia requests must receive a valid Inertia response, however a plain JSON response was received."*

* **Penyebab Utama**:
  Method `store`, `update`, `destroy`, `duplicate`, `archive`, dan `favorite` di `DashboardController.php` selalu mengembalikan `JsonResponse` tanpa mengecek apakah request berasal dari Inertia. Selain itu, pada method `update()`, data array `layout` widget belum di-sinkronkan ke tabel database `dashboard_widgets`.

* **Solusi Yang Telah Diterapkan**:
  1. Menambahkan pengecekan header `$request->header('X-Inertia')`. Jika request berasal dari Inertia, controller mengembalikan `redirect()->back()` atau `redirect()->route(...)`.
  2. Jika request berasal dari REST API murni (non-Inertia / Postman / Mobile App), controller tetap mengembalikan `JsonResponse`.
  3. Menambahkan **sinkronisasi otomatis array `layout`** ke tabel database `dashboard_widgets` saat method `update()` dipanggil.

---

## 🚀 2. Rekomendasi Pembaruan Versi Mendatang (v1.1 / v2.0)

### 📦 1. Auto-Publish / Auto-Register Inertia Pages (Zero Boilerplate Setup)
* **Masalah**: Pengguna paket saat ini harus membuat secara manual file halaman React di folder `resources/js/pages/DashboardBuilder/` di aplikasi utama.
* **Solusi**: Tambahkan tag publish Artisan `php artisan dashboard:publish --tag=views` atau sediakan helper resolver agar halaman `Index.tsx`, `Create.tsx`, `Show.tsx`, dan `Edit.tsx` ter-publish / ter-register secara otomatis.

### 🎨 2. Interactive Drag-and-Drop & Resizing Grid (`react-grid-layout`)
* **Masalah**: Pengaturan posisi (`x`, `y`) dan ukuran (`w`, `h`) widget di canvas editor masih diisi manual lewat input angka di RightSidebar.
* **Solusi**: Integrasikan library **`react-grid-layout`** atau HTML5 Drag-and-Drop di `CanvasGrid.tsx` agar user dapat menggeser (drag) dan membesarkan/mengecilkan (resize handle) widget secara visual.

### 📅 3. Filter Tanggal Global (Global Date Range Picker)
* **Masalah**: Widget mengambil data tanpa filter rentang waktu terpusat.
* **Solusi**: Tambahkan Date Range Picker global pada `TopToolbar` (opsi: *Today*, *Last 7 Days*, *This Month*, *Custom Date*). Perubahan tanggal di toolbar akan secara otomatis memperbarui dataset pada seluruh widget di dashboard.

### 🔍 4. Visual Query Builder Inspector di UI
* **Masalah**: Pengaturan Data Source di inspector sebelah kanan masih konseptual.
* **Solusi**: Sediakan form visual di `RightSidebar` saat memilih Data Source *Eloquent* atau *Query Builder*:
  * Dropdown Nama Model / Tabel.
  * Dropdown Fungsi Agregasi (`COUNT`, `SUM`, `AVG`, `MAX`, `MIN`).
  * Dropdown Kolom Target & Date Grouping (`groupByDay`, `groupByMonth`).

### 📄 5. Export Dashboard ke PDF & PNG Image
* **Masalah**: Fitur export yang ada saat ini baru sebatas export/import JSON schema.
* **Solusi**: Tambahkan fitur ekspor tampilan canvas ke format **PDF** atau gambar **PNG** menggunakan `html2canvas` / `jspdf`.

### 🔒 6. Role-Based Access Control (RBAC) & Fine-Grained Authorization
* **Masalah**: Hak akses pengeditan dashboard belum terintegrasi ke Laravel Policy.
* **Solusi**: Integrasikan Gate/Policy Laravel (`Dashboard::canView($user)`, `Dashboard::canEdit($user)`) untuk membedakan hak akses antara pembaca (Viewer) dan perancang dashboard (Editor/Superadmin).
