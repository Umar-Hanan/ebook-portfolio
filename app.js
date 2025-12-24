window.addEventListener("DOMContentLoaded", () => {
  const basePath = "ebook pdfs/";

  const books = [
    {
      id: "2024-top-3-keys",
      title: "2024 TOP 3 KEYS to Creating a Winning Website",
      folder: "2024 TOP 3 KEYS to Creating a Winning Website",
      images: [
        "Untitled-1-01.png",
        "Untitled-1-02.png",
        "Untitled-1-03.png",
        "Untitled-1-04.png",
        "Untitled-1-05.png",
        "Untitled-1-06.png",
        "Untitled-1-07.png",
        "Untitled-1-08.png",
        "Untitled-1-09.png",
        "Untitled-1-10.png",
        "Untitled-1-11.png",
        "Untitled-1-12.png",
        "Untitled-1-13.png",
      ],
      pdf: "2024 TOP 3 KEYS to Creating a Winning Website.pdf",
    },
    {
      id: "21-ways-to-eliminate-inflammation",
      title: "21 Ways To Eliminate Inflammation",
      folder: "21 Ways To Eliminate Inflammation",
      images: [
        "4-01.png",
        "4-02.png",
        "4-03.png",
        "4-04.png",
        "4-05.png",
        "4-06.png",
        "4-07.png",
      ],
      pdf: "21 Ways To Eliminate Inflammation.pdf",
    },
    {
      id: "5-day-nutrition-kickstart",
      title: "5 Day Nutrition Kickstart Guide r4",
      folder: "5 Day Nutrition Kickstart Guide r4",
      images: [
        "1-01.png",
        "1-02.png",
        "1-03.png",
        "1-04.png",
        "1-05.png",
        "1-06.png",
        "1-07.png",
        "1-08.png",
        "1-09.png",
        "1-10.png",
        "1-11.png",
        "1-12.png",
        "1-13.png",
      ],
      pdf: "5 Day Nutrition Kickstart Guide r4  .pdf",
    },
    {
      id: "602-vacation-rental",
      title: "602 Vacation Rental Management Services",
      folder: "602 Vacation Rental Management Services",
      images: [
        "1-01.png",
        "1-02.png",
        "1-03.png",
        "1-04.png",
        "1-05.png",
      ],
      pdf: "602 Vacation Rental Management Services .pdf",
    },
    {
      id: "7-day-vegan-meal-plan",
      title: "7 Day VEGAN meal plan r1",
      folder: "7 Day VEGAN meal plan r1",
      images: [
        "1-01.png",
        "1-02.png",
        "1-03.png",
        "1-04.png",
        "1-05.png",
        "1-06.png",
        "1-07.png",
        "1-08.png",
        "1-09.png",
        "1-10.png",
        "1-11.png",
        "1-12.png",
        "1-13.png",
        "1-14.png",
        "1-15.png",
        "1-16.png",
      ],
      pdf: "7 Day VEGAN meal plan r1 .pdf",
    },
    {
      id: "affiliate-accelerator",
      title: "Affiliate Accelerator r3",
      folder: "Affiliate Accelerator r3",
      images: [
        "1-01.png",
        "1-02.png",
        "1-03.png",
        "1-04.png",
        "1-05.png",
        "1-06.png",
        "1-07.png",
        "1-08.png",
        "1-09.png",
        "1-10.png",
        "1-11.png",
        "1-12.png",
        "1-13.png",
        "1-14.png",
      ],
      pdf: "Affiliate Accelerator r3 .pdf",
    },
    {
      id: "call-center-guide",
      title: "Building Your Call Center Business with Arise A Step-by-Step Guide",
      folder: "Building Your Call Center Business with Arise A Step-by-Step Guide",
      images: [
        "1-01.png",
        "1-02.png",
        "1-03.png",
        "1-04.png",
        "1-05.png",
        "1-06.png",
        "1-07.png",
        "1-08.png",
        "1-09.png",
      ],
      pdf: "Building Your Call Center Business with Arise A Step-by-Step Guide.pdf",
    },
    {
      id: "credit-number-ai",
      title: "Credit Number ai",
      folder: "Credit Number ai",
      images: [
        "1-01.png",
        "1-02.png",
        "1-03.png",
        "1-04.png",
      ],
      pdf: "Credit Number ai.pdf",
    },
    {
      id: "domina-tus-finanz",
      title: "Domina tus FINANAZ",
      folder: "Domina tus FINANAZ",
      images: [
        "1-01.png",
        "1-02.png",
        "1-03.png",
        "1-04.png",
        "1-05.png",
        "1-06.png",
        "1-07.png",
        "1-08.png",
        "1-09.png",
        "1-10.png",
        "1-11.png",
        "1-12.png",
        "1-13.png",
        "1-14.png",
        "1-15.png",
        "1-16.png",
        "1-17.png",
        "1-18.png",
        "1-19.png",
        "1-20.png",
        "1-21.png",
      ],
      pdf: "Domina tus FINANAZ.pdf",
    },
    {
      id: "enterprenuer-guide",
      title: "Enterprenuer Guide",
      folder: "Enterprenuer Guide",
      images: [
        "1-01.png",
        "1-02.png",
        "1-03.png",
        "1-04.png",
        "1-05.png",
        "1-06.png",
        "1-07.png",
        "1-08.png",
        "1-09.png",
        "1-10.png",
        "1-11.png",
        "1-12.png",
        "1-13.png",
        "1-14.png",
        "1-15.png",
        "1-16.png",
        "1-17.png",
        "1-18.png",
        "1-19.png",
        "1-20.png",
        "1-21.png",
      ],
      pdf: "Enterprenuer Guide.pdf",
    },
    {
      id: "tax-benefits-real-estate",
      title: "HOW YOU CAN GET MORE TAX BENEFITS FROM REAL ESTATE r1",
      folder: "HOW YOU CAN GET MORE TAX BENEFITS FROM REAL ESTATE r1",
      images: [
        "1-01.png",
        "1-02.png",
        "1-03.png",
        "1-04.png",
        "1-05.png",
        "1-06.png",
        "1-07.png",
      ],
      pdf: "HOW YOU CAN GET MORE TAX BENEFITS FROM REAL ESTATE r1.pdf",
    },
    {
      id: "mind-mode-steps",
      title: "Mind Mode Steps for For Positive Daily Experiences r5",
      folder: "Mind Mode Steps for For Positive Daily Experiences r5",
      images: [
        "1-01.png",
        "1-02.png",
        "1-03.png",
        "1-04.png",
        "1-05.png",
        "1-06.png",
      ],
      pdf: "Mind Mode Steps for For Positive Daily Experiences r5 .pdf",
    },
    {
      id: "routine-inarretable",
      title: "Routine inarrêtable Instaurer une nouvelle routine pour une meilleure reprise sportive r1",
      folder: "Routine inarrêtable Instaurer une nouvelle routine pour une meilleure reprise sportive r1",
      images: [
        "1-01.png",
        "1-02.png",
        "1-03.png",
        "1-04.png",
        "1-05.png",
        "1-06.png",
        "1-07.png",
        "1-08.png",
        "1-09.png",
        "1-10.png",
        "1-11.png",
        "1-12.png",
        "1-13.png",
        "1-14.png",
        "1-15.png",
        "1-16.png",
      ],
      pdf: "Routine inarrêtable Instaurer une nouvelle routine pour une meilleure reprise sportive r1.pdf",
    },
    {
      id: "self-love",
      title: "Self love r2",
      folder: "Self love r2",
      images: [
        "1-01.png",
        "1-02.png",
        "1-03.png",
        "1-04.png",
        "1-05.png",
        "1-06.png",
        "1-07.png",
        "1-08.png",
        "1-09.png",
        "1-10.png",
        "1-11.png",
        "1-12.png",
        "1-13.png",
        "1-14.png",
        "1-15.png",
        "1-16.png",
        "1-17.png",
        "1-18.png",
        "1-19.png",
        "1-20.png",
        "1-21.png",
        "1-22.png",
        "1-23.png",
        "1-24.png",
        "1-25.png",
        "1-26.png",
        "1-27.png",
        "1-28.png",
        "1-29.png",
        "1-30.png",
        "1-31.png",
        "1-32.png",
        "1-33.png",
      ],
      pdf: "Self love r2 .pdf",
    },
    {
      id: "selling-on-linkedin",
      title: "Selling on LinkedIn without going to jail",
      folder: "Selling on LinkedIn without going to jail",
      images: [
        "1-01.png",
        "1-02.png",
        "1-03.png",
        "1-04.png",
        "1-05.png",
        "1-06.png",
        "1-07.png",
        "1-08.png",
        "1-09.png",
        "1-10.png",
        "1-11.png",
        "1-12.png",
        "1-13.png",
        "1-14.png",
        "1-15.png",
        "1-16.png",
        "1-17.png",
        "1-18.png",
        "1-19.png",
      ],
      pdf: "Selling on LinkedIn without going to jail.pdf",
    },
    {
      id: "inbound-marketing-trends",
      title: "State-of-Inbound-Marketing-Trends_V712",
      folder: "State-of-Inbound-Marketing-Trends_V712",
      images: [
        "1-01.png",
        "1-02.png",
        "1-03.png",
        "1-04.png",
        "1-05.png",
        "1-06.png",
        "1-07.png",
        "1-08.png",
        "1-09.png",
        "1-10.png",
        "1-11.png",
        "1-12.png",
        "1-13.png",
        "1-14.png",
        "1-15.png",
        "1-16.png",
        "1-17.png",
        "1-18.png",
        "1-19.png",
        "1-20.png",
        "1-21.png",
        "1-22.png",
        "1-23.png",
        "1-24.png",
        "1-25.png",
        "1-26.png",
        "1-27.png",
        "1-28.png",
        "1-29.png",
        "1-30.png",
        "1-31.png",
        "1-32.png",
        "1-33.png",
        "1-34.png",
        "1-35.png",
        "1-36.png",
        "1-37.png",
        "1-38.png",
        "1-39.png",
        "1-40.png",
        "1-41.png",
        "1-42.png",
        "1-43.png",
        "1-44.png",
        "1-45.png",
        "1-46.png",
        "1-47.png",
        "1-48.png",
        "1-49.png",
        "1-50.png",
        "1-51.png",
        "1-52.png",
      ],
      pdf: "State-of-Inbound-Marketing-Trends_V712.pdf",
    },
    {
      id: "team-meetings-checklist",
      title: "TEAM MEETINGS The Checklist",
      folder: "TEAM MEETINGS The Checklist",
      images: [
        "1-01.png",
        "1-02.png",
        "1-03.png",
        "1-04.png",
        "1-05.png",
      ],
      pdf: "TEAM MEETINGS The Checklist.pdf",
    },
    {
      id: "art-of-journaling",
      title: "The Art of Journaling",
      folder: "The Art of Journaling",
      images: [
        "1-01.png",
        "1-02.png",
        "1-03.png",
        "1-04.png",
        "1-05.png",
        "1-06.png",
      ],
      pdf: "The Art of Journaling .pdf",
    },
    {
      id: "ultimate-travelers-checklist",
      title: "Ultimate Travelers Checklist",
      folder: "Ultimate Travelers Checklist",
      images: [
        "1-01.png",
        "1-02.png",
        "1-03.png",
        "1-04.png",
        "1-05.png",
        "1-06.png",
        "1-07.png",
        "1-08.png",
        "1-09.png",
      ],
      pdf: "Ultimate Travelers Checklist .pdf",
    },
  ];

  const landscapeBookIds = new Set(["inbound-marketing-trends"]);

  const grid = document.getElementById("booksGrid");
  const themeToggleButtonEl = document.getElementById("themeToggleButton");
  const themeNameEl = document.getElementById("themeName");

  function createBookCard(book, index) {
    const card = document.createElement("article");
    const isLandscape = landscapeBookIds.has(book.id);
    card.className = "book-card " + (isLandscape ? "book-card--landscape" : "book-card--portrait");
    card.dataset.index = index.toString();

    const thumbSrc = basePath + book.folder + "/" + book.images[0];

    card.innerHTML = `
      <div class="book-thumb">
        <img src="${thumbSrc}" alt="${book.title} cover" loading="lazy" />
        <div class="book-pages-pill">${book.images.length} pages</div>
      </div>
      <div class="book-info">
        <h3 class="book-title">${book.title}</h3>
        <p class="book-meta">Click to preview</p>
      </div>
    `;

    card.addEventListener("click", () => openLightbox(index, 0));

    return card;
  }

  books.forEach((book, index) => {
    const card = createBookCard(book, index);
    grid.appendChild(card);
  });

  const THEME_STORAGE_KEY = "ebook-portfolio-theme";

  function applyTheme(theme) {
    const isLight = theme === "light";
    document.body.classList.toggle("theme-light", isLight);
    if (themeNameEl) {
      themeNameEl.textContent = isLight ? "Light" : "Dark";
    }
    if (themeToggleButtonEl) {
      themeToggleButtonEl.textContent = isLight ? "Switch to Dark" : "Switch to Light";
    }
  }

  const storedTheme = (typeof window !== "undefined" && window.localStorage && window.localStorage.getItem(THEME_STORAGE_KEY)) || "dark";
  applyTheme(storedTheme === "light" ? "light" : "dark");

  if (themeToggleButtonEl) {
    themeToggleButtonEl.addEventListener("click", () => {
      const isLight = document.body.classList.contains("theme-light");
      const nextTheme = isLight ? "dark" : "light";
      applyTheme(nextTheme);
      try {
        if (window.localStorage) {
          window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
        }
      } catch (e) {
        // ignore storage errors
      }
    });
  }

  const lightboxEl = document.getElementById("lightbox");
  const titleEl = document.getElementById("lightboxTitle");
  const imageEl = document.getElementById("lightboxImage");
  const spinnerEl = document.getElementById("lightboxSpinner");
  const pageIndicatorEl = document.getElementById("lightboxPageIndicator");
  const closeButtonEl = document.getElementById("closeButton");
  const nextButtonEl = document.getElementById("nextButton");
  const prevButtonEl = document.getElementById("prevButton");
  const zoomInButtonEl = document.getElementById("zoomInButton");
  const zoomOutButtonEl = document.getElementById("zoomOutButton");
  const dialogEl = lightboxEl.querySelector(".lightbox-dialog");
  const closeIconEl = lightboxEl.querySelector(".lightbox-close");
  const imageWrapperEl = lightboxEl.querySelector(".lightbox-image-wrapper");
  const pageLoaderEl = document.getElementById("pageLoader");

  let currentBookIndex = null;
  let currentImageIndex = 0;
  let currentZoom = 1;
  let offsetX = 0;
  let offsetY = 0;
  let isPanning = false;
  let panStartX = 0;
  let panStartY = 0;
  let panStartOffsetX = 0;
  let panStartOffsetY = 0;
  const MIN_ZOOM = 1;
  const MAX_ZOOM = 2.5;
  const ZOOM_STEP = 0.25;

  function clampZoom(value) {
    return Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, value));
  }

  function applyZoom() {
    if (currentZoom <= 1.01) {
      offsetX = 0;
      offsetY = 0;
    }

    const translateX = offsetX;
    const translateY = offsetY;
    imageEl.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentZoom})`;

    if (imageWrapperEl) {
      if (currentZoom > 1.01) {
        imageWrapperEl.classList.add("zoom-active");
      } else {
        imageWrapperEl.classList.remove("zoom-active");
      }
    }
  }

  function updateLightboxImage() {
    if (currentBookIndex === null) return;
    const book = books[currentBookIndex];
    const imageName = book.images[currentImageIndex];
    const src = basePath + book.folder + "/" + imageName;

    if (spinnerEl) {
      spinnerEl.classList.add("active");
    }
    imageEl.classList.remove("visible");

    if (imageWrapperEl) {
      imageWrapperEl.classList.remove("landscape", "portrait");
    }

    currentZoom = 1;
    offsetX = 0;
    offsetY = 0;
    applyZoom();

    imageEl.onload = () => {
      if (spinnerEl) {
        spinnerEl.classList.remove("active");
      }
      imageEl.classList.add("visible");

      if (imageWrapperEl && imageEl.naturalWidth && imageEl.naturalHeight) {
        const isLandscape = imageEl.naturalWidth > imageEl.naturalHeight;
        imageWrapperEl.classList.toggle("landscape", isLandscape);
        imageWrapperEl.classList.toggle("portrait", !isLandscape);
      }
    };

    imageEl.src = src;
    imageEl.alt = `${book.title} – page ${currentImageIndex + 1}`;
    pageIndicatorEl.textContent = `Page ${currentImageIndex + 1} of ${book.images.length}`;
  }

  function openLightbox(bookIndex, imageIndex) {
    currentBookIndex = bookIndex;
    currentImageIndex = imageIndex || 0;
    const book = books[currentBookIndex];

    titleEl.textContent = book.title;
    updateLightboxImage();

    lightboxEl.classList.remove("hidden");
    lightboxEl.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");

    if (dialogEl && typeof dialogEl.focus === "function") {
      dialogEl.focus();
    }
  }

  function closeLightbox() {
    lightboxEl.classList.add("hidden");
    lightboxEl.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    currentBookIndex = null;
    currentImageIndex = 0;
    currentZoom = 1;
    offsetX = 0;
    offsetY = 0;
    applyZoom();
  }

  function changeImage(delta) {
    if (currentBookIndex === null) return;
    const book = books[currentBookIndex];
    const total = book.images.length;
    currentImageIndex = (currentImageIndex + delta + total) % total;
    updateLightboxImage();
  }

  nextButtonEl.addEventListener("click", () => changeImage(1));
  prevButtonEl.addEventListener("click", () => changeImage(-1));
  closeButtonEl.addEventListener("click", closeLightbox);
  if (closeIconEl) {
    closeIconEl.addEventListener("click", closeLightbox);
  }

  lightboxEl.addEventListener("click", (event) => {
    if (event.target === lightboxEl) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (lightboxEl.classList.contains("hidden")) return;

    if (event.key === "Escape") {
      closeLightbox();
    } else if (event.key === "ArrowRight") {
      changeImage(1);
    } else if (event.key === "ArrowLeft") {
      changeImage(-1);
    }
  });

  if (imageWrapperEl) {
    imageWrapperEl.addEventListener("wheel", (event) => {
      if (currentBookIndex === null) return;
      event.preventDefault();
      const direction = event.deltaY < 0 ? 1 : -1;
      const nextZoom = clampZoom(currentZoom + direction * ZOOM_STEP);
      if (nextZoom !== currentZoom) {
        currentZoom = nextZoom;
        applyZoom();
      }
    });

    imageWrapperEl.addEventListener("mousedown", (event) => {
      if (currentBookIndex === null || currentZoom <= 1.01) return;
      isPanning = true;
      panStartX = event.clientX;
      panStartY = event.clientY;
      panStartOffsetX = offsetX;
      panStartOffsetY = offsetY;
      imageWrapperEl.classList.add("panning");
    });

    document.addEventListener("mousemove", (event) => {
      if (!isPanning) return;
      const dx = event.clientX - panStartX;
      const dy = event.clientY - panStartY;
      offsetX = panStartOffsetX + dx;
      offsetY = panStartOffsetY + dy;
      applyZoom();
    });

    document.addEventListener("mouseup", () => {
      if (!isPanning) return;
      isPanning = false;
      imageWrapperEl.classList.remove("panning");
    });

    imageWrapperEl.addEventListener("mouseleave", () => {
      if (!isPanning) return;
      isPanning = false;
      imageWrapperEl.classList.remove("panning");
    });
  }

  document.addEventListener("contextmenu", (event) => {
    const target = event.target;
    if (
      target.closest &&
      (target.closest(".book-thumb") || target.closest(".lightbox-image-wrapper"))
    ) {
      event.preventDefault();
    }
  });

  if (zoomInButtonEl && zoomOutButtonEl) {
    zoomInButtonEl.addEventListener("click", () => {
      currentZoom = clampZoom(currentZoom + ZOOM_STEP);
      applyZoom();
    });

    zoomOutButtonEl.addEventListener("click", () => {
      currentZoom = clampZoom(currentZoom - ZOOM_STEP);
      applyZoom();
    });
  }

  if (pageLoaderEl) {
    setTimeout(() => {
      pageLoaderEl.classList.add("hidden");
    }, 400);
  }
});
