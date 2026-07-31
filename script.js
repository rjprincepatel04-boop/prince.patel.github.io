// ==========================================
// Mobile Menu Toggle
// ==========================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

// ==========================================
// Close Mobile Menu After Clicking a Link
// ==========================================

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});

// ==========================================
// Navbar Background on Scroll
// ==========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";
    } else {
        header.style.boxShadow = "0 3px 10px rgba(0,0,0,.08)";
    }

});

// ==========================================
// Scroll to Top Button
// ==========================================

const topButton = document.createElement("button");

topButton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "30px";
topButton.style.right = "30px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#0056d2";
topButton.style.color = "#fff";
topButton.style.cursor = "pointer";
topButton.style.fontSize = "18px";
topButton.style.display = "none";
topButton.style.zIndex = "999";
topButton.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";
topButton.style.transition = ".3s";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ==========================================
// Fade-in Animation on Scroll
// ==========================================

const cards = document.querySelectorAll(".card, .feature");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = ".8s ease";

    observer.observe(card);

});

// ==========================================
// Button Hover Effect
// ==========================================

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });

});

// ==========================================
// Current Year in Footer (Optional)
// ==========================================

const footer = document.querySelector("footer p:last-child");

if (footer) {
    footer.innerHTML =
        `© ${new Date().getFullYear()} Prince Tuition Classes. All Rights Reserved.`;
}

// ==========================================
// Console Welcome Message
// ==========================================

console.log("Welcome to Prince Tuition Classes Website 🚀");
