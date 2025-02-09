document.addEventListener("DOMContentLoaded", () => {
    let index = 0;
    const images = document.querySelectorAll(".carousel-item");
    const totalImages = images.length;

    // Carousel image change function
    function changeImage() {
        index = (index + 1) % totalImages;
        document.querySelector(".carousel-images").style.transform = `translateX(-${index * 100}vw)`;
    }

    setInterval(changeImage, 6000); // Change image every 6 seconds

    // Menu toggle functionality
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

