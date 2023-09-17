const currentImage = document.getElementById('current');
const imageGallery = document.querySelectorAll('.image-gallery img');
// set opacity
const opacity = 0.58;
// for the first img add opacity
imageGallery[0].style.opacity = opacity;

imageGallery.forEach((img) => img.addEventListener('click', changeCurrentImage));


function changeCurrentImage(e) {
    // get image on click
    currentImage.src = e.target.src;
    // reset opacity
    imageGallery.forEach(img => img.style.opacity = 1);
    // add oapcity on image
    e.target.style.opacity = opacity;
}


