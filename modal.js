document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    var closeBtn = document.getElementById("close_modal");
    var subscribeForm = document.getElementById("sub_form");

    subscribeForm.addEventListener("submit", function(event) {
        event.preventDefault();
        modal.style.display = "block";
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});