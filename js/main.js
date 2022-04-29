/* init function initializes the default drinks on the page by looping a request to the API for a random drink */

let init = function() {

	for (let i = 0; i < 40; i++){
		fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
			.then(res => res.json())
			.then(data => {

					/* create drink cards */
					let newLink = document.createElement('a')
					let newImg = document.createElement('img')

					newLink.appendChild(newImg)

					let url = data.drinks[0].strDrinkThumb
					newImg.src = url
					newLink.href = url

					/* insert card into DOM under main element */
					document.querySelector('main').appendChild(newLink)
			})
			.catch(error => {
				console.log(error)
			})
	}
}

/* fetch drinks is called on user searching */

let fetchDrinks = function(){	

	/* assign drink variable to user input */
	let drink = document.querySelector('input').value

	/* clear main element of all children */
	document.querySelector('main').replaceChildren()

	/* search for inputted drink */
	fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
		.then(res => res.json())
		.then(data => {
			console.log(data)

			for (let i = 0; i < data.drinks.length; i++){

				/* create drink cards */
				let newLink = document.createElement('a')
				let newImg = document.createElement('img')

				newLink.appendChild(newImg)

				let url = data.drinks[i].strDrinkThumb
				newImg.src = url
				newLink.href = url

				/* insert card to DOM under main element */
				document.querySelector('main').appendChild(newLink)
			}
		})
		.catch(error => {
			console.log(error)
		})
}

/* calls init after DOM has fully loaded (doesn't wait for stylesheets) */
document.addEventListener('DOMContentLoaded', init)
document.querySelector('button').addEventListener('click', fetchDrinks)