function updateClock() {
    const saatElementi = document.getElementById("saat");
    const tarih = new Date();

    const saat = String(tarih.getHours()).padStart(2, "0");
    const dakika = String(tarih.getMinutes()).padStart(2, "0");
    const saniye = String(tarih.getSeconds()).padStart(2, "0");

    saatElementi.textContent = `${saat}:${dakika}:${saniye}`;
}

// Saati her saniye güncelle
setInterval(updateClock, 1000);

// Sayfa yüklendiğinde saat başlat
window.onload = updateClock;
