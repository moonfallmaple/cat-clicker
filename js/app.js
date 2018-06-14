/*
let kitty = document.querySelector('.kitty');
let mitty = document.querySelector('.mitty');
let kittyCounter = 0;
let mittyCounter = 0;

kitty.addEventListener('click', () => { 
	let kittyNumber = document.querySelector('.kitty-number');
	kittyCounter++;
	kittyNumber.innerHTML = kittyCounter;
}, false);

mitty.addEventListener('click', () => { 
	let mittyNumber = document.querySelector('.mitty-number');
	mittyCounter++;
	mittyNumber.innerHTML = mittyCounter;
}, false);
*/

let cats = ['Kitty', 'Mitty', 'Finny', 'Lilly', 'Vinny', 'Zizzy'];

for (let i = 0; i < cats.length; i++) {
	let cat = cats[i];

	let catContainer = document.querySelector('.cat-list');
	let catName = document.createElement('li');
	catName.innerHTML = cat;
	catContainer.appendChild(catName);

 	let catDisplay = document.querySelector('.cat-display');
	let clickNumber = document.querySelector('.click-number');


	catName.addEventListener('click', (function(e) {
		return function(e) {
		 	let images = ['img/Kitty.jpeg', 'img/Mitty.jpeg', 'img/Finny.jpeg', 'img/Lilly.jpeg', 'img/Vinny.jpeg', 'img/Zizzy.jpeg'];
		 	let catImg = document.createElement('img');
		 	catImg.src = images[0];

		 	let catName = document.createElement('h3');
		 	catName.innerHTML = cat;

		 	catDisplay.appendChild(catImg);
		 	catDisplay.appendChild(catName);
		 	console.log(e);
		};
	})(cat));

	catDisplay.addEventListener('click', (function(e) {
		let clickCounter = 0;

		return function(e) {
		 	clickCounter++;

		 	clickNumber.innerHTML = clickCounter;		 	
		 	console.log(e);
		};
	})(cat));
};