document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.toggle'); 
    const navItems = document.querySelector('.nav-links');

    toggle.addEventListener('click', () => {
        navItems.classList.toggle('active'); 
        document.body.style.marginBottom = "3rem"
    });
});

document.getElementById('toggleCheckbox').addEventListener('change', function() {
    if (this.checked) {
        document.body.style.backgroundColor = 'white'; 
        document.body.style.color = 'black';
    } else {
        document.body.style.backgroundColor = 'black'; 
        document.body.style.color = 'white';
    }
});

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Email copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}