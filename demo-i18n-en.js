/* =========================================================================
   DIGITRA — KAMUS TERJEMAHAN INDONESIA → ENGLISH untuk halaman demo
   Dipakai oleh semua file demo (folder demos) dan prototypes.html (tombol ID / EN).

   Cara kerja: demo memindai teks di halaman; bila teks (setelah spasi
   dirapikan) persis ada di `exact`, diganti terjemahannya. Sisanya diproses
   `rules` (pola/regex). Teks yang tidak ada di kamus dibiarkan apa adanya.
   Menambah teks baru di demo? Tambahkan padanannya di sini.
   Catatan: struk yang dikirim ke WhatsApp toko tetap berbahasa Indonesia
   (penerimanya kasir/pemilik toko).
   ========================================================================= */
window.DIGITRA_I18N_EN = (function () {
    const exact = {
        /* ---------- Panel demo Digitra (dock) ---------- */
        'Kontrol Demo Digitra': 'Digitra Demo Controls',
        'Buka Panel': 'Open Panel',
        '← Kembali ke Digitra': '← Back to Digitra',
        'Simulasi QR Meja': 'Table QR Simulation',
        'Simulasi Google Sheets': 'Google Sheets Simulation',
        'Sembunyikan Panel Demo': 'Hide Demo Panel',
        'Pilih Kategori Demo:': 'Choose Demo Category:',
        'Cafe': 'Cafe',
        'Resto': 'Dining',
        'Retail': 'Retail',
        'Barber': 'Barber',
        'Bandingkan Kualitas Paket:': 'Compare Package Quality:',
        'Pilih & Pesan Desain Ini di Digitra': 'Choose & Order This Design at Digitra',

        /* ---------- Banner paket ---------- */
        'Tampilan Paket Complete — Rp 899.000': 'Complete Package View — Rp 899,000',
        'Website kasir digital lengkap dengan desain berkarakter & animasi interaktif + domain .my.id & Papan Akrilik QR Meja (Mewah).':
            'A complete digital cashier website with a characterful design & interactive animation + .my.id domain & a deluxe acrylic table QR stand.',
        '✓ Dine-in / Pickup / Antar': '✓ Dine-in / Pickup / Delivery',
        '✓ Struk WA Otomatis': '✓ Automatic WhatsApp Receipt',
        '✓ QRIS & Transfer': '✓ QRIS & Bank Transfer',
        '✓ Voucher Diskon': '✓ Discount Vouchers',
        '✓ Menu via Google Sheets': '✓ Menu via Google Sheets',
        '✓ 2 Bahasa (ID/EN)': '✓ 2 Languages (ID/EN)',
        'Best Seller': 'Best Seller',
        'Tampilan Paket Starter — Rp 499.000': 'Starter Package View — Rp 499,000',
        'Hanya katalog 1 halaman standar & tombol chat WA manual + domain .my.id & 1 stiker QR (Tanpa sistem pesanan/keranjang, Tanpa QRIS, Tanpa voucher, Tanpa Google Sheets, Tanpa Animasi).':
            'Just a standard 1-page catalog & a manual WhatsApp chat button + .my.id domain & 1 QR sticker (no ordering/cart system, no QRIS, no vouchers, no Google Sheets, no animation).',
        'Lihat Complete (899rb)': 'See Complete (899k)',
        'Katalog Produk & Layanan Standar (Paket Starter)': 'Standard Product & Service Catalog (Starter Package)',
        'Fitur Premium Terkunci di Paket Starter': 'Premium Features Locked in Starter Package',
        'Ingin Website Usaha Anda Tampil Berkelas Seperti Brand Nasional?': 'Want Your Business Website to Look as Polished as a National Brand?',
        'Di': 'In the',
        'Paket Complete (Rp 899rb — Best Seller)': 'Complete Package (Rp 899k — Best Seller)',
        'Anda mendapatkan website kasir otomatis: pop-up pemesanan khas kategori, struk WA otomatis, QRIS, voucher diskon, menu via Google Sheets, 2 bahasa, dan Papan Akrilik QR Meja.':
            'you get an automatic cashier website: category-specific order pop-up, automatic WhatsApp receipt, QRIS, discount vouchers, menu via Google Sheets, 2 languages, and an acrylic table QR stand.',
        'Lihat Paket Complete (Best Seller) Sekarang →': 'See the Complete Package (Best Seller) Now →',
        'Chat WA': 'Chat WA',

        /* ---------- QR meja / standee ---------- */
        'Simulasi Standee QR Akrilik Meja (Pesan dari Meja)': 'Acrylic Table QR Stand Simulation (Order from Table)',
        'SCAN UNTUK PESAN DARI MEJA': 'SCAN TO ORDER FROM YOUR TABLE',
        'Bebas Antre • Tanpa Download Aplikasi': 'No Queue • No App Download',
        'Pilih Nomor Meja Pelanggan:': 'Choose Customer Table Number:',
        'Preferensi Penyajian Dapur:': 'Kitchen Serving Preference:',
        'Sajikan Bersamaan': 'Serve Together',
        'Minuman / Appetizer Duluan': 'Drinks / Appetizer First',
        'Bungkus (Takeaway)': 'Takeaway',
        'Simulasikan Scan QR & Mulai Pesan dari Meja': 'Simulate QR Scan & Start Ordering from Table',
        'Panggil Pelayan / Bill ke WA': 'Call Waiter / Bill via WA',
        'Panggil Pelayan ke Meja': 'Call Waiter to Table',

        /* ---------- Checkout & pembayaran ---------- */
        'Nama Pemesan / Tamu *': 'Customer / Guest Name *',
        'Nomor Meja / Opsi Saji *': 'Table Number / Serving Option *',
        'Alamat Pengantaran *': 'Delivery Address *',
        'Jam Pengambilan *': 'Pickup Time *',
        'Alamat Lengkap Pengiriman *': 'Full Shipping Address *',
        'Tanggal Kedatangan & Cabang *': 'Arrival Date & Branch *',
        'Mode Pesanan:': 'Order Mode:',
        'Makan di Tempat': 'Dine-in',
        'Ambil Sendiri': 'Pickup',
        'Diantar': 'Delivery',
        'Klaim Kode Voucher:': 'Claim Voucher Code:',
        'HEMAT20 (-20%)': 'HEMAT20 (-20%)',
        'JUMATBERKAH (-15rb)': 'JUMATBERKAH (-15k)',
        'Pilih Metode Pembayaran:': 'Choose Payment Method:',
        'Menunggu Pembayaran': 'Awaiting Payment',
        'SIMULASI LUNAS TERVERIFIKASI': 'SIMULATED PAYMENT VERIFIED',
        'QRIS Instan': 'Instant QRIS',
        'Transfer Bank': 'Bank Transfer',
        'Bayar di Kasir': 'Pay at Cashier',
        'Bayar di Lounge': 'Pay at Lounge',
        'DP 50% PO': '50% Pre-Order Deposit',
        'Simulasikan "Sudah Scan & Bayar"': 'Simulate "Scanned & Paid"',
        'Pembayaran QRIS Terkonfirmasi': 'QRIS Payment Confirmed',
        'Tandai Sudah Transfer Bank': 'Mark Bank Transfer as Done',
        'Bukti Transfer Terlampir ke Struk WA': 'Transfer Proof Attached to WA Receipt',
        'Salin Rek': 'Copy Account No.',
        'Tersalin!': 'Copied!',
        'Pesanan akan langsung diproses dan pembayaran sebesar': 'Your order will be processed right away and a payment of',
        'dilakukan langsung di kasir / setelah layanan selesai.': 'is made directly at the cashier / after the service is done.',
        'Preview Format Struk Otomatis ke WhatsApp:': 'Automatic Receipt Format Preview to WhatsApp:',
        'Kirim Struk Pesanan & Bukti Bayar ke WhatsApp': 'Send Order Receipt & Payment Proof to WhatsApp',
        'Kirim Pass Reservasi ke WhatsApp': 'Send Reservation Pass to WhatsApp',
        'Lihat Struk WA': 'View WA Receipt',
        'Voucher': 'Voucher',

        /* ---------- Google Sheets ---------- */
        'Zero-Code Live Menu via Google Sheets': 'Zero-Code Live Menu via Google Sheets',
        'Panel Simulasi Google Sheets Pemilik UMKM': 'Business Owner Google Sheets Simulation Panel',
        'Ubah harga atau klik status': 'Change a price or click the',
        'Tersedia / Habis': 'Available / Sold Out',
        'di bawah ini—tampilan kategori yang sedang aktif akan berubah secara instan tanpa koding!': 'status below — the active category view will change instantly, no coding needed!',
        'Nama Produk / Layanan': 'Product / Service Name',
        'Harga Jual (Rp)': 'Selling Price (Rp)',
        'Status Ketersediaan': 'Availability Status',
        'Tersedia': 'Available',
        'Habis': 'Sold Out',

        /* ---------- Harth ---------- */
        'Menu': 'Menu',
        'Pesan dari Meja (Meja #07)': 'Order from Table (Table #07)',
        'Scan QR Meja #07': 'Scan Table QR #07',
        'Simulasi Scan QR Meja': 'Simulate Table QR Scan',
        'Biji kopi pilihan yang disangrai hangat setiap hari. Duduk santai di meja Anda, pilih menu, dan pesanan langsung diantar barista kami.':
            'Hand-picked beans, roasted fresh every day. Sit back at your table, pick your menu, and our baristas deliver your order straight to you.',
        'Komisi Ojol': 'Delivery-App Commission',
        'Crafted with care, using the finest ingredients. Klik tombol': 'Crafted with care, using the finest ingredients. Tap the',
        'pada kartu untuk memesan langsung dari': 'button on a card to order directly from',
        'Klaim Voucher HEMAT20 →': 'Claim HEMAT20 Voucher →',
        'Harth Coffee berawal dari ide sederhana: kopi yang baik mempertemukan orang-orang baik. Kini dilengkapi sistem':
            'Harth Coffee began with a simple idea: good coffee brings good people together. Now equipped with a',
        'Pesan dari Meja (Smart QR Table Concierge)': 'Order from Table (Smart QR Table Concierge)',
        'agar Anda bebas menikmati obrolan hangat tanpa perlu antre di kasir.': 'system so you can enjoy warm conversation without queuing at the cashier.',
        'Coba Fitur Meja #07 →': 'Try the Table #07 Feature →',
        'Biji Arabika petani lokal Jawa Barat.': 'Arabica beans from local West Java farmers.',
        'Disangrai segar setiap pekan.': 'Freshly roasted every week.',
        'Scan QR akrilik di meja, langsung diantar.': 'Scan the acrylic QR on your table and it is delivered to you.',
        'Kreasi musiman bebas komisi aplikasi.': 'Seasonal creations, free of app commissions.',
        'LIVE SPACE STATUS: QUIET • NYAMAN WFC': 'LIVE SPACE STATUS: QUIET • WFC FRIENDLY',
        'Jl. Cipete Raya No. 42, Jakarta Selatan. Ruang tenang berlimpah cahaya alami dengan mesin sangrai Probat dan koneksi internet berkecepatan tinggi.':
            'Jl. Cipete Raya No. 42, South Jakarta. A quiet space full of natural light with a Probat roaster and high-speed internet.',
        'Kecepatan Wi-Fi': 'Wi-Fi Speed',
        'Stopkontak Meja': 'Table Power Outlets',
        '14/18 Meja Tersedia': '14/18 Tables Available',
        'Jadwal Sangrai Biji': 'Bean Roasting Schedule',
        'Pukul 15:00 WIB': 'At 15:00 WIB',
        'Area Parkir': 'Parking Area',
        'Luas & Rak Sepeda': 'Spacious & Bike Rack',
        'Buka Rute di Google Maps →': 'Open Route in Google Maps →',
        'Booking Meja WFC': 'Book a WFC Table',
        'Peta Lokasi Harth Specialty Coffee': 'Harth Specialty Coffee Location Map',
        'Struk Barista & QRIS': 'Barista Receipt & QRIS',
        'Struk Pesanan Meja & Pickup': 'Table & Pickup Order Receipt',
        '1. Pilih Biji Kopi & Susu (Beans & Milk):': '1. Choose Beans & Milk:',
        '2. Takaran Gula & Es (Sweetness & Ice):': '2. Sweetness & Ice Level:',
        'Catatan Barista (misal: latte art daun / oat ekstra)...': 'Barista note (e.g. leaf latte art / extra oat)...',
        '+ Masukkan ke Tiket Meja Barista →': '+ Add to Barista Table Ticket →',

        /* ---------- Hush ---------- */
        'Menu Meja': 'Table Menu',
        'Lokasi & Delivery': 'Location & Delivery',
        'Pesan dari Meja #07': 'Order from Table #07',
        'Nikmati hidangan aburi sushi & robatayaki hangat langsung di meja Anda. Pilih menu dari HP, atur urutan keluar makanan, dan pesanan langsung masuk ke WhatsApp dapur kami!':
            'Enjoy aburi sushi & warm robatayaki right at your table. Pick your menu from your phone, set the order dishes come out, and your order goes straight to our kitchen on WhatsApp!',
        'Pesan ke Meja Sekarang': 'Order to Your Table Now',
        'Lihat QR Akrilik Meja': 'View Acrylic Table QR',
        'Hidangan Favorit Meja': 'Table Favorites',
        'Klik tombol tambah untuk memasukkan hidangan ke tiket pesanan': 'Tap the add button to put a dish on your order ticket',
        '+ Pesan Meja': '+ Order to Table',
        'Scan QR di Meja': 'Scan the QR on Your Table',
        'Tanpa perlu panggil pelayan berkali-kali saat jam sibuk, langsung pilih dari meja Anda.': 'No need to call the waiter again and again at rush hour — just choose from your table.',
        'Atur Urutan Saji': 'Set the Serving Order',
        'Pilih apakah minuman/appetizer keluar duluan atau seluruh hidangan disajikan bersamaan.': 'Choose whether drinks/appetizers come out first or all dishes are served together.',
        '0% Biaya Aplikasi': '0% App Fees',
        'Harga jujur sesuai buku menu ditambah kode voucher promo langsung di struk WA.': 'Honest menu-book prices plus promo voucher codes right on the WA receipt.',
        'Sedang makan bersama teman atau keluarga di meja? Pilih preferensi penyajian meja Anda di bawah ini sebelum mengirim pesanan ke dapur:':
            'Dining with friends or family at the table? Choose your table serving preference below before sending your order to the kitchen:',
        'Appetizer Duluan': 'Appetizer First',
        'Lokasi Restoran & Zona Kurir Instan': 'Restaurant Location & Instant Courier Zone',
        'SCBD Lot 14, Jakarta Selatan. Tersedia layanan': 'SCBD Lot 14, South Jakarta. We offer',
        'di Lobby Timur serta pengantaran': 'at the East Lobby as well as delivery in a',
        'agar kesegaran Sashimi terjaga hingga ke rumah Anda.': 'so your sashimi stays fresh all the way to your home.',
        'Cek Estimasi Kurir Instan (GoSend / GrabExpress):': 'Check Instant Courier Estimate (GoSend / GrabExpress):',
        '20 Mnt • Free Dry Ice': '20 Min • Free Dry Ice',
        '35 Mnt • Thermal Bag': '35 Min • Thermal Bag',
        'Min. 6 Pax': 'Min. 6 Guests',
        'Navigasi ke Lobby Valet →': 'Navigate to Valet Lobby →',
        'Reservasi / Delivery': 'Reservation / Delivery',
        'Peta Lokasi Hush Modern Restaurant': 'Hush Modern Restaurant Location Map',
        'Tiket Dapur & QRIS': 'Kitchen Ticket & QRIS',
        'Tiket Pesanan Dapur & QRIS Resto': 'Kitchen Order Ticket & Restaurant QRIS',
        '1. Pilih Teknik Saji / Saus Chef:': '1. Choose Serving Technique / Chef Sauce:',
        '2. Urutan Keluar Hidangan & Filter Alergi:': '2. Dish Serving Order & Allergy Filter:',
        'Spicy Mayo Terpisah': 'Spicy Mayo on the Side',
        'Kids Friendly (Tanpa Wasabi)': 'Kids Friendly (No Wasabi)',
        'Sajikan Bersamaan (Meja)': 'Serve Together (Table)',
        'Appetizer Keluar Duluan': 'Appetizer Comes Out First',
        'Tanpa MSG / Kids Safe': 'No MSG / Kids Safe',
        'Alergi Kacang / Pedas Pisah': 'Nut Allergy / Spice on the Side',
        'Instruksi Chef (misal: matang sempurna, jahe ekstra)...': 'Chef instructions (e.g. perfectly cooked, extra ginger)...',

        /* ---------- Cedar ---------- */
        'WORKSHOP & SHIPPING': 'WORKSHOP & SHIPPING',
        'Setiap pasang sepatu Cedar dikerjakan secara handmade oleh pengrajin sepatu kulit berpengalaman menggunakan konstruksi Goodyear-Welt yang tahan puluhan tahun. Pilih ukuran kaki Anda (EU 39–44), ukir inisial monogram Anda, dan pesan langsung via WhatsApp dengan garansi tukar ukuran gratis.':
            'Every pair of Cedar shoes is handmade by experienced leather shoemakers using Goodyear-Welt construction that lasts for decades. Choose your foot size (EU 39–44), engrave your monogram initials, and order directly via WhatsApp with a free size-exchange guarantee.',
        'BESPOKE FITTING STUDIO & NATIONAL SHIPPING ORIGIN': 'BESPOKE FITTING STUDIO & NATIONAL SHIPPING ORIGIN',
        'Jl. Braga Heritage No. 28, Bandung. Kunjungi bengkel sepatu kami untuk': 'Jl. Braga Heritage No. 28, Bandung. Visit our shoe workshop for a',
        'Ukur Kaki Presisi 3D (Bespoke Fitting)': 'Precision 3D Foot Measurement (Bespoke Fitting)',
        'atau pesan secara online—dikirim setiap hari dengan kotak kayu cedar eksklusif ke seluruh Indonesia.': 'or order online — shipped daily in an exclusive cedar wood box across Indonesia.',
        '1–2 Hari (Jawa)': '1–2 Days (Java)',
        'Packing Kayu Aman': 'Safe Wooden Packing',
        'GARANSI TUKAR': 'EXCHANGE GUARANTEE',
        'Bebas Tukar Size': 'Free Size Exchange',
        'RUTE KE BENGKEL BRAGA': 'ROUTE TO BRAGA WORKSHOP',
        'CEK ONGKIR & ORDER': 'CHECK SHIPPING & ORDER',
        'Peta Lokasi Cedar Shoe Workshop Bandung': 'Cedar Shoe Workshop Bandung Location Map',
        'Klaim voucher diskon pelanggan baru atau konsultasi ukuran sepatu kulit langsung via WhatsApp CS kami.': 'Claim a new-customer discount voucher or get leather shoe size advice directly via our WhatsApp customer service.',
        'Bandung, Indonesia': 'Bandung, Indonesia',
        'Garansi Sol 2 Tahun': '2-Year Sole Warranty',
        'Tukar Ukuran Gratis': 'Free Size Exchange',
        'Pengiriman Seluruh Indonesia': 'Nationwide Shipping',
        'Order Sepatu Handmade (+Ongkir Kurir)': 'Handmade Shoe Order (+Courier Shipping)',
        'Order Sheet & Ongkir': 'Order Sheet & Shipping',
        'Lembar Pengiriman Sepatu & Kalkulator Kurir': 'Shoe Shipping Sheet & Courier Calculator',
        'Pilih Ekspedisi Pengiriman dari Workshop Bandung:': 'Choose Shipping Courier from the Bandung Workshop:',
        'JNE Reguler': 'JNE Regular',
        'SiCepat Kargo': 'SiCepat Cargo',
        'Panduan Panjang Kaki (EU → CM):': 'Foot Length Guide (EU → CM):',
        'Garansi Tukar Size Gratis': 'Free Size Exchange Guarantee',
        '1. Pilih Ukuran Sepatu & Warna Kulit:': '1. Choose Shoe Size & Leather Colour:',
        '2. Konstruksi Sol (Outsole Welt):': '2. Sole Construction (Outsole Welt):',
        'Gratis Ukir Inisial Nama di Kulit (Maks 3 Huruf):': 'Free Initials Engraving on the Leather (Max 3 Letters):',
        '+ SIMPAN KE LEMBAR PESANAN PENGRAJIN →': '+ SAVE TO THE CRAFTSMAN ORDER SHEET →',
        'Custom Size & Monogram': 'Custom Size & Monogram',

        /* ---------- Barbearia ---------- */
        'Di Barbearia, tradisi dan ketampanan maskulin tidak pernah lekang oleh waktu. Pilih paket perawatan & kunci jam kedatangan Anda tanpa antre.':
            'At Barbearia, tradition and masculine style never go out of fashion. Pick a grooming package & lock in your arrival time with no queue.',
        'AGENDAR HORÁRIO / BOOKING JADWAL': 'BOOK A SLOT / SCHEDULE BOOKING',
        'ENDEREÇO / LOKASI': 'ADDRESS / LOCATION',
        'RESERVASI WHATSAPP': 'WHATSAPP RESERVATION',
        'JAM OPERASIONAL': 'OPENING HOURS',
        'Senin – Sabtu: 10:00 s/d 22:00': 'Monday – Saturday: 10:00 to 22:00',
        'SEN – JUM': 'MON – FRI',
        'SABTU': 'SATURDAY',
        'MINGGU': 'SUNDAY',
        'TUTUP / VIP': 'CLOSED / VIP',
        'Lebih dari sekadar pangkas rambut, Barbearia adalah ruang perawatan diri, relaksasi handuk hangat, dan konsultasi visagisme untuk menampilkan versi terbaik Anda.':
            'More than a haircut, Barbearia is a space for self-care, hot-towel relaxation, and visagism consultation to bring out your best version.',
        'Klik layanan di bawah untuk memilih kapster favorit dan mengunci slot jam kedatangan Anda langsung ke WhatsApp resepsionis kami.':
            'Click a service below to choose your favourite barber and lock your arrival slot straight to our receptionist on WhatsApp.',
        'PILIH PAKET & JAM BOOKING': 'CHOOSE PACKAGE & BOOKING TIME',
        'Klik pada layanan di dalam bingkai emas untuk memilih jadwal jam kedatangan & kapster Anda.': 'Click a service inside the gold frame to choose your arrival time & barber.',
        'Konsultasi anatomi wajah, potong presisi, keramas & pomade matte.': 'Face-shape consultation, precision cut, shampoo & matte pomade.',
        'Perapian kontur leher, jambang, dan nutrisi pelurusan rambut pria.': 'Neckline and sideburn tidy-up, plus a men\'s hair-straightening treatment.',
        'PILIH JADWAL & BARBER': 'CHOOSE SCHEDULE & BARBER',
        'Ritual handuk panas aromaterapi, pisau cukur klasik & balm organik.': 'Aromatherapy hot-towel ritual, classic razor & organic balm.',
        'Sculpting garis jenggot simetris & perawatan minyak cedarwood.': 'Symmetrical beard line sculpting & cedarwood oil care.',
        'Detoks pori wajah dengan uap ozon hangat dan masker charcoal.': 'Facial pore detox with warm ozone steam and a charcoal mask.',
        'Paket transformasi penuh 90 menit + kopi espresso gratis.': 'Full 90-minute transformation package + free espresso.',
        'LOCALIZAÇÃO & VIP LOUNGE': 'LOCATION & VIP LOUNGE',
        'Jl. Senopati Heritage No. 88, Kebayoran Baru, Jakarta Selatan. Dilengkapi area tunggu': 'Jl. Senopati Heritage No. 88, Kebayoran Baru, South Jakarta. Equipped with a waiting area with',
        'serta parkir VIP khusus tamu reservasi.': 'and VIP parking reserved for reservation guests.',
        'Parkir VIP': 'VIP Parking',
        'Valet Gratis Depan Lobby': 'Free Valet at the Lobby',
        'BUKA RUTE GOOGLE MAPS': 'OPEN GOOGLE MAPS ROUTE',
        'LIHAT PASS RESERVASI': 'VIEW RESERVATION PASS',
        'VIP Appointment Pass Barbearia': 'Barbearia VIP Appointment Pass',
        'Pass Reservasi VIP': 'VIP Reservation Pass',
        'Tiket Reservasi Kursi & Master Barber': 'Chair Reservation & Master Barber Ticket',
        'Rp 65.000 • Durasi ~45 Menit': 'Rp 65,000 • Duration ~45 Minutes',
        '1. Pilih Slot Jam & Master Barber:': '1. Choose Time Slot & Master Barber:',
        '2. Complimentary Welcome Drink di Lounge:': '2. Complimentary Welcome Drink at the Lounge:',
        'Request gaya (misal: Mid Fade / rapi natural)...': 'Style request (e.g. Mid Fade / neat natural)...',
        'Tamu:': 'Guests:',
        'Peta Lokasi Barbearia Heritage Senopati': 'Barbearia Heritage Senopati Location Map',
        'Hot Ceramic Cup (Meja)': 'Hot Ceramic Cup (Table)',
        'KUNCI JADWAL & BUKA PASS RESERVASI →': 'LOCK SCHEDULE & OPEN RESERVATION PASS →'
    };

    /* Pola umum untuk teks yang mengandung angka / nama dinamis */
    const rules = [
        [/^Nominal Otomatis:/, 'Auto Amount:'],
        [/^Hemat (Rp .*)$/, 'Save $1'],
        [/^Rekening Tujuan:/, 'Destination Account:'],
        [/^Tambah (.+)$/, 'Add $1'],
        [/^Pesan dari Meja \((.*)\)$/, 'Order from Table ($1)'],
        [/^Tersedia\b/, 'Available'],
        [/Meja #/g, 'Table #'],
        [/MEJA NOMOR #/g, 'TABLE NUMBER #'],
        [/\bMEJA #/g, 'TABLE #'],
        [/Sajikan Bersamaan/g, 'Serve Together'],
        [/Tanpa Alergi/g, 'No Allergies'],
        [/Struk Meja/g, 'Table Receipt'],
        [/Tiket Dapur/g, 'Kitchen Ticket'],
        [/DINE-IN TABLE ORDER AKTIF/g, 'DINE-IN TABLE ORDER ACTIVE'],
        [/Tambahkan ke Order Dapur/g, 'Add to Kitchen Order'],
        [/Struk /g, 'Receipt: '],
        [/Ambil Sendiri \(Pickup\)/g, 'Pickup'],
        [/Diantar \(Delivery\)/g, 'Delivery'],
        [/Makan di Tempat/g, 'Dine-in'],
        [/Kasir\b/g, 'Cashier']
    ];

    function translate(str) {
        if (typeof str !== 'string') return str;
        const lead = (str.match(/^\s*/) || [''])[0];
        const trail = (str.match(/\s*$/) || [''])[0];
        const core = str.trim().replace(/\s+/g, ' ');
        if (!core) return str;
        if (Object.prototype.hasOwnProperty.call(exact, core)) return lead + exact[core] + trail;
        let out = core;
        for (const [re, rep] of rules) out = out.replace(re, rep);
        return out === core ? str : lead + out + trail;
    }

    return { exact, rules, translate };
})();
