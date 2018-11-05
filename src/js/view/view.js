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
	  		  			<p><a href="${config.simpleUrl}${params[key].recipe_id}">View receipte</a></p>


	  		  </div><div class="col-3"><img src="${params[key].image_url}"></div></div></div>`;

	parent.insertAdjacentHTML('afterbegin', html);
		}
	
}
	
};