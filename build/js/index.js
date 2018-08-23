window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;

    if (window.matchMedia("(orientation: portrait)").matches) {
        let skillsSection = document.querySelector('.skills');
        let skillsOffset = skillsSection.offsetTop;
        let skillsHeight = skillsSection.offsetHeight;
        if(scrollPosition < skillsOffset) {
            fadeOut();
        } else if ((scrollPosition > skillsOffset - skillsHeight) && (scrollPosition <= skillsOffset + skillsHeight/1.2)) {
            fadeIn();
        } else {
            fadeOut();
        }
     }
     
     if (window.matchMedia("(orientation: landscape)").matches) {
        let skillsSection = document.querySelector('.skills');
        let skillsOffset = skillsSection.offsetTop;
        let skillsHeight = skillsSection.offsetHeight;
        if(scrollPosition < skillsOffset) {
            fadeOut();
        } else if ((scrollPosition > skillsOffset - skillsHeight) && (scrollPosition <= skillsOffset + skillsHeight/1.2)) {
            fadeIn();
        } else {
            fadeOut();
        }
     }
    
});

function fadeIn() {
    let icons = document.querySelectorAll('.tech-icon');
    icons.forEach((icon) => {
        icon.classList.remove('filtered');
    });
}

function fadeOut() {
    let icons = document.querySelectorAll('.tech-icon');
    icons.forEach((icon) => {
        icon.classList.add('filtered');
    });
}

//select all projects and add event listener
let projects = document.querySelectorAll('.project');
projects.forEach((project) => {
//remove filtered class on hover
    project.addEventListener('mouseenter', function () {
        let children = this.children;
        children[0].classList.remove('hidden');
    });
    //add filtered class on mouse leave
    project.addEventListener('mouseleave', function () {
        let children = this.children;
        children[0].classList.add('hidden');
    });
});


