/* =========================================
   KAMUS BAHASA (DICTIONARY)
   ========================================= */
const translations = {
    // BAHASA INDONESIA
    id: {
        // Top Bar & Nav
        app_text: "Unduh Aplikasi JBA - Lelang Otomotif No.1",
        btn_download: "Unduh",
        btn_login: "\Kontak Kami",
        nav_home: "BERANDA",
        nav_auction: "LELANG JBA",
        nav_howto: "TATA CARA LELANG",
        nav_location: "LOKASI LELANG",
        nav_member: "PROGRAM PELANGGAN",
        
        // Hero Section
        hero_title: "Ban dan Scrap Juga Bisa Dilelang!",
        hero_subtitle: "Mau Ikut? Ini Jadwalnya!",
        hero_date_text: "Sabtu, 17 Januari 2026",
        btn_cta: "Ikuti Lelangnya",
        
        // Search Widget
        search_title: "Sedang Cari Kendaraan Apa?",
        tab_car: "Mobil",
        tab_bike: "Motor",
        tab_other: "Lainnya",
        btn_search: "CARI",
        
        // Schedule Section
        schedule_title: "Jadwal Lelang Terdekat",
        view_all: "Lihat Semua",
        
        // Footer
        footer_office: "Kantor Pusat JBA Indonesia",
        footer_service: "Layanan",
        footer_info: "Informasi",
        footer_help: "Bantuan",
        footer_copy: "© 2026 PT JBA Indonesia. Hak Cipta Terpelihara."
    },

    // BAHASA INGGRIS
    en: {
        app_text: "Download JBA App - No.1 Automotive Auction",
        btn_download: "Download",
        btn_login: "Login / Register",
        nav_home: "HOME",
        nav_auction: "AUCTION LIST",
        nav_howto: "HOW TO BID",
        nav_location: "LOCATIONS",
        nav_member: "MEMBERSHIP",
        
        hero_title: "Tires and Scrap Can Also Be Auctioned!",
        hero_subtitle: "Want to Join? Here is the Schedule!",
        hero_date_text: "Saturday, January 17, 2026",
        btn_cta: "Join Auction",
        
        search_title: "What Vehicle Are You Looking For?",
        tab_car: "Car",
        tab_bike: "Motorcycle",
        tab_other: "Others",
        btn_search: "SEARCH",
        
        schedule_title: "Upcoming Auction Schedule",
        view_all: "View All",
        
        footer_office: "JBA Indonesia Head Office",
        footer_service: "Services",
        footer_info: "Information",
        footer_help: "Help",
        footer_copy: "© 2026 PT JBA Indonesia. All Rights Reserved."
    },

    // BAHASA JEPANG
    jp: {
        app_text: "JBAアプリをダウンロード - No.1 自動車オークション",
        btn_download: "ダウンロード",
        btn_login: "ログイン / 登録",
        nav_home: "ホーム",
        nav_auction: "オークション一覧",
        nav_howto: "入札方法",
        nav_location: "オークション会場",
        nav_member: "会員プログラム",
        
        hero_title: "タイヤやスクラップもオークション可能です！",
        hero_subtitle: "参加しませんか？スケジュールはこちら！",
        hero_date_text: "2026年1月17日（土）",
        btn_cta: "オークションに参加",
        
        search_title: "どの車両をお探しですか？",
        tab_car: "自動車",
        tab_bike: "バイク",
        tab_other: "その他",
        btn_search: "検索",
        
        schedule_title: "今後のオークションスケジュール",
        view_all: "すべて見る",
        
        footer_office: "JBAインドネシア 本社",
        footer_service: "サービス",
        footer_info: "インフォメーション",
        footer_help: "ヘルプ",
        footer_copy: "© 2026 PT JBA Indonesia. All Rights Reserved."
    }
};

/* =========================================
   LOGIKA PERGANTIAN BAHASA
   ========================================= */
function changeLanguage(lang) {
    // 1. Simpan preferensi ke LocalStorage
    localStorage.setItem('selectedLang', lang);

    // 2. Ambil semua elemen dengan atribut data-i18n
    const elements = document.querySelectorAll('[data-i18n]');

    // 3. Loop dan ganti teks
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // 4. Ubah Font untuk Bahasa Jepang agar lebih rapi
    if (lang === 'jp') {
        document.body.style.fontFamily = "'Noto Sans JP', 'Roboto', sans-serif";
    } else {
        document.body.style.fontFamily = "'Roboto', sans-serif";
    }

    // 5. Sinkronisasi Dropdown (jika ada di halaman)
    const selector = document.getElementById('language-selector');
    if (selector) selector.value = lang;
}

// Jalankan saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    // Ambil bahasa tersimpan atau default ke 'id' (Indonesia)
    const savedLang = localStorage.getItem('selectedLang') || 'id';
    changeLanguage(savedLang);

    // Event Listener untuk Dropdown
    const langSelect = document.getElementById('language-selector');
    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            changeLanguage(e.target.value);
        });
    }
    /* =========================================
   KAMUS BAHASA (DICTIONARY)
   ========================================= */
const translations = {
    id: {
        // --- GLOBAL (Nav & Footer) ---
        app_promo: "Unduh Aplikasi JBA - Lelang Otomotif No.1",
        btn_download: "Unduh",
        btn_login: "Kontak Kami",
        nav_home: "BERANDA",
        nav_auction: "LELANG JBA",
        nav_guide: "TATA CARA LELANG",
        nav_loc: "LOKASI LELANG",
        nav_member: "PROGRAM PELANGGAN",
        foot_ho: "Kantor Pusat JBA Indonesia",
        foot_service: "Layanan",
        foot_info: "Informasi",
        foot_help: "Bantuan",
        foot_copy: "&copy; 2026 PT JBA Indonesia. Hak Cipta Terpelihara.",

        // --- BERANDA (Index) ---
        hero_title: "Ban dan Scrap Juga Bisa Dilelang!",
        hero_subtitle: "Mau Ikut? Ini Jadwalnya!",
        btn_cta: "Ikuti Lelangnya",
        search_title: "Sedang Cari Kendaraan Apa?",
        sched_title: "Jadwal Lelang Terdekat",
        view_all: "Lihat Semua",

        // --- HALAMAN LELANG ---
        page_lelang_title: "Jadwal & Daftar Unit Lelang",
        filter_title: "Filter Pencarian",
        filter_reset: "Reset",
        filter_loc: "Lokasi Cabang",
        filter_year: "Tahun Kendaraan",
        filter_trans: "Transmisi",
        sort_label: "Urutkan:",
        sort_time: "Waktu: Terdekat",
        btn_apply: "Terapkan Filter",
        status_live: "LIVE SEKARANG",
        status_upcoming: "AKAN DATANG",
        lbl_lot: "Lot",
        lbl_grade: "Grade",
        lbl_price: "Harga Dasar",
        btn_detail: "Detail",
        btn_bid: "BID SEKARANG",

        // --- TATA CARA ---
        page_guide_title: "Panduan & Tata Cara Lelang",
        tab_buyer: "Cara Membeli",
        tab_seller: "Cara Menjual",
        step_1_title: "Registrasi & NIPL",
        step_1_desc: "Daftar dan beli Nomor Induk Peserta Lelang (NIPL) sebagai deposit.",
        step_2_title: "Cek Unit",
        step_2_desc: "Cek kondisi fisik kendaraan saat Open House.",
        
        // --- LOKASI ---
        page_loc_title: "Lokasi Jaringan Lelang",
        btn_direction: "Petunjuk Arah",
        loc_main: "CABANG UTAMA",

        // --- MEMBERSHIP ---
        page_member_title: "JBA Membership Priority",
        tier_silver: "Silver Member",
        tier_gold: "Gold Member",
        tier_plat: "Platinum Member",
        benefit_title: "Keuntungan Anggota"
    },
    en: {
        // --- GLOBAL ---
        app_promo: "Download JBA App - No.1 Automotive Auction",
        btn_download: "Download",
        btn_login: "Login / Register",
        nav_home: "HOME",
        nav_auction: "AUCTION LIST",
        nav_guide: "HOW TO BID",
        nav_loc: "LOCATIONS",
        nav_member: "MEMBERSHIP",
        foot_ho: "JBA Indonesia Head Office",
        foot_service: "Services",
        foot_info: "Information",
        foot_help: "Help",
        foot_copy: "&copy; 2026 PT JBA Indonesia. All Rights Reserved.",

        // --- HOME ---
        hero_title: "Tires and Scrap Can Also Be Auctioned!",
        hero_subtitle: "Want to Join? Here is the Schedule!",
        btn_cta: "Join Auction",
        search_title: "What Vehicle Are You Looking For?",
        sched_title: "Upcoming Auctions",
        view_all: "View All",

        // --- AUCTION PAGE ---
        page_lelang_title: "Auction Schedule & Unit List",
        filter_title: "Search Filters",
        filter_reset: "Reset",
        filter_loc: "Branch Location",
        filter_year: "Vehicle Year",
        filter_trans: "Transmission",
        sort_label: "Sort By:",
        sort_time: "Time: Earliest",
        btn_apply: "Apply Filter",
        status_live: "LIVE NOW",
        status_upcoming: "UPCOMING",
        lbl_lot: "Lot",
        lbl_grade: "Grade",
        lbl_price: "Base Price",
        btn_detail: "Details",
        btn_bid: "BID NOW",

        // --- GUIDE ---
        page_guide_title: "Auction Guide & Procedures",
        tab_buyer: "How to Buy",
        tab_seller: "How to Sell",
        step_1_title: "Registration & NIPL",
        step_1_desc: "Register and purchase Bidder ID Number (NIPL) as a deposit.",
        step_2_title: "Unit Inspection",
        step_2_desc: "Check vehicle physical condition during Open House.",

        // --- LOCATION ---
        page_loc_title: "Auction Network Locations",
        btn_direction: "Get Directions",
        loc_main: "MAIN BRANCH",

        // --- MEMBERSHIP ---
        page_member_title: "JBA Membership Priority",
        tier_silver: "Silver Member",
        tier_gold: "Gold Member",
        tier_plat: "Platinum Member",
        benefit_title: "Member Benefits"
    },
    jp: {
        // --- GLOBAL ---
        app_promo: "JBAアプリをダウンロード - No.1 自動車オークション",
        btn_download: "ダウンロード",
        btn_login: "ログイン / 登録",
        nav_home: "ホーム",
        nav_auction: "オークション一覧",
        nav_guide: "入札方法",
        nav_loc: "会場一覧",
        nav_member: "会員プログラム",
        foot_ho: "JBAインドネシア 本社",
        foot_service: "サービス",
        foot_info: "インフォメーション",
        foot_help: "ヘルプ",
        foot_copy: "&copy; 2026 PT JBA Indonesia. All Rights Reserved.",

        // --- HOME ---
        hero_title: "タイヤやスクラップもオークション可能です！",
        hero_subtitle: "参加しませんか？スケジュールはこちら！",
        btn_cta: "オークションに参加",
        search_title: "どの車両をお探しですか？",
        sched_title: "今後のオークション",
        view_all: "すべて見る",

        // --- AUCTION PAGE ---
        page_lelang_title: "オークションスケジュールと出品リスト",
        filter_title: "検索フィルター",
        filter_reset: "リセット",
        filter_loc: "支店所在地",
        filter_year: "年式",
        filter_trans: "トランスミッション",
        sort_label: "並び替え:",
        sort_time: "時間: 早い順",
        btn_apply: "フィルターを適用",
        status_live: "開催中",
        status_upcoming: "近日開催",
        lbl_lot: "ロット",
        lbl_grade: "評価点",
        lbl_price: "最低落札価格",
        btn_detail: "詳細",
        btn_bid: "今すぐ入札",

        // --- GUIDE ---
        page_guide_title: "オークションガイドと手順",
        tab_buyer: "購入方法",
        tab_seller: "出品方法",
        step_1_title: "登録とNIPL",
        step_1_desc: "登録し、保証金として入札者ID番号（NIPL）を購入します。",
        step_2_title: "車両検査",
        step_2_desc: "オープンハウス期間中に車両の状態を確認します。",

        // --- LOCATION ---
        page_loc_title: "オークションネットワーク",
        btn_direction: "行き方",
        loc_main: "主要支店",

        // --- MEMBERSHIP ---
        page_member_title: "JBAメンバーシップ・プライオリティ",
        tier_silver: "シルバー会員",
        tier_gold: "ゴールド会員",
        tier_plat: "プラチナ会員",
        benefit_title: "会員特典"
    }
};

/* =========================================
   LOGIKA JAVASCRIPT
   ========================================= */
function changeLanguage(lang) {
    localStorage.setItem('selectedLang', lang);

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    if (lang === 'jp') {
        document.body.style.fontFamily = "'Noto Sans JP', 'Roboto', sans-serif";
    } else {
        document.body.style.fontFamily = "'Roboto', sans-serif";
    }

    // Update semua dropdown bahasa di halaman
    const selectors = document.querySelectorAll('.lang-select');
    selectors.forEach(sel => sel.value = lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'id';
    changeLanguage(savedLang);

    const langSelector = document.getElementById('languageSelector');
    if (langSelector) {
        langSelector.value = savedLang;
        langSelector.addEventListener('change', (e) => {
            changeLanguage(e.target.value);
        });
    }
});
});

