document.addEventListener("DOMContentLoaded", function () {


    const hamburgerMenu = document.querySelector('.hamburgerMenu'),
        navigationMenu = document.querySelector('nav ul');

    hamburgerMenu.addEventListener('click', function () {
        if (navigationMenu.style.display === "block") {
            navigationMenu.style.display = "none";
        } else {
            navigationMenu.style.display = "block";
        }
        console.dir(hamburgerMenu);
    })


});