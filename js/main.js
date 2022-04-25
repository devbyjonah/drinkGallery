let init = function() {

	for (let i = 0; i < 20; i++){
		fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
			.then(res => res.json())
			.then(data => {

					let newLink = document.createElement('a')
					let newImg = document.createElement('img')

					newLink.appendChild(newImg)

					let url = data.drinks[0].strDrinkThumb
					newImg.src = url
					newLink.href = url

					document.querySelector('main').appendChild(newLink)
			})
			.catch(error => {
				console.log(error)
			})
	}
}

let fetchDrinks = function(){	
	let drink = document.querySelector('input').value

	document.querySelector('main').replaceChildren()


	fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
		.then(res => res.json())
		.then(data => {
			console.log(data)

			for (let i = 0; i < data.drinks.length; i++){

				let newLink = document.createElement('a')
				let newImg = document.createElement('img')

				newLink.appendChild(newImg)

				let url = data.drinks[i].strDrinkThumb
				newImg.src = url
				newLink.href = url

				document.querySelector('main').appendChild(newLink)
			}
		})
		.catch(error => {
			console.log(error)
		})
}

document.addEventListener('DOMContentLoaded', init)
document.querySelector('button').addEventListener('click', fetchDrinks)