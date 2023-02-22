"use strict"

// Задача 1. Вивести з використанням циклів маркований список з випадковими числами (1-100). Кількість випадкових чисел вводиться користувачем ---------------------------------------------------------------------------------
const countUser = parseInt(prompt(`Введіть кількість чисел`))


for (let i = 1; i < countUser; i++) {
	const randomNumber = Math.floor(Math.random() * 100) + 1
	document.write(`<div class="one__container"> <ul> <li class="list"> ${randomNumber} </li> </ul> </div> `)
}


