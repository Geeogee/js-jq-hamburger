// VERSION 1

function openHamburger() {
    $(".hamburger-menu").addClass("active");
}

function closeHamburger() {
    $(".hamburger-menu").removeClass("active");
}

function init() {

    $(".fa-bars").click(openHamburger);
    $(".fa-times").click(closeHamburger);
}


// // VERSION 2
// function hamburgerMenu() {
//     $(".hamburger-menu").toggleClass("active");
// }

// function init() {

//     $(".fa-bars, .fa-times").click(hamburgerMenu);
// }

init();
