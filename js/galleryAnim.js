import { gsap } from "gsap";

export default function () {
  gsap.fromTo(
    "#galeria-img",
    { x: 800, ease: "elastic" },
    { x: 0, duration: 0.3, ease: "elastic" }
  );
}
