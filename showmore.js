document.addEventListener("DOMContentLoaded", function() {
    var showMoreBtn = document.getElementById("more_btn");
    var galleryGrid = document.getElementById("gallery_grid");
    var exploreText = document.getElementById("explore_text");
    var currentIndex = 0;
    var imagesPerLoad = 6;
    var imageList = [];

    function fetchImages() {
        fetch('https://picsum.photos/v2/list')
            .then(response => response.json())
            .then(data => {
                imageList = data;
                loadMoreImages();
            })
            .catch(error => console.error('Error fetching images:', error));
    }

    function loadMoreImages() {
        for (var i = 0; i < imagesPerLoad; i++) {
            if (currentIndex >= imageList.length) {
                break; // No more images to load
            }

            var img = document.createElement("img");
            img.src = imageList[currentIndex].download_url;
            img.alt = imageList[currentIndex].author;
            img.classList.add("gallery_img");

            var galleryItem = document.createElement("div");
            galleryItem.className = "gallery_grid_item";
            galleryItem.appendChild(img);

            galleryGrid.appendChild(galleryItem);
            currentIndex++;
        }

        if (currentIndex >= imageList.length) {
            showMoreBtn.style.display = "none";
            exploreText.textContent = "No more image";
        }
    }

    showMoreBtn.addEventListener("click", function(event) {
        event.preventDefault();

        // Fetch images if the list is empty, otherwise load more images
        if (imageList.length === 0) {
            fetchImages();
        } else {
            loadMoreImages();
        }
    });
});
