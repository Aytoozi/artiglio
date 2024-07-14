// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isVisible = answer.style.display === 'block';
            
            // Hide all answers
            document.querySelectorAll('.faq-answer').forEach(answer => {
                answer.style.display = 'none';
            });

            // Toggle the visibility of the clicked answer
            answer.style.display = isVisible ? 'none' : 'block';
        });
    });
});



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
  