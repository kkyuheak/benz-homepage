const msOverIcon = document.getElementById("fr-icon_button");
const msOverText = document.getElementById("fr-hidden-text");
const backgrOver = document.getElementById("fr-screen");

msOverIcon.addEventListener("mouseover", () => {
  backgrOver.style.filter = "blur(7px)";
});

msOverIcon.addEventListener("mouseleave", () => {
  backgrOver.style.filter = "blur(0px)";
});
