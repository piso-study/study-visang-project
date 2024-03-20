import DOMStringJimoon from './src/feat.js';
import DOMStringArticle from './src/article.js';

const pages = {
    tmp: DOMStringJimoon,
    article: DOMStringArticle,
};

const $root = document.getElementById('root');

document.querySelector('header').addEventListener('click', (event) => {
    if (event.target.classList.contains('pageLink')) {
        const { link } = event.target.dataset;
        if (!link) return;
        $root.innerHTML = pages[link];
    }
});