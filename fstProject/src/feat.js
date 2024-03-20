export default `
<h1 class="title">지문 쏼라쏼라 기능</h1>
<label class="textareaLabel">한글로부터 텍스트 복붙하는 TA</label>
<textarea id="textareaId" placeholder="여따 적어라"></textarea>
<button id="tmpBtn">my btn</button>
<textarea id="res"></textarea>
`;

const func = () => {
	let contents = document.getElementById('textareaId').value.split('{콘텐츠}');
	const arr = [];

	const types = [
		{ typeStr: '{발문}', className: 'question' },
		{ typeStr: '{지문}', className: 'jimoon' },
	];

	types.forEach(({ typeStr, className }) => {
		contents = contents.map((content) => {
			const [question, rest] = content.split(typeStr);
			arr.push(`<div class="${className}">\n\t${question.trim()}\n</div>`);
			return `${rest}`;
		});
	});

	return arr.join('\n');
};

document.getElementById('root').addEventListener('click', (e) => {
	if (e.target.id !== 'tmpBtn') return;
	document.getElementById('res').textContent = func();
});
