"use strict"

// Задача 14.Каса. Користувачу повідомляють суму, яку йому треба сплатити. Користувач поступово вводить суму грошей до тих пір, поки суми не буде достатньо для оплати товарів (кожного разу користувачу повідомляють, яку ще суму потрібно ввести).---------------------------------------------------------------------------------
const totalProductCost = 1000
let paidAmount = 0

while (paidAmount < totalProductCost) {
	let remainingAmount = totalProductCost - paidAmount
	let userMoney = parseFloat(prompt(`Введіть суму опати по чеку ${remainingAmount} грн`)) 

	if (isNaN(userMoney) || userMoney < 0) {
		alert(`Введіть коректну суму!`)
		continue
	}

	paidAmount += userMoney

	if (paidAmount >= totalProductCost) {
		let change = paidAmount - totalProductCost
		alert(`Дякуємо за покупку! Ваша решта ${change}`)
	} else {
		alert(`Не вистачає оплати на суму ${totalProductCost - paidAmount}`)
	}
}



