uniform float uTime;
uniform float uSize;
attribute float aScale;
attribute vec3 aColor;
attribute float phi;
attribute float random;
// attribute float random1;
varying vec2 vUv;
varying vec3 vColor;

void main() {
  float angle = phi;
  angle += uTime * random;
  angle = mod(angle, 39.3);
  float radius = 0.065 * angle;
  float rand = (random - 0.5) * 0.05 * pow(angle, .75);
  vec3 myOffset =
      vec3(radius * cos(angle) + rand,
           2.9 - 2.7 * radius + rand +
               0.1 * (random - .5) * pow(angle, .25) * sin(2.0 * uTime),
           radius * sin(angle) + rand);
  vec3 myPosition = myOffset;
  vec4 modelPosition = modelMatrix * vec4(myPosition, 1.0);

  vec4 viewPosition = viewMatrix * modelPosition;
  viewPosition.xyz += position * aScale * uSize;
  gl_Position = projectionMatrix * viewPosition;

  vColor = aColor;
  vUv = uv;
}