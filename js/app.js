const cat = document.getElementById('kitty');
let clickCounter = 0;

cat.addEventListener('click', () => { 
	let numberOfClicks = document.querySelector('.click-number');
	clickCounter++;
	numberOfClicks.innerHTML = clickCounter;
}, false);