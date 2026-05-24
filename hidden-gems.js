document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("gems-detail-list");
  if (!list || typeof HIDDEN_GEMS === "undefined") return;

  HIDDEN_GEMS.forEach((gem) => {
    const article = document.createElement("article");
    article.className = "gem-detail";
    article.id = gem.id;

    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(gem.mapsQuery)}`;

    article.innerHTML = `
      <div class="gem-detail__media">
        <img src="${gem.image}" alt="${gem.imageAlt}" class="gem-detail__image" loading="lazy">
      </div>
      <div class="gem-detail__content">
        <span class="gem-detail__wijk">${gem.wijk}</span>
        <h2>${gem.title}</h2>
        <p class="gem-detail__caption">${gem.caption}</p>
        <p class="gem-detail__text">${gem.beschrijving}</p>
        <dl class="gem-detail__meta">
          <div>
            <dt>Adres</dt>
            <dd>${gem.adres}</dd>
          </div>
          <div>
            <dt>Wijk</dt>
            <dd>${gem.wijk}</dd>
          </div>
        </dl>
        <h3 class="gem-detail__tips-title">Handig om te weten</h3>
        <ul class="gem-detail__tips">
          ${gem.highlights.map((tip) => `<li>${tip}</li>`).join("")}
        </ul>
        <a href="${mapsUrl}" class="gem-detail__map-link" target="_blank" rel="noopener noreferrer">
          Bekijk op kaart
        </a>
      </div>
    `;

    list.appendChild(article);
  });

  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      target.classList.add("gem-detail--highlight");
      window.setTimeout(() => target.classList.remove("gem-detail--highlight"), 2500);
    }
  }
});
