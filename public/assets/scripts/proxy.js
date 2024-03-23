var p = document.getElementById("proxy");

var selected = p.options[p.selectedIndex].value;

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
