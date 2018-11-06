//Exelent little functions to use any time when class modification is needed
function hasClass(ele, cls) {
    return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(ele, cls) {
    if (!hasClass(ele, cls)) ele.className += " " + cls;
}

function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}


//Add event from js to keep the markup clean
function init() {
    document.getElementById("mobile-navigation-button").addEventListener("click", toggleMenu);
}

//The actual fuction
function toggleMenu() {
    var ele = document.getElementsByClassName('mobile-navigation')[0];
    if (!hasClass(ele, "open")) {
        addClass(ele, "open");
    } else {
        removeClass(ele, "open");
    }
    var ele2 = document.getElementsByClassName('header-bar')[0];
    if (!hasClass(ele2, "push")) {
        addClass(ele2, "push");
    } else {
        removeClass(ele2, "push");
    }

}

//Prevent the function to run before the document is loaded
document.addEventListener('readystatechange', function() {
    if (document.readyState === "complete") {
        init();
    }
});
