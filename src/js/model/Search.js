//import * as config from '../config';

export default class Search {
	constructor(query) {
		this.query = query;
		let xhr = new XMLHttpRequest();
		xhr.open('GET', this.query, true); //поменять на 'users.json' request
		xhr.send();
		xhr.onload = () => {
	  const text = JSON.parse(xhr.responseText); 
	  return text;
	}
}


}