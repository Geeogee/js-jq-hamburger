function openHamburger() {
    $(".hamburger-menu").addClass("active");
}

function closeHamburger() {
    $(".hamburger-menu").removeClass("active");
}

function init() {
    $('.header-right i.fa-bars').click(openHamburger);
    $(".hamburger-menu a.close").click(closeHamburger);
}

init();