import DOMStringJimoon from './src/feat.js';

const pages = {
	tmp: DOMStringJimoon,
};

const $root = document.getElementById('root');

document.querySelector('header').addEventListener('click', (event) => {
	if (event.target.classList.contains('pageLink')) {
		const { link } = event.target.dataset;
		if (!link) return;
		$root.innerHTML = pages[link];
	}
});
