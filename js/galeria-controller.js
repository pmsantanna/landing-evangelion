import animation from "./galleryAnim.js";

export default function () {}

const galleryControllers = document.querySelectorAll(".gallery-item");
const galleryDiv = document.querySelector(".conteudo-galeria");
const galleryChildren = [...galleryDiv.children];
const content = [...document.querySelectorAll(".conteudo-item")];
const cards = document.querySelector(".cards");

galleryControllers.forEach((item) => {
  item.addEventListener("click", changeImage);
});

cards.addEventListener("click", function (event) {
  if (event.target.tagName === "DIV") {
    changeImage(event);
  }
});

function changeImage(event) {
  let elementId;
  if (event.target.tagName === "DIV") {
    elementId = event.target.classList[1];
    elementId = elementId.charAt(elementId.length - 1);
    galleryControllers.forEach((controller, index) => {
      controller.checked = false;
    });
    galleryControllers[elementId - 1].checked = true;
  }
  if (event.target.tagName === "INPUT") {
    elementId = event.target.id;
  }
  galleryChildren.forEach((element) => {
    element.classList.remove("active");
  });
  content.forEach((element, index) => {
    element.classList.remove("active");
    if (index === elementId - 1) {
      element.classList.toggle("active");
    }
  });
  galleryChildren[elementId - 1].classList.toggle("active");
  animation();
}
