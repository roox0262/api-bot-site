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

function sendToTelegram(type) {
    let message = type === 'sorgu' ? 'Sorgu botuna mesaj' : 'Kurucuya mesaj';
    
    fetch(`https://api.telegram.org/bot<TELEGRAM_BOT_TOKEN>/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: '<CHAT_ID>', text: message })
    })
    .then(res => res.json())
    .then(data => alert('Mesaj gönderildi!'))
    .catch(err => alert('Hata: ' + err));
}
