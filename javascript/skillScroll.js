document.addEventListener("DOMContentLoaded", function () {
    const skillItems = document.querySelectorAll('.skill-item');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, {threshold: 0.5});

    skillItems.forEach(skillItem => {
        observer.observe(skillItem);
    });
});
