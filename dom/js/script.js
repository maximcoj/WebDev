
let money = parseInt(prompt("Сколько у вас денег?"))

let howManyApples = parseInt(prompt("Сколько вы купили яблок?"))

let howManyBattons = parseInt(prompt("Сколько вы купили батонов?"))

let applesPrice = howManyApples * parseInt(prompt("Сколько стоит одно яблоко?"))

let battonsPrice = howManyBattons * parseInt(prompt("Сколько стоит один баттон"))

let compare = money > applesPrice + battonsPrice 

document.body.innerHTML = compare