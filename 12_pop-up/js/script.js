
// const button = document.querySelector("button");
// const paragraph = document.querySelector("p");

// // let state = paragraph.style.display;
// // console.log(state);

// let state = "none";

// button.addEventListener("click", function() {
// 	if (state == "none") {
// 		paragraph.style.display = "block";
// 		state = "block";
// 	} else{
// 		paragraph.style.display = "none";
// 		state = "none";
// 	}
// });

// window.addEventListener('load', function() {
// 	const button = document.querySelector("button");
// 	const ball = document.querySelector(".ball");
// 	const par = document.querySelector("p");

// 	button.addEventListener('click', () => {
// 		ball.style.animationPlayStat = 'running';
// 	});

// 	window.onscroll = () => {
// 		if(scrollY >= 500) {
// 			console.log('Works!');
// 		} else {
// 			console.log('Gone!');
// 		}
		
// 	}
// });

const button = document.querySelector("button"); 

button.onclick = function () {
	this.innerHTML = "Скрыть";
}

button.onclick = () => {
	console.log(this); // this будет window
}

const request = document.querySelector(".request"); 
const popup = document.querySelector(".popup"); 
const closePopup = document.querySelector(".closePopup"); 

const menu = document.querySelector(".menu"); 
const openMenu = document.querySelector(".openMenu"); 
const closeMenu = document.querySelector(".closeMenu"); 

request.onclick = () => {
	popup.style.display = "flex";
}

closePopup.onclick = () => {
	popup.style.display = "none";
}

openMenu.onclick = () => {
	menu.style.left = "0px";
}

closeMenu.onclick = () => {
	menu.style.left = "-50vw";
}


