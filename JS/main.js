const menuBtn = document.querySelector(".menu-btn");
const menuBtnBurger = document.querySelector(".menu-btn__burger");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
	if (!showMenu) {
		menuBtnBurger.classList.add("open");
		showMenu = true;
	} else {
		menuBtnBurger.classList.remove("open");
		showMenu = false;
	}
}
