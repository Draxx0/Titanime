const body = document.querySelector("body");
const page1 = document.querySelector("#anime-cards-section-page-1");
const page2 = document.querySelector("#anime-cards-section-page-2");
const next = document.querySelector("#next-page1");
const previous = document.querySelector("#previous-page2");

next.addEventListener("click", () => {
  window.scrollTo(0, 0);
  page1.style.animation = "changingPageAnimationSlideOut 0.01s forwards";

  page1.addEventListener("animationend", onAnimationEndPage1);

  page2.style.animation = "changingPageAnimationSlideIn 1s forwards";
  page2.style.display = "block";  
});

previous.addEventListener("click", () => {
  window.scrollTo(0, 0);
  page2.style.animation = "changingPageAnimationSlideOut 0.01s forwards";

  page2.addEventListener("animationend", onAnimationEndPage2);

  page1.style.animation = "changingPageAnimationSlideIn 1s forwards";
  page1.style.display = "block";
});


function onAnimationEndPage1() {
  page1.style.display = "none";
  page1.removeEventListener("animationend", onAnimationEndPage1)
}

function onAnimationEndPage2(){
  page2.style.display = "none";
  page2.removeEventListener("animationend", onAnimationEndPage2)
}