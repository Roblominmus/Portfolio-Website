document.getElementById("see-more-button").addEventListener("click", function() {
    var hiddenContent = document.getElementById("hidden-content");
    if (hiddenContent.style.display === "none") {
        hiddenContent.style.display = "block";
        document.getElementById("see-more-button").textContent = "See Less";
    } else {
        hiddenContent.style.display = "none";
        document.getElementById("see-more-button").textContent = "See More";
    }
});