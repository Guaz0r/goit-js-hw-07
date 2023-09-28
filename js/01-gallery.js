import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

function createMarkup(arr) {
  return arr
    .map(
      ({ original, preview, description }) => `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
          </a>
        </li>
      `
    )
    .join('');
}

gallery.innerHTML = createMarkup(galleryItems);

function handlerClick(evt) {
  if (evt.target !== evt.currentTarget) {
    const imageUrl = evt.target.getAttribute('data-source');
    openLightbox(imageUrl);
    evt.preventDefault(); // забороняємо дію посилання
  }
}

function openLightbox(imageUrl) {
  const lightbox = basicLightbox.create(`<img src="${imageUrl}">`, {
    onShow: () => {
      document.addEventListener('keydown', handleKeydown);
    },
    onClose: () => {
      document.removeEventListener('keydown', handleKeydown);
    },
  });
  lightbox.show();

  function handleKeydown(event) {
    if (event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27) {
      lightbox.close();
    }
  }
}

gallery.addEventListener('click', handlerClick);

console.log(galleryItems);