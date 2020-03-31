let yScrollPosition;
let background = document.querySelector("#background");
let headingNav = document.querySelector(".heading__nav");
let headerBrandLink = document.querySelector(".header__brand-link");

function scrollLoop() {
    yScrollPosition = window.scrollY * 0.5;
    if(yScrollPosition >= 300){
        headingNav.style.position = "fixed";
        headingNav.style.animation = "fadeIn linear 0.5s";
        headerBrandLink.style.fontSize = "2.2rem";
    }

    if(yScrollPosition >= 0 && yScrollPosition < 20){
        headingNav.style.position = "relative";
        headingNav.style.animation = "none";
        headerBrandLink.style.fontSize = "2rem";
    }

    setTranslate(yScrollPosition*-1.5, background);
    requestAnimationFrame(scrollLoop);
}

function setTranslate(yPos, el) {
   if(yPos >= -1500){
       el.style.transform = "translate3d(" + "0" + ", " + yPos + "px, 0)";
   }

}

window.addEventListener("DOMContentLoaded", scrollLoop, false);
