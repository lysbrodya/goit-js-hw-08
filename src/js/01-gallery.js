// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');
galleryItems.map(({ preview, original, description }) => {
  const image = document.createElement('img');
  image.src = preview;
  image.alt = description;
  image.classList.add('gallery__image');

  const linkImage = document.createElement('a');
  linkImage.href = original;
  linkImage.classList.add('gallery__link');
  linkImage.title = description;

  const liImage = document.createElement('li');
  liImage.classList.add('gallery__item');

  linkImage.append(image);

  liImage.append(linkImage);

  gallery.append(liImage);
});
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
var galeryFunction = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
