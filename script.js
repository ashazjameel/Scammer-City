const touch = matchMedia("(hover: none)").matches;
var mode = 0;
var canv = document.querySelectorAll(".canvas")[0];

function play() {
    var buttons = document.querySelectorAll(".btn, .title");
	canv.style.visibility = "visible";
    for (let i=0;i<buttons.length;i++) {
        buttons[i].style.display = "none";
    }
}

function hover(x, check) {
	if (check || (!check && !touch)) {	
        var f = x.querySelectorAll("div");
        for (let i=0;i<f.length;i++) {
            f[i].style.visibility = "visible";
        }
    }
}

function unhover(x, check) {
	if (check || (!check && !touch)) {	
        var f = x.querySelectorAll("div");
        for (let i=0;i<f.length;i++) {
            f[i].style.visibility = "hidden";
        }
    }
}
