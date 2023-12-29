var iframe;
var projects;
var art;
var career;
var skills;
var container;
function createIframe() {
    iframe = document.createElement('iframe');
    iframe.src = 'https://drive.google.com/file/d/1bzi_YybaD7U4eTfpORpG6rIc_3GAZLpO/preview';
    iframe.width = '600';
    iframe.height = '400';
    iframe.allow = "autoplay";
    iframe.id = "reel";
}

function createProjects() {
    projects = document.createElement('div');
    projects.id = "projects";
    projects.innerHTML = '';
}


function createArt() {
    art = document.createElement('div');
    art.id = "art";
    art.innerHTML = 'art';
}

function createCareer() {
    career = document.createElement('div');
    career.id = "career";
    career.innerHTML = '<section class=\"buttons\"><div class=\"button_container\"><div id=\"education-Button\" class=\"btn btn-6 kd-button\" onclick=\"showReel()\">Education</div>\<div id=\"work-Button\" class=\"btn btn-6 kd-button\" onclick=\"showProjects()\">Work</div></div></section>';
}

function createSkills() {
    skills = document.createElement('div');
    skills.id = "skills";
    skills.innerHTML = 'skills';
}

createIframe();
createProjects();
createArt();
createCareer();
createSkills();

function clearContainer(){
    if (container== null)
        container = document.getElementById('projectView');
    container.innerHTML = "";
}

function showReel(){
    clearContainer();
    container.appendChild(iframe);
}

function showProjects(){
    clearContainer();
    container.appendChild(projects);
}

function showArt(){
    clearContainer();
    container.appendChild(art);
}

function showCareer(){
    clearContainer();
    container.appendChild(career);
}

function showSkills(){
    clearContainer();
    container.appendChild(career);
}