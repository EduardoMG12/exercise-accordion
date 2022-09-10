let tittle = document.querySelectorAll(".tittle");
tittle.forEach((element) => {
  element.addEventListener("click", function () {
    let info = element.parentElement.querySelector(".info");
    tittle.forEach((tittleElements) => {
      tittleElements.parentElement
        .querySelector(".info")
        .classList.remove("visible");
    });
    info.classList.toggle("visible");
  });
});
