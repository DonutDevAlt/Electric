var p = document.getElementById("proxy");
var selected = p.options[p.selectedIndex].value;
var lT = document.getElementById("searchType");
var lTselected = lT.options[lT.selectedIndex].value;
var cT = document.getElementById("cloakType");
var cTselected = cT.options[cT.selectedIndex].value;

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
    //breakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
    if (localStorage.getItem("ab") == "true") {
        cT.options[0].selected = true;
    }
    if (localStorage.getItem("ab") == "false") {
        cT.options[1].selected = true;
    }

    cTselected = cT.options[cT.selectedIndex].value;
    if (cTselected == "ab") {
        localStorage.setItem("ab", "true");
    }
    if (cTselected == "none") {
        localStorage.setItem("ab", "false");
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
    lTselected = lT.options[lT.selectedIndex].value;
    if (lTselected == "load") {
        localStorage.setItem("load", "true");
    }
    if (lTselected == "direct") {
        localStorage.setItem("load", "false");
    }
})

cT.addEventListener("change", function () {
    cTselected = cT.options[cT.selectedIndex].value;
    if (cTselected == "ab") {
        localStorage.setItem("ab", "true");
    }
    if (cTselected == "none") {
        localStorage.setItem("ab", "false");
    }
})
