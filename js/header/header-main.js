import { menuItemsMobileClose } from './import/menuItemsMobileClose.js'

document.addEventListener("DOMContentLoaded", function () {
    // Załadowanie nagłówka (przykład z użyciem fetch)
    fetch("partials/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
            const hamburger = document.querySelector(".hamburger");
            const menuItemsMobile = document.querySelector(".menu-items-mobile");

            hamburger.addEventListener("click", function (event) {
                menuItemsMobile.classList.toggle("active");
                event.stopPropagation();
            });
        });

        menuItemsMobileClose();
});


