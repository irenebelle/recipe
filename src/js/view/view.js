import * as config from '../config';
export const renderView = (parent, params) => {

	let html;
	for(let key in params){
		if(params.hasOwnProperty(key)) {
			 html = 
	`<div class="col-sm-6">
	  		  <div class="row recept">
	  		  	<div class="col">
	  		  			<h2>${params[key].title}</h2>
	  		  			<p><a href="${config.simpleUrl}${params[key].recipe_id}" class="recipeUrl">View recipe</a></p>


	  		  </div><div class="col-3"><img src="${params[key].image_url}"></div></div></div>`;

	parent.insertAdjacentHTML('afterbegin', html);
		}
	
}
	
};
export const renderViewItem = (parent, params) => {
		parent.innerHTML ='';
		let item = document.createElement('div');
		item.className  = 'cols-sm-12 recipe_item';
		let html = `
			
			<h1>${params.title}</h1>
			<img src="${params.image_url}" alt="" />
			<p><b>Ingredients</b>: ${params.ingredients}</p>
		<p><a href="${params.source_url}"><b>Source</b></a></p>
	`;


	item.innerHTML =  html;
		parent.insertBefore(item, parent.firstElementChild);

};