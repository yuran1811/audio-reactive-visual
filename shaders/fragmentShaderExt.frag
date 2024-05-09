precision mediump float;

varying float vColorMix;
varying vec2 vUv;

void main() {
  float n = vColorMix;
  vec2 uv = vUv;

  gl_FragColor =
      vec4(mix(vec3(uv, 1.0), vec3(0.0, 1.0, 1.0), 1.0 - n * n), n * n * n);
}