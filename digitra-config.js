/* =========================================================================
   DIGITRA — KONFIGURASI PAKET & HARGA (satu sumber kebenaran)
   Sumber awal: "Laporan Update Bisnis Digitra" (Oktober 2026), bagian 4 & 6.
   Dipakai oleh: pilih-paket.html, kustomisasi.html
   Ubah harga / isi paket di sini, jangan di masing-masing halaman.
   ========================================================================= */
window.DIGITRA = (function () {
    return {
        // Nomor WhatsApp admin Digitra penerima brief (format 62xxxxxxxxxx) — nomor admin resmi Digitra
        adminWa: '628561710800',

        leadTime: '1–3 hari kerja',
        renewalFee: 350000, // biaya tahun ke-2 dst: perpanjangan domain + maintenance
        renewalNote: 'Mulai tahun ke-2: perpanjangan domain & maintenance Rp 350.000/tahun. Server Rp 0 (Cloudflare Pages), tanpa biaya bulanan.',
        payNote: 'DP 50% setelah deal, pelunasan 50% ditagih setelah papan/stiker QR diterima di lokasi.',

        // Paket yang DITAWARKAN di halaman Pilih Paket & demo: hanya Starter dan Complete.
        packages: {
            starter: {
                id: 'starter',
                name: 'Starter',
                price: 499000,
                short: 'Rp 499rb',
                target: 'UMKM yang hanya butuh katalog foto & tombol chat WA manual',
                domain: 'Domain .my.id',
                physical: '1 Stiker QR'
            },
            complete: {
                id: 'complete',
                name: 'Complete',
                price: 899000,
                short: 'Rp 899rb',
                target: 'Semua UMKM F&B — website kasir digital dengan sistem pesanan pintar',
                domain: 'Domain .my.id',
                physical: 'Papan Akrilik QR Meja (Mewah)'
            }
        },

        // PAKET PRO — bukan paket tersendiri, melainkan dua pilihan kustom yang dipilih bebas
        // (salah satu atau keduanya) di langkah Kustomisasi, Bagian D. Harga dipecah per item.
        proName: 'Paket Pro',
        proTagline: 'Kustom bebas untuk klien besar / franchise',
        proOptions: [
            {
                id: 'customWeb',
                name: 'Kustom Web',
                desc: 'Desain kustom bebas — rombak total tampilan sesuai brand / franchise Anda.',
                price: 350000
            },
            {
                id: 'customDomain',
                name: 'Kustom Domain',
                desc: 'Domain .com resmi (menggantikan domain .my.id bawaan paket).',
                price: 200000,
                domain: 'Domain .com'
            }
        ],

        // Add-on opsional (Bagian D kustomisasi). Butuh sistem pesanan -> hanya untuk Complete.
        addons: [
            {
                id: 'customPopup',
                name: 'Kustom Field Pop-Up Pemesanan',
                desc: 'Tambah kolom isian khusus di pop-up pesanan (mis. catatan, level pedas, pilihan topping).',
                price: 150000
            },
            {
                id: 'multiBranch',
                name: 'Fitur Multi-Cabang & Multi-Admin WA',
                desc: 'Satu website untuk beberapa cabang, tiap cabang dengan nomor WhatsApp admin sendiri.',
                price: 200000
            }
        ]
    };
})();
