"use strict"

// Задача 15.Користувача поступово вводить показники температури протягом року. Знайти середню температуру.---------------------------------------------------------------------------------
let sum = 0
const months = 12

for (let i = 0; i < months; i++) {
	const temperature = parseFloat(prompt(`Введіть показники температури за місяць ${i + 1}`))
	sum += temperature
}

const averageTemperature = sum / months
document.write(`<div class="one__container"> Середня температура ${averageTemperature} </div> `)



