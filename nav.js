let bodyy = document.querySelector(".bodyy");
const navbarr = document.querySelector(".navB");
const menuBtnn = document.querySelector(".menuB");
const cancelBtnn = document.querySelector(".cancel-btnn");
menuBtnn.onclick = () => {
    navbarr.classList.add("show");
    menuBtnn.classList.add("hide");
    bodyy.classList.add("disabled");
}
cancelBtnn.onclick = () => {
    bodyy.classList.remove("disabled");
    navbarr.classList.remove("show");
    menuBtnn.classList.remove("hide");
}
window.onscroll = () => {
    this.scrollY > 20 ? navbarr.classList.add("sticky") : navbarr.classList.remove("sticky");
}
