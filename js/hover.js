const msOverIcon = document.getElementById("fr-icon_button");
// const msOverText = document.getElementById("fr-hidden-text");
const backgrOver = document.getElementById("fr-screen");
const msOverIcon2 = document.getElementById("fr-icon_button-2");
const msOverIcon3 = document.getElementById("fr-icon_button-3");
const msOverIcon4 = document.getElementById("fr-icon_button-4");
const msOverIcon5 = document.getElementById("fr-icon_button-5");

msOverIcon.addEventListener("mouseover", () => {
  backgrOver.style.filter = "blur(10px)";
});

msOverIcon.addEventListener("mouseleave", () => {
  backgrOver.style.filter = "blur(0px)";
});

msOverIcon2.addEventListener("mouseover", () => {
  backgrOver.style.filter = "blur(10px)";
});

msOverIcon2.addEventListener("mouseleave", () => {
  backgrOver.style.filter = "blur(0px)";
});

msOverIcon3.addEventListener("mouseover", () => {
  backgrOver.style.filter = "blur(10px)";
});

msOverIcon3.addEventListener("mouseleave", () => {
  backgrOver.style.filter = "blur(0px)";
});

msOverIcon4.addEventListener("mouseover", () => {
  backgrOver.style.filter = "blur(10px)";
});

msOverIcon4.addEventListener("mouseleave", () => {
  backgrOver.style.filter = "blur(0px)";
});

msOverIcon5.addEventListener("mouseover", () => {
  backgrOver.style.filter = "blur(10px)";
});

msOverIcon5.addEventListener("mouseleave", () => {
  backgrOver.style.filter = "blur(0px)";
});

$(() => {
  $(".fr-icon").mouseover(() => {
    $(".fourth-screen_feature-text").slideDown();
  });

  $(".fr-icon").mouseleave(() => {
    $(".fourth-screen_feature-text").slideUp();
  });

  $(".fr-icon-2").mouseover(() => {
    $(".fourth-screen_feature-text-2").slideDown();
  });

  $(".fr-icon-2").mouseleave(() => {
    $(".fourth-screen_feature-text-2").slideUp();
  });

  $(".fr-icon-3").mouseover(() => {
    $(".fourth-screen_feature-text-3").slideDown();
  });

  $(".fr-icon-3").mouseleave(() => {
    $(".fourth-screen_feature-text-3").slideUp();
  });

  $(".fr-icon-4").mouseover(() => {
    $(".fourth-screen_feature-text-4").slideDown();
  });

  $(".fr-icon-4").mouseleave(() => {
    $(".fourth-screen_feature-text-4").slideUp();
  });

  $(".fr-icon-5").mouseover(() => {
    $(".fourth-screen_feature-text-5").slideDown();
  });

  $(".fr-icon-5").mouseleave(() => {
    $(".fourth-screen_feature-text-5").slideUp();
  });
});
