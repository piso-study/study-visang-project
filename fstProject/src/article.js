export default `
    <h1 class="title">article 속성 추출</h1>

    <div class="contentsWrapper">
        <div class="innerWrapper">
            <label class="textareaLabel">-> article 태그의 속성 값들을 추출하는 기능을 제공합니다.</label>
            <textarea placeholder="추출할 article 태그를 입력하세요."></textarea>
        </div>

        <button id="extractBtn"">추출</button>

        <div class="innerWrapper">
            <label>-> 추출된 속성 값들이 이곳에 표시됩니다.</label>
            <div class="textareaResult"></div>
        </div>
    </div>
`;

const $root = document.getElementById('root');

const attrsExtract = {
    extract: () => {
        const textareaValue = document.querySelector('textarea').value;
        const tempDiv = document.createElement('div');

        tempDiv.innerHTML = textareaValue;

        const articleAttrs = tempDiv.querySelector('article');
        const attrs = articleAttrs ? Array.from(articleAttrs.attributes) : null;
        
        attrsExtract.result(attrs);
    },

    result: (res) => {
        const textareaResult = document.querySelector('.textareaResult');
        textareaResult.innerHTML = '';
        const ul = document.createElement('ul');

        res ? res.forEach((attrs) => {
            const li = document.createElement('li');
            li.style.listStyle = 'inside';
            li.textContent = `${attrs.name}: "${attrs.value}"`;
            ul.appendChild(li);
        }) 
        : alert(`입력된 값에서 article 태그를 찾을 수 없습니다!`);

        textareaResult.appendChild(ul);
    },
};

$root.addEventListener('click', (e) => {
    e.target.id === 'extractBtn' ? attrsExtract.extract() : null;
});