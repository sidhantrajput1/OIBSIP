const toggle = document.getElementById('toggle'); // Select the toggle element
const navItems = document.getElementsByClassName('nav-items')[0]; // Select the nav-items

toggle.addEventListener('click', () => {
    navItems.classList.toggle('active'); // Toggle the active class
});