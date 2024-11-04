
document.addEventListener('DOMContentLoaded', function() {
  const toggleCheckbox = document.getElementById('toggle');
  const navLinks = document.querySelectorAll('.nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      toggleCheckbox.checked = false; // Скрываем меню при клике на ссылку
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const closeButton = document.querySelector('.close');
  if (closeButton) {
      closeButton.addEventListener('touchstart', () => {
          closeButton.classList.add('active');
      });
      closeButton.addEventListener('touchend', () => {
          closeButton.classList.remove('active');
      });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const closeButton = document.querySelector('.camera');
  if (closeButton) {
      closeButton.addEventListener('touchstart', () => {
          closeButton.classList.add('active');
      });
      closeButton.addEventListener('touchend', () => {
          closeButton.classList.remove('active');
      });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const closeButton = document.querySelector('.world');
  if (closeButton) {
      closeButton.addEventListener('touchstart', () => {
          closeButton.classList.add('active');
      });
      closeButton.addEventListener('touchend', () => {
          closeButton.classList.remove('active');
      });
  }
});