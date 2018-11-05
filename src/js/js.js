document.addEventListener('DOMContentLoaded', function () {

const form = document.forms['searchform'];
const search = form.search;
const url = 'https://www.food2fork.com/api/search?key=35010e866f7b1df4c7ad06440cfdf955&q=';



form.addEventListener('submit', function(e) {
document.querySelector('.rcontainer').innerHTML='';

	
	let request = url + search.value;
	console.log(request);
	e.preventDefault();
	let xhr = new XMLHttpRequest();
	xhr.open('GET', request, true); //поменять на 'users.json' request
	xhr.send();

xhr.onload = () => {
	  const text = JSON.parse(xhr.responseText);
	  for(let key in text.recipes) {
	  	if(text.recipes.hasOwnProperty(key)) {
   

	  		  document.querySelector('.rcontainer').innerHTML += `<div class="col-sm-6">
	  		  <div class="row recept">
	  		  	<div class="col">
	  		  			<h2>${text.recipes[key].title}</h2>
	  		  			<p><a href="${text.recipes[key].source_url}">Source</a></p>


	  		  </div><div class="col-3"><img src="${text.recipes[key].image_url}"></div></div></div>`;

	  		}
	    }
	   

}


});



});

		
		
