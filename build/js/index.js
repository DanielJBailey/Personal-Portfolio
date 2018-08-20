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