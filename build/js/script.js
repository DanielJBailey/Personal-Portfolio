'use strict';

// get skill section container and store it in variable
var skillsSection = document.querySelector('.skills');
// remove grayscale filter class when mouse enters
skillsSection.addEventListener('mouseenter', function () {
    var icons = document.querySelectorAll('.tech-icon');
    icons.forEach(function (icon) {
        icon.classList.remove('filtered');
    });
});
// add grayscale filter class when mouse leaves
skillsSection.addEventListener('mouseleave', function () {
    var icons = document.querySelectorAll('.tech-icon');
    icons.forEach(function (icon) {
        icon.classList.add('filtered');
    });
});

//select all projects and add event listener
var projects = document.querySelectorAll('.project');
projects.forEach(function (project) {
    //remove filtered class on hover
    project.addEventListener('mouseenter', function () {
        var children = this.children;
        children[0].classList.remove('hidden');
    });
    //add filtered class on mouse leave
    project.addEventListener('mouseleave', function () {
        var children = this.children;
        children[0].classList.add('hidden');
    });
});