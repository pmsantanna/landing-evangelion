import VanillaTilt from "vanilla-tilt";

export default function tiltcardInit() {
  VanillaTilt.init(document.querySelectorAll(".extra-card-item"), {
    scale: 1,
    reverse: true,
    glare: false,
    "max-glare": 0.1,
    "reset-to-start": true,
    axis: "x y",
    max: 5,
  });

  VanillaTilt.init(document.querySelectorAll(".card-item"), {
    scale: 1.05,
    reverse: true,
    glare: true,
    "max-glare": 0.5,
    "reset-to-start": true,
    speed: 1000,
    max: 12,
  });
}
