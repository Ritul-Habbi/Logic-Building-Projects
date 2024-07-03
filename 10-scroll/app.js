// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels



// ********** set date ************
let date = document.querySelector("#date");
date.textContent = new Date().getFullYear();



// ********** close links ************
let navToggle = document.querySelector(".nav-toggle");
let linksContaioner = document.querySelector(".links-container");
let links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
    //? Simple and Easy Method
    // linksContaioner.classList.toggle("show-links");

    //? Dynamic Method Which adds height automatically
    let containerHeight = linksContaioner.getBoundingClientRect().height;
    let linksHeight = links.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linksContaioner.style.height = `${linksHeight}px`;
    } else {
        linksContaioner.style.height = 0;
    }
});


// ********** fixed navbar ************
let navBar = document.querySelector("#nav");
let topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
    let scrollHeight = window.scrollY;
    let navHeight = navBar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navBar.classList.add("fixed-nav");
    } else {
        navBar.classList.remove("fixed-nav");
    }
    if (scrollHeight > 500) {
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
});


// ********** smooth scroll ************
// select links
let scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        // Navigate to specific spot
        let id = e.currentTarget.getAttribute("href").slice(1);
        console.log(id);
        let element = document.getElementById(id);
        console.log(element);
        // console.log(position);
        let navHeight = navBar.getBoundingClientRect().height;
        let containerHeight = linksContaioner.getBoundingClientRect().height;
        let position = element.offsetTop - navHeight;
        let fixedNav = navBar.classList.contains("fixed-nav");

        if (!fixedNav) {
            position = position - navHeight;
        }

        if (navHeight > 82) {
            position = position + containerHeight;
        }
        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContaioner.style.height = 0;
    });
});
