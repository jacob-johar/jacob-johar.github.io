$(document).ready(function() {
    const mq = window.matchMedia( "(max-width: 900px)" );
    mq.addListener(screenWidthChanged);
    screenWidthChanged(mq);

    $('#fullpage').fullpage({
        anchors: ['home', 'projects-and-demos', 'skills', 'resume', 'contact-me'],
        scrollBar: true,
        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
		recordHistory: true
    });
});

function toggleHamburger() {
    var hamburgerMenu = document.getElementById("hamburger");
    const mq = window.matchMedia( "(max-width: 900px)" );
    hamburgerMenu.classList.toggle("change");

    if (mq.matches) {
        toggleMenu();
    }
}

function toggleMenu() {
    var panel = document.getElementById("nav-links");
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
}

// media query change
function screenWidthChanged(mq) {
    var panel = document.getElementById("nav-links");
    var isBigScreen = (!mq.matches)
    if (panel.style.display === "none" && isBigScreen) {
        panel.style.display = "block";
    } else if (panel.style.display === "none" && !isBigScreen) {
        panel.style.display = "none";
    }
}