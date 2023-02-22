"use strict"

// Задача 13.Морський бій. Комп’ютер випадково розташовує одиночний корабель на полі розміром N*M. Маючи К снарядів користувач намагається потопити корабель.---------------------------------------------------------------------------------
let N = parseInt(prompt(`Введіть кількість рядків:`))
let M = parseInt(prompt(`Введіть кількість стовпців:`))
let K = 10

const shipX = Math.floor(Math.random() * N)
const shipY = Math.floor(Math.random() * M)

alert(`Морський бій розпочався! Достуно снарядів: ${K}`)

while (K > 0) {
	const x = prompt (`введіть номер рядка (1-${N}):`) - 1
	const y = prompt (`Введіть номер стовпця (1-${M})`) - 1

	if (x === shipX && y === shipY) {
		alert(`Ви потопили корабель! Чудово капітане!`)
		break
	} else {
		alert(`Промах! Кількість снарядів: ${K}`)
		K--
	}
	if (K === 0) {
		alert(`Ви програли! Більше немає снарядів капітане!`)
	break
	}
}


