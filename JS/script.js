let openModal = document.querySelector(".open-modal");
let closeModal = document.querySelector(".close-modal");
let modal = document.querySelector(".modal-wrapper");

openModal.addEventListener("click", function () {
    modal.style.display = "flex";
});

closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});
