const galleryBox = document.querySelector(".product_gallery-box");
const galleryImages = document.querySelectorAll(".product_img");
const leftBtn = document.querySelector(".btn-left");
const rightBtn = document.querySelector(".btn-right");
const carouselSpeed = 5000;
const carouselWidth = window.screen.width;

console.log(carouselWidth);
let index = 0;
const handleCarousel = () => {
	index++;
	changeImg();
};
let startCarousel = setInterval(handleCarousel, carouselSpeed);
const changeImg = () => {
	if (index > galleryImages.length - 1) {
		index = 0;
	} else if (index < 0) {
		index = galleryImages.length - 1;
	}
	galleryBox.style.transform = `translateX(${-index * carouselWidth}px)`;
};
const handleRightArrow = () => {
	index++;
	resetInterval();
};
const handleLeftArrow = () => {
	index--;
	resetInterval();
};
const resetInterval = () => {
	changeImg();
	clearInterval(startCarousel);
	startCarousel = setInterval(handleCarousel, carouselSpeed);
};

rightBtn.addEventListener("click", handleRightArrow);
leftBtn.addEventListener("click", handleLeftArrow);

// add product to cart

const btnAdd = document.querySelector("#add");
const btnSub = document.querySelector("#sub");
const btnCount = document.querySelector(".count");

let count = 0;

const decrement = () => {
	count--;
	if (count < 0) {
		count = 0;
	}
	btnCount.value = count;
};

const increment = () => {
	count++;
	btnCount.value = count;
};
btnAdd.addEventListener("click", increment);
btnSub.addEventListener("click", decrement);

// using cart

const closeCartBtn = document.querySelector(".close");
const showCart = document.querySelector(".nav_showCart");
const cart = document.querySelector(".selected-products");
const openCart = () => {
	cart.classList.add("active");
};
const closeCart = () => {
	cart.classList.remove("active");
};

showCart.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);
