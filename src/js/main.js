const hamBtn = document.querySelector(".ham-btn");
const mobileMenu = document.querySelector(".menu-mobile");
const menuShadow = document.querySelector(".menu_shadow");
const addVisibilityHiddenClass = (item) => {
	item.style.visibility = "hidden";
};
const addVisibilityVisibleClass = (item) => {
	item.style.visibility = "visible";
};
const openNav = () => {
	if (mobileMenu.classList.contains("active")) {
		setTimeout(addVisibilityHiddenClass(mobileMenu), 500);
	} else {
		addVisibilityVisibleClass(mobileMenu);
	}
	hamBtn.classList.toggle("active");
	mobileMenu.classList.toggle("active");
	menuShadow.classList.toggle("active");
};

hamBtn.addEventListener("click", openNav);
