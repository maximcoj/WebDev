const body = document.querySelector("body");
const myArr = [0];

for (let i = 0; i < 100000; i++) {
	if (i % 6 == 0) {
		myArr.push(i);
	}
}
body.innerHTML = myArr;
