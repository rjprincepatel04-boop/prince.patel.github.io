
document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       FAQ ACCORDION
    ===================================== */

    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function (question) {

        question.addEventListener("click", function () {

            const currentItem = question.closest(".faq-item");
            const currentAnswer = currentItem.querySelector(".faq-answer");

            // Close all other FAQ answers
            document.querySelectorAll(".faq-item").forEach(function (item) {

                if (item !== currentItem) {

                    item.classList.remove("active");

                    const answer = item.querySelector(".faq-answer");

                    if (answer) {
                        answer.style.maxHeight = null;
                    }

                }

            });

            // Open / close current answer
            if (currentItem.classList.contains("active")) {

                currentItem.classList.remove("active");
                currentAnswer.style.maxHeight = null;

            } else {

                currentItem.classList.add("active");
                currentAnswer.style.maxHeight =
                    currentAnswer.scrollHeight + "px";

            }

        });

    });


    /* =====================================
       MOBILE MENU
    ===================================== */

    const menuButton = document.querySelector(".menu-btn");
    const navigation = document.querySelector(".nav-links");

    if (menuButton && navigation) {

        menuButton.addEventListener("click", function () {

            navigation.classList.toggle("active");

        });

    }

});
