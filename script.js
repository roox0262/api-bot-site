function showContent(section) {
    document.querySelectorAll('.content').forEach(c => c.style.display = 'none');
    document.getElementById(section).style.display = 'block';
}

// Yeni sekmede URL açma
function openInNewTab(url) {
    window.open(url, '_blank');
}

function copyAPI(url) {
    navigator.clipboard.writeText(url)
        .then(() => alert('API kopyalandı: ' + url))
        .catch(err => alert('Kopyalama hatası: ' + err));
}

// Telegram butonları
function goToLink(url) {
    window.open(url, '_blank');
}

// Örnek test API
function testAPI(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => alert('API Yanıtı: ' + JSON.stringify(data)))
        .catch(err => alert('API Hatası: ' + err));
}
