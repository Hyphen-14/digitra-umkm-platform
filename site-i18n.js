/* =========================================================================
   DIGITRA — TERJEMAHAN INDONESIA <-> ENGLISH untuk halaman utama
   (index, pilih-desain, pilih-paket, kustomisasi). Demo punya kamus sendiri:
   demo-i18n-en.js.

   Cara kerja: tombol bahasa (pojok kanan bawah) memindai teks halaman; teks
   yang persis ada di `exact` diganti, sisanya diproses `rules`. Teks yang tak
   ada di kamus dibiarkan. Pilihan bahasa disimpan di localStorage
   ('digitra_lang') dan terbawa ke halaman lain & demo. Bisa juga lewat ?lang=en
   Brief yang dikirim ke WhatsApp admin Digitra tetap berbahasa Indonesia.
   ========================================================================= */
(function () {
    const exact = {
        /* ---------- judul halaman ---------- */
        'Langkah 1: Pilih Desain Website — Digitra Web & AI Solutions': 'Step 1: Choose a Website Design — Digitra Web & AI Solutions',
        'Langkah 2: Pilih Paket & Bandingkan Live Demo — Digitra': 'Step 2: Choose a Package & Compare Live Demos — Digitra',
        'Langkah 3: Kustomisasi, Upload Foto UMKM & Checkout — Digitra': 'Step 3: Customize, Upload Business Photos & Checkout — Digitra',

        /* ---------- navigasi umum ---------- */
        'Navigasi Utama': 'Main Navigation',
        'Eksplorasi Karya': 'Explore Our Work',
        'Uji Interaksi Live': 'Try Live Interaction',
        'Alur Pemesanan': 'How to Order',
        'Keunggulan': 'Advantages',
        'Mulai Buat Website': 'Start Building Your Website',
        '← Beranda': '← Home',
        'Beranda': 'Home',
        '← Ganti Desain': '← Change Design',
        '← Kembali ke Paket': '← Back to Packages',
        'Tahapan Pemesanan Website': 'Website Ordering Steps',
        '① Pilih Desain': '① Choose Design',
        '② Pilih Paket & Cek Demo': '② Choose Package & Check Demo',
        '③ Kustomisasi & Upload Foto': '③ Customize & Upload Photos',
        '✓ ① Pilih Desain': '✓ ① Choose Design',
        '✓ ② Pilih Paket & Cek Demo': '✓ ② Choose Package & Check Demo',
        'Transformasi digital untuk setiap langkah bisnis Anda.': 'Digital transformation for every step of your business.',

        /* ---------- index: hero & mockup ---------- */
        'Solusi Website Berkarakter untuk': 'Websites with Character for',
        'UMKM Indonesia.': 'Indonesian SMEs.',
        'Setiap bisnis punya cara jualan yang berbeda. Kami menghadirkan website hidup dengan': 'Every business sells in its own way. We build living websites with',
        'Pop-Up Pemesanan Khas, Simulasi QRIS, & Peta Interaktif': 'Signature Order Pop-Ups, QRIS Simulation, & Interactive Maps',
        'yang dirancang khusus mengikuti karakter usaha Anda.': 'designed around the character of your business.',
        'Mulai Buat Website Anda (3 Langkah Mudah) →': 'Build Your Website (3 Easy Steps) →',
        'Meja #08 (QR Aktif)': 'Table #08 (QR Active)',
        'Seduhan Hangat dari Biji Pilihan, Pesan Langsung dari Meja.': 'Warm Brews from Select Beans, Ordered Straight from Your Table.',
        'Pesan Tanpa Antre →': 'Order Without Queuing →',
        'Meja #08 • Dine-In': 'Table #08 • Dine-In',
        'Terhubung ke Kasir WA': 'Connected to WA Cashier',
        'Tiket Dapur Chef': 'Chef Kitchen Ticket',
        'Buka Menu Malam →': 'Open Night Menu →',
        '+ Tiket Dapur Chef': '+ Chef Kitchen Ticket',
        'Kaldu Kolagen 12 Jam • Smoked Chashu': '12-Hour Collagen Broth • Smoked Chashu',
        '✓ Panggil Pelayan / Bill Aktif': '✓ Call Waiter / Bill Active',
        'Terkirim ke Dapur & Kasir': 'Sent to Kitchen & Cashier',
        'Tabel Ukuran EU-CM': 'EU-CM Size Chart',
        'Garansi Tukar Size 14 Hari': '14-Day Size Exchange Guarantee',
        'Cek Ongkir Kurir': 'Check Courier Shipping',
        'Konstruksi Tangguh Seumur Hidup, Pas di Kaki Tanpa Salah Ukuran.': 'Built to Last a Lifetime, a Perfect Fit with No Sizing Mistakes.',
        'Konversi EU ke CM →': 'Convert EU to CM →',
        'Gratis Ukir Inisial Kulit': 'Free Leather Initial Engraving',
        '+ Pilih Ukuran & Grafir': '+ Choose Size & Engraving',
        '• Grafir Kulit: "A.R.P"': '• Leather Engraving: "A.R.P"',
        '✓ Siap Kirim dari Workshop': '✓ Ready to Ship from Workshop',
        'Checkout ke WhatsApp': 'Checkout to WhatsApp',
        'Booking Tanpa Antre': 'Booking Without Queuing',
        'Kunci Jadwal Master Barber Pilihan Anda, Datang Langsung Dilayani.': 'Lock in Your Preferred Master Barber, Walk in and Get Served Right Away.',
        'Gratis Cold Brew di Lounge': 'Free Cold Brew at the Lounge',
        '+ Pilih Jam & Barber': '+ Choose Time & Barber',
        '• Jadwal: Hari Ini, 16:00 WIB': '• Schedule: Today, 16:00 WIB',
        '• Drink: Cold Brew Gratis': '• Drink: Free Cold Brew',
        'Kirim Pass ke WhatsApp': 'Send Pass to WhatsApp',
        'Disajikan Hangat': 'Served Warm',
        'Aroma Panggangan Arang Binchotan & Sajian Presisi Chef.': 'Binchotan Charcoal Grill Aroma & Chef-Precision Dishes.',
        'Filter Bebas Alergi Aktif': 'Allergy-Free Filter Active',
        'Kurir Termal < 5 KM': 'Thermal Courier < 5 KM',
        '• Urutan: Keluar Bersamaan': '• Order: Served Together',
        '• Alergi: Bebas Kerang': '• Allergy: Shellfish-Free',
        'VIP Booth #04 • Malam': 'VIP Booth #04 • Evening',
        'Goodyear Welted Leather Craft • Bandung': 'Goodyear Welted Leather Craft • Bandung',
        'Grafir Monogram': 'Monogram Engraving',
        'SPESIFIKASI BESPOKE': 'BESPOKE SPECIFICATION',
        'EU 42 = 26.5 CM (Pas)': 'EU 42 = 26.5 CM (Fits)',
        '• Kurir: JNE YES (Asuransi)': '• Courier: JNE YES (Insured)',
        'Kursi VIP #2 Tersedia': 'VIP Chair #2 Available',
        'Ambil VIP Boarding Pass →': 'Get VIP Boarding Pass →',
        '✓ Kursi VIP #2 Terkunci': '✓ VIP Chair #2 Locked',
        'Master Barber: Marco': 'Master Barber: Marco',
        'French Butter Pastry • Disajikan Hangat': 'French Butter Pastry • Served Warm',
        '+ Racik Struk Barista': '+ Build Barista Receipt',
        'STRUK BARISTA LIVE': 'LIVE BARISTA RECEIPT',
        '✓ QRIS Lunas: Rp 76.000': '✓ QRIS Paid: Rp 76.000',
        'Medium Rare • Onsen Tamago • Black Truffle': 'Medium Rare • Onsen Tamago • Black Truffle',
        'Aroma Panggangan': 'Grill Aroma',

        /* ---------- index: galeri karya ---------- */
        'Galeri Arsitektur Website Digitra': 'Digitra Website Architecture Gallery',
        'Eksplorasi Karya & Karakter Website Kami': 'Explore Our Work & Website Character',
        'Bukan sekadar ganti warna. Setiap karya memiliki': 'More than a colour swap. Every work has its own',
        'mekanisme transaksi, pop-up pemesanan, dan atmosfer visual': 'transaction mechanics, order pop-ups, and visual atmosphere',
        'yang dirancang khusus untuk industrinya.': 'designed specifically for its industry.',
        'Pilih kategori karya website': 'Choose a website work category',
        'Cafe & Roastery': 'Cafe & Roastery',
        'Resto & Kuliner': 'Restaurant & Culinary',
        'Retail & Fashion': 'Retail & Fashion',
        'Barbershop & Jasa': 'Barbershop & Services',
        'Karya sebelumnya': 'Previous work',
        'Karya berikutnya': 'Next work',
        'Karya 01 • Cafe, Roastery & Bakery': 'Work 01 • Cafe, Roastery & Bakery',
        'Karya 02 • Restoran, Sushi & Kuliner': 'Work 02 • Restaurant, Sushi & Culinary',
        'Karya 03 • Retail Sepatu, Fashion & Craft': 'Work 03 • Shoe Retail, Fashion & Craft',
        'Karya 04 • Barbershop, Salon & Jasa VIP': 'Work 04 • Barbershop, Salon & VIP Services',
        'Efek Partikel Uap Kopi + QR Meja': 'Coffee Steam Particle Effect + Table QR',
        'Klik tombol di samping untuk mencoba langsung': 'Click the button beside it to try it live',
        'Dirancang hangat dengan partikel uap kopi di layar, sistem': 'Warmly designed with coffee steam particles on screen, a',
        'Scan QR Pesan dari Meja': 'Scan-QR Order-from-Table',
        'untuk meracik biji kopi, susu oat, dan takaran gula/es.': 'system to customise beans, oat milk, and sugar/ice levels.',
        'Pop-Up Struk Barista + Pembayaran QRIS Instan': 'Barista Receipt Pop-Up + Instant QRIS Payment',
        'Peta Lokasi + Indikator Kursi WFC & Speedtest Wi-Fi': 'Location Map + WFC Seat Indicator & Wi-Fi Speed Test',
        'Generator Standee QR Meja Akrilik Siap Cetak': 'Print-Ready Acrylic Table QR Stand Generator',
        'Gunakan Desain Ini →': 'Use This Design →',
        'Buka Live Demo ↗': 'Open Live Demo ↗',
        'Efek Bara Panggangan + Tiket Dapur Chef': 'Grill Ember Effect + Chef Kitchen Ticket',
        'Lengkap dengan filter alergi & urutan sajian': 'Complete with allergy filter & serving order',
        'Menonjolkan visual kuliner malam yang menggugah selera dengan': 'Highlights appetising night-time culinary visuals with a',
        'Pop-Up Tiket Dapur Chef': 'Chef Kitchen Ticket Pop-Up',
        '(atur urutan keluar hidangan & catatan alergi) serta radius pengantaran kurir termal.': '(set dish serving order & allergy notes) and a thermal courier delivery radius.',
        'Pop-Up Tiket Dapur Chef + Filter Bebas Alergi': 'Chef Kitchen Ticket Pop-Up + Allergy-Free Filter',
        'Peta Valet VIP & Radius Kurir Kemasan Termal': 'VIP Valet Map & Thermal-Packaging Courier Radius',
        'Tombol Panggil Pelayan / Bill Langsung via WA': 'Call Waiter / Bill Button Straight via WA',
        'Konversi Ukuran EU-ke-CM + Grafir Nama': 'EU-to-CM Size Conversion + Name Engraving',
        'Mencegah retur salah ukuran & hitung ongkir otomatis': 'Prevents wrong-size returns & calculates shipping automatically',
        'Katalog produk fisik berkelas dengan': 'A premium physical-product catalogue with a',
        'Pop-Up Panduan Ukuran Kaki (EU ke CM)': 'Foot Size Guide Pop-Up (EU to CM)',
        'Gratis Ukir Inisial Nama (Monogram)': 'Free Name Initial Engraving (Monogram)',
        ', dan kalkulator ongkir JNE/J&T/SiCepat.': ', and a JNE/J&T/SiCepat shipping calculator.',
        'Tabel Ukuran EU 40–44 ke CM Anti Salah Beli': 'EU 40–44 to CM Size Chart, No More Wrong Purchases',
        'Peta Studio Fitting & Pengiriman Ekspedisi Nasional': 'Fitting Studio Map & Nationwide Courier Shipping',
        'VIP Boarding Pass + Pilih Master Barber': 'VIP Boarding Pass + Choose Your Master Barber',
        'Reservasi jam kedatangan tanpa perlu antre': 'Reserve your arrival time with no queue',
        'VIP Booking Club • Tanpa Keranjang Barang': 'VIP Booking Club • No Shopping Cart',
        'Mengganti konsep keranjang belanja biasa dengan': 'Replaces the ordinary shopping-cart concept with a',
        'untuk memilih Master Barber, slot jam kedatangan, dan minuman sambutan gratis.': 'to choose a Master Barber, an arrival time slot, and a free welcome drink.',
        'Pass Reservasi Kursi + Pilih Master Barber & Jam': 'Chair Reservation Pass + Choose Master Barber & Time',
        'Pilihan Complimentary Drink di Area Tunggu': 'Complimentary Drink Choice in the Waiting Area',
        'Peta Gentlemen Lounge & Info Parkir VIP': 'Gentlemen Lounge Map & VIP Parking Info',
        'Input Ukir Monogram + Kalkulator Ongkir Kurir': 'Monogram Engraving Input + Courier Shipping Calculator',
        ', serta': ', plus',
        ', input': ', ',

        /* ---------- index: sandbox ---------- */
        'Sentuh & Uji Sendiri Komponen Interaktif Kami': 'Touch & Try Our Interactive Components Yourself',
        'Website yang bagus tidak boleh kaku. Coba klik tombol-tombol di bawah ini untuk merasakan bagaimana pelanggan Anda nantinya berinteraksi dengan website buatan Digitra.':
            'A good website should never feel stiff. Click the buttons below to feel how your customers will interact with a website built by Digitra.',
        '● Klik Opsi di Bawah': '● Click an Option Below',
        'Racik Pesanan & Hitung Harga Otomatis': 'Build an Order & Calculate the Price Automatically',
        'Pelanggan tidak perlu mengetik manual. Klik opsi varian di bawah dan lihat struk WhatsApp terformat otomatis:':
            'Customers do not need to type anything. Click a variant option below and watch the WhatsApp receipt format itself:',
        'Pilih Base Menu:': 'Choose Base Menu:',
        'Tambahan Kustomisasi (Add-On):': 'Customisation Extras (Add-On):',
        '✓ Less Ice (Gratis)': '✓ Less Ice (Free)',
        '• Catatan: Less Ice / Warm': '• Note: Less Ice / Warm',
        'STRUK OTOMATIS WA:': 'AUTOMATIC WA RECEIPT:',
        '02 • SIMULASI QRIS INSTAN': '02 • INSTANT QRIS SIMULATION',
        'Pembayaran Tanpa Potongan Komisi': 'Payments With No Commission Cut',
        'Uang langsung masuk 100% ke rekening UMKM Anda. Klik tombol simulasi di bawah untuk melihat animasi verifikasi QRIS:':
            'Money goes 100% straight into your business account. Click the simulation button below to see the QRIS verification animation:',
        '● Menunggu Scan': '● Awaiting Scan',
        '✓ Pembayaran Terverifikasi!': '✓ Payment Verified!',
        'Klik untuk Simulasi Scan QRIS Lunas': 'Click to Simulate a Paid QRIS Scan',
        'Mendukung BCA, Mandiri, GoPay, OVO, Dana, ShopeePay': 'Supports BCA, Mandiri, GoPay, OVO, Dana, ShopeePay',
        '03 • FITUR SPESIFIK USAHA': '03 • BUSINESS-SPECIFIC FEATURES',
        '● Anti Salah Pesan': '● No More Wrong Orders',
        'Konversi Ukuran & Grafir Inisial Live': 'Live Size Conversion & Initial Engraving',
        'Untuk toko sepatu/fashion, pelanggan bisa mengecek panjang kaki (CM) dan mengetik inisial ukiran nama secara real-time:':
            'For shoe/fashion stores, customers can check foot length (CM) and type the engraved name initials in real time:',
        'Pilih Ukuran EU:': 'Choose EU Size:',
        'Ketik Inisial Grafir Kulit (Maks 5 Huruf):': 'Type Leather Engraving Initials (Max 5 Letters):',
        'Tag Kulit Pull-Up:': 'Pull-Up Leather Tag:',
        'Bukti Kualitas Engineering Digitra': 'Proof of Digitra Engineering Quality',
        'Contoh: A.R.P': 'Example: A.R.P',
        '+ Extra Shot (6rb)': '+ Extra Shot (6k)',
        '+ Box Termal (5rb)': '+ Thermal Box (5k)',

        /* ---------- index: cara kerja ---------- */
        'Alur Pemesanan Terpandu': 'Guided Ordering Flow',
        'Miliki Website Usaha dalam 3 Langkah': 'Get Your Business Website in 3 Steps',
        'Setiap tahap dipisahkan ke halaman khusus agar Anda dapat memilih desain, membandingkan paket, dan mengunggah foto usaha dengan nyaman.':
            'Each step has its own page so you can choose a design, compare packages, and upload your business photos comfortably.',
        'Buka Tahap 1 →': 'Open Step 1 →',
        'Pilih Desain atau Request dari Nol': 'Choose a Design or Request One from Scratch',
        'Pilih template yang sesuai dengan kategori usaha Anda (Cafe, Resto, Retail, Jasa) atau ajukan pembuatan desain baru dari awal.':
            'Pick a template that fits your business category (Cafe, Restaurant, Retail, Services) or request a brand-new design from scratch.',
        'Buka Tahap 2 →': 'Open Step 2 →',
        'Bandingkan Paket via Live Demo': 'Compare Packages via Live Demo',
        'Lihat langsung perbedaan kualitas antara paket': 'See the quality difference between the',
        'dan': 'and',
        'pada desain pilihan Anda.': 'packages on your chosen design.',
        'Starter (499rb)': 'Starter (499k)',
        'Complete (899rb — Best Seller)': 'Complete (899k — Best Seller)',
        'Buka Tahap 3 →': 'Open Step 3 →',
        'Upload Foto UMKM & Terima Beres': 'Upload Your Photos & Sit Back',
        'Upload logo dan foto usaha Anda, lihat simulasi hasilnya secara instan di browser, lalu selesaikan pemesanan.':
            'Upload your logo and business photos, see the result simulated instantly in the browser, then complete your order.',
        'Praktis Tanpa Coding': 'Practical, No Coding',
        'Update harga & stok produk kapan saja cukup lewat Google Sheets dari HP Anda.': 'Update prices & product stock any time through Google Sheets from your phone.',
        'Tanpa Komisi, Tanpa Sewa Server': 'No Commission, No Server Rental',
        'Server gratis selamanya (Cloudflare) & 0% potongan komisi per transaksi. Mulai tahun ke-2 hanya Rp 350rb/tahun untuk perpanjangan domain & maintenance.':
            'Free server forever (Cloudflare) & 0% commission per transaction. From year 2, only Rp 350k/year for domain renewal & maintenance.',
        'Inovatif & Berkarakter': 'Innovative & Full of Character',
        'Dilengkapi QRIS, struk WA otomatis, voucher diskon, peta interaktif & Papan Akrilik QR meja fisik.': 'Comes with QRIS, automatic WA receipts, discount vouchers, interactive maps & a physical acrylic table QR stand.',
        'Pendampingan Penuh': 'Full Support',
        'Tim Digitra mendampingi mulai dari input foto menu hingga website siap menerima pesanan.': 'The Digitra team assists you from entering menu photos until the website is ready to take orders.',
        'Lanjut ke Langkah 1: Pilih Desain Website': 'Continue to Step 1: Choose a Website Design',

        /* ---------- pilih-desain ---------- */
        'Langkah 1 dari 3 • Pilih Basis Tampilan': 'Step 1 of 3 • Choose a Base Look',
        'Pilih Desain Website Sesuai Kategori Bisnis Anda': 'Choose a Website Design That Fits Your Business Category',
        'Setiap template di bawah ini nantinya dapat Anda gunakan langsung maupun dimodifikasi warna, logo, dan foto produknya pada langkah ke-3.':
            'Each template below can be used as-is or modified (colours, logo, and product photos) in step 3.',
        'Semua (4)': 'All (4)',
        'Cafe & Bakery': 'Cafe & Bakery',
        'Retail & Sepatu': 'Retail & Shoes',
        'Lihat Live Demo ↗': 'View Live Demo ↗',
        'Cafe, Roastery & Artisan Bakery': 'Cafe, Roastery & Artisan Bakery',
        'Restoran, Sushi Bar & Kuliner': 'Restaurants, Sushi Bar & Culinary',
        'Retail Sepatu, Fashion & Kerajinan': 'Shoe Retail, Fashion & Crafts',
        'Barbershop, Salon, Klinik & Jasa VIP': 'Barbershop, Salon, Clinic & VIP Services',
        'Warm Kinfolk Editorial & Animasi Uap Kopi': 'Warm Kinfolk Editorial & Coffee Steam Animation',
        'Dark Culinary & Efek Bara Api Panggangan': 'Dark Culinary & Grill Ember Effect',
        'Stitched Leather Lookbook & Panduan Size CM': 'Stitched Leather Lookbook & CM Size Guide',
        'Obsidian Gold Luxury & Sistem Booking Kursi': 'Obsidian Gold Luxury & Chair Booking System',
        'Cocok untuk coffee shop, toko roti, dan tempat nongkrong WFC. Dilengkapi struk pesanan meja barista dan indikator kursi/colokan.':
            'Great for coffee shops, bakeries, and work-from-cafe hangouts. Comes with a barista table order receipt and a seat/power-outlet indicator.',
        'Cocok untuk restoran keluarga, sushi bar, steakhouse, maupun bisnis kuliner dengan layanan makan di tempat dan kurir instan.':
            'Great for family restaurants, sushi bars, steakhouses, and culinary businesses offering dine-in and instant courier service.',
        'Cocok untuk brand sepatu lokal, pakaian, tas kulit, dan kerajinan tangan yang dikirim ke seluruh Indonesia.':
            'Great for local shoe brands, clothing, leather bags, and handicrafts shipped across Indonesia.',
        'Khusus bisnis jasa yang menggunakan sistem jadwal jam kedatangan dan pemilihan kapster/terapis tanpa antre.':
            'Made for service businesses that use arrival-time scheduling and barber/therapist selection with no queue.',
        'Pop-Up Pemesanan Khas:': 'Signature Order Pop-Up:',
        'Peta Lokasi Khas:': 'Signature Location Map:',
        'Pop-Up Struk Barista (Pilih Biji Kopi, Oat Milk, Takaran Gula & Es + QRIS)': 'Barista Receipt Pop-Up (Choose Beans, Oat Milk, Sugar & Ice Level + QRIS)',
        'Peta Lokasi + Status Kursi WFC, Kecepatan Wi-Fi & Jam Fresh Roast': 'Location Map + WFC Seat Status, Wi-Fi Speed & Fresh Roast Time',
        'Pop-Up Tiket Dapur Chef (Pilih Saus/Torch, Urutan Keluar Makanan & Filter Alergi + QRIS)': 'Chef Kitchen Ticket Pop-Up (Choose Sauce/Torch, Dish Serving Order & Allergy Filter + QRIS)',
        'Peta Restoran + Info Valet VIP, Private Room & Radius Kurir Termal': 'Restaurant Map + VIP Valet Info, Private Room & Thermal Courier Radius',
        'Pop-Up Lembar Pengrajin (Tabel Ukuran EU 40–44 ke CM + Ukir Nama Monogram + Ongkir Kurir)': 'Craftsman Sheet Pop-Up (EU 40–44 to CM Size Chart + Monogram Engraving + Courier Shipping)',
        'Peta Studio Fitting & Workshop + Info Ekspedisi JNE/J&T/SiCepat': 'Fitting Studio & Workshop Map + JNE/J&T/SiCepat Courier Info',
        'Pop-Up VIP Appointment Pass (Pilih Master Barber, Jam Kedatangan & Welcome Drink)': 'VIP Appointment Pass Pop-Up (Choose Master Barber, Arrival Time & Welcome Drink)',
        'Peta Gentlemen Lounge + Info Parkir VIP & Slot Kursi Kosong Hari Ini': 'Gentlemen Lounge Map + VIP Parking Info & Today\'s Free Chair Slots',
        'Cek Demo ↗': 'Check Demo ↗',
        'Pilih Desain Ini & Lihat Paket →': 'Choose This Design & See Packages →',
        'Opsi Full Custom (Desain Baru dari Awal)': 'Full Custom Option (Brand-New Design from Scratch)',
        'Punya Referensi Desain Sendiri atau Kategori Usaha Unik?': 'Have Your Own Design Reference or a Unique Business Category?',
        'Jika Anda menginginkan tampilan website yang dirancang 100% baru dari nol (di luar template di atas), tim UI/UX Digitra siap merancangkannya khusus untuk perusahaan Anda.':
            'If you want a website design that is 100% new from scratch (beyond the templates above), the Digitra UI/UX team is ready to design it specifically for your company.',
        'Request Desain Baru dari Nol': 'Request a New Design from Scratch',
        'Digitra — Web & AI Solutions • Langkah 1 dari 3: Pemilihan Desain Website': 'Digitra — Web & AI Solutions • Step 1 of 3: Choosing a Website Design',

        /* ---------- pilih-paket ---------- */
        'Langkah 2 dari 3 • Bandingkan Kualitas Paket': 'Step 2 of 3 • Compare Package Quality',
        'Pilih Paket untuk': 'Choose a Package for',
        'Gunakan tombol di bawah untuk menguji langsung perbedaan tampilan': 'Use the buttons below to test the visual difference between',
        'Desain:': 'Design:',
        'Klik untuk Bandingkan Live Demo:': 'Click to Compare Live Demos:',
        '1. Starter (Rp 499rb — Katalog + WA)': '1. Starter (Rp 499k — Catalogue + WA)',
        '2. Complete (Rp 899rb — Kasir Digital Lengkap)': '2. Complete (Rp 899k — Full Digital Cashier)',
        '↗ Buka Layar Penuh di Tab Baru': '↗ Open Full Screen in New Tab',
        'Lanjut dengan Paket Ini →': 'Continue with This Package →',
        'Live Demo Perbandingan Paket': 'Package Comparison Live Demo',
        'Sedang Menampilkan Paket Starter (Rp 499.000):': 'Now Showing the Starter Package (Rp 499,000):',
        'Katalog 1 halaman & tombol chat WA manual, Domain .my.id + 1 Stiker QR. Tanpa sistem pesanan, QRIS, voucher, dan Google Sheets.':
            '1-page catalogue & a manual WA chat button, .my.id domain + 1 QR sticker. No ordering system, QRIS, vouchers, or Google Sheets.',
        'Lihat Paket Complete (Best Seller) →': 'See the Complete Package (Best Seller) →',
        'Sedang Menampilkan Paket Complete (Rp 899.000 — Best Seller):': 'Now Showing the Complete Package (Rp 899,000 — Best Seller):',
        'Rincian Perbandingan Fitur Setiap Paket': 'Feature Comparison for Each Package',
        'Pilih salah satu paket di bawah ini untuk lanjut ke tahap kustomisasi warna, upload foto UMKM, dan pengisian profil usaha Anda.':
            'Choose one of the packages below to continue to colour customisation, business photo upload, and filling in your business profile.',
        'Paket Starter': 'Starter Package',
        'Katalog Dasar': 'Basic Catalogue',
        'UMKM yang hanya butuh katalog foto & tombol chat WA manual': 'For small businesses that only need a photo catalogue & a manual WA chat button',
        'Katalog 1 halaman (foto, nama & harga produk)': '1-page catalogue (photos, names & product prices)',
        'Tombol Chat WhatsApp manual': 'Manual WhatsApp Chat button',
        'Domain .my.id (gratis tahun pertama)': '.my.id domain (free for the first year)',
        '1 Stiker QR untuk meja kasir': '1 QR sticker for the cashier table',
        'Tanpa sistem pesanan & keranjang': 'No ordering system & cart',
        'Tanpa QRIS & struk WA otomatis': 'No QRIS & automatic WA receipts',
        'Tanpa voucher diskon & Google Sheets': 'No discount vouchers & Google Sheets',
        'Lihat Tampilan Starter di Atas': 'See the Starter View Above',
        'Pilih Paket Starter →': 'Choose the Starter Package →',
        'Best Seller • Paling Banyak Dipilih UMKM F&B': 'Best Seller • Most Chosen by F&B Businesses',
        'Paket Complete': 'Complete Package',
        'Kasir Digital Anti-Ribet': 'Hassle-Free Digital Cashier',
        'Semua UMKM F&B — website kasir digital dengan sistem pesanan pintar': 'All F&B businesses — a digital cashier website with a smart ordering system',
        'Desain penuh tema': 'Full design in the theme of',
        'Mode pesanan: Makan di Tempat / Ambil Sendiri / Antar': 'Order modes: Dine-in / Pickup / Delivery',
        'Struk WhatsApp otomatis (total, varian & ongkir)': 'Automatic WhatsApp receipt (total, variants & shipping)',
        'Pembayaran QRIS & Transfer Bank': 'QRIS & Bank Transfer payments',
        'Mesin voucher diskon (mis. HEMAT20)': 'Discount voucher engine (e.g. HEMAT20)',
        'Ganti harga & menu lewat Google Sheets dari HP': 'Change prices & menu via Google Sheets from your phone',
        'Tombol bahasa Indonesia / English': 'Indonesian / English language button',
        'Setup menu & hubungkan Google Sheets oleh tim Digitra': 'Menu setup & Google Sheets connection by the Digitra team',
        'Lihat Tampilan Complete di Atas': 'See the Complete View Above',
        'Pilih Paket Complete & Lanjut →': 'Choose the Complete Package & Continue →',
        'Pengerjaan': 'Turnaround',
        'Website siap dalam 1–3 hari kerja setelah deal.': 'Your website is ready within 1–3 working days after the deal.',
        'Pembayaran': 'Payment',
        'DP 50% setelah deal, pelunasan 50% ditagih setelah papan/stiker QR diterima di lokasi.': '50% deposit after the deal, the remaining 50% is billed once the QR stand/sticker arrives at your location.',
        'Biaya Tahun ke-2': 'Year-2 Fee',
        'Mulai tahun ke-2: perpanjangan domain & maintenance Rp 350.000/tahun. Server Rp 0 (Cloudflare Pages), tanpa biaya bulanan.':
            'From year 2: domain renewal & maintenance Rp 350,000/year. Server Rp 0 (Cloudflare Pages), no monthly fees.',
        'Digitra — Web & AI Solutions • Langkah 2 dari 3: Pemilihan Paket & Perbandingan Demo': 'Digitra — Web & AI Solutions • Step 2 of 3: Package Selection & Demo Comparison',
        'Pop-Up Struk Barista (Pilih Biji Kopi, Oat Milk, Gula & Es)': 'Barista Receipt Pop-Up (Choose Beans, Oat Milk, Sugar & Ice)',
        'Pop-Up Tiket Dapur Chef (Urutan Saji Hidangan & Filter Alergi)': 'Chef Kitchen Ticket Pop-Up (Dish Serving Order & Allergy Filter)',
        'Pop-Up Spesifikasi Sepatu (Tabel Ukuran EU ke CM & Pilihan Sol)': 'Shoe Specification Pop-Up (EU to CM Size Chart & Sole Options)',
        'Pop-Up VIP Appointment Pass (Pilih Master Barber & Jam)': 'VIP Appointment Pass Pop-Up (Choose Master Barber & Time)',

        /* ---------- kustomisasi ---------- */
        'Langkah 3 dari 3 • Kustomisasi & Materi Usaha': 'Step 3 of 3 • Customisation & Business Materials',
        'Lengkapi Preferensi, Upload Foto UMKM &': 'Complete Your Preferences, Upload Business Photos &',
        'Informasi Bisnis': 'Business Information',
        'Anda juga dapat menekan tombol': 'You can also press the',
        'Simulasikan Foto & Nama Usaha Saya di Website"': 'Simulate My Photos & Business Name on the Website" button',
        'setelah meng-upload foto untuk melihat langsung tampilan website dengan identitas usaha Anda!': 'after uploading photos to instantly see the website with your business identity!',
        'Bagian A • Preferensi Desain & Warna': 'Part A • Design & Colour Preferences',
        'Kustomisasi Tampilan Website': 'Customise the Website Look',
        'Ubah Template / Paket': 'Change Template / Package',
        'Pilih Tingkat Kustomisasi Desain:': 'Choose the Design Customisation Level:',
        '1. Sesuai Template': '1. As the Template',
        'Hanya ganti teks, menu & foto': 'Only change text, menu & photos',
        '2. Kustom Warna & Fitur': '2. Custom Colours & Features',
        'Sesuaikan palet warna & form': 'Adjust the colour palette & form',
        '3. Desain Baru dari Nol': '3. Brand-New Design from Scratch',
        'Kustom bebas — otomatis termasuk Kustom Web (Paket Pro)': 'Fully custom — automatically includes Custom Web (Pro Package)',
        'Skema Warna Brand:': 'Brand Colour Scheme:',
        'Sesuai Warna Template Asli': 'Original Template Colours',
        'Gunakan Kode Warna Logo Kami': 'Use Our Logo Colour Code',
        'Karakter Tipografi (Font):': 'Typography Style (Font):',
        'Rekomendasi Bawaan Template': 'Template Default Recommendation',
        'Editorial Klasik & Elegan (Serif)': 'Classic & Elegant Editorial (Serif)',
        'Modern Bersih & Minimalis (Sans)': 'Clean & Minimal Modern (Sans)',
        'Tegas & Maskulin (Condensed)': 'Bold & Masculine (Condensed)',
        'Bagian B • Upload Materi Visual UMKM': 'Part B • Upload Your Business Visuals',
        'Upload Foto Tempat & Produk Usaha Anda': 'Upload Photos of Your Place & Products',
        'Bisa Disimulasikan Langsung!': 'Can Be Simulated Instantly!',
        '1. Upload Logo Usaha (PNG/JPG)': '1. Upload Business Logo (PNG/JPG)',
        'Ditampilkan di pojok kiri atas navbar website.': 'Shown at the top-left of the website navbar.',
        'Pilih File Logo': 'Choose Logo File',
        'Belum ada file dipilih (opsional)': 'No file chosen yet (optional)',
        '2. Foto Banner / Tempat Usaha': '2. Banner / Business Place Photo',
        'Ditampilkan sebagai latar utama (Hero) website.': 'Shown as the main (Hero) background of the website.',
        'Pilih Foto Tempat': 'Choose Place Photo',
        '3. Upload Sampel Foto Produk / Menu Unggulan (Maks 4 Sampel Awal)': '3. Upload Sample Photos of Featured Products / Menu (Max 4 Initial Samples)',
        'Untuk produk ke-5 s/d 30+ nantinya dapat di-input mudah via Google Sheets / dikirim via WA.': 'Products 5 to 30+ can later be entered easily via Google Sheets / sent via WA.',
        '+ Upload Foto Produk': '+ Upload Product Photo',
        'Nama Produk/Menu': 'Product/Menu Name',
        'Harga (Rp)': 'Price (Rp)',
        'Atau tempel Link Folder Google Drive Foto Produk Anda (Opsional):': 'Or paste your product photos Google Drive folder link (Optional):',
        'Ingin Melihat Foto & Nama Usaha Anda Terpasang di Website?': 'Want to See Your Photos & Business Name on the Website?',
        'Klik tombol di samping untuk membuka simulasi website dengan foto dan nama usaha yang baru Anda isi.': 'Click the button beside it to open a website simulation with the photos and business name you just entered.',
        'Simulasikan di Website ↗': 'Simulate on the Website ↗',
        'Bagian C • Data Perusahaan & Lokasi': 'Part C • Company Data & Location',
        'Informasi yang Ditampilkan di Website Anda': 'Information Shown on Your Website',
        'Nama Usaha / Brand UMKM *': 'Business / Brand Name *',
        'Minimal 3 karakter (contoh: Kopi Titik Temu)': 'At least 3 characters (e.g. Kopi Titik Temu)',
        'Mohon isi nama usaha minimal 3 karakter.': 'Please enter a business name of at least 3 characters.',
        'Nomor WhatsApp Admin Toko *': 'Store Admin WhatsApp Number *',
        'Format: 08xx atau 628xx (10–14 angka)': 'Format: 08xx or 628xx (10–14 digits)',
        'Gunakan nomor WA valid diawali 08 atau 628.': 'Use a valid WA number starting with 08 or 628.',
        'Slogan / Deskripsi Singkat Usaha (Tampil di Hero Website)': 'Slogan / Short Business Description (Shown in the Website Hero)',
        'Alamat Lengkap / Titik Google Maps': 'Full Address / Google Maps Point',
        'Jam Operasional Usaha': 'Business Opening Hours',
        'Mode Layanan yang Diaktifkan di Website': 'Service Modes Enabled on the Website',
        'Pelanggan memilih salah satu mode ini saat memesan (untuk usaha F&B / retail).': 'Customers choose one of these modes when ordering (for F&B / retail businesses).',
        'Makan di Tempat': 'Dine-in',
        'Ambil Sendiri': 'Pickup',
        'Diantar': 'Delivery',
        'Alamat Pengiriman Papan QR': 'QR Stand Shipping Address',
        'Akan dikirim:': 'Will be shipped:',
        '. Pelunasan 50% ditagih setelah papan diterima.': '. The remaining 50% is billed once the stand is received.',
        'Sama dengan alamat usaha di atas': 'Same as the business address above',
        'Nama Penerima *': 'Recipient Name *',
        'Nama pemilik / penanggung jawab': 'Owner / person in charge',
        'Isi nama penerima minimal 3 karakter.': 'Enter a recipient name of at least 3 characters.',
        'Alamat Lengkap Pengiriman *': 'Full Shipping Address *',
        'Jalan, nomor, kota, kode pos': 'Street, number, city, postal code',
        'Isi alamat lengkap minimal 10 karakter.': 'Enter a full address of at least 10 characters.',
        'Catatan Tambahan untuk Tim Developer Digitra (Opsional)': 'Extra Notes for the Digitra Developer Team (Optional)',
        'Contoh: Tolong pasang QRIS toko kami dan aktifkan opsi pengiriman kurir...': 'Example: Please set up our store QRIS and enable the courier delivery option...',
        'Bagian D • Paket Pro & Add-on (Opsional)': 'Part D • Pro Package & Add-ons (Optional)',
        'Paket Pro & Add-on Pilihan Anda': 'Your Pro Package & Add-on Choices',
        'Paket Pro — Kustom Bebas': 'Pro Package — Fully Custom',
        'Kustom bebas untuk klien besar / franchise. Pilih salah satu atau keduanya sesuai kebutuhan.': 'Fully custom for large clients / franchises. Choose one or both as you need.',
        'Pilihan Paket Pro Anda': 'Your Pro Package Choice',
        'Belum dipilih': 'Not selected',
        'Kustom Web': 'Custom Web',
        'Desain kustom bebas — rombak total tampilan sesuai brand / franchise Anda.': 'Fully custom design — a total makeover of the look to match your brand / franchise.',
        'Kustom Domain': 'Custom Domain',
        'Domain .com resmi (menggantikan domain .my.id bawaan paket).': 'An official .com domain (replacing the package\'s default .my.id domain).',
        'Tanpa ini: Domain .my.id (gratis tahun pertama).': 'Without this: .my.id domain (free for the first year).',
        '✓ Otomatis aktif karena Anda memilih "Desain Baru dari Nol" di Bagian A.': '✓ Automatically active because you chose "Brand-New Design from Scratch" in Part A.',
        'Add-on Opsional': 'Optional Add-ons',
        '— pilih bebas sesuai kebutuhan': '— choose freely as needed',
        'Butuh sistem pesanan? Naikkan ke Complete (+Rp 400.000)': 'Need an ordering system? Upgrade to Complete (+Rp 400,000)',
        'Kustom Field Pop-Up Pemesanan': 'Custom Order Pop-Up Fields',
        'Tambah kolom isian khusus di pop-up pesanan (mis. catatan, level pedas, pilihan topping).': 'Add custom input fields to the order pop-up (e.g. notes, spice level, topping choices).',
        'Fitur Multi-Cabang & Multi-Admin WA': 'Multi-Branch & Multi-Admin WA Feature',
        'Satu website untuk beberapa cabang, tiap cabang dengan nomor WhatsApp admin sendiri.': 'One website for several branches, each branch with its own admin WhatsApp number.',
        'Bagian E • Checkout Pemesanan Website': 'Part E • Website Order Checkout',
        'Ringkasan Proyek, Biaya & Pembayaran': 'Project Summary, Costs & Payment',
        'Basis Desain:': 'Design Base:',
        'Paket & Mode:': 'Package & Mode:',
        'Skema Warna:': 'Colour Scheme:',
        'File Foto Di-upload:': 'Photo Files Uploaded:',
        'Domain:': 'Domain:',
        'Fisik Dikirim:': 'Physical Item Shipped:',
        'Estimasi Pengerjaan:': 'Estimated Turnaround:',
        '1–3 hari kerja': '1–3 working days',
        'Foto #1': 'Photo #1',
        'DP 50% setelah deal, pelunasan 50% ditagih setelah papan/stiker QR diterima di lokasi. Mulai tahun ke-2: perpanjangan domain & maintenance Rp 350.000/tahun. Server Rp 0 (Cloudflare Pages), tanpa biaya bulanan.':
            '50% deposit after the deal, the remaining 50% is billed once the QR stand/sticker arrives at your location. From year 2: domain renewal & maintenance Rp 350,000/year. Server Rp 0 (Cloudflare Pages), no monthly fees.',
        'Biaya Tahun ke-2:': 'Year-2 Fee:',
        'Rp 350.000/tahun': 'Rp 350,000/year',
        'Total Biaya Website:': 'Total Website Cost:',
        'Termin Pembayaran:': 'Payment Terms:',
        'DP 50%': '50% Deposit',
        'Lunas 100%': 'Full Payment',
        'QRIS Resmi Digitra Studio': 'Official Digitra Studio QRIS',
        'QRIS Digitra': 'Digitra QRIS',
        'Simulasikan Sudah Bayar': 'Simulate Payment Done',
        'Tandai Sudah Transfer': 'Mark Transfer as Done',
        '✓ Pembayaran QRIS Terverifikasi': '✓ QRIS Payment Verified',
        '✓ Bukti Transfer Terlampir': '✓ Transfer Proof Attached',
        'Preview Brief Otomatis ke Tim Digitra:': 'Automatic Brief Preview to the Digitra Team:',
        'Kirim Brief & Pesan Website via WhatsApp →': 'Send Brief & Order Website via WhatsApp →',
        'Cek Simulasi Web ↗': 'Check Web Simulation ↗',
        'Cetak PDF Brief': 'Print Brief as PDF',
        'Digitra — Web & AI Solutions • Langkah 3 dari 3: Kustomisasi, Upload Materi & Checkout': 'Digitra — Web & AI Solutions • Step 3 of 3: Customisation, Upload Materials & Checkout',
        'Cedar Heritage Footwear (Retail & Sepatu)': 'Cedar Heritage Footwear (Retail & Shoes)',
        'Hush Modern Izakaya (Resto & Kuliner)': 'Hush Modern Izakaya (Restaurant & Culinary)',
        'Barbearia Gentlemen’s Club (Barbershop VIP)': 'Barbearia Gentlemen’s Club (VIP Barbershop)'
    };

    const cap = (s) => s;
    const rules = [
        [/^Rp ([\d.]+)\/tahun$/, 'Rp $1/year'],
        [/^(\d+) File Foto Siap Pakai$/, '$1 photo file(s) ready to use'],
        [/^DP 50%: /, '50% Deposit: '],
        [/^Lunas: /, 'Paid in full: '],
        [/Papan Akrilik QR Meja \(Mewah\)/g, 'Acrylic Table QR Stand (Deluxe)'],
        [/1 Stiker QR/g, '1 QR Sticker'],
        [/Domain \.my\.id/g, '.my.id Domain'],
        [/Domain \.com/g, '.com Domain'],
        [/Kustom Web/g, 'Custom Web'],
        [/Kustom Domain/g, 'Custom Domain'],
        [/\(Paket Pro\)/g, '(Pro Package)'],
        [/^Paket Pro/g, 'Pro Package'],
        [/Makan di Tempat \/ Ambil \/ Antar/g, 'Dine-in / Pickup / Delivery']
    ];

    /* Kalimat paket Complete dibuat dari "popupLabel" tiap desain -> terjemahkan bagian dalamnya */
    function sentenceRule(core) {
        const m = core.match(/^Website kasir digital: (.*), mode Makan di Tempat \/ Ambil \/ Antar, struk WA otomatis, QRIS & Transfer, voucher diskon, menu via Google Sheets, Domain \.my\.id & Papan Akrilik QR Meja \(Mewah\)\.$/);
        if (!m) return null;
        const inner = exact[m[1]] || m[1];
        return 'Digital cashier website: ' + inner + ', Dine-in / Pickup / Delivery modes, automatic WA receipts, QRIS & transfer, discount vouchers, menu via Google Sheets, .my.id domain & Acrylic Table QR Stand (Deluxe).';
    }

    function translate(str) {
        if (typeof str !== 'string') return str;
        const lead = (str.match(/^\s*/) || [''])[0];
        const trail = (str.match(/\s*$/) || [''])[0];
        const core = str.trim().replace(/\s+/g, ' ');
        if (!core) return str;
        if (Object.prototype.hasOwnProperty.call(exact, core)) return lead + exact[core] + trail;
        const sr = sentenceRule(core);
        if (sr) return lead + sr + trail;
        let out = core;
        for (const [re, rep] of rules) out = out.replace(re, rep);
        return out === core ? str : lead + out + trail;
    }

    /* ---------------- mesin penerjemah halaman ---------------- */
    const KEY = 'digitra_lang';
    let lang = 'id';
    let obs = null;
    const skipSel = 'script,style,textarea,#waBriefPreview,[data-no-i18n]';

    function readStored() {
        try { return localStorage.getItem(KEY); } catch (e) { return null; }
    }
    function store(v) {
        try { localStorage.setItem(KEY, v); } catch (e) { /* abaikan */ }
    }

    function apply() {
        const en = lang === 'en';
        if (obs) obs.disconnect();
        document.documentElement.lang = en ? 'en' : 'id';

        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode: (n) => (n.parentElement && !n.parentElement.closest(skipSel)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
        });
        const nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);
        nodes.forEach((n) => {
            const orig = (n.__en !== undefined && n.nodeValue === n.__en) ? n.__id : n.nodeValue;
            const out = en ? translate(orig) : orig;
            n.__id = orig;
            n.__en = out;
            if (n.nodeValue !== out) n.nodeValue = out;
        });

        document.querySelectorAll('[placeholder],[title],[aria-label]').forEach((el) => {
            if (el.closest('#waBriefPreview,[data-no-i18n],script,style')) return;
            ['placeholder', 'title', 'aria-label'].forEach((attr) => {
                if (!el.hasAttribute(attr)) return;
                const k = '__id_' + attr, kEn = '__en_' + attr;
                const cur = el.getAttribute(attr);
                const orig = (el[kEn] !== undefined && cur === el[kEn]) ? el[k] : cur;
                const out = en ? translate(orig) : orig;
                el[k] = orig;
                el[kEn] = out;
                if (cur !== out) el.setAttribute(attr, out);
            });
        });

        // judul tab
        if (document.__titleId === undefined || document.title !== document.__titleEn) document.__titleId = document.title;
        document.__titleEn = en ? translate(document.__titleId) : document.__titleId;
        document.title = document.__titleEn;

        const btn = document.getElementById('siteLangBtn');
        if (btn) btn.querySelector('span').textContent = en ? 'EN' : 'ID';

        if (obs) obs.observe(document.body, { childList: true, subtree: true });
    }

    function setLang(v) {
        lang = v === 'en' ? 'en' : 'id';
        store(lang);
        apply();
        // demo yang tertanam (iframe) dimuat ulang agar ikut bahasa baru
        document.querySelectorAll('iframe').forEach((f) => { try { f.contentWindow.location.reload(); } catch (e) { /* abaikan */ } });
    }

    function mountToggle() {
        const b = document.createElement('button');
        b.id = 'siteLangBtn';
        b.type = 'button';
        b.setAttribute('aria-label', 'Ganti bahasa / Switch language');
        b.setAttribute('data-no-i18n', '');
        b.style.cssText = 'position:fixed;right:16px;bottom:16px;z-index:70;display:inline-flex;align-items:center;gap:8px;padding:9px 14px;border-radius:999px;border:1px solid rgba(255,255,255,.22);background:rgba(5,7,15,.82);backdrop-filter:blur(10px);color:#F5F7FF;font:700 12px Inter,system-ui,sans-serif;letter-spacing:.06em;cursor:pointer;box-shadow:0 10px 30px -10px rgba(0,0,0,.7)';
        b.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#00E5FF" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg><span>ID</span>';
        b.addEventListener('click', () => setLang(lang === 'id' ? 'en' : 'id'));
        document.body.appendChild(b);
    }

    function init() {
        const q = new URLSearchParams(location.search).get('lang');
        lang = (q === 'en' || q === 'id') ? q : (readStored() === 'en' ? 'en' : 'id');
        if (q) store(lang);
        mountToggle();
        let queued = false;
        obs = new MutationObserver(() => {
            if (lang !== 'en' || queued) return;
            queued = true;
            requestAnimationFrame(() => { queued = false; apply(); });
        });
        apply();
    }

    window.DIGITRA_SITE_I18N = { translate, setLang, exact };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
