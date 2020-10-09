let randomURL 			= 'https://api.punkapi.com/v2/beers/random';
let getRandomBeer 		= new XMLHttpRequest();
let container 			= document.getElementById('container');
let randomBeerContainer = document.getElementById('random-beer');
let randomBtn 			= document.getElementById('random-button');
let beerTitle 			= document.getElementById('beer-title');
let beerImg 			= document.getElementById('beer-image');
let beerDesc			= document.getElementById('beer-desc');
let beerFood 			= document.getElementById('beer-food-pairing');

// Get a random beer!
getRandomBeer.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {

		response = JSON.parse(this.responseText);
		console.log(response);

		beerTitle.innerHTML = 
		'<h2>' + response[0].name +'</h2>' + '<br>';

		beerImg.innerHTML = 
		'<img src=' + response[0].image_url + '>' + '<br>';

		beerDesc.innerHTML = 
		'<h3><b>About</h3><br>' + '<p>' + response[0].description + '</p>' + '<br>';

		beerFood.innerHTML = 
		'<h3><b>Food Pairing</h3><br>' + '<p>' + response[0].food_pairing + '</p>';
	}
};

randomBtn.addEventListener('click', function(){
	getRandomBeer.open('GET', randomURL);
	getRandomBeer.send();
})


