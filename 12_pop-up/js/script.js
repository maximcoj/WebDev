
window.addEventListener('load', function() {

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

});

