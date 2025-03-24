const menuBtn = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
closeBtn.addEventListener("click", () => {
  menu.classList.add("hidden");
});
