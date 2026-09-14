attribute vec4 a_position;
attrivute vec4 colour;
varying vec4 v_colour;

void main() {
	gl_Position = a_position;
	v_colour = colour;
}
