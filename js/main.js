// Скрываем поиск
const hidden_search = $(".hidden-search");

$(".hidden-search").click(function () {
    section_header.classList.remove("fixed");
    section_header.style.height = "134px";
    section_header.style.position = "fixed";
    section_header.style.transition = "height 300ms ease 0s";
});


window.onscroll = function () {
    myFunction()
    toTop()
};
const section_header = document.getElementById("section_header");
const section_container = document.getElementById("section_container");
const slider = document.getElementById("slider");


// Появление меню
function myFunction() {
    if (window.pageYOffset > 1) {
        section_header.style.height = "40px";
        slider.style.paddingTop = "0px";
        section_header.classList.add("fixed");
    } else {
        section_header.style.height = "134px";
        section_header.style.transition = "height 300ms";
        slider.style.paddingTop = "134px";
        section_header.classList.remove("fixed");

    }
}

// Стрелка наверх
var button_to_top = document.getElementById("top_btn");

// Появление стрелки "наверх"
function toTop() {
    if (window.pageYOffset > 180) {
        button_to_top.classList.add("visible");
    } else {
        button_to_top.classList.remove("visible");
    }
}

// mobile-menu
$(function () {
    'use strict';

    $('[data-toggle="offcanvas"]').on('click', function () {
        $('.offcanvas-collapse').addClass('open');
        $('body').addClass('offcanvas-open');
    })
    $('[data-toggle="offcanvas-close"]').on('click', function () {
        $('.offcanvas-collapse').removeClass('open');
        $('body').removeClass('offcanvas-open');

    })
})