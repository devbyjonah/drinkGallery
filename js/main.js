class DrinkCard{
	constructor(drinkName, drinkImage, drinkRecipe){
		this.name = drinkName
		this.image = drinkImage
		this.desc = drinkRecipe
	}

	createCard(){

		let outerContainer = document.createElement('section')
		let innerContainer = document.createElement('div')
		let frontCard = document.createElement('div')
		let backCard = document.createElement('div')
		let drinkName = document.createElement('h3')
		let drinkImage = document.createElement('img')
		let drinkRecipe = document.createElement('p')

		outerContainer.classList.add('outer')
		innerContainer.classList.add('inner')
		frontCard.classList.add('front')
		backCard.classList.add('back')

		drinkName.textContent = this.name
		drinkImage.src = this.image + '/preview'
		drinkRecipe.textContent = this.desc

		frontCard.appendChild(drinkImage)
		frontCard.appendChild(drinkName)
		backCard.appendChild(drinkRecipe)
		innerContainer.appendChild(frontCard)
		innerContainer.appendChild(backCard)
		outerContainer.appendChild(innerContainer)

		document.querySelector('main').appendChild(outerContainer)

	}
}

function init(){
	while (!searching) {
		for (let i = 0; i < 45; i++){
			fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
				.then(res => res.json())
				.then(data => {

					let curDrink = data.drinks[0]
					let newCard = new DrinkCard(curDrink.strDrink, curDrink.strDrinkThumb, curDrink.strInstructions)

					newCard.createCard()

				})
				.catch(error => {
					console.log(error)
				})
		}
		break
	}
}

let searchDrinks = function (inputStr){
	let userInput = inputStr

	document.querySelector('main').replaceChildren()

	fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`)
		.then(res => res.json())
		.then(data => {
			for (let i = 0; i < data.drinks.length; i++){

				let curDrink = data.drinks[i]
				let newCard = new DrinkCard(curDrink.strDrink, curDrink.strDrinkThumb, curDrink.strInstructions)

				newCard.createCard()

			}
		})
		.catch(error => {
			console.log(error)
		})
	searching = false
}

let searching = false

document.addEventListener('DOMContentLoaded', init)
document.querySelector('form').addEventListener('submit', function(e) {
	searchDrinks(document.querySelector('input').value)
	e.preventDefault()
}, false)
