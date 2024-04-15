const show = document.querySelector(".show");
const pass = document.querySelector("#YourPassword");

// show hide
show.addEventListener("click", function () {
  if (pass.type === "password") {
    pass.setAttribute("type", "text");
    show.classList.add("hide");
  } else {
    pass.setAttribute("type", "password");
    show.classList.remove("hide");
  }
});

const Strength = function (password) {
  let i = 0;
  if (password.length > 6) i++;
  if (password.length >= 10) i++;
  if (/[A-Z]/.test(password)) i++;
  if (/[0-9]/.test(password)) i++;
  if (/[A-Za-z0-9]/.test(password)) i++;
  // Check for special characters
  if (/[^A-Za-z0-9]/.test(password)) i++;
  return i;
};

const container = document.querySelector(".container");

pass.addEventListener("keyup", function (e) {
  let password = this.value;
  let strength = Strength(password);

  // Clear previous strength indicators
  container.classList.remove("weak", "moderate", "strong");

  if (strength < 3 && strength > 1) {
    container.classList.add("weak");
  } else if (strength < 5 && strength >= 3) {
    container.classList.add("moderate");
  } else if (strength >= 5) {
    container.classList.add("strong");
  }
});
