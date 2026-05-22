document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");

  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  const heroSlides = document.querySelectorAll(".hero-slide");

  if (heroSlides.length > 1) {
    let slideIndex = 0;

    window.setInterval(() => {
      heroSlides[slideIndex].classList.remove("is-active");
      slideIndex = (slideIndex + 1) % heroSlides.length;
      heroSlides[slideIndex].classList.add("is-active");
    }, 5000);
  }

  const gemTrack = document.querySelector(".gem-track");
  const gemPrev = document.querySelector(".gem-nav-prev");
  const gemNext = document.querySelector(".gem-nav-next");

  function scrollGems(direction) {
    if (!gemTrack) return;
    const card = gemTrack.querySelector(".gem-card");
    const gap = parseFloat(getComputedStyle(gemTrack).gap) || 20;
    const scrollAmount = card ? card.offsetWidth + gap : 300;
    gemTrack.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
  }

  if (gemPrev) {
    gemPrev.addEventListener("click", () => scrollGems(-1));
  }

  if (gemNext) {
    gemNext.addEventListener("click", () => scrollGems(1));
  }
});

function searchWebsite() {
  const input = document.querySelector(".search input").value.toLowerCase();

  if (input.includes("foto") || input.includes("galerij") || input.includes("event")) {
    location.href = "#fotogalerij";
  } else if (input.includes("over") || input.includes("dusseldorf") || input.includes("düsseldorf")) {
    location.href = "#over-dusseldorf";
  } else {
    location.href = "#hidden-gems";
  }
}
