const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const routeButtons = document.querySelectorAll(".route-list button");

routeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    routeButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

function searchWebsite() {
  const input = document.querySelector(".search input").value.toLowerCase();

  if (input.includes("route")) {
    location.href = "#routes";
  } else if (input.includes("event")) {
    location.href = "#events";
  } else {
    location.href = "#hidden-gems";
  }
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
