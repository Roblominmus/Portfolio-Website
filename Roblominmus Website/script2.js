document.getElementById("see-more-button2").addEventListener("click", function() {
    var hiddenContent = document.getElementById("hidden-content2");
    if (hiddenContent.style.display === "none") {
        hiddenContent.style.display = "block";
        document.getElementById("see-more-button2").textContent = "See Less";
    } else {
        hiddenContent.style.display = "none";
        document.getElementById("see-more-button2").textContent = "See More";
    }
});