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


	catName.addEventListener('click', (function(catCopy) {
		 return function() {
		 	console.log(catCopy);
		 };
	})(cat));

};