document.addEventListener('astro:page-load', () => {
    var videoContainer = document.getElementById("videoContainer");
    var toggleButton = document.getElementById("mostrarVideo");
    var youtubeVideo = document.getElementById("miVideo");


    toggleButton.addEventListener("click", function() {
        if (videoContainer.style.display === "none") {
            videoContainer.style.display = "block";
            youtubeVideo.src += "?autoplay=1";
        } else {
            videoContainer.style.display = "none";
            youtubeVideo.src = youtubeVideo.src.replace("?autoplay=1", "");
        }
    });

    // Ocultar el video cuando se hace clic en otra parte de la página
    document.addEventListener("click", function(event) {
        if (event.target !== toggleButton && event.target.parentNode !== videoContainer) {
            videoContainer.style.display = "none";
            youtubeVideo.src = youtubeVideo.src.replace("?autoplay=1", "");
        }
    });
});