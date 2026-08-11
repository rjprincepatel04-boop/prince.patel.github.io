// =========================================
// PIYUSH TUITION CLASSES
// MAIN JAVASCRIPT
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // FAQ ACCORDION
    // =====================================

    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function (question) {

        question.addEventListener("click", function () {

            const faqItem = question.closest(".faq-item");
            const answer = faqItem.querySelector(".faq-answer");

            // Close other FAQ items
            document.querySelectorAll(".faq-item").forEach(function (item) {

                if (item !== faqItem) {
                    item.classList.remove("active");

                    const otherAnswer = item.querySelector(".faq-answer");

                    if (otherAnswer) {
                        otherAnswer.style.maxHeight = null;
                    }
                }

            });

            // Open / close selected FAQ
            faqItem.classList.toggle("active");

            if (faqItem.classList.contains("active")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = null;
            }

        });

    });


    // =====================================
    // MOBILE NAVIGATION
    // =====================================

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });

    }

});
