const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    menuToggle.textContent = mobileMenu.classList.contains('open') ? '✕' : '☰';
});

mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuToggle.textContent = '☰';
}));