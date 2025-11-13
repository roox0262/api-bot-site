// İçerik gösterme
function showContent(section) {
    document.querySelectorAll('.content').forEach(c => c.style.display = 'none');
    document.getElementById(section).style.display = 'block';
}

// Yeni sekmede URL açma (Test Et)
function openInNewTab(url) {
    window.open(url, '_blank');
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
