//import * as config from '../config';

export default class Search {
	constructor() {
		
}
static async getInfo(request) {
	
	const responce = await fetch(request);
	return responce.json();
}

static async getItem(request) {
	const responce = await fetch(request);
	return responce.json();
}
	

}