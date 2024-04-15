const container = document.querySelector(".container");
const signIn = document.getElementById("signIn");
const signUp = document.getElementById("signUp");

signUp.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signIn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
