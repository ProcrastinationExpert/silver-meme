const productsContainer = [
  document.querySelector(".slider"),
  document.querySelector(".item-card-slider"),
];
const nextBtn = [...document.querySelectorAll(".buttonnext")];
const prevBtn = [...document.querySelectorAll(".buttonprev")];

productsContainer.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;
  nextBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });
  prevBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
