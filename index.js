document.getElementById("zaloguj-sie").addEventListener("click", function () {
  window.open("strona_logowania.html");
});

document.getElementById("zarejestruj-sie").addEventListener("click", function () {
  window.open("strona_rejestracji.html", "_blank");
});

document.getElementsByClassName("strona-glowna")[0].addEventListener("click", function () {
  window.open("index.html");
});

document.addEventListener("DOMContentLoaded", function() {
  const otwarcieMenu = document.getElementById("menu-hamburger");
  const zamkniecieMenu = document.getElementById("menu-zamknij");
  const nawigacja = document.querySelector("nav");
 
  otwarcieMenu.addEventListener("click", function() {
    nawigacja.classList.add("open");
    otwarcieMenu.style.dipslay = "none";
    zamkniecieMenu.style.display = "block";
  });

  zamkniecieMenu.addEventListener("click", function() {
    nawigacja.classList.add("remove");
    otwarcieMenu.style.display = "block";
    zamkniecieMenu.style.display = "none";
});

});

document.addEventListener("DOMContentLoaded", pokazPieChart);

function pokazPieChart(){
  let sectionA = {size: 6000, color: "pink"};
  let sectionB = {size: 100, color: "yellow"};

  const values = [sectionA.size, sectionB.size];
  const total = values.reduce((acc, val) => acc + val, 0);

  let startAngle = 0;

  const canvas = document.getElementById("pie-chart");
  const ctx = canvas.getContext("2d");
}