import { gsap } from "gsap";
export { galleryAnim, meshAnimate, animate, navAnimate };

const tl = gsap.timeline({ defaults: { duration: 1 } });

function galleryAnim() {
  gsap.fromTo(
    "#galeria-img",
    { x: 800, ease: "elastic" },
    { x: 0, duration: 0.3, ease: "elastic" }
  );
}

function meshAnimate(mesh) {
  tl.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });
  tl.fromTo(".bg-text span", { opacity: 0 }, { opacity: 1 });
}

function navAnimate(nav) {
  tl.fromTo(".header", { y: "-100%" }, { y: "0%" });
}

function animate() {
  tl.play();
}
