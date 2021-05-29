const gunP = document.querySelector("#gun");
const saatP = document.querySelector("#saat");
const dkP = document.querySelector("#dk");
const saniyeP = document.querySelector("#saniye");
// console.log(saatP);

const yeniYil = "1 jan 2022";

function yilSayac() {
  const yeniYilTarih = new Date(yeniYil);
  const bugunTarih = new Date();
  const toplamSaniye = (yeniYilTarih - bugunTarih) / 1000;
  const gun = Math.floor(toplamSaniye / 3600 / 24);
  const saat = Math.floor((toplamSaniye / 3600) % 24);
  const dk = Math.floor((toplamSaniye / 60) % 60);
  const saniye = Math.floor(toplamSaniye % 60);

  gunP.innerHTML = fortmatZaman(gun);

  saatP.innerHTML = fortmatZaman(saat);
  dkP.innerHTML = fortmatZaman(dk);
  saniyeP.innerHTML = fortmatZaman(saniye);

  console.log(gun, saat, dk, saniye);
}

function fortmatZaman(time) {
  return time < 10 ? `0${time}` : time;
}
yilSayac();

setInterval(yilSayac, 1000);
