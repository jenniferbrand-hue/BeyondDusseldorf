function normalizeSearchText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ß/g, "ss");
}

function getSearchTokens(query) {
  return normalizeSearchText(query)
    .split(/\s+/)
    .filter((token) => token.length > 1);
}

function scoreTextMatch(text, tokens, fullQuery) {
  let score = 0;

  if (fullQuery && text.includes(fullQuery)) {
    score += 12;
  }

  tokens.forEach((token) => {
    if (text.includes(token)) {
      score += 4;
    }
  });

  return score;
}

function findBestGemMatch(query) {
  if (typeof HIDDEN_GEMS === "undefined") {
    return { item: null, score: 0 };
  }

  const fullQuery = normalizeSearchText(query);
  const tokens = getSearchTokens(query);
  let bestGem = null;
  let bestScore = 0;

  HIDDEN_GEMS.forEach((gem) => {
    const searchableText = normalizeSearchText(
      [
        gem.id.replace(/-/g, " "),
        gem.title,
        gem.wijk,
        gem.adres,
        gem.caption,
        gem.beschrijving,
        ...(gem.highlights || []),
      ].join(" ")
    );

    const score = scoreTextMatch(searchableText, tokens, fullQuery);

    if (score > bestScore) {
      bestScore = score;
      bestGem = gem;
    }
  });

  return { item: bestGem, score: bestScore };
}

function findBestGalleryMatch(query) {
  if (typeof GALLERY_PHOTOS === "undefined") {
    return { item: null, score: 0 };
  }

  const fullQuery = normalizeSearchText(query);
  const tokens = getSearchTokens(query);
  let bestPhoto = null;
  let bestScore = 0;

  GALLERY_PHOTOS.forEach((photo) => {
    const searchableText = normalizeSearchText(
      [photo.title, photo.caption, photo.description].join(" ")
    );
    const score = scoreTextMatch(searchableText, tokens, fullQuery);

    if (score > bestScore) {
      bestScore = score;
      bestPhoto = photo;
    }
  });

  return { item: bestPhoto, score: bestScore };
}

function findPageMatch(query) {
  const fullQuery = normalizeSearchText(query);
  const pages = [
    {
      url: "#contact",
      keywords: ["contact", "mail", "email", "bereik", "info@"],
    },
    {
      url: "fotogalerij.html",
      keywords: ["foto", "fotogalerij", "galerij", "gallery", "beeld", "beelden"],
    },
    {
      url: "over-dusseldorf.html",
      keywords: [
        "over",
        "dusseldorf",
        "stad",
        "rijn",
        "noordrijn",
        "deelstaat",
        "cijfer",
        "praktisch",
        "altstadt",
      ],
    },
    {
      url: "hidden-gems.html",
      keywords: ["hidden", "gems", "gem", "tip", "tips", "locatie", "adres"],
    },
    {
      url: "index.html#hidden-gems",
      keywords: ["start", "home", "homepage"],
    },
  ];

  return pages.find((page) =>
    page.keywords.some((keyword) => fullQuery.includes(keyword))
  );
}

function searchWebsite(event) {
  if (event) {
    event.preventDefault();
  }

  const input = document.querySelector(".search input");
  if (!input) {
    return;
  }

  const query = input.value.trim();
  if (!query) {
    input.focus();
    return;
  }

  const gemMatch = findBestGemMatch(query);
  const galleryMatch = findBestGalleryMatch(query);
  const pageMatch = findPageMatch(query);

  if (gemMatch.score > 0 && gemMatch.score >= galleryMatch.score) {
    window.location.href = `hidden-gems.html#${gemMatch.item.id}`;
    return;
  }

  if (galleryMatch.score > 0) {
    window.location.href = "fotogalerij.html";
    return;
  }

  if (pageMatch) {
    if (pageMatch.url === "#contact") {
      scrollToContact();
      return;
    }
    window.location.href = pageMatch.url;
    return;
  }

  window.location.href = "hidden-gems.html";
}

function getContactScrollTop() {
  const footer = document.getElementById("contact");
  if (!footer) {
    return 0;
  }

  const navHeight =
    parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nav-height")) || 0;
  const footerTop = footer.getBoundingClientRect().top + window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

  return Math.min(Math.max(0, footerTop - navHeight - 16), maxScroll);
}

function scrollToContact(options = {}) {
  const { behavior = "smooth", updateHash = true } = options;
  const footer = document.getElementById("contact");

  if (!footer) {
    return;
  }

  window.scrollTo({ top: getContactScrollTop(), behavior });

  if (updateHash && window.location.hash !== "#contact") {
    history.replaceState(null, "", "#contact");
  }
}

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

  const searchForm = document.querySelector(".search");
  if (searchForm) {
    searchForm.addEventListener("submit", searchWebsite);
  }

  const params = new URLSearchParams(window.location.search);
  const prefilledQuery = params.get("q");
  const searchInput = document.querySelector(".search input");

  if (searchInput && prefilledQuery) {
    searchInput.value = prefilledQuery;
  }

  document.querySelectorAll('a[href="#contact"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      scrollToContact();
    });
  });

  if (window.location.hash === "#contact") {
    scrollToContact({ behavior: "auto", updateHash: false });
  }
});
