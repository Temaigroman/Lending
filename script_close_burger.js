
document.addEventListener('DOMContentLoaded', function() {
  const toggleCheckbox = document.getElementById('toggle');
  const navLinks = document.querySelectorAll('.nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      toggleCheckbox.checked = false; // Скрываем меню при клике на ссылку
    });
  });
});