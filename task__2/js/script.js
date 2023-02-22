"use strict"

// Задача 2. Створити 10 елементів для введення цін продуктів.----------------------------------------
let elements 

for (let elements = 1; elements <= 10; elements++) {
	document.write(`<div class="one__container"> <ul> <li> <label>Product # ${elements}<input placeholder="Ввести Product # ${elements}"></label> </li> </ul> </div> `)
}