function visitLink(path) {
	const getItem = JSON.parse(localStorage.getItem(path));

	if (!getItem) {
		localStorage.setItem(path, 1);

	} else {
		localStorage.setItem(path, getItem + 1);
	}
}

function viewResults() {
	const ul = document.createElement('ul');
	const containerEl = document.querySelector('#content');
	const button = document.querySelector('.btn');
	ul.setAttribute('id', 'myUl');

	if (localStorage.length === 0) {
		const myUl = document.querySelector('#myUl');
		myUl ? myUl.remove() : '';
		containerEl.insertAdjacentHTML('beforeend', 'No pages were visited');
		button.disabled = true;

	} else {
		containerEl.insertAdjacentElement('beforeend', ul);

		for (let i = 1; i < 4; i++) {

			if (localStorage.getItem(`Page${i}`)) {
				ul.insertAdjacentHTML('beforeend', `<li> You visited Page${i}  ${localStorage.getItem(`Page${i}`)} time(s)</li>`);
			}
		}
	}
	localStorage.clear();
}