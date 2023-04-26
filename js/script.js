
"use strict";


document.addEventListener('DOMContentLoaded', () => {

    function goToLink(selectorElement) {
        const scrollTarget = document.querySelector(selectorElement);
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        window.scrollBy({
            top: elementPosition,
            behavior: "smooth",
        });
    }

    //Burger

    function burgerClick() {
        const burger = document.querySelector('.header__burger');
        const menu = document.querySelector('.header__nav');
        const body = document.body;

        const menuMobile = document.createElement('div');
        menuMobile.classList.add('menu-mobile');

        if (burger) {
            burger.addEventListener('click', () => {
                burger.classList.toggle('_active');
                body.classList.toggle('_active');
                menuMobile.classList.toggle('_active');
            });

            if (document.documentElement.clientWidth <= 768) {
                burger.insertAdjacentElement('afterend', menuMobile);
                menuMobile.insertAdjacentElement('beforeend', menu);
            }
        }
    }
    burgerClick();

    //==============================================================


    // Animated Offer Text

    function animatedOfferText() {
        const offerWrapper = document.querySelector('.offer');
        if (offerWrapper) {
            window.addEventListener('scroll', () => {
                if (window.pageYOffset >= 100) {
                    offerWrapper.classList.add('_animated');
                }
            });
        }
    }
    animatedOfferText();

    //================================================================




    // Header Menu Link Click

    function sectionToLink(sections, link) {
        for (let index = 0; index < sections.length; index++) {
            const section = sections[index];
            if (section.dataset.section === link.dataset.link) {
                goToLink(`[data-section='${section.dataset.section}']`);
            }
        }
    }

    function clickHeaderLick() {
        const links = document.querySelectorAll('[data-link]');
        const sections = document.querySelectorAll('[data-section]');
        const burger = document.querySelector('.burger-header');
        const menuMobile = document.querySelector('.menu-mobile');
        const body = document.body;
        if (links.length > 0) {
            for (let index = 0; index < links.length; index++) {
                const link = links[index];
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    sectionToLink(sections, link);
                    if (burger.classList.contains('_active')) {
                        burger.classList.remove('_active');
                        body.classList.remove('_active');
                        menuMobile.classList.remove('_active');
                    }
                });
            }
        }
    }
    clickHeaderLick();

    //====================================================================

    // Btn Go Top

    function btnGoTop() {
        const btn = document.querySelector('.btn-top');
        const header = document.querySelector('.header');
        if (btn) {
            window.addEventListener('scroll', () => {
                if (window.pageYOffset >= 200) {
                    btn.classList.add('_active');
                }
            });
            btn.addEventListener('click', () => {
                window.scrollBy({
                    top: header.getBoundingClientRect().top,
                    behavior: "smooth",
                });
            });
        }
    }
    btnGoTop();

    //===================================================================================









});