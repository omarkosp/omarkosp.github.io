var currentImageIndex = 0;
var images = $('.image-carousel img');

setInterval(function() {
  // Hide the current image
  images.eq(currentImageIndex).fadeOut();

  // Update the index to the next image
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }

  // Show the next image
  images.eq(currentImageIndex).fadeIn();
}, 10000);
