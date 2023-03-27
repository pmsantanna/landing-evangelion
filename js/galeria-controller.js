export default function () {}

const galleryControllers = document.querySelectorAll(".gallery-item");
const galleryImgSrc = document.getElementById("galeria-img");
const galleryImgElement = document.querySelector(".conteudo-galeria img");

console.log(galleryImgElement);

galleryControllers.forEach((item) => {
  item.addEventListener("click", changeImage);
});

function changeImage(event) {
  const elementId = event.target.id;
  galleryImgSrc.innerHTML = "teste";
  galleryImgSrc.src = "./img/fichas/" + event.target.id + ".png";
  if (elementId === "01") {
  } else if (elementId === "02") {
  } else if (elementId === "03") {
  }
}
