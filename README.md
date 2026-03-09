# 🎓 Informasi USM - Portal Universitas Semarang

![Banner USM](https://usm.ac.id/wp-content/uploads/2022/10/Gedung-USM-1.jpg) <!-- Ganti dengan banner asli jika ada -->

[![Status](https://img.shields.io/badge/Status-Active-success.svg)]()
[![License](https://img.shields.io/badge/License-MIT-blue.svg)]()
[![Platform](https://img.shields.io/badge/Platform-Web-orange.svg)]()
[![Live Demo](https://img.shields.io/badge/Live_Demo-Lihat_Situs-blueviolet.svg)](http://usm-kw.page.gd/)

Selamat datang di repositori resmi **Portal Informasi Universitas Semarang (USM)**. 
Proyek ini adalah sistem antarmuka web modern, responsif, dan interaktif yang dibangun untuk menyajikan segala informasi mengenai profil, akademik, biaya, hingga jalur penerimaan mahasiswa baru (PMB) di Universitas Semarang.

> **🚀 Live Demo Berjalan:** Anda dapat melihat dan mencoba hasil langsung (*deployed version*) dari proyek ini di tautan berikut: 
> **👉 [http://usm-kw.page.gd/](http://usm-kw.page.gd/)**

---

## ✨ Fitur Utama

Situs web ini dirancang dengan fokus pada kemudahan pengguna (User Experience) dan kecepatan akses. Beberapa fitur utamanya adalah:

- 🏫 **Profil Komprehensif:** Menyajikan sejarah, visi misi, dan lingkungan kampus.
- 📚 **Sistem Akademik & Fakultas:** Akses cepat ke direktori fakultas dan program studi.
- 💰 **Kalkulator / Informasi Biaya Transparan:** Rincian estimasi biaya SPP dan paket studi kuliah dengan antarmuka tabel yang jelas (Kelas Pagi, Sore, Karyawan, RPL, dan Pascasarjana).
- 📱 **Desain UI/UX Modern & Responsif:** Komponen menggunakan navigasi model `glassmorphism`, efek *hover* interaktif, dan disesuaikan semaksimal mungkin untuk tampil prima di *smartphone* maupun dekstop.
- 💬 **Integrasi Asisten Chatbot UI:** Antarmuka obrolan pintar interaktif yang mampu menyimpan riwayat percakapan secara lokal (`LocalStorage`).
- 🔗 **Tautan Pintas Terpusat:** Penempatan strategis untuk akses sistem E-Learning, SIMA, Peta Kampus, dan Media Sosial Resmi di bagian *Footer*.

---

## 🛠️ Teknologi & Arsitektur

Proyek ini dibangun menggunakan pilar *front-end* modern tanpa *framework* berat untuk menjaga performa optimal:

- **Struktur:** HTML5 Semantik.
- **Desain & Gaya:** CSS murni / Vanilla CSS (dengan adopsi pola kelas utilitas ala *Tailwind* secara kustom).
- **Interaktivitas:** Vanilla JavaScript (`komponen tunggal / Web Components` disematkan seperti `<app-header>` dan `<app-footer>`).
- **Ikonografi:** Font Awesome.
- **Tipografi:** Google Fonts (seperti font *Poetsen One*, *Inter*, dll).

---

## 📂 Struktur Direktori

Berikut gambaran umum hierarki kode pada repositori ini:

```bash
/informasi usm
├── 📄 index.html        # Halaman Utama (Beranda)
├── 📄 profil.html       # Halaman Profil Kampus
├── 📄 akademik.html     # Halaman Informasi Akademik
├── 📄 fasilitas.html    # Halaman Fasilitas Kampus
├── 📄 kemahasiswaan.html# Halaman Organisasi & UKM
├── 📄 pendaftaran.html  # Halaman Informasi PMB
├── 📄 biaya.html        # Halaman Ekstimasi Biaya & SPP
├── 📁 assets            # Penyimpanan Media dan Skrip Komponen
│   ├── components.js    # Definisi Custom Elements (Header & Footer)
│   ├── usm_logo.png     # Logo Universitas
│   └── ...
└── 📁 styles            # Kumpulan Berkas CSS
```

---

## 🚀 Panduan Memulai (Setup)

Proyek ini bersifat statis, sehingga sangat mudah untuk dijalankan di lingkungan lokal Anda tanpa instalasi *dependency* yang rumit (*No Node.js/NPM required* untuk *runtime* dasar).

1. **Unduh atau Kloning Repositori:**
   ```bash
   git clone https://github.com/username-anda/informasi-usm.git
   ```
2. **Masuk ke Direktori:**
   ```bash
   cd "informasi usm"
   ```
3. **Jalankan Aplikasi:**
   Anda dapat langsung membuka berkas `index.html` di peramban (browser) Anda. 
   
   > 💡 *Saran:* Untuk pengalaman pengembangan terbaik, gunakan fitur **Live Server** di VS Code untuk melihat perubahan secara waktu nyata (*real-time*).

---

## 🤝 Berkontribusi (*Contributing*)

Kami sangat menyambut baik kontribusi dari mahasiswa, alumni, maupun pengembang (*developer*) yang ingin menyempurnakan portal ini!

1. Buat **Fork** repositori ini.
2. Buat *branch* fitur Anda (`git checkout -b fitur/NamaFiturHebat`).
3. Lakukan *commit* perubahan Anda (`git commit -m 'Menambahkan fitur XYZ'`).
4. *Push* ke *branch* tersebut (`git push origin fitur/NamaFiturHebat`).
5. Buka (Open) sebuah **Pull Request**.

---

## 📞 Informasi Kontak & Media Sosial

Pantau terus informasi terbaru dan terhubunglah dengan Universitas Semarang melalui saluran resmi kami:

* **Pusat Informasi:**
  - 📧 Email: [info@usm.ac.id](mailto:info@usm.ac.id)
  - 📞 Telepon: (024) 6702757
  - 🌐 Situs Web: [usm.ac.id](https://usm.ac.id)
  - 🗺️ Alamat: Jl. Soekarno Hatta, Tlogosari, Semarang, Jawa Tengah 50196

* **Media Sosial:**
  - **Instagram:** [@usm_jaya](https://www.instagram.com/usm_jaya/) (Utama) | [@kuliah_usm](https://www.instagram.com/kuliah_usm/) (Info PMB)
  - **YouTube:** [USMTV](https://www.youtube.com/@usmtvindonesia) | [HUMAS USM](https://www.youtube.com/@humasusm)
  - **X (Twitter):** [@usm_jaya](https://twitter.com/usm_jaya)

---

<p align="center">
  Dibuat dengan ❤️ di Semarang.<br>
  <i>Menjemput Masa Depan Unggul!</i>
</p>
# usk-kw-landingpage
