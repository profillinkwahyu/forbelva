// Inisialisasi Animasi AOS
AOS.init({
    duration: 1000,
    once: true
});

// Logika Tombol "No" yang Menghindar
const noBtn = document.getElementById('no-btn');

noBtn.addEventListener('mouseover', () => {
    // Generate angka random untuk posisi baru
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    
    // Opsional: Ganti teks tombol No biar lucu
    const texts = ["No Thanks", "Are you sure?", "Really?", "Think again!", "Click Yes please!", "You can't catch me!"];
    noBtn.innerText = texts[Math.floor(Math.random() * texts.length)];
});

// Fungsi untuk menampilkan konten utama
function startApp() {
    const landing = document.getElementById('landing-page');
    const mainContent = document.getElementById('main-content');
    
    // Transisi halus
    landing.classList.add('opacity-0');
    setTimeout(() => {
        landing.style.display = 'none';
        mainContent.classList.remove('hidden');
        window.scrollTo(0, 0);
        // Refresh AOS agar terbaca setelah elemen muncul
        AOS.refresh();
    }, 500);
}
