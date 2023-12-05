//light box responce
lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    disableScrolling: true,
  });
  


//side show
const images = document.querySelectorAll('.header img');
let index = 0;

function showNextImage() {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
}

setInterval(showNextImage, 4000); // Change image every 5 seconds




/* Lightbox */
var lightbox = new SimpleLightbox('.gallery a', { /* options */ });


