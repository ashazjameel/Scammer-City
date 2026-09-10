var vertexShaderSource;
var fragmentShaderSource;

fetch("vertex-shader.vert")
	.then(response => response.text())
	.then(text => {vertexShaderSource = text})
fetch("fragment-shader.frag")
	.then(response => response.text())
	.then(text => {fragmentShaderSource = text})	

const touch = matchMedia("(hover: none)").matches;

function play() {
    var buttons = document.querySelectorAll(".btn, .title");
    for (let i=0;i<buttons.length;i++) {
        buttons[i].style.display = "none";
    }
	document.querySelectorAll(".body")[0].style.backgroundImage = "none";
	render();
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

function createProgram(gl, vertexShader, fragmentShader) {
	var program = gl.createProgram();
	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);
	gl.linkProgram(program);
	var success = gl.getProgramParameter(program, gl.LINK_STATUS);
	if (success) {
		return program;
	}
	
	console.log(gl.getProgramInfoLog(program));
	gl.deleteProgram(program);
}

function render() {
	var canv = document.querySelectorAll(".canvas")[0];
	canv.style.visibility = "visible";
	var gl = canv.getContext("webgl");
	if (!gl) {
		return;
	}

	var vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
	var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

	var program = createProgram(gl, vertexShader, fragmentShader);
	var positionAttributeLocation = gl.getAttribLocation(program, "a_position");
	var positionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)

	var positions = [
		0,0,
		0, 0.5,
		0.7,0,
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

	gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
	gl.clearColor(0, 0, 0, 0,);
	gl.clear(gl.COLOR_BUFFER_BIT);
	gl.useProgram(program);
	gl.enableVertexAttribArray(positionAttributeLocation);

	gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

	var size = 2;
	var type = gl.FLOAT;
	var normalize = false;
	var stride = 0;
	var offset = 0;
	gl.vertexAttribPointer(
		positionAttributeLocation, size, type, normalize, stride, offset);

	var primitiveType = gl.TRIANGLES;
	var offset = 0;
	var count = 3;
	gl.drawArrays(primitiveType, offset, count);
}
