window.onscroll = function () {
    menuOnScroll()
    footerOnScroll()
};

function menuOnScroll() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementsByClassName("menu")[0].style.height = "70px";
    } else {
        document.getElementsByClassName("menu")[0].style.height = "100px";
    }
}

function footerOnScroll() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementsByClassName("menu-footer")[0].style.height = "7%";
    } else {
        document.getElementsByClassName("menu-footer")[0].style.height = "20%";
    }
}