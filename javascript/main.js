function showResume() {
    window.open("https://drive.google.com/file/d/1GIYGahTAlY9_DjG1lq9fiSAuCukIg1v8/view", '_blank');
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
    scrollToSection("top");
}

function showReel() {
    scrollToSection("reelTitle");
}

function showProjects() {
    scrollToSection("projectTitle");
}

function showArt() {
    window.open("https://theprodigaldeveloper.artstation.com/", '_blank');
}

function showEducation() {
    scrollToSection("educationTitle");
}

function showWork() {
    scrollToSection("workTitle");
}

function showSkills() {
    scrollToSection("skillTitle");
}
