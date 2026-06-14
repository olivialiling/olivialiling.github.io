const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');

let images = [];
let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  lightboxImg.src = images[index].src;
  lightboxCaption.textContent = images[index].dataset.caption || '';
  lightbox.classList.add('open');
}

document.querySelectorAll('.image-grid img, .masonry-grid img').forEach((img, i) => {
  images.push(img);
  img.style.cursor = 'pointer';
  img.addEventListener('click', () => openLightbox(i));
});

document.getElementById('lightbox-prev').addEventListener('click', (e) => {
  e.stopPropagation();
  openLightbox((currentIndex - 1 + images.length) % images.length);
});

document.getElementById('lightbox-next').addEventListener('click', (e) => {
  e.stopPropagation();
  openLightbox((currentIndex + 1) % images.length);
});

lightbox.addEventListener('click', () => lightbox.classList.remove('open'));

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'ArrowLeft') openLightbox((currentIndex - 1 + images.length) % images.length);
  if (e.key === 'ArrowRight') openLightbox((currentIndex + 1) % images.length);
  if (e.key === 'Escape') lightbox.classList.remove('open');
});