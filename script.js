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

// Telegram butonları
function goToLink(url) {
    window.open(url, '_blank');
}
