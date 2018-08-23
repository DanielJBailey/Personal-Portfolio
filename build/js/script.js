'use strict';

// get skill section container and store it in variable
var skillsSection = document.querySelector('.skills');
var skillsOffset = skillsSection.offsetTop;
var skillsHeight = skillsSection.offsetHeight;

window.addEventListener('scroll', function () {
    var scrollPosition = window.pageYOffset;
    if (scrollPosition < skillsOffset) {
        fadeOut();
    } else if (scrollPosition > skillsOffset - skillsHeight && scrollPosition <= skillsOffset + skillsHeight / 1.2) {
        fadeIn();
    } else {
        fadeOut();
    }
});

function fadeIn() {
    var icons = document.querySelectorAll('.tech-icon');
    icons.forEach(function (icon) {
        icon.classList.remove('filtered');
    });
}

function fadeOut() {
    var icons = document.querySelectorAll('.tech-icon');
    icons.forEach(function (icon) {
        icon.classList.add('filtered');
    });
}

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