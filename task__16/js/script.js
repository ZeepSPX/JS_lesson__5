"use strict"

// Задача 16.Користувач поступово вводить прибуток магазину за кожен день протягом N тижнів. Знайти загальну величину прибутку та вивести величину прибутку протягом кожного окремого тижня.---------------------------------------------------------------------------------
let totalIncome = 0
const daysPerWeek = 7

const numWeeks = parseInt(prompt("Введіть кількість тижнів:"))
const numDays = parseInt(prompt("Введіть кількість днів:"))

const totalDays = numWeeks * daysPerWeek + numDays

for (let i = 1; i < totalDays; i++) {
	const income = parseInt(prompt(`Введіть прибуток за день ${i}`))
	totalIncome += income

	if (i % daysPerWeek === 0) {
		const weeksNum = i / daysPerWeek
		document.write(`<div class="one__container"> Прибуток за ${weeksNum} тиждень: ${totalIncome} </div> `)
		totalIncome = 0
	}
}

document.write(`<div class="one__container"> Загальнйи прибуток: ${totalIncome} </div> `)



