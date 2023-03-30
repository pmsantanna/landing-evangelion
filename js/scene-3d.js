import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";
import gsap from "gsap";
import SplineLoader from "@splinetool/loader";

//Scene
export default function () {}
const scene = new THREE.Scene();

//Sphere
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({
  color: "#00ff83",
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// model
// const loader = new FBXLoader();

// const obj = await loader.loadAsync("./models/eva-01.fbx");
let obj;
const splineLoader = new SplineLoader();

splineLoader.load(
  "https://prod.spline.design/dPbTer2DT9V3C7Ct/scene.splinecode",
  (spline) => {
    obj = spline.children[1];
    spline.ambientLight.intensity = -3;
    scene.add(spline);
    tl.fromTo(
      obj.scale,
      { z: 0, y: 0, x: 0 },
      { z: 1, y: 1, x: 1, ease: "elastic" }
    );
    console.log(obj);
  }
);

console.log(obj);

//Sizes
const sizes = {
  height: 2000,
  width: 1200,
};

//Light
const light = new THREE.PointLight(0xffffff, 8, 1500);
const lightComp = new THREE.DirectionalLight("#00FF1B", 2, 1500);
const lightCompHelper = new THREE.DirectionalLightHelper(lightComp, 5);
light.position.set(0, 350, 150);
lightComp.position.set(0, 200, 150);
lightComp.target.position.set(3, 300, 20);
scene.add(light);
scene.add(lightComp);
// scene.add(lightCompHelper);
// scene.add(obj);

console.log(light);
console.log(lightComp);

//Camera
const camera = new THREE.PerspectiveCamera(
  35,
  sizes.height / sizes.width,
  0.1,
  5000
);

const cameraPosition = {
  x: -123.68404500538178,
  y: 259.9632841958624,
  z: 178.18973968782234,
};

camera.lookAt(scene.position);

camera.position.x = cameraPosition.x;
camera.position.y = cameraPosition.y;
camera.position.z = cameraPosition.z;

scene.add(camera);

//Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGL1Renderer({ canvas, alpha: true });
renderer.setSize(sizes.height, sizes.width);
renderer.setPixelRatio(2);
renderer.render(scene, camera);

//Controls
const controls = new OrbitControls(camera, canvas);
const controlsTarget = {
  x: 9.661070268258827,
  y: 259.9632841958624,
  z: 5.398502376421289,
};
controls.target.set(0, 0, 0);
controls.enableDamping = true;
controls.enablePan = true;
controls.enableZoom = false;

controls.minPolarAngle = Math.PI / 2;
controls.maxPolarAngle = Math.PI / 2;

controls.target.x = controlsTarget.x;
controls.target.y = controlsTarget.y;
controls.target.z = controlsTarget.z;
// controls.autoRotate = true;
// controls.autoRotateSpeed = 5;

//Resize
window.addEventListener("resize", () => {
  console.log(window.innerHeight);
  // //Update Sizes
  // sizes.width = window.innerWidth;
  // sizes.height = window.innerHeight;
  //Update Camera
  camera.aspect = sizes.height / sizes.width;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.height, sizes.width);
});

const loop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
  // lightCompHelper.parent.updateMatrixWorld();
  // lightCompHelper.update();
};

loop();

//Timeline
const tl = gsap.timeline({ defaults: { duration: 2 } });

//Mouse Animation Colorrr
let mouseDown = false;
let rgb = [];
window.addEventListener("mousedown", () => (mouseDown = true));
window.addEventListener("mouseup", () => (mouseDown = false));

window.addEventListener("mousemove", (e) => {
  if (mouseDown) {
    rgb = [
      Math.round((e.pageX / sizes.width) * 255),
      Math.round((e.pageX / sizes.width) * 255),
      150,
    ];

    // console.log(camera);

    // controls.reset();
    // console.log(controls);
    //Animation
    let newColor = new THREE.Color(`rgb(${rgb.join(",")})`);
    gsap.to(mesh.material.color, {
      r: newColor.r,
      g: newColor.g,
      b: newColor.b,
    });
  }
});
