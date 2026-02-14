let images = document.querySelectorAll(".gallery-item");
let currentIndex = 0;

function openLightbox(index) {
    document.getElementById("lightbox").style.display = "flex";
    currentIndex = index;
    showImage();
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex < 0)
        currentIndex = images.length - 1;

    if (currentIndex >= images.length)
        currentIndex = 0;

    showImage();
}

function showImage() {
    document.getElementById("lightbox-img").src =
        images[currentIndex].src;
}

/* Filter Images */
function filterImages(category) {
    images.forEach(img => {
        if (category === "all" || img.classList.contains(category)) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}
