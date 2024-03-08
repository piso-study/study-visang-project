export default `
    <h1 class="title">article 속성 추출</h1>
    <label class="textareaLabel">article 태그의 속성 값들을 추출하는 기능을 제공합니다.</label>
    <div class="wrapper">
        <textarea id="textareaId" placeholder="추출할 article 태그를 입력하세요."></textarea>
        <button>추출</button>
        <div class="textareaResult"></div>
    </div>
`;

export const attrsExtract = () => {
    const extract = () => {
        const textareaIdValue = document.getElementById('textareaId').value;
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = textareaIdValue;

        const articleElement = tempDiv.querySelector('article');

        const attributes = articleElement
            ? Array.from(articleElement.attributes)
            : [{ name: 'Error', value: '입력된 값에서 article 태그를 찾을 수 없습니다.' }];

        displayResult(attributes);
    };

    const displayResult = (result) => {
        const textareaResult = document.querySelector('.textareaResult');
        textareaResult.innerHTML = '';

        const resultList = document.createElement('ul');

        result.forEach((attribute) => {
            const listItem = document.createElement('li');
            listItem.style.listStyle = 'inside';
            listItem.textContent = `${attribute.name}: "${attribute.value}"`;
            resultList.appendChild(listItem);
        });

        textareaResult.appendChild(resultList);
    };

    const extractButton = document.querySelector('.wrapper button');
    extractButton.addEventListener('click', extract);
};