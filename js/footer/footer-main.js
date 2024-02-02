document.addEventListener("DOMContentLoaded", function() {
    // Wczytanie stopki
    fetch("partials/footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer").innerHTML = data);
});
