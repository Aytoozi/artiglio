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
