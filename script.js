const slowButton = document.querySelector(".button-slow");
const fastButton = document.querySelector(".button-fast");
const package = document.querySelector(".package");

function triggerSlow() {
  package.classList.toggle("slow");
  if (package.classList.contains("fast")) package.classList.remove("fast");
  if (package.classList.contains("slow")) {
    slowButton.textContent = "STOP!";
    fastButton.textContent = "Fast";
  } else slowButton.textContent = "Slow";
}

function triggerFast() {
  package.classList.toggle("fast");
  if (package.classList.contains("slow")) package.classList.remove("slow");
  if (package.classList.contains("fast")) {
    fastButton.textContent = "STOP!";
    slowButton.textContent = "Slow";
  } else fastButton.textContent = "Fast";
}

slowButton.addEventListener("click", triggerSlow);
fastButton.addEventListener("click", triggerFast);

console.log("Success!");
