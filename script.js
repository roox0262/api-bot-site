function showContent(section) {
    document.querySelectorAll('.content').forEach(c => c.style.display = 'none');
    document.getElementById(section).style.display = 'block';
}

function copyAPI(url) {
    navigator.clipboard.writeText(url)
        .then(() => alert('API kopyalandı: ' + url))
        .catch(err => alert('Kopyalama hatası: ' + err));
}

function testAPI(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => alert('API Yanıtı: ' + JSON.stringify(data)))
        .catch(err => alert('API Hatası: ' + err));
}

// Telegram linklerine yönlendirme
function goToLink(url) {
    window.open(url, '_blank');
}
