"use strict"

// Задача 10.Знайти суму всіх непарних чисел, що знаходяться між заданими користувачем числами---------------------------------------------------------------------------------
let userNumberFirst = parseInt(prompt(`Введіть перше число: `))
let userNumberTwo = parseInt(prompt(`Введіть друге число: `))
let sum = 0
let i = Math.min(userNumberFirst, userNumberTwo) + 1

while (i < Math.max(userNumberTwo, userNumberFirst )){
	if (i % 2 !== 0) {
		sum += i
	}
	i++
}
document.write(`<div class="one__container"> <ul> <li class="list">Сума непарних чисел між ${userNumberFirst} та ${userNumberTwo} = ${sum} </li> </ul> </div> `)




