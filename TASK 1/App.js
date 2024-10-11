document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementsByClassName('toggle')[0]; 
    const navItems = document.getElementsByClassName('nav-items')[0];

    toggle.addEventListener('click', () => {
        navItems.classList.toggle('active'); 
    });
});
