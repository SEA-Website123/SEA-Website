const hamburgerMenu = document.getElementById('hamburger-menu');
const sideNav = document.getElementById('side-nav');
const closeMenu = document.getElementById('close-menu');

// Open Sidebar
hamburgerMenu.addEventListener('click', () => {
    sideNav.classList.add('active');
});

// Close Sidebar
closeMenu.addEventListener('click', () => {
    sideNav.classList.remove('active');
});
