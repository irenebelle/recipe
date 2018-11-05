import * as config from './config';
import Search from './model/Search';
import {renderView} from './view/view';

document.addEventListener('DOMContentLoaded', function () {

const form = document.forms['searchform'];
const search = form.search;
let parent =  document.querySelector('.rcontainer');
form.addEventListener('submit', function(e) {
	e.preventDefault();
	let request = config.searchUrl + search.value;
	
	Search.getInfo(request).then(text => renderView(parent, text.recipes));

	

});



});

		
		
