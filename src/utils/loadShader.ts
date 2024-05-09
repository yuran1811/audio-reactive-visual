import * as THREE from "three";

export const loadShader = async ({
  fragmentShaderPath,
  vertexShaderPath,
}: {
  fragmentShaderPath: string;
  vertexShaderPath: string;
}) => {
  const fileLoader = new THREE.FileLoader();

  const [fragmentShader, vertexShader] = await Promise.allSettled([
    fileLoader.loadAsync(fragmentShaderPath),
    fileLoader.loadAsync(vertexShaderPath),
  ]);

  return {
    fragmentShader: fragmentShader.status === "fulfilled" ? fragmentShader.value : "",
    vertexShader: vertexShader.status === "fulfilled" ? vertexShader.value : "",
  };
};
