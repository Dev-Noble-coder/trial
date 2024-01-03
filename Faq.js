const toggleButton = document.querySelector(".button");
const content = document.querySelector(".answer");

toggleButton.addEventListener("click", (event) => {
  console.log(content.classList);
  if (content.classList.contains("isNone")) {
    content.classList.remove("isNone");
  } else {
    content.classList.add("isNone");
  }
});
