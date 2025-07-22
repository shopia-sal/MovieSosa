# movie_sosa
SoSa Movie adalah aplikasi web untuk menelusuri informasi film dan TV series, mulai dari daftar film, trailer, hingga detail lengkap. Aplikasi ini dibangun menggunakan React JS dan API dari The Movie Database (TMDb).
# API yang Digunakan
link API: https://www.themoviedb.org/documentation/api 
# Fitur-fitur Utama
1. search: fitur untuk mencari film dan TV seri berdasarkan judul
2. Home: Menampilkan konten populer seperti film dan serial TV
3. List Movie: Menampilkan daftar film berdasarkan kategori (upcoming dan popular)
4. List TV: Menampilkan daftar TV series berdasarkan kategori.
5. Detail Movie/TV: Informasi lengkap dari film/TV series yang dipilih.
6. Video Trailer: Tampilkan video trailer dari film/TV series.
# Struktur Halaman & Routing
| Halaman         | Path               | Keterangan                                         |
| --------------- | ------------------ | -------------------------------------------------- |
| Home            | `/`                | Menampilkan konten populer                         |
| Movie List      | `/movie`           | Daftar semua film                                  |
| TV List         | `/tv`              | Daftar semua TV series                             |
| Detail Movie/TV | `/:category/:id`   | Detail lengkap film/TV berdasarkan kategori dan ID |
| Search Result   | `/search/:keyword` | Menampilkan hasil pencarian berdasarkan kata kunci |

# Cara Menjalankan Secara Lokal
1. Clone repository: git clone <repository-url>
2. Masuk ke folder proyek: cd movie_sosa
3. Install dependencies: npm install
4. Jalankan aplikasi: npm start
5. Akses di browser: http://localhost:3000
