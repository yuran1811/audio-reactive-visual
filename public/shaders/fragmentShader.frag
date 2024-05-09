precision mediump float;

varying vec3 vColor;
varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  vec3 color = vColor;

  float strength = distance(uv, vec2(0.5));
  strength *= 2.0;
  strength = 1.0 - strength;

  gl_FragColor = vec4(strength * color, 1.0);
}