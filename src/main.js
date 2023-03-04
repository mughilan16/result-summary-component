document.querySelector("h1").innerText = "Hello world";
function changeName() {
  document.querySelector("h1").innerText = "Hello Sarjun";
}
document
  .querySelector("button")
  .addEventListener("click", changeName);
