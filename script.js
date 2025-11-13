// İçerik gösterme
function showContent(section) {
    document.querySelectorAll('.content').forEach(c => c.style.display = 'none');
    document.getElementById(section).style.display = 'block';
}

// Kopyalama
function copyAPI(url) {
    navigator.clipboard.writeText(url)
        .then(() => alert('API kopyalandı: ' + url))
        .catch(err => alert('Kopyalama hatası: ' + err));
}

// Telegram yönlendirme
function goToLink(url) {
    window.open(url, '_blank');
}

// Müzik başlatma
document.getElementById('play-music').addEventListener('click', function() {
    const music = document.getElementById('bg-music');
    music.play();
    alert('Müzik başlatıldı 🎶');
});
