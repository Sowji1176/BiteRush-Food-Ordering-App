// ========================================
// BiteRush — Main JavaScript
// ========================================

// Start Ordering
function startApp() {
    window.location.href = "pages/onboarding.html";
}

// Go to Login
function goToLogin() {
    window.location.href = "pages/login.html";
}

// Go to Signup
function goToSignup() {
    window.location.href = "pages/signup.html";
}

// Go to Home
function goToHome() {
    window.location.href = "pages/home.html";
}

// Go to Cart
function goToCart() {
    window.location.href = "pages/cart.html";
}

// Go to Profile
function goToProfile() {
    window.location.href = "pages/profile.html";
}

// Scroll to a section on the landing page
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

// ========================================
// Mobile Navigation
// ========================================

function toggleMobileMenu() {
    const mobileMenu = document.getElementById("mobileMenu");

    if (mobileMenu) {
        mobileMenu.classList.toggle("active");
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById("mobileMenu");

    if (mobileMenu) {
        mobileMenu.classList.remove("active");
    }
}

// ========================================
// Close Mobile Menu When Clicking Outside
// ========================================

document.addEventListener("click", function (event) {
    const mobileMenu = document.getElementById("mobileMenu");
    const menuButton = document.querySelector(".mobile-menu-btn");

    if (!mobileMenu || !menuButton) {
        return;
    }

    const clickedInsideMenu = mobileMenu.contains(event.target);
    const clickedMenuButton = menuButton.contains(event.target);

    if (
        !clickedInsideMenu &&
        !clickedMenuButton &&
        mobileMenu.classList.contains("active")
    ) {
        mobileMenu.classList.remove("active");
    }
});

// ========================================
// Close Mobile Menu After Navigation
// ========================================

document.addEventListener("DOMContentLoaded", function () {
    const mobileLinks = document.querySelectorAll(
        "#mobileMenu a, #mobileMenu button"
    );

    mobileLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            closeMobileMenu();
        });
    });
});