import * as config from '../config';
export const renderView = (parent, params) => {

	let html;

	for(let key in params){
		if(params.hasOwnProperty(key)) {
			 html = 
	`			
	  		  <div class="card" style="width: 18rem;">
	  		  <img src="${params[key].image_url}" class="card-img-top">
  								<div class="card-body">

	  		  					<h5 class="card-title">${params[key].title}</h5>
	  		  					<a href="#" data-id="${params[key].recipe_id}" class="recipeUrl card-link">View recipe</a>
										

	  		  </div></div>`;

	parent.insertAdjacentHTML('afterbegin', html);
		}
	
}
	
};
export const renderViewItem = (parent, params) => {
					// parent.innerHTML ='';
		if(parent.firstElementChild.classList.contains = "mb-3")	{
			parent.removeChild(parent.firstElementChild);
		}
		let item = document.createElement('div');
		item.className  = "card text-white bg-success mb-3";
		let html = `
			
			 <div class="card-body">
			 <h5 class="card-title">${params.title}</h5>
			<p class="card-text"><b>Ingredients</b>: ${params.ingredients}</p>
		<a href="${params.source_url}"  class="card-link"><b>Source</b></a>
		  <img class="card-img-bottom" src="${params.image_url}" alt="Card image cap">

		</div>
	`;


	item.innerHTML =  html;
		parent.insertBefore(item, parent.firstElementChild);

};