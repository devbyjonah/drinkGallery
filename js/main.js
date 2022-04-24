let fetchDrinks = function(count){	

	for (let i = 0; i < count; i++){

	fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')

		.then(res => res.json())
		.then(data => {

			console.log(data)
			let newImg = document.createElement('img')
			let url = data.drinks[0].strDrinkThumb

			newImg.src = url

			document.body.appendChild(newImg)
		})
		.catch(error => {
			console.log(error)
		})
	}
}

fetchDrinks(20)