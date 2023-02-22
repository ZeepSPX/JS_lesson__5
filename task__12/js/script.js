"use strict"

// Задача 12.Ігровий автомат. Випадково вибираємо зображення у 3 позиціях. Вибір у кожній позиції вибирається як одне з чотирьох зображень. Вивести ці зображення і повідомити виграш користувача (три перших зображення 100 грн, три других – 200, три третіх – 500, три четвертих зображення – 1000грн). Використати цикли і switch (для вибору зображення за номером).---------------------------------------------------------------------------------
		let positionOne = Math.floor(1 + Math.random() * 4)
		let positonTwo = Math.floor(1 + Math.random() * 4)
		let positiomThird = Math.floor(1 + Math.random() * 4)
		let imageTemplate = ''

		for (let i = 0; i < 3; i++) {
			let indexImage
			switch (i) {
				case 0:
					indexImage = positionOne
					break
				case 1:
					indexImage = positonTwo
					break
				case 2:
					indexImage = positiomThird
					break
			}
			imageTemplate += `<li class = "item"><img src="img/${indexImage}.png"></li>`
		}

		let winnerPrize = 0
		if (positionOne === positonTwo && positionOne === positiomThird) {
			switch (positionOne) {
				case 1:
					winnerPrize = `${100} грн`
					break
				case 2:
					winnerPrize = `${200} грн`
					break
				case 3:
					winnerPrize = `${500} грн`
					break
				case 4:
					winnerPrize = `${1000} грн`
					break
			}
		} else winnerPrize = `lose`

		document.write(`<div class="one__container"> <div> Ваш виграш ${winnerPrize} </div> <ul class="list"> ${imageTemplate} </ul> </div> `)

