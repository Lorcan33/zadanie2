const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const gallery = document.getElementById("gallery-modal");
const overlay = document.getElementById("cierny-overlay");
const image = document.getElementById("gallery-modal-image");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

const galleryImages = [
  "obrazky/Model-3.jpg",
  "obrazky/Model-S.avif",
  "obrazky/Model-X.avif",
  "obrazky/Model-Y.webp",
];

const closeGallery = () => {
  gallery.style.opacity = 0;
  overlay.style.opacity = 0;
  setTimeout(() => {
    gallery.classList.remove("active");
    overlay.style.display = "none";
  }, 300);
};

let currentImageIndex = 0;

const openGallery = (id) => {
  currentImageIndex = id;
  const imageSrc = galleryImages[currentImageIndex];
  image.src = imageSrc;
  overlay.style.display = "block";
  overlay.style.opacity = 1;
  gallery.classList.add("active");
  gallery.style.opacity = 1;
};

const nextImage = () => {
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  const nextImageSrc = galleryImages[currentImageIndex];
  image.src = nextImageSrc;
};

const previousImage = () => {
  currentImageIndex =
    (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  const previousImageSrc = galleryImages[currentImageIndex];
  image.src = previousImageSrc;
};


