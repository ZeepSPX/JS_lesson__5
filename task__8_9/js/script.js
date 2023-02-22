"use strict"

// Задача 8 / 9. 8) Користувач загадує число. За 3 спроби комп’ютер намагається вгадати число користувача (використати confirm). 9) Користувач загадує число. Комп’ютер задає питання поки не вгадає число користувача (використати confirm)---------------------------------------------------------------------------------

const maxNumber = 10
const minNumber = 0
const count = 3

let message = "Загадайте число від " + minNumber + "до" + maxNumber 

let min = minNumber
let max = maxNumber
let calculation

for (let i = 0; i < count; i++) {
	calculation = Math.floor((max + min) / 2)
	message += "\n\nЗагадане число " + calculation + "?"
	
	const isCorrect = confirm(message)
	if (isCorrect) {
		alert ("Я вгадав! Ваше число - " + calculation)
		break
	} else  {
		const isGreater = confirm("Чи ваше число більше, ніж " + calculation + "?")
		if (isGreater) {
			min = calculation++
		} else {
			max = calculation--
		}
	}
}if (!isCorrect) {
	message += "Я не зміг вгадати ваше число"
}
    

