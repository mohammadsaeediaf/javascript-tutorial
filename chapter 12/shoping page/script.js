let shopIcon = document.querySelector(".shop-icon"),
  overlay = document.querySelector(".overlay");
shopIcon.addEventListener("click", () => {
  overlay.classList.add("overlay-add");
});
