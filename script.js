function startSlideshow() {
  const images = document.querySelectorAll('.slideshow-container img');
  let index = 0;

  setInterval(() => {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
  }, 5000);
}

startSlideshow();