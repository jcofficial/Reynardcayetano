const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach(n =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
const btn_download = document.getElementById("btn_download");
btn_download.addEventListener("click", () => {
  alert("Coming soon!");
});
const head = document.getElementById("head1");
const btn_hire = document.getElementById("btn_hire");
btn_hire.addEventListener("click", () => {
  alert("Coming soon!");
});
var typeEffect = new Typed(".textform", {
  strings: [
    "Freelancer",
    "Self-taught Developer",
    "Front end Developer",
    "Python Developer"
  ],
  loop: true,
  typeSpeed: 50,
  backSpeed: 40,
  startDelay: 1000,
  backDelay: 1500
});
