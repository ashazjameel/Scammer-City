const touch = matchMedia("(hover: none)").matches;

function play() {
    var buttons = document.querySelectorAll(".btn, .title");
	var canv = document.querySelectorAll(".canvas")[0];
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
