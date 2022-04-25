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

document.querySelector('button').addEventListener('click', fetchDrinks)