# Digitra — Web & AI Solutions (`digitra-umkm-platform`)

> **"Less Complexity. More Growth."**  
> Platform pemesanan, kustomisasi interaktif, dan showcase prototipe website siap pakai maupun *bespoke* untuk UMKM Indonesia oleh **Digitra — Web & AI Solutions**.

---

## 📌 Ringkasan Proyek

Proyek ini adalah portal resmi **Digitra** yang dirancang dengan pendekatan **Guided Multi-Page Funnel (*One Clear Action per Page*)**. Tujuannya adalah memudahkan pemilik UMKM dalam:
1. Melihat kualitas website karya Digitra secara langsung (melalui *Living Hero Background*, *Interactive Gallery*, dan *Live Feature Sandbox*).
2. Memilih template sesuai kategori bisnis mereka atau mengajukan pembuatan desain dari nol (*Custom from Scratch*).
3. Membandingkan perbedaan kualitas antar paket (**Starter Rp 499rb** vs **Complete Rp 899rb — Best Seller**; upgrade Pro + add-on dipilih di langkah kustomisasi; sumber: `digitra-config.js`) secara langsung melalui simulasi *Live Demo* interaktif.
4. Mengatur preferensi warna/font, mengunggah foto usaha/produk mereka sendiri untuk disimulasikan secara *real-time* di atas website pilihan, hingga menyelesaikan pemesanan via QRIS/Transfer & WhatsApp.

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

## 📦 Ketentuan Paket (sesuai "Laporan Update Bisnis Digitra", Okt 2026)

Semua harga, isi paket, add-on, biaya tahun ke-2, dan nomor WA admin dikelola di **`digitra-config.js`** (dipakai `pilih-paket.html` & `kustomisasi.html`).

**Paket yang ditawarkan di halaman Pilih Paket & demo: hanya Starter dan Complete.**

| Paket | Harga | Isi |
| :--- | :--- | :--- |
| Starter | Rp 499.000 | Katalog estetik berkarakter + chat WA manual, domain `.my.id`, 1 stiker QR |
| **Complete (Best Seller)** | Rp 899.000 | Website kasir digital (dine-in/pickup/antar) + *Category Soul Architecture*, struk WA, QRIS, voucher, Google Sheets, 2 bahasa, domain `.my.id`, papan akrilik meja |

**Paket Pro (Kustom Bebas)** bukan paket terpisah. Ia dipilih di langkah terakhir (`kustomisasi.html`, Bagian D) sebagai dua pilihan bebas — salah satu atau keduanya: **Kustom Web** (desain kustom bebas, +Rp 350.000) dan **Kustom Domain** (domain `.com`, +Rp 200.000). Memilih "Desain Baru dari Nol" di Bagian A otomatis menyalakan Kustom Web. Link lama `?tier=pro` diperlakukan sebagai Complete + kedua pilihan Pro.

**Add-on opsional (Bagian D, hanya untuk Complete):** Kustom Field Pop-Up Pemesanan (+Rp 150.000), Multi-Cabang & Multi-Admin WA (+Rp 200.000).

Tahun ke-2: perpanjangan domain & maintenance Rp 350.000/tahun. Pembayaran: DP 50%, pelunasan 50% setelah papan QR diterima.

## 📂 Struktur Direktori

```text
Digitra_Official_Web/
├── index.html                  # [Halaman 1] Landing Page Utama (Unified Navbar, Chameleon Living Hero, Galeri Karya & Live Sandbox)
├── pilih-desain.html           # [Halaman 2 - Langkah 1] Pemilihan Template Kategori UMKM atau Request Custom dari Nol
├── pilih-paket.html            # [Halaman 3 - Langkah 2] Split-Screen Package Inspector (Starter vs Complete) + Embedded Live Demo
├── kustomisasi.html            # [Halaman 4 - Langkah 3] Form Preferensi Brand, Upload Foto UMKM (Cards A-E), Paket Pro & Checkout QRIS/WA
├── digitra-config.js           # Single Source of Truth konfigurasi paket, harga, Paket Pro, add-on & nomor WA admin
├── site-i18n.js                # Switcher terjemahan otomatis Indonesia <-> English untuk halaman utama
├── demo-i18n-en.js             # Kamus terjemahan otomatis Indonesia <-> English untuk demo UMKM
├── laporan-bisnis.html         # Dokumen Rancangan Strategi Bisnis & Unit Economics Digitra
├── bmc-digitra.html            # Business Model Canvas (BMC) Resmi Digitra
├── prototypes.html             # Halaman arsip/master showcase gabungan 4 prototipe
├── demos/                      # Folder mandiri untuk setiap demo website UMKM (bebas tabrakan CSS/state)
│   ├── harth-coffee/
│   │   └── index.html          # Demo Kategori 01: Cafe, Roastery & Bakery (Sensory Flavor Tuner + Extraction Bars + Struk Barista)
│   ├── hush-resto/
│   │   └── index.html          # Demo Kategori 02: Restoran, Sushi & Kuliner (850°C Binchotan Ember + Omakase Pairing + Tiket Dapur Chef)
│   ├── cedar-shoes/
│   │   └── index.html          # Demo Kategori 03: Retail Sepatu, Fashion & Craft (5Yr Leather Patina + Foot CM Matcher + Ongkir)
│   └── barbearia-club/
│       └── index.html          # Demo Kategori 04: Barbershop, Salon & Jasa VIP (Visagismo Face Analyzer + VIP Boarding Pass)
└── README.md                   # Dokumentasi teknis & panduan pengembangan tim
```

---

## 🔄 Alur Navigasi & Kontrak Parameter Antar Halaman

Setiap halaman terhubung menggunakan parameter URL (`query string`) dan `localStorage` agar pilihan klien tersimpan secara mulus dari awal hingga checkout:

| Halaman | File | Parameter URL Masuk | Data / State yang Diteruskan |
| :--- | :--- | :--- | :--- |
| **1. Landing Page** | `index.html` | — | Mengarahkan user ke `pilih-desain.html` atau langsung ke `pilih-paket.html?design=<id>` |
| **2. Langkah 1: Pilih Desain** | `pilih-desain.html` | — | Meneruskan `?design=harth\|hush\|cedar\|barbearia` ke `pilih-paket.html` atau `?mode=scratch` ke `kustomisasi.html` |
| **3. Langkah 2: Pilih Paket** | `pilih-paket.html` | `?design=<id>` | Memuat iframe `demos/<folder>/index.html?embed=1` dan meneruskan `?design=<id>&tier=starter\|complete` ke `kustomisasi.html` |
| **4. Langkah 3: Kustomisasi & Checkout** | `kustomisasi.html` | `?design=<id>&tier=<tier>&mode=<mode>` | Menyimpan foto upload UMKM (Base64 `FileReader`) & nama usaha ke `localStorage` (`digitra_custom_preview`) untuk disimulasikan di `demos/<folder>/index.html?custom=1` |

### Parameter Khusus pada File Demo (`demos/*/index.html`):
- `?embed=1`: Menyembunyikan *top switcher bar* internal milik demo saat dimuat di dalam `<iframe>` pada halaman `pilih-paket.html` atau `kustomisasi.html` agar **tidak terjadi tumpukan navigasi ganda (*double navbar*)**.
- `?tier=starter|complete`: Mengubah tampilan demo secara langsung untuk menonjolkan perbedaan kualitas antar paket (mode `starter` menampilkan *Boutique Brand & Katalog Estetik* + WA manual, sedangkan `complete` mengaktifkan *Category Soul Architecture*, pop-up pemesanan kustom, keranjang pintar, QRIS, dan *Category-Specific Live Toast*).
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
