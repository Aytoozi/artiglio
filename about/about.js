document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger-menu");
    const navUl = document.querySelector(".nav ul");

    hamburger.addEventListener("click", () => {
        navUl.classList.toggle("active");
    });

    // Optional: Close menu when clicking outside
    document.addEventListener("click", function(event) {
        const target = event.target;
        if (!target.closest('.nav') && navUl.classList.contains('active')) {
            navUl.classList.remove('active');
        }
    });
});
