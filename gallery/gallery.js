document.addEventListener('DOMContentLoaded', function() {
  const gallery = document.getElementById('gallery');
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  const closeBtn = document.getElementById('close');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  let currentIndex = 0;

  const images = gallery.getElementsByTagName('img');
  const imageArray = Array.from(images);

  function openModal(index) {
    modal.style.display = 'block';
    modalImage.src = imageArray[index].src;
    currentIndex = index;
  }

  function closeModal() {
    modal.style.display = 'none';
  }

  function showNextImage() {
    currentIndex = (currentIndex + 1) % imageArray.length;
    modalImage.src = imageArray[currentIndex].src;
  }

  function showPrevImage() {
    currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
    modalImage.src = imageArray[currentIndex].src;
  }

  imageArray.forEach((image, index) => {
    image.addEventListener('click', () => openModal(index));
  });

  closeBtn.addEventListener('click', closeModal);
  nextBtn.addEventListener('click', showNextImage);
  prevBtn.addEventListener('click', showPrevImage);

  // Close modal by clicking outside the modal content
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Navigate to previous or next image by clicking left or right halves of the modal
  modal.addEventListener('click', function(event) {
    const width = modal.offsetWidth;
    const x = event.clientX - modal.getBoundingClientRect().left;

    if (x < width / 2) {
      showPrevImage();
    } else {
      showNextImage();
    }
  });
});




  
  // scripts.js
document.addEventListener('DOMContentLoaded', function() {
  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const navbar = document.getElementById('nav');

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
