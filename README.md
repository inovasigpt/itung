# 🧮 iTung - Aplikasi Belajar Matematika untuk Anak

<p align="center">
  <img src="public/icons/icon-192x192.svg" alt="iTung Logo" width="120"/>
</p>

<p align="center">
  <strong>Progressive Web App (PWA) untuk belajar matematika dengan cara yang menyenangkan!</strong>
</p>

---

## ✨ Fitur Utama

| Fitur | Deskripsi |
|-------|-----------|
| 🎮 **4 Operasi Matematika** | Penjumlahan, Pengurangan, Perkalian, Pembagian |
| 📊 **4 Tingkat Kesulitan** | Mudah (1-10), Sedang (1-50), Sulit (1-100), Sangat Sulit (1-1000) |
| 👨‍👩‍👧‍👦 **Multi-Profil** | Beberapa anak bisa punya profil masing-masing |
| ⭐ **Akumulasi Bintang** | Total bintang tersimpan & ditampilkan |
| 🔥 **Login Streak** | Tracking hari berturut-turut bermain |
| 📱 **PWA** | Bisa di-install ke homescreen, bekerja offline |
| 🔢 **On-Screen NumPad** | Tidak perlu keyboard |
| ⏭️ **Tombol Skip** | Lewati soal, kembali setelah soal terakhir |

---

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **PWA**: vite-plugin-pwa
- **Auth** (Optional): Firebase Authentication
- **Storage**: localStorage (untuk profil & progress)

---

## 🚀 Instalasi & Menjalankan

```bash
# Clone repository
git clone https://github.com/inovasigpt/itung.git
cd itung

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka `http://localhost:5173` di browser.

---

## 📱 Instalasi sebagai PWA

1. Buka aplikasi di Chrome
2. Klik icon "Install" di address bar, atau
3. Menu ⋮ → "Install iTung"

---

## 🎮 Cara Bermain

1. **Pilih/Buat Profil** - Setiap anak bisa punya profil sendiri
2. **Pilih Operasi** - Penjumlahan, Pengurangan, Perkalian, atau Pembagian
3. **Pilih Tingkat Kesulitan** - Mudah, Sedang, Sulit, atau Sangat Sulit
4. **Jawab 10 Soal** - Gunakan numpad di layar
5. **Lihat Hasil** - Dapatkan 1-3 bintang berdasarkan jawaban benar

---

## ⭐ Sistem Bintang

| Jawaban Salah | Bintang |
|---------------|---------|
| 0-2 | ⭐⭐⭐ (3 bintang) |
| 3-5 | ⭐⭐ (2 bintang) |
| 6+ | ⭐ (1 bintang) |

---

## 📁 Struktur Project

```
itung/
├── public/icons/          # PWA icons
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── NumPad.jsx
│   │   ├── ProgressBar.jsx
│   │   └── ResultPopup.jsx
│   ├── contexts/          # React Context
│   │   ├── AuthContext.jsx
│   │   └── ProfileContext.jsx
│   ├── pages/             # Route pages
│   │   ├── Home.jsx
│   │   ├── ProfileSelect.jsx
│   │   ├── DifficultySelect.jsx
│   │   ├── Game.jsx
│   │   └── GameSummary.jsx
│   └── utils/
│       └── questionGenerator.js
├── index.html
├── vite.config.js         # PWA configuration
└── tailwind.config.js     # Kid-friendly color palette
```

---

## 🔧 Konfigurasi Firebase (Opsional)

Untuk mengaktifkan autentikasi:

1. Buat project di [Firebase Console](https://console.firebase.google.com/)
2. Enable Email/Password authentication
3. Update `src/firebase.js` dengan credentials Anda

---

## 📝 Changelog

### v1.0.0 (2026-01-17)
- ✅ Initial release
- ✅ 4 operasi matematika (+ - × ÷)
- ✅ 4 tingkat kesulitan
- ✅ PWA support (installable, offline-capable)
- ✅ Multi-profil anak dengan localStorage
- ✅ Akumulasi bintang per profil
- ✅ Login streak tracking
- ✅ On-screen numpad
- ✅ Tombol skip dengan return ke soal yang dilewati
- ✅ Popup validasi (Benar/Salah)
- ✅ Firebase auth (opsional)

---

## 📄 License

MIT License - Bebas digunakan untuk keperluan edukasi.

---

<p align="center">
  Made with ❤️ untuk anak-anak Indonesia
</p>
