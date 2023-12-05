let bodyy = document.querySelector(".bodyy");
const navbarr = document.querySelector(".navB");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = () => {
    navbarr.classList.add("show");
    menuBtn.classList.add("hide");
    bodyy.classList.add("disabled");
}
cancelBtn.onclick = () => {
    bodyy.classList.remove("disabled");
    navbarr.classList.remove("show");
    menuBtn.classList.remove("hide");
}
window.onscroll = () => {
    this.scrollY > 20 ? navbarr.classList.add("sticky") : navbarr.classList.remove("sticky");
}
