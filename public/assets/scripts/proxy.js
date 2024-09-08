var p = document.getElementById("proxy");
var selected = p.options[p.selectedIndex].value;
var lT = document.getElementById("searchType");
var lTselected = lT.options[lT.selectedIndex].value;
var lTValue = lT.options[lT.selectedIndex].value;

document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("dy") == "true") {
        p.options[1].selected = true;
    }
    if (localStorage.getItem("dy") == "false") {
        p.options[0].selected = true;
    }

    selected = p.options[p.selectedIndex].value;
    if (selected == "inter") {
        localStorage.setItem("dy", "false");
    }
    if (selected == "dynamic") {
        localStorage.setItem("dy", "true");
    }
    //breakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
    if (localStorage.getItem("load") == "true") {
        lT.options[0].selected = true;
    }
    if (localStorage.getItem("load") == "false") {
        lT.options[1].selected = true;
    }

    lTselected = lT.options[lT.selectedIndex].value;
    if (lTselected == "load") {
        localStorage.setItem("load", "true");
    }
    if (lTselected == "direct") {
        localStorage.setItem("load", "false");
    }

})

p.addEventListener("change", function () {
    selected = p.options[p.selectedIndex].value;
    if (selected == "inter") {
        localStorage.setItem("dy", "false");
    }
    if (selected == "dynamic") {
        localStorage.setItem("dy", "true");
    }
})


lT.addEventListener("change", function () {
    selected = lT.options[lT.selectedIndex].value;
    if (selected == "load") {
        localStorage.setItem("load", "true");
    }
    if (selected == "direct") {
        localStorage.setItem("load", "false");
    }
})
