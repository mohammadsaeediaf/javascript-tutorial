let shopIcon = document.querySelector(".shop-icon"),
  overlay = document.querySelector(".overlay"),
  closeModal = document.querySelector(".close-modal"),
  chevronUp = document.querySelector(".fa-chevron-up"),
  chevronDown = document.querySelector(".fa-chevron-down"),
  productCounter = document.querySelector(".counter"),
  deleteItem = document.querySelector(".fa-trash"),
  deleteItemSection = document.querySelector(".clear"),
  confirmbtn = document.querySelector(".confirm"),
  navModal = document.querySelector(".nav-modal");

shopIcon.addEventListener("click", () => {
  overlay.classList.add("overlay-add");
  navModal.style.transform = "translateY(100vh)";
});

closeModal.addEventListener("click", () => {
  overlay.classList.remove("overlay-add");
});

confirmbtn.addEventListener("click", () => {
  overlay.classList.remove("overlay-add");
});

let counter = 1;
chevronUp.addEventListener("click", () => {
  counter++;
  if (counter >= 1) productCounter.textContent = counter;
});

chevronDown.addEventListener("click", () => {
  counter--;
  if (counter >= 1) productCounter.textContent = counter;
});

deleteItem.addEventListener("click", () => {
  document.querySelector(".modal-product").style = "display: none";
});

deleteItemSection.addEventListener("click", () => {
  document.querySelector(".modal-product").style = "display: none";
});
