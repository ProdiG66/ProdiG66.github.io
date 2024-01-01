function scrollToSection() {
    const targetSection = document.getElementById('targetSection');

    // Check if the target section exists
    if (targetSection) {
        // Scroll to the target section smoothly
        targetSection.scrollIntoView({behavior: 'smooth'});
    }
}

function scrollToSection(targetSectionName) {
    const targetSection = document.getElementById(targetSectionName);
    if (targetSection) {
        const yOffset = -90;
        const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }
}

function showHome() {
    window.location.href = "./index.html";
}

function showTop() {
    scrollToSection("top");
}

function showDescription() {
    scrollToSection("descriptionTitle");
}

function showTakeaways() {
    scrollToSection("takeawaysTitle");
}

function showResponsibilities() {
    scrollToSection("responsibilitiesTitle");
}

function showDetails() {
    scrollToSection("detailsTitle");
}