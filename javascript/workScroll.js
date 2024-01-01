document.addEventListener("DOMContentLoaded", function () {
    const workTableCells = document.querySelectorAll('.workTableCell');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeIn');
            } else {
                entry.target.classList.remove('fadeIn');
            }
        });
    }, {threshold: 0.5});

    workTableCells.forEach(cell => {
        observer.observe(cell);
    });
});
