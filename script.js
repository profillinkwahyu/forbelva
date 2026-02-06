:root {
    --primary-color: #ff758c; /* Merah muda cerah */
    --secondary-color: #ff7eb3; /* Merah muda keunguan */
    --text-color-dark: #333;
    --text-color-light: #fcf1d0;
    --background-light: #fdf5e6; /* Warna kertas crumple */
    --background-dark: #24243e;
    --card-bg: rgba(255, 255, 255, 0.8);
    --border-color: #e0b0d0;
    --font-handwritten: 'Pacifico', cursive;
    --font-body: 'Quicksand', sans-serif;
}

body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden; /* Mencegah scroll horizontal */
    background: var(--background-light);
    font-family: var(--font-body);
    color: var(--text-color-dark);
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1.6;
    background-image: url('https://i.ibb.co/PMrX8H1/crumpled-paper-texture.png'); /* Gambar kertas kusut */
    background-size: cover;
    background-attachment: fixed;
    animation: fadeInBackground 1.5s ease-out forwards;
}

@keyframes fadeInBackground {
    from { opacity: 0; }
    to { opacity: 1; }
}

#app {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden; /* Penting untuk menyembunyikan halaman yang tidak aktif */
}

.page {
    position: absolute;
    width: 90%;
    max-width: 700px;
    background: var(--card-bg);
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: all 0.5s ease-in-out;
    opacity: 0;
    transform: scale(0.9);
    pointer-events: none; /* Mencegah interaksi saat hidden */
    box-sizing: border-box; /* Pastikan padding dihitung dalam width */
}

.page.active {
    opacity: 1;
    transform: scale(1);
    pointer-events: all;
    position: relative; /* Aktifkan posisi relatif agar bisa di tengah */
}

.page.hidden {
    display: none; /* Sembunyikan sepenuhnya dari layout */
}


h1, h2, h3 {
    font-family: var(--font-handwritten);
    color: var(--primary-color);
    margin-bottom: 20px;
    font-weight: normal;
}

h1 { font-size: 3.5rem; }
h2 { font-size: 2.5rem; }
h3 { font-size: 2rem; }

p {
    font-size: 1.1rem;
    color: var(--text-color-dark);
    margin-bottom: 15px;
}

.subtitle {
    font-style: italic;
    color: var(--secondary-color);
    font-weight: 500;
    font-size: 1rem;
    margin-top: -10px;
    margin-bottom: 25px;
}

.btn {
    font-family: var(--font-body);
    padding: 12px 25px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-size: 1.05rem;
    font-weight: bold;
    transition: all 0.3s ease;
    text-transform: uppercase;
    margin: 0 10px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.btn.primary {
    background-color: var(--primary-color);
    color: white;
}

.btn.primary:hover {
    background-color: #e06075;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0,0,0,0.15);
}

.btn.secondary {
    background-color: transparent;
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
}

.btn.secondary:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0,0,0,0.15);
}

.button-group {
    margin-top: 30px;
}

/* Icons */
.cute-icon {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
    animation: bounce 2s infinite ease-in-out;
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

/* Grid Menu */
.grid-menu {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    margin-top: 30px;
}

.menu-item {
    background: var(--card-bg);
    padding: 20px;
    border-radius: 15px;
    border: 1px solid var(--border-color);
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 150px; /* Tinggi item menu yang konsisten */
}

.menu-item:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    border-color: var(--primary-color);
}

.menu-item img {
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
}

.menu-item span {
    font-weight: bold;
    color: var(--primary-color);
    font-family: var(--font-body);
}

/* Photo Gallery */
.photo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 15px;
    margin-top: 20px;
    max-height: 400px; /* Batasi tinggi galeri */
    overflow-y: auto; /* Aktifkan scroll jika banyak foto */
    padding-right: 10px; /* Ruang untuk scrollbar */
    margin-bottom: 30px;
}

.photo-grid img {
    width: 100%;
    height: 120px; /* Tinggi gambar yang konsisten */
    object-fit: cover; /* Pastikan gambar mengisi kotak tanpa terdistorsi */
    border-radius: 10px;
    border: 2px solid var(--border-color);
    box-shadow: 0 5px 15px rgba(0,0,0,0.08);
    transition: transform 0.2s ease;
}

.photo-grid img:hover {
    transform: scale(1.05);
    border-color: var(--primary-color);
}

/* Video Player */
.video-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
    height: 0;
    margin: 20px auto;
    max-width: 600px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
    border-radius: 15px;
    overflow: hidden;
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
}

.song-title {
    font-weight: bold;
    color: var(--primary-color);
    margin-top: 15px;
}

.secret-message-hint {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 20px;
}

/* Message Box */
.message-box {
    background: rgba(255, 255, 255, 0.7);
    border: 1px dashed var(--primary-color);
    padding: 25px;
    border-radius: 10px;
    margin: 20px auto;
    text-align: left;
    max-height: 400px;
    overflow-y: auto;
}

.message-box p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 10px;
}

.message-box .signature {
    margin-top: 20px;
    font-weight: bold;
    color: var(--primary-color);
    font-family: var(--font-handwritten);
    font-size: 1.5rem;
    text-align: right;
}

/* Virtual Flowers */
.flower-container {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.virtual-flower-img {
    width: 200px;
    height: auto;
    margin-bottom: 20px;
    animation: floatFlower 3s infinite ease-in-out;
}

@keyframes floatFlower {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
}

.flower-description {
    font-style: italic;
    color: #666;
}

/* Responsif */
@media (max-width: 768px) {
    h1 { font-size: 2.5rem; }
    h2 { font-size: 2rem; }
    h3 { font-size: 1.5rem; }
    p { font-size: 0.95rem; }
    .btn { padding: 10px 20px; font-size: 0.95rem; margin: 5px; }
    .grid-menu { grid-template-columns: 1fr; }
    .page { padding: 20px; }
}

@media (max-width: 480px) {
    h1 { font-size: 2rem; }
    h2 { font-size: 1.8rem; }
    h3 { font-size: 1.3rem; }
    .cute-icon { width: 60px; height: 60px; }
    .grid-menu { gap: 15px; }
    .menu-item { height: 120px; padding: 15px; }
    .menu-item img { width: 40px; height: 40px; }
    .photo-grid { grid-template-columns: repeat(auto-fit, minmax(90px, 1fr)); gap: 10px; }
    .photo-grid img { height: 90px; }
}