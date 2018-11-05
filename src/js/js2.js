document.addEventListener('DOMContentLoaded', function () {

const form = document.forms['searchform'];
const search = form.search;
const url = 'https://randomuser.me/api/?results=10&gender=';



form.addEventListener('submit', function(e) {
document.querySelector('.rcontainer').innerHTML='';
	
	let request = url + search.value; // 
	console.log(request);
	e.preventDefault();
	let xhr = new XMLHttpRequest();
	xhr.open('GET', request, true); //поменять на 'users.json' request
	xhr.send();

xhr.onload = () => {
		//console.log(this.responseText);
	  const text = JSON.parse(xhr.responseText);
	  
	  for(let key in text.results) {
	  		  document.querySelector('.rcontainer').innerHTML += `<div class="col-sm-6">
	  		  <div class="row recept">
	  		  	<div class="col">
	  		  			<h2>${text.results[key].gender}</h2>
	  		  			<p><a href="${text.results[key].name}">Source</a></p>


	  		  </div><div class="col-3"><img src="${text.results[key].picture.thumbnail}"></div></div></div>`;

	  }

}


});



});

		
		
