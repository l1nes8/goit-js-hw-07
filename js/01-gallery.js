import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

function renderGallery() {
  const createEl = galleryItems
    .map(
      (item) => `
<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/>
  </a>
</li>`,
    )
    .join('');

  galleryContainer.innerHTML = createEl;
}
renderGallery();

galleryContainer.addEventListener('click', mouseClickGallery);

function mouseClickGallery(event) {
  event.preventDefault();

  if (event.target.classList.contains('gallery__image')) {
    const largeImageUrl = event.target.dataset.source;

    const instance = basicLightbox.create(`
      <img src="${largeImageUrl}" alt="Image description">
    `);

    instance.show();

    document.addEventListener('keydown', onKeyPressClose);

    function onKeyPressClose(event) {
      if (event.code === 'Escape') {
        instance.close();

        document.removeEventListener('keydown', onKeyPressClose);
      }
    }
  }
}

console.log(galleryItems);
