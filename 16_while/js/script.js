const divs = document.querySelectorAll("div");
console.log(divs);

for (let i = 0; i<divs.length; i++) {
	divs[i].style.backgroundImage = "linear-gradient("+(45+i*20)+"deg, red, orange)";
}

const body = document.querySelector("body");
const myArr = [0];

for (let i = 0; i < 100000; i++) {
	if (i % 6 == 0) {
		myArr.push(i);
	}
}
body.innerHTML = myArr;
