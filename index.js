let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls 
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



document.addEventListener('DOMContentLoaded', function() {
    let observerOptions = {
        threshold: 0.1
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    let fadeInElements = document.querySelectorAll('.fade-in-image');
    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    let observerOptions = { 
        threshold: 0.1
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    let fadeInElements = document.querySelectorAll('.fade-in-image2');
    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});





  // scripts.js
  document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const navbar = document.querySelector('.nav');
  
    // Initial check for scroll position
    if (lastScrollTop > 0) {
        navbar.style.opacity = '0';
    } else {
        navbar.style.opacity = '1';
    }
  
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            navbar.style.opacity = '0';
        } else {
            // Scrolling up or at the top
            navbar.style.opacity = '1';
        }
        lastScrollTop = scrollTop;
    });
});

  