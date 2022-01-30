// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const pictureContainer = document.querySelector('.gallery');
const pictureMarkup = createPictureMarkup(galleryItems);
pictureContainer.insertAdjacentHTML('beforeend', pictureMarkup);
pictureContainer.addEventListener('click', onPictureClick);

function createPictureMarkup(pictures) {
    const markup = pictures.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join("");
    return markup;
} 

function onPictureClick(e) {
    e.preventDefault();
} 

let originalPictures = new SimpleLightbox('.gallery a', {captionsData:'alt'}, {captionDelay: 250});  

console.log(galleryItems);
