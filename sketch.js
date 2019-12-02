
let div = [];
let gradiant = [];
let size = 16;
const container = document.querySelector('#container');
container.setAttribute('style', '  padding: 0; width:960px; height: 960px; margin: 0; list-style: none; display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;   -webkit-flex-flow: row wrap; justify-content: space-evenly;');

for (let i = 0; i < 256; i++){
	div[i] = document.createElement('li');
	div[i].classList.add('flex-item');
	div[i].setAttribute('style', 'background: tomato;  width: ' + 960/size + 'px; height: ' + 960/size + 'px; ');

	container.appendChild(div[i]);
	div[i].addEventListener('mouseover', function( event ){
		event.target.setAttribute('style', 'background: blue; width: ' + 960/size + 'px; height: ' + 960/size + 'px;');
		//uncomment to make it make a trail instead of staying
	  	//setTimeout(function() {event.target.setAttribute('style', 'background: tomato; padding: 5px; width: 5.4%; height: 50%; margin-top: 10px; line-height: 15px; color: white; font-weight: bold; font-size: 3em; text-align: center;');}, 500);
	});	
}

function shake(){
 	size = prompt("Please enter desired size:", 16);
		container.innerHTML = "";
	for (let i = 0; i < size*size; i++){

		if (i < size * size){

			div[i] = document.createElement('li');
			div[i].classList.add('flex-item');
			container.appendChild(div[i]);
			div[i].addEventListener('mouseover', function( event ){
				event.target.setAttribute('style', 'background: blue; width: ' + 960/size + 'px; height: ' + 960/size + 'px;');
			});
			
			setTimeout(function() {div[i].setAttribute('style', 'background: tomato;  width: ' + 960/size + 'px; height: ' + 960/size + 'px; ');}, 500);
		}
	}
	
}
function hue(){
 	size = prompt("Please enter desired size:", 16);
		container.innerHTML = "";
	for (let i = 0; i < size*size; i++){
		gradiant[i] = 255;
		if (i < size * size){

			div[i] = document.createElement('li');
			div[i].classList.add('flex-item');
			container.appendChild(div[i]);
			div[i].addEventListener('mouseover', function( event ){
				event.target.setAttribute('style', 'background: rgb('+ Math.random()*gradiant[i] + ', '+ Math.random()*gradiant[i] + ', '+ Math.random()*gradiant[i] +  '); width: ' + 960/size + 'px; height: ' + 960/size + 'px;');
				gradiant[i] = gradiant[i] - Math.random() * 10;
			});
			
			setTimeout(function() {div[i].setAttribute('style', 'background: white;  width: ' + 960/size + 'px; height: ' + 960/size + 'px; ');}, 500);
		}
	}



}
