// get skill section container and store it in variable
let skillsSection = document.querySelector('.skills');
// remove grayscale filter class when mouse enters
skillsSection.addEventListener('mouseenter', function() {
    let icons = document.querySelectorAll('.tech-icon');
    icons.forEach((icon) => {
        icon.classList.remove('filtered');
    });
});
// add grayscale filter class when mouse leaves
skillsSection.addEventListener('mouseleave', function() {
    let icons = document.querySelectorAll('.tech-icon');
    icons.forEach((icon) => {
        icon.classList.add('filtered');
    });
});

//select all projects and add event listener
let projects = document.querySelectorAll('.project');
projects.forEach((project) => {
    //remove filtered class on hover
    project.addEventListener('mouseenter', function() {
        this.classList.remove('filtered');
    });
    //add filtered class on mouse leave
    project.addEventListener('mouseleave', function() {
        this.classList.add('filtered');
    });
});