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


const options = {
  captions: true,              // Відображення підписів 
  captionDelay: 250,           // Затримка перед відображенням підпису
  captionSelector: 'img',      // В який селектор додається підпис
  captionType: 'attr',         // Тип данних для підпису
  captionPosition: 'bottom',   // Положення
  captionsData: 'alt',         // Джерело даних
};

new SimpleLightbox('.gallery a', options);

console.log(galleryItems);
