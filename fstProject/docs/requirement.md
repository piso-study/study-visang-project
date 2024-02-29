# ContentsToDOMString

> 영어 문제의 텍스트를 정해진 마크업의 DOMString으로 변환하는 기능

## 구성

-   `{콘텐츠}`: 컨텐츠의 단위

    -   `{발문}`: 발문의 텍스트를 변환
    -   `{지문}`: 문의 텍스트를 변환
        -   `{선택형}`: 선택형의 선지들을 변환
        -   `{단답형}`: 단답형의 정답을 변환

-   TODO: `연쇄형` 추가 논의 필요

## 필요 함수 및 변수

### getDOMString

-   getQuestion
    -   발문의 텍스트를 발문 마크업에 맞게 DOMString을 생성하여 반환한다.
-   getContentbody
    -   지문의 텍스트를 발문 마크업에 맞게 DOMString을 생성하여 반환한다.
-   getOptions
    -   선택형의 텍스트를 발문 마크업에 맞게 DOMString을 생성하여 반환한다.
-   getAllDOMString:
    -   변환한 모든 DOMString을 모아 반환한다.

```js

콘텐츠들:[
    ...
    //하나의 컨텐츠
    {
        question: 발문 텍스트; getQuestion,
        contentBody: 지문 텍스트; getContentbody,
        options: 선택형 선지 텍스트; getOptions,
        textBox: 단답형 선지 텍스트; getTextBox,
    }
]
```
