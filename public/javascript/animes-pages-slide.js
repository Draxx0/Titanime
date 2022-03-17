const body = document.querySelector("body");
const page1 = document.querySelector("#anime-cards-section-page-1");
const page2 = document.querySelector("#anime-cards-section-page-2");
const next = document.querySelector("#next-page1");
const previous = document.querySelector("#previous-page2");

next.addEventListener("click", () => {
  window.scrollTo(500, 500);
  page1.style.animation = "changingPageAnimationSlideOut 0.01s forwards";

  page1.addEventListener("animationend", () => {
    page1.style.display = "none";
  });

  page2.style.animation = "changingPageAnimationSlideIn 1s forwards";
  page2.style.display = "block";
});

previous.addEventListener("click", () => {
  window.scrollTo(500, 500);
  page2.style.animation = "changingPageAnimationSlideOut 0.01s forwards";

  page2.addEventListener("animationend", () => {
    page2.style.display = "none";
  });

  page1.style.animation = "changingPageAnimationSlideIn 1s forwards";
  page1.style.display = "block";
});
