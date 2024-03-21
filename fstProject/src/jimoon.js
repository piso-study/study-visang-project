export default `
<h1 class="title">지문으로 변환</h1>

    <div class="contentsWrapper">
        <div class="innerWrapper">
            <label class="textareaLabel">-> 규칙에 따라 작성된 텍스트를 html 문법 텍스트로 변환해줍니다.</label>
            <textarea placeholder="규칙에 따라 작성된 텍스트를 작성하세요."></textarea>
        </div>

        <button id="convertBtn"">변환</button>

        <div class="innerWrapper">
            <label>-> html 문법 변환된 텍스트가 이곳에 표시됩니다.</label>
            <div class="textareaResult"></div>
        </div>
    </div>
`;

const convertToHTMLContext = () => {
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
	if (e.target.id !== 'convertBtn') return;
	document.getElementById('textareaResult').textContent = convertToHTMLContext();
});
