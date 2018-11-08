import * as config from './config';
import Search from './model/Search';
import {renderView} from './view/view';
import {renderViewItem} from './view/view';


document.addEventListener('DOMContentLoaded', function () {

const form = document.forms['searchform'];
const search = form.search;
const parent =  document.querySelector('.rcontainer');
 
form.addEventListener('submit', function(e) {
		e.preventDefault();
		let request = config.searchUrl + search.value;
	
		Search.getInfo(request).then(text => renderView(parent, text.recipes));
});

parent.addEventListener('click', function(e) {
	e.preventDefault();
	if(e.target.getAttribute('data-id')) {
		const newrequest = config.simpleUrl+e.target.dataset.id;
		Search.getItem(newrequest).then(text => renderViewItem(parent, text.recipe));
	}
})




});

		
		
