"use strict"

// Задача 11.Знайти суму 5 непарних чисел, що знаходяться між заданими користувачем числами.---------------------------------------------------------------------------------
let userNumberFirst = parseInt(prompt(`Введіть перше число: `))
let userNumberTwo = parseInt(prompt(`Введіть друге число: `))
let sum = 0
let count = 0
let i = userNumberFirst + 1

while (i < Math.max(userNumberTwo, userNumberFirst )){
	if (i % 2 !== 0) {
		sum += i
		count++
	}
	if (count === 5) {
		break;
	}
	i++
}
document.write(`<div class="one__container"> <ul> <li class="list">Сума непарних чисел між ${userNumberFirst} та ${userNumberTwo} = ${sum} </li> </ul> </div> `)



