function play() {
    var buttons = document.querySelectorAll("#btn button");
    for (let i=0;i<buttons.length;i++) {
        buttons[i].style.display = "none";
    }
}

function hover(x) {
    var f = x.querySelectorAll("div");
    for (let i=0;i<f.length;i++) {
        f[i].style.visibility = "visible";
    }
}

function unhover(x) {
    var f = x.querySelectorAll("div");
    for (let i=0;i<f.length;i++) {
        f[i].style.visibility = "hidden";
    }
}
