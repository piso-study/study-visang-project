# README.md 파일에 왜 style이 적용이 안 되었는가?

> 24.03.04

## Github의 README에서는 못 하는 것

마크업 언어 중 하나인 마크다운은 인라인 HTML을 지원한다. 그래서 인터넷 상에 존재하는 컨텐츠를 `<img>`나 `<iframe>`으로 가져올 수 있다. 그런데 Github 마크다운에서는 그게 안 된다.

GitHub-flavored Markdown 스펙을 살펴보면, 지원하지 않는 HTML 태그가 있다고 한다.

### 6.11 Disallowed Raw HTML (extension)
> GFM enables the tagfilter extension, where the following HTML tags will be filtered when rendering HTML output:<br><br> `<title>` `<textarea>` `<style>` `<xmp>` `<iframe>` `<noembed>` `<noframes>` `<script>` `<plaintext>`<br><br> […] These tags are chosen in particular as they change how HTML is interpreted in a way unique to them […], and this is usually undesireable in the context of other rendered Markdown content.<br><br> All other HTML tags are left untouched.

즉, 처음에 README.md를 꾸밀 때 사용했던 `<style>`은 사용할 수 없다는 것이다.

## 왜 사용할 수 없나?

#### XSS(Cross Site Scripting) 공격을 막기 위해서
> XSS(Cross Site Scripting)이란, 웹 어플리케이션에서 많이 나타나는 취약점의 하나로 웹사이트 관리자가 아닌 이가 웹 페이지에 악성 스크립트를 삽입할 수 있는 취약점이다. 주로 여러 사용자가 보게 되는 전자 게시판에 악성 스크립트가 담긴 글을 올리는 형태로 이루어진다. 이 취약점은 웹 어플리케이션이 사용자로부터 입력 받은 값을 제대로 검사하지 않고 사용할 경우 나타난다. 이 취약점으로 해커가 사용자의 정보(쿠키, 세션 등)를 탈취하거나, 자동으로 비정상적인 기능을 수행하게 할 수 있다. 주로 다른 웹사이트와 정보를 교환하는 식으로 작동하므로 사이트 간 스크립팅이라고 한다.

- 예시
    
    - 악의적인 사용자가 보안이 취약한 사이트를 찾는다.
    - 보안이 취약한 사이트에서 제공하는 게시판에 사용자 정보를 빼돌릴 수 있는 스크립트를 작성하여 올린다.
    - 일반 사용자는 악의적인 사용자가 작성한 게시글을 읽으면, 서버로부터 악성 스크립트가 담긴 게시글 응답을 전달받는다.
    - 일반 사용자의 브라우저에서 응답 메시지를 실행하면서 악성 스크립트가 실행된다.
    - 악성 스크립트를 통해 사용자 정보가 악의적인 사용자에게 전달된다.

이를 사전에 예방하기 위해서 `<script>`를 비롯한 특정 태그를 막아놓았다.

## 해결방안은?

> '이미지'로 만들어서 표시하면 되지만, 굳이?의 느낌이 강하다.

```js
<svg viewBox="0 0 1000 40" width="100%" height="40" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" style="fill:#00b0f0;" />
  <text x="10" y="50%" alignment-baseline="middle" fill="white"
   font-size="1.5rem" font-weight="700">Stacks</text>
</svg>
```

- assets 폴더를 만들고, 그 안에 필요한 정보 값을 가진 `svg` 태그를 작성한다.
- 저장된 이미지(`<svg>`)를 `![내용](링크)` 형식으로 불러온다.