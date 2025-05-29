// Toggle navbar
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Newsletter subscription alert
document.querySelector('.newsletter button').addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.querySelector('.newsletter input').value;
  alert(`Thank you for subscribing, ${email}!`);
  document.querySelector('.newsletter input').value = '';
});

// Contact form handler
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for reaching out! We’ll get back to you soon.');
  this.reset();
});
