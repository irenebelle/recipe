export const renderView = (parent, params) => {
	const html = 
	`<div>
	id: ${params.id}
	</div>`;
	parent.insertAdjacentHTML('afterbegin', html);
};