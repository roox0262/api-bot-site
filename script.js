function showContent(section) {
  document.querySelectorAll('.content').forEach(c => c.style.display = 'none');
  document.getElementById(section).style.display = 'block';
}

function copyAPI(url) {
  navigator.clipboard.writeText(url)
    .then(() => alert('API kopyalandı: ' + url))
    .catch(err => alert('Kopyalama hatası: ' + err));
}

function goToLink(url) {
  window.open(url, '_blank');
}

document.getElementById('play-music').addEventListener('click', function() {
  const music = document.getElementById('bg-music');
  music.play();
  alert('🎶 BLOK3 ESCOBAR MÜZİGİ ÇALIYOR!');
});




