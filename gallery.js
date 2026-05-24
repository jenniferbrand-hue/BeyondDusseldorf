document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("gallery-grid");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxDescription = document.getElementById("lightbox-description");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxPrev = document.getElementById("lightbox-prev");
  const lightboxNext = document.getElementById("lightbox-next");

  if (!grid || typeof GALLERY_PHOTOS === "undefined") return;

  const photos = GALLERY_PHOTOS.map((photo) => ({
    ...photo,
    src: photo.image || `images/gallery/gallery-${String(photo.id).padStart(2, "0")}.jpg`,
    alt: `${photo.title}, Düsseldorf`,
  }));

  let currentIndex = 0;

  photos.forEach((photo, index) => {
    const card = document.createElement("article");
    card.className = "gallery-card";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "gallery-item";
    button.setAttribute("aria-label", `${photo.title}: ${photo.caption}`);

    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.alt;
    img.loading = "lazy";
    img.className = "gallery-image";

    const overlay = document.createElement("div");
    overlay.className = "gallery-overlay";

    const title = document.createElement("h3");
    title.textContent = photo.title;

    const caption = document.createElement("p");
    caption.textContent = photo.caption;

    overlay.appendChild(title);
    overlay.appendChild(caption);
    button.appendChild(img);
    button.appendChild(overlay);
    button.addEventListener("click", () => openLightbox(index));

    card.appendChild(button);
    grid.appendChild(card);
  });

  function fillLightbox(index) {
    const photo = photos[index];
    lightboxImg.src = photo.src;
    lightboxImg.alt = photo.alt;
    lightboxTitle.textContent = photo.title;
    lightboxCaption.textContent = photo.caption;
    lightboxDescription.textContent = photo.description;
  }

  function openLightbox(index) {
    currentIndex = index;
    fillLightbox(index);
    lightbox.hidden = false;
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    lightboxImg.src = "";
  }

  function showPhoto(step) {
    currentIndex = (currentIndex + step + photos.length) % photos.length;
    fillLightbox(currentIndex);
  }

  lightboxClose?.addEventListener("click", closeLightbox);
  lightboxPrev?.addEventListener("click", () => showPhoto(-1));
  lightboxNext?.addEventListener("click", () => showPhoto(1));

  lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (event) => {
    if (lightbox.hidden) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") showPhoto(-1);
    if (event.key === "ArrowRight") showPhoto(1);
  });
});
