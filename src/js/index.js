import * as config from './config';
import Search from './model/Search';
import {renderView} from './view/view';

document.addEventListener('DOMContentLoaded', function () {

const form = document.forms['searchform'];
const search = form.search;

form.addEventListener('submit', function(e) {
document.querySelector('.rcontainer').innerHTML='';


	
	let request = config.searchUrl + search.value;
	
	let search2 = new Search(request);

	
	e.preventDefault();
	let xhr = new XMLHttpRequest();
	xhr.open('GET', request, true); //поменять на 'users.json' request
	xhr.send();

xhr.onload = () => {
	  const text = JSON.parse(xhr.responseText);

	  for(let key in text.recipes) {
	  		  document.querySelector('.rcontainer').innerHTML += `<div class="col-sm-6">
	  		  <div class="row recept">
	  		  	<div class="col">
	  		  			<h2>${text.recipes[key].title}</h2>
	  		  			<p><a href="${config.simpleUrl}${text.recipes[key].recipe_id}">View receipte</a></p>


	  		  </div><div class="col-3"><img src="${text.recipes[key].image_url}"></div></div></div>`;

	  }

	 
	  

}


});



});

		
		
