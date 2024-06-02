const hamburger = document.querySelector(".hamburger");
const links = document.querySelector("#links");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    links.classList.toggle("active");
}

const link = document.querySelectorAll(".link");

link.forEach(n => n.addEventListener("click", closelinks));

function closelinks() {
    hamburger.classList.remove("active");
    links.classList.remove("active");
}