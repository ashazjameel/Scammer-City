const touch = matchMedia("(hover: none)").matches;

function play() {
    var buttons = document.querySelectorAll(".btn, .title");
    for (let i=0;i<buttons.length;i++) {
        buttons[i].style.display = "none";
    }
	document.querySelectorAll(".body")[0].style.backgroundImage = "none";

	var canv = document.querySelectorAll(".canvas")[0];
	canv.style.visibility = "visible";
	var gl = canv.getContext("webgl");
	if (!gl) {
		return;
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

function createShader(gl, type, source) {
	var shader = gl.createShader(type);
	gl.shaderSource(shader, source);
	gl.compileShader(shader);
	var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
	if (success) {
		return shader;
	}
	
	console.log(gl.getShaderInfoLog(shader));
	gl.deleteShader(shader);
}

var vertexShaderSource = document.getElementById("vertex_shader");
var fragmentShaderSource = document.getElementById("fragment_shader");
