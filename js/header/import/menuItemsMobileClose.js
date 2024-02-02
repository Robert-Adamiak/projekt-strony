export function menuItemsMobileClose() {
        const content = document.querySelector(".content");

        content.addEventListener("click", function () {
            const menuItemsMobile = document.querySelector(".menu-items-mobile");
            if (menuItemsMobile.classList.contains("active")) {
                menuItemsMobile.classList.remove("active");
            };
        });
}