# Digitra — Web & AI Solutions (`digitra-umkm-platform`)

> **"Less Complexity. More Growth."**  
> Platform pemesanan, kustomisasi interaktif, dan showcase prototipe website siap pakai maupun *bespoke* untuk UMKM Indonesia oleh **Digitra — Web & AI Solutions**.

---

## 📌 Ringkasan Proyek

Proyek ini adalah portal resmi **Digitra** yang dirancang dengan pendekatan **Guided Multi-Page Funnel (*One Clear Action per Page*)** serta strategi **Unbundled Value & Fair Customization Pricing**. Tujuannya adalah memudahkan pemilik UMKM dalam:
1. Melihat kualitas website karya Digitra secara langsung (melalui *Unified Chameleon Living Hero*, *Interactive Gallery*, dan *Live Feature Sandbox*).
2. Memilih template berkarakter sesuai kategori bisnis mereka (`Harth Coffee`, `Hush Resto`, `Cedar Shoes`, `Barbearia Club`) di **Langkah 1 (`pilih-desain.html`)**.
3. Membandingkan perbedaan kualitas dan fungsionalitas antar **2 Paket Template** di **Langkah 2 (`pilih-paket.html`)** melalui *Live Demo* interaktif yang tersinkronisasi secara *real-time*:
   - **🎨 1. Paket Starter (`Rp 499.000` — Landing Page & Katalog Estetik):** Tetap menjaga standar estetika karya Digitra (palet warna & tipografi khas tema, *Split-Editorial Hero* HD, katalog produk foto HD, dan tombol chat WhatsApp manual per produk).
   - **✨ 2. Paket Complete All-In (`Rp 899.000` — Full Sistem & Interaksi, 2x Lebih Canggih):** Membuka **100% seluruh fitur & efek interaktif** tanpa ada yang dikunci (Pop-Up Kustomisasi Khas Kategori, Keranjang Pintar + Mesin Kode Voucher, Simulasi QRIS & Salin Rekening, Animasi Partikel Canvas, Generator Standee QR Meja Akrilik `#07`, Peta Fasilitas Live, & Sinkronisasi Google Sheets).
4. Memilih tingkat kustomisasi secara adil di **Langkah 3 (`kustomisasi.html`)**:
   - **🎨 Kustomisasi Minor & Brand (`GRATIS — Rp 0`):** Gratis ganti warna brand, font, logo, foto tempat, dan foto produk.
   - **👑 Upgrade Paket Pro — Kustomisasi Masif & Terima Beres (`+Rp 590.000`):** Rombak struktur layout/section sesuai SOP unik usaha, **Gratis Domain Resmi `.com`/`.id` (1 Tahun)**, bantuan input s/d 50 produk terima beres, serta menggratiskan seluruh *Add-On Satuan*.
   - **🧩 Add-On Satuan Opsional (Untuk Kustomisasi Minor):** Tambahan fleksibel (`Domain .com +Rp 185rb`, `Kustom Field Pop-Up +Rp 150rb`, `Multi-Cabang WA +Rp 200rb`).

---

## 🎨 Identitas Brand (Design System)

Seluruh halaman utama Digitra wajib mematuhi panduan visual berikut:
- **Nama Brand:** `Digitra` — `Web & AI Solutions`
- **Tagline Resmi:** *"Less Complexity. More Growth."*
- **Palet Warna Utama (65 / 25 / 10 Rule):**
  - **65% Midnight Navy:** `#0B1020` (Surface & Container Utama)
  - **25% Deep Black:** `#05070F` (Background Dasar & Kontras)
  - **10% Cloud White:** `#F5F7FF` (Tipografi Utama)
  - **Primary Brand Accents:** Digitra Cyan (`#00E5FF`) & Digitra Purple (`#8B5CF6`)
- **Tipografi:**
  - **Heading / Display:** `Sora` (600, 700, 800)
  - **Body Copy:** `Inter` (400, 500, 600, 700)
  - **Monospace / Code / Struk:** `JetBrains Mono` (500, 700)

---

## 📂 Struktur Direktori

```text
Digitra_Official_Web/
├── index.html                  # [Halaman 1] Landing Page Utama (Unified Navbar, Chameleon Living Hero, Galeri Karya & Live Sandbox)
├── pilih-desain.html           # [Halaman 2 - Langkah 1] Pemilihan Template Kategori UMKM atau Request Custom dari Nol
├── pilih-paket.html            # [Halaman 3 - Langkah 2] Komparasi Paket (Starter vs Complete vs Pro) via Embedded Live Demo
├── kustomisasi.html            # [Halaman 4 - Langkah 3] Form Preferensi Brand, Upload Foto UMKM (Live Preview), & Checkout QRIS/WA
├── prototypes.html             # Halaman arsip/master showcase gabungan 4 prototipe
├── demos/                      # Folder mandiri untuk setiap demo website UMKM (bebas tabrakan CSS/state)
│   ├── harth-coffee/
│   │   └── index.html          # Demo Kategori 01: Cafe, Roastery & Bakery (Kinfolk Editorial + Uap Kopi + Struk Barista)
│   ├── hush-resto/
│   │   └── index.html          # Demo Kategori 02: Restoran, Sushi & Kuliner (Dark Culinary + Bara Api + Tiket Dapur Chef)
│   ├── cedar-shoes/
│   │   └── index.html          # Demo Kategori 03: Retail Sepatu, Fashion & Craft (Heritage Lookbook + EU-ke-CM + Ongkir)
│   └── barbearia-club/
│       └── index.html          # Demo Kategori 04: Barbershop, Salon & Jasa VIP (VIP Boarding Pass + Pilih Master Barber & Jam)
└── README.md                   # Dokumentasi teknis & panduan pengembangan tim
```

---

## 🔄 Alur Navigasi & Kontrak Parameter Antar Halaman

Setiap halaman terhubung menggunakan parameter URL (`query string`) dan `localStorage` agar pilihan klien tersimpan secara mulus dari awal hingga checkout:

| Halaman | File | Parameter URL Masuk | Data / State yang Diteruskan |
| :--- | :--- | :--- | :--- |
| **1. Landing Page** | `index.html` | — | Mengarahkan user ke `pilih-desain.html` atau langsung ke `pilih-paket.html?design=<id>` |
| **2. Langkah 1: Pilih Desain** | `pilih-desain.html` | — | Menyimpan `digitra_selected_design` di `localStorage` & meneruskan `?design=harth\|hush\|cedar\|barbearia` ke `pilih-paket.html` |
| **3. Langkah 2: Pilih Paket** | `pilih-paket.html` | `?design=<id>&tier=starter\|complete` | Memuat iframe `demos/<folder>/index.html?embed=1` (sinkron via `postMessage` & direct call) dan meneruskan `?design=<id>&tier=starter\|complete` ke `kustomisasi.html` |
| **4. Langkah 3: Kustomisasi & Checkout** | `kustomisasi.html` | `?design=<id>&tier=starter\|complete&mode=minor\|pro` | Mengatur tingkat kustomisasi (`minor` Rp 0 vs `pro` +Rp 590rb) dan menyimpan foto upload UMKM (`FileReader`) ke `localStorage` (`digitra_custom_preview`) untuk disimulasikan di `demos/<folder>/index.html?custom=1` |

### Parameter Khusus pada File Demo (`demos/*/index.html`):
- `?embed=1`: Menyembunyikan *floating dock* internal milik demo saat dimuat di dalam `<iframe>` pada halaman `pilih-paket.html` agar **tidak terjadi tumpukan navigasi ganda (*double navbar*)**.
- `?tier=starter|complete`: Mengubah tampilan demo secara *real-time* (tanpa *reload* halaman):
  - `starter`: Menampilkan **Landing Page & Katalog Foto HD Estetik** sesuai palet warna & tipografi tema dengan tombol chat WhatsApp manual per produk.
  - `complete` (atau `pro`): Mengaktifkan **100% seluruh fitur & efek interaktif** (partikel canvas, pop-up kustomisasi khas kategori, keranjang pintar + voucher, simulasi QRIS, generator standee QR meja `#07`, peta fasilitas live, dan Google Sheets sync).
- `?custom=1`: Membaca data dari `localStorage.getItem('digitra_custom_preview')` sehingga foto logo, banner tempat usaha, foto produk, nama usaha, dan warna aksen yang di-upload klien di `kustomisasi.html` langsung tampil menggantikan aset bawaan demo.

---

## 🚀 Cara Menjalankan Proyek Secara Lokal

Proyek ini menggunakan arsitektur **Zero-Build Static HTML + Tailwind CSS CDN + Vanilla ES6 JavaScript**, sehingga tim dapat langsung menjalankannya tanpa instalasi *dependency* berat:

### Opsi 1: Menggunakan Python HTTP Server (Direkomendasikan)
```bash
cd Digitra_Official_Web
python -m http.server 3000
```
Lalu buka `http://localhost:3000` di browser.

### Opsi 2: Menggunakan VS Code Live Server / Node `serve`
```bash
npx serve Digitra_Official_Web -l 3000
```

---

## 🛠️ Panduan & Roadmap Lanjutan untuk Tim Developer

Berikut adalah daftar tugas lanjutan (*Next Steps*) yang dapat langsung diteruskan oleh tim:

1. **Bedah UI/UX Halaman 2 (`pilih-desain.html`):**
   - Menyelaraskan tampilan *header* dan *progress stepper* dengan gaya *Unified Chameleon Hero* yang baru saja diterapkan di `index.html`.
   - Menambahkan *hover preview* interaktif pada setiap kartu kategori desain.
2. **Bedah UI/UX Halaman 3 (`pilih-paket.html`):**
   - Memperkuat kontras visual saat user menekan tombol pembanding **Starter (Rp 499rb)** vs **Complete (Rp 899rb)** vs **👑 Pro Bespoke (Rp 1,49jt)** agar nilai tambah paket Pro semakin menonjol (*Decoy Pricing Effect*).
3. **Bedah UI/UX Halaman 4 (`kustomisasi.html`) & Integrasi Backend:**
   - Menghubungkan fitur upload foto (yang saat ini menggunakan `FileReader` + `localStorage` untuk simulasi *client-side*) ke penyimpanan *cloud* (mis. Cloudinary / Supabase Storage / S3) agar foto UMKM otomatis terkirim bersama * Order Brief*.
   - Mengintegrasikan pembayaran QRIS dari mode simulasi ke *Payment Gateway* produksi (Midtrans / Xendit).
4. **Penambahan Katalog Kategori Demo Baru di `demos/`:**
   - Untuk menambah kategori UMKM baru (misal: *Klinik Kecantikan*, *Bengkel Otomotif*, atau *Laundry Express*), cukup duplikasi salah satu folder di `demos/<nama-kategori>/index.html` dan daftarkan key-nya pada objek `DESIGN_MAP` di `pilih-paket.html` serta `kustomisasi.html`.

