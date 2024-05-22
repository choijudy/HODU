document.addEventListener("DOMContentLoaded", function() {
    var backToTopButton = document.getElementById("top_btn");

    backToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});