# 🧮 Itung - Kids Math Learning App

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB.svg?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF.svg?logo=vite)
![Firebase](https://img.shields.io/badge/Firebase-10.7.0-FFCA28.svg?logo=firebase)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.6-06B6D4.svg?logo=tailwindcss)

**Aplikasi Belajar Matematika yang Menyenangkan untuk Anak-Anak**

*Belajar matematika jadi seru dengan animasi, warna-warna cerah, dan tantangan yang menyenangkan!*

</div>

---

## ✨ Fitur Utama

| Fitur | Deskripsi |
|-------|-----------|
| 🔢 **4 Operasi Matematika** | Penjumlahan, Pengurangan, Perkalian, Pembagian |
| 🎯 **3 Level Kesulitan** | Mudah, Sedang, Sulit - sesuai kemampuan anak |
| 🎮 **Mode Permainan** | 10 soal per sesi dengan progress bar |
| 🔥 **Sistem Streak** | Motivasi anak dengan streak harian |
| ⭐ **Sistem Bintang** | Reward untuk setiap jawaban benar |
| 🔐 **Autentikasi** | Login opsional dengan Firebase |
| 📱 **Responsif** | Tampilan optimal di HP dan tablet |
| 🎨 **UI Ramah Anak** | Warna cerah dan animasi menarik |

## 🛠️ Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** TailwindCSS
- **Authentication:** Firebase Auth
- **Routing:** React Router DOM v6

## 🚀 Memulai

### Prasyarat

- Node.js 18+ 
- npm atau yarn

### Instalasi

```bash
# Clone repository
git clone https://github.com/inovasigpt/itung.git

# Masuk ke direktori
cd itung

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka browser dan akses `http://localhost:5173`

### Build untuk Produksi

```bash
npm run build
npm run preview
```

## 📁 Struktur Project

```
itung/
├── src/
│   ├── components/       # Komponen UI reusable
│   │   ├── Header.jsx
│   │   ├── NumPad.jsx
│   │   ├── ProgressBar.jsx
│   │   └── ResultPopup.jsx
│   ├── contexts/         # React Context (Auth)
│   │   └── AuthContext.jsx
│   ├── pages/            # Halaman aplikasi
│   │   ├── Home.jsx           # Pilihan operasi
│   │   ├── DifficultySelect.jsx  # Pilihan level
│   │   ├── Game.jsx           # Game utama
│   │   ├── GameSummary.jsx    # Hasil permainan
│   │   ├── Login.jsx          # Halaman login
│   │   ├── SignUp.jsx         # Halaman registrasi
│   │   └── ForgotPassword.jsx # Reset password
│   ├── utils/            # Helper functions
│   │   └── questionGenerator.js
│   ├── App.jsx           # Root component & routes
│   ├── main.jsx          # Entry point
│   ├── firebase.js       # Firebase config
│   └── index.css         # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎮 Cara Bermain

1. **Pilih Operasi** - Pilih jenis operasi matematika (➕ ➖ ✖️ ➗)
2. **Pilih Kesulitan** - Sesuaikan dengan kemampuan anak
3. **Mainkan!** - Jawab 10 soal menggunakan numpad
4. **Lihat Hasil** - Cek skor dan bintang yang didapat

## 📸 Screenshots

*Coming soon...*

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan:

1. Fork repository ini
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

## 📄 Lisensi

Distributed under the MIT License. See `LICENSE` for more information.

## 👨‍💻 Dibuat Oleh

**inovasigpt** - [GitHub](https://github.com/inovasigpt)

---

<div align="center">

Made with ❤️ for Indonesian Kids

⭐ Jangan lupa beri bintang jika project ini bermanfaat!

</div>
