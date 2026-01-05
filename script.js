// Scroll animations for sections
const sections = document.querySelectorAll('.section.animate');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        if (scrollY + window.innerHeight - 100 > section.offsetTop) {
            section.classList.add('active');
        }
    });
});
