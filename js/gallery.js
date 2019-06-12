function activateGallery() {
    let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
    let mainImage = document.querySelector("#gallery-photo img");

    thumbnails.forEach(function(thumbnail) {
      // Preload large images.
    let newImageSrc  = thumbnail.dataset.largeVersion;
    let largeVersion = new Image();
    largeVersion.src = thumbnail.dataset.largeVersion;
    thumbnail.addEventListener("click", function() {
      // Set clicked image as main image.
      let newImageSrc = thumbnail.dataset.largeVersion;
      let imageAlt = thumbnail.dataset.title;
      mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("alt", imageAlt);
      
      let currentImage = document.querySelector(".current")
      let currentClass = currentImage.className;
      currentImage.classList.remove(currentClass);
      thumbnail.parentNode.classList.add(currentClass);
      
       // Update image info.
      let galleryInfo = document.querySelector("#gallery-info");
      let title       = galleryInfo.querySelector(".title");
      let description = galleryInfo.querySelector(".description");

      title.innerHTML       = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;
    });
  });
}