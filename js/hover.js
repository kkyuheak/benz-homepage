const msOverIcon = document.getElementById("fr-icon_button");
// const msOverText = document.getElementById("fr-hidden-text");
const backgrOver = document.getElementById("fr-screen");
const msOverIcon2 = document.getElementById("fr-icon_button-2");
const msOverIcon3 = document.getElementById("fr-icon_button-3");
const msOverIcon4 = document.getElementById("fr-icon_button-4");
const msOverIcon5 = document.getElementById("fr-icon_button-5");

msOverIcon.addEventListener("mouseover", () => {
  backgrOver.style.filter = "blur(7px)";
  // backgroundBlack.classList.add("backBlack_2");
});

msOverIcon.addEventListener("mouseleave", () => {
  backgrOver.style.filter = "blur(0px)";
});

msOverIcon2.addEventListener("mouseover", () => {
  backgrOver.style.filter = "blur(7px)";
});

msOverIcon2.addEventListener("mouseleave", () => {
  backgrOver.style.filter = "blur(0px)";
});

msOverIcon3.addEventListener("mouseover", () => {
  backgrOver.style.filter = "blur(7px)";
});

msOverIcon3.addEventListener("mouseleave", () => {
  backgrOver.style.filter = "blur(0px)";
});

msOverIcon4.addEventListener("mouseover", () => {
  backgrOver.style.filter = "blur(7px)";
});

msOverIcon4.addEventListener("mouseleave", () => {
  backgrOver.style.filter = "blur(0px)";
});

msOverIcon5.addEventListener("mouseover", () => {
  backgrOver.style.filter = "blur(7px)";
});

msOverIcon5.addEventListener("mouseleave", () => {
  backgrOver.style.filter = "blur(0px)";
});
