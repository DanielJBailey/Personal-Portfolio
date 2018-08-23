'use strict';

window.addEventListener('scroll', function () {
    var scrollPosition = window.pageYOffset;

    if (window.matchMedia("(orientation: portrait)").matches) {
        var skillsSection = document.querySelector('.skills');
        var skillsOffset = skillsSection.offsetTop;
        var skillsHeight = skillsSection.offsetHeight;
        if (scrollPosition < skillsOffset) {
            fadeOut();
        } else if (scrollPosition > skillsOffset && scrollPosition <= skillsOffset + skillsHeight) {
            fadeIn();
        } else {
            fadeOut();
        }
    }

    if (window.matchMedia("(orientation: landscape)").matches) {
        var _skillsSection = document.querySelector('.skills');
        var _skillsOffset = _skillsSection.offsetTop;
        var _skillsHeight = _skillsSection.offsetHeight;
        if (scrollPosition < _skillsOffset) {
            fadeOut();
        } else if (scrollPosition > _skillsOffset && scrollPosition <= _skillsOffset + _skillsHeight) {
            fadeIn();
        } else {
            fadeOut();
        }
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