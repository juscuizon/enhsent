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

//onload function

function imagePreload() 
{
    var load = document.getElementsByClassName('featured-image');
    for (var i = 0; i < load.length; i++)
    {
       if (!hasClass(load[i], "preload")) 
       { 
           addClass(load[i], "preload"); 
       } 
       else 
       { 
           removeClass(load[i], "preload"); 
       }
    }

    var load1 = document.getElementsByClassName('featured-image-small');
    for (var i = 0; i < load1.length; i++)
    {
        if (!hasClass(load1[i], "preload")) 
        {       
            addClass(load1[i], "preload"); 
        } 
        else 
        { 
            removeClass(load1[i], "preload"); 
        }
    }

    var load2 = document.getElementsByClassName('image')[0];
    if (!hasClass(load2, "preload")) 
    {
        addClass(load2, "preload");
    } 
    else 
    {
        removeClass(load2, "preload");
    }

    var load3 = document.getElementsByClassName('small-image')[0];
    if (!hasClass(load3, "preload")) 
    {
        addClass(load3, "preload");
    } 
    else 
    {
        removeClass(load3, "preload");
    }

}

window.onload=imagePreload;
