let shopIcon = document.querySelector(".shop-icon"),
  overlay = document.querySelector(".overlay"),
  closeModal = document.querySelector(".close-modal");
shopIcon.addEventListener("click", () => {
  overlay.classList.add("overlay-add");
});

closeModal.addEventListener("click", () => {
  overlay.classList.remove("overlay-add");
});
