let images = document.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("fullImg");
let close = document.querySelector("span");

images.forEach((img, index) => {
  img.addEventListener("click", () => {
  });
});

close.addEventListener("click", () => {
  console.log("clicked");
  wrapper.style.display = "none";
});

function openModal(pic) {
  wrapper.style.display = "flex";
  imgWrapper.src = pic;
}
