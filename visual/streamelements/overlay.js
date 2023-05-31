const extra = '{{currency}} {{amount}}';
const title = '{{name}}';

const images = '{{imageList}}'.split('|').map(image => image.trim());
const selectedImageIndex = Math.floor(Math.random() * 1000 % images.length);
const selectedImage = images[selectedImageIndex];

const phrases = '{{phraseList}}'.split('|').map(phrase => phrase.trim() + (extra.trim() ? `</br>${extra}` : ''));
const selectedPhrasesIndex = Math.floor(Math.random() * 1000 % phrases.length);
const selectedPhrase = phrases[selectedPhrasesIndex];

const titleContainer = document.querySelector('#title');
titleContainer.innerHTML = title;

const imageContainer = document.querySelector('#image');
imageContainer.src = selectedImage;

const phraseContainer = document.querySelector('#phrase');
phraseContainer.innerHTML = selectedPhrase;
